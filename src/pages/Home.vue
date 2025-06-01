<template>
  <div class="home-container">
    <!-- 顶部栏 -->
    <router-view />
    <!-- 轮播图模块 -->
    <CarouselBanner />
    <!-- 为什么选择我们模块 -->
    <WhySEMetrics />

    <!-- 服务科研用户 -->
    <ResearchServices />
    
    <!-- 高校轮播 -->
    <UniversityShowcase />
    

    <!-- 趋势图 -->
    <!-- <TrendChart :data="trendData" /> -->

    
  </div>
</template>

<script setup>
import CarouselBanner from '@/modules/Home/CarouselBanner.vue'
import ResearchServices from '@/modules/Home/ResearchServices.vue'
import WhySEMetrics from "@/modules/Home/WhySEMetrics.vue"
import UniversityShowcase from '@/modules/Home/UniversityShowcase.vue'
</script>
