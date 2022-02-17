import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
//import Vue from 'vue';
//import store from './store';

createApp(App).use(router).mount('#app')
/*new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
*/