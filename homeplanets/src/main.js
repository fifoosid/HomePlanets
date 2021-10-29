import Vue from 'vue'
import App from './App.vue'
import { store } from "./store/Store.js";
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');

Vue.use(BootstrapVue);

export {
  store,
}