<template>
  <div class="indexCh">
    <!-- 顶部 -->
    <div class="SwaHeaderBox"></div>
    <div class="signEn">
      <!-- 顶部返回栏 -->
      <router-link to="/" class="login_top cursor no-underline">
        <span class="font_swa">&#8592;</span>
        <span class="mL12">返回首页</span>
        <a href="http://101.34.68.200/" title="Back to Home" class="none">
          返回官网
        </a>
      </router-link>


      <!-- 左侧信息区 -->
      <div class="info">
        <div class="centerBox">
          <div class="info_box">
            <div class="title bold">申请访问</div>
            <div class="list">
              <div class="list_item" v-for="(item, index) in infoItems" :key="index">
                <div class="list_item_icon img_reset img_cover">
                  <img :src="item.icon" />
                </div>
                <div class="list_item_text mL20">
                  <span>{{ item.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧表单区 -->
      <div class="from">
        <div class="centerBox">
          <div class="from_box">
            <div class="logo imgReser img_cover">
              <img src="/images/logo/register_logo.png" />
            </div>
            <div class="choose mT16">
              <div class="item bold cursor" :class="{ select_item: userType === 'institutional' }"
                @click="userType = 'institutional'">
                数据服务用户
              </div>
              <div class="item bold cursor" :class="{ select_item: userType === 'corporate' }"
                @click="userType = 'corporate'">
                科研数据用户
              </div>
            </div>

            <div class="form_inputBox mT16">
              <input type="text" placeholder="公司" class="swaInput" v-model="form.company" />
            </div>
            <div class="form_inputBox mT16">
              <input type="text" placeholder="您的名字" class="swaInput" v-model="form.name" />
            </div>
            <div class="form_inputBox mT16">
              <input type="text" placeholder="企业邮箱" class="swaInput" v-model="form.email" />
            </div>
            <div class="Verification mT16">
              <div class="Verification_input">
                <input type="text" placeholder="验证码" class="swaInput" v-model="form.captcha" />
              </div>
              <div class="codesend_btn" @click="sendCaptcha">验证码</div>
            </div>
            <div class="form_inputBox mT16">
              <input type="text" placeholder="请输入您的联系电话" class="swaInput" v-model="form.phone" />
            </div>
            <div class="btn center mT16 cursor" @click="submitForm">提交</div>
            <div class="text center mT16">
              <span>已经有账户了吗?</span>
              <span class="text_btn cursor" @click="goToLogin">登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import icon4 from '@/assets/images/icons/register/register_icon4.png'
import icon5 from '@/assets/images/icons/register/register_icon5.png'
import icon6 from '@/assets/images/icons/register/register_icon6.png'
import icon7 from '@/assets/images/icons/register/register_icon7.png'

const userType = ref('institutional')
const router = useRouter()

const form = reactive({
  company: '',
  name: '',
  email: '',
  captcha: '',
  phone: '',
})

const sendCaptcha = () => {
  console.log('发送验证码', form.email)
}

const submitForm = () => {
  console.log('提交表单', { ...form, userType: userType.value })
}

const goToLogin = () => {
  router.push('/login')
}

const infoItems = [
  {
    icon: icon4,
    text: '超过100,000+品牌的历史数据看板。',
  },
  {
    icon: icon5,
    text: '覆盖400+细分行业的公司洞察与主题研究报告。',
  },
  {
    icon: icon6,
    text: '超过3,000+公司的历史数据智库。',
  },
  {
    icon: icon7,
    text: '覆盖全球最新热点研究&成功案例的分享。',
  },
]
</script>

<style scoped>
.indexCh {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.SwaHeaderBox {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.signEn {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.login_top {
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  position: absolute;
  left: 45px;
  top: 27px;
  text-decoration: none;
}



.font_swa {
  font-family: font_swa !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.info {
  width: 43.75%;
  min-height: 100vh;
  background: url(/images/register/register_bg.png) no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
}

.title {
  font-size: 44px;
  line-height: 52px;
  width: 480px;
}

.list {
  margin-top: 48px;
}

.list_item {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  width: 440px;
  border-bottom: 1px dashed #fff;
  padding-bottom: 32px;
}

.list_item_icon {
  width: 44px;
  height: 44px;
  box-sizing: border-box;
}

.list_item_icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 或 contain，根据你期望的裁剪效果 */
  display: block;
}

.list_item_text {
  width: 376px;
  color: hsla(0, 0%, 100%, 0.78);
}

.centerBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.from {
  width: 56.25%;
  min-height: 100vh;
  background: #fff;
}

.from_box {
  width: 430px;
}

.logo {
  width: 222px;
  /* 根据你设计图设定具体宽度 */
  height: auto;
  margin: 0 auto;
  /* 水平居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* 防止拉伸 */
  display: block;
}

.choose {
  width: 430px;
  height: 66px;
  background: #f5f7fb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  box-sizing: border-box;
}

.item {
  width: 50%;
  height: 50px;
  border-radius: 4px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
}

.select_item {
  background: #194f9a;
  color: #fff;
}

.from_inputBox {
  margin-bottom: 16px;
}

.Verification {
  display: flex;
}

.Verification_input {
  width: 260px;
}

.codesend_btn {
  height: 48px;
  width: 158px;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 83%, 0.5);
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  text-align: center;
  color: #194f9a;
  font-size: 16px;
  line-height: 48px;
}

.btn {
  height: 50px;
  line-height: 50px;
  background: #194f9a;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.btn:hover {
  background: #0d3a75;
}

.text {
  font-size: 14px;
  color: #333;
}

.text_btn {
  color: #194f9a;
  margin-left: 4px;
}

.cursor {
  cursor: pointer;
}

.mT16 {
  margin-top: 16px;
}

.mL12 {
  margin-left: 12px;
}

.mL20 {
  margin-left: 20px;
}

.none {
  display: none;
}

.bold {
  font-family: 'AlibabaPuHuiTi-Bold';
}

.indexCh body,
.indexCh button,
.indexCh input,
.indexCh textarea {
  font-family: 'AlibabaPuHuiTi-Regular';
}

.indexCh .bold {
  font-family: 'AlibabaPuHuiTi-Bold';
}

.form_inputBox,
.Verification_input {
  width: 440px;
}

.swaInput {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
  background-color: #fff;
  color: #111827;
  font-family: 'AlibabaPuHuiTi-Regular';
  box-sizing: border-box;
}

.swaInput::placeholder {
  color: #9ca3af;
}

.Verification {
  display: flex;
  align-items: center;
  width: 440px;
  gap: 12px;
  /* 保持间距 */
}

.Verification_input {
  flex: 1;
  /* 输入框占满剩余空间 */
}

.Verification_input .swaInput {
  height: 48px;
  font-size: 16px;
  font-family: 'AlibabaPuHuiTi-Regular', sans-serif;
  padding: 0 12px;
  box-sizing: border-box;
  width: 100%;
}

.codesend_btn {
  width: 140px;
  /* 稍微缩小 */
  height: 48px;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 83%, 0.5);
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  text-align: center;
  color: #194f9a;
  font-size: 16px;
  line-height: 48px;
  cursor: pointer;
  flex-shrink: 0;
  font-family: 'AlibabaPuHuiTi-Regular', sans-serif;
}

.center {
  text-align: center;
}

.signEn .from .from_box .text {
  font-size: 16px;
  line-height: 22px;
}

.signEn .from .from_box .text_btn {
  color: #194f9a;
}


@font-face {
  font-family: 'font_swa';
  src: url('/fonts/font_swa.woff');
  /* 示例路径 */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'AlibabaPuHuiTi-Regular';
  src: url('/fonts/Alibaba_PuHuiTi_2.0_55_Regular_55_Regular.ttf');
}

@font-face {
  font-family: 'AlibabaPuHuiTi-Bold';
  src: url('/fonts/Alibaba_PuHuiTi_2.0_95_ExtraBold_95_ExtraBold.ttf');
  font-weight: bold;
  font-style: normal;
}

.indexCh * {
  font-family: 'AlibabaPuHuiTi-Regular' !important;
}
</style>
