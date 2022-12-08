import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import PrimeVue from 'primevue/config';
import 'aos/dist/aos.css';

//https://dev.to/sabbirsobhani/aos-scrolling-animation-with-vuejs-3-4hp7
//https://github.com/michalsnik/aos/issues/645
import AOS from "aos";
AOS.init({
    duration: 800
});

createApp(App)
    .use(router)  
    .use(PrimeVue)  
    .mount('#app')
