export default {
  contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(`https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();


    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send');
      throw error;
    }    

    newRequest.id = responseData.name; // id returned from firebase

    console.log('Request' + newRequest);
    context.commit('addRequest', newRequest);
  } 
};
