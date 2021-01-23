import Vue from 'vue'
import VueRouter from 'vue-router'
import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachRegistation from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/coaches'
  },
  {
    path: '/coaches', component: CoachesList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
