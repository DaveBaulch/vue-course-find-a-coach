import Vue from 'vue';
import Vuex from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requModule from './modules/ests/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    coaches: coachesModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
