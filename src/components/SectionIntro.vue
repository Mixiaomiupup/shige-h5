<template>
  <div class="section-intro">
    <div class="section-icon">{{ icon }}</div>
    <h2 class="section-name">{{ name }}</h2>
    <p class="section-desc">{{ desc }}</p>
    <button class="btn-continue" @click="$emit('continue')">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
  buttonText: { type: String, default: '开始答题' }
})
defineEmits(['continue'])
</script>
