import { createRouter, createWebHistory } from 'vue-router'
import SampleRoutes from './sample'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...SampleRoutes]
})

export default router
