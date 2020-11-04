import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  { path: '/', title: '考试答题', component: () => import('@/views/center/examination'), meta: { isAuth: true } },
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
  if (to.matched.some(e => e.meta.isAuth) && !window.localStorage.getItem('userInfo')) {
    next('/user/login')
  } else {
    next()
  }

});
export default router;
