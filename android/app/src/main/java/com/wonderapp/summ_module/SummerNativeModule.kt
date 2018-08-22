package com.wonderapp.summer_module

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.BaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import java.util.*

class SummerNativeModule : BaseJavaModule() {
    override fun getName(): String {
        return "SummerNativeModule"
    }

    @ReactMethod
    fun sumTwoNums(num1: Int, num2: Int, callback: Callback) {
        var res = num1 + num2
        callback.invoke(res)
    }
}