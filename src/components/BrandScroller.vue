<template>
  <div class="brand-scroller-wrapper">
    <div class="brand-row" :class="'row-1'">
      <div class="brand-track">
        <div class="brand-item" v-for="(brand, index) in repeatedBrands" :key="'row1-' + index">
          <img :src="brand.logo" :alt="brand.name" />
          <p>{{ brand.name }}</p>
        </div>
      </div>
    </div>
    <div class="brand-row" :class="'row-2'">
      <div class="brand-track reverse">
        <div class="brand-item" v-for="(brand, index) in repeatedBrands" :key="'row2-' + index">
          <img :src="brand.logo" :alt="brand.name" />
          <p>{{ brand.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  brands: {
    type: Array,
    required: true,
  },
});

// 为了循环滚动，需要复制两份
const repeatedBrands = [...props.brands, ...props.brands];
</script>

<style scoped>
.brand-scroller-wrapper {
  overflow: hidden;
  background-color: #fff;
  padding: 20px 0;
}

.brand-row {
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 16px;
  position: relative;
  height: 100px;
}

.brand-track {
  display: inline-flex;
  animation: scrollLeft 40s linear infinite;
}

.brand-track.reverse {
  animation: scrollRight 40s linear infinite;
}

.brand-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;
  margin-right: 32px;
  text-align: center;
  font-size: 14px;
  color: #555;
}

.brand-item img {
  width: 210px;
  height: 70px;
  object-fit: contain;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0%);
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
    transform: translateX(0%);
  }
}
</style>
