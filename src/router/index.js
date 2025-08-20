import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Banner from "../views/Banner.vue"
import Char from "../views/Char.vue"
import Login from "../views/Login.vue"
import CharDetail from "../views/charDtail.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },

        {
            path: '/Login',
            name: 'login',
            component: Login
        },

        {
            path: '/Banner',
            name: 'banner',
            component: Banner,
        },

        {
            path: '/Char',
            name: 'char',
            component: Char,
        },

        {
            path: '/CharDetail/:id',
            name: 'charDetail',
            component: CharDetail,
        },


    ]
})

export default router