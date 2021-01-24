import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

// Vue.use(Vuex);

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c4'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
