<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="keyword"
      @keydown.enter="handleSearch"
      placeholder="请输入关键词，例如作者名、成果标题等"
    />
    <button @click="handleSearch">搜索</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')
const emit = defineEmits(['search'])

function handleSearch() {
  if (keyword.value.trim()) {
    emit('search', keyword.value.trim())
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
