export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId
    return state.requests.filter() ;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  }
};
