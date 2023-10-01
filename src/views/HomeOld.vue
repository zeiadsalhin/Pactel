<script setup>
import footer1 from '../components/Footer.vue'
</script>

<template>
  <main>
    <div class="bg-gray-100 text-gray-900">

      <div class="flex-col text-center justify-center p-4">
        <p class="text-center text-gray-800">Progress..</p>
        <span id="percentage" class="mx-2">90%</span>

        <progress id="progress" class="progress" max="100" value="90"></progress>
      </div>




      <img class="mx-auto justify-center p-4" src="/website-under-construction-vector-21727880.jpg">

    </div>
    <footer1 />
  </main>
</template>
