// AI 工程化落地：能力主线 + 自建项目证据
// 叙事：能把 AI 做成业务结果 → 能建评测体系 → 能沉淀方法论 → 能端到端交付

export const aiIntro = {
  meta: "AI Engineering · 工程化落地",
  title: "AI 工程化",
  titleEm: "四层能力。",
  aside:
    "AI 落地不是会调 API。从生产系统到开源方法论，每一层能力都有可验证的产出。",
  narrative: [
    { source: "AI 智能质检（生产）", proof: "能把 AI 做成业务结果 · 3 万+ 门店 · 漏查率 91% → 0" },
    { source: "视觉质检运营中台（自建）", proof: "能建评测与回流体系 · 评测集 · 人审台 · 数据飞轮" },
    { source: "VLM 判定方法论（开源）", proof: "能把判定沉淀成协议 · 召回 16 → 27 · 六场景复用" },
    { source: "AI 拍照诊断应用（自建）", proof: "能端到端交付 AI 产品 · 从 0 到可部署" },
  ],
};

export const aiCapabilities = [
  {
    layer: "Layer 01",
    name: "场景判断",
    desc: "什么交给模型、什么交给规则、什么留给人。",
    evidence: "观察-判定分离协议（OTT）· 人机协同兜底 · 置信度分档路由",
  },
  {
    layer: "Layer 02",
    name: "工程攻坚",
    desc: "输出稳定性、调用成本与延迟、限流并发、质量门。",
    evidence: "LLM 结构化输出治理 · VLM 按轮并行与限流 · 超时降级 · 质量门前置拦截无效调用",
  },
  {
    layer: "Layer 03",
    name: "评测体系",
    desc: "评测集、人审台、坏例回流、误报抽检。",
    evidence: "黄金样本评估 · 人工复核台 · Few-shot 样本库 · 策略配置产品",
  },
  {
    layer: "Layer 04",
    name: "方法论复用",
    desc: "把经验变成可安装、可迁移的资产。",
    evidence: "开源 Agent Skill · 六个场景包 · 同一协议跨场景迁移",
  },
];

export const aiProjects = [
  {
    index: "A1",
    name: "vlm-image-judge",
    type: "开源 Agent Skill · 方法论层",
    badge: "召回 16 → 27 / 30",
    summary:
      "把「图里有没有 X」的视觉判定做成可复用协议：观察与结论拆开、三档标签、闭集枚举、远景裁剪 refine。",
    highlights: [
      "真实监控批次验证：召回从 ≈16 提升到 ≈27（30 张），提升不靠堆判定文案，靠视图管线",
      "六个门店监控场景包复用同一协议，可迁移到安全帽、明火等「图里有没有 X」任务",
      "以 Agent Skill 形态开源，可安装到 Cursor / Claude Code / Codex",
    ],
    link: "https://github.com/ClaireWong86/vlm-image-judge",
    linkLabel: "GitHub ↗",
  },
  {
    index: "A2",
    name: "AI 视觉质检运营中台",
    type: "个人构建 · 平台层",
    badge: "评测集 · 数据飞轮",
    summary:
      "以「规则配置 → AI 推理 → 人工复核 → 样本沉淀 → 评估优化」为主线的质检运营基础设施。",
    highlights: [
      "黄金样本评估 + Few-shot 样本库：让每次策略调整都可被评测，不靠感觉上线",
      "人审结果回流为评测集与 Few-shot 训练资产，构成数据飞轮：复核越多，判定越准",
      "规则支持 Prompt、置信度阈值、复核率与 ROI 配置，策略产品化而非硬编码",
    ],
    link: "",
    linkLabel: "",
  },
  {
    index: "A3",
    name: "AI 轮胎拍照诊断",
    type: "个人构建 · 应用层",
    badge: "从 0 到可部署",
    summary:
      "面向车主/门店的 H5 应用：拍照 → VLM 按轮并行分析 → 质量门拦截 → 结构化报告与证据页。",
    highlights: [
      "一人端到端交付：React 前端 + FastAPI 后端 + VLM 并行编排（超时降级、限流控制）+ 埋点漏斗 + 云端部署",
      "证据页给出 AI 观察、判断依据与照片红框定位——让 AI 的判断可被验证",
      "质量门前置拦截模糊/无效照片，无效请求不进模型，调用成本与延迟省在入口",
    ],
    link: "",
    linkLabel: "",
  },
];
