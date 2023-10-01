import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/list',
      name: 'courselist',

      component: () => import('../views/CourseList.vue')
    },
  ]
})

export default router
