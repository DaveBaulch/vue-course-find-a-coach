export default {
  contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      coachId: 'c3',
      userEmail: payload.email,
      message: payload.message
    };
    console.log('Request' + newRequest);
    context.commit('addRequest', newRequest);
  }
};
