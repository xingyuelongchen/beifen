import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import cover from "vue-cropper";
import api from './api';

Vue.use(Vant);
Vue.use(cover);
Vue.use(api);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


const AutoRem = 7.5;
let rootEl = document.documentElement;
let metaEl = document.querySelector('meta[name="viewport"]');
let dpr = window.devicePixelRatio || 1;
let rem = rootEl.clientWidth * dpr / AutoRem;
let scale = (1 / dpr).toFixed(2);
metaEl.setAttribute('content', 'width=' + dpr * rootEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no,viewport-fit=cover');
rootEl.setAttribute('data-dpr', dpr);
rootEl.setAttribute('style', 'font-size:' + rem.toFixed(2) + 'px!important;');
window.rem2px = function (v) {
  v = parseFloat(v);
  return v * rem;
};
window.px2rem = function (v) {
  v = parseFloat(v);
  return v / rem;
}; 
