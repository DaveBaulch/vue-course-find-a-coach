import Vue from 'vue'
import Vuex from 'vuex'
import coachesModule from './modules/coaches/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: test
  },
  modules: {
    coaches: coachesModule
  }
})

export default store;
