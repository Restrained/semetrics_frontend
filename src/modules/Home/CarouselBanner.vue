<template>
  <div class="carousel-box">
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      class="my-swiper"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <div class="slide-content">
          <img :src="img.src" :alt="img.alt" class="slide-img" />
          <div class="slide-btn-wrapper">
            <div class="SwaButton cursor SwaButton_default SwaButton_default_big">
              {{ img.buttonText }}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  {
    src: '/images/banner/banner1.jpg',
    alt: '轮播图 1',
    buttonText: '查看详细数据',
  },
  {
    src: '/images/banner/banner2.jpg',
    alt: '轮播图 2',
    buttonText: '查看详细数据',
  },
  {
    src: '/images/banner/banner3.jpg',
    alt: '轮播图 3',
    buttonText: '查看全文报告',
  },
]
</script>

<style scoped>
.carousel-box {
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
}

.my-swiper {
  height: 100%;
  width: 100%;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 按钮居中对齐容器 */
.slide-btn-wrapper {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

/* 模拟官网按钮样式 */
.SwaButton {
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
}

.SwaButton_default {
  background: #194f9a;
  color: #fff;
}

.SwaButton_default_big {
  line-height: 64px;
  padding: 0 32px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
