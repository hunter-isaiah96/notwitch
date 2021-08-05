import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCustomBar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import router from './router';
import store from '../store';

import StreamCard from '@/components/StreamCard';

Vue.use(VueAxios, axios);
Vue.component('vue-custom-scrollbar', VueCustomBar);
Vue.component('stream-card', StreamCard);

Vue.axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false;


Vue.filter('split', (s) => {
  const value = s.split('_');
  return `${value[0]} ${value[1]}`;
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
