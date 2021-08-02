import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuebar from 'vuebar';
// import VueCustomBar from 'vue-custom-scrollbar';
import router from './router';
import store from '../store';
// import "vue-custom-scrollbar/dist/vueScrollbar.css"

Vue.use(Vuebar);
// Vue.use(VueCustomBar);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
