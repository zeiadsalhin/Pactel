<script setup>
import { ref } from 'vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router' // import router
const storage = firebase.storage();
const photoURL = ref('')
const displayname = ref('')
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const isLoggedIn = ref(true)
const verified = ref('')
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true
        document.querySelector("#profile").src = user.photoURL || "https://pactel.info/logo_test.svg"
        document.querySelector("#username").value = user.displayName
        document.querySelector("#email").value = user.email
        if (firebase.auth().currentUser.emailVerified) {
            document.querySelector("#verified").classList.remove("hidden")
            document.querySelector("#sendverification").classList.add("hidden")
        } else {
            document.querySelector("#notverified").classList.remove("hidden")
        }
    } else {
        isLoggedIn.value = false
        router.push('/signup')
    }
})

const sendverfication = function sendverfication() {
    firebase.auth().currentUser.sendEmailVerification()
    console.log("email verification sent")
    Swal.fire({
        title: 'Check your Email',
        icon: 'info',
        confirmButtonText: 'Ok'
    })
}

const register = () => {
    firebase
    var user = firebase.auth().currentUser;
    const storage = firebase.storage();
    const file = document.querySelector("#choose").files[0];
    user.updateProfile({
        displayName: document.querySelector("#username").value,
        email: email,
    })
        .then((data) => {
            console.log('Updated registered!');
            Swal.fire({
                title: 'Updated Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(function () {
                window.location.reload();
            })
        })
        .catch(error => {
            console.log(error.code)
            Swal.fire({
                title: error.code,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });
    console.log(user)
}
function choose() {
    document.querySelector("#choose").click()
    document.querySelector("#edit").classList.remove("hidden")
}
const update = () => {
    firebase
    var user = firebase.auth().currentUser;
    const storage = firebase.storage();
    const file = document.querySelector("#choose").files[0];
    storage.ref('users/' + user.uid + '/profile.jpg').put(file).then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
        console.log(url)
        user.updateProfile({
            photoURL: url,
        })
    }).then(function () {
        console.log("picture uploaded")
    }).catch(error => {
        console.log(error.code)
    })

    Swal.fire({
        title: 'Updated Successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then(function () {
        window.location.reload();
    })

}

function imageload() {
    document.querySelector("#loader").classList.remove("animate-pulse")
    document.querySelector("#profile").classList.remove("opacity-0")
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
    document.querySelector("#editemail").classList.add("hidden")
    document.querySelector("#updatemailb").classList.remove("hidden")

}
const updatemail = () => {
    firebase
    var user = firebase.auth().currentUser;
    user.verifyBeforeUpdateEmail(email.value).then(() => {
        console.log('Updated email!');
        Swal.fire({
            title: "Success, Please verify your new email and re-login",
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        document.querySelector("#updatemailb").innerHTML = "Pending Verification"
        document.querySelector("#updatemailb").setAttribute("disabled", "true")
    }).catch((error) => {
        console.log(error.code)
        Swal.fire({
            title: "Email Already Exists",
            icon: 'info',
            confirmButtonText: 'Ok'
        })
    });
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
        <h1 class="text-2xl md:text-4xl dark:text-white text-center font-bold p-2">ادارة الحساب</h1>
        <div class="w-1/4 h-1 mt-5 rounded-xl mx-auto bg-gray-600 dark:bg-gray-900"></div>
        <div class="bg-gray-200 dark:bg-gray-800 mt-5 w-1/2 mx-auto">
            <div id="loader"
                class="bg-gray-300 dark:bg-gray-700 border-8 border-gray-200 dark:border-gray-800 w-fit animate-pulse    mx-auto">
                <img id="profile" @load="imageload" src="/logo_test.svg" class="mx-auto p- opacity-0" width="250"
                    height="200" alt="user">
            </div>
        </div>
        <form @submit.prevent="update">
            <input type="file" id="choose" name="img" accept="image/*" required hidden>
            <button @click="choose" class="mx-auto flex p-2">
                <p class="my-auto text-sm">تعديل الصورة الشخصية</p><img src="/edit.svg"
                    class="p-2 dark:invert hover:cursor-pointer" width="30" height="40" alt="edit">
            </button>
            <button id="edit" type="submit"
                class="mx-auto flex justify-center text-center text-white text-sm bg-red-700 px-4 py-1 hidden">تحديث</button>
        </form>

        <div class="w-1/6 h-1 m-5 rounded-xl mx-auto bg-gray-600 dark:bg-gray-900"></div>
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
                <img id="editemail" @click="editemail" src="/edit.svg"
                    class="p-2 dark:invert hover:cursor-pointer opacity-100" width="40" height="40" alt="edit">
                <button id="updatemailb" @click="updatemail" type="button"
                    class="bg-gray-300 dark:bg-gray-800 m-2 px-1 rounded-md hidden">Update</button>
            </div>
            <div class="form mt-3">
                <label class="p-3 font-semibold text-md md:text-xl text-center md:mr-5">Email Verified:</label>
                <input id="verified" readonly placeholder="yes"
                    class="hidden bg-gray-200 dark:bg-gray-300 text-black text-center p-1 md:p-2 rounded-md placeholder:text-green-700 focus:outline-none" />
                <input id="notverified" readonly placeholder="No"
                    class="hidden bg-gray-200 dark:bg-gray-300 text-black text-center p-1 md:p-2 rounded-md placeholder:text-red-700 focus:outline-none" />
                <p id="sendverification" @click="sendverfication"
                    class="p-2 m-5 hover:cursor-pointer w-fit mx-auto bg-gray-100 dark:bg-gray-900 hover:bg-gray-300">Send
                    verification
                    Link</p>
            </div>

            <button id="submit" @click="" type="submit"
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