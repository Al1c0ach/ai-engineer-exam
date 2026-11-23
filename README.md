# AI工题库 · 人工智能工程技术人员（初级）

给手机刷题用的单页应用（PWA）：**240 道原创模拟题**，两科十章，无后端、无广告、无登录，断网可用。

线上地址：https://al1c0ach.github.io/ai-engineer-exam/

手机扫码直达：

<img src="qr.png" width="220" alt="扫码刷题">

| 首页 | 答题 |
| --- | --- |
| <img src="preview-home.png" width="230"> | <img src="preview-question.png" width="230"> |


## 功能

- **分类题库**：基础理论（数理基础 / 机器学习 / 深度学习 / NLP 语音 / 计算机视觉）+ 工程实践（数据算力 / 训练部署 / 产品集成 / 大模型 / 伦理法规），10 章 45 个考点，每章可看考点分布与进度
- **练习**：顺序 / 乱序 / 只做没做过 / 只做错题；单选点击即判，多选勾选后提交；答对答错都出解析
- **模拟测验**：随机抽 50 题，答题时不显示对错，交卷统一判分、列错题、计时
- **错题本 / 收藏**：答错自动收录，答对自动移除；错题和收藏都能一键成组重练
- **学习统计**：累计答题、正确率、连续天数、章节正确率条形图、最近练习记录、薄弱章节建议
- **搜索**：按题干、选项、考点、解析全文检索，直接跳到那道题
- **体验**：深浅色主题、题干字号三档、选项乱序、答对自动下一题、键盘快捷键（1-4 选择 / Enter 下一题 / F 收藏）、进度本地保存（localStorage）、PWA 离线

## 手机使用

1. 手机浏览器打开 https://al1c0ach.github.io/ai-engineer-exam/
2. iPhone：Safari → 分享 → 添加到主屏幕；Android：Chrome → ⋮ → 添加到主屏幕
3. 之后从桌面图标直接进入，断网也能继续刷，进度保存在本机

## 目录结构

```
index.html          页面骨架
assets/styles.css   样式（移动优先 + 桌面侧栏）
assets/app.js       应用逻辑（原生 JS，无依赖）
assets/questions.js 构建产物：window.__QB = {meta, questions}
assets/questions.json 同上，便于外部读取
assets/icons/       PWA 图标
data/subject-*.json 题库源数据（两科各自一个数组）
tools/build.js      合并 + 校验 + 生成 questions.js
tools/icon.html     图标 SVG 源，用来导出 PNG
manifest.json       PWA 清单
sw.js               Service Worker（离线缓存）
```

## 改题库

题目源数据在 `data/`，每道题：

```json
{
  "id": "ml-001",
  "subject": "basis",
  "chapter": "ml",
  "topic": "监督与无监督学习",
  "type": "single",
  "stem": "题干",
  "options": ["A 选项文字", "B 选项文字", "C 选项文字", "D 选项文字"],
  "answer": [1],
  "explain": "解析",
  "difficulty": 2,
  "tags": ["高频"]
}
```

- `type`：`single`（answer 1 个下标）/ `multi`（answer 2~3 个下标，题干前加「（多选）」，构建时会自动去掉这个前缀）
- `answer` 是 **0 基下标**；`chapter` / `topic` 必须与 `tools/build.js` 里 META 定义一致
- 改完执行：

```powershell
cd D:\WUxingString\ai-engineer-exam
node tools/build.js      # 校验并生成 assets/questions.js + questions.json
```

`build.js` 会检查：id 唯一、答案下标合法、单选/多选答案数量、章节与考点归属、题干重复、解析长度，全部通过才写入产物。校验不过会列出问题并以非 0 退出。

## 关于题目

题目依据《人工智能工程技术人员国家职业技术技能标准》与公开学习资料**原创编写**，用于考前自测与知识梳理；覆盖基础理论（数学与 Python、机器学习、深度学习、NLP 与语音、计算机视觉）与工程实践（数据与算力、训练部署、产品集成、大模型应用、伦理法规）两科。

- 共 240 题：单选 191、多选 49；难度 简单 71 / 中等 121 / 较难 48
- **不是官方真题，也不代表正式考试的题量、时长与分值**；发现题目或解析有误，欢迎反馈修订

## 部署

纯静态站点，任意静态托管都能跑（GitHub Pages / Cloudflare Pages / Vercel / 对象存储）。

GitHub Pages 更新流程：

```powershell
git add -A; git commit -m "update"; git push
```

推送后 1~2 分钟内生效；手机端重新打开页面会拿到新版本（HTML 走网络优先，静态资源缓存优先并后台更新）。

## 浏览器支持

iOS Safari 15+、Android Chrome 90+、桌面 Chrome / Edge / Safari 最新版。使用 `color-mix`、`dvh`、`conic-gradient` 等现代特性，过旧浏览器外观会降级但不影响答题。
