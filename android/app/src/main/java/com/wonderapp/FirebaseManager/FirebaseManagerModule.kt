package com.wonderapp.FirebaseManager

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import java.util.*

class FirebaseManagerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    var reactNativeContext = reactContext
    override fun getName(): String {
        return "FirebaseManager"
    }

    @ReactMethod
    fun showContext(callback: Callback) {
        callback.invoke(reactNativeContext)
    }
}