import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import posrItemWorkPage from './modules/posr-item-workPage'
import postItemServices from './modules/post-item-Services'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    posrItemWorkPage,
    postItemServices,
  }
});
