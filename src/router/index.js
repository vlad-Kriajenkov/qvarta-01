import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import WorkProduct from '../views/Work-Product.vue'
import OurServices from '../views/Our-Services.vue'
import Services1 from '../views/Services-1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'main'},
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    meta: {layout: 'main'},
    component: Work,
  },
  {
    path: '/work-product',
    name: 'Work-Product',
    meta: {layout: 'main'},
    component: WorkProduct,
  },
  {
    path: '/Our-Services',
    name: 'Our-Services',
    meta: {layout: 'main'},
    component: OurServices,
 
  },
  {
    path: '/Services1',
    name: 'Services1',
    meta: {layout: 'main'},
    component: Services1,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },

  
})

export default router
