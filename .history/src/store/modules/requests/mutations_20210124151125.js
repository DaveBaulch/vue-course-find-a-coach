export default {
  addRequest(state, payload) {
    //console.log('Request 2' + payload);
    state.requests.push(payload);
  }
};
