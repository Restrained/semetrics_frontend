<template>
  <div class="login-page">
    <div class="login-box">
      <!-- Logo 和标题 -->

      <div class="logo">
        <img src="/images/logo/register_logo.png" alt="SeMetrics Logo" />
      </div>
      <div class="login-title">SeMetrics - 科研与教育数据服务平台</div>

      <!-- 登录表单 -->
      <div class="form-section">
        <h2 class="form-title">登录账户</h2>
        <input v-model="email" type="email" placeholder="请输入邮箱" />
        <input v-model="password" type="password" placeholder="请输入密码" />
        <button @click="handleLogin">登录</button>

        <!-- 协议与忘记密码 -->
        <div class="extra-options">
  <div class="remeber" @click="rememberMe = !rememberMe">
    <div class="LeonCheckbox cursor">
      <div class="flex">
        <div
          class="font_swa icon-checkbox"
          :class="{ checked: rememberMe }"
        ></div>
      </div>
    </div>
    <span class="mL4">记住账号密码</span>
  </div>
  <span class="forgot-password">忘记密码？</span>
</div>

        <!-- 协议提示 -->
        <!-- <div class="protocol">
          同意我们的
          <span class="link">服务条款</span> 和
          <span class="link">隐私政策</span>
        </div> -->

        <!-- 注册引导 -->
        <div class="register-section">
          <span>没有账户？</span>
          <router-link to="/register" class="register-link">注册免费帐户</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  console.log('登录：', email.value, password.value)
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: url(/images/login/login_background.png) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica Neue', sans-serif;
  padding: 2rem;
}

.login-box {
  width: 450px;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}


.logo {
  width: 222px;
  height: auto;
  margin: 0 auto 12px auto; /* 底部间距 + 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.login-title {
  font-size: 16px;
  margin-top: 8px;
}

.form-section {
  text-align: left;
}

.form-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

input {
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

button {
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #194f9a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: #235eb0;
}
button:active {
  background-color: #114183;
}

.extra-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 14px;
}

.forgot-password {
  color: #194f9a;
  cursor: pointer;
}

.protocol {
  font-size: 14px;
  margin-top: 1rem;
  text-align: center;
}
.protocol .link {
  color: #0062d6;
  cursor: pointer;
  margin: 0 2px;
}
.protocol .link:hover {
  text-decoration: underline;
}

.register-section {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 14px;
  color: #333;
}

.register-link {
  color: #2997ff;
  margin-left: 4px;
  cursor: pointer;
  text-decoration: none;
}
.register-link:hover {
  text-decoration: underline;
}

.remeber {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.LeonCheckbox {
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-right: 6px;
}

.icon-checkbox {
  width: 12px;
  height: 12px;
  background-color: transparent;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
}

.icon-checkbox.checked {
  background-color: #194f9a; /* 选中时颜色 */
}
</style>
