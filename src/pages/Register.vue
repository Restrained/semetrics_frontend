<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>创建账户</h2>
      <input v-model="name" type="text" placeholder="姓名" />
      <input v-model="email" type="email" placeholder="企业邮箱" />
      <input v-model="password" type="password" placeholder="设置密码" />
      <button @click="handleRegister">注册</button>
      <p class="switch-text">
        已有账号？
        <router-link to="/login">去登录</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  // 处理注册逻辑
  console.log('注册：', name.value, email.value, password.value)
}
</script>

<style scoped>
/* 同 Login.vue */
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
