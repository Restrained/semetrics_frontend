<template>
  <section class="ForInstitutionalInvestors">
    <div class="container">
      <h2 class="title">服务科研用户</h2>
      <p class="text">从数据获取到洞察报告的全流程服务支持</p>
      <div class="conten">
        <!-- 左侧折叠面板 -->
        <div class="tree">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="DataText"
          >
            <div class="title cursor" @click="toggle(index)">
                <!-- 箭头图标（通过旋转实现） -->
              <span
                class="arrow"
                :class="{ rotated: activeIndex === index }"
              >&#8250;</span>
              <span class="text-lg font-semibold">{{ item.title }}</span>
            </div>
            <div
              class="content"
              v-show="activeIndex === index"
            >
              <p class="text-sm mt-2">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- 右侧图片区域 -->
        <div class="imgBox">
          <img :src="items[activeIndex].image" :alt="items[activeIndex].title" />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? -1 : index
}

const items = ref([
  {
    title: '数据产品',
    description: '为科研人员提供高质量的学科数据集，支持趋势分析与交叉比对。',
    image: '/img/Sandalwood-Go-1.png'
  },
  {
    title: '洞察报告',
    description: '每月更新的领域发展态势，辅助科研决策与项目设计。',
    image: '/img/data-1.png'
  },
  {
    title: '数据平台',
    description: '在线平台支持自助筛选、下载和可视化服务。',
    image: '/img/Insight-Report-1.png'
  }
])
</script>



<style scoped>
.ForInstitutionalInvestors {
  background: #05152b;
  padding: 30px 0 20px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  line-height: 44px;
  height: 44px;
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
}

.text {
  color: hsla(0, 0%, 100%, 0.8);
  height: 30px;
  margin-bottom: 60px;
  text-align: center;
}

.conten {
  width: 1222px;
  display: flex;
  gap: 40px;
}

.tree {
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.DataText {
  color: hsla(0, 0%, 100%, 0.8);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 12px;
  transition: all 0.3s;
}

.DataText .title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0062d6;
}

.DataText .title:hover {
  color: #2b8cff;
}



.iconAction {
  transform: rotate(90deg);
}

.content {
  padding-left: 24px;
  transition: all 0.5s ease;
  overflow: hidden;
  color: hsla(0, 0%, 100%, 0.8);
}

.imgBox {
  width: 902px;
  position: relative;
}

.imgBox img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

</style>
