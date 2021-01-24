export default {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.coaches && state.coaches.length > 0;
  }
};
