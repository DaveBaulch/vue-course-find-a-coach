export default {
  requests(state, id) {
    return state.requests ;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  }
};
