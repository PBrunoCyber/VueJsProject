import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask';


Vue.use(VueTheMask);

Vue.use(VueSweetalert2);

window.axios = axios;

axios.defaults.baseURL = 'http://graphql.me/';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
