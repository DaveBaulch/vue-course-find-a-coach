export default {
  addRequest(state, payload) {
    //console.log('Request' + payload);
    state.requests.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload
  }
};
