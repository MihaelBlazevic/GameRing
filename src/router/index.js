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
      IsLogedin: true,
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
    },
  },
  {
    path: '/Register',
    name: 'Register',

    component: () => import('../views/Register.vue'),
    meta: {
      IsLogedin: false,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

setTimeout(() => {

  router.beforeEach((to, from, next) => {
    
      
    const NoLogon = store.User === null;

    if (NoLogon && to.meta.IsLogedin) {
      
      console.log("Korsnik nije Loginan, Preusmjeravam na Login");
      next("Login");
    } else {
      next();
    }
    if (!NoLogon && !to.meta.IsLogedin) {
     
      console.log(store.User);
      next("Home");
    }
  
  });
},2000);

export default router
