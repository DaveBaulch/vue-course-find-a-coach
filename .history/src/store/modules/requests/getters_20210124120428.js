export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.ID === coachId);
  },
  hasRequests(state, getters) {
    return state.requests && getters.requests.length > 0;
  }
};
