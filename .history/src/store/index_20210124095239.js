import Vue from 'vue';
import Vuex from 'vuex';
import coachesModule from './modules/coaches/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    coaches: coachesModule
  },
  state() {
    return {
      userId: 'c3'
    };
  }
});

export default store;
