<template>
  <div class="question-card">
    <div class="question-number">Q{{ question.id }} · {{ question.topic }}</div>
    <div class="question-text">你站哪边？</div>
    <div class="stance-options">
      <div
        v-for="option in question.options"
        :key="option.id"
        class="stance-option"
        :class="{ selected: selected === option.id }"
        @click="select(option)"
      >
        <div class="stance-option-text">{{ option.text }}</div>
        <div class="stance-option-desc">{{ option.desc }}</div>
        <div v-if="selected" class="stance-stat">
          <span>{{ option.fakeStat }}% 的人和你一样</span>
          <div class="stance-stat-bar">
            <div class="stance-stat-fill" :style="{ width: option.fakeStat + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
    <button
      v-if="selected"
      class="btn-next"
      @click="$emit('next')"
    >
      下一题
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: Object, required: true }
})
const emit = defineEmits(['answer', 'next'])

const selected = ref(null)

function select(option) {
  if (selected.value) return
  selected.value = option.id
  emit('answer', { questionId: props.question.id, optionId: option.id })
}
</script>
