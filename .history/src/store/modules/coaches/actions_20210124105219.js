export default {
  contactCoach(context, data) {
    console.log(data);
    const coachData = {
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
