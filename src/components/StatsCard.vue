<template>
  <div
    class="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer p-6 flex items-center space-x-4"
  >
    <!-- 图标区域（可选添加图标） -->
    <div class="p-3 bg-indigo-100 text-indigo-600 rounded-full">
      <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 sm:h-5 sm:w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  > -->
        <!-- <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg> -->
    </div>

    <!-- 文字数据区 -->
    <div>
      <div class="text-sm text-gray-500">{{ label }}</div>
      <div class="text-xl font-bold text-gray-900">{{ count }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  count: [String, Number],
})
</script>
