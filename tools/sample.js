/* 抽样检查题库：随机打印题目与答案，人工核对 */
const fs = require("fs");
const bank = JSON.parse(fs.readFileSync("assets/questions.json", "utf8"));
const qs = bank.questions;
const n = +(process.argv[2] || 10);
const picked = new Set();
while (picked.size < Math.min(n, qs.length)) picked.add(Math.floor(Math.random() * qs.length));
const L = ["A", "B", "C", "D", "E"];
[...picked].forEach((i) => {
  const q = qs[i];
  console.log(`\n[${q.id}] ${q.chapter}/${q.topic} · ${q.type} · 难度${q.difficulty} ${(q.tags || []).join(",")}`);
  console.log(q.stem);
  q.options.forEach((o, k) => console.log(`  ${L[k]}. ${o}`));
  console.log("  答案:", q.answer.map((a) => L[a]).join(","), "|", q.explain);
});
