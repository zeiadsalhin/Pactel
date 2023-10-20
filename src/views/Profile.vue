<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const photoURL = ref('')
const displayname = ref('')
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const isLoggedIn = ref(true)
const verified = ref(true)
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true
        document.querySelector("#profile").src = user.photoURL || "https://pactel.info/logo_test.svg"
        document.querySelector("#username").value = user.displayName
        document.querySelector("#email").value = user.email
        if (firebase.auth().currentUser.emailVerified) {
            verified.value = true
        } else {

        }
    } else {
        isLoggedIn.value = false
        router.push('/signup')
    }
})


const register = () => {
    firebase
    var user = firebase.auth().currentUser;
    user.updateProfile({
        photoURL: photoURL,
        displayName: document.querySelector("#username").value,
        email: email,
    })
        .then((data) => {
            console.log('Updated registered!');
        })
        .catch(error => {
            console.log(error.code)
        });
    user.updateEmail(email.value).then(() => {
        console.log('Updated email!');
    }).catch((error) => {
        console.log(error.code)
        Swal.fire({
            title: error.message,
            icon: 'info',
            confirmButtonText: 'Ok'
        })
    });
    console.log(user)


    Swal.fire({
        title: 'Updated Successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then(function () {
        window.location.reload();
    })

}
function choose() {
    document.querySelector("#choose").click()
}

function editname() {
    document.querySelector("#username").removeAttribute("readonly")
    document.querySelector("#username").focus()
    document.querySelector("#username").classList.add("bg-gray-200")

}
function editemail() {
    document.querySelector("#email").removeAttribute("readonly")
    document.querySelector("#email").focus()
    document.querySelector("#email").classList.add("bg-gray-200")

}
function deleteuser() {
    Swal.fire({
        showDenyButton: true,
        title: "Are you sure?",
        icon: 'warning',
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            firebase
            var user = firebase.auth().currentUser;
            user.delete().then(function () {
                console.log("User deleted")
            }).catch(function (error) {
                console.log(error.code)

            });
        }
    })

}
</script>
<template>
    <div class="about p-1 md:p-10 flex-col justify-center h-full dark:bg-gray-950 dark:text-white reveal1">
        <div class="bg-gray-200 mt-5 w-32 h-32 mx-auto"><img id="profile" src="" class="mx-auto p-4" width="200"
                height="200" alt="user" onerror="this.style.display='none'">
        </div>
        <button @click="choose" class="mx-auto flex p-2">
            <input type="file" id="choose" name="img" accept="image/*" hidden>
            <p class="my-auto text-sm">تعديل الصورة الشخصية</p><img src="/edit.svg"
                class="p-2 dark:invert hover:cursor-pointer" width="30" height="40" alt="edit">
        </button>
        <h1 class="text-2xl md:text-4xl dark:text-white text-center font-bold p-2">ادارة الحساب</h1>

        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-600 dark:bg-gray-900"></div>
        <form id="form" class="space-y-5 p-5 h- text-center mx-auto justify-center flex-col" @submit.prevent="register">
            <div class="form flex justify-center">
                <label class="p-2 font-semibold text-md md:text-xl text-right md:mr-14">Name</label>
                <input id="username" type="name" readonly spellcheck="false"
                    class="bg-gray-100 dark:bg-gray-950 dark:text-white text-black text-center p-1 md:p-2 rounded-md  focus:outline-none w-2/3 md:w-1/6 "
                    required />
                <img @click="editname" src="/edit.svg" class="p-2 dark:invert hover:cursor-pointer" width="40" height="40"
                    alt="edit">
            </div>

            <div class="form mt-3 flex justify-center">
                <label class="p-3 font-semibold text-md md:text-xl md:mr-14">Email</label>
                <input v-model="email" id="email" type="email" readonly spellcheck="false"
                    class="bg-gray-100 dark:bg-gray-950 dark:text-white text-black text-center p-1 md:p-2 rounded-md  focus:outline-none w-2/3 md:w-1/6 "
                    required />
                <img @click="" src="/edit.svg" class="p-2 hover:cursor-pointer1 opacity-0" width="40" height="40"
                    alt="edit">
            </div>
            <div class="form mt-3">
                <label class="p-3 font-semibold text-md md:text-xl text-center md:mr-5">Email Verified:</label>
                <input v-if="verified" readonly placeholder="yes"
                    class="bg-gray-200 dark:bg-gray-300 text-black text-center p-1 md:p-2 rounded-md placeholder:text-green-700 focus:outline-none" />
                <input v-if="!verified" readonly placeholder="No"
                    class="bg-gray-200 dark:bg-gray-300 text-black text-center p-1 md:p-2 rounded-md placeholder:text-red-700 focus:outline-none" />
            </div>

            <button @click="" type="submit"
                class="px-5 py-2 w-32 rounded-md hover:cursor-pointer bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-900 dark:bg-gray-800">
                Save
            </button>


        </form>
        <button class="flex justify-cente mx-auto" @click="deleteuser">
            <p class="my-auto">حذف الحساب نهائيا</p><img id="" src="/delete.svg" class=" my-auto p-2" width="50"
                height="200" alt="user">
        </button>
    </div>
</template>