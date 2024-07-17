export default [
  {
    path: "/:pathMatch(.*)*",
    name: "404-Page",
    component: () => import('@/views/error/404ErrorPageView.vue')
  }
]