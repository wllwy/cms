import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect:"defualt",
    children: [
      {
        path: 'defualt',
        component: () => import("../views/default.vue")
      },{
        path: 'about',
        component: () => import("../views/login.vue")
      },{
        path: 'home',
        component: () => import("../views/About.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
]

const router = new VueRouter({
  linkActiveClass: "active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
