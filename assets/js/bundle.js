/* ============================================================================
   bundle.js — renders every section of bundle.html from LANDING (bundle-data.js)
   and wires interactions (countdown, animated counters, FAQ, sticky CTA).

   No frameworks, no modules. IIFE. Reads THEMES from data.js for the grid.
   ============================================================================ */
(function () {
  "use strict";

  if (typeof LANDING === "undefined") {
    console.error("[bundle] LANDING is missing — did bundle-data.js load?");
    return;
  }
  const THEMES_SAFE = (typeof THEMES !== "undefined" && Array.isArray(THEMES)) ? THEMES : [];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const AR_DIGIT = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function arabicNumber(n) {
    return String(n).split("").map((c) => /\d/.test(c) ? AR_DIGIT[+c] : c).join("");
  }
  function ic(name) { return (typeof window.icon === "function") ? window.icon(name) : ""; }
  function $(sel) { return document.querySelector(sel); }

  /* ------------------------------------------------------------------------
     Placeholder cover (same shape as main.js) — used when a theme has no image.
     ------------------------------------------------------------------------ */
  function placeholderCover(theme, idx) {
    const hue = (idx * 47) % 360;
    const seed = theme.id.charCodeAt(0) + theme.id.length;
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + esc(theme.nameAr) + '">',
        '<defs>',
          '<linearGradient id="g' + seed + '" x1="0%" y1="0%" x2="100%" y2="100%">',
            '<stop offset="0%" stop-color="hsl(' + hue + ', 22%, 16%)"/>',
            '<stop offset="100%" stop-color="hsl(' + ((hue + 30) % 360) + ', 26%, 10%)"/>',
          '</linearGradient>',
        '</defs>',
        '<rect width="800" height="500" fill="url(#g' + seed + ')"/>',
        '<text x="400" y="270" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="120" fill="hsla(42, 70%, 70%, 0.22)">' + esc(theme.nameAr) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }
  function placeholderSectionSvg(title, idx) {
    const hue = (idx * 53) % 360;
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + esc(title) + '">',
        '<rect width="800" height="500" fill="hsl(' + hue + ', 22%, 14%)"/>',
        '<rect x="60" y="90" width="680" height="60" rx="10" fill="hsla(42, 70%, 60%, 0.14)"/>',
        '<rect x="60" y="180" width="440" height="26" rx="6" fill="hsla(42, 70%, 60%, 0.1)"/>',
        '<rect x="60" y="220" width="380" height="26" rx="6" fill="hsla(42, 70%, 60%, 0.08)"/>',
        '<rect x="60" y="300" width="200" height="80" rx="10" fill="hsla(42, 70%, 60%, 0.16)"/>',
        '<rect x="280" y="300" width="200" height="80" rx="10" fill="hsla(42, 70%, 60%, 0.12)"/>',
        '<text x="400" y="450" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="700" font-size="20" fill="hsla(42, 70%, 70%, 0.5)">' + esc(title) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  /* ------------------------------------------------------------------------
     1) Offer strip + live countdown
     ------------------------------------------------------------------------ */
  function renderOfferStrip() {
    const el = $("#lp-strip");
    if (!el || !LANDING.offer) return;
    const deadline = new Date(LANDING.offer.deadline).getTime();
    if (isNaN(deadline) || deadline <= Date.now()) {
      el.remove();
      document.body.classList.add("lp-no-strip");
      return;
    }

    el.innerHTML =
      '<div class="container lp-strip__inner">' +
        '<span class="lp-strip__icon" aria-hidden="true">' + ic("discount") + '</span>' +
        '<span class="lp-strip__msg">' + esc(LANDING.offer.strapline) + '</span>' +
        '<span class="lp-strip__timer" role="timer" aria-live="polite" aria-label="الوقت المتبقي">' +
          '<span class="lp-strip__slot" data-slot="d"><b>—</b><small>يوم</small></span>' +
          '<span class="lp-strip__slot" data-slot="h"><b>—</b><small>ساعة</small></span>' +
          '<span class="lp-strip__slot" data-slot="m"><b>—</b><small>دقيقة</small></span>' +
          '<span class="lp-strip__slot" data-slot="s"><b>—</b><small>ثانية</small></span>' +
        '</span>' +
        '<a class="lp-strip__cta" href="' + LANDING.whatsapp.links.strip + '" target="_blank" rel="noopener"' +
          ' data-event="cta_strip_whatsapp">' + esc(LANDING.offer.ctaLabel) + '</a>' +
      '</div>';

    const slot = (k) => el.querySelector('[data-slot="' + k + '"] b');
    const dEl = slot("d"), hEl = slot("h"), mEl = slot("m"), sEl = slot("s");

    function tick() {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        el.remove();
        document.body.classList.add("lp-no-strip");
        return false;
      }
      const days   = Math.floor(diff / 86400000);
      const hours  = Math.floor((diff % 86400000) / 3600000);
      const mins   = Math.floor((diff % 3600000) / 60000);
      const secs   = Math.floor((diff % 60000) / 1000);
      dEl.textContent = arabicNumber(String(days).padStart(2, "0"));
      hEl.textContent = arabicNumber(String(hours).padStart(2, "0"));
      mEl.textContent = arabicNumber(String(mins).padStart(2, "0"));
      sEl.textContent = arabicNumber(String(secs).padStart(2, "0"));
      return true;
    }
    tick();
    // one-second tick is fine; skip the pulse reveal under reduced motion but keep ticks
    setInterval(tick, 1000);
  }

  /* ------------------------------------------------------------------------
     2) Hero
     ------------------------------------------------------------------------ */
  function renderHero() {
    const mount = $("#lp-hero");
    if (!mount || !LANDING.hero) return;
    const h = LANDING.hero;
    const chips = h.trustChips.map((c) =>
      '<span class="lp-chip">' +
        '<span class="lp-chip__icon" aria-hidden="true">' + ic(c.icon) + '</span>' +
        (c.accent ? '<strong>' + esc(c.accent) + '</strong>' : "") +
        '<span>' + esc(c.label) + '</span>' +
      '</span>'
    ).join("");

    mount.innerHTML =
      '<div class="container lp-hero__layout">' +
        '<div class="lp-hero__copy rise">' +
          '<p class="eyebrow">' + esc(h.eyebrow) + '</p>' +
          '<h1 class="lp-hero__title">' +
            '<span class="lp-hero__title-row">' + esc(h.title.lead) + '</span>' +
            '<span class="lp-hero__title-row lp-hero__title-row--gold">' + esc(h.title.accent) + '</span>' +
            '<span class="lp-hero__title-row lp-hero__title-row--soft">' + esc(h.title.tail) + '</span>' +
          '</h1>' +
          '<p class="lp-hero__lead">' + esc(h.lead) + '</p>' +
          '<div class="lp-hero__ctas">' +
            '<a class="lp-btn lp-btn--primary" href="' + LANDING.whatsapp.links[h.primary.waKey] + '"' +
              ' target="_blank" rel="noopener" data-event="' + esc(h.primary.event) + '">' +
              '<span class="lp-btn__icon" aria-hidden="true">' + ic("whatsapp") + '</span>' +
              '<span>' + esc(h.primary.label) + '</span>' +
            '</a>' +
            '<a class="lp-btn lp-btn--ghost" href="' + esc(h.secondary.href) + '"' +
              ' data-event="' + esc(h.secondary.event) + '">' +
              '<span>' + esc(h.secondary.label) + '</span>' +
              '<span class="lp-btn__icon" aria-hidden="true">' + ic("arrowBack") + '</span>' +
            '</a>' +
          '</div>' +
          '<div class="lp-hero__chips">' + chips + '</div>' +
        '</div>' +
        '<div class="lp-hero__visual" aria-hidden="true">' +
          '<div class="lp-hero__stack">' +
            '<div class="lp-hero__card lp-hero__card--1">' +
              '<div class="lp-hero__card-head"><span></span><span></span><span></span></div>' +
              '<div class="lp-hero__card-title"></div>' +
              '<div class="lp-hero__card-grid"><i></i><i></i><i></i><i></i></div>' +
            '</div>' +
            '<div class="lp-hero__card lp-hero__card--2">' +
              '<div class="lp-hero__card-head"><span></span><span></span><span></span></div>' +
              '<div class="lp-hero__card-title"></div>' +
              '<div class="lp-hero__card-row"></div>' +
              '<div class="lp-hero__card-row lp-hero__card-row--short"></div>' +
              '<div class="lp-hero__card-cta"></div>' +
            '</div>' +
            '<div class="lp-hero__badge">' +
              '<span aria-hidden="true">' + ic("discount") + '</span>' +
              '<strong>' + arabicNumber(LANDING.offer.discountPercent) + '٪</strong>' +
              '<em>خصم لفترة محدودة</em>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     3) Animated stat counters
     ------------------------------------------------------------------------ */
  function renderStats() {
    const mount = $("#lp-stats");
    if (!mount) return;
    const totalSections = THEMES_SAFE.reduce((s, t) => s + (t.sectionsCount || 0), 0);
    const totalBlocks   = THEMES_SAFE.reduce((s, t) => s + (t.blocksCount   || 0), 0);
    const values = {
      themes:     THEMES_SAFE.length,
      activities: LANDING.stats.activities.value,
      sections:   totalSections,
      blocks:     totalBlocks
    };
    const order = ["themes", "activities", "sections", "blocks"];
    mount.innerHTML =
      '<div class="container lp-stats__grid">' +
        order.map((k) => {
          const meta = LANDING.stats[k];
          return '' +
          '<div class="lp-stat" data-target="' + values[k] + '">' +
            '<span class="lp-stat__icon" aria-hidden="true">' + ic(meta.icon) + '</span>' +
            '<strong class="lp-stat__num" aria-live="polite">' + arabicNumber(0) + '</strong>' +
            '<span class="lp-stat__label">' + esc(meta.label) + '</span>' +
          '</div>';
        }).join("") +
      '</div>';

    const nodes = mount.querySelectorAll(".lp-stat");
    const animate = (node) => {
      const target = +node.getAttribute("data-target") || 0;
      const numEl = node.querySelector(".lp-stat__num");
      if (reducedMotion) { numEl.textContent = arabicNumber(target) + "+"; return; }
      const duration = 1400;
      const start = performance.now();
      (function step(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = Math.round(target * eased);
        numEl.textContent = arabicNumber(v) + (p >= 1 ? "+" : "");
        if (p < 1) requestAnimationFrame(step);
      })(start);
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
        });
      }, { threshold: 0.35 });
      nodes.forEach((n) => io.observe(n));
    } else {
      nodes.forEach(animate);
    }
  }

  /* ------------------------------------------------------------------------
     4) Value pillars (expandable cards)
     ------------------------------------------------------------------------ */
  function renderPillars() {
    const mount = $("#lp-pillars");
    if (!mount) return;
    const p = LANDING.pillars;
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(p.eyebrow) + '</p>' +
          '<h2>' + esc(p.title) + '</h2>' +
          '<p class="lp-head__lead">' + esc(p.lead) + '</p>' +
        '</div>' +
        '<div class="lp-pillars__grid">' +
          p.items.map((it, i) =>
            '<details class="lp-pillar"' + (i === 0 ? " open" : "") + '>' +
              '<summary class="lp-pillar__summary">' +
                '<span class="lp-pillar__icon" aria-hidden="true">' + ic(it.icon) + '</span>' +
                '<span class="lp-pillar__meta">' +
                  '<strong>' + esc(it.title) + '</strong>' +
                  '<em>' + esc(it.tagline) + '</em>' +
                '</span>' +
                '<span class="lp-pillar__chev" aria-hidden="true">' + ic("plus") + '</span>' +
              '</summary>' +
              '<ul class="lp-pillar__points">' +
                it.points.map((pt) =>
                  '<li><span aria-hidden="true">' + ic("checkCircle") + '</span>' + esc(pt) + '</li>'
                ).join("") +
              '</ul>' +
            '</details>'
          ).join("") +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     5) Themes grid (reads THEMES)
     ------------------------------------------------------------------------ */
  function renderThemes() {
    const mount = $("#lp-themes");
    if (!mount) return;
    const meta = LANDING.themesGrid;
    const cards = THEMES_SAFE.map((t, i) => {
      const src = t.image || (t.sections && t.sections.find((s) => s.image) && t.sections.find((s) => s.image).image) || placeholderCover(t, i);
      const previewBtn = t.preview
        ? '<a class="lp-theme-card__preview" href="' + esc(t.preview) + '" target="_blank" rel="noopener"' +
          ' aria-label="معاينة قالب ' + esc(t.nameAr) + '" data-event="cta_theme_preview">' +
          ic("eye") + '<span>معاينة</span></a>'
        : "";
      return '' +
        '<article class="lp-theme-card">' +
          '<a class="lp-theme-card__cover" href="theme.html?id=' + encodeURIComponent(t.id) + '"' +
            ' aria-label="تفاصيل قالب ' + esc(t.nameAr) + '">' +
            '<img src="' + src + '" alt="غلاف قالب ' + esc(t.nameAr) + '" width="800" height="500"' +
              ' loading="lazy" decoding="async" />' +
            '<div class="lp-theme-card__name"><small>' + esc(t.name.toUpperCase()) + '</small>' +
              '<span>' + esc(t.nameAr) + '</span></div>' +
          '</a>' +
          '<div class="lp-theme-card__body">' +
            '<div class="lp-theme-card__stats">' +
              '<span><strong>' + arabicNumber(t.sectionsCount) + '</strong> قسم</span>' +
              '<span><strong>' + arabicNumber(t.blocksCount) + '</strong> مكوّن</span>' +
            '</div>' +
            '<div class="lp-theme-card__actions">' +
              '<a class="lp-theme-card__cta" href="theme.html?id=' + encodeURIComponent(t.id) + '"' +
                ' data-event="cta_theme_details">' + esc(meta.ctaLabel) + '</a>' +
              previewBtn +
            '</div>' +
          '</div>' +
        '</article>';
    }).join("");

    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(meta.eyebrow) + '</p>' +
          '<h2>' + esc(meta.title) + '</h2>' +
          '<p class="lp-head__lead">' + esc(meta.lead) + '</p>' +
        '</div>' +
        '<div class="lp-themes__grid">' + cards + '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     6) Exclusive sections showcase (horizontal scroll)
     ------------------------------------------------------------------------ */
  function renderExclusive() {
    const mount = $("#lp-exclusive");
    if (!mount) return;
    const ex = LANDING.exclusiveSections;
    const slides = ex.items.map((s, i) =>
      '<li class="lp-excl__slide">' +
        '<div class="lp-excl__media">' +
          '<img src="' + placeholderSectionSvg(s.title, i) + '" alt="" loading="lazy" decoding="async" />' +
        '</div>' +
        '<div class="lp-excl__meta">' +
          '<span class="lp-excl__icon" aria-hidden="true">' + ic(s.icon) + '</span>' +
          '<div>' +
            '<h3>' + esc(s.title) + '</h3>' +
            '<p>' + esc(s.desc) + '</p>' +
          '</div>' +
        '</div>' +
      '</li>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(ex.eyebrow) + '</p>' +
          '<h2>' + esc(ex.title) + '</h2>' +
          '<p class="lp-head__lead">' + esc(ex.lead) + '</p>' +
        '</div>' +
      '</div>' +
      '<ul class="lp-excl__track" tabindex="0" aria-label="سكاشن حصرية">' + slides + '</ul>';
  }

  /* ------------------------------------------------------------------------
     7) Before / after results
     ------------------------------------------------------------------------ */
  function renderResults() {
    const mount = $("#lp-results");
    if (!mount) return;
    const r = LANDING.results;
    const cards = r.items.map((it) =>
      '<article class="lp-result">' +
        '<header class="lp-result__head">' +
          '<span class="lp-result__store">' + esc(it.store) + '</span>' +
          '<span class="lp-result__metric">' + esc(it.metric) + '</span>' +
        '</header>' +
        '<div class="lp-result__pair">' +
          '<div class="lp-result__side lp-result__side--before">' +
            '<span>قبل</span><strong>' + esc(it.before) + '</strong>' +
          '</div>' +
          '<span class="lp-result__arrow" aria-hidden="true">' + ic("arrowBack") + '</span>' +
          '<div class="lp-result__side lp-result__side--after">' +
            '<span>بعد</span><strong>' + esc(it.after) + '</strong>' +
          '</div>' +
        '</div>' +
        '<p class="lp-result__label">' + esc(it.label) + '</p>' +
      '</article>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(r.eyebrow) + '</p>' +
          '<h2>' + esc(r.title) + '</h2>' +
          '<p class="lp-head__lead">' + esc(r.lead) + '</p>' +
        '</div>' +
        '<div class="lp-results__grid">' + cards + '</div>' +
        '<p class="lp-note">' + esc(r.note) + '</p>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     8) Comparison table
     ------------------------------------------------------------------------ */
  function renderComparison() {
    const mount = $("#lp-comparison");
    if (!mount) return;
    const c = LANDING.comparison;
    const rows = c.rows.map((row) =>
      '<tr>' +
        '<th scope="row" class="lp-cmp__label">' + esc(row.label) + '</th>' +
        '<td class="lp-cmp__ordinary">' +
          '<span class="lp-cmp__x" aria-hidden="true">' + ic("xmark") + '</span>' +
          '<span>' + esc(row.ordinary) + '</span>' +
        '</td>' +
        '<td class="lp-cmp__apqrinu">' +
          '<span class="lp-cmp__check" aria-hidden="true">' + ic("check") + '</span>' +
          '<span>' + esc(row.apqrinu) + '</span>' +
        '</td>' +
      '</tr>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(c.eyebrow) + '</p>' +
          '<h2>' + esc(c.title) + '</h2>' +
        '</div>' +
        '<div class="lp-cmp__wrap">' +
          '<table class="lp-cmp">' +
            '<thead>' +
              '<tr>' +
                '<th scope="col"></th>' +
                '<th scope="col" class="lp-cmp__head-ordinary">' + esc(c.leadA) + '</th>' +
                '<th scope="col" class="lp-cmp__head-apqrinu">' + esc(c.leadB) + '</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' + rows + '</tbody>' +
          '</table>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     9) Steps (How it works)
     ------------------------------------------------------------------------ */
  function renderSteps() {
    const mount = $("#lp-steps");
    if (!mount) return;
    const s = LANDING.steps;
    const items = s.items.map((it) =>
      '<li class="lp-step">' +
        '<span class="lp-step__num" aria-hidden="true">' + arabicNumber(it.num) + '</span>' +
        '<span class="lp-step__icon" aria-hidden="true">' + ic(it.icon) + '</span>' +
        '<h3 class="lp-step__title">' + esc(it.title) + '</h3>' +
        '<p class="lp-step__desc">' + esc(it.desc) + '</p>' +
      '</li>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(s.eyebrow) + '</p>' +
          '<h2>' + esc(s.title) + '</h2>' +
          '<p class="lp-head__lead">' + esc(s.lead) + '</p>' +
        '</div>' +
        '<ol class="lp-steps__list">' + items + '</ol>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     10) Pricing
     ------------------------------------------------------------------------ */
  function renderPricing() {
    const mount = $("#lp-pricing");
    if (!mount) return;
    const p = LANDING.pricing;
    const rows = p.items.map((it) =>
      '<li class="lp-price__row">' +
        '<span class="lp-price__icon" aria-hidden="true">' + ic(it.icon) + '</span>' +
        '<span class="lp-price__label">' + esc(it.label) + '</span>' +
        '<span class="lp-price__value">' + esc(it.value) + '</span>' +
      '</li>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(p.eyebrow) + '</p>' +
          '<h2>' + esc(p.title) + '</h2>' +
          '<p class="lp-head__lead">' + esc(p.lead) + '</p>' +
        '</div>' +
        '<div class="lp-price__card">' +
          '<div class="lp-price__breakdown">' +
            '<h3 class="lp-price__breakdown-title">' + esc(p.totalValueLabel) + '</h3>' +
            '<ul class="lp-price__list">' + rows + '</ul>' +
            '<div class="lp-price__total">' +
              '<span>القيمة الإجمالية</span>' +
              '<strong>' + esc(p.totalValue) + '</strong>' +
            '</div>' +
          '</div>' +
          '<div class="lp-price__offer">' +
            '<span class="lp-price__badge">' + esc(p.discountLabel) + '</span>' +
            '<span class="lp-price__label-lg">' + esc(p.bundleLabel) + '</span>' +
            '<strong class="lp-price__amount">' + esc(p.bundlePrice) + '</strong>' +
            '<span class="lp-price__save">' + esc(p.savingsLabel) + ' ' + esc(p.savings) + '</span>' +
            '<div class="lp-price__ctas">' +
              '<a class="lp-btn lp-btn--primary" href="' + LANDING.whatsapp.links[p.primary.waKey] + '"' +
                ' target="_blank" rel="noopener" data-event="' + esc(p.primary.event) + '">' +
                '<span class="lp-btn__icon" aria-hidden="true">' + ic("whatsapp") + '</span>' +
                '<span>' + esc(p.primary.label) + '</span>' +
              '</a>' +
              '<a class="lp-btn lp-btn--ghost" href="' + esc(p.secondary.href) + '" data-event="' + esc(p.secondary.event) + '">' +
                '<span>' + esc(p.secondary.label) + '</span>' +
              '</a>' +
            '</div>' +
            '<p class="lp-price__note">' + esc(p.note) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     11) Testimonials
     ------------------------------------------------------------------------ */
  function renderTestimonials() {
    const mount = $("#lp-testimonials");
    if (!mount) return;
    const t = LANDING.testimonials;
    const items = t.items.map((it) =>
      '<article class="lp-testi">' +
        '<span class="lp-testi__mark" aria-hidden="true">' + ic("quote") + '</span>' +
        '<p class="lp-testi__quote">' + esc(it.quote) + '</p>' +
        '<footer class="lp-testi__author">' +
          '<span class="lp-testi__avatar" aria-hidden="true">' + ic("users") + '</span>' +
          '<div><strong>' + esc(it.author) + '</strong><em>' + esc(it.role) + '</em></div>' +
        '</footer>' +
      '</article>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(t.eyebrow) + '</p>' +
          '<h2>' + esc(t.title) + '</h2>' +
        '</div>' +
        '<div class="lp-testi__grid">' + items + '</div>' +
        '<p class="lp-note">' + esc(t.note) + '</p>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     12) FAQ accordion — native <details>, keyboard accessible by default
     ------------------------------------------------------------------------ */
  function renderFaq() {
    const mount = $("#lp-faq");
    if (!mount) return;
    const f = LANDING.faq;
    const items = f.items.map((it) =>
      '<li class="lp-faq__item">' +
        '<details>' +
          '<summary>' +
            '<span>' + esc(it.q) + '</span>' +
            '<span class="lp-faq__chev" aria-hidden="true">' + ic("plus") + '</span>' +
          '</summary>' +
          '<p class="lp-faq__answer">' + esc(it.a) + '</p>' +
        '</details>' +
      '</li>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-head">' +
          '<p class="eyebrow">' + esc(f.eyebrow) + '</p>' +
          '<h2>' + esc(f.title) + '</h2>' +
        '</div>' +
        '<ul class="lp-faq__list">' + items + '</ul>' +
      '</div>';

    // Optional: single-open behavior for cleaner UX
    const details = mount.querySelectorAll(".lp-faq__item details");
    details.forEach((d) => d.addEventListener("toggle", () => {
      if (d.open) details.forEach((o) => { if (o !== d) o.open = false; });
    }));
  }

  /* ------------------------------------------------------------------------
     13) Final CTA
     ------------------------------------------------------------------------ */
  function renderFinal() {
    const mount = $("#lp-final");
    if (!mount) return;
    const f = LANDING.finalCta;
    const guarantees = f.guarantees.map((g) =>
      '<li><span aria-hidden="true">' + ic(g.icon) + '</span>' + esc(g.title) + '</li>'
    ).join("");
    mount.innerHTML =
      '<div class="container">' +
        '<div class="lp-final__card">' +
          '<p class="eyebrow">' + esc(f.eyebrow) + '</p>' +
          '<h2 class="lp-final__title">' + esc(f.title) + '</h2>' +
          '<p class="lp-final__lead">' + esc(f.lead) + '</p>' +
          '<ul class="lp-final__guarantees">' + guarantees + '</ul>' +
          '<div class="lp-final__ctas">' +
            '<a class="lp-btn lp-btn--primary lp-btn--xl" href="' + LANDING.whatsapp.links[f.primary.waKey] + '"' +
              ' target="_blank" rel="noopener" data-event="' + esc(f.primary.event) + '">' +
              '<span class="lp-btn__icon" aria-hidden="true">' + ic("whatsapp") + '</span>' +
              '<span>' + esc(f.primary.label) + '</span>' +
            '</a>' +
            '<a class="lp-btn lp-btn--ghost" href="' + esc(f.secondary.href) + '" data-event="' + esc(f.secondary.event) + '">' +
              '<span>' + esc(f.secondary.label) + '</span>' +
              '<span class="lp-btn__icon" aria-hidden="true">' + ic("arrowBack") + '</span>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------------
     Reveal-on-scroll for major sections
     ------------------------------------------------------------------------ */
  function attachReveal() {
    if (reducedMotion || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll("[data-lp-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((n) => io.observe(n));
  }

  /* ------------------------------------------------------------------------
     Move the whatsapp fab (from site.js) to the RTL start side for this page.
     ------------------------------------------------------------------------ */
  function repositionFab() {
    const fab = document.querySelector(".whatsapp-fab");
    if (fab) fab.classList.add("whatsapp-fab--start");
  }

  /* ------------------------------------------------------------------------
     Run
     ------------------------------------------------------------------------ */
  renderOfferStrip();
  renderHero();
  renderStats();
  renderPillars();
  renderThemes();
  renderExclusive();
  renderResults();
  renderComparison();
  renderSteps();
  renderPricing();
  renderTestimonials();
  renderFaq();
  renderFinal();
  attachReveal();
  repositionFab();
})();
