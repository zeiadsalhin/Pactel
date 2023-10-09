<template>
    <div class="about mt-5 flex-col justify-center text-center bg-gray-900 text-white reveal">
        <h1 class="text-3xl text-white text-center font-bold p-5">Send us a message</h1>
        <form id="form" class="space-y-5 p-5" ref="form" @submit.prevent="sendEmail">
            <label class="p-2 text-xl hiddenm">Name</label>
            <input id="name" required class="bg-gray-200 text-black p-2 rounded-md focus:outline-none md:w-1/5 "
                placeholder=" name" type="text" name="from_name">
            <label class="p-3 text-xl hiddenm">Email</label>
            <input id="email" required class="bg-gray-200 text-black p-2 rounded-md focus:outline-none md:w-1/5"
                placeholder=" your Email" type="email" name="reply_to"><br class="hiddenm"><br class="hiddenm">
            <label class="text-xl hiddenm">Message</label><br>
            <textarea id="message" required
                class="bg-gray-200 text-black p-3 resize-none rounded-md focus:outline-none w-full md:w-1/3" rows="5"
                placeholder="Your message" name="message"></textarea><br>
            <input class="px-5 py-2 rounded-md hover:cursor-pointer hover:bg-gray-600 bg-gray-500" type="submit"
                value="Send">
        </form>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmail() {
            emailjs.sendForm('service_q2urbhk', 'template_avj8im8', this.$refs.form, 'eO0WiTL6DPhrkFE2L')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    document.querySelector("#form").reset()
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>