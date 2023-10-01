<script setup>
function datedisplay() {
    const date = new Date();
    document.querySelector("#copyrights").innerText = date.getFullYear();
    clearInterval(date1)
}
const date1 = setInterval(datedisplay, 1)
</script>
<template>
    <footer>
        <div id="aboutus" class=" bg-black text-white">
            <div class="py-10 px-10 font-semibold md:flex justify-between ">
                <!--left-->
                <div class="md:w-1/2">


                    <div class="flex justify-end mb-10">
                        <a href="https://www.linkedin.com/company/pactel/mycompany/" target="_blank"
                            class="ml-7 p-4 mt-4"><i class="fa-brands fa-check fa-xl fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/pact.el/" target="_blank" class="  p-4 mt-4"><i
                                class="fa-brands fa-check fa-xl fa-instagram"></i></a>
                        <a href="https://www.facebook.com/Pactel1" target="_blank" class=" p-4 mt-4"><i
                                class="fa-brands fa-check fa-xl fa-facebook"></i></a>
                        <!-- <a href="https://pactel-s.myshopify.com/" target="_blank" class=" p-4 mt-4"><i class="fa-brands fa-check fa-xl fa-shopify"></i></a> -->
                        <!-- <a href="https://t.me/Helwanuniv" class=" p-4 mt-4"><i class="fa-brands fa-check fa-xl fa-telegram"></i></a> -->
                        <!-- <a href="https://www.youtube.com/channel/UCd_hB3462dLbQ4_07esSPoA/videos" class=" p-4 mt-4"><i class="fa-brands fa-check fa-xl fa-youtube"></i></a> -->
                    </div>
                    <hr>

                    <p class=" text-gray-200 mt-5">About us<br><br> We are a leading Egyptian company in the
                        field
                        of
                        services, <br>that has been worked for more than two years with many clients around the
                        world
                    </p>
                    <hr class="mt-10 w-20">
                </div>
                <!--Contact-->
                <div class="text-gray-300 opacity-70 font-mono font-thin text-md md:py-20">
                    <p class="mt-5">Contact us</p>
                    <p class="mt-2">Egypt</p>
                    <a href="https://wa.me/+201154185848" target="_blank">+201154185848</a>
                    <br>
                    <p class="mt-2">UAE</p>
                    <a href="https://wa.me/+971521997339" target="_blank">+971521997339</a>
                    <br>
                    <p class="mt-2">Email:</p>
                    <a href="mailto:pactelcompeny@gmail.com" target="_blank">pactelcompeny@gmail.com</a>
                </div>
                <!-- <button id="totopbutton" onclick="goToTop()"
                    class="fixed gtt z-90 bottom-20 right-8 border-0 w-14 h-14 rounded-full drop-shadow-md bg-gray-800 text-white text-2xl font-semibold">&uarr;</button> -->
            </div>

            <div class="text-center flex-col justify-center p-4 text-gray-400">
                <a class="text-sm block m-8" href="https://pactel.info/license.txt">legal</a>
                <p>&copy; copyrights Ziad pactel-<span id="copyrights">
                    </span>
                    <a href="https://github.com/zeiadsalhin"><i class="fa-brands fa fa-xl fa-github-square"></i></a>
                </p>
                <!-- <a href=""><a href=""><i class="fa-brands fa fa-xl fa-facebook"></i></a> -->


            </div>
        </div>
    </footer>
</template>