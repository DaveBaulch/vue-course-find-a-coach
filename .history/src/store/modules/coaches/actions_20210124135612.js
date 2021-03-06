export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    console.log(data);
    const coachData = {
      //id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    //console.log(coachData);

    const response = await fetch(
      `https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    // const responseData = await response.json();
    if (!response.ok) {
      // error handling...
    }

    context.commit('registerCoach', {...coachData, id: userId});
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/coaches.jso`);

    if (!response.ok) {  
      console.log('error');
      //const error = new Error(responseData.message || 'Failed to fetch');
      const error = new Error('Failed to fetch');
      throw error;
    }   

    if (!response.ok) {  
    const responseData = await response.json();
    console.log('Coaches' + responseData)      
    
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
