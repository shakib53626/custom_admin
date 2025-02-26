import { createWebHistory, createRouter } from 'vue-router'

import { HomeView, LoginView } from '../views'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router