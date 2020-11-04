import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'app-main',
    component: () => import('@/views/main'),
    redirect: "/commerce/index",
    children: [
      {
        path: 'shops',
        component: () => import('@/views'),
        meta: { title: '装修模板' },
        redirect: 'shops/index',
        children: [
          { path: 'index', component: () => import('@/views/shops/index'), meta: { title: '学习中心', keywords: '', description: '网店装修 - 广艺舟电商_服务中心' } },
          { path: 'details/:id', component: () => import('@/views/shops/details'), meta: { title: '学习中心', keywords: '', description: '网店装修 - 广艺舟电商_服务中心' } },
        ]
      },
      {
        path: 'school',
        component: () => import('@/views'),
        meta: { title: '学习中心' },
        redirect: 'school/index',
        children: [
          { path: 'index', component: () => import('@/views/school/index'), meta: { title: '学习中心', keywords: '', description: '学习中心 - 广艺舟电商_服务中心' } },
          { path: 'details', component: () => import('@/views/school/details'), meta: { title: '学习中心', keywords: '', description: '学习中心 - 广艺舟电商_服务中心' } },
        ]
      },
      {
        path: 'source',
        component: () => import('@/views'),
        meta: { title: '货源中心' },
        redirect: 'source/index',
        children: [
          { path: 'index', component: () => import('@/views/source/index'), meta: { title: '货源中心', keywords: '', description: '货源中心 - 广艺舟电商_服务中心' } },
          { path: 'list', component: () => import('@/views/source/list'), meta: { title: '分类列表', keywords: '', description: '分类列表 - 广艺舟电商_服务中心' } },
          { path: 'details', component: () => import('@/views/source/details'), meta: { title: '商品详情', keywords: '', description: '商品详情 - 广艺舟电商_服务中心' } },
          { path: 'hot', component: () => import('@/views/source/hot'), meta: { isAuth: true, title: '爆款货源', keywords: '', description: '爆款货源 - 广艺舟电商_服务中心' } },
        ]
      },
      {
        path: 'commerce',
        component: () => import('@/views'),
        meta: { title: '电商前沿' },
        redirect: 'commerce/index',
        children: [
          { path: 'index', component: () => import('@/views/commerce/index'), meta: { title: '电商前沿', keywords: '', description: '电商前沿 - 广艺舟电商_服务中心' } },
          { path: 'details', component: () => import('@/views/commerce/details'), meta: { title: '文章详情', keywords: '', description: '文章详情 - 广艺舟电商_服务中心' } },
        ]
      },
    ]
  }]





const router = new VueRouter({
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, form, next) => {

  for (let k in to.meta) {
    let dom = document.createElement('meta');
    dom.setAttribute('name', k);
    dom.setAttribute('content', to.meta[k]);
    document.head.appendChild(dom)
  }
  document.title = to.meta.description;
  next()

})
export default router;
