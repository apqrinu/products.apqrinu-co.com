(function () {
  "use strict";

  const grid = document.getElementById("themesGrid");
  const visibleCount = document.getElementById("visibleCount");
  const filterbar = document.getElementById("filterbar");
  const themesCountHero = document.getElementById("themesCountHero");
  const themesCountChip = document.getElementById("themesCountChip");
  const sectionsTotal = document.getElementById("sectionsTotal");
  const blocksTotal = document.getElementById("blocksTotal");

  if (!Array.isArray(THEMES) || THEMES.length === 0) {
    grid.innerHTML = '<div class="empty-state">لم يتم العثور على بيانات القوالب. تأكد من تحميل ملف data.js.</div>';
    return;
  }

  // Hero / header counters
  const totalSections = THEMES.reduce((s, t) => s + t.sectionsCount, 0);
  const totalBlocks = THEMES.reduce((s, t) => s + t.blocksCount, 0);
  if (themesCountHero) themesCountHero.textContent = THEMES.length;
  if (themesCountChip) themesCountChip.textContent = THEMES.length;
  if (sectionsTotal) sectionsTotal.textContent = totalSections;
  if (blocksTotal) blocksTotal.textContent = totalBlocks;

  /* -------- SVG cover placeholder (sarie has no images, plus fallback) -------- */
  function placeholderCover(theme, idx) {
    const hue = (idx * 47) % 360;
    const seed = theme.id.charCodeAt(0) + theme.id.length;
    // Two-tone arabesque-pattern cover with Arabic name watermark
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + escapeHtml(theme.nameAr) + '">',
        '<defs>',
          '<linearGradient id="g' + seed + '" x1="0%" y1="0%" x2="100%" y2="100%">',
            '<stop offset="0%" stop-color="hsl(' + hue + ', 22%, 16%)"/>',
            '<stop offset="100%" stop-color="hsl(' + ((hue + 30) % 360) + ', 26%, 10%)"/>',
          '</linearGradient>',
          '<pattern id="p' + seed + '" width="80" height="80" patternUnits="userSpaceOnUse">',
            '<path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="hsl(42, 60%, 55%)" stroke-opacity="0.10" stroke-width="0.6"/>',
            '<circle cx="40" cy="40" r="20" fill="none" stroke="hsl(42, 60%, 55%)" stroke-opacity="0.08" stroke-width="0.5"/>',
          '</pattern>',
        '</defs>',
        '<rect width="800" height="500" fill="url(#g' + seed + ')"/>',
        '<rect width="800" height="500" fill="url(#p' + seed + ')"/>',
        '<g transform="translate(400 230)" opacity="0.18">',
          '<circle r="160" fill="none" stroke="hsl(42, 60%, 65%)" stroke-width="1"/>',
          '<circle r="110" fill="none" stroke="hsl(42, 60%, 65%)" stroke-width="0.6"/>',
          '<circle r="60" fill="none" stroke="hsl(42, 60%, 65%)" stroke-width="0.4"/>',
        '</g>',
        '<text x="400" y="270" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="120" fill="hsla(42, 70%, 70%, 0.22)" letter-spacing="-4">' + escapeHtml(theme.nameAr) + '</text>',
        '<text x="400" y="430" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="500" font-size="20" fill="hsla(42, 70%, 65%, 0.5)" letter-spacing="8">' + escapeHtml(theme.name.toUpperCase()) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function pickCover(theme, idx) {
    // Prefer the curated top-level cover, fall back to first section image, then SVG placeholder
    if (theme.image) return { src: theme.image, isReal: true };
    const withImg = (theme.sections || []).find((s) => s.image);
    if (withImg && withImg.image) return { src: withImg.image, isReal: true };
    return { src: placeholderCover(theme, idx), isReal: false };
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* -------- Theme card template -------- */
  function arabicNumber(n) {
    // Keep Arabic-Indic for display flair on visible count
    const map = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    return String(n).split("").map((c) => /\d/.test(c) ? map[+c] : c).join("");
  }

  function priceText(n) {
    return (Math.round(n * 100) / 100).toString();
  }
  function formatSar(n) {
    const s = priceText(n);
    return `<span class="price-num" dir="ltr">${s}</span> <span class="price-cur">ر.س</span>`;
  }
  function formatSarText(n) {
    return priceText(n) + " ر.س";
  }

  const TOTAL = THEMES.length;

  function themeCard(theme, idx) {
    const cover = pickCover(theme, idx);
    const indexLabel = String(idx + 1).padStart(2, "0");
    const totalLabel = String(TOTAL).padStart(2, "0");
    // LCP candidate: eager-load the first card, lazy-load the rest. Width/height match the 16:10 aspect
    // declared in CSS so the browser reserves space before the bitmap decodes (prevents CLS).
    const isLcpCandidate = idx === 0;
    const loadAttrs = isLcpCandidate
      ? 'loading="eager" fetchpriority="high" decoding="async"'
      : 'loading="lazy" fetchpriority="low" decoding="async"';
    const previewBtn = theme.preview
      ? `<a class="card__preview" href="${theme.preview}" target="_blank" rel="noopener" aria-label="معاينة مباشرة لقالب ${escapeHtml(theme.nameAr)} (يفتح في نافذة جديدة)" title="معاينة مباشرة">
          ${icon("eye")}
          <span>معاينة</span>
        </a>`
      : "";
    const couponChip = theme.coupon
      ? `<button type="button" class="card__coupon" data-coupon="${escapeHtml(theme.coupon)}" aria-label="نسخ كوبون خصم ٢٠٪ لقالب ${escapeHtml(theme.nameAr)}: ${escapeHtml(theme.coupon)}" title="اضغط لنسخ الكوبون">
          <span class="card__coupon-badge">خصم ٢٠٪</span>
          <span class="card__coupon-code" dir="ltr">${escapeHtml(theme.coupon)}</span>
          <span class="card__coupon-hint" aria-hidden="true">${icon("copy") || "نسخ"}</span>
        </button>`
      : "";
    const priceRow = (theme.priceAfter != null && theme.priceBefore != null)
      ? `<div class="card__price" aria-label="السعر: ${formatSarText(theme.priceAfter)} بعد خصم ٢٠٪ من ${formatSarText(theme.priceBefore)}">
          <span class="card__price-after">${formatSar(theme.priceAfter)}</span>
          <span class="card__price-before" aria-hidden="true">${formatSar(theme.priceBefore)}</span>
          <span class="card__price-tag">بعد الخصم</span>
        </div>`
      : "";
    return `
      <article class="card" data-id="${theme.id}">
        <a class="card__cover" href="theme.html?id=${encodeURIComponent(theme.id)}" aria-label="فتح تفاصيل قالب ${escapeHtml(theme.nameAr)}">
          <img src="${cover.src}" alt="غلاف قالب ${escapeHtml(theme.nameAr)}" width="800" height="500" ${loadAttrs} />
          <span class="card__index">${indexLabel} / ${totalLabel}</span>
          <div class="card__name-overlay">
            <small>${escapeHtml(theme.name.toUpperCase())}</small>
            <span>${escapeHtml(theme.nameAr)}</span>
          </div>
        </a>
        <div class="card__body">
          <p class="card__desc">${escapeHtml(theme.description)}</p>
          <div class="card__stats">
            <span class="stat"><strong>${theme.sectionsCount}</strong>قسم</span>
            <span class="stat"><strong>${theme.blocksCount}</strong>مكوّن</span>
            <span class="stat"><strong>${theme.features.length}</strong>ميزة</span>
          </div>
          ${priceRow}
          ${couponChip}
          <div class="card__actions">
            <a class="card__cta" href="theme.html?id=${encodeURIComponent(theme.id)}">
              <span>عرض التفاصيل</span>
              <span aria-hidden="true">${icon("arrowBack")}</span>
            </a>
            ${previewBtn}
          </div>
        </div>
      </article>
    `;
  }

  /* -------- Render with current sort -------- */
  let currentSort = "default";

  function render() {
    const sorted = THEMES.slice();
    if (currentSort === "sections") sorted.sort((a, b) => b.sectionsCount - a.sectionsCount);
    else if (currentSort === "blocks") sorted.sort((a, b) => b.blocksCount - a.blocksCount);
    else if (currentSort === "features") sorted.sort((a, b) => b.features.length - a.features.length);

    grid.innerHTML = sorted.map((t, i) => themeCard(t, i)).join("");
    visibleCount.textContent = arabicNumber(sorted.length) + " قالباً معروضاً";

    // Staggered reveal — JS-driven so it re-fires on sort change
    Array.from(grid.children).forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 0.55s var(--ease-out), transform 0.55s var(--ease-out)";
      // honor reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.style.opacity = "1";
        el.style.transform = "none";
        return;
      }
      const delay = Math.min(40 * i, 600);
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay + 80);
    });
  }

  filterbar.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-sort]");
    if (!btn) return;
    const next = btn.dataset.sort;
    if (next === currentSort) return;
    currentSort = next;
    filterbar.querySelectorAll("button[data-sort]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    render();
  });

  render();
})();
