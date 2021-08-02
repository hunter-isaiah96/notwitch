import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCustomBar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import router from './router';
import store from '../store';

Vue.use(VueAxios, axios);
Vue.component('vue-custom-scrollbar', VueCustomBar)

Vue.axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
