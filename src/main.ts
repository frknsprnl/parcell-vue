import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { appAxios } from './utils/appAxios'
import Loading from "@/components/Shared/Loading.vue";


import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/../public/global.scss";



const app = createApp(App);
app.use(store);
app.use(router);
app.component("Loading", {
    color : "#4c3a6e",
    size : "150 150"
});
app.config.globalProperties.$appAxios = appAxios;


app.mount('#app');
