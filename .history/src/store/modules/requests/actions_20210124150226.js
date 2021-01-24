export default {
  async contactCoach(context, payload) {
    console.log(payload);
    const newRequest = {
      // coachId: payload.coachId, // not sent to server
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

    console.log(responseData);
    newRequest.id = responseData.name; // id returned from firebase
    newRequest.coachId = payload.coachId;

    console.log('Request' + newRequest);
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const response = await fetch(
      `https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);

    const responseData = await response.json();
    console.log('Coaches' + responseData)         

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach); 
      context.commit('setCoaches', coaches);
    }
  }
  
};
