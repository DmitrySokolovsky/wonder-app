package com.summer_module

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SummerNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "Summer"
    }

    @ReactMethod
    fun sumTwoNums(num1: Int, num2: Int, callback: Callback) {
        var res = num1 + num2
        callback.invoke(res)
    }
}