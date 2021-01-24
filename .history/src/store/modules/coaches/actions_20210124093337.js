export default {
  registerCoach(context, data) {
    const coachData = {
      firstName: data.first,
      firstName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.aareas
    };
  }
};
