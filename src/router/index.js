// src/router/index.js
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      // 可继续添加 Dashboard、Profile 等子路由
    ],
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login,
      },
    ],
  },
  {
    path: '/register',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
