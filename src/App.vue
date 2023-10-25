<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { firebase } from './firebase'
const isLoggedIn = ref(true)
const router = useRouter();
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
    document.querySelector("#profilemain").src = user.photoURL || "https://pactel.info/logo_test.svg"
    document.querySelector("#displayuser").classList.remove("hidden")
    document.querySelector("#user").innerHTML = user.displayName
    document.querySelector("#displayuser1").classList.remove("hidden")
    document.querySelector("#user1").innerHTML = user.displayName
  } else {
    isLoggedIn.value = false // if we do not
    document.querySelector("#displayuser").classList.add("hidden")
    document.querySelector("#displayuser1").classList.add("hidden")
  }
  console.log(user)
})
const signOut = () => {
  router.push('/')
  firebase.auth().signOut()
}

function m() {
  const menu = document.querySelector("#menu")
  menu.classList.toggle("active")
}

function version() {
  var v = "V 1.9"
  document.querySelector(".version").innerHTML = v
  document.querySelector(".versionm").innerHTML = v
} setTimeout(version, 1)

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

function reveal() {
  for (var e = document.querySelectorAll(".reveal"), t = 0; t < e.length; t++) {
    var o,
      s = window.innerHeight;
    e[t].getBoundingClientRect().top < s - 100 && e[t].classList.add("active");
  }
} setInterval(reveal, 1500)
</script>

<template>
  <header>
    <div id="darkmode" class="darkmode">
      <div
        class="hiddenm bg-gray-300 transform transition ease-in-out duration-500 dark:bg-black text-gray-600 shadow-sm p-2 flex justify-center items-center text-lg font-semibold ">
        <div
          class="md:flex items-center text-gray-950 dark:text-gray-100 sansmed text-xl md:space-x-12 text-center  font-extrabold">
          <div class="flex-col -space-y-5">
            <a href="https://pactel.info" onclick=""><img src="/logo_test.svg" width="80" height="70" class="dark:invert "
                alt="logo"></a>
            <p class="text-sm text-center">Courses</p>
          </div>
          <RouterLink to="/" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">Home
          </RouterLink>

          <span v-if="!isLoggedIn">
            <RouterLink to="/signup" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">SignUp/Login
            </RouterLink>
          </span>
          <span v-if="isLoggedIn">
            <button @click="signOut">Logout</button>
          </span>
          <span v-if="isLoggedIn">
            <RouterLink to="/list" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">Course list
            </RouterLink>
          </span>
          <span v-if="isLoggedIn">
            <RouterLink to="/profile" onclick="" class="inline-block p-2 md:mr-2 hover:text-gray-400">Profile
            </RouterLink>
          </span>

          <router-link to="/about" class="px-2 font-bold hover:text-gray-400">About US</router-link>
          <button id="darkbtn" @click="darktoggle" class="mx-auto my-auto">
            <img id="light" src="/dark.svg" class=" -mt-5  transform transition ease-in-out duration-1000" width="25"
              height="25" alt="light">
            <img id="darkicon" src="/light.svg"
              class="hidden dark:invert -mt-5  transform transition ease-in-out duration-1000" width="25" height="25"
              alt="light">
          </button>
          <div class="absolute top-1 right-2 text-sm font-medium">
            <span class="version"></span>
          </div>
          <router-link to="/profile">
            <div id="displayuser" style="z-index: 9999999;"
              class="flex px-5 text-right text-sm font-medium absolute right-0 top-14 bg-gray-300 dark:bg-gray-950 transform transition ease-in-out duration-500 rounded-bl-full mt-5">
              <span id="user" class="my-auto"></span>
              <p class="my-auto">،مرحبا</p>
              <!-- <img src="/user.svg" class="my-auto dark:invert px-1" width="30" height="50" alt="one"> -->
              <img id="profilemain" src="/logo_test.svg" class="my-auto p-1 rounded-full" width="30" height="200"
                alt="user" loading="lazy">
            </div>
          </router-link>
        </div>
      </div>
      <!--mob-->
      <nav
        class="nav bg-gray-500 dark:bg-black text-gray-200 md:hidden shadow-md sticky top-0 z-10 p-4 justify-between font-semibold ">
        <div class="flex justify-between">
          <a href="https://pactel.info" onclick=""> <img src="/logo_test.svg" width="60" height="60"
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
            <div class="hidden transition ease-in-out duration-200" id="lang"><a href="#"
                class="inline-block mr-2 hover:bg-gray-400 px-4 py-2 lang">عربي</a></div>
            <span v-if="!isLoggedIn">
              <RouterLink to="/signup" @click="m" class="block mr-2 mt-4 hover:bg-gray-400 p-2">SignUp/Login
              </RouterLink>
            </span>
            <span v-if="isLoggedIn">
              <button @click="signOut">Logout</button>
            </span>
            <hr class="border-1 rounded border-gray-400 m-2 opacity-50 ">
            <span v-if="isLoggedIn">
              <RouterLink to="/profile" @click="m" class="block mr-2 mt-4 hover:bg-gray-400 ">Profile
              </RouterLink>
              <hr class="border-1 rounded border-gray-400 m-2 opacity-50">
            </span>
            <span v-if="isLoggedIn">
              <RouterLink to="/list" @click="m" class="block mr-2 mt-4 hover:bg-gray-400 ">Courses
              </RouterLink>
              <hr class="border-1 rounded border-gray-400 m-2 opacity-50">
            </span>

            <RouterLink to="/about" @click="m" id="menub" class="block  hover:bg-gray-400 p-2">About Us</RouterLink>
            <button id="darkbtn" @click="darktoggle" class="mx-auto my-auto mt-10 justify-center">
              <img id="light2" src="/dark.svg" class="light  -mt-5  transform transition ease-in-out duration-1000"
                width="25" height="25" alt="light">
              <img id="darkicon2" src="/light.svg"
                class="darkicon opacity-0 dark:invert -mt-5  transform transition ease-in-out duration-1000" width="25"
                height="25" alt="light">
            </button>
            <router-link to="/profile" @click="m">
              <div id="displayuser1" class="flex justify-center mx-auto text-center text-sm font-medium "><span id="user1"
                  class="my-auto"></span>
                <p class="my-auto">،مرحبا</p>
                <img src="/user.svg" class="my-auto dark:invert px-1" width="30" height="50" alt="one">
              </div>
            </router-link>
            <div class="absolute bottom-1 right-2 text-sm font-medium">
              <span class="versionm"></span>
            </div>
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
  height: 60vh;
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

.reveal {
  height: auto;
  position: relative;
  transform: translateY(40px);
  opacity: 0;
  transition: all 1s;
}

.reveal.active {
  transform: translateY(0px);
  opacity: 1;
}
</style>


