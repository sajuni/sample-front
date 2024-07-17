import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from './auth'
import ErrorRoutes from './error'
import MemberInfoRoutes from './memberInfo'
import { useAuthStore } from '@/pinia/modules/auth'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...AuthRoutes,
    ...ErrorRoutes,
    ...MemberInfoRoutes,
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const token = authStore.tokenInfo.accessToken

  if (to.path !== "/") {
    if(!token) {
      return next({
        path: "/"
      })
    } else {
      next()
    }
  } else {
    next()
  }


})

export default router
