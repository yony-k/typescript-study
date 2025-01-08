import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      {
        path: 'board',
        component: () => import('layouts/BoardLayout.vue'),
        children: [
          {
            path: 'new',
            component: () => import('pages/NewBoard.vue'),
          },
          {
            path: 'best',
            component: () => import('pages/BestBoard.vue'),
          },
        ],
      },
      {
        path: 'serch/:keyword',
        name: 'serch',
        component: () => import('pages/Serch.vue'),
        props: (route) => ({ keyword: String(route.params.serch) }),
      },
      {
        path: 'apiTest',
        component: () => import('pages/ApiTest.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
