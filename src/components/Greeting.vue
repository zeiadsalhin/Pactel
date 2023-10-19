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
    <div class="content mx-auto text-center reveal">
        <div v-if="isLoggedIn" class="options flex justify-center space-x-2 mt-">
            <h1 class="md:text-2xl my-auto">المرحلة الاولى</h1>
            <img src="/one.svg" class="my-auto w-10" width="100%" height="100%" alt="one">
        </div>


    </div>
</template>