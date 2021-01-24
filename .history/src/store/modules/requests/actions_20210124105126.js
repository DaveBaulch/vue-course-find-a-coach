export default {
  contactCoach(context, paload) {
    console.log(data);
    const newRequest = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
    };
    console.log(coachData);
    context.commit('registerCoach', coachData);
  }
};
