// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Achievement from '@/pages/Achievement.vue' // ← 确保路径正确

const routes = [
  { path: '/', component: Home },
  { path: '/achievement', component: Achievement },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
