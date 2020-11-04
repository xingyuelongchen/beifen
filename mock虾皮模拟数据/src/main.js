import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from 'element-ui';
import VCharts from 'v-charts';
import template from './components';
Vue.use(VCharts);
Vue.use(Element);
Vue.use(template);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
