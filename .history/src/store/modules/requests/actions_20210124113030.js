export default {
  contactCoach(context, payload) {
    console.log(data);
    const newRequest = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      message: data.last
    };
    console.log(newRequest);
    context.commit('addRequest', newRequest);
  }
};
