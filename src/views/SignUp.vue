<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const displayname = ref('')
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
    firebase
        .auth() // get the auth api
        .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
        .then((data) => {
            data.user.updateProfile({
                displayName: document.querySelector("#name").value
            })


            data.user.sendEmailVerification()
            console.log('Successfully registered!');
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            router.push('/list') // redirect to the feed


            document.querySelector("#form").reset()

        })
        .catch(error => {
            console.log(error.code)
            alert(error.message);
        });


}
</script>
<template>
    <div class="about p-1 md:p-10 flex-col justify-center h-full bg-gray-950 text-white reveal1">
        <img src="/logo_test.svg" class="mx-auto invert -p-10 -m-10" width="250" height="250" alt="">
        <h1 class="text-3xl md:text-5xl text-white text-center font-bold p-2">Sign Up</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-900"></div>
        <form id="form" class="space-y-5 p-5 text-center mx-auto justify-center flex-col" @submit.prevent="register">
            <div class="form flex-col">
                <label class="p-2 text-md md:text-xl text-right md:mr-14">Name</label>
                <input id="name" type="name" v-model="displayname"
                    class="bg-gray-200 text-black p-1 md:p-2 ml- rounded-md focus:outline-none md:w-1/5 " required />
            </div>

            <div class="form mt-3">
                <label class="p-3 text-md md:text-xl md:mr-14">Email</label>
                <input v-model="email" class="bg-gray-200 text-black p-1 md:p-2 ml- rounded-md focus:outline-none md:w-1/5 "
                    type="email" required />
            </div>
            <div class="form mt-3">
                <label class="p-3 text-md md:text-xl text-center md:mr-5">Password</label>
                <input v-model="password" class="bg-gray-200 text-black p-1 md:p-2 rounded-md focus:outline-none md:w-1/5 "
                    type="password" required />
            </div>

            <button @click="" type="submit"
                class="px-5 py-2 w-32 rounded-md hover:cursor-pointer hover:bg-gray-900 bg-gray-800">
                Sign Up
            </button>
        </form>
        <div class="w-1/4 h-1 m-2 rounded-xl mx-auto bg-gray-800"></div>
        <p class="m-5 text-center">Already have an account?</p>
        <RouterLink to="/login" onclick=""
            class="text-center mx-auto flex w-48 justify-center px-5 py-2 rounded-md hover:cursor-pointer hover:bg-gray-800 bg-gray-900">
            login</RouterLink>
    </div>
</template>
<script>
import { projectFirestore } from '../firebase.js'

export default {
    data() {
        return {
            name: '',
            email: '',
            // message: ''
        }
    },
    methods: {
        handleSubmit() {
            let userMessage = {
                name: this.name,
                email: this.email,
                // message: this.message
            }

            projectFirestore.collection('users').add(userMessage)
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            document.querySelector("#form").reset()
        }
    }
}
</script>