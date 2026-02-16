<template>
  <div class="question-card inspiration-card">
    <div class="question-number">Q{{ question.id }} · 味觉灵感</div>
    <div class="combo-title">{{ question.combo }}</div>
    <div class="inspiration-options">
      <div
        v-for="option in question.options"
        :key="option.id"
        class="personality-option"
        :class="{ selected: selected === option.id }"
        @click="select(option)"
      >
        <span class="option-label">{{ option.id }}</span>
        <span class="option-text">{{ option.text }}</span>
      </div>
    </div>
    <div v-if="selected" class="reveal-card">
      <div class="reveal-label">冷知识</div>
      <div class="reveal-text">{{ question.reveal }}</div>
    </div>
    <button
      v-if="selected"
      class="btn-next"
      @click="$emit('next')"
    >
      {{ isLast ? '查看结果' : '下一题' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: Object, required: true },
  isLast: { type: Boolean, default: false }
})
const emit = defineEmits(['answer', 'next'])

const selected = ref(null)

function select(option) {
  if (selected.value) return
  selected.value = option.id
  emit('answer', { questionId: props.question.id, optionId: option.id })
}
</script>
