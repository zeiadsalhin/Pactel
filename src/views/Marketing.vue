<script setup>

function check() {
    const checkmark = document.querySelector("#confirm")
    const vsrc = document.querySelector("#video")
    checkmark.classList.add("pointer-events-none")

    if (checkmark.checked == true) {
        vsrc.src = "https://www.youtube.com/embed/S25j16NT7eo?si=ESIYx8QQ9A-x67Y0&amp;controls=1"
    }
}
</script>
<template>
    <div id="darkmode" class="darkmode">
        <div class="top mt-10 justify-center mx-auto p-10 md:w-11/12 bg-gray-200">
            <h1 class="text-3xl md:text-5xl font-bold text-center">دورة المبيعات</h1>
            <div class="w-60 h-1 mx-auto bg-black mt-10 m-5 "></div>
        </div>
        <div class="inst mt-5 p-10 md:w-1/2 bg-gray-100 mx-auto text-right space-y-3">
            <h2 class="text-right text-xl font-semibold mb-10">: التعليمات</h2>
            <p class="">-1</p>
            <p class="">-2</p>
            <p class="">-3</p>
            <p class="">-4</p>
            <p class="">-5</p>
        </div>
        <div class="confirm flex justify-center font-extrabold bg-gray-300 md:w-1/2 mx-auto">
            <p class="p-2 ">لقد قرأت جميع التعليمات المكتوبة وفهمتها</p>
            <input @click="check" type="checkbox" id="confirm" name="confirm" value="confirmInst" class="w-4 h-4 my-auto ">
        </div>

        <div class="video mt-20">
            <div class="text-right md:w-11/12">
                <p class="text-2xl md:text-4xl font-semibold p-5">:محتوى الدورة</p>
            </div>
            <div class="mt-20 bg-gray-900 p-2">
                <iframe id="video" class="mx-auto w-full md:h-screen h-80" src="" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; "
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>
