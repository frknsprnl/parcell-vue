import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { appAxios } from './utils/appAxios'
import { useToast } from "vue-toastification";
import Toast from "vue-toastification";
import VueSweetalert2 from 'vue-sweetalert2';
import VueCreditCardValidation from 'vue-credit-card-validation';
import VuePaycard from "vue-paycard";

import 'sweetalert2/dist/sweetalert2.min.css';
import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/../public/global.scss";


const options = {
    confirmButtonColor: '#4c3a6e',
    denyButtonColor : '#d33',
};



const toast = useToast();

const app = createApp(App);
app.use(store);
app.use(router);

app.use(Toast);
app.use(VueSweetalert2,options);
app.use(VueCreditCardValidation);
app.use(VuePaycard);

app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$toast = toast;

app.mount('#app');
