export const sectionInfo = {
  stance: {
    name: '食界站队',
    desc: '争议性食物话题，看看你站哪边',
    icon: '⚔️',
  },
  personality: {
    name: '食性探测',
    desc: '四个维度，解码你的饮食人格',
    icon: '🔍',
  },
  inspiration: {
    name: '味觉灵感',
    desc: '意想不到的食材搭配，准备好被惊到了吗',
    icon: '✨',
  },
};

export const questions = [
  // ==================== SECTION 1: 食界站队 (stance) ====================
  {
    id: 1,
    section: 'stance',
    topic: '豆腐脑',
    options: [
      {
        id: 'A',
        text: '甜的才是正统',
        desc: '加糖是对豆腐脑的基本尊重',
        fakeStat: 62,
      },
      {
        id: 'B',
        text: '咸的才叫豆腐脑',
        desc: '甜的那叫甜品好吧',
        fakeStat: 38,
      },
    ],
  },
  {
    id: 2,
    section: 'stance',
    topic: '粽子',
    options: [
      {
        id: 'A',
        text: '肉粽',
        desc: '没有肉的粽子没有灵魂',
        fakeStat: 55,
      },
      {
        id: 'B',
        text: '甜粽/素粽',
        desc: '红枣蜜枣才是粽子本来的样子',
        fakeStat: 45,
      },
    ],
  },
  {
    id: 3,
    section: 'stance',
    topic: '番茄炒蛋',
    options: [
      {
        id: 'A',
        text: '放糖',
        desc: '不放糖的番茄炒蛋是不完整的',
        fakeStat: 41,
      },
      {
        id: 'B',
        text: '不放糖',
        desc: '放糖是异端',
        fakeStat: 59,
      },
    ],
  },
  {
    id: 4,
    section: 'stance',
    topic: '火锅蘸料',
    options: [
      {
        id: 'A',
        text: '麻酱',
        desc: '万物皆可麻酱',
        fakeStat: 48,
      },
      {
        id: 'B',
        text: '油碟',
        desc: '油碟才能尝到食材本味',
        fakeStat: 52,
      },
    ],
  },
  {
    id: 5,
    section: 'stance',
    topic: '荷包蛋',
    options: [
      {
        id: 'A',
        text: '全熟',
        desc: '流心的看着就不安全',
        fakeStat: 44,
      },
      {
        id: 'B',
        text: '溏心',
        desc: '全熟的蛋黄噎人你不知道吗',
        fakeStat: 56,
      },
    ],
  },

  // ==================== SECTION 2: 食性探测 (personality) ====================
  {
    id: 6,
    section: 'personality',
    text: '周末想出去吃顿好的，你更可能怎么做？',
    options: [
      {
        id: 'A',
        text: '去那家吃了无数次但每次都满意的老店',
        scores: { nostalgic: 3 },
      },
      {
        id: 'B',
        text: '打开大众点评搜"附近新开"',
        scores: { adventurous: 3 },
      },
      {
        id: 'C',
        text: '先翻翻老店菜单，没新菜就找新的',
        scores: { nostalgic: 1 },
      },
      {
        id: 'D',
        text: '让朋友推荐一家没去过的',
        scores: { adventurous: 1 },
      },
    ],
  },
  {
    id: 7,
    section: 'personality',
    text: '拿到菜单，你的视线先落在哪？',
    options: [
      {
        id: 'A',
        text: '直接找上次点的那道菜',
        scores: { nostalgic: 3 },
      },
      {
        id: 'B',
        text: '先看"主厨推荐"或"本季新品"',
        scores: { adventurous: 2 },
      },
      {
        id: 'C',
        text: '从头看一遍，但大概率还是点老几样',
        scores: { nostalgic: 1 },
      },
      {
        id: 'D',
        text: '专找没见过、不认识的菜名',
        scores: { adventurous: 3 },
      },
    ],
  },
  {
    id: 8,
    section: 'personality',
    text: '如果许一个关于吃的愿望：',
    options: [
      {
        id: 'A',
        text: '再吃一次小时候最爱的那道菜，味道一模一样',
        scores: { nostalgic: 3 },
      },
      {
        id: 'B',
        text: '瞬间传送到世界上任何一家餐厅吃一顿',
        scores: { adventurous: 3 },
      },
    ],
  },
  {
    id: 9,
    section: 'personality',
    text: '哪个画面最让你心动？',
    options: [
      {
        id: 'A',
        text: '沸腾的火锅，红油翻滚，涮完毛肚再来黄喉',
        scores: { hearty: 3 },
      },
      {
        id: 'B',
        text: '安静的日料台前，师傅现握寿司，一贯贯慢慢品',
        scores: { refined: 3 },
      },
      {
        id: 'C',
        text: '大排档铁板烧烤，啤酒碰杯，烟火缭绕',
        scores: { hearty: 2 },
      },
      {
        id: 'D',
        text: '落地窗法餐厅，每道菜都像一幅画',
        scores: { refined: 2 },
      },
    ],
  },
  {
    id: 10,
    section: 'personality',
    text: '服务员问你"辣度怎么选"：',
    options: [
      {
        id: 'A',
        text: '"最辣！变态辣有吗？"',
        scores: { hearty: 3 },
      },
      {
        id: 'B',
        text: '"微辣就好，想尝到食材本身的味道"',
        scores: { refined: 3 },
      },
      {
        id: 'C',
        text: '"中辣，要有点刺激但别盖住其他味"',
        scores: { refined: 1 },
      },
      {
        id: 'D',
        text: '"不辣不吃！辣到出汗才过瘾"',
        scores: { hearty: 2 },
      },
    ],
  },
  {
    id: 11,
    section: 'personality',
    text: '吃饭时最受不了的是？',
    options: [
      {
        id: 'A',
        text: '味道太寡淡，吃了跟没吃一样',
        scores: { hearty: 3 },
      },
      {
        id: 'B',
        text: '环境太嘈杂，没法好好品味食物',
        scores: { refined: 3 },
      },
      {
        id: 'C',
        text: '分量太小，摆盘再好看也填不饱',
        scores: { hearty: 2 },
      },
      {
        id: 'D',
        text: '食材不新鲜，再多调料也掩盖不了',
        scores: { refined: 2 },
      },
    ],
  },
  {
    id: 12,
    section: 'personality',
    text: '最理想的吃饭状态？',
    options: [
      {
        id: 'A',
        text: '一大桌人，菜摆满，热热闹闹',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '一个人，想吃什么吃什么，不用迁就',
        scores: { solo: 3 },
      },
      {
        id: 'C',
        text: '两三个好朋友，边吃边聊',
        scores: { social: 1 },
      },
      {
        id: 'D',
        text: '一个人戴耳机吃，沉浸自己世界',
        scores: { solo: 2 },
      },
    ],
  },
  {
    id: 13,
    section: 'personality',
    text: '深夜突然饿了：',
    options: [
      {
        id: 'A',
        text: '群里吼一声"有人要吃夜宵吗"',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '默默下楼或叫外卖，享受深夜独食',
        scores: { solo: 3 },
      },
      {
        id: 'C',
        text: '给最好的朋友发消息"出来吃"',
        scores: { social: 2 },
      },
      {
        id: 'D',
        text: '自己煮碗面，看着窗外夜景慢慢吃',
        scores: { solo: 2 },
      },
    ],
  },
  {
    id: 14,
    section: 'personality',
    text: '关于"一个人吃火锅"：',
    options: [
      {
        id: 'A',
        text: '太惨了，火锅必须人多才有灵魂！',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '超爽！所有菜都是我的，想涮什么涮什么',
        scores: { solo: 3 },
      },
      {
        id: 'C',
        text: '偶尔可以，但大多时候还是想有人一起',
        scores: { social: 1 },
      },
      {
        id: 'D',
        text: '常规操作，一个人的火锅别有滋味',
        scores: { solo: 2 },
      },
    ],
  },
  {
    id: 15,
    section: 'personality',
    text: '晚上11点看到烤肉视频，你会？',
    options: [
      {
        id: 'A',
        text: '立刻点外卖，人生苦短及时行乐',
        scores: { indulgent: 3 },
      },
      {
        id: 'B',
        text: '狠狠看完过眼瘾，克制地喝杯水睡了',
        scores: { restrained: 3 },
      },
      {
        id: 'C',
        text: '纠结五分钟……还是点了',
        scores: { indulgent: 2 },
      },
      {
        id: 'D',
        text: '收藏视频，明天中午去吃',
        scores: { restrained: 2 },
      },
    ],
  },
  {
    id: 16,
    section: 'personality',
    text: '去吃自助餐，你的策略？',
    options: [
      {
        id: 'A',
        text: '吃回本！从最贵的吃起，扶墙进扶墙出',
        scores: { indulgent: 3 },
      },
      {
        id: 'B',
        text: '每样少拿一点，品种丰富但不过量',
        scores: { restrained: 2 },
      },
      {
        id: 'C',
        text: '先吃爱吃的，吃到撑了再说',
        scores: { indulgent: 2 },
      },
      {
        id: 'D',
        text: '提前饿一顿，但吃的时候控制节奏',
        scores: { restrained: 1 },
      },
    ],
  },
  {
    id: 17,
    section: 'personality',
    text: '哪句话最接近你的食物哲学？',
    options: [
      {
        id: 'A',
        text: '"唯美食与爱不可辜负"',
        scores: { indulgent: 2 },
      },
      {
        id: 'B',
        text: '"你吃的每一口，都在塑造你的身体"',
        scores: { restrained: 3 },
      },
      {
        id: 'C',
        text: '"人生得意须尽欢"',
        scores: { indulgent: 3 },
      },
      {
        id: 'D',
        text: '"饮食有节，起居有常"',
        scores: { restrained: 2 },
      },
    ],
  },

  // ==================== SECTION 3: 味觉灵感 (inspiration) ====================
  {
    id: 18,
    section: 'inspiration',
    combo: '草莓 + 酱油',
    options: [
      {
        id: 'A',
        text: '绝对黑暗料理，别碰我的草莓',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '有点好奇，说不定可以？',
        type: 'open',
      },
      {
        id: 'C',
        text: '我试过！意外地好吃',
        type: 'pioneer',
      },
    ],
    reveal: '日本传统吃法，酱油的咸鲜能激发草莓的甜',
  },
  {
    id: 19,
    section: 'inspiration',
    combo: '西瓜 + 盐',
    options: [
      {
        id: 'A',
        text: '这不是糟蹋水果吗',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '听说过，想试试',
        type: 'open',
      },
      {
        id: 'C',
        text: '很正常啊，甜味更突出',
        type: 'pioneer',
      },
    ],
    reveal: '东南亚/日本常见吃法，少量盐让甜味更强烈',
  },
  {
    id: 20,
    section: 'inspiration',
    combo: '薯条蘸冰淇淋',
    options: [
      {
        id: 'A',
        text: '完全不行',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '麦当劳经典操作',
        type: 'open',
      },
      {
        id: 'C',
        text: '甜咸交织，人生赢家',
        type: 'pioneer',
      },
    ],
    reveal: '麦当劳隐藏菜单之王，全球吃货认证',
  },
  {
    id: 21,
    section: 'inspiration',
    combo: '芒果 + 辣椒粉',
    options: [
      {
        id: 'A',
        text: '水果和辣椒？告辞',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '泰国芒果沙拉好像就是这样',
        type: 'open',
      },
      {
        id: 'C',
        text: '酸甜辣，层次感拉满',
        type: 'pioneer',
      },
    ],
    reveal: '墨西哥和泰国国民小食，街边随处可见',
  },
  {
    id: 22,
    section: 'inspiration',
    combo: '奶酪 + 蜂蜜',
    options: [
      {
        id: 'A',
        text: '各吃各的不好吗',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '西餐厅好像有这种搭配',
        type: 'open',
      },
      {
        id: 'C',
        text: '经典搭配，咸甜碰撞太绝了',
        type: 'pioneer',
      },
    ],
    reveal: '欧洲传统搭配，意大利餐厅必备',
  },
];
