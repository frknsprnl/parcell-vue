import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { appAxios } from './utils/appAxios'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/../public/global.scss";


const options = {
    confirmButtonColor: '#4c3a6e',
    cancelButtonColor: '#d33',
};



const toast = useToast();

const app = createApp(App);
app.use(store);
app.use(router);

app.use(Toast);

app.use(VueSweetalert2,options);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$toast = toast;

app.mount('#app');
