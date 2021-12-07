import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { appAxios } from './utils/appAxios'

import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/../public/global.scss";


const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;


app.mount('#app');
