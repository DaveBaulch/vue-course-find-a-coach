export default {
  registerCoach(context, data) {
    console.log(data);
    const coachData = {
      id: .contextrootGett,
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
