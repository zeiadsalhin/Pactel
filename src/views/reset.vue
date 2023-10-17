<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <div class="about p-1 md:p-10 flex-col justify-center h-full bg-gray-950 text-white reveal1">
        <h1 class="text-2xl md:text-5xl text-white text-center font-bold p-2">Reset Password</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-900"></div>
        <form id="form" class="space-y-5 p-5 h-screen text-center mx-auto justify-center flex-col"
            @submit.prevent="resetpassword">
            <div class="form mt-3">
                <label class="p-3 text-md md:text-xl hidde block ">Email</label>
                <input placeholder="Enter your registered Email" id="email" v-model="user.email"
                    class="bg-gray-200 placeholder:text-sm  text-black  p-1 md:p-1.5 ml- rounded-md focus:outline-none w-2/3 md:w-1/5 "
                    type="email" required />
            </div>
            <button @click="" type="submit"
                class="px-5 py-2 md:w-1/4 mx-auto rounded-md hover:cursor-pointer hover:bg-gray-900 bg-gray-700">
                Send reset link
            </button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue'
import { firebase } from '../firebase'



export default {
    name: "forget",
    data() {
        return {
            user: {
                email: ''
            }
        }
    },
    methods: {
        resetpassword() {
            firebase.auth()
                .sendPasswordResetEmail(this.user.email)
                .then(() => {
                    console.log("password reset email sent")
                    Swal.fire({
                        title: 'Password reset link sent successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    this.$router.push('/login')
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    }
}
</script>