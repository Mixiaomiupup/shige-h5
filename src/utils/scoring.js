/**
 * Scoring logic for the food personality quiz.
 *
 * Processes answers from 3 question sections:
 *   - Section 1 (stance): Binary choices, no scoring
 *   - Section 2 (personality): Scores across 4 dimension pairs + flexibility tracking
 *   - Section 3 (inspiration): Taste openness measurement
 */

const DIMENSION_LABELS = [
  {
    key: 'explore',
    left: { key: 'nostalgic', label: '恋旧' },
    right: { key: 'adventurous', label: '猎新' },
  },
  {
    key: 'taste',
    left: { key: 'hearty', label: '酣畅' },
    right: { key: 'refined', label: '精致' },
  },
  {
    key: 'social',
    left: { key: 'social', label: '热闹' },
    right: { key: 'solo', label: '独享' },
  },
  {
    key: 'attitude',
    left: { key: 'indulgent', label: '尽兴' },
    right: { key: 'restrained', label: '克制' },
  },
];

/**
 * Calculate all scores from quiz answers.
 *
 * @param {Object} answers - Map of questionId to selected optionId.
 * @param {Array} questions - Full questions array with options and metadata.
 * @returns {{
 *   dimensions: Object,
 *   tasteOpenness: number,
 *   stanceChoices: Array,
 *   flexibilityRate: number
 * }}
 */
export function calculateScores(answers, questions) {
  const dimensions = {
    nostalgic: 0,
    adventurous: 0,
    hearty: 0,
    refined: 0,
    social: 0,
    solo: 0,
    indulgent: 0,
    restrained: 0,
  };

  const stanceChoices = [];
  let openOrPioneerCount = 0;
  let flexibleCount = 0;
  let personalityQuestionCount = 0;

  for (const question of questions) {
    const selectedOptionId = answers[question.id];
    if (selectedOptionId == null) continue;

    const selectedOption = question.options.find(
      (opt) => opt.id === selectedOptionId
    );
    if (!selectedOption) continue;

    if (question.section === 'stance') {
      stanceChoices.push({
        questionId: question.id,
        topic: question.topic,
        chosenOption: selectedOption,
        fakeStat: selectedOption.fakeStat,
      });
    } else if (question.section === 'personality') {
      personalityQuestionCount++;
      if (selectedOption.scores) {
        for (const [dimension, value] of Object.entries(selectedOption.scores)) {
          if (dimension in dimensions) {
            dimensions[dimension] += value;
          }
        }
      }
      if (selectedOption.flexible) {
        flexibleCount++;
      }
    } else if (question.section === 'inspiration') {
      if (selectedOption.type === 'open' || selectedOption.type === 'pioneer') {
        openOrPioneerCount++;
      }
    }
  }

  let tasteOpenness;
  if (openOrPioneerCount <= 1) {
    tasteOpenness = 20;
  } else if (openOrPioneerCount <= 3) {
    tasteOpenness = 60;
  } else {
    tasteOpenness = 90;
  }

  const flexibilityRate = personalityQuestionCount > 0
    ? flexibleCount / personalityQuestionCount
    : 0;

  return { dimensions, tasteOpenness, stanceChoices, flexibilityRate };
}

/**
 * Get flexibility modifier text based on flexibility rate.
 *
 * When a user frequently chooses "看情况/都喜欢" type options (marked flexible),
 * they get a modifier label. This solves the "four dimensions tied" problem.
 *
 * @param {number} flexibilityRate - Ratio of flexible choices (0-1).
 * @returns {string|null} Modifier text, or null if not applicable.
 */
export function getFlexibilityModifier(flexibilityRate) {
  if (flexibilityRate > 0.6) {
    return '百变食神';
  }
  if (flexibilityRate > 0.4) {
    return '随性派';
  }
  return null;
}

/**
 * Derive the personality key string from dimension scores.
 *
 * Compares each dimension pair and picks the dominant trait.
 * Returns a hyphen-separated key like "nostalgic-hearty-social-indulgent".
 *
 * @param {Object} dimensions - Scores for all 8 dimension traits.
 * @returns {string} Personality key.
 */
export function getPersonalityKey(dimensions) {
  const explore =
    dimensions.nostalgic >= dimensions.adventurous ? 'nostalgic' : 'adventurous';
  const taste =
    dimensions.hearty >= dimensions.refined ? 'hearty' : 'refined';
  const social =
    dimensions.social >= dimensions.solo ? 'social' : 'solo';
  const attitude =
    dimensions.indulgent >= dimensions.restrained ? 'indulgent' : 'restrained';

  return `${explore}-${taste}-${social}-${attitude}`;
}

/**
 * Get dimension label metadata for display.
 *
 * @returns {Array<{key: string, left: {key: string, label: string}, right: {key: string, label: string}}>}
 */
export function getDimensionLabels() {
  return DIMENSION_LABELS;
}

/**
 * Calculate display percentages for each dimension pair.
 *
 * Percentage represents the balance between left and right traits,
 * where 0 = fully left, 100 = fully right, 50 = balanced.
 *
 * @param {Object} dimensions - Scores for all 8 dimension traits.
 * @returns {Array<{label: string, leftLabel: string, rightLabel: string, leftValue: number, rightValue: number, percentage: number}>}
 */
export function getDimensionPercentages(dimensions) {
  const dimensionMeta = [
    { label: '探味取向', left: 'nostalgic', right: 'adventurous', leftLabel: '恋旧', rightLabel: '猎新' },
    { label: '口味偏好', left: 'hearty', right: 'refined', leftLabel: '酣畅', rightLabel: '精致' },
    { label: '用餐社交', left: 'social', right: 'solo', leftLabel: '热闹', rightLabel: '独享' },
    { label: '饮食态度', left: 'indulgent', right: 'restrained', leftLabel: '尽兴', rightLabel: '克制' },
  ];

  return dimensionMeta.map(({ label, left, right, leftLabel, rightLabel }) => {
    const leftValue = dimensions[left] || 0;
    const rightValue = dimensions[right] || 0;
    const total = leftValue + rightValue;
    const percentage = total === 0 ? 50 : (rightValue / total) * 100;

    return {
      label,
      leftLabel,
      rightLabel,
      leftValue,
      rightValue,
      percentage: Math.round(percentage),
    };
  });
}
