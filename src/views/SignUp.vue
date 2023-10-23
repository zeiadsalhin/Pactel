<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const displayname = ref('')
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
            router.push('/list')
            document.querySelector("#form").reset()

        })
        .catch(error => {
            console.log(error.code)
            Swal.fire({
                title: error.message,
                icon: 'info',
                confirmButtonText: 'Ok'
            })
        });


}
function checkname() {
    const c = document.querySelector("#correctname")
    const w = document.querySelector("#wrongname")
    const input = document.querySelector("#name")
    const b = document.querySelector("#submitbtn")

    if (input.value.length > 25) {
        w.classList.remove("hidden")
        c.classList.add("hidden")
        input.classList.add("focus:border-red-500")
        b.setAttribute("disabled", "true")
    } else {
        if (input.value.length > 1) {
            c.classList.remove("hidden")
            w.classList.add("hidden")
            input.classList.remove("focus:border-red-500")
            input.classList.add("focus:border-green-500")
            b.removeAttribute("disabled", "true")
        } else {
            c.classList.add("hidden")
            w.classList.add("hidden")
            input.classList.remove("focus:border-red-500")
            input.classList.remove("focus:border-green-500")
        }

    }
}
function checkemail() {
    const c = document.querySelector("#correctemail")
    const w = document.querySelector("#wrongemail")
    const input = document.querySelector("#email")
    const b = document.querySelector("#submitbtn")

    if (input.value.length > 40) {
        w.classList.remove("hidden")
        c.classList.add("hidden")
        input.classList.add("focus:border-red-500")
    } else {
        if (input.value.includes("@") && input.value.includes(".com")) {
            c.classList.remove("hidden")
            w.classList.add("hidden")
            input.classList.remove("focus:border-red-500")
            input.classList.add("focus:border-green-500")
            b.removeAttribute("disabled", "true")
        } else {
            c.classList.add("hidden")
            w.classList.remove("hidden")
            input.classList.add("focus:border-red-500")
            b.setAttribute("disabled", "true")
        }

    }
}
function checkpassword() {
    const c = document.querySelector("#correctpassword")
    const w = document.querySelector("#wrongpassword")
    const input = document.querySelector("#password")
    const b = document.querySelector("#submitbtn")

    if (input.value.length < 6) {
        w.classList.remove("hidden")
        c.classList.add("hidden")
        input.classList.add("focus:border-red-500")
    } else {
        if (input.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/)) {
            c.classList.remove("hidden")
            w.classList.add("hidden")
            input.classList.remove("focus:border-red-500")
            input.classList.add("focus:border-green-500")
            b.removeAttribute("disabled", "true")
        } else {
            c.classList.add("hidden")
            w.classList.remove("hidden")
            input.classList.add("focus:border-red-500")
            b.setAttribute("disabled", "true")
        }

    }
}
</script>
<template>
    <div class="about p-1 md:p-10 flex-col justify-center h-full dark:bg-gray-950 dark:text-white reveal1">
        <img src="/logo_test.svg" class="mx-auto dark:invert -p-10 -m-10" width="250" height="250" alt="logo">
        <h1 class="text-3xl md:text-5xl dark:text-white text-center font-bold p-2">Sign Up</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-600 dark:bg-gray-900"></div>
        <form id="form" class="p-5 text-center mx-auto justify-center flex-col" @submit.prevent="register">
            <div class="form flex justify-center">
                <label class="p-2 text-md md:text-xl text-right md:mr-14">Name</label>
                <input @change="changed" id="name" type="name" v-model="displayname" @input="checkname" spellcheck="false"
                    class="bg-gray-200 dark:bg-gray-300 text-black h-fit my-auto p-1 md:p-2 rounded-md focus:outline-none border-2 focus:border-gray-400 w-2/3 md:w-1/5 "
                    required /><img id="correctname" src="/correct.svg" class="hidden p-1" width="30" height="50"
                    alt="correct">
                <img id="wrongname" src="/wrong.svg" class="hidden p-1" width="30" height="50" alt="wrong">
            </div>

            <div class="form mt-3 flex justify-center">
                <label class="p-3 text-md md:text-xl md:mr-14">Email</label>
                <input id="email" v-model="email" @input="checkemail" spellcheck="false"
                    class="bg-gray-200 dark:bg-gray-300 text-black h-fit my-auto p-1 md:p-2 rounded-md focus:outline-none border-2 focus:border-gray-400 w-2/3 md:w-1/5 "
                    type="email" required /><img id="correctemail" src="/correct.svg" class="hidden p-1" width="30"
                    height="50" alt="correct">
                <img id="wrongemail" src="/wrong.svg" class="hidden p-1" width="30" height="50" alt="wrong">
            </div>
            <div class="form mt-3 flex justify-center">
                <label class="p-3 text-md md:text-xl text-center md:mr-5">Password</label>
                <input id="password" v-model="password" @input="checkpassword"
                    class="bg-gray-200 dark:bg-gray-300 text-black h-fit my-auto p-1 md:p-2 rounded-md focus:outline-none border-2 focus:border-gray-400 w-2/3 md:w-1/5 "
                    type="password" required />
                <img id="correctpassword" src="/correct.svg" class="hidden p-1" width="30" height="50" alt="correct">
                <img id="wrongpassword" src="/wrong.svg" class="hidden p-1" width="30" height="50" alt="wrong">
            </div><span class="block text-sm opacity-40 p-2 -mt-2 mb-5">Ex: 1234aA@</span>

            <button id="submitbtn" @click="" type="submit"
                class="px-5 py-2 w-32 rounded-md hover:cursor-pointer bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-900 dark:bg-gray-800">
                Sign Up
            </button>

            <div class="">
                <div class="relative md:w-1/4 h-1 m-5 rounded-xl mx-auto bg-gray-800">
                    <h1 style="left: 0; right: 0; margin-left: auto; margin-right: auto; width: 50px"
                        class="absolute  -top-4 bg-white dark:bg-gray-950 px-2  text-2xl">or</h1>
                </div>
            </div>
            <p class="m-5 text-center">Already have an account?</p>
            <RouterLink to="/login" onclick=""
                class="text-center mx-auto flex w-48 justify-center px-5 py-2 rounded-md hover:cursor-pointer bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-800 dark:bg-gray-900">
                login</RouterLink>
        </form>
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
    },

}
</script>