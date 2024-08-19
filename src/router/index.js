import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/edit/:page_id',
    name: 'views_edit',
    component: () => import('../views/editor.vue')
  },
  {
    path: '/edit/preview/:page_id',
    name: 'views_edit_preview',
    component: () => import('../views/editor-view.vue')
  }]
})

export default router
