import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuebar from 'vuebar';
import router from './router'

Vue.use(Vuebar);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
