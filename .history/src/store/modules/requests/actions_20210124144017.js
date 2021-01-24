export default {
  contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    console.log('Request' + newRequest);
    context.commit('addRequest', newRequest);
  }
};
