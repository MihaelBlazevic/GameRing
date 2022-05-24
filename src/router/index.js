import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store.js"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      IsLogedin: false,
      requiresAuth: false
    },

  },
  {
    path: '/Homelog',
    name: 'Homelog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Homelog.vue'),
    meta: {
      IsLogedin: true,
      requiresAuth: true
    },
  },
  {
    path: '/Profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: {
      IsLogedin: true,
      requiresAuth: true
    },
  },
  {
    path: '/Finder',
    name: 'Finder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Finder.vue'),
    meta: {
      IsLogedin: true,
      requiresAuth: true
    },
  },
  {
    path: '/Chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
    meta: {
      IsLogedin: true,
      requiresAuth: true
    },
  },
  {
    path: '/Settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    meta: {
      IsLogedin: true,
      requiresAuth: true
    },
  },
  {
    path: '/News',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue'),
    meta: {
      IsLogedin: true,
      requiresAuth: true
    },
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      IsLogedin: false,
      requiresAuth: false
    },
  },
  {
    path: '/Register',
    name: 'Register',

    component: () => import('../views/Register.vue'),
    meta: {
      IsLogedin: false,
      requiresAuth: false
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.User) {
      next()
      return
    }
    next({ name: 'Login' })
  } else {
    next()
  }
})



export default router
