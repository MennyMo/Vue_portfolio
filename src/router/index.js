import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'

Vue.use(VueRouter)
Vue.use(Home)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  
      {
        path: '/about',
        name: 'About',
        component: () => import( '../views/About/About.vue'),
        children: [
          {
            path: '/enyata',
            name: 'Enyata',
            component: () => import( '../views/About/Enyata.vue'),

          }
        ]  
  },
  { 
    // wild card
    path: '*', 
    name: '404',
    component: () => import( '../views/404.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
