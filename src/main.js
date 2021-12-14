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
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import i18n from './plugins/i18n'
Vue.use(VueAnime)
Vue.use(ajax)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD9nWW1EposF5SrD8GZqlvRjOwV6m1ncCk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
