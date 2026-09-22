package com.icaro.freddyai;

import android.Manifest;
import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.provider.MediaStore;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private static final int PERMISSION_CODE = 100;
    private static final int FILE_CHOOSER_CODE = 200;

    private ValueCallback<Uri[]> filePathCallback;
    private Uri cameraImageUri;

    @Override
    public void onStart() {
        super.onStart();

        if (getBridge() != null && getBridge().getWebView() != null) {

            WebView webView = getBridge().getWebView();

            WebSettings settings = webView.getSettings();

            settings.setMixedContentMode(
                WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            );

            webView.setWebChromeClient(new WebChromeClient() {

                @Override
                public void onPermissionRequest(
                    PermissionRequest request
                ) {

                    runOnUiThread(() -> {

                        if (
                            ContextCompat.checkSelfPermission(
                                MainActivity.this,
                                Manifest.permission.CAMERA
                            ) == PackageManager.PERMISSION_GRANTED
                            &&
                            ContextCompat.checkSelfPermission(
                                MainActivity.this,
                                Manifest.permission.RECORD_AUDIO
                            ) == PackageManager.PERMISSION_GRANTED
                        ) {

                            request.grant(
                                request.getResources()
                            );

                        } else {

                            solicitarPermissoes();
                        }
                    });
                }

                @Override
                public boolean onShowFileChooser(
                    WebView webView,
                    ValueCallback<Uri[]> callback,
                    FileChooserParams params
                ) {

                    if (filePathCallback != null) {
                        filePathCallback.onReceiveValue(null);
                    }

                    filePathCallback = callback;

                    /*
                    ==========================================
                    CÂMERA
                    ==========================================
                    */

                    if (params.isCaptureEnabled()) {

                        if (
                            ContextCompat.checkSelfPermission(
                                MainActivity.this,
                                Manifest.permission.CAMERA
                            ) != PackageManager.PERMISSION_GRANTED
                        ) {

                            solicitarPermissoes();
                            filePathCallback = null;

                            return true;
                        }

                        ContentValues valores =
                            new ContentValues();

                        valores.put(
                            MediaStore.Images.Media.DISPLAY_NAME,
                            "FreddyAI_" +
                            System.currentTimeMillis() +
                            ".jpg"
                        );

                        valores.put(
                            MediaStore.Images.Media.MIME_TYPE,
                            "image/jpeg"
                        );

                        cameraImageUri =
                            getContentResolver().insert(
                                MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                                valores
                            );

                        if (cameraImageUri == null) {

                            filePathCallback.onReceiveValue(null);
                            filePathCallback = null;

                            return true;
                        }

                        Intent cameraIntent =
                            new Intent(
                                MediaStore.ACTION_IMAGE_CAPTURE
                            );

                        cameraIntent.putExtra(
                            MediaStore.EXTRA_OUTPUT,
                            cameraImageUri
                        );

                        startActivityForResult(
                            cameraIntent,
                            FILE_CHOOSER_CODE
                        );

                        return true;
                    }

                    /*
                    ==========================================
                    GALERIA
                    ==========================================
                    */

                    Intent galeriaIntent =
                        new Intent(Intent.ACTION_GET_CONTENT);

                    galeriaIntent.addCategory(
                        Intent.CATEGORY_OPENABLE
                    );

                    galeriaIntent.setType("image/*");

                    startActivityForResult(
                        Intent.createChooser(
                            galeriaIntent,
                            "Selecionar imagem"
                        ),
                        FILE_CHOOSER_CODE
                    );

                    return true;
                }
            });
        }

        solicitarPermissoes();
    }

    private void solicitarPermissoes() {

        boolean cameraNegada =
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.CAMERA
            ) != PackageManager.PERMISSION_GRANTED;

        boolean microfoneNegado =
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.RECORD_AUDIO
            ) != PackageManager.PERMISSION_GRANTED;

        if (cameraNegada || microfoneNegado) {

            ActivityCompat.requestPermissions(
                this,
                new String[] {
                    Manifest.permission.CAMERA,
                    Manifest.permission.RECORD_AUDIO
                },
                PERMISSION_CODE
            );
        }
    }

    @Override
    protected void onActivityResult(
        int requestCode,
        int resultCode,
        Intent data
    ) {

        super.onActivityResult(
            requestCode,
            resultCode,
            data
        );

        if (requestCode != FILE_CHOOSER_CODE) {
            return;
        }

        if (filePathCallback == null) {
            return;
        }

        Uri[] resultados = null;

        /*
        ==========================================
        FOTO TIRADA PELA CÂMERA
        ==========================================
        */

        if (cameraImageUri != null) {

            if (resultCode == Activity.RESULT_OK) {

                resultados = new Uri[] {
                    cameraImageUri
                };

            } else {

                getContentResolver().delete(
                    cameraImageUri,
                    null,
                    null
                );
            }

            cameraImageUri = null;
        }

        /*
        ==========================================
        IMAGEM ESCOLHIDA NA GALERIA
        ==========================================
        */

        else if (
            resultCode == Activity.RESULT_OK &&
            data != null &&
            data.getData() != null
        ) {

            resultados = new Uri[] {
                data.getData()
            };
        }

        filePathCallback.onReceiveValue(
            resultados
        );

        filePathCallback = null;
    }
}
