package com.icaro.freddyai;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.webkit.WebSettings;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private static final int CAMERA_PERMISSION_CODE = 100;

    @Override
    public void onStart() {
        super.onStart();

        if (getBridge() != null && getBridge().getWebView() != null) {
            WebSettings settings = getBridge().getWebView().getSettings();

            settings.setMixedContentMode(
                WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            );
        }

        solicitarPermissaoCamera();
    }

    private void solicitarPermissaoCamera() {

        if (ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.CAMERA
        ) != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(
                this,
                new String[]{Manifest.permission.CAMERA},
                CAMERA_PERMISSION_CODE
            );
        }
    }
}
