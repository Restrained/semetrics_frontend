<template>
  <div class="w-full overflow-hidden bg-white py-6 space-y-4">
    <!-- 上排 -->
    <div class="marquee-row group">
      <div class="marquee-track" :style="{ animationDuration: duration + 's' }">
        <div
          v-for="(item, index) in upperRow"
          :key="'top-' + index"
          class="flex items-center justify-center mx-6 min-w-[100px]"
        >
          <img :src="item.logo" :alt="item.name" class="h-10 object-contain" />
        </div>
      </div>
    </div>

    <!-- 下排 -->
    <div class="marquee-row group">
      <div
        class="marquee-track-reverse"
        :style="{ animationDuration: duration + 's' }"
      >
        <div
          v-for="(item, index) in lowerRow"
          :key="'bottom-' + index"
          class="flex items-center justify-center mx-6 min-w-[100px]"
        >
          <img :src="item.logo" :alt="item.name" class="h-10 object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const universityList = [
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

const half = Math.ceil(universityList.length / 2);
const upperRow = computed(() => [...universityList.slice(0, half), ...universityList.slice(0, half)]);
const lowerRow = computed(() => [...universityList.slice(half), ...universityList.slice(half)]);

const duration = 50; // 一轮滚动持续秒数
</script>

<style scoped>
.marquee-row {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-track,
.marquee-track-reverse {
  display: flex;
  width: max-content;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.marquee-track {
  animation-name: scroll-left;
  animation-direction: normal;
}

.marquee-track-reverse {
  animation-name: scroll-right;
  animation-direction: normal;
}

.group:hover .marquee-track,
.group:hover .marquee-track-reverse {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
