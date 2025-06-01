<template>
  <div
    @click="open = !open"
    class="bg-[#0e1b2f] rounded-lg px-4 py-3 cursor-pointer transition-all duration-300 hover:shadow-lg"
  >
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <ChevronDown
        :class="{ 'rotate-180': open }"
        class="w-4 h-4 transition-transform duration-300"
      />
    </div>
    <transition name="fade">
      <div v-show="open" class="mt-3 text-sm text-gray-300">
        <p>{{ description }}</p>
        <button
          v-if="button"
          class="mt-3 inline-block px-3 py-1 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition"
        >
          了解更多
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

defineProps(['title', 'description', 'button'])
const open = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
