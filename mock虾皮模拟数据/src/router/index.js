import Vue from "vue";
import VueRouter from "vue-router";
import { Axios } from '@/api';
import NProgress from 'nprogress';
Vue.use(VueRouter);
const routes = [
  {
    path: '/', component: () => import('@/views/layou'),
    redirect: '/xiapi',
    children: [
      { path: 'test', component: () => import('@/views/test') },
      { path: 'xiapi', component: () => import('@/views/xiapi') },
    ]
  }
];
const router = () => new VueRouter({
  mode: "hash", base: process.env.BASE_URL, routes
});
const ROUTER = router();
/**
 * 用户退出
 * @param {Function} callback 回调函数
 */
Vue.prototype.$logout = async (callback) => {
  let { data } = await Axios('/logout');
  if (typeof callback == 'function') callback(data);
}
/**
 * 用户登录
 * @param {Object} params 登录信息
 * @param {Function} callback 回调函数
 */
Vue.prototype.$login = async (params, callback) => {
  let { data } = await Axios('/login', {
    data: params
  })
  if (data.code) {
    // 登录成功，保存数据到cookie和session

    if (typeof callback == 'function') {
      callback(data);
    }
  }
}

ROUTER.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})
ROUTER.afterEach(() => {
  NProgress.done(false);
})
export default ROUTER;
