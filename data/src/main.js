import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from 'vant';
import 'vant/lib/index.css';
import ECharts from 'vue-echarts';
import echarts from 'echarts';
import 'echarts/theme/dark';
import 'echarts/theme/blue';
import 'echarts/theme/jazz';
import 'echarts/theme/dark-blue';
import 'echarts/theme/fruit';
// import 'echarts/theme/zidingyi'
Vue.config.productionTip = false;
Vue.component('v-chart', ECharts);
Vue.use(echarts);
Vue.use(vant);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");