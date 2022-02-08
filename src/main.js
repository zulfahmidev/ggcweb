import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import '@themesberg/flowbite';
import router from './router.js';

createApp(App).use(router).mount('#app')
