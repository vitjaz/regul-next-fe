import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index-view',
      path: '/',
      component: IndexView,
      children: [
        {
          name: 'index',
          path: '',
          component: () => import('@/pages/Index/IndexPage.vue'),
        },
      ],
    },
  ],
})

export default router
