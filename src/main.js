import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/scss/index.scss';


import Router from "./router.js";
import store from './store.js'

createApp(App).use(store).use(Router).mount('#app');