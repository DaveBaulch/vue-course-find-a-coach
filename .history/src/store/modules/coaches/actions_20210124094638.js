export default {
  registerCoach(context, data) {
    console.log(data);
    const coachData = {
      id: 'c3',
      firstName: data.first,
      firstName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.aareas
    };
    console.log(coachData);
    context.commit('registerCoach', coachData);
  }
};
