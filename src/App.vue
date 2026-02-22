<template>
  <div id="shige-app">
    <!-- 落地页 -->
    <LandingPage v-if="screen === 'landing'" @start="startQuiz" />

    <!-- 答题阶段 -->
    <template v-if="screen === 'quiz'">
      <ProgressBar
        :current="currentIndex + 1"
        :total="questions.length"
        :section-label="currentSectionLabel"
      />

      <!-- 段落过渡页 -->
      <SectionIntro
        v-if="showSectionIntro"
        :icon="currentSectionInfo.icon"
        :name="currentSectionInfo.name"
        :desc="currentSectionInfo.desc"
        :button-text="currentIndex === 0 ? '开始答题' : '继续答题'"
        @continue="dismissSectionIntro"
      />

      <!-- 题目 -->
      <template v-else>
        <Transition name="slide" mode="out-in">
          <StanceQuestion
            v-if="currentQuestion.section === 'stance'"
            :key="currentQuestion.id"
            :question="currentQuestion"
            @answer="recordAnswer"
            @next="nextQuestion"
          />
          <PersonalityQuestion
            v-else-if="currentQuestion.section === 'personality'"
            :key="currentQuestion.id"
            :question="currentQuestion"
            @answer="recordAnswer"
            @auto-next="nextQuestion"
          />
          <InspirationQuestion
            v-else-if="currentQuestion.section === 'inspiration'"
            :key="currentQuestion.id"
            :question="currentQuestion"
            :is-last="currentIndex === questions.length - 1"
            @answer="recordAnswer"
            @next="currentIndex === questions.length - 1 ? showResult() : nextQuestion()"
          />
        </Transition>
      </template>
    </template>

    <!-- 结果页 -->
    <ResultPage
      v-if="screen === 'result'"
      ref="resultPageRef"
      :personality="resultPersonality"
      :stance-choices="resultStanceChoices"
      :taste-openness="resultTasteOpenness"
      :dimension-display="resultDimensionDisplay"
      :flexibility-modifier="resultFlexibilityModifier"
      @share="generateShareImage"
      @restart="restart"
    />

    <!-- Loading -->
    <div v-if="screen === 'calculating'" class="calculating-screen">
      <div class="calculating-emoji">🔮</div>
      <div class="calculating-text">正在分析你的食格...</div>
    </div>

    <!-- 微信长按保存弹窗 -->
    <div v-if="wechatOverlayVisible" class="wechat-overlay" @click="wechatOverlayVisible = false">
      <div class="wechat-overlay-tip">长按图片保存到相册</div>
      <img :src="wechatImageSrc" class="wechat-overlay-img" />
      <div class="wechat-overlay-close">点击任意位置关闭</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { questions, sectionInfo } from './data/questions.js'
import { personalities } from './data/personalities.js'
import { calculateScores, getPersonalityKey, getDimensionPercentages, getFlexibilityModifier } from './utils/scoring.js'

import LandingPage from './components/LandingPage.vue'
import ProgressBar from './components/ProgressBar.vue'
import SectionIntro from './components/SectionIntro.vue'
import StanceQuestion from './components/StanceQuestion.vue'
import PersonalityQuestion from './components/PersonalityQuestion.vue'
import InspirationQuestion from './components/InspirationQuestion.vue'
import ResultPage from './components/ResultPage.vue'

const screen = ref('landing')
const currentIndex = ref(0)
const answers = ref({})
const showSectionIntro = ref(true)
const resultPageRef = ref(null)
const wechatOverlayVisible = ref(false)
const wechatImageSrc = ref('')

const isWeChat = /MicroMessenger/i.test(navigator.userAgent)

// Section boundaries
const sectionBreaks = { 0: 'stance', 5: 'personality', 17: 'inspiration' }

const currentQuestion = computed(() => questions[currentIndex.value])
const currentSectionLabel = computed(() => {
  const section = currentQuestion.value?.section
  return sectionInfo[section]?.name || ''
})
const currentSectionInfo = computed(() => {
  const section = currentQuestion.value?.section
  return sectionInfo[section] || {}
})

// Result data
const resultPersonality = ref(null)
const resultStanceChoices = ref([])
const resultTasteOpenness = ref(0)
const resultDimensionDisplay = ref([])
const resultFlexibilityModifier = ref(null)

function startQuiz() {
  screen.value = 'quiz'
  currentIndex.value = 0
  answers.value = {}
  showSectionIntro.value = true
}

function dismissSectionIntro() {
  showSectionIntro.value = false
}

function recordAnswer({ questionId, optionId }) {
  answers.value[questionId] = optionId
}

function nextQuestion() {
  const nextIdx = currentIndex.value + 1
  if (nextIdx >= questions.length) {
    showResult()
    return
  }
  // Check if entering new section
  if (sectionBreaks[nextIdx] !== undefined) {
    showSectionIntro.value = true
  }
  currentIndex.value = nextIdx
}

function showResult() {
  screen.value = 'calculating'

  setTimeout(() => {
    const scores = calculateScores(answers.value, questions)
    const key = getPersonalityKey(scores.dimensions)
    const personality = personalities[key]

    resultPersonality.value = personality
    resultTasteOpenness.value = scores.tasteOpenness
    resultFlexibilityModifier.value = getFlexibilityModifier(scores.flexibilityRate)

    // Build stance choices display
    resultStanceChoices.value = scores.stanceChoices.map(sc => ({
      questionId: sc.questionId,
      topic: sc.topic,
      chosenText: sc.chosenOption.text,
      fakeStat: sc.chosenOption.fakeStat
    }))

    resultDimensionDisplay.value = getDimensionPercentages(scores.dimensions)

    screen.value = 'result'
    window.scrollTo(0, 0)
  }, 1500)
}

async function generateShareImage() {
  try {
    const html2canvas = (await import('html2canvas')).default
    const el = resultPageRef.value?.shareCardRef
    if (!el) return

    // Temporarily make visible
    el.style.position = 'fixed'
    el.style.left = '0'
    el.style.top = '0'
    el.style.zIndex = '9999'

    await nextTick()

    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: '#FFFFFF',
      width: 375,
      useCORS: true
    })

    // Hide again
    el.style.position = 'fixed'
    el.style.left = '-9999px'

    const dataUrl = canvas.toDataURL('image/png')

    if (isWeChat) {
      // 微信内置浏览器：弹出全屏弹窗，提示长按保存
      wechatImageSrc.value = dataUrl
      wechatOverlayVisible.value = true
    } else {
      // 非微信：直接触发下载
      const link = document.createElement('a')
      link.download = `食格-${resultPersonality.value.name}.png`
      link.href = dataUrl
      link.click()
    }
  } catch (err) {
    console.error('Share image generation failed:', err)
    alert('分享图生成失败，请尝试截图分享')
  }
}

function restart() {
  screen.value = 'landing'
  currentIndex.value = 0
  answers.value = {}
  showSectionIntro.value = true
  resultPersonality.value = null
  window.scrollTo(0, 0)
}
</script>
