<script setup>
import { RouterLink, RouterView } from 'vue-router'

function m() {
  const menu = document.querySelector("#menu")
  menu.classList.toggle("active")
}

function darktoggle() {
  const t = document.querySelector(".darkmode")
  const bl = document.querySelector("#light")
  const bd = document.querySelector("#darkicon")
  const bl2 = document.querySelector("#light2")
  const bd2 = document.querySelector("#darkicon2")
  t.classList.toggle("dark")
  t.classList.toggle("bg-black")
  t.classList.remove("bg-gray-100")
  bl.classList.toggle("hidden")
  bd.classList.toggle("hidden")
  bl2.classList.toggle("opacity-0")
  bd2.classList.toggle("opacity-100")
}
</script>

<template>
  <header>
    <div id="darkmode" class="darkmode">
      <div
        class="hiddenm bg-gray-300 transform transition ease-in-out duration-500 dark:bg-black text-gray-600 shadow-sm p-2 flex justify-center items-center text-lg font-semibold ">
        <div class="md:flex items-center text-gray-950 dark:text-gray-100 sansmed text-xl space-x-16   font-extrabold">
          <div class="flex-col -space-y-5">
            <a href="https://pactel.info" onclick=""><img src="/logo_test.svg" width="80" height="70" class="dark:invert "
                alt="logo"></a>
            <p class="text-sm text-center">Courses</p>
          </div>
          <RouterLink to="/" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">Home</RouterLink>
          <RouterLink to="/list" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">Course list</RouterLink>

          <router-link to="/about" class="px-2 font-bold hover:text-gray-400">About US</router-link>
          <button id="darkbtn" @click="darktoggle" class="mx-auto my-auto">
            <img id="light" src="/dark.svg" class=" -mt-5  transform transition ease-in-out duration-1000" width="25"
              height="25" alt="light">
            <img id="darkicon" src="/light.svg"
              class="hidden dark:invert -mt-5  transform transition ease-in-out duration-1000" width="25" height="25"
              alt="light">
          </button>
        </div>
      </div>
      <!--mob-->
      <nav
        class="nav bg-gray-500 dark:bg-black text-gray-200 md:hidden shadow-md sticky top-0 z-10 p-4 justify-between font-semibold ">
        <div class="flex justify-between">
          <a href="https://pactel.info" onclick=""> <img src="/logo_test.svg" width="60"
              class="justify-between dark:invert" alt="logo"></a>
          <h1 style="font-weight: 800;" class="p-3 text-3xl text-gray-300">Courses</h1>
          <button @click="m" id="menub" class="md:hidden justify-between">
            <div class="container dark:invert">
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
          <div
            class="menu notactive bg-gray-600 text-xl font-semibold transform dark:bg-black text-gray-300 transition ease-in duration-500  mt-2 px-4 bg-gray-00 "
            id="menu">
            <RouterLink to="/" @click="m"><a href="#" class="block mr-2 mt-4 hover:bg-gray-400 p-2">Home</a></RouterLink>
            <hr class="border-1 rounded border-gray-400 m-2 opacity-50 ">
            <div class="hidden transition ease-in-out duration-200" id="lang"><a href=""
                class="inline-block mr-2 hover:bg-gray-400 px-4 py-2 lang">عربي</a></div>
            <RouterLink to="/list" @click="m"><a class="flex justify-center hover:bg-gray-400 p-2 ">Courses</a>
            </RouterLink>
            <hr class="border-1 rounded border-gray-400 m-2 opacity-50">
            <RouterLink to="/about" @click="m" id="menub" class="block  hover:bg-gray-400 p-2">About Us</RouterLink>
            <button id="darkbtn" @click="darktoggle" class="mx-auto my-auto mt-10 justify-center">
              <img id="light2" src="/dark.svg" class="light  -mt-5  transform transition ease-in-out duration-1000"
                width="25" height="25" alt="light">
              <img id="darkicon2" src="/light.svg"
                class="darkicon opacity-0 dark:invert -mt-5  transform transition ease-in-out duration-1000" width="25"
                height="25" alt="light">
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style>
.notactive {
  text-align: center;
  z-index: 1;
  position: relative;
  overflow-y: hidden;
  width: 100%;
  height: 0vh;
  transition: ease-in-out 0.1s;
}

.active {
  height: 40vh;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 3px;
  background-color: #0c0c0c;
  margin: 8px 5px;
  transition: 0s;
}
</style>


