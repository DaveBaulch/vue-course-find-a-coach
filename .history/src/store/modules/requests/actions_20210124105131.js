export default {
  contactCoach(context, paload) {
    console.log(data);
    const newRequest = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: data.last,
    };
    console.log(coachData);
    context.commit('registerCoach', coachData);
  }
};
