export default {
  registerCoach(context, data) {
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

    fetch(
      `https://vue-http-demo-92b0d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`, {
        method: 
      }
    );
    context.commit('registerCoach', coachData);
  }
};
