<template>
  <div class="result-page" v-if="personality">
    <!-- Header -->
    <div class="result-header" :style="{ background: `linear-gradient(180deg, ${personality.color}15, transparent)` }">
      <div class="result-emoji">{{ personality.emoji }}</div>
      <div class="result-name">{{ personality.name }}</div>
      <div v-if="flexibilityModifier" class="result-modifier">{{ flexibilityModifier }}</div>
      <div class="result-tagline">{{ personality.tagline }}</div>
      <div class="result-percent">全国 {{ personality.fakePercent }}% 的人和你一样</div>
    </div>

    <!-- 食格座右铭 -->
    <div class="result-section" v-if="personality.motto">
      <div class="result-section-title">📜 食格座右铭</div>
      <p class="motto-text">{{ personality.motto }}</p>
    </div>

    <!-- 站队结果 -->
    <div class="result-section">
      <div class="result-section-title">⚔️ 你的站队</div>
      <div class="stance-summary">
        <span
          v-for="stance in stanceChoices"
          :key="stance.questionId"
          class="stance-tag"
        >
          {{ stance.topic }}：{{ stance.chosenText }}
        </span>
      </div>
    </div>

    <!-- 味觉开放度 -->
    <div class="result-section">
      <div class="result-section-title">✨ 味觉开放度</div>
      <div class="taste-openness">
        <div class="taste-score">{{ tasteOpenness }}%</div>
        <div class="taste-label">{{ tasteLabel }}</div>
      </div>
    </div>

    <!-- 四维度 -->
    <div class="result-section">
      <div class="result-section-title">📊 四维食格</div>
      <div
        v-for="dim in dimensionDisplay"
        :key="dim.label"
        class="dimension-bar"
      >
        <div class="dimension-labels">
          <span class="dimension-label-left" :class="{ active: dim.percentage <= 50 }">
            {{ dim.leftLabel }}
          </span>
          <span class="dimension-label-right" :class="{ active: dim.percentage > 50 }">
            {{ dim.rightLabel }}
          </span>
        </div>
        <div class="dimension-track">
          <div class="dimension-indicator" :style="{ left: dim.percentage + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- 完整解读 -->
    <div class="result-section">
      <div class="result-section-title">🔮 完整解读</div>
      <p style="font-size:14px;line-height:1.8;color:#8B7355">
        {{ personality.description }}
      </p>
    </div>

    <!-- 纪录片时刻 -->
    <div class="result-section" v-if="personality.documentaryMoment">
      <div class="result-section-title">🎬 纪录片时刻</div>
      <p style="font-size:14px;line-height:1.8;color:#8B7355">{{ personality.documentaryMoment }}</p>
    </div>

    <!-- 名人同款 -->
    <div class="result-section">
      <div class="result-section-title">🌟 名人同款</div>
      <p style="font-size:14px;color:#8B7355">{{ personality.celebrity.name }}：「{{ personality.celebrity.quote }}」</p>
    </div>

    <!-- 最佳饭搭子 & 碰撞组合 -->
    <div class="result-section">
      <div class="result-section-title">🍽️ 饭搭子匹配</div>
      <p style="font-size:14px;color:#8B7355;margin-bottom:8px">最佳饭搭子：<strong>{{ personality.bestMatch }}</strong></p>
      <p style="font-size:14px;color:#8B7355">碰撞组合：<strong>{{ personality.clashMatch }}</strong></p>
    </div>

    <!-- 碰撞预警 -->
    <div class="result-section" v-if="personality.clashScenarios">
      <div class="result-section-title">💥 碰撞预警</div>
      <p style="font-size:13px;color:#8B7355;margin-bottom:12px">和「{{ personality.clashMatch }}」一起吃饭会发生：</p>
      <div
        v-for="(scenario, idx) in personality.clashScenarios"
        :key="idx"
        class="clash-scenario"
      >
        <span class="clash-number">{{ idx + 1 }}</span>
        <span class="clash-text">{{ scenario }}</span>
      </div>
    </div>

    <!-- 隐藏美食搭配 -->
    <div class="result-section">
      <div class="result-section-title">🧪 隐藏美食搭配</div>
      <p style="font-size:15px;font-weight:600;color:var(--color-text);margin-bottom:4px">{{ personality.hiddenCombo.name }}</p>
      <p style="font-size:13px;color:#8B7355">{{ personality.hiddenCombo.desc }}</p>
    </div>

    <!-- 分享按钮 -->
    <button class="btn-share" @click="$emit('share')">
      <span>📤</span> 生成分享图
    </button>

    <!-- 重测 -->
    <div style="text-align:center;padding:0 16px 24px">
      <button
        style="background:none;border:none;color:#8B7355;font-size:14px;cursor:pointer;text-decoration:underline"
        @click="$emit('restart')"
      >
        重新测试
      </button>
    </div>

    <!-- 隐藏的分享卡片 -->
    <div class="share-card" ref="shareCardRef">
      <div class="result-emoji" style="font-size:56px">{{ personality.emoji }}</div>
      <div class="share-card-name" :style="{ color: personality.color }">{{ personality.name }}</div>
      <div v-if="flexibilityModifier" style="font-size:12px;color:#FF6B35;font-weight:600;margin-top:4px">{{ flexibilityModifier }}</div>
      <div class="share-card-tagline">{{ personality.tagline }}</div>
      <div v-if="personality.motto" style="font-size:11px;color:#B8A692;margin:12px 20px 0;line-height:1.5;font-style:italic">{{ personality.motto }}</div>
      <div style="margin:20px 0;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <span
          v-for="stance in stanceChoices"
          :key="stance.questionId"
          class="stance-tag"
          style="font-size:11px;padding:4px 10px"
        >
          {{ stance.topic }}：{{ stance.chosenText }}
        </span>
      </div>
      <div style="font-size:13px;color:#8B7355;margin-bottom:4px">味觉开放度 {{ tasteOpenness }}%</div>
      <div class="share-card-qr">扫码测你的食格 ↑</div>
      <div class="share-card-brand">灵感验证局 #001 · 食格测试</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  personality: { type: Object, required: true },
  stanceChoices: { type: Array, required: true },
  tasteOpenness: { type: Number, required: true },
  dimensionDisplay: { type: Array, required: true },
  flexibilityModifier: { type: String, default: null },
})

defineEmits(['share', 'restart'])

const shareCardRef = ref(null)

const tasteLabel = computed(() => {
  if (props.tasteOpenness <= 20) return '味觉保守派'
  if (props.tasteOpenness <= 60) return '有探索精神'
  return '味觉先锋'
})

defineExpose({ shareCardRef })
</script>
