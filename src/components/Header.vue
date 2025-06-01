<template>
    <header class="header-index">
        <div id="head1">
            <!-- 左侧 LOGO 区 -->
            <div class="logoPart logoReser cursor">
                <a href="/" class="logo-link">
                    <!-- <h1 class="logo-title">赛码数据</h1> -->
                    <img src="/images/logo/logo.png" alt="logo" class="logo-img" />
                </a>
            </div>

            <!-- 移动端菜单按钮 -->
            <div class="hamburger" @click="toggleMobileMenu">
                <span></span><span></span><span></span>
            </div>

            <!-- 中间导航栏 -->
            <nav :class="['naviPart', { open: mobileMenuOpen }]">
                <div class="header-col"><a href="/trade/list">数据分析平台</a></div>
                <div class="header-col"><a href="https://semetrics.academy" target="_blank">SEMetrics学院</a></div>
                <div class="header-col"><a href="https://semetrics.ai" target="_blank">SEMetrics AI工具</a></div>
                <div class="header-col"><a href="/project/exchange">项目交易市场</a></div>
                <div class="header-col"><a href="/tools">数据分析工具集</a></div>
                <div class="header-col"><a href="/customer_service_menu">客户支持</a></div>
                <div class="header-col dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
                    <span class="el-dropdown-link">活动参与 <i class="el-icon-arrow-down"></i></span>
                    <transition name="fade">
                        <ul v-if="showDropdown" class="el-dropdown-menu">
                            <li class="el-dropdown-menu__item">免费领取会员</li>
                        </ul>
                    </transition>
                </div>
            </nav>


            <!-- 用户操作区域 -->
            <div class="SwaHeader_right">
                <!-- 申请免费账号按钮 -->
                <div class="SwaButton cursor mR16 SwaButton_default SwaButton_default_default">
                    申请免费账号
                </div>

                <!-- 登录按钮 -->
                <div class="login_btn nav-style-login">登录</div>


            </div>

        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const userAvatar = ref('/img/default-avatar.png')

const showDropdown = ref(false)
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* 基础样式（保留） */
.header-index {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    border-bottom: 1px solid #dcdfe6;
    font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

#head1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 20px;
    flex-wrap: wrap;

    /* 移除 max-width 和 auto 居中 */
    max-width: none;
    margin: 0;
}


/* LOGO 样式 */
.logoPart {
    display: flex;
    align-items: center;
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo-title {
    font-size: 20px;
    color: #333;
    margin-right: 8px;
}

.logo-img {
    max-width: 160px;
    height: auto;
    object-fit: contain;
}

/* 导航栏 */
/* 栏目容器 */
.naviPart {
    display: flex;
    align-items: center;
    margin-left: 40px;
    /* 可调整距离让导航栏离 LOGO 更自然 */
}


.naviPart .header-col {
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    font-family: "PingFang SC-Regular", "PingFang SC", sans-serif;
}

/* 栏目链接 */
.naviPart .header-col a {
    color: inherit;
    text-decoration: none;
}

.naviPart .header-col a:hover {
    color: #194f9a;
}

/* 用户区域整体靠右 */
.SwaHeader_right {
    display: flex;
    color: #333;
    height: 100%;
    align-items: center;
    white-space: nowrap;
    margin-left: auto;
    /* 关键：将它推到最右边 */
}

/* 按钮样式 */
.SwaButton {
    box-sizing: border-box;
    text-align: center;
    display: inline-block;
}

.SwaButton_default {
    background: #194f9a;
    color: #fff;
}

.SwaButton_default_default {
    line-height: 40px;
    font-size: 14px;
    padding: 0 16px;
    border-radius: 4px;
}

/* 登录按钮 - 主题风格扁平化 */
/* 登录按钮样式 - 贴合导航栏 */
.nav-style-login {
    font-family: "PingFang SC-Regular", "PingFang SC", sans-serif;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    padding: 0 12px;
    height: 100%;
    display: flex;
    align-items: center;
    transition: color 0.2s ease;
}

.nav-style-login:hover {
    color: #194f9a;
}


/* 移动端适配 */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    cursor: pointer;
}

.hamburger span {
    height: 3px;
    background: #333;
    border-radius: 2px;
}

@media screen and (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .naviPart {
        display: none;
        flex-direction: column;
        width: 100%;
        background: white;
        padding: 10px;
    }

    .naviPart.open {
        display: flex;
    }

    .header-col {
        margin: 8px 0;
    }
}
</style>
