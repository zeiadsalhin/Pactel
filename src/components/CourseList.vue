<script setup>
import dots from './Dots.vue'
import { firebase } from '../firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
function check() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) { // not logged in
            alert('you must be logged in to view this. redirecting to the home page')
            router.push('/signup')
        }
    })
}
</script>
<template>
    <div id="darkmode" class="darkmode">
        <div class="dark:bg-black dark:text-white bg-gray-300 reveal">
            <div class="contentcenter flex-col justify-center mx-auto text-center p-5 md:w-1/2 mt-20">
                <h1 class="text-2xl font-semibold ">:قائمة الدورات المتاحة</h1>
                <div class="w-20 h-1 bg-black dark:bg-gray-300 mx-auto m-5 "></div>
                <div class="courselist flex-col space-y-5 mt-10">
                    <div
                        class="course1 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400 text-gray-900 dark:bg-gray-800 dark:text-white ">
                        <h3 class="text-lg font-bold">مقدمة في التسويق</h3>
                        <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                        <p class="text-md">يشرح الفيديو اساسيات ومفهوم التسويق واستخداماته </p>
                        <p class="">التعرف على الاساليب الجديدة المتبعة في علم التسويق </p>
                        <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                        <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة استيعاب
                            المعلومات</p>
                        <RouterLink to="/marketing" @click="check">
                            <p
                                class="mt-10 bg-gray-800 dark:bg-gray-950 text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-900 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                                البدء
                            </p>
                        </RouterLink>
                    </div>
                    <dots />
                    <div
                        class="course2 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400 text-gray-900 dark:bg-gray-800 dark:text-white">
                        <h3 class="text-lg font-bold">مقدمة في الموارد البشرية</h3>
                        <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                        <p class="text-md">يشرح الفيديو اساسيات ومفهوم الموارد البشرية </p>
                        <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                        <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة استيعاب
                            المعلومات</p>
                        <RouterLink to="/hr" @click="check">
                            <p
                                class="mt-10 bg-gray-800 dark:bg-gray-950 text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-900 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                                البدء
                            </p>
                        </RouterLink>
                    </div>
                    <dots />
                    <div
                        class="course3 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400 text-gray-900 dark:bg-gray-800 dark:text-white">
                        <h3 class="text-lg font-bold"> علاقات عامة </h3>
                        <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                        <p class="text-md">يشرح الفيديو اساسيات ومفهوم العلاقات العامة </p>
                        <p class="">التعرف على الاساليب الجديدة في العلاقات العامة </p>
                        <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                        <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة استيعاب
                            المعلومات</p>
                        <RouterLink to="/pr" @click="check">
                            <p
                                class="mt-10 bg-gray-800 dark:bg-gray-950 text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-900 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                                البدء
                            </p>
                        </RouterLink>
                    </div>
                    <dots />
                    <div
                        class="course4 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400 text-gray-900 dark:bg-gray-800 dark:text-white">
                        <h3 class="text-lg font-bold">مقدمة في المبيعات</h3>
                        <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                        <p class="text-md">يشرح الفيديو مفهوم المبيعات وطرقها </p>
                        <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                        <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة استيعاب
                            المعلومات</p>
                        <RouterLink to="/sales" @click="check">
                            <p
                                class="mt-10 bg-gray-800 dark:bg-gray-950 text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-900 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                                البدء
                            </p>
                        </RouterLink>
                    </div>
                </div>
                <div class="stage2 mt-20 reveal">
                    <div class="content flex justify-center space-x-2 opacity-60">
                        <h1 class="text-xl md:text-3xl my-auto">انتظروا المرحلة الثانية قريبا</h1>
                        <img src="/lock.svg" class=" dark:grayscale " width="50" height="50" alt="lock">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>