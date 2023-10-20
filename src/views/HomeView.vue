<script setup>
import hometop from '../components/Home.vue'
import footer1 from '../components/Footer.vue'
import courses from '../components/CourseList.vue'
import sign from '../components/SignOptions.vue'
</script>
<template>
    <div class="dark:bg-black dark:text-white">
        <div class="flex justify-end">
            <p class="flex space-x-2 text-sm md:text-lg">ادعو لاخوانكم في فلسطين <img src="/palestine.svg"
                    class="my-auto px-1" width="30" height="50" alt="israel"></p>
        </div>
        <hometop />
        <sign />
        <courses />
        <footer1 />
    </div>
</template>