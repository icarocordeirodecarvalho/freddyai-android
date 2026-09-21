package com.icaro.freddyai;

import android.Manifest;
import android.content.pm.PackageManager;
import android.webkit.PermissionRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebChromeClient;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private static final int PERMISSION_CODE = 100;

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

                        if (ContextCompat.checkSelfPermission(
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
}
