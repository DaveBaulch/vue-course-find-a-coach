export default {
  contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };

    fetch(`https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/${payload.coachId}.json`, {
      method: 'POST'
      body
    }) 
    console.log('Request' + newRequest);
    context.commit('addRequest', newRequest);
  }
};
