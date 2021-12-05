import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as VueGoogleMaps from 'vue2-google-maps'
import ajax from "vuejs-ajax"
import VueAnime from 'vue-animejs';
 
Vue.use(VueAnime)
Vue.use(ajax)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAKKIhITpqPIucGTOJJlV3xVIn5o5RztJ4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
