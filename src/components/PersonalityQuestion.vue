<template>
  <div class="question-card">
    <div class="question-number">Q{{ question.id }}</div>
    <div class="question-text">{{ question.text }}</div>
    <div class="personality-options">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: Object, required: true }
})
const emit = defineEmits(['answer'])

const selected = ref(null)

function select(option) {
  if (selected.value) return
  selected.value = option.id
  emit('answer', { questionId: props.question.id, optionId: option.id })
  setTimeout(() => {
    emit('auto-next')
  }, 400)
}
</script>
