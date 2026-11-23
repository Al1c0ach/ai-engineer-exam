/* 题库构建与校验：合并两科题目 → assets/questions.json + assets/questions.js */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");

const META = {
  title: "人工智能工程技术人员（初级）模拟题库",
  exam: "人工智能工程技术人员（初级）",
  version: "1.0.0",
  updatedAt: "2026-11-24",
  notice: "原创模拟题 · 覆盖基础理论与工程实践两科 · 非官方真题",
  subjects: [
    {
      id: "basis", name: "人工智能基础理论", short: "基础理论", icon: "cpu", badge: "科目一",
      desc: "数学与 Python、机器学习、深度学习、自然语言与视觉"
    },
    {
      id: "practice", name: "人工智能工程实践", short: "工程实践", icon: "trend", badge: "科目二",
      desc: "数据与算力、训练部署、产品集成、大模型与合规"
    }
  ],
  chapters: [
    { id: "math-python", subject: "basis", name: "数学与Python基础", short: "数理基础", icon: "book", desc: "线性代数、概率统计、梯度与 Python 数据处理，是后面所有模型的地基。", topics: ["线性代数与矩阵运算", "概率统计基础", "微积分与梯度", "Python与NumPy/Pandas"] },
    { id: "ml", subject: "basis", name: "机器学习基础", short: "机器学习", icon: "target", desc: "监督与无监督、常见算法、损失函数、正则化与评估指标。", topics: ["监督与无监督学习", "常见算法", "损失函数与优化", "过拟合与正则化", "评估指标与交叉验证"] },
    { id: "dl", subject: "basis", name: "深度学习", short: "深度学习", icon: "cpu", desc: "网络结构、反向传播、CNN、注意力机制与训练调参。", topics: ["神经网络结构", "反向传播与优化器", "卷积神经网络", "循环与注意力机制", "训练技巧与调参"] },
    { id: "nlp", subject: "basis", name: "自然语言与语音处理", short: "NLP语音", icon: "book", desc: "分词、Embedding、Transformer、文本任务与语音识别合成。", topics: ["文本预处理与分词", "词向量与Embedding", "预训练模型与Transformer", "文本分类与信息抽取", "语音识别与合成"] },
    { id: "cv", subject: "basis", name: "计算机视觉", short: "计算机视觉", icon: "sparkle", desc: "图像预处理、卷积特征、检测分割、分类增强与推理部署。", topics: ["图像基础与预处理", "卷积与特征提取", "目标检测与分割", "图像分类与数据增强", "视觉模型推理部署"] },
    { id: "data-platform", subject: "practice", name: "数据工程与算力平台", short: "数据算力", icon: "layers", desc: "数据采集标注与清洗、GPU 算力、分布式存储与容器平台。", topics: ["数据采集与标注", "数据清洗与质量", "算力与GPU基础", "存储与分布式训练", "容器与云平台"] },
    { id: "train-deploy", subject: "practice", name: "模型训练与部署", short: "训练部署", icon: "trend", desc: "训练流程、模型压缩量化、推理服务、监控迭代与 MLOps。", topics: ["训练流程与超参数", "模型压缩与量化", "推理服务与API", "监控与迭代", "MLOps与版本管理"] },
    { id: "product", subject: "practice", name: "应用产品集成实现", short: "产品集成", icon: "pen", desc: "需求与方案、算法集成、联调、效果评测与行业落地。", topics: ["需求分析与方案设计", "算法到产品集成", "接口与前后端联调", "效果评测与AB测试", "典型行业应用"] },
    { id: "llm", subject: "practice", name: "大模型与生成式AI应用", short: "大模型", icon: "sparkle", desc: "提示工程、RAG、Agent、微调蒸馏与生成内容审核。", topics: ["大模型基础与提示工程", "RAG检索增强", "Agent与工具调用", "微调与蒸馏", "生成内容安全审核"] },
    { id: "ethics-law", subject: "practice", name: "AI伦理、安全与法规", short: "伦理法规", icon: "book", desc: "个人信息保护、生成式 AI 合规、算法合规与安全操作。", topics: ["数据安全与个人信息保护", "生成式AI服务合规", "算法与推荐合规", "数据标注与版权", "职业素养与安全操作"] }
  ]
};

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
  const parts = path.join(DATA, "_parts");
  const files = [];
  ["subject-basis.json", "subject-practice.json"].forEach((f) => {
    const p = path.join(DATA, f);
    if (fs.existsSync(p)) files.push(p);
  });
  if (!files.length && fs.existsSync(parts)) {
    fs.readdirSync(parts).filter((f) => f.endsWith(".json")).forEach((f) => files.push(path.join(parts, f)));
  }
  files.forEach((f) => {
    const arr = readArray(f);
    if (arr) { all = all.concat(arr); console.log(`读取 ${path.basename(f)}: ${arr.length} 题`); }
  });
  return all;
}

function main() {
  const chapters = META.chapters;
  const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
  const subjectIds = new Set(META.subjects.map((s) => s.id));
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
    if (seen.has(q.id)) errors.push(`${where}: id 重复`);
    seen.add(q.id);
    if (!subjectIds.has(q.subject)) errors.push(`${where}: subject 未知 ${q.subject}`);
    const ch = chapterById[q.chapter];
    if (!ch) errors.push(`${where}: chapter 未知 ${q.chapter}`);
    else if (ch.subject !== q.subject) errors.push(`${where}: chapter ${q.chapter} 不属于 ${q.subject}`);
    else if (!ch.topics.includes(q.topic)) errors.push(`${where}: topic 不在章节范围 ${q.topic}`);
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
      id: q.id, subject: q.subject, chapter: q.chapter, topic: q.topic, type: q.type,
      stem: q.stem.trim().replace(/^（多选）\s*/, ""), options: q.options.map((o) => String(o).trim()),
      answer: q.answer.slice().sort((a, b) => a - b),
      explain: q.explain.trim(), difficulty: q.difficulty,
      tags: Array.isArray(q.tags) ? q.tags.filter((t) => typeof t === "string") : []
    });
  });

  // 题干重复检查
  const stemSeen = new Map();
  clean.forEach((q) => {
    const key = q.stem.replace(/（多选）/g, "").replace(/\s+/g, "");
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

  const order = Object.fromEntries(chapters.map((c, i) => [c.id, i]));
  clean.sort((a, b) => order[a.chapter] - order[b.chapter] || (a.id < b.id ? -1 : 1));

  const chaptersOut = chapters.map((c) => {
    const list = clean.filter((q) => q.chapter === c.id);
    return Object.assign({}, c, {
      count: list.length,
      single: list.filter((q) => q.type === "single").length,
      multi: list.filter((q) => q.type === "multi").length
    });
  });
  const subjectsOut = META.subjects.map((s) => {
    const list = clean.filter((q) => q.subject === s.id);
    return Object.assign({}, s, {
      count: list.length,
      chapterIds: chaptersOut.filter((c) => c.subject === s.id).map((c) => c.id)
    });
  });

  const bank = {
    meta: Object.assign({}, META, {
      total: clean.length,
      single: clean.filter((q) => q.type === "single").length,
      multi: clean.filter((q) => q.type === "multi").length,
      subjects: subjectsOut,
      chapters: chaptersOut
    }),
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
  chaptersOut.forEach((c) => {
    console.log(`  ${c.name.padEnd(12, " ")} ${String(c.count).padStart(3)} 题  单 ${String(c.single).padStart(2)} · 多 ${String(c.multi).padStart(2)}`);
  });
  const tagCount = {};
  clean.forEach((q) => q.tags.forEach((t) => (tagCount[t] = (tagCount[t] || 0) + 1)));
  console.log("标签统计:", JSON.stringify(tagCount));
  const diff = { 1: 0, 2: 0, 3: 0 };
  clean.forEach((q) => (diff[q.difficulty] = (diff[q.difficulty] || 0) + 1));
  console.log(`难度分布: 简单 ${diff[1]} / 中等 ${diff[2]} / 较难 ${diff[3]}`);
}

main();
