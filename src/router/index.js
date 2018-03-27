import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Discover from "../views/discover.vue"
import Artists from '../views/artists.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
    }, {
        path: '/discover',
        name: 'Discover',
        component: Discover
    }, {
        path: '/artists',
        name: 'Artists',
        component: Artists
    }]
})