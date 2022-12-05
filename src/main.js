import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import PrimeVue from 'primevue/config';
import 'aos/dist/aos.css';

//https://dev.to/sabbirsobhani/aos-scrolling-animation-with-vuejs-3-4hp7
import AOS from "aos";
AOS.init();

createApp(App)
    .use(router)  
    .use(PrimeVue)  
    .mount('#app')
