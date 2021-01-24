export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    console.log(data);
    const coachData = {
      // id: context.rootGetters.userId,
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

    const responseData = await response.json();
    if

    context.commit('registerCoach', coachData);
  }
};
