export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.
    return state.requests ;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  }
};
