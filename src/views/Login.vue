<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const errMsg = ref()
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
    firebase
        .auth() // get the auth api
        .signInWithEmailAndPassword(email.value, password.value) // need .value because ref()
        .then((data) => {
            console.log('Successfully registered!');
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
    <div class="about p-1 md:p-10 flex-col justify-center h-full bg-gray-950 text-white reveal1">
        <img src="/logo_test.svg" class="mx-auto invert -p-10 -m-10" width="250" height="250" alt="">
        <h1 class="text-5xl text-white text-center font-bold p-2">Log in</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-900"></div>
        <form id="form" class="space-y-5 p-5 h-80 text-center mx-auto justify-center flex-col" @submit.prevent="register">
            <div class="form mt-3">
                <label class="p-3 text-xl md:mr-14">Email</label>
                <input v-model="email" class="bg-gray-200 text-black p-2 ml- rounded-md focus:outline-none md:w-1/5 "
                    type="email" required />
            </div>
            <div class="form mt-3">
                <label class="p-3 text-xl text-center md:mr-5">Password</label>
                <input v-model="password" class="bg-gray-200 text-black p-2 rounded-md focus:outline-none md:w-1/5 "
                    type="password" required />
            </div>

            <button @click="" type="submit"
                class="px-5 py-2 w-32 rounded-md hover:cursor-pointer hover:bg-gray-900 bg-gray-800">
                Log in
            </button>
        </form>
    </div>
</template>