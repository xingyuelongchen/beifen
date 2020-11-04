import Vue from "vue";
import VueRouter from "vue-router";
import { getCookie } from "../api/Storage";
Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    component: () => import('@/views/main'),
    redirect: '/school',
    children: [
      {
        icon: 'video',
        path: 'school',
        name: 'school',
        component: () => import('@/views/'),
        meta: { title: '学习中心', },
        redirect: 'school/index',
        children: [
          { path: 'index', meta: { title: '学习中心', }, component: () => import('@/views/school/index') },
          { path: 'details', meta: { title: '播放页', }, component: () => import('@/views/school/details') },
          { path: 'see', meta: { title: '企业风采', }, component: () => import('@/views/school/see') },
        ]
      },
      {
        icon: 'point-gift',
        path: 'source',
        name: 'source',
        meta: { title: '货源中心' },
        component: () => import('@/views'),
        redirect: 'source/index',
        children: [
          { path: 'index', meta: { title: '货源中心' }, component: () => import('@/views/source/index') },
          { path: 'list', meta: { title: '货源列表' }, component: () => import('@/views/source/list') },
        ]
      },
      {
        icon: 'shop',
        path: 'shop',
        name: 'shop',
        title: '网店装修', meta: { title: '网店装修' },
        component: () => import('@/views'),
        redirect: 'shop/index',
        children: [
          { path: 'index', meta: { title: '网店装修' }, component: () => import('@/views/shop/index') },
          { path: 'details', meta: { title: '模板详情' }, component: () => import('@/views/shop/details') },
        ]
      },
      {
        icon: 'comment',
        path: 'commerce',
        name: 'commerce',
        title: '电商前沿', meta: { title: '电商前沿' },
        component: () => import('@/views'),
        redirect: 'commerce/index',
        children: [
          { path: 'index', meta: { title: '电商前沿' }, component: () => import('@/views/commerce/index') },
          { path: 'details', meta: { title: '文章内容' }, component: () => import('@/views/commerce/details') },
        ]
      },
      {
        icon: 'manager',
        path: 'center',
        name: 'center',
        title: '个人中心',
        redirect: '/center/index', meta: { title: '个人中心' },
      },
    ]
  },
  {
    path: '/center',
    component: () => import('@/views/main'),
    meta: { isAuth: true },
    children: [
      { meta: { title: '个人中心', }, path: 'index', component: () => import('@/views/center/index') },
      { meta: { title: '学习记录', }, path: 'learning', component: () => import('@/views/center/learning') },
      { meta: { title: '答题记录', }, path: 'answer', component: () => import('@/views/center/answer') },
      { meta: { title: '考试答题', }, path: 'examination', component: () => import('@/views/center/examination') },
      { meta: { title: '合同签署', }, path: 'sign', component: () => import('@/views/center/sign') },
      { meta: { title: '查看合同' }, path: 'contract', component: () => import('@/views/center/contract') },
      { meta: { title: '订单记录', }, path: 'order', component: () => import('@/views/center/order') },
      { meta: { title: '意见反馈', }, path: 'feedback', component: () => import('@/views/center/feedback') },
      { meta: { title: '关于我们', }, path: 'about', component: () => import('@/views/center/about') },
      { meta: { title: '支付中心', }, path: 'pay', component: () => import('@/views/center/pay') },
      { meta: { title: '爆款货源', isShow: false }, path: 'hot', component: () => import('@/views/center/hot') },
      { meta: { title: '修改资料', isShow: false }, path: 'changinfo', component: () => import('@/views/center/changinfo') },
    ]
  },
  {
    path: '/user',
    component: () => import('@/views/main'),
    redirect: 'center/login',
    children: [
      {
        path: 'login',
        meta: { title: '登录' },
        component: () => import('@/views/login'),
      },
      {
        path: 'register',
        title: '注册',
        meta: { title: '注册' },
        component: () => import('@/views/register'),
      },]
  },
  {
    path: '/yz',
    component: () => import('@/views/yz')
  },
  {
    path: '/sign', component: () => import('@/views'), meta: { isAuth: true, },
    redirect: 'sign/select',
    children: [
      { path: 'select', component: () => import('@/views/sign/select'), meta: { title: '套餐选择' } },
      { path: 'sign', component: () => import('@/views/sign/sign'), meta: { title: '签署合同' } },
      { path: 'see', component: () => import('@/views/sign/see'), meta: { title: '查看合同' } },
    ]
  }

];

const router = new VueRouter({
  // mode: "history",
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});
router.beforeEach((to, from, next) => {
  let userInfo = getCookie('userInfo');
  if (to.matched.some(e => e.meta.isAuth)) {
    if (!userInfo || userInfo && userInfo.datetime < Date.now()) {
      next('/user/login')
      return
    }
  }
  next()
});
export default router;
