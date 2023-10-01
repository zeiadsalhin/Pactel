<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <header>
    <div id="darkmode" class="darkmode">
      <div
        class="hiddenm bg-gray-300 text-gray-600 shadow-sm p-4 flex justify-center items-center text-lg font-semibold ">
        <div class="md:flex items-center text-gray-950 sansmed text-xl  font-extrabold">
          <a href="https://pactel.info" onclick=""><img src="/logo_test.svg" width="80" height="70" class="mr-4 "
              alt="logo"></a>
          <RouterLink to="/" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">Home</RouterLink>
          <a href="#" class="flex justify-center ml-7 p-2 underline">Courses<img class="ml-2 mb-2" src="/soon.png"
              width="50" height="20"></a>
          <hr class="border-1 rounded border-gray-400 m-2 opacity-50">
          <router-link to="/about" class="px-2 font-bold hover:text-gray-400">About US</router-link>
        </div>
      </div>
      <!--mob-->
      <nav class="nav bg-gray-500 text-gray-200 md:hidden shadow-md sticky top-0 z-10 p-4 justify-between font-semibold ">
        <div class="flex justify-between">
          <a href="https://pactel.info" onclick=""> <img src="/logo_test.svg" width="60" class="justify-between"
              alt="logo"></a>
          <h1 style="font-weight: 800;" class="p-3 text-3xl text-gray-300">Courses</h1>
          <button id="menub" class="md:hidden justify-between">
            <div class="container">
              <div class="bar1">
                <hr class="border-2 bg-black border-black">
              </div>
              <div class="bar2">
                <hr class="border-2 bg-black border-black">
              </div>
              <div class="bar3">
                <hr class="border-2 bg-black border-black">
              </div>
            </div>
          </button>
        </div>
        <div class=" flex justify-center p-1">
          <div class="menu bg-gray-600 text-gray-300 transition ease-in duration-500  mt-2 px-4 bg-gray-200 " id="menu">
            <a onclick="" href="https://pactel.info" class="block mr-2 mt-4 hover:bg-gray-400 p-2">Home</a>
            <hr class="border-1 rounded border-gray-400 m-2 opacity-50 ">
            <div class="hidden transition ease-in-out duration-200" id="lang"><a href=""
                class="inline-block mr-2 hover:bg-gray-400 px-4 py-2 lang">عربي</a></div>
            <a onclick="d()" class="flex justify-center ml-7 hover:bg-gray-400 p-2 underline">Courses<img
                class="ml-2 mb-2" src="/soon.png" width="50" height="20"></a>
            <hr class="border-1 rounded border-gray-400 m-2 opacity-50">
            <RouterLink to="/about" id="menub" class="block  hover:bg-blue-500 p-2">About Us</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

