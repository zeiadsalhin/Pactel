<script setup>
import footer1 from '../components/Footer.vue'
import contact from '../components/Contact.vue'

</script>
<template>
  <div class="about bg-gray-900 text-gray-100 dark:text-white flex-col">
    <h1 class="text-center text-3xl font-black p-5 mb-">This is an about page</h1>
    <p class="text-lg md:text-xl text-center">If you have Any questions or inquiries, please contact us with below links
    </p>
    <div class="w-1/4 h-1 mt-10 rounded-xl mx-auto bg-gray-950"></div>
    <contact />
    <footer1 />
  </div>
</template>

