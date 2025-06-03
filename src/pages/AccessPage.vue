<template>
  <div class="page-access">
    <div class="slogan">
      <div class="slogan-bg-blur"></div>
      <div class="slogan-content">
        <h1 class="slogan-title">申请访问</h1>
        <p class="slogan-desc">填写以下信息，我们将在 1-3 个工作日内与您联系开通试用访问。</p>
      </div>
    </div>

    <div class="apply-panel">
      <form @submit.prevent="handleSubmit">
        <label>
          <span>机构名称</span>
          <input v-model="form.org" type="text" placeholder="请输入您的单位/机构" required />
        </label>
        <label>
          <span>姓名</span>
          <input v-model="form.name" type="text" placeholder="请输入您的姓名" required />
        </label>
        <label>
          <span>邮箱</span>
          <input v-model="form.email" type="email" placeholder="请输入您的邮箱" required />
        </label>
        <label>
          <span>申请说明</span>
          <textarea v-model="form.message" placeholder="请简要说明您申请访问的用途" rows="4"></textarea>
        </label>

        <button type="submit">提交申请</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  org: '',
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  // 此处可添加实际 API 请求逻辑
  alert(`申请已提交，感谢您的填写。\n\n姓名：${form.name}\n邮箱：${form.email}`)
}
</script>

<style scoped>
.page-access {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", "Microsoft YaHei", sans-serif;
  color: #000;
  background: #fff;
  padding-bottom: 100px;
}

.slogan {
  position: relative;
  height: 220px;
  background: linear-gradient(to right, #0057ff, #00a3ff);
  overflow: hidden;
}

.slogan-bg-blur {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('/images/bg.jpg') center/cover no-repeat;
  filter: blur(20px);
  opacity: 0.2;
  z-index: 1;
}

.slogan-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px 0;
  text-align: center;
  color: white;
}

.slogan-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.slogan-desc {
  font-size: 16px;
  opacity: 0.9;
}

.apply-panel {
  max-width: 520px;
  margin: 60px auto 0;
  padding: 40px 30px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.apply-panel form label {
  display: block;
  margin-bottom: 20px;
}

.apply-panel span {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
}

.apply-panel input,
.apply-panel textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border 0.3s;
}

.apply-panel input:focus,
.apply-panel textarea:focus {
  border-color: #409eff;
  outline: none;
}

.apply-panel button {
  width: 100%;
  padding: 12px;
  background-color: #0057ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.apply-panel button:hover {
  background-color: #0044cc;
}
</style>
