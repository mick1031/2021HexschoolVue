import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: import('../views/admin/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
