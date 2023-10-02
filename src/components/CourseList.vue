<script setup></script>
<template>
    <div
        class="darkmode contentcenter flex-col justify-center mx-auto text-center p-5 md:w-1/2 mt-20 dark:bg-black dark:text-white">
        <h1 class="text-2xl font-semibold ">:قائمة الدورات المتاحة</h1>
        <div class="w-20 h-1 bg-black mx-auto m-5 "></div>
        <div class="courselist flex-col space-y-5 mt-10">
            <div
                class="course1 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400 text-gray-900 dark:bg-black dark:text-white">
                <h3 class="text-lg font-bold">مقدمة في التسويق</h3>
                <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                <p class="text-md">يشرح الفيديو اساسيات ومفهوم التسويق واستخداماته </p>
                <p class="">التعرف على الاساليب الجديدة المتبعة في علم التسويق </p>
                <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة الفيديو</p>
                <RouterLink to="/marketing">
                    <p
                        class="mt-10 bg-gray-800 text-gray-200 hover:bg-gray-700 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                        البدء
                    </p>
                </RouterLink>
            </div>
            <div
                class="course2 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400">
                <h3 class="text-lg font-bold">مقدمة في الموارد البشرية</h3>
                <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                <p class="text-md">يشرح الفيديو اساسيات ومفهوم التسويق واستخداماته </p>
                <p class="">التعرف على الاساليب الجديدة المتبعة في علم التسويق </p>
                <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة الفيديو</p>
                <RouterLink to="/hr">
                    <p
                        class="mt-10 bg-gray-800 text-gray-200 hover:bg-gray-700 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                        البدء
                    </p>
                </RouterLink>
            </div>
            <div
                class="course3 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400">
                <h3 class="text-lg font-bold"> علاقات عامة </h3>
                <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                <p class="text-md">يشرح الفيديو اساسيات ومفهوم التسويق واستخداماته </p>
                <p class="">التعرف على الاساليب الجديدة المتبعة في علم التسويق </p>
                <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة الفيديو</p>
                <RouterLink to="/pr">
                    <p
                        class="mt-10 bg-gray-800 text-gray-200 hover:bg-gray-700 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                        البدء
                    </p>
                </RouterLink>
            </div>
            <div
                class="course4 hover:cursor-pointer hover:scale-105 transform transition ease-out duration-300 p-5 space-y-5 h-auto bg-gray-400">
                <h3 class="text-lg font-bold">مقدمة في المبيعات</h3>
                <div class="md:w-20 h-0.5 bg-gray-900 mx-auto m-5 "></div>
                <p class="text-md">يشرح الفيديو اساسيات ومفهوم التسويق واستخداماته </p>
                <p class="">التعرف على الاساليب الجديدة المتبعة في علم التسويق </p>
                <p class="">الحصول على شهادة معتمدة عند اتمام الدورة </p>
                <p class="font-bold">يرجى قراءة التعليمات جيدا قبل البدأ لضمان الحصول على الشهادة وسلاسة الفيديو</p>
                <RouterLink to="/sales">
                    <p
                        class="mt-10 bg-gray-800 text-gray-200 hover:bg-gray-700 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                        البدء
                    </p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>