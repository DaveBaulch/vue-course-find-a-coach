export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, getters, rootSate, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId,
    return coaches.some(coach => coach.id === userId) // return true/false if userID exists - already a coach
    
  }
}