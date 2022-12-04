import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import PrimeVue from 'primevue/config';
import 'aos/dist/aos.css';

createApp(App)
    .use(router)  
    .use(PrimeVue)  
    .mount('#app')
