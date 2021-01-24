export default {
  contactCoach(context, paload) {
    console.log(data);
    const newRequest = {
      coachId: payload
      userEmail: payload.email,
      message: data.last
    };
    console.log(coachData);
    context.commit('registerCoach', newRequest);
  }
};
