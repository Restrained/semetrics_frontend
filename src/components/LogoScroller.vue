<template>
  <div class="overflow-hidden h-[130px] w-full bg-gray-50">
    <div
      class="flex whitespace-nowrap animate-scroll"
      :class="{ 'animate-scroll-reverse': reverse }"
      :style="{ animationDuration: `${duration}s` }"
    >
      <div
        v-for="(item, index) in doubledList"
        :key="index"
        class="flex flex-col items-center justify-center w-[210px] h-[120px] mx-4"
      >
        <img :src="item.logo" :alt="item.name" class="w-[200px] h-[70px] object-contain" />
        <p class="text-sm mt-2 text-center text-gray-700 whitespace-nowrap">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  reverse: { type: Boolean, default: false },
  duration: { type: Number, default: 25 },
})

const logos = [
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
const doubledList = computed(() => [...logos, ...logos])
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll {
  animation: scroll linear infinite;
}
.animate-scroll-reverse {
  animation: scroll-reverse linear infinite;
}
</style>
