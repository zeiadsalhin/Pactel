<script setup>
import courses from '../components/CourseList.vue'
import footer1 from '../components/Footer.vue'

function barincrease() {
    const a = document.querySelector("#bar")
    a.classList.remove("w-0")
    a.classList.add("w-11/12")
} setTimeout(barincrease, 200)
</script>
<template>
    <div id="darkmode" class="darkmode">
        <div id="bar" class="-translate-x-5 h-10 w-0 transform trasition ease-in-out duration-700 bg-gray-400 -skew-x-6">
        </div>
    </div>
    <courses />
    <footer1 />
</template>