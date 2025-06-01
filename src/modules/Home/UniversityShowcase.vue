<!-- components/UniversityShowcase.vue -->
<template>
    <section class="bg-white py-12 px-4">
        <!-- 标题 -->
        <div class="title pT80 bold center">
            <div class="animate__animated">我们的用户来自这些高校</div>

        </div>

        <!-- 描述语 -->
        <div class="line-3 line-3-customer-resource">
        <div class="line-3-customer-resource-notice">
            高校师生社科研究必备网站
        </div>
        </div>

        <!-- 数字数据部分 -->
        <div class="line-3-customer-resource-number">
        <div class="line-3-customer-resource-number-item">
            <div class="line-3-customer-resource-number-item-title">1000W+人</div>
            <div class="line-3-customer-resource-number-item-notice">浏览次数</div>
        </div>
        <div class="line-3-customer-resource-number-item">
            <div class="line-3-customer-resource-number-item-title">6157242+次</div>
            <div class="line-3-customer-resource-number-item-notice">交易次数</div>
        </div>
        </div>
        <!-- 两行滚动 -->
        <div class="space-y-4">
            <UniversityScroller direction="left" />
            <UniversityScroller direction="right" />
        </div>
    </section>
</template>

<script setup>
import UniversityScroller from './UniversityScroller.vue'
</script>

<style scoped>
.title {
  font-size: 36px;
  line-height: 44px;
  height: 44px;
  color: #333;
}
.pT80 {
  padding-top: 80px;
}
.center {
  text-align: center;
}
.bold {
  font-weight: bold;
}

.line-3-customer-resource {
  text-align: center;
}


.line-3-customer-resource-notice {
  font-size: 18px;
  color: #666;
  line-height: 24px;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 16px; /* 这行现在应该会生效了 */
}

.line-3-customer-resource-number {
  display: flex;
  justify-content: center;
  margin-top: 40px; /* 增加与标题区间距 */
  margin-bottom: 48px; /* 增加与下方滚动模块的间距 */
  gap: 100px; /* 控制两个数字间距 */
}

.line-3-customer-resource-number-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.line-3-customer-resource-number-item-title {
  color: #0276e8;
  font-size: 30px;
  font-weight: bold;
}

.line-3-customer-resource-number-item-notice {
  margin-top: 10px;
  font-size: 18px; /* 字体稍微调大 */
  font-weight: 500;
  color: #444;
}


</style>