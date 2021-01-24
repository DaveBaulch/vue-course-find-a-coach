export default {
  registerCoach(context, data) {
    console.log()
    const coachData = {
      id: 'c3',
      firstName: data.first,
      firstName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.aareas
    };

    context.commit('registerCoach', coachData);
  }
};
