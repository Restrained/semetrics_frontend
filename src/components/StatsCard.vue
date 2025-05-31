<template>
  <div class="card">
    <div class="label">{{ label }}</div>
    <div class="count">{{ count }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  count: Number
})
</script>

<style scoped>
.card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  text-align: center;
  background-color: #f9fafb;
  flex: 1;
}
.label {
  font-size: 1rem;
  color: #6b7280;
}
.count {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  color: #111827;
}
</style>
