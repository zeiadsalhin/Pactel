<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const errMsg = ref()
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const isLoggedIn = ref(true)
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true
        router.push('/')
    } else {
        isLoggedIn.value = false
    }
})
const register = () => {
    firebase
        .auth() // get the auth api
        .signInWithEmailAndPassword(email.value, password.value) // need .value because ref()
        .then((data) => {
            console.log('Successfully login!');
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            document.querySelector("#form").reset()
            router.push('/list') // redirect to the feed
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'Invalid email'
                    break
                case 'auth/user-not-found':
                    errMsg.value = 'No account with that email was found'
                    break
                case 'auth/wrong-password':
                    errMsg.value = 'Incorrect password'
                    break
                default:
                    errMsg.value = 'Email or password was incorrect'
                    break
            }
        });
}
</script>
<template>
    <div class="about p-1 md:p-10 flex-col justify-center h-full dark:bg-gray-950 dark:text-white">
        <img src="/logo_test.svg" class="mx-auto dark:invert -p-10 -m-10 reveal" width="250" height="250" alt="pactel">
        <h1 class="text-3xl md:text-5xl dark:text-white text-center font-bold p-2 reveal">Log in</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-600 dark:bg-gray-900"></div>
        <form id="form" class="space-y-5 p-5 h-screen text-center mx-auto justify-center flex-col reveal"
            @submit.prevent="register">
            <div class="form mt-3">
                <label class="p-3 text-md md:text-xl md:mr-14 hiddenm">Email</label>
                <input placeholder="Email" v-model="email"
                    class="bg-gray-200 text-black p-1 md:p-2 ml- rounded-md focus:outline-none w-2/3 md:w-1/5 " type="email"
                    required />
            </div>
            <div class="form mt-3">
                <label class="p-3 text-md md:text-xl text-center md:mr-5 hiddenm">Password</label>
                <input placeholder="Password" v-model="password"
                    class="bg-gray-200 text-black p-1 md:p-2 rounded-md focus:outline-none w-2/3 md:w-1/5 " type="password"
                    required />
            </div>
            <p v-if="errMsg">{{ errMsg }}</p>
            <button @click="" type="submit"
                class="px-5 m-5 py-2 w-32 rounded-md hover:cursor-pointer bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-900 dark:bg-gray-800">
                Log in
            </button>
            <router-link to="/reset"><button
                    class="px-5 m-5 py-2 w-fit rounded-md hover:cursor-pointer bg-gray-100 hover:bg-gray-300 dark:hover:bg-gray-800 dark:bg-gray-900">
                    Forget password?
                </button></router-link>
            <router-link to="/signup"><button
                    class="px-5 m-5 py-2 w-fit hover:cursor-pointer mx-auto block hover:underline dark:hover:bg-gray-900">
                    return to Sign Up
                </button></router-link>
        </form>
    </div>
</template>