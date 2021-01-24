import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

Vue.config.productionTip = false;
Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-badge', BaseBadge);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
