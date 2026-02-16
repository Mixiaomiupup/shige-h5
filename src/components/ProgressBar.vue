<template>
  <div class="progress-bar-container">
    <div class="progress-info">
      <span>{{ sectionLabel }}</span>
      <span>{{ current }}/{{ total }}</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true },
  sectionLabel: { type: String, default: '' }
})

const percentage = computed(() => (props.current / props.total) * 100)
</script>
