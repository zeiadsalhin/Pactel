<script setup>
import courses from '../components/CourseList.vue'
import footer1 from '../components/Footer.vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function (user) {
    if (!user) { // not logged in
        // Swal.fire({
        //     title: 'you must be logged in to view course',
        //     icon: 'warning',
        // })
        router.push('/signup')
    }
})

function barincrease() {
    const a = document.querySelector("#bar")
    a.classList.remove("w-0")
    a.classList.add("w-11/12")
} setTimeout(barincrease, 200)
</script>
<template>
    <div id="darkmode" class="darkmode">
        <div id="bar"
            class="-translate-x-5 h-10 w-0 transform ease-in-out duration-700 bg-gray-400 dark:bg-gray-900 -skew-x-6">
        </div>
        <img class="mx-auto -mb-20 w-1/2 md:w-1/5" src="/onlinecourse.svg" width="100%" height="100%" alt="course">
    </div>
    <courses />
    <footer1 />
</template>