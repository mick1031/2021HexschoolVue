import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'about',
        component: () => import('@/views/About.vue'),
      },
      {
        path: 'products',
        component: () => import('@/views/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('@/views/Product.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/admin/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('@/views/admin/Products.vue'),
      },
      {
        path: 'coupon',
        component: () => import('@/views/admin/Coupon.vue'),
      },
      {
        path: 'blog',
        component: () => import('@/views/admin/Blog.vue'),
      },
      {
        path: 'order',
        component: () => import('@/views/admin/Order.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
