export default {
  contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      message: payload.last
    };
    console.log(newRequest);
    context.commit('addRequest', newRequest);
  }
};
