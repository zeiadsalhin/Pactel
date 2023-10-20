<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const displayname = ref('')
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const isLoggedIn = ref(true)
const verified = ref(true)
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true
        document.querySelector("#username").value = user.displayName
        document.querySelector("#email").value = user.email
        if (firebase.auth().currentUser.emailVerified) {
            verified.value = true
        } else {

        }
    } else {
        isLoggedIn.value = false
        router.push('/signup')
    }
})
function s() {
    Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
    router.push('/')
}
</script>
<template>
    <div class="about p-1 md:p-10 flex-col justify-center h-full dark:bg-gray-950 dark:text-white reveal1">
        <img src="/usermain.svg" class="mx-auto p-4" width="100" height="100" alt="user">
        <h1 class="text-2xl md:text-4xl dark:text-white text-center font-bold p-2">ادارة الحساب</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-600 dark:bg-gray-900"></div>
        <form id="form" class="space-y-5 p-5 h- text-center mx-auto justify-center flex-col" @submit.prevent="register">
            <div class="form flex-col">
                <label class="p-2 font-semibold text-md md:text-xl text-right md:mr-14">Name</label>
                <input id="username" type="name" readonly
                    class="bg-gray-100 dark:bg-gray-950 dark:text-white text-black text-center p-1 md:p-2 rounded-md  focus:outline-none w-2/3 md:w-1/6 "
                    required />
            </div>

            <div class="form mt-3">
                <label class="p-3 font-semibold text-md md:text-xl md:mr-14">Email</label>
                <input id="email" readonly
                    class="bg-gray-100 dark:bg-gray-950 dark:text-white text-black text-center p-1 md:p-2 rounded-md focus:outline-none w-2/3 md:w-1/6 "
                    type="email" required />
            </div>
            <div class="form mt-3">
                <label class="p-3 font-semibold text-md md:text-xl text-center md:mr-5">Email Verified:</label>
                <input v-if="verified" readonly placeholder="yes"
                    class="bg-gray-200 dark:bg-gray-300 text-black text-center p-1 md:p-2 rounded-md placeholder:text-green-700 focus:outline-none" />
                <input v-if="!verified" readonly placeholder="No"
                    class="bg-gray-200 dark:bg-gray-300 text-black text-center p-1 md:p-2 rounded-md placeholder:text-red-700 focus:outline-none" />
            </div>

            <button @click="s" type="submit"
                class="px-5 py-2 w-32 rounded-md hover:cursor-pointer bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-900 dark:bg-gray-800">
                Save
            </button>


        </form>
    </div>
</template>