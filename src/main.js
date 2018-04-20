import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App';
import router from './router';

import 'iview/dist/styles/iview.css';
Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: { App }
    })
    // const RouterConfig = {
    //     routes: Routers
    // };
    // const router = new VueRouter(RouterConfig);

// new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App)
// });