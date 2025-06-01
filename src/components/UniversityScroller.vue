<!-- components/UniversityScroller.vue -->
<template>
  <div class="scroll-wrapper">
    <div
      class="scroll-track"
      :class="{ reverse: direction === 'right' }"
      :style="{ animationDuration: `${animationDuration}s` }"
    >
      <div
        class="logo-container"
        v-for="(university, index) in doubledList"
        :key="index"
      >
        <img
          :src="university.logo"
          :alt="university.name"
          class="logo-image"
        />
        <p class="logo-text">{{ university.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  direction: {
    type: String,
    default: 'left', // 可为 'left' 或 'right'
  },
})

// 原始高校列表
const universities = [
  { name: "复旦大学", logo: "/img/logo/universities/fudan.svg" },
  { name: "上海财经大学", logo: "/img/logo/universities/shufe.svg" },
  { name: "北京大学", logo: "/img/logo/universities/pku.svg" },
  { name: "对外经济贸易大学", logo: "/img/logo/universities/uibe.svg" },
  { name: "中国人民大学", logo: "/img/logo/universities/ruc.svg" },
  { name: "清华大学", logo: "/img/logo/universities/tsinghua.svg" },
  { name: "华中科技大学", logo: "/img/logo/universities/hust.svg" },
  { name: "中山大学", logo: "/img/logo/universities/sysu.svg" },
  { name: "东南大学", logo: "/img/logo/universities/seu.svg" },
  { name: "南京大学", logo: "/img/logo/universities/nju.svg" },
  { name: "中央财经大学", logo: "/img/logo/universities/cufe.svg" },
  { name: "武汉大学", logo: "/img/logo/universities/whu.svg" },
  { name: "中南财经政法大学", logo: "/img/logo/universities/znufe.svg" },
  { name: "北京师范大学", logo: "/img/logo/universities/bnu.svg" },
  { name: "南开大学", logo: "/img/logo/universities/nankai.svg" },
  { name: "西安交通大学", logo: "/img/logo/universities/xjtu.svg" },
  { name: "浙江大学", logo: "/img/logo/universities/zju.svg" },
  { name: "中南大学", logo: "/img/logo/universities/csu.svg" },
  { name: "山东大学", logo: "/img/logo/universities/sdu.svg" },
  { name: "西南财经大学", logo: "/img/logo/universities/swufe.svg" },
  { name: "四川大学", logo: "/img/logo/universities/scu.svg" },
  { name: "中国科学技术大学", logo: "/img/logo/universities/ustc.svg" },
  { name: "上海交通大学", logo: "/img/logo/universities/sjtu.svg" },
  { name: "厦门大学", logo: "/img/logo/universities/xmu.svg" },
  { name: "华东师范大学", logo: "/img/logo/universities/ecnu.svg" },
  { name: "吉林大学", logo: "/img/logo/universities/jlu.svg" },
  { name: "重庆大学", logo: "/img/logo/universities/cqu.svg" },
];
const doubledList = computed(() => [...universities, ...universities])
const animationDuration = 25
</script>

<style scoped>
.scroll-wrapper {
  overflow: hidden;
  width: 100%;
  height: 140px;
  background-color: #f9fafb;
}

.scroll-track {
  display: flex;
  flex-wrap: nowrap;
  animation: scrollLeft linear infinite;
}

.scroll-track.reverse {
  animation: scrollRight linear infinite;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 130px;
  margin-left: 28px;
  flex-shrink: 0;
}

.logo-image {
  width: 210px;
  height: 70px;
  object-fit: contain;
}

.logo-text {
  margin-top: 6px;
  font-size: 14px;
  white-space: nowrap;
  text-align: center;
  color: #333;
}
</style>
