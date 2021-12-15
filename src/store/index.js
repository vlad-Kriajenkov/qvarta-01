import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import posrItemWorkPage from './modules/posr-item-workPage'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    posrItemWorkPage,
   
  }
});
