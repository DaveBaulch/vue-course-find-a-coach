export default {
  requests(state, _, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return state.requests && getters.requests.length > 0;
  }
};
