<script setup>
import { firebase } from '../firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function (user) {
    if (!user) { // not logged in
        Swal.fire({
            title: 'you must be logged in to view course',
            icon: 'warning',
        })
        router.push('/')
    }
})
function form() {
    if (localStorage.getItem("form") === "inject") {
        document.querySelector("#form").src = "https://docs.google.com/forms/d/e/1FAIpQLSe546I-JsIXezcx77T-iCJoZIW6eNMlxikgeLxsOg-1nzBfOg/viewform?embedded=true"
        document.querySelector(".text").classList.add("hidden")
        clearInterval(check)
    }
}
const check = setInterval(form, 1)
</script>
<template>
    <div class="content md:p-10 flex-col justify-center mx-auto">
        <img class="p-2 mx-auto dark:invert w-auto md:w-2/3" src="/pactel_logo.webp" width="100%" height="100%"
            alt="pactel">
        <iframe id="form" class="mx-auto w-full dark:invert absolute" allowfullscreen title="quiz" src="" width="100%"
            height="100%" frameborder="0" marginheight="0" marginwidth="0">
            <h1 class="text-4xl">Loading</h1>
        </iframe>
        <h1 class="text">You don't have access to the Quiz, please complete all the courses</h1>
    </div>
</template>