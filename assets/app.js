/* AI工题库 · 纯前端刷题应用（无依赖） */
(function () {
  "use strict";

  /* ========================= 图标 ========================= */
  var ICONS = {
    home: '<path d="M3 10.6 12 3.5l9 7.1V20a1 1 0 0 1-1 1h-5.4v-6.2H9.4V21H4a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m3.6 12.4 8.4 4.7 8.4-4.7M3.6 16.8 12 21.5l8.4-4.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    pen: '<path d="M15.5 4.5 19.5 8.5 8.6 19.4l-4.6 1.1 1.1-4.6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m13.4 6.6 4 4" stroke="currentColor" stroke-width="1.8"/>',
    timer: '<circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 9v4.4l3 1.8M9.2 3h5.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    rotate: '<path d="M20 12a8 8 0 1 1-2.6-5.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M20.2 3.6v4.6h-4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    star: '<path d="m12 3.6 2.6 5.5 5.9.8-4.3 4.2 1 6-5.2-2.9-5.2 2.9 1-6L3.5 9.9l5.9-.8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    flame: '<path d="M12 3c3.6 4 6 6.4 6 10a6 6 0 0 1-12 0c0-2 .8-3.6 2.2-5.3.6 1.6 1.4 2.4 2.4 2.6C11.9 7.9 11.6 5.4 12 3z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    gear: '<circle cx="12" cy="12" r="3.1" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.8v2.4M12 18.8v2.4M4.5 7.4l2 1.2M17.5 15.4l2 1.2M4.5 16.6l2-1.2M17.5 8.6l2-1.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
    search: '<circle cx="11" cy="11" r="6.4" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="m16 16 4.4 4.4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
    moon: '<path d="M20 14.4A8.2 8.2 0 0 1 9.6 4a8.4 8.4 0 1 0 10.4 10.4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    sun: '<circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.6v2.3M12 19.1v2.3M4.4 12H2.1M21.9 12h-2.3M6.6 6.6 5 5M19 19l-1.6-1.6M6.6 17.4 5 19M19 5l-1.6 1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    cpu: '<rect x="6.5" y="6.5" width="11" height="11" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".55"/><path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    trend: '<path d="M3 17.5 9 11l3.6 3.4L21 5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5h5v5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
    arrow: '<path d="M5 12h13.5M12.5 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
    chevL: '<path d="m14.5 6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
    chevR: '<path d="m9.5 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
    close: '<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
    check: '<path d="m4.5 12.5 5 5 10-11" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>',
    xmark: '<path d="M7 7l10 10M17 7 7 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    bulb: '<path d="M9 17.5a6 6 0 1 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9.4 17.5h5.2M10.2 20.5h3.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    target: '<circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>',
    shuffle: '<path d="M3 6h3.6c1.4 0 2.4.7 3.2 1.9l4.4 8.2c.8 1.2 1.8 1.9 3.2 1.9H21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 18h3.6c1.4 0 2.4-.7 3.2-1.9M21 6h-3.6c-1.4 0-2.4.7-3.2 1.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="m18.4 3.6 2.8 2.4-2.8 2.4M18.4 15.8l2.8 2.4-2.8 2.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    trash: '<path d="M5 7h14M9.5 7V4.6h5V7M7 7l.9 12.2c.05.8.7 1.4 1.5 1.4h5.2c.8 0 1.45-.6 1.5-1.4L17 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    download: '<path d="M12 4v10.5M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    upload: '<path d="M12 15.5V5M7.5 9.5 12 5l4.5 4.5M4.5 19.5h15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    book: '<path d="M4 5.5c3-1.3 5.6-1 8 .8 2.4-1.8 5-2.1 8-.8v13c-3-1.3-5.6-1-8 .8-2.4-1.8-5-2.1-8-.8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 6.3v13" stroke="currentColor" stroke-width="1.7"/>',
    sparkle: '<path d="M12 3.5 13.6 9l5.5 1.6-5.5 1.6L12 17.7l-1.6-5.5L4.9 10.6 10.4 9z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M18.6 16.4l.7 2.2 2.2.7-2.2.7-.7 2.2-.7-2.2-2.2-.7 2.2-.7z" fill="currentColor" opacity=".55"/>',
    list: '<path d="M8.5 6.5h12M8.5 12h12M8.5 17.5h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="4.6" cy="6.5" r="1.2" fill="currentColor"/><circle cx="4.6" cy="12" r="1.2" fill="currentColor"/><circle cx="4.6" cy="17.5" r="1.2" fill="currentColor"/>'
  };
  function icon(name) {
    return '<i data-icon="' + name + '"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg></i>";
  }
  function hydrateIcons(root) {
    (root || document).querySelectorAll("i[data-icon]").forEach(function (el) {
      if (el.firstElementChild) return;
      var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("viewBox", "0 0 24 24");
      s.setAttribute("aria-hidden", "true");
      s.innerHTML = ICONS[el.getAttribute("data-icon")] || "";
      el.appendChild(s);
    });
  }

  /* ========================= 数据 ========================= */
  var QB = window.__QB || { meta: { subjects: [], chapters: [] }, questions: [] };
  var META = QB.meta || {};
  var QS = (QB.questions || []).slice();
  var BYID = {};
  var CHAP = {}, SUBJ = {};
  (QS || []).forEach(function (q) { BYID[q.id] = q; });
  (META.chapters || []).forEach(function (c) { CHAP[c.id] = c; });
  (META.subjects || []).forEach(function (s) { SUBJ[s.id] = s; });

  var LETTERS = ["A", "B", "C", "D", "E", "F"];
  var KEY = "aiexam.v1";
  var SKEY = "aiexam.session";

  /* ========================= 工具 ========================= */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function todayKey(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" + m : m) + "-" + (day < 10 ? "0" + day : day);
  }
  function shiftDay(key, delta) {
    var p = key.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + delta);
    return todayKey(d);
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }
  function fmtDay(ts) {
    var d = new Date(ts);
    return (d.getMonth() + 1) + "/" + d.getDate() + " " + (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, n) { return shuffle(arr).slice(0, Math.max(0, n)); }
  function uniq(arr) {
    var seen = {}, out = [];
    arr.forEach(function (x) { if (!seen[x]) { seen[x] = 1; out.push(x); } });
    return out;
  }

  /* ========================= 本地存储 ========================= */
  var DEFAULT_STATE = {
    answers: {}, wrong: {}, fav: [], daily: {}, history: [],
    settings: { theme: "light", font: "m", shuffleOpts: false, autoNext: true }
  };
  var state = load();
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
      var s = JSON.parse(raw);
      var base = JSON.parse(JSON.stringify(DEFAULT_STATE));
      Object.keys(base).forEach(function (k) {
        if (s[k] == null) s[k] = base[k];
      });
      s.settings = Object.assign({}, base.settings, s.settings || {});
      return s;
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }
  var saveTimer = null;
  function save(now) {
    var write = function () {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 存储已满或受限 */ }
      saveTimer = null;
    };
    if (now) { write(); return; }
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(write, 250);
  }

  /* ========================= 派生统计 ========================= */
  function answeredIds() { return Object.keys(state.answers); }
  function correctIds() {
    return Object.keys(state.answers).filter(function (id) { return state.answers[id].ok; });
  }
  function dailyToday() { return state.daily[todayKey()] || { n: 0, ok: 0 }; }
  function streak() {
    var days = Object.keys(state.daily).filter(function (k) { return state.daily[k] && state.daily[k].n > 0; }).sort();
    if (!days.length) return 0;
    var t = todayKey(), set = {};
    days.forEach(function (d) { set[d] = 1; });
    var cur = set[t] ? t : shiftDay(t, -1);
    if (!set[cur]) return 0;
    var n = 0;
    while (set[cur]) { n++; cur = shiftDay(cur, -1); }
    return n;
  }
  function chapterStats(chId) {
    var list = QS.filter(function (q) { return q.chapter === chId; });
    var done = 0, ok = 0;
    list.forEach(function (q) {
      var a = state.answers[q.id];
      if (a) { done++; if (a.ok) ok++; }
    });
    return { total: list.length, done: done, ok: ok, acc: done ? Math.round((ok / done) * 100) : null };
  }
  function subjectStats(subId) {
    var chs = (META.chapters || []).filter(function (c) { return c.subject === subId; });
    var total = 0, done = 0, ok = 0;
    chs.forEach(function (c) {
      var s = chapterStats(c.id);
      total += s.total; done += s.done; ok += s.ok;
    });
    return { total: total, done: done, ok: ok, acc: done ? Math.round((ok / done) * 100) : null };
  }
  function topicStats(chId, topic) {
    var list = QS.filter(function (q) { return q.chapter === chId && q.topic === topic; });
    var done = 0, ok = 0;
    list.forEach(function (q) { var a = state.answers[q.id]; if (a) { done++; if (a.ok) ok++; } });
    return { total: list.length, done: done, ok: ok };
  }

  /* ========================= 答题记录 ========================= */
  function record(q, ok, pickIdx) {
    var prev = state.answers[q.id];
    state.answers[q.id] = {
      ok: !!ok, pick: pickIdx.slice(), ts: Date.now(), n: (prev ? prev.n : 0) + 1
    };
    var t = todayKey();
    var d = state.daily[t] || { n: 0, ok: 0 };
    d.n++; if (ok) d.ok++;
    state.daily[t] = d;
    if (!ok) state.wrong[q.id] = (state.wrong[q.id] || 0) + 1;
    else if (state.wrong[q.id]) delete state.wrong[q.id];
    save();
  }
  function isFav(id) { return state.fav.indexOf(id) > -1; }
  function toggleFav(id) {
    var i = state.fav.indexOf(id);
    if (i > -1) state.fav.splice(i, 1); else state.fav.unshift(id);
    save(true);
    toast(i > -1 ? "已取消收藏" : "已加入收藏");
    updateSide();
  }

  /* ========================= 路由 ========================= */
  var session = null;      // 当前练习
  var testSession = null;  // 当前测验
  var view = document.getElementById("view");
  var vTitle = document.getElementById("vTitle");
  var vSub = document.getElementById("vSub");

  function parseHash() {
    var h = (location.hash || "#/home").replace(/^#/, "");
    var qi = h.indexOf("?");
    var path = qi > -1 ? h.slice(0, qi) : h;
    var query = {};
    if (qi > -1) {
      h.slice(qi + 1).split("&").forEach(function (kv) {
        if (!kv) return;
        var p = kv.split("=");
        query[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || "");
      });
    }
    return { path: path.replace(/\/+$/, "") || "/home", query: query };
  }
  function go(hash) {
    if (location.hash === hash) route(); else location.hash = hash;
  }

  var TITLES = {
    home: ["首页", "人工智能工程技术人员 · 初级"],
    bank: ["分类题库", "两科十章 · 按考点拆开练"],
    test: ["模拟测验", "随机抽题 · 交卷统一判分"],
    wrong: ["错题本", "错一次记一次，答对自动移除"],
    fav: ["我的收藏", "随时回看这些题"],
    stats: ["学习统计", "看得见的进步"],
    settings: ["设置与说明", "题库、数据与免责声明"]
  };

  function route() {
    var h = parseHash();
    var p = h.path;
    if (p !== "/run" && testSession) { clearInterval(testSession.timer); testSession.timer = null; }
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.removeAttribute("aria-current");
    });
    var navKey = { "/home": "home", "/bank": "bank", "/test": "test", "/wrong": "wrong", "/fav": "fav", "/stats": "stats", "/settings": "settings" }[p];
    if (p.indexOf("/chapter") === 0) navKey = "bank";
    if (p === "/practice" || p === "/result" || p === "/run") navKey = "practice";
    document.querySelectorAll('[data-nav="' + navKey + '"]').forEach(function (a) {
      a.setAttribute("aria-current", "page");
    });

    if (p === "/home") { setHead("home"); renderHome(); }
    else if (p === "/bank") { setHead("bank"); renderBank(); }
    else if (p.indexOf("/chapter/") === 0) { renderChapter(p.split("/")[2] || ""); }
    else if (p === "/practice") { renderPlayer(h.query); }
    else if (p === "/test") { setHead("test"); renderTestIntro(); }
    else if (p === "/run") { renderTestRunner(); }
    else if (p === "/wrong") { setHead("wrong"); renderWrong(); }
    else if (p === "/fav") { setHead("fav"); renderFav(); }
    else if (p === "/stats") { setHead("stats"); renderStats(); }
    else if (p === "/settings") { setHead("settings"); renderSettings(); }
    else { location.replace("#/home"); }
    hydrateIcons(view);
    updateSide();
    closeSheet();
  }
  function setHead(key, title, sub) {
    var t = TITLES[key] || ["AI工题库", ""];
    vTitle.textContent = title || t[0];
    vSub.textContent = sub || t[1];
  }
  function updateSide() {
    var totalEl = document.getElementById("navTotal");
    if (totalEl) totalEl.textContent = QS.length;
    var w = document.getElementById("navWrong");
    if (w) w.textContent = Object.keys(state.wrong).length;
    var f = document.getElementById("navFav");
    if (f) f.textContent = state.fav.length;
    var s = document.getElementById("sideStreak");
    if (s) s.textContent = streak();
  }

  /* ========================= 首页 ========================= */
  function renderHome() {
    var goal = 20;
    var td = dailyToday();
    var ans = answeredIds().length, cor = correctIds().length;
    var acc = ans ? Math.round((cor / ans) * 100) : 0;
    var prog = pct(ans, QS.length);
    var ringP = Math.min(100, pct(td.n, goal));
    var subs = (META.subjects || []).map(function (s) {
      var st = subjectStats(s.id);
      return '<a class="subj__card" href="#/bank?subject=' + s.id + '" data-subject="' + s.id + '">' +
        '<span class="subj__ico">' + icon(s.icon || "cpu") + "</span>" +
        '<span class="subj__body"><b>' + esc(s.name) + '</b><p>' + esc(s.desc) + "</p>" +
        '<span class="subj__meter bar-line"><i style="width:' + pct(st.done, st.total) + '%"></i></span></span>' +
        '<span class="subj__num"><b class="num">' + st.done + "</b><small>共 " + st.total + " 题</small></span></a>";
    }).join("");

    var weak = weakChapters(3);
    var weakHtml = weak.length ? '<div class="sect"><div class="sect__head"><h2>该补一补</h2><a href="#/stats">全部数据</a></div>' +
      weak.map(function (c) {
        var st = chapterStats(c.ch.id);
        return '<a class="chapter" href="#/chapter/' + c.ch.id + '"><span class="chapter__ico">' + icon(c.ch.icon || "book") + "</span>" +
          '<span class="chapter__body"><h3>' + esc(c.ch.name) + ' <span class="badge badge--warn">' + st.acc + "%</span></h3>" +
          '<p>已练 ' + st.done + " / " + st.total + " 题 · 正确率偏低，建议重刷</p>" +
          '<span class="chapter__meter"><span class="bar-line"><i style="width:' + pct(st.done, st.total) + '%"></i></span>' +
          "<small>" + st.acc + "%</small></span></span>" +
          '<span class="chapter__go">' + icon("chevR") + "</span></a>";
      }).join("") + "</div>" : "";

    var resume = getSessionSnapshot();
    var heroCta = resume
      ? '<a class="btn" href="#/practice?resume=1">' + icon("pen") + "继续上次（第 " + (resume.i + 1) + " 题）</a>"
      : '<a class="btn" href="#/practice?scope=random&count=20">' + icon("pen") + "开始刷题</a>";

    view.innerHTML =
      '<section class="hero">' +
        '<div class="hero__top"><div>' +
          '<p class="hero__kicker">AI ENGINEER · JUNIOR</p>' +
          '<h2 class="hero__title">今天练几道？</h2>' +
          '<p class="hero__desc">' + esc(META.notice || "原创模拟题，覆盖基础理论与工程实践两科") + "</p>" +
        "</div>" +
        '<div class="hero__ring" style="--p:' + ringP + '"><div><b class="num">' + td.n + '</b><small>/ ' + goal + " 题</small></div></div>" +
        "</div>" +
        '<div class="hero__stats">' +
          "<div><b class='num'>" + QS.length + "</b><span>题库总量</span></div>" +
          "<div><b class='num'>" + ans + "</b><span>已练题数</span></div>" +
          "<div><b class='num'>" + acc + "%</b><span>总正确率</span></div>" +
          "<div><b class='num'>" + streak() + "</b><span>连续天数</span></div>" +
        "</div>" +
        '<div class="hero__cta">' + heroCta + '<a class="btn btn--line" href="#/test">模拟测验</a></div>' +
      "</section>" +

      '<section class="sect"><div class="sect__head"><h2>每日计划</h2><span>' + prog + "% 题库已覆盖</span></div>" +
        '<div class="daily"><div class="daily__ring" style="--p:' + ringP + '"><b class="num">' + td.n + "</b></div>" +
        '<div class="daily__body"><b>' + (td.n >= goal ? "今日目标已完成 ✓" : "还差 " + (goal - td.n) + " 题") + "</b>" +
        '<p>今天答对 ' + td.ok + " 题 · 练满 " + goal + " 题保状态</p></div>" +
        '<a class="btn btn--soft btn--sm" href="#/practice?scope=daily">' + icon("sparkle") + "每日一练</a></div>" +
      "</section>" +

      '<section class="sect"><div class="sect__head"><h2>两科进度</h2><a href="#/bank">全部章节</a></div>' +
        '<div class="subj">' + subs + "</div></section>" +

      '<section class="sect"><div class="sect__head"><h2>快捷入口</h2></div><div class="quick">' +
        '<a href="#/practice?scope=random&count=10" data-tone="blue">' + icon("shuffle") + "<span><b>随机 10 题</b><small>碎片时间</small></span></a>" +
        '<a href="#/practice?scope=unseen&count=20" data-tone="teal">' + icon("target") + "<span><b>没做过的</b><small>扫盲</small></span></a>" +
        '<a href="#/wrong" data-tone="warn">' + icon("rotate") + "<span><b>错题重练</b><small>" + Object.keys(state.wrong).length + " 道待消化</small></span></a>" +
        '<a href="#/fav">' + icon("star") + "<span><b>我的收藏</b><small>" + state.fav.length + " 道</small></span></a>" +
      "</div></section>" +

      weakHtml +

      '<p class="small muted" style="margin:22px 4px 0;text-align:center">' +
        esc(META.exam || "") + " · 题库 v" + esc(META.version || "1.0") + " · 内容为原创模拟题，仅供学习自测</p>";
  }

  function weakChapters(limit) {
    var out = [];
    (META.chapters || []).forEach(function (ch) {
      var st = chapterStats(ch.id);
      if (st.done >= 5 && st.acc != null && st.acc < 70) out.push({ ch: ch, st: st });
    });
    out.sort(function (a, b) { return a.st.acc - b.st.acc; });
    return out.slice(0, limit);
  }

  /* ========================= 分类题库 ========================= */
  function renderBank(query) {
    var filter = query && query.subject;
    var subs = (META.subjects || []).filter(function (s) { return !filter || s.id === filter; });
    var html = '<div class="chiprow">' +
      '<a class="chip' + (!filter ? " chip--on" : "") + '" href="#/bank">全部 ' + QS.length + "</a>" +
      (META.subjects || []).map(function (s) {
        return '<a class="chip' + (filter === s.id ? " chip--on" : "") + '" href="#/bank?subject=' + s.id + '">' + esc(s.short || s.name) + "</a>";
      }).join("") + "</div>";

    subs.forEach(function (s) {
      var st = subjectStats(s.id);
      html += '<div class="sect"><div class="sect__head"><h2>' + esc(s.name) + '</h2><span>' + st.done + "/" + st.total + " · 正确率 " + (st.acc == null ? "—" : st.acc + "%") + "</span></div>";
      (META.chapters || []).filter(function (c) { return c.subject === s.id; }).forEach(function (ch) {
        var cs = chapterStats(ch.id);
        html += '<a class="chapter" href="#/chapter/' + ch.id + '">' +
          '<span class="chapter__ico">' + icon(ch.icon || "book") + "</span>" +
          '<span class="chapter__body"><h3>' + esc(ch.name) + ' <span class="badge badge--brand">' + ch.count + " 题</span></h3>" +
          "<p>" + esc((ch.topics || []).join(" · ")) + "</p>" +
          '<span class="chapter__meter"><span class="bar-line"><i style="width:' + pct(cs.done, cs.total) + '%"></i></span>' +
          "<small>" + cs.done + "/" + cs.total + "</small></span></span>" +
          '<span class="chapter__go">' + icon("chevR") + "</span></a>";
      });
      html += "</div>";
    });
    view.innerHTML = html;
  }

  /* ========================= 章节 ========================= */
  function renderChapter(id) {
    var ch = CHAP[id];
    if (!ch) { location.replace("#/bank"); return; }
    setHead("bank", ch.name, (SUBJ[ch.subject] ? SUBJ[ch.subject].name : "") + " · 共 " + ch.count + " 题");
    var cs = chapterStats(id);
    var topics = (ch.topics || []).map(function (t) {
      var ts = topicStats(id, t);
      return '<div class="chapter" style="margin-bottom:8px"><span class="chapter__body"><h3 style="font-size:13.5px">' + esc(t) +
        ' <span class="badge badge--info">' + ts.total + "</span></h3>" +
        '<span class="chapter__meter"><span class="bar-line" style="height:6px"><i style="width:' + pct(ts.done, ts.total) + '%"></i></span>' +
        "<small>" + ts.done + "/" + ts.total + "</small></span></span></div>";
    }).join("");

    view.innerHTML =
      '<div class="qcard" style="padding:18px">' +
        '<div class="qcard__meta"><span class="badge badge--brand">' + esc(SUBJ[ch.subject] ? SUBJ[ch.subject].short || SUBJ[ch.subject].name : "") + "</span>" +
        '<span class="badge badge--info">' + ch.count + " 题</span>" +
        (cs.acc != null ? '<span class="badge badge--ok">正确率 ' + cs.acc + "%</span>" : '<span class="badge badge--warn">未开始</span>') + "</div>" +
        '<h2 style="font-size:19px">' + esc(ch.name) + "</h2>" +
        '<p class="small muted" style="margin-top:6px">' + esc(ch.desc || "") + "</p>" +
        '<div class="bar-line" style="margin-top:14px"><i style="width:' + pct(cs.done, cs.total) + '%"></i></div>' +
        '<p class="small muted" style="margin-top:7px">已练 ' + cs.done + " / " + cs.total + " 题 · 答对 " + cs.ok + " 题</p>" +
        '<div class="toolrow">' +
          '<a class="btn btn--primary btn--sm" href="#/practice?scope=chapter&chapter=' + id + '">顺序练习</a>' +
          '<a class="btn btn--ghost btn--sm" href="#/practice?scope=chapter&chapter=' + id + '&shuffle=1">乱序练习</a>' +
          '<a class="btn btn--ghost btn--sm" href="#/practice?scope=unseen&chapter=' + id + '">只做没做过</a>' +
          '<a class="btn btn--ghost btn--sm" href="#/practice?scope=wrong&chapter=' + id + '">错题</a>' +
        "</div>" +
      "</div>" +
      '<div class="sect"><div class="sect__head"><h2>考点分布</h2><span>' + (ch.topics || []).length + " 个考点</span></div>" + topics + "</div>";
  }

  /* ========================= 练习会话 ========================= */
  function buildQueue(scope, opts) {
    if (opts.ids && opts.ids.length) return opts.ids.slice();
    var pool = QS.slice();
    if (opts.chapter) pool = pool.filter(function (q) { return q.chapter === opts.chapter; });
    if (scope === "wrong") pool = pool.filter(function (q) { return state.wrong[q.id]; });
    else if (scope === "fav") pool = pool.filter(function (q) { return isFav(q.id); });
    else if (scope === "unseen") pool = pool.filter(function (q) { return !state.answers[q.id]; });
    else if (scope === "daily") {
      var unseen = pool.filter(function (q) { return !state.answers[q.id]; });
      pool = unseen.length >= 10 ? unseen : pool;
    }
    if (opts.shuffle) pool = shuffle(pool); else pool.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
    if (opts.count && pool.length > opts.count) {
      pool = scope === "chapter" || scope === "wrong" ? pool.slice(0, opts.count) : pick(pool, opts.count);
    }
    return pool.map(function (q) { return q.id; });
  }

  function startSession(scope, opts) {
    opts = opts || {};
    var ids = buildQueue(scope, opts);
    if (!ids.length) {
      toast("这里还没有题，换个入口吧");
      return false;
    }
    session = {
      ids: ids, i: 0, picks: {}, revealed: {}, mode: scope,
      chapter: opts.chapter || "", title: opts.title || defaultTitle(scope, opts),
      startedAt: Date.now(), revealedCount: 0, correct: 0, finished: false, optOrder: {}
    };
    if (opts.shuffle && state.settings.shuffleOpts) {
      ids.forEach(function (id) { session.optOrder[id] = shuffle([0, 1, 2, 3, 4].slice(0, BYID[id].options.length)); });
    }
    persistSession();
    return true;
  }
  function defaultTitle(scope, opts) {
    if (scope === "chapter" && opts.chapter && CHAP[opts.chapter]) return CHAP[opts.chapter].name;
    return { random: "随机刷题", wrong: "错题重练", fav: "收藏重练", unseen: "未练题目", daily: "每日一练" }[scope] || "练习";
  }
  function persistSession() {
    if (!session) { try { sessionStorage.removeItem(SKEY); } catch (e) {} return; }
    try {
      sessionStorage.setItem(SKEY, JSON.stringify({
        ids: session.ids, i: session.i, picks: session.picks, revealed: session.revealed,
        mode: session.mode, chapter: session.chapter, title: session.title,
        startedAt: session.startedAt, correct: session.correct, optOrder: session.optOrder
      }));
    } catch (e) {}
  }
  function getSessionSnapshot() {
    try {
      var raw = sessionStorage.getItem(SKEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s || !s.ids || !s.ids.length) return null;
      if (s.i >= s.ids.length) return null;
      return s;
    } catch (e) { return null; }
  }
  function restoreSession() {
    var s = getSessionSnapshot();
    if (!s) return false;
    session = {
      ids: s.ids, i: s.i, picks: s.picks || {}, revealed: s.revealed || {}, mode: s.mode,
      chapter: s.chapter, title: s.title, startedAt: s.startedAt || Date.now(),
      correct: s.correct || 0, finished: false, optOrder: s.optOrder || {}
    };
    return true;
  }

  /* ========================= 练习器 ========================= */
  function renderPlayer(query) {
    if (query && query.resume) {
      restoreSession();
    } else if (query && query.scope === "single" && query.id && BYID[query.id]) {
      startSession("single", { ids: [query.id], title: "单题回顾" });
    } else if (query && query.scope) {
      var ok = startSession(query.scope, {
        chapter: query.chapter || "",
        count: query.count ? +query.count : 0,
        shuffle: !!query.shuffle || query.scope === "random" || query.scope === "wrong",
        title: query.title || ""
      });
      if (!ok) { location.replace("#/bank"); return; }
    }
    if (!session) { location.replace("#/home"); return; }
    setHead("practice", session.title, "共 " + session.ids.length + " 题 · 已答 " + Object.keys(session.revealed).length);
    renderPlayerBody();
  }

  function renderPlayerBody() {
    var q = BYID[session.ids[session.i]];
    if (!q) { finishSession(); return; }
    var revealed = !!session.revealed[q.id];
    var pick = session.picks[q.id] || [];
    var n = session.ids.length;
    var isMulti = q.type === "multi";
    var order = session.optOrder[q.id] || q.options.map(function (_, i) { return i; });

    var optsHtml = order.map(function (oi, pos) {
      var cls = "opt";
      var flag = "";
      if (revealed) {
        if (q.answer.indexOf(oi) > -1) { cls += " opt--right"; flag = '<span class="opt__flag">正确答案</span>'; }
        else if (pick.indexOf(oi) > -1) { cls += " opt--wrong"; flag = '<span class="opt__flag">你选了</span>'; }
      } else if (pick.indexOf(oi) > -1) { cls += " opt--sel"; }
      return '<button class="' + cls + '" data-act="opt" data-idx="' + oi + '"' + (revealed ? " disabled" : "") + ">" +
        '<span class="opt__key">' + LETTERS[pos] + "</span>" +
        '<span class="opt__txt">' + esc(q.options[oi]) + "</span>" + flag + "</button>";
    }).join("");

    var okNow = revealed && isRight(q, pick);
    var explain = revealed
      ? '<div class="result ' + (okNow ? "result--ok" : "result--no") + '">' + icon(okNow ? "check" : "xmark") +
        (okNow ? "答对了" : "答错了，" + (isMulti ? "正确答案是 " : "正确答案是 ") + q.answer.map(function (i) { return LETTERS[order.indexOf(i)]; }).join("")) + "</div>" +
        '<div class="explain' + (okNow ? "" : " explain--bad") + '"><div class="explain__head">' + icon("bulb") + "解析</div><p>" + esc(q.explain) + "</p></div>"
      : "";

    var metaTags = '<span class="badge badge--brand">' + esc(CHAP[q.chapter] ? CHAP[q.chapter].short || CHAP[q.chapter].name : "") + "</span>" +
      '<span class="badge badge--info">' + (isMulti ? "多选" : "单选") + "</span>" +
      (q.difficulty === 3 ? '<span class="badge badge--warn">较难</span>' : q.difficulty === 1 ? '<span class="badge badge--ok">简单</span>' : "") +
      (state.wrong[q.id] ? '<span class="badge badge--warn">错过 ' + state.wrong[q.id] + " 次</span>" : "");

    view.innerHTML = '<div class="practice">' +
      '<div class="pbar"><div class="pbar__row">' +
        '<span>第 <b>' + (session.i + 1) + "</b> / " + n + " 题</span>" +
        '<span class="pbar__right"><span class="num">' + pct(session.i, n) + "%</span>" +
        '<button class="pbar__exit" data-act="quit" aria-label="退出练习">' + icon("close") + "</button></span></div>" +
        '<div class="bar-line"><i style="width:' + pct(session.i + (revealed ? 1 : 0), n) + '%"></i></div></div>' +

      '<div class="qcard">' +
        '<div class="qcard__meta">' + metaTags +
          '<button class="badge ' + (isFav(q.id) ? "badge--warn" : "badge--info") + '" data-act="fav" style="margin-left:auto;border:0">' +
          (isFav(q.id) ? "★ 已收藏" : "☆ 收藏") + "</button></div>" +
        '<div class="qstem">' + esc(q.stem) + "</div>" +
        '<div class="opts">' + optsHtml + "</div>" +
        explain +
      "</div>" +

      '<div class="pfoot">' +
        '<button class="btn btn--ghost btn--icon" data-act="prev" aria-label="上一题"' + (session.i === 0 ? " disabled" : "") + ">" + icon("chevL") + "</button>" +
        (revealed
          ? '<button class="btn btn--primary" data-act="next">' + (session.i + 1 >= n ? "完成练习" : "下一题") + "</button>"
          : isMulti
            ? '<button class="btn btn--primary" data-act="submit" ' + (pick.length ? "" : "disabled") + ">提交答案</button>"
            : '<button class="btn btn--ghost" data-act="reveal">看答案</button>') +
        '<button class="btn btn--ghost btn--icon" data-act="next" aria-label="下一题"' + (revealed ? "" : " disabled") + ">" + icon("chevR") + "</button>" +
      "</div></div>";
    hydrateIcons(view);
  }

  function isRight(q, pick) {
    if (pick.length !== q.answer.length) return false;
    return pick.slice().sort().join(",") === q.answer.slice().sort().join(",");
  }

  function doPick(idx) {
    var q = BYID[session.ids[session.i]];
    if (!q || session.revealed[q.id]) return;
    var pick = (session.picks[q.id] || []).slice();
    if (q.type === "multi") {
      var p = pick.indexOf(idx);
      if (p > -1) pick.splice(p, 1); else pick.push(idx);
      session.picks[q.id] = pick;
      renderPlayerBody();
      return;
    }
    session.picks[q.id] = [idx];
    revealCurrent();
  }
  function revealCurrent() {
    var q = BYID[session.ids[session.i]];
    var pick = session.picks[q.id] || [];
    if (!pick.length) return;
    var ok = isRight(q, pick);
    session.revealed[q.id] = true;
    session.revealedCount++;
    if (ok) session.correct++;
    record(q, ok, pick);
    if (state.settings.autoNext && ok && q.type === "single") {
      renderPlayerBody();
      setTimeout(function () {
        if (!session || session.revealed[q.id] !== true) return;
        nextQ();
      }, 900);
    } else {
      renderPlayerBody();
    }
    setHead("practice", session.title, "共 " + session.ids.length + " 题 · 已答 " + Object.keys(session.revealed).length);
    persistSession();
  }
  function nextQ() {
    if (!session) return;
    if (session.i + 1 >= session.ids.length) { finishSession(); return; }
    session.i++;
    persistSession();
    renderPlayerBody();
    var card = view.querySelector(".qcard");
    if (card) {
      var top = card.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
    setHead("practice", session.title, "共 " + session.ids.length + " 题 · 已答 " + Object.keys(session.revealed).length);
  }
  function prevQ() {
    if (!session || session.i === 0) return;
    session.i--;
    persistSession();
    renderPlayerBody();
  }
  function finishSession() {
    var total = session.ids.length;
    var doneCount = Object.keys(session.revealed).length;
    var correct = 0, wrongIds = [];
    session.ids.forEach(function (id) {
      var a = state.answers[id];
      var q = BYID[id];
      if (!a) return;
      if (a.ok) correct++; else wrongIds.push(id);
    });
    state.history.unshift({
      ts: Date.now(), mode: session.mode, title: session.title,
      total: total, done: doneCount, ok: correct,
      secs: Math.round((Date.now() - session.startedAt) / 1000)
    });
    state.history = state.history.slice(0, 20);
    save(true);
    var snap = {
      title: session.title, total: total, done: doneCount, ok: correct, wrongIds: wrongIds,
      secs: Math.round((Date.now() - session.startedAt) / 1000), mode: session.mode
    };
    session = null;
    try { sessionStorage.removeItem(SKEY); } catch (e) {}
    renderResult(snap);
  }

  function renderResult(r) {
    setHead("practice", "练习完成", r.title);
    try { history.replaceState(null, "", "#/home"); } catch (e) {}
    var acc = r.done ? Math.round((r.ok / r.done) * 100) : 0;
    var wrongHtml = r.wrongIds.length
      ? '<div class="sect"><div class="sect__head"><h2>这次错的 ' + r.wrongIds.length + " 题</h2><a href=\"#/wrong\">去错题本</a></div>" +
        '<div class="wronglist">' + r.wrongIds.map(function (id) {
          var q = BYID[id];
          return '<a class="wrongitem" href="#/practice?scope=single&id=' + id + '"><div class="wrongitem__top"><span class="badge badge--brand">' +
            esc(CHAP[q.chapter] ? CHAP[q.chapter].short || CHAP[q.chapter].name : "") + '</span><span class="small muted">' +
            esc(q.topic) + '</span><span class="small muted" style="margin-left:auto">查看解析 ›</span></div><p>' + esc(q.stem) + "</p></a>";
        }).join("") + "</div></div>"
      : '<div class="card" style="margin-top:16px;padding:16px;text-align:center"><b>这一组全对 🎉</b><p class="small muted" style="margin-top:4px">保持这个手感，接着练下一章。</p></div>';

    view.innerHTML =
      '<div class="done"><h2>' + esc(r.title) + "</h2>" +
        '<div class="done__score">' + acc + '<span>%</span></div>' +
        '<p class="done__sub">答对 ' + r.ok + " / 已答 " + r.done + " 题</p>" +
        '<div class="done__stats">' +
          "<div><b>" + r.done + "</b><span>已答</span></div>" +
          "<div><b>" + r.total + "</b><span>题量</span></div>" +
          "<div><b>" + fmtTime(r.secs) + "</b><span>用时</span></div>" +
        "</div>" +
        '<div class="done__acts">' +
          (r.wrongIds.length ? '<a class="btn" href="#/practice?scope=wrong&count=' + r.wrongIds.length + '">重做错题</a>' : "") +
          '<a class="btn btn--line" href="#/practice?scope=random&count=20">再来一组</a>' +
          '<a class="btn btn--line" href="#/home">回首页</a>' +
        "</div></div>" +
      wrongHtml;
  }

  /* ========================= 模拟测验 ========================= */
  function renderTestIntro() {
    var last = state.history.filter(function (h) { return h.mode === "test"; })[0];
    view.innerHTML =
      '<div class="hero" style="background:linear-gradient(140deg,#22326e 0%,#2b2a86 50%,#4b39df 100%)">' +
        '<p class="hero__kicker">MOCK TEST</p>' +
        '<h2 class="hero__title">模拟测验</h2>' +
        '<p class="hero__desc">从全库随机抽 50 题，交卷后统一判分并列出错题。考查的是你现在的真实水平。</p>' +
        '<div class="hero__stats"><div><b class="num">50</b><span>抽题数</span></div><div><b class="num">' +
        Math.min(20, QS.length) + '</b><span>预计分钟</span></div><div><b class="num">' +
        (last ? Math.round((last.ok / Math.max(1, last.done)) * 100) + "%" : "—") + "</b><span>上次得分</span></div></div>" +
        '<div class="hero__cta"><a class="btn" href="#/run" data-act="start-test">开始测验</a></div>' +
      "</div>" +
      '<div class="sect"><div class="sect__head"><h2>测前提醒</h2></div>' +
        '<div class="card" style="padding:16px">' +
          "<p class='small' style='line-height:1.75'>1. 测验中不显示对错，可自由前后翻题、随时交卷。<br>" +
          "2. 未作答的题按错计入成绩，建议全部过一遍再交。<br>" +
          "3. 这是自测工具，题量与时长不代表正式考试规则。<br>" +
          "4. 错题会自动进入错题本，交卷后可立刻重练。</p>" +
        "</div></div>";
  }

  function renderTestRunner() {
    if (!testSession) { startTest(); } else { startTestTimer(); }
    setHead("test", "模拟测验", "交卷后统一判分");
    drawTestQuestion();
  }
  function startTest() {
    var ids = pick(QS.map(function (q) { return q.id; }), Math.min(50, QS.length));
    testSession = { ids: ids, i: 0, picks: {}, startedAt: Date.now(), timer: null };
    startTestTimer();
  }
  function startTestTimer() {
    if (!testSession || testSession.timer) return;
    testSession.timer = setInterval(function () {
      if (!testSession) return;
      var el = document.getElementById("testClock");
      if (el) el.textContent = fmtTime((Date.now() - testSession.startedAt) / 1000);
    }, 1000);
  }
  function drawTestQuestion() {
    var q = BYID[testSession.ids[testSession.i]];
    var pick0 = testSession.picks[q.id] || [];
    var isMulti = q.type === "multi";
    var n = testSession.ids.length;
    var answered = Object.keys(testSession.picks).filter(function (id) { return testSession.picks[id].length; }).length;
    var opts = q.options.map(function (o, oi) {
      var cls = "opt" + (pick0.indexOf(oi) > -1 ? " opt--sel" : "");
      return '<button class="' + cls + '" data-act="top" data-idx="' + oi + '"><span class="opt__key">' + LETTERS[oi] +
        '</span><span class="opt__txt">' + esc(o) + "</span></button>";
    }).join("");

    view.innerHTML = '<div class="practice"><div class="pbar"><div class="pbar__row">' +
      '<span>第 <b>' + (testSession.i + 1) + "</b> / " + n + " 题 · 已答 " + answered + "</span>" +
      '<span class="pbar__right"><span class="num" id="testClock">' + fmtTime((Date.now() - testSession.startedAt) / 1000) + "</span>" +
      '<button class="pbar__exit" data-act="test-quit" aria-label="退出">' + icon("close") + "</button></span></div>" +
      '<div class="bar-line"><i style="width:' + pct(answered, n) + '%"></i></div></div>' +
      '<div class="qcard"><div class="qcard__meta"><span class="badge badge--brand">' +
      esc(CHAP[q.chapter] ? CHAP[q.chapter].short || CHAP[q.chapter].name : "") + '</span><span class="badge badge--info">' +
      (isMulti ? "多选" : "单选") + '</span><span class="badge">第 ' + (testSession.i + 1) + " 题</span></div>" +
      '<div class="qstem">' + esc(q.stem) + '</div><div class="opts">' + opts + "</div></div>" +
      '<div class="pfoot"><button class="btn btn--ghost btn--icon" data-act="tprev"' + (testSession.i === 0 ? " disabled" : "") + ">" + icon("chevL") + "</button>" +
      '<button class="btn btn--ghost" data-act="tnext">下一题</button>' +
      '<button class="btn btn--primary" data-act="tsubmit">交卷 ' + answered + "/" + n + "</button></div></div>";
    hydrateIcons(view);
  }
  function testPick(idx) {
    var q = BYID[testSession.ids[testSession.i]];
    var pick0 = (testSession.picks[q.id] || []).slice();
    if (q.type === "multi") {
      var p = pick0.indexOf(idx);
      if (p > -1) pick0.splice(p, 1); else pick0.push(idx);
    } else {
      pick0 = [idx];
    }
    testSession.picks[q.id] = pick0;
    drawTestQuestion();
  }
  function submitTest(force) {
    if (!testSession) return;
    var unanswered = testSession.ids.filter(function (id) { return !(testSession.picks[id] || []).length; }).length;
    if (!force && unanswered > 0 && !confirm("还有 " + unanswered + " 题没作答，未作答按错计入成绩。确定交卷？")) return;
    clearInterval(testSession.timer);
    var correct = 0, wrongIds = [];
    testSession.ids.forEach(function (id) {
      var q = BYID[id];
      var pickV = testSession.picks[id] || [];
      var ok = pickV.length > 0 && isRight(q, pickV);
      if (ok) correct++; else wrongIds.push(id);
      record(q, ok, pickV);
    });
    var secs = Math.round((Date.now() - testSession.startedAt) / 1000);
    state.history.unshift({
      ts: Date.now(), mode: "test", title: "模拟测验", total: testSession.ids.length,
      done: testSession.ids.length, ok: correct, secs: secs
    });
    state.history = state.history.slice(0, 20);
    save(true);
    var snap = { title: "模拟测验", total: testSession.ids.length, done: testSession.ids.length, ok: correct, wrongIds: wrongIds, secs: secs, mode: "test" };
    testSession = null;
    renderResult(snap);
  }

  /* ========================= 错题 / 收藏 ========================= */
  function renderWrong() {
    var ids = Object.keys(state.wrong).sort(function (a, b) { return state.wrong[b] - state.wrong[a]; });
    if (!ids.length) {
      view.innerHTML = '<div class="empty">' + icon("rotate") + "<b>错题本是空的</b>练题时答错会自动收进来，答对后自动移除。";
      view.innerHTML += '<div style="text-align:center;margin-top:6px"><a class="btn btn--primary btn--sm" href="#/practice?scope=random&count=20">去刷 20 题</a></div></div>';
      return;
    }
    var html = '<div class="acchead"><b>共 ' + ids.length + " 道待消化</b>" +
      '<a class="btn btn--primary btn--sm" href="#/practice?scope=wrong&count=' + Math.min(ids.length, 50) + '">全部重练</a>' +
      '<button class="btn btn--ghost btn--sm" data-act="clear-wrong">清空</button></div>';
    ids.forEach(function (id) {
      var q = BYID[id];
      if (!q) return;
      var a = state.answers[id];
      html += '<div class="wrongitem"><div class="wrongitem__top"><span class="badge badge--brand">' +
        esc(CHAP[q.chapter] ? CHAP[q.chapter].short || CHAP[q.chapter].name : "") + '</span>' +
        '<span class="badge badge--warn">错 ' + state.wrong[id] + " 次</span>" +
        '<span class="small muted" style="margin-left:auto">' + (a ? fmtDay(a.ts) : "") + "</span></div>" +
        "<p>" + esc(q.stem) + "</p>" +
        '<div class="toolrow"><a class="btn btn--ghost btn--sm" href="#/practice?scope=single&id=' + id + '">看这题</a>' +
        '<button class="btn btn--ghost btn--sm" data-act="unwrong" data-id="' + id + '">已掌握</button></div></div>';
    });
    view.innerHTML = html;
  }
  function renderFav() {
    var ids = state.fav.slice();
    if (!ids.length) {
      view.innerHTML = '<div class="empty">' + icon("star") + "<b>还没有收藏</b>刷题时点右上角 ☆ 就能收藏，方便回看。<br><br><a class=\"btn btn--primary btn--sm\" href=\"#/practice?scope=random&count=20\">随机刷 20 题</a></div>";
      return;
    }
    var html = '<div class="acchead"><b>收藏 ' + ids.length + " 题</b>" +
      '<a class="btn btn--primary btn--sm" href="#/practice?scope=fav&count=' + Math.min(ids.length, 50) + '">开始复习</a></div>';
    ids.forEach(function (id) {
      var q = BYID[id];
      if (!q) return;
      html += '<div class="wrongitem"><div class="wrongitem__top"><span class="badge badge--brand">' +
        esc(CHAP[q.chapter] ? CHAP[q.chapter].short || CHAP[q.chapter].name : "") + '</span><span class="small muted">' +
        esc(q.topic) + "</span></div><p>" + esc(q.stem) + "</p>" +
        '<div class="toolrow"><a class="btn btn--ghost btn--sm" href="#/practice?scope=single&id=' + id + '">看这题</a>' +
        '<button class="btn btn--ghost btn--sm" data-act="unfav" data-id="' + id + '">取消收藏</button></div></div>';
    });
    view.innerHTML = html;
  }

  /* ========================= 统计 ========================= */
  function renderStats() {
    var ans = answeredIds().length, cor = correctIds().length;
    var acc = ans ? Math.round((cor / ans) * 100) : 0;
    var wrongN = Object.keys(state.wrong).length;
    var td = dailyToday();
    var chs = (META.chapters || []).map(function (ch) {
      var st = chapterStats(ch.id);
      return { ch: ch, st: st };
    });
    var chart = chs.map(function (c) {
      var w = c.st.acc == null ? 0 : c.st.acc;
      return '<div class="chartrow"><span class="chartrow__label">' + esc(c.ch.short || c.ch.name) + "</span>" +
        '<span class="chartrow__bar"><i style="width:' + w + '%"></i></span>' +
        '<span class="chartrow__val">' + (c.st.acc == null ? "—" : c.st.acc + "%") + "</span></div>";
    }).join("");
    var hist = state.history.slice(0, 6).map(function (h) {
      var a = Math.round((h.ok / Math.max(1, h.mode === "test" ? h.total : h.done)) * 100);
      return '<div class="hist"><b>' + a + "%</b><span style='flex:1'>" + esc(h.title) + "</span><span class='muted'>" +
        h.ok + "/" + (h.mode === "test" ? h.total : h.done) + " · " + fmtDay(h.ts) + "</span></div>";
    }).join("") || '<p class="small muted">还没有练习记录，刷完一组就会出现在这里。</p>';

    view.innerHTML =
      '<div class="statgrid">' +
        "<div class='stat'><b class='num'>" + ans + "</b><span>累计答题</span></div>" +
        "<div class='stat'><b class='num'>" + acc + "%</b><span>总体正确率</span></div>" +
        "<div class='stat'><b class='num'>" + streak() + "</b><span>连续学习天数</span></div>" +
        "<div class='stat'><b class='num'>" + td.n + "</b><span>今日已答</span></div>" +
      "</div>" +
      '<div class="sect"><div class="sect__head"><h2>章节正确率</h2><span>已练 ' + ans + " / " + QS.length + " 题</span></div>" +
        '<div class="chartcard">' + chart + "</div></div>" +
      '<div class="sect"><div class="sect__head"><h2>最近练习</h2><a href="#/wrong">错题本 ' + wrongN + "</a></div>" +
        '<div class="card" style="padding:14px">' + hist + "</div></div>" +
      '<div class="sect"><div class="sect__head"><h2>学习建议</h2></div>' +
        '<div class="card" style="padding:16px"><p class="small" style="line-height:1.8">' + advice(chs) + "</p></div></div>";
  }
  function advice(chs) {
    var started = chs.filter(function (c) { return c.st.done > 0; });
    if (!started.length) return "还没开始：先做一组「随机 10 题」摸底，再按章节把没做过的补上。";
    var weak = started.filter(function (c) { return c.st.acc != null && c.st.acc < 70; });
    var untouched = chs.filter(function (c) { return c.st.done === 0; });
    var parts = [];
    if (weak.length) parts.push("正确率偏低的是「" + weak.slice(0, 3).map(function (c) { return c.ch.name; }).join("、") + "」，建议按章节顺序重刷并逐题看解析。");
    if (untouched.length) parts.push("还有 " + untouched.length + " 个章节没动过（" + untouched.slice(0, 3).map(function (c) { return c.ch.name; }).join("、") + "），优先用「只做没做过」扫一遍。");
    if (!weak.length && !untouched.length) parts.push("全章都已覆盖、正确率不错：用模拟测验查漏，再把错题本清空。");
    return parts.join("<br>");
  }

  /* ========================= 设置 ========================= */
  function renderSettings() {
    var st = state.settings;
    view.innerHTML =
      '<div class="card" style="padding:16px">' +
        '<h2 style="font-size:15px;margin-bottom:10px">显示</h2>' +
        '<div class="field"><div class="field__label">主题</div><div class="chiprow">' +
          ["light|浅色", "dark|深色", "auto|跟随系统"].map(function (x) {
            var k = x.split("|");
            return '<button class="chip' + (st.theme === k[0] ? " chip--on" : "") + '" data-act="set-theme" data-v="' + k[0] + '">' + k[1] + "</button>";
          }).join("") + "</div></div>" +
        '<div class="field"><div class="field__label">题干字号</div><div class="chiprow">' +
          ["m|标准", "l|加大", "xl|特大"].map(function (x) {
            var k = x.split("|");
            return '<button class="chip' + (st.font === k[0] ? " chip--on" : "") + '" data-act="set-font" data-v="' + k[0] + '">' + k[1] + "</button>";
          }).join("") + "</div></div>" +
      "</div>" +
      '<div class="card" style="padding:16px;margin-top:12px">' +
        '<h2 style="font-size:15px;margin-bottom:6px">刷题习惯</h2>' +
        '<div class="switch' + (st.autoNext ? " switch--on" : "") + '" data-act="toggle-autonext">' +
          '<div><div class="switch__label">答对自动下一题</div><div class="small muted">单选答对后约 1 秒自动翻页</div></div>' +
          '<span class="switch__track"></span></div>' +
        '<div class="switch' + (st.shuffleOpts ? " switch--on" : "") + '" data-act="toggle-shuffle">' +
          '<div><div class="switch__label">选项乱序</div><div class="small muted">乱序练习时打乱 ABCD 顺序，防位置记忆</div></div>' +
          '<span class="switch__track"></span></div>' +
      "</div>" +
      '<div class="card" style="padding:16px;margin-top:12px">' +
        '<h2 style="font-size:15px;margin-bottom:10px">数据</h2>' +
        '<div class="toolrow" style="margin:0">' +
          '<button class="btn btn--ghost btn--sm" data-act="export">' + icon("download") + "导出备份</button>" +
          '<button class="btn btn--ghost btn--sm" data-act="import">' + icon("upload") + "导入备份</button>" +
          '<button class="btn btn--ghost btn--sm" data-act="reset">' + icon("trash") + "清空进度</button>" +
        "</div>" +
        '<p class="small muted" style="margin-top:10px">学习记录只保存在这台手机的浏览器里，不会上传。换机时用导出/导入迁移。</p>' +
        '<input type="file" id="importFile" accept=".json,application/json" hidden>' +
      "</div>" +
      '<div class="card" style="padding:16px;margin-top:12px">' +
        '<h2 style="font-size:15px;margin-bottom:8px">关于题库</h2>' +
        '<p class="small" style="line-height:1.85">' +
          "<b>" + esc(META.title || "人工智能工程技术人员（初级）模拟题库") + "</b><br>" +
          "版本 " + esc(META.version || "1.0") + " · 更新时间 " + esc(META.updatedAt || "") + " · 共 " + QS.length + " 题<br>" +
          esc(META.notice || "") + "<br><br>" +
          "题目依据国家职业技术技能标准与公开学习资料原创编写，用于考前自测与知识梳理；不代表官方命题，也不构成任何考试承诺。若发现题目或解析有误，欢迎截图反馈，我会修订。",
        "</p>" +
        '<p class="small muted" style="margin-top:12px">离线可用：把页面添加到主屏幕后，断网也能刷题。</p>' +
      "</div>";
    hydrateIcons(view);
  }

  /* ========================= 搜索 ========================= */
  function openSearch() {
    var html = '<div class="searchbox">' + icon("search") +
      '<input id="searchInput" type="text" placeholder="搜题干、选项、考点关键词" autocomplete="off"></div>' +
      '<div id="searchResults" style="margin-top:12px"></div>';
    openSheet("搜索题目", html, function (panel) {
      var input = panel.querySelector("#searchInput");
      var box = panel.querySelector("#searchResults");
      var run = function () {
        var kw = input.value.trim().toLowerCase();
        if (!kw) { box.innerHTML = '<p class="small muted">输入关键词，比如「过拟合」「Transformer」「个人信息」。</p>'; return; }
        var hits = QS.filter(function (q) {
          return (q.stem + " " + q.options.join(" ") + " " + (q.explain || "") + " " + (q.topic || "")).toLowerCase().indexOf(kw) > -1;
        }).slice(0, 40);
        if (!hits.length) { box.innerHTML = '<p class="small muted">没有匹配的题目。</p>'; return; }
        box.innerHTML = '<p class="small muted" style="margin-bottom:8px">找到 ' + hits.length + " 题</p>" + hits.map(function (q) {
          return '<div class="wrongitem"><div class="wrongitem__top"><span class="badge badge--brand">' +
            esc(CHAP[q.chapter] ? CHAP[q.chapter].short || CHAP[q.chapter].name : "") + '</span><span class="small muted">' +
            esc(q.topic) + '</span></div><p>' + esc(q.stem) + '</p>' +
            '<div class="toolrow"><a class="btn btn--ghost btn--sm" href="#/practice?scope=single&id=' + q.id + '">打开这道题</a></div></div>';
        }).join("");
      };
      input.addEventListener("input", run);
      setTimeout(function () { input.focus(); }, 200);
      run();
    });
  }

  /* ========================= 弹层 / 提示 ========================= */
  function openSheet(title, html, onMount) {
    closeSheet();
    var root = document.getElementById("modalRoot");
    var wrap = document.createElement("div");
    wrap.className = "sheet";
    wrap.innerHTML = '<div class="sheet__panel"><div class="sheet__head"><h3>' + esc(title) +
      '</h3><button class="sheet__close" data-sheet-close aria-label="关闭">' + icon("close") + "</button></div>" + html + "</div>";
    root.appendChild(wrap);
    hydrateIcons(wrap);
    wrap.addEventListener("click", function (e) {
      if (e.target === wrap || e.target.closest("[data-sheet-close]")) closeSheet();
    });
    if (onMount) onMount(wrap.querySelector(".sheet__panel"));
  }
  function closeSheet() {
    var root = document.getElementById("modalRoot");
    if (root) root.innerHTML = "";
  }
  var toastTimer = null;
  function toast(msg) {
    var root = document.getElementById("toastRoot");
    var el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1800);
  }

  /* ========================= 主题 / 字号 ========================= */
  function applyTheme() {
    var t = state.settings.theme;
    var dark = t === "dark" || (t === "auto" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0b0f1c" : "#4534d4");
    var btn = document.getElementById("themeBtn");
    if (btn) btn.innerHTML = icon(dark ? "sun" : "moon");
  }
  function applyFont() {
    var v = state.settings.font || "m";
    var px = { m: 16.5, l: 18, xl: 19.5 }[v] || 16.5;
    document.documentElement.style.setProperty("--q-font", px + "px");
    var style = document.getElementById("fontOverride");
    if (!style) {
      style = document.createElement("style");
      style.id = "fontOverride";
      document.head.appendChild(style);
    }
    style.textContent = ".qstem{font-size:" + px + "px!important}.qstem--lg{font-size:" + (px + 1.5) + "px!important}.opt__txt{font-size:" + (px - 1.5) + "px!important}";
  }

  /* ========================= 事件 ========================= */
  view.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-act]");
    if (!btn || !view.contains(btn)) return;
    var act = btn.getAttribute("data-act");
    if (act === "opt" && session) { doPick(+btn.getAttribute("data-idx")); }
    else if (act === "submit" && session) { revealCurrent(); }
    else if (act === "reveal" && session) {
      var q = BYID[session.ids[session.i]];
      var pick = session.picks[q.id] || [];
      if (!pick.length) { toast("先选一个答案"); return; }
      revealCurrent();
    }
    else if (act === "next" && session) { nextQ(); }
    else if (act === "prev" && session) { prevQ(); }
    else if (act === "quit" && session) {
      if (confirm("退出后本题组的进度会保存到「继续上次」，确定退出？")) { location.hash = "#/home"; }
    }
    else if (act === "fav" && session) {
      var id = session.ids[session.i];
      toggleFav(id);
      renderPlayerBody();
    }
    else if (act === "top" && testSession) { testPick(+btn.getAttribute("data-idx")); }
    else if (act === "tprev" && testSession) { if (testSession.i > 0) { testSession.i--; drawTestQuestion(); } }
    else if (act === "tnext" && testSession) { if (testSession.i + 1 < testSession.ids.length) { testSession.i++; drawTestQuestion(); } else toast("已经是最后一题，可以交卷了"); }
    else if (act === "tsubmit" && testSession) {
      var un = testSession.ids.filter(function (x) { return !(testSession.picks[x] || []).length; }).length;
      if (un > 0) { if (confirm("还有 " + un + " 题没作答，未作答按错。确定交卷？")) submitTest(true); }
      else submitTest(true);
    }
    else if (act === "test-quit") { if (confirm("退出测验将不保存成绩，确定？")) { if (testSession) clearInterval(testSession.timer); testSession = null; location.hash = "#/home"; } }
    else if (act === "start-test") { /* 由 hash 跳转到 /run 处理 */ }
    else if (act === "clear-wrong") {
      if (confirm("清空错题本？已掌握记录会一起清掉。")) { state.wrong = {}; save(true); renderWrong(); updateSide(); }
    }
    else if (act === "unwrong") {
      var wid = btn.getAttribute("data-id");
      delete state.wrong[wid]; save(true); renderWrong(); updateSide();
    }
    else if (act === "unfav") {
      var fid = btn.getAttribute("data-id");
      var i = state.fav.indexOf(fid);
      if (i > -1) state.fav.splice(i, 1);
      save(true); renderFav(); updateSide();
    }
    else if (act === "set-theme") { state.settings.theme = btn.getAttribute("data-v"); save(true); applyTheme(); renderSettings(); }
    else if (act === "set-font") { state.settings.font = btn.getAttribute("data-v"); save(true); applyFont(); renderSettings(); }
    else if (act === "toggle-autonext") { state.settings.autoNext = !state.settings.autoNext; save(true); renderSettings(); }
    else if (act === "toggle-shuffle") { state.settings.shuffleOpts = !state.settings.shuffleOpts; save(true); renderSettings(); }
    else if (act === "export") { exportData(); }
    else if (act === "import") { var f = document.getElementById("importFile"); if (f) f.click(); }
    else if (act === "reset") {
      if (confirm("清空全部学习进度（答题记录、错题、收藏、统计）？此操作不可恢复。") && confirm("再确认一次：真的清空？")) {
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        state.settings = Object.assign({}, DEFAULT_STATE.settings, { theme: state.settings.theme, font: state.settings.font });
        save(true);
        try { sessionStorage.removeItem(SKEY); } catch (e) {}
        toast("已清空");
        route();
      }
    }
  });

  document.addEventListener("click", function (e) {
    var act = e.target.closest("[data-act]");
    if (!act || view.contains(act)) return;
    var a = act.getAttribute("data-act");
    if (a === "menu") { /* 手机端无侧边栏，点击无操作 */ }
    else if (a === "theme") {
      var order = ["light", "dark", "auto"];
      var next = order[(order.indexOf(state.settings.theme) + 1) % 3];
      state.settings.theme = next; save(true); applyTheme(); toast({ light: "浅色模式", dark: "深色模式", auto: "跟随系统" }[next]);
    }
    else if (a === "search") openSearch();
    else if (a === "start-test") { location.hash = "#/run"; }
  });

  view.addEventListener("change", function (e) {
    if (e.target && e.target.id === "importFile") {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var data = JSON.parse(rd.result);
          if (!data || typeof data.answers !== "object") throw new Error("格式不对");
          state = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), data);
          state.settings = Object.assign({}, DEFAULT_STATE.settings, data.settings || {});
          save(true); applyTheme(); applyFont(); route(); toast("导入成功");
        } catch (err) { toast("导入失败：文件格式不对"); }
      };
      rd.readAsText(file);
    }
  });

  function exportData() {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "AI工题库-学习数据-" + todayKey() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast("已导出备份文件");
  }

  document.addEventListener("keydown", function (e) {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (!session) {
      if (e.key === "/" ) { e.preventDefault(); openSearch(); }
      return;
    }
    var q = BYID[session.ids[session.i]];
    if (!q) return;
    var revealed = !!session.revealed[q.id];
    var k = e.key.toLowerCase();
    var n = LETTERS.indexOf(e.key.toUpperCase());
    if (n > -1 && n < q.options.length) { e.preventDefault(); doPick(n); return; }
    if (k === "enter" || k === " " || k === "arrowright") {
      e.preventDefault();
      if (!revealed) { if ((session.picks[q.id] || []).length) revealCurrent(); }
      else nextQ();
      return;
    }
    if (e.key === "ArrowLeft") { e.preventDefault(); prevQ(); return; }
    if (k === "f") { toggleFav(q.id); renderPlayerBody(); }
  });

  window.addEventListener("hashchange", route);

  /* ========================= 启动 ========================= */
  function boot() {
    applyTheme();
    applyFont();
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChg = function () { if (state.settings.theme === "auto") applyTheme(); };
      if (mq.addEventListener) mq.addEventListener("change", onChg);
    }
    route();
    hydrateIcons(document);
    if ("serviceWorker" in navigator && location.protocol === "https:") {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }
  boot();
})();
