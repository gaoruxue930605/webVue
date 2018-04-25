import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Discover from "../views/discover.vue"
import Artists from '../views/artists.vue'
import Activity from "../views/activity.vue"
import About from "../views/about.vue"
import Announce from "../views/announce.vue"
import Works from "../views/works.vue"
import Art from "../views/article.vue"
import NewIndex from "../views/newIndex.vue";


Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "newIndex",
            component: NewIndex,
        },
        {
            path: "/discover",
            name: "Discover",
            component: Discover,
            children: [{
                    path: "/discover/artists",
                    name: "artists",
                    component: Artists
                },
                {
                    path: "/discover/works",
                    name: "works",
                    component: Works
                },
                {
                    path: "/discover/art",
                    name: "art",
                    component: Art
                }
            ]
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/announce",
            name: "announce",
            component: Announce
        },
        {
            path: "/activity",
            name: "activity",
            component: Activity
        }
    ]
});