<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>登录账户</h2>
      <input v-model="email" type="email" placeholder="邮箱" />
      <input v-model="password" type="password" placeholder="密码" />
      <button @click="handleLogin">登录</button>
      <p class="switch-text">
        还没有账号？
        <router-link to="/register">立即注册</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // 处理登录逻辑
  console.log('登录：', email.value, password.value)
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
}
.auth-box {
  background: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 360px;
}
.auth-box h2 {
  margin-bottom: 1rem;
}
.auth-box input {
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.auth-box button {
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #004aad;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.switch-text {
  margin-top: 1rem;
  text-align: center;
}
</style>
