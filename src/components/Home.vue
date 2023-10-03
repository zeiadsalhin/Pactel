<script setup>
function t() {
    const pic = document.querySelector("#img")
    const txt = document.querySelector("#text")
    pic.classList.add("translate-x-0")
    pic.classList.add("opacity-100")
    txt.classList.add("translate-y-0")
    txt.classList.add("opacity-100")
    clearInterval(int1)
}
const int1 = setInterval(t, 1500)
</script>
<template>
    <div class="flex-col mt-10">
        <div class="contenttop flex-col justify-end text-right">
            <div class="flex-row md:flex justify-center md:space-x-10">
                <img id="img" class="mx-auto md:mx-0 -translate-x-10 transform ease-in-out duration-500 opacity-0"
                    src="/course.svg" width="150" height="" alt="">
                <h1 id="text"
                    class="text-2xl translate-y-5 opacity-0 transform ease-in-out duration-500  md:text-5xl font-bold text-center md:text-right p-10">
                    أهلا بكم
                    في بكتل كورس
                </h1>
            </div>
            <div class="w-40 h-1 bg-black dark:bg-gray-50 mx-auto m-5 "></div>
        </div>
    </div>
</template>