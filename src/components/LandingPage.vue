<template>
  <div class="landing-page">
    <div class="landing-content">
      <div class="landing-logo">🍜</div>
      <h1 class="landing-title">食格测试</h1>
      <p class="landing-subtitle">
        你吃东西的方式，<br>暴露了你是什么样的人。
      </p>
      <div class="landing-badge">22 道题 · 5 分钟</div>
      <button class="btn-start" @click="$emit('start')">开始测试</button>
    </div>
    <div class="landing-brand">灵感验证局 #001</div>
  </div>
</template>

<script setup>
defineEmits(['start'])
</script>
