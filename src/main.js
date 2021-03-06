import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { TroisJSVuePlugin } from 'troisjs';
import './styles/app.css'; // Here

import store from './store'

createApp(App).use(store).use(TroisJSVuePlugin).use(router).mount('#app')
