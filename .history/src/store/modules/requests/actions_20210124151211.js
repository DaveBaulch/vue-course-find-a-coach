export default {
  async contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      // coachId: payload.coachId, // not sent to server
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(`https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send');
      throw error;
    }    

    console.log(responseData);
    newRequest.id = responseData.name; // id returned from firebase
    newRequest.coachId = payload.coachId;

    console.log('Request' + newRequest);
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = fetch(`https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`)
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch request');
      throw error;
    } 

    const requests = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        coachId: coachId;
        userEmail: responseData[key].userEmail,
        lastName: responseData[key].lastName,
      };
      coaches.push(coach); 
      context.commit('setCoaches', coaches);
    }    
    
  }

}
