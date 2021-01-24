export default {
  contactCoach(context, paload) {
    console.log(data);
    const newRequest = {
      id: new Date,
      userEmail: payload.email,
      message: data.last
    };
    console.log(coachData);
    context.commit('registerCoach', newRequest);
  }
};
