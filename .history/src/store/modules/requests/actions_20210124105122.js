export default {
  contactCoach(context, paload) {
    console.log(data);
    const newRequest = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    console.log(coachData);
    context.commit('registerCoach', coachData);
  }
};
