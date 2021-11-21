import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import VueGoogleMaps from '@fawmi/vue-google-maps';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/../public/global.scss";


const app = createApp(App);
app.use(store);
app.use(router);

//app.use(VueGoogleMaps);


app.mount('#app');
