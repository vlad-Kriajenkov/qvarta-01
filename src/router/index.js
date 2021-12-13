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
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/work-product',
    name: 'Work-Product',
    component: WorkProduct,
  },
  {
    path: '/Our-Services',
    name: 'Our-Services',
    component: OurServices,
 
  },
  {
    path: '/Services1',
    name: 'Services1',
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
