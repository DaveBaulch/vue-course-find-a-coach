import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Basecard from './components/ui/BaseCard.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

App.component('base-card')

