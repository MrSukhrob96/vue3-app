import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    // component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
