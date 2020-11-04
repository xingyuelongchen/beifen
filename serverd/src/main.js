import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from 'element-ui';
import vant from 'vant';
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';
import axios from 'axios'
Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(vant);
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : 'http://www.guangyizhou.cn'
axios.defaults.withCredentials = true;
// axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded'
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
