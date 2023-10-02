import './assets/main.css'
import './assets/index.css'
import "../public/vanilla-js-pages-transition-loader.min.js"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
