export const sectionInfo = {
  stance: {
    name: '食界站队',
    desc: '每一道都不只是口味之争，更是灵魂拷问',
    icon: '⚔️',
  },
  personality: {
    name: '食性探测',
    desc: '十二个真实场景，解码你的饮食人格',
    icon: '🔍',
  },
  inspiration: {
    name: '味觉灵感',
    desc: '那些听起来离谱、吃起来真香的搭配',
    icon: '✨',
  },
};

export const questions = [
  // ==================== SECTION 1: 食界站队 (stance) ====================
  {
    id: 1,
    section: 'stance',
    topic: '火锅蘸料',
    options: [
      {
        id: 'A',
        text: '麻酱碟',
        desc: '铜锅涮肉配麻酱韭花腐乳，锅底清淡蘸料补味，这才叫吃火锅',
        fakeStat: 48,
      },
      {
        id: 'B',
        text: '油碟',
        desc: '蒜泥香油才能让红油锅底的鲜辣落地，蘸料是做减法不是加法',
        fakeStat: 52,
      },
    ],
  },
  {
    id: 2,
    section: 'stance',
    topic: '菜上桌了',
    options: [
      {
        id: 'A',
        text: '先吃',
        desc: '趁热吃才对得起这道菜，拍照的时间够我吃三口了',
        fakeStat: 45,
      },
      {
        id: 'B',
        text: '先拍',
        desc: '不拍等于没吃。而且好看的摆盘撑不过30秒',
        fakeStat: 55,
      },
    ],
  },
  {
    id: 3,
    section: 'stance',
    topic: '外卖差3块起送',
    options: [
      {
        id: 'A',
        text: '加个饮料凑满',
        desc: '来都来了，不能亏了这个起送费',
        fakeStat: 58,
      },
      {
        id: 'B',
        text: '换一家不用凑',
        desc: '为了凑单买不需要的东西，才是真的亏',
        fakeStat: 42,
      },
    ],
  },
  {
    id: 4,
    section: 'stance',
    topic: '服务员问你能吃辣吗',
    options: [
      {
        id: 'A',
        text: '中辣 / 特辣',
        desc: '不辣还叫什么吃饭？要的就是满头大汗的痛快',
        fakeStat: 47,
      },
      {
        id: 'B',
        text: '微辣 / 不辣',
        desc: '我是来品味道的，不是来比谁扛辣的',
        fakeStat: 53,
      },
    ],
  },
  {
    id: 5,
    section: 'stance',
    topic: '聚餐桌上还剩最后一块肉',
    options: [
      {
        id: 'A',
        text: '你夹了',
        desc: '犹豫就会败北，肉不等人',
        fakeStat: 41,
      },
      {
        id: 'B',
        text: '你没动',
        desc: '万一别人也想吃呢，让一让又不会少块肉……等一下',
        fakeStat: 59,
      },
    ],
  },

  // ==================== SECTION 2: 食性探测 (personality) ====================
  // --- 探味取向 (nostalgic vs adventurous) ---
  {
    id: 6,
    section: 'personality',
    text: '第一次去一家餐厅，你翻开菜单：',
    options: [
      {
        id: 'A',
        text: '直奔招牌推荐，既然人家最擅长就吃这个',
        scores: { adventurous: 2, nostalgic: 1 },
      },
      {
        id: 'B',
        text: '找自己认识的菜名，至少知道不会踩雷',
        scores: { nostalgic: 3 },
      },
      {
        id: 'C',
        text: '问服务员"有什么别的店吃不到的？"',
        scores: { adventurous: 3 },
      },
      {
        id: 'D',
        text: '看隔壁桌在吃什么，看着不错就来一份',
        scores: { adventurous: 1, nostalgic: 1 },
        flexible: true,
      },
    ],
  },
  {
    id: 7,
    section: 'personality',
    text: '你在一个陌生城市的巷子里，前方同时出现两家店——一家排长队，一家没有人：',
    options: [
      {
        id: 'A',
        text: '排队那家，这么多人排总有道理',
        scores: { nostalgic: 2 },
      },
      {
        id: 'B',
        text: '没人那家，说不定是本地人私藏的宝',
        scores: { adventurous: 3 },
      },
      {
        id: 'C',
        text: '先在外面看看两家菜单再决定',
        scores: { nostalgic: 1, adventurous: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '两家都不去，继续往前走，我相信缘分',
        scores: { adventurous: 2 },
      },
    ],
  },
  {
    id: 8,
    section: 'personality',
    text: '闭上眼睛，想一个让你最有"幸福感"的食物画面：',
    options: [
      {
        id: 'A',
        text: '小时候放学回家，饭桌上永远有的那道菜',
        scores: { nostalgic: 3 },
      },
      {
        id: 'B',
        text: '某次旅行中偶遇的、再也没吃到过的味道',
        scores: { adventurous: 3 },
      },
      {
        id: 'C',
        text: '自己第一次做成功的一道菜',
        scores: { nostalgic: 1, adventurous: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '还没吃过但一直馋的某道菜',
        scores: { adventurous: 2 },
      },
    ],
  },

  // --- 口味偏好 (hearty vs refined) ---
  {
    id: 9,
    section: 'personality',
    text: '如果你可以拥有一个永远不关门的私人食堂，你希望它：',
    options: [
      {
        id: 'A',
        text: '铁锅大灶，炒菜镬气冲天，份量管够',
        scores: { hearty: 3 },
      },
      {
        id: 'B',
        text: '干净明亮的小厨房，每道菜精致摆盘',
        scores: { refined: 3 },
      },
      {
        id: 'C',
        text: '什么都有，看心情选',
        scores: { hearty: 1, refined: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '不用太讲究，但食材一定要好',
        scores: { refined: 2 },
      },
    ],
  },
  {
    id: 10,
    section: 'personality',
    text: '周末想"好好吃一顿"，你脑海里浮现的画面是：',
    options: [
      {
        id: 'A',
        text: '烟火升腾的大排档，满桌子菜，吃到扶墙出',
        scores: { hearty: 3, indulgent: 1 },
      },
      {
        id: 'B',
        text: '灯光柔和的小店，几道菜慢慢吃，不赶时间',
        scores: { refined: 3 },
      },
      {
        id: 'C',
        text: '无所谓环境，关键是这家的味道值得专门去一趟',
        scores: { refined: 1, nostalgic: 1 },
      },
      {
        id: 'D',
        text: '在家自己做，买好食材认真搞一顿',
        scores: { refined: 2 },
      },
    ],
  },
  {
    id: 11,
    section: 'personality',
    text: '好朋友说"今天我请客，你选地方"：',
    options: [
      {
        id: 'A',
        text: '走！那家量大实惠的东北菜/湘菜馆子',
        scores: { hearty: 3 },
      },
      {
        id: 'B',
        text: '正好想试那家新开的日料 omakase',
        scores: { refined: 2, adventurous: 1 },
      },
      {
        id: 'C',
        text: '你选吧，我不挑',
        scores: { hearty: 1, refined: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '去我们常去的那家老店，不用动脑',
        scores: { nostalgic: 2 },
      },
    ],
  },

  // --- 用餐社交 (social vs solo) ---
  {
    id: 12,
    section: 'personality',
    text: '以下哪件事你完全没有心理压力？',
    options: [
      {
        id: 'A',
        text: '一个人走进火锅店，点一个鸳鸯锅',
        scores: { solo: 3 },
      },
      {
        id: 'B',
        text: '在公司食堂一个人吃就行，但火锅还是想找人',
        scores: { social: 1, solo: 1 },
        flexible: true,
      },
      {
        id: 'C',
        text: '一个人吃啥都没问题，但我就是更喜欢有人陪',
        scores: { social: 2 },
      },
      {
        id: 'D',
        text: '一个人吃饭的时候必须看手机/iPad，不能干吃',
        scores: { solo: 2 },
      },
    ],
  },
  {
    id: 13,
    section: 'personality',
    text: '一个你不太熟的同事突然说"中午一起吃饭呀"：',
    options: [
      {
        id: 'A',
        text: '好呀！新认识的人搞不好很有趣',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '嗯……好的（心里想着我的外卖已经下单了）',
        scores: { solo: 3 },
      },
      {
        id: 'C',
        text: '可以，但我叫上另一个人，三个人比两个人自在',
        scores: { social: 1, solo: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '编一个理由婉拒，中午是我的个人充电时间',
        scores: { solo: 2 },
      },
    ],
  },
  {
    id: 14,
    section: 'personality',
    text: '你理想中的"饭搭子"是什么样的？',
    options: [
      {
        id: 'A',
        text: '能喝能聊，吃饭就是为了热闹',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '不需要太多话，安静一起吃就很舒服',
        scores: { solo: 2 },
      },
      {
        id: 'C',
        text: '聊得来最重要，不在于几个人',
        scores: { social: 1, solo: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '我自己就是自己最好的饭搭子',
        scores: { solo: 3 },
      },
    ],
  },

  // --- 饮食态度 (indulgent vs restrained) ---
  {
    id: 15,
    section: 'personality',
    text: '晚上11点，你刷到了一条让你疯狂咽口水的美食视频：',
    options: [
      {
        id: 'A',
        text: '打开外卖app，人这辈子就是不能亏待自己的嘴',
        scores: { indulgent: 3 },
      },
      {
        id: 'B',
        text: '收藏，明天中午作为午餐选项——延迟满足更香',
        scores: { restrained: 2 },
      },
      {
        id: 'C',
        text: '冰箱里翻翻有什么能凑合吃的，解个馋就行',
        scores: { indulgent: 1, restrained: 1 },
        flexible: true,
      },
      {
        id: 'D',
        text: '关掉视频，喝杯水骗自己。但明天绝对要吃到',
        scores: { restrained: 3 },
      },
    ],
  },
  {
    id: 16,
    section: 'personality',
    text: '去吃自助餐，你的核心策略是：',
    options: [
      {
        id: 'A',
        text: '三文鱼虾蟹先安排，吃回本是基本尊重',
        scores: { indulgent: 3 },
      },
      {
        id: 'B',
        text: '每种拿一点尝尝，不贪多但要全面',
        scores: { restrained: 2 },
      },
      {
        id: 'C',
        text: '吃到舒服就行，回不回本无所谓',
        scores: { restrained: 3 },
      },
      {
        id: 'D',
        text: '前半场克制，后半场放飞——先吃贵的再吃爱的',
        scores: { indulgent: 2, restrained: 1 },
        flexible: true,
      },
    ],
  },
  {
    id: 17,
    section: 'personality',
    text: '你正在"管住嘴"的第三天，闺蜜/兄弟发来一张烤肉照："出来吗？"',
    options: [
      {
        id: 'A',
        text: '"来了来了！减肥的事明天再说"',
        scores: { indulgent: 3 },
      },
      {
        id: 'B',
        text: '"去可以，我只吃菜不吃肉"——然后当然吃了肉',
        scores: { indulgent: 2 },
      },
      {
        id: 'C',
        text: '"你们去吧我真不去了"——然后默默点了个沙拉外卖',
        scores: { restrained: 2 },
      },
      {
        id: 'D',
        text: '"这周已经计划好了，下周一起！"——真的等到了下周',
        scores: { restrained: 3 },
      },
    ],
  },

  // ==================== SECTION 3: 味觉灵感 (inspiration) ====================
  {
    id: 18,
    section: 'inspiration',
    combo: '西瓜 + 辣椒面',
    options: [
      {
        id: 'A',
        text: '西瓜是用来解暑的，不是用来受刑的',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '海南人民不会骗我，想试试',
        type: 'open',
      },
      {
        id: 'C',
        text: '吃过！辣味让甜味更炸裂',
        type: 'pioneer',
      },
    ],
    reveal: '海南人民的夏日标配，辣味让甜味更炸裂',
  },
  {
    id: 19,
    section: 'inspiration',
    combo: '饺子蘸酱油',
    options: [
      {
        id: 'A',
        text: '饺子不蘸醋蒜还叫饺子？',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '听说南方人都这么吃，可以试试',
        type: 'open',
      },
      {
        id: 'C',
        text: '从小就蘸酱油，鲜得很',
        type: 'pioneer',
      },
    ],
    reveal: '南方人的日常，北方人的不解——但它真的鲜',
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
    combo: '甜豆腐脑 + 一勺辣椒油',
    options: [
      {
        id: 'A',
        text: '豆腐脑已经够有争议了，别再加料了',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '甜辣混搭？有点想试',
        type: 'open',
      },
      {
        id: 'C',
        text: '成都人的隐藏吃法，甜辣上头',
        type: 'pioneer',
      },
    ],
    reveal: '成都部分地区的隐藏吃法，甜辣混搭意外上头',
  },
  {
    id: 22,
    section: 'inspiration',
    combo: '泡面 + 芝士片 + 溏心蛋',
    options: [
      {
        id: 'A',
        text: '泡面就该简简单单，别整花活',
        type: 'conservative',
      },
      {
        id: 'B',
        text: '芝士拉丝加蛋黄流心？馋了',
        type: 'open',
      },
      {
        id: 'C',
        text: '深夜标配，做过无数次了',
        type: 'pioneer',
      },
    ],
    reveal: '深夜一个人的完美晚餐，全球打工人认证',
  },
];
