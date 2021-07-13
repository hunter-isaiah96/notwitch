import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuebar from 'vuebar';

Vue.use(Vuebar);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
