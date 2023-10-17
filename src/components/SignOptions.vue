<script setup>
import { firebase } from '../firebase'
import { ref, watchEffect } from 'vue'
const isLoggedIn = ref(true)
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true
    } else {
        isLoggedIn.value = false
    }
})
</script>
<template>
    <div class="content mx-auto justify-center text-center m-10">
        <span v-if="!isLoggedIn" class="options space-x-10">
            <RouterLink to="/signup"><button
                    class="border-2 border-gray-400 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-md">تسجيل</button>
            </RouterLink>
            <RouterLink to="login">
                <button
                    class=" bg-gray-500 dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-md">تسجيل
                    الدخول</button>
            </RouterLink>
        </span>
    </div>
</template>