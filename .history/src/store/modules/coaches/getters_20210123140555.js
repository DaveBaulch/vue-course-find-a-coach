export default {
  coaches(state) {
    return this.state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  }
}