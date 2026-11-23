/* 题库构建与校验：合并三级别两科题目 → assets/questions.json + assets/questions.js */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");

const LEVELS = [
  { id: "junior", name: "初级", short: "初", desc: "基础概念、常见算法与常用工程做法" },
  { id: "mid", name: "中级", short: "中", desc: "算法实现、模型调优、系统集成与工程排错" },
  { id: "senior", name: "高级", short: "高", desc: "架构设计、平台体系、治理合规与技术决策" }
];

const SUBJECTS = [
  { id: "basis", name: "人工智能基础理论", short: "基础理论", icon: "cpu", badge: "科目一" },
  { id: "practice", name: "人工智能工程实践", short: "工程实践", icon: "trend", badge: "科目二" }
];

function ch(level, subject, slug, name, short, icon, desc, topics) {
  return { id: level + "-" + slug, slug, level, subject, name, short, icon, desc, topics };
}

const CHAPTERS = [
  /* ---------------- 初级 ---------------- */
  ch("junior", "basis", "math-python", "数学与Python基础", "数理基础", "book", "线性代数、概率统计、梯度与 Python 数据处理，是后面所有模型的地基。", ["线性代数与矩阵运算", "概率统计基础", "微积分与梯度", "Python与NumPy/Pandas"]),
  ch("junior", "basis", "ml", "机器学习基础", "机器学习", "target", "监督与无监督、常见算法、损失函数、正则化与评估指标。", ["监督与无监督学习", "常见算法", "损失函数与优化", "过拟合与正则化", "评估指标与交叉验证"]),
  ch("junior", "basis", "dl", "深度学习", "深度学习", "cpu", "网络结构、反向传播、CNN、注意力机制与训练调参。", ["神经网络结构", "反向传播与优化器", "卷积神经网络", "循环与注意力机制", "训练技巧与调参"]),
  ch("junior", "basis", "nlp", "自然语言与语音处理", "NLP语音", "book", "分词、Embedding、Transformer、文本任务与语音识别合成。", ["文本预处理与分词", "词向量与Embedding", "预训练模型与Transformer", "文本分类与信息抽取", "语音识别与合成"]),
  ch("junior", "basis", "cv", "计算机视觉", "计算机视觉", "sparkle", "图像预处理、卷积特征、检测分割、分类增强与推理部署。", ["图像基础与预处理", "卷积与特征提取", "目标检测与分割", "图像分类与数据增强", "视觉模型推理部署"]),
  ch("junior", "practice", "data-platform", "数据工程与算力平台", "数据算力", "layers", "数据采集标注与清洗、GPU 算力、分布式存储与容器平台。", ["数据采集与标注", "数据清洗与质量", "算力与GPU基础", "存储与分布式训练", "容器与云平台"]),
  ch("junior", "practice", "train-deploy", "模型训练与部署", "训练部署", "trend", "训练流程、模型压缩量化、推理服务、监控迭代与 MLOps。", ["训练流程与超参数", "模型压缩与量化", "推理服务与API", "监控与迭代", "MLOps与版本管理"]),
  ch("junior", "practice", "product", "应用产品集成实现", "产品集成", "pen", "需求与方案、算法集成、联调、效果评测与行业落地。", ["需求分析与方案设计", "算法到产品集成", "接口与前后端联调", "效果评测与AB测试", "典型行业应用"]),
  ch("junior", "practice", "llm", "大模型与生成式AI应用", "大模型", "sparkle", "提示工程、RAG、Agent、微调蒸馏与生成内容审核。", ["大模型基础与提示工程", "RAG检索增强", "Agent与工具调用", "微调与蒸馏", "生成内容安全审核"]),
  ch("junior", "practice", "ethics-law", "AI伦理、安全与法规", "伦理法规", "book", "个人信息保护、生成式 AI 合规、算法合规与安全操作。", ["数据安全与个人信息保护", "生成式AI服务合规", "算法与推荐合规", "数据标注与版权", "职业素养与安全操作"]),

  /* ---------------- 中级 ---------------- */
  ch("mid", "basis", "ml", "机器学习进阶", "ML进阶", "target", "集成学习、不平衡数据、可解释性、排序推荐与调参策略。", ["模型调优与超参数", "集成学习与树模型", "类别不平衡处理", "模型可解释性", "推荐与排序模型"]),
  ch("mid", "basis", "dl", "深度学习进阶", "DL进阶", "cpu", "网络设计、预训练迁移、序列建模、损失设计与数值稳定。", ["网络设计与训练策略", "迁移学习与预训练", "序列与注意力建模", "损失函数与优化技巧", "梯度与数值稳定性"]),
  ch("mid", "basis", "nlp", "自然语言与视觉工程", "NLP视觉工程", "book", "语义匹配、序列标注、检测分割工程与多模态对齐。", ["文本表示与语义匹配", "序列标注与信息抽取", "检测与分割工程", "多模态对齐基础", "推理性能与精度权衡"]),
  ch("mid", "basis", "data", "特征工程与数据处理", "特征工程", "layers", "缺失值处理、特征构造编码、采样划分与标注一致性。", ["数据清洗与缺失值", "特征构造与编码", "数据采样与划分", "标注质量与一致性", "数据版本与回溯"]),
  ch("mid", "basis", "opt", "模型评估与优化", "评估优化", "chart", "指标体系、交叉验证、压缩蒸馏、误判分析与实验设计。", ["评估指标体系", "交叉验证与统计显著性", "模型压缩与蒸馏", "误判分析与迭代", "A/B实验设计"]),
  ch("mid", "practice", "sys", "算法工程与代码实现", "工程实现", "pen", "工程规范、复杂度、并行向量化、调试测试与代码评审。", ["算法实现与工程规范", "数据结构与复杂度", "并行与向量化", "调试与单元测试", "代码审查与复用"]),
  ch("mid", "practice", "train", "训练与推理优化", "训练推理优化", "trend", "分布式训练、显存批处理、推理加速、请求调度与容量成本。", ["分布式训练策略", "显存与批处理优化", "推理加速与量化部署", "缓存与请求调度", "成本与容量规划"]),
  ch("mid", "practice", "integ", "AI系统集成", "系统集成", "layers", "接口协议、异步流式、服务解耦、灰度发布与稳定性降级。", ["服务接口与协议", "异步与流式处理", "特征与模型服务解耦", "联调与灰度发布", "稳定性与降级"]),
  ch("mid", "practice", "llm", "大模型应用工程", "大模型应用", "sparkle", "结构化输出、RAG 实现、Agent 编排、微调数据与效果评测。", ["提示工程与结构化输出", "RAG工程实现", "Agent与工具编排", "微调与数据构造", "幻觉与效果评测"]),
  ch("mid", "practice", "risk", "安全与合规实务", "安全合规", "book", "脱敏权限、内容审核风控、模型安全、合规文档与事故响应。", ["数据脱敏与权限", "内容审核与风控", "模型安全与对抗", "合规文档与审计", "事故响应流程"]),

  /* ---------------- 高级 ---------------- */
  ch("senior", "basis", "arch", "算法架构与前沿", "算法架构", "cpu", "架构设计、技术选型、多模态、强化学习与前沿判断。", ["算法架构设计", "技术选型权衡", "多模态大模型", "强化学习与决策", "前沿方向判断"]),
  ch("senior", "basis", "llm", "大模型系统", "大模型系统", "sparkle", "预训练数据策略、对齐后训练、推理架构、长上下文与评测。", ["预训练数据与训练策略", "对齐与后训练", "推理系统架构", "长上下文与检索", "评测体系与基准"]),
  ch("senior", "basis", "dist", "分布式训练与系统", "分布式系统", "layers", "数据/模型并行、通信优化、容错检查点、混合精度与调度。", ["数据并行与模型并行", "通信优化与拓扑", "容错与检查点", "混合精度与显存规划", "集群调度与效率"]),
  ch("senior", "basis", "gov", "AI治理与伦理", "治理伦理", "book", "公平与可解释、隐私计算、风险评估、伦理审查与责任边界。", ["算法公平与可解释", "隐私计算与合规框架", "风险评估与审计", "伦理审查机制", "责任边界与透明度"]),
  ch("senior", "basis", "design", "技术选型与方案论证", "方案论证", "target", "需求转方案、架构权衡、可扩展性、方案评审与技术债。", ["需求到技术方案", "架构权衡与成本", "可扩展性与演进", "方案评审与风险", "技术债治理"]),
  ch("senior", "practice", "platform", "平台与基础设施架构", "平台架构", "layers", "训练推理平台、特征向量存储、算力池化与可观测性。", ["训练平台架构", "推理平台与网关", "特征与向量存储", "算力调度与资源池化", "可观测性与SLA"]),
  ch("senior", "practice", "data", "数据治理与安全体系", "数据治理", "book", "数据资产质量、分级分类、隐私跨境、标注供应链与事件响应。", ["数据资产与质量体系", "数据分级分类", "隐私与跨境合规", "标注与供应链管理", "安全事件响应体系"]),
  ch("senior", "practice", "product", "AI产品架构与落地", "产品架构", "pen", "产品形态论证、场景 ROI、人机协同、规模化交付与运营。", ["产品形态与价值论证", "场景评估与ROI", "人机协同设计", "交付与规模化", "运营与迭代机制"]),
  ch("senior", "practice", "team", "工程体系与团队管理", "团队工程", "target", "研发流程、接口治理、能力建设、发布管理与技术规划。", ["研发流程与规范", "跨团队协作与接口治理", "人才与能力建设", "质量与发布管理", "技术规划与复盘"]),
  ch("senior", "practice", "strategy", "AI战略与创新", "战略创新", "sparkle", "趋势判断、场景组合、创新试点、生态合作与组织能力。", ["行业趋势与竞争分析", "场景组合与投资决策", "创新机制与试点", "生态与合作", "组织能力建设"])
];

const LEVEL_FILES = { junior: ["basis", "practice"], mid: ["basis", "practice"], senior: ["basis", "practice"] };

function readArray(file) {
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "").trim();
  if (!raw) return null;
  const data = JSON.parse(raw);
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.questions)) return data.questions;
  throw new Error(`${path.basename(file)} 不是题目数组`);
}

function loadAll() {
  let all = [];
  const files = [];
  Object.keys(LEVEL_FILES).forEach((lvl) => {
    LEVEL_FILES[lvl].forEach((sub) => {
      const p = path.join(DATA, `level-${lvl}-${sub}.json`);
      if (fs.existsSync(p)) files.push({ level: lvl, file: p });
    });
  });
  if (!files.length) throw new Error("data/ 下没有找到 level-<级别>-<科目>.json");
  files.forEach(({ level, file }) => {
    const arr = readArray(file);
    if (!arr) return;
    arr.forEach((q) => { q._level = level; });
    all = all.concat(arr);
    console.log(`读取 ${path.basename(file)}: ${arr.length} 题（${level}）`);
  });
  return all;
}

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleArr(arr, rnd) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}
function combinations(n, k) {
  const out = [];
  (function rec(start, cur) {
    if (cur.length === k) { out.push(cur.slice()); return; }
    for (let i = start; i < n; i++) { cur.push(i); rec(i + 1, cur); cur.pop(); }
  })(0, []);
  return out;
}

/* 把正确答案轮转分配到不同位置，并同步重排选项；分布按级别统计均衡。
   解析里用“第N项/前三项/最后一项”之类位置指代的题保持原序，避免指代错位。 */
const POSITIONAL = /第[一二三四]项|[前后][一二三四]项|最后一项|首项|其余[一二三四]项/;
function rebalanceAnswers(list) {
  const counters = {};
  let skipped = 0;
  list.forEach((q) => {
    if (POSITIONAL.test(q.explain)) { skipped++; return; }
    const n = q.options.length;
    const key = q.level + ":" + q.type + ":" + q.answer.length;
    counters[key] = counters[key] || 0;
    const turn = counters[key]++;
    const k = q.answer.length;

    let targets;
    if (k === 1) {
      targets = [turn % n];
    } else {
      const combos = combinations(n, k);
      targets = combos[turn % combos.length].slice();
    }

    const origOptions = q.options.slice();
    const correct = q.answer.slice();
    const wrong = [];
    for (let i = 0; i < n; i++) if (correct.indexOf(i) === -1) wrong.push(i);

    const rnd = mulberry32(hashStr(q.id));
    shuffleArr(correct, rnd);
    shuffleArr(wrong, rnd);

    const newOptions = new Array(n);
    targets.forEach((pos, j) => { newOptions[pos] = origOptions[correct[j]]; });
    const rest = [];
    for (let p = 0; p < n; p++) if (targets.indexOf(p) === -1) rest.push(p);
    shuffleArr(rest, rnd);
    rest.forEach((pos, j) => { newOptions[pos] = origOptions[wrong[j]]; });

    q.options = newOptions;
    q.answer = targets.slice().sort((a, b) => a - b);
  });
  if (skipped) console.log(`答案重排：跳过 ${skipped} 道（解析含位置指代，保持原序）`);
}

function main() {  const chapterById = Object.fromEntries(CHAPTERS.map((c) => [c.id, c]));
  const subjectIds = new Set(SUBJECTS.map((s) => s.id));
  const levelIds = new Set(LEVELS.map((l) => l.id));
  const all = loadAll();

  const errors = [];
  const seen = new Set();
  const clean = [];

  all.forEach((q, i) => {
    const where = `#${i} ${q && q.id ? q.id : "(无 id)"}`;
    if (!q || typeof q !== "object") { errors.push(`${where}: 不是对象`); return; }
    ["id", "subject", "chapter", "topic", "type", "stem", "explain"].forEach((k) => {
      if (typeof q[k] !== "string" || !q[k].trim()) errors.push(`${where}: 缺少 ${k}`);
    });
    if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`${where}: options 非法`);
    if (!Array.isArray(q.answer) || !q.answer.length) errors.push(`${where}: answer 非法`);
    if (!levelIds.has(q._level)) errors.push(`${where}: 级别未知 ${q._level}`);
    if (seen.has(q.id)) errors.push(`${where}: id 重复（不同级别也要唯一）`);
    seen.add(q.id);
    if (!subjectIds.has(q.subject)) errors.push(`${where}: subject 未知 ${q.subject}`);

    const fullId = `${q._level}-${q.chapter}`;
    const chp = chapterById[fullId];
    if (!chp) errors.push(`${where}: chapter 未定义 ${fullId}（级别 ${q._level} 没有 slug ${q.chapter}）`);
    else if (chp.subject !== q.subject) errors.push(`${where}: chapter ${fullId} 不属于 ${q.subject}`);
    else if (!chp.topics.includes(q.topic)) errors.push(`${where}: topic 不在章节范围 ${q.topic}`);

    if (!["single", "multi"].includes(q.type)) errors.push(`${where}: type 非法 ${q.type}`);
    if (Array.isArray(q.options) && Array.isArray(q.answer)) {
      q.answer.forEach((a) => {
        if (!Number.isInteger(a) || a < 0 || a >= q.options.length) errors.push(`${where}: answer 下标越界 ${a}`);
      });
      if (new Set(q.answer).size !== q.answer.length) errors.push(`${where}: answer 有重复下标`);
      if (q.type === "single" && q.answer.length !== 1) errors.push(`${where}: 单选 answer 应只有 1 个`);
      if (q.type === "multi" && (q.answer.length < 2 || q.answer.length > 3)) errors.push(`${where}: 多选 answer 应为 2~3 个`);
      if (q.type === "multi" && !/多选/.test(q.stem)) errors.push(`${where}: 多选题干缺少“多选”标记`);
    }
    if (typeof q.difficulty !== "number" || q.difficulty < 1 || q.difficulty > 3) q.difficulty = 2;
    if (typeof q.explain !== "string" || q.explain.trim().length < 20) errors.push(`${where}: 解析过短`);
    clean.push({
      id: q.id, level: q._level, subject: q.subject, chapter: fullId, topic: q.topic, type: q.type,
      stem: q.stem.trim().replace(/^（多选）\s*/, ""), options: q.options.map((o) => String(o).trim()),
      answer: q.answer.slice().sort((a, b) => a - b),
      explain: q.explain.trim(), difficulty: q.difficulty,
      tags: Array.isArray(q.tags) ? q.tags.filter((t) => typeof t === "string") : []
    });
  });

  const stemSeen = new Map();
  clean.forEach((q) => {
    const key = q.stem.replace(/\s+/g, "");
    if (stemSeen.has(key)) errors.push(`题干重复: ${q.id} 与 ${stemSeen.get(key)}`);
    else stemSeen.set(key, q.id);
  });

  if (errors.length) {
    console.log("\n❌ 校验失败：");
    errors.slice(0, 40).forEach((e) => console.log("  - " + e));
    if (errors.length > 40) console.log(`  ... 共 ${errors.length} 条`);
    process.exitCode = 1;
    return;
  }

  const order = Object.fromEntries(CHAPTERS.map((c, i) => [c.id, i]));
  clean.sort((a, b) => order[a.chapter] - order[b.chapter] || (a.id < b.id ? -1 : 1));

  /* 答案位置均衡：把正确项轮转分配到各位置，消除“答案总在 B”的规律 */
  rebalanceAnswers(clean);

  const chaptersOut = CHAPTERS.map((c) => {
    const list = clean.filter((q) => q.chapter === c.id);
    return {
      id: c.id, slug: c.slug, level: c.level, subject: c.subject, name: c.name, short: c.short,
      icon: c.icon, desc: c.desc, topics: c.topics,
      count: list.length,
      single: list.filter((q) => q.type === "single").length,
      multi: list.filter((q) => q.type === "multi").length
    };
  });

  const subjectsOut = SUBJECTS.map((s) => {
    const list = clean.filter((q) => q.subject === s.id);
    return Object.assign({}, s, {
      count: list.length,
      chapterIds: chaptersOut.filter((c) => c.subject === s.id).map((c) => c.id)
    });
  });

  const levelsOut = LEVELS.map((l) => {
    const list = clean.filter((q) => q.level === l.id);
    return Object.assign({}, l, {
      count: list.length,
      single: list.filter((q) => q.type === "single").length,
      multi: list.filter((q) => q.type === "multi").length,
      chapterIds: chaptersOut.filter((c) => c.level === l.id).map((c) => c.id)
    });
  });

  const bank = {
    meta: {
      title: "人工智能工程技术人员（初中高级）模拟题库",
      exam: "人工智能工程技术人员",
      version: "2.0.0",
      updatedAt: "2026-11-24",
      notice: "原创模拟题 · 初中高三级 · 非官方真题",
      total: clean.length,
      single: clean.filter((q) => q.type === "single").length,
      multi: clean.filter((q) => q.type === "multi").length,
      levels: levelsOut,
      subjects: subjectsOut,
      chapters: chaptersOut
    },
    questions: clean
  };

  fs.writeFileSync(path.join(ROOT, "assets", "questions.json"), JSON.stringify(bank), "utf8");
  fs.writeFileSync(
    path.join(ROOT, "assets", "questions.js"),
    "/* 题库数据（构建产物，勿手改；源数据见 data/） */\nwindow.__QB = " + JSON.stringify(bank) + ";\n",
    "utf8"
  );

  console.log("\n✅ 构建完成");
  console.log(`总题数 ${bank.meta.total}（单选 ${bank.meta.single} / 多选 ${bank.meta.multi}）`);
  levelsOut.forEach((l) => {
    console.log(`\n【${l.name}】${l.count} 题（单 ${l.single} · 多 ${l.multi}）`);
    chaptersOut.filter((c) => c.level === l.id).forEach((c) => {
      console.log(`  ${c.name.padEnd(12, " ")} ${String(c.count).padStart(3)} 题  单 ${String(c.single).padStart(2)} · 多 ${String(c.multi).padStart(2)}`);
    });
  });
}

main();
