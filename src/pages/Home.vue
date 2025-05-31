<template>
  <div class="home-container">
    <!-- 顶部栏 -->
    <Header />
    <router-view />
    <!-- 轮播图模块 -->
    <CarouselBanner />
        <!-- 为什么选择我们模块 -->
    <WhySEMetrics />

    <!-- 统计卡片 -->
    <div class="card-grid">
    <!-- 修改这里：添加 @click -->
    <StatsCard
    v-for="item in stats"
    :key="item.label"
    :label="item.label"
    :count="item.count"
    @click="goToDetail(item.label)"
    />
    </div>

    <!-- 趋势图 -->
    <TrendChart :data="trendData" />

    <!-- 底部 -->
    <Footer />
    
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import CarouselBanner from '@/components/CarouselBanner.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import axios from 'axios'
import StatsCard from '@/components/StatsCard.vue'
import WhySEMetrics from "@/components/WhySEMetrics.vue";
import TrendChart from '@/components/TrendChart.vue'

const stats = ref([])
const trendData = ref([])
const router = useRouter()


function goToDetail(label) {
  if (label === '论文') {
    router.push('/achievement')
  }
  // 其他类型后续可扩展
}

onMounted(async () => {
  const res1 = await axios.get('/api/stats')
  stats.value = res1.data

  // 假数据，后面接数据库替换
  trendData.value = [
  { year: 2020, clients: 50, partners: 10, revenue: 100 },
  { year: 2021, clients: 80, partners: 25, revenue: 180 },
  { year: 2022, clients: 120, partners: 40, revenue: 260 },
  { year: 2023, clients: 180, partners: 60, revenue: 400 },
  { year: 2024, clients: 250, partners: 85, revenue: 580 }
]


})

function onSearch(keyword) {
  console.log('搜索关键词：', keyword)
}
</script>
