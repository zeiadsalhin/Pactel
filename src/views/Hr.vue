<script setup>

function check() {
    const checkmark = document.querySelector("#confirm")
    const vsrc = document.querySelector("#video")
    const player = document.querySelector("#player")
    checkmark.classList.add("pointer-events-none")

    if (checkmark.checked == true) {
        player.classList.remove("pointer-events-none")
        // vsrc.src = "https://www.youtube.com/embed/S25j16NT7eo?si=ESIYx8QQ9A-x67Y0&amp;controls=1"
        player.classList.remove("opacity-0")

    }
}
</script>
<script>
// create youtube player
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'oH1VF0vEz68',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
} setTimeout(onYouTubePlayerAPIReady, 500)
// autoplay video
function onPlayerReady(event) {
    event.target.playVideo();
}
// when video ends
function onPlayerStateChange(event) {
    if (event.data === 0) {
        const r = document.querySelector("#next")
        r.classList.remove("hidden")
        window.scrollBy(0, 100)
    }
}
</script>
<template>
    <div id="darkmode" class="darkmode">
        <div class="top mt-10 justify-center mx-auto p-5 space-y-5 md:w-11/12 bg-gray-200 dark:bg-gray-900 dark:text-white">
            <img class="mx-auto w-1/2 md:w-1/6" src="/hr.svg" width="100%" height="100%" alt="marketing">
            <h1 class="text-3xl md:text-5xl font-bold text-center">دورة الموارد البشرية</h1>
            <div class="w-60 h-1 mx-auto bg-black mt-10 m-5 "></div>
        </div>
        <div class="inst mt-5 p-10 md:w-1/2 bg-gray-100 dark:bg-gray-800 dark:text-white mx-auto text-right space-y-3">
            <h2 class="text-right text-xl font-semibold mb-10">: التعليمات</h2>
            <p class="">الرجاء التركيز الكامل وانهاء الفيديو في وقته كاملا لما يترتب عليه في المرحله القادمه</p>
            <p class="">يرجي تسجيل الملاحظات في ورقه خارجية</p>
            <p class="">بعد الانتهاء من الفيديوهات الاربعه الدخول على الرابط التالي لانهاء الامتحان والحصول على
                شهاده المرحلة الأولى</p>
            <p class="">التأكيد على قراءة التعليمات حتى تتمكن من بدأ الكورس</p>
        </div>
        <div class="confirm flex justify-center font-extrabold bg-gray-300 md:w-1/2 mx-auto">
            <p class="p-2 ">لقد قرأت جميع التعليمات المكتوبة وفهمتها</p>
            <input @click="check" type="checkbox" id="confirm" name="confirm" value="confirmInst" class="w-4 h-4 my-auto">
        </div>

        <div class="video mt-20">
            <div class="text-right md:w-11/12">
                <p class="text-2xl md:text-4xl font-semibold p-5 dark:text-gray-300">:محتوى الدورة</p>
            </div>
            <div class="mt-20 bg-gray-900 p-2">
                <!-- <iframe id="video" class="mx-auto w-full md:h-screen h-80" src="" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; "
                    allowfullscreen></iframe> -->
                <div id="player"
                    class="opacity-0 pointer-events-none transform ease-in-out duration-1000 mx-auto w-full md:h-screen h-80">
                </div>
            </div>
        </div>
        <RouterLink to="/pr">
            <p id="next"
                class="mt-10 mb-20 hidden bg-gray-800 dark:bg-gray-950 text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-900 w-fit mx-auto px-10 py-2 text-xl font-extrabold">
                الدورة التالية
            </p>
        </RouterLink>
    </div>
</template>
