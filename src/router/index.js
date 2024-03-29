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
    {
      path: '/hr',
      name: 'hr',

      component: () => import('../views/Hr.vue')
    },
    {
      path: '/marketing',
      name: 'marketing',

      component: () => import('../views/Marketing.vue')
    },
    {
      path: '/pr',
      name: 'pr',

      component: () => import('../views/Pr.vue')
    },
    {
      path: '/sales',
      name: 'sales',

      component: () => import('../views/Sales.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',

      component: () => import('../views/Quiz.vue')
    },
    {
      path: '/signup',
      name: 'signup',

      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/Login.vue')
    },
    {
      path: '/reset',
      name: 'reset',

      component: () => import('../views/reset.vue')
    },
    {
      path: '/profile',
      name: 'profile',

      component: () => import('../views/Profile.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },


})
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
export default router
