import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuebar from 'vuebar';
import router from './router'
import store from '../store'

Vue.use(Vuebar);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
