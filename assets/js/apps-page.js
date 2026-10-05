(function () {
  "use strict";

  const grid = document.getElementById("appsGrid");
  const visibleCount = document.getElementById("appsVisibleCount");
  const appsCountHero = document.getElementById("appsCountHero");

  if (!grid) return;

  if (typeof APPS === "undefined" || !Array.isArray(APPS) || APPS.length === 0) {
    grid.innerHTML = '<div class="empty-state">لم يتم العثور على بيانات التطبيقات. تأكد من تحميل ملف apps.js.</div>';
    return;
  }

  if (appsCountHero) appsCountHero.textContent = APPS.length;

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function arabicNumber(n) {
    const map = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    return String(n).split("").map((c) => /\d/.test(c) ? map[+c] : c).join("");
  }

  /* -------- SVG cover placeholder (apps don't ship covers yet) -------- */
  function placeholderCover(app, idx) {
    const hue = (idx * 53 + 120) % 360;
    const seed = (app.slug || "app").charCodeAt(0) + (app.slug || "").length;
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + escapeHtml(app.name) + '">',
        '<defs>',
          '<linearGradient id="g' + seed + '" x1="0%" y1="0%" x2="100%" y2="100%">',
            '<stop offset="0%" stop-color="hsl(' + hue + ', 24%, 17%)"/>',
            '<stop offset="100%" stop-color="hsl(' + ((hue + 28) % 360) + ', 28%, 9%)"/>',
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
        '<text x="400" y="270" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="100" fill="hsla(42, 70%, 70%, 0.22)" letter-spacing="-2">' + escapeHtml(app.name) + '</text>',
        '<text x="400" y="430" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="500" font-size="18" fill="hsla(42, 70%, 65%, 0.5)" letter-spacing="8">' + escapeHtml((app.slug || "").toUpperCase()) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function pickCover(app, idx) {
    if (app.cover) return { src: app.cover, isReal: true };
    return { src: placeholderCover(app, idx), isReal: false };
  }

  const TOTAL = APPS.length;

  function appCard(app, idx) {
    const cover = pickCover(app, idx);
    const indexLabel = arabicNumber(String(idx + 1).padStart(2, "0"));
    const totalLabel = arabicNumber(String(TOTAL).padStart(2, "0"));
    const isLcp = idx === 0;
    const loadAttrs = isLcp
      ? 'loading="eager" fetchpriority="high" decoding="async"'
      : 'loading="lazy" fetchpriority="low" decoding="async"';
    const detailHref = "app.html?id=" + encodeURIComponent(app.slug);
    const isComing = app.status === "coming-soon";
    const statusBadge = isComing
      ? '<span class="status-badge status-badge--coming">قريباً</span>'
      : "";
    const categoryIcon = app.icon || "bolt";
    const priceAmount = arabicNumber(app.price ? app.price.amount : "");
    const priceCurrency = app.price ? app.price.currency : "";
    const pricePeriod = app.price ? app.price.period : "";
    const trialDays = app.price && app.price.trialDays ? app.price.trialDays : 0;
    const trialBadge = trialDays
      ? `<span class="trial-badge">تجربة مجانية ${arabicNumber(trialDays)} أيام</span>`
      : "";
    const previewBtn = (!isComing && app.url)
      ? `<a class="card__preview" href="${app.url}" target="_blank" rel="noopener" aria-label="زيارة موقع تطبيق ${escapeHtml(app.name)} (يفتح في نافذة جديدة)" title="زيارة">
          ${icon("eye")}
          <span>زيارة</span>
        </a>`
      : "";

    return `
      <article class="card app-card" data-slug="${escapeHtml(app.slug)}">
        <a class="card__cover" href="${detailHref}" aria-label="فتح تفاصيل تطبيق ${escapeHtml(app.name)}">
          <img src="${cover.src}" alt="غلاف تطبيق ${escapeHtml(app.name)}" width="800" height="500" ${loadAttrs} />
          <span class="card__index">${indexLabel} / ${totalLabel}</span>
          ${statusBadge}
          <div class="card__name-overlay">
            <small>${escapeHtml((app.slug || "").toUpperCase())}</small>
            <span>${escapeHtml(app.name)}</span>
          </div>
        </a>
        <div class="card__body">
          <span class="category-chip">${icon(categoryIcon)}<span>${escapeHtml(app.category || "")}</span></span>
          <p class="card__desc">${escapeHtml(app.tagline || app.description)}</p>
          ${app.price ? `
            <div class="price-card">
              <div class="price-card__amount">
                <strong>${priceAmount}</strong>
                <span>${escapeHtml(priceCurrency)} / ${escapeHtml(pricePeriod)}</span>
              </div>
              ${trialBadge}
            </div>` : ""}
          <div class="card__actions">
            <a class="card__cta" href="${detailHref}">
              <span>عرض التفاصيل</span>
              <span aria-hidden="true">${icon("arrowBack")}</span>
            </a>
            ${previewBtn}
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    grid.innerHTML = APPS.map((a, i) => appCard(a, i)).join("");
    if (visibleCount) {
      visibleCount.textContent = arabicNumber(APPS.length) + " تطبيقاً معروضاً";
    }

    Array.from(grid.children).forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 0.55s var(--ease-out), transform 0.55s var(--ease-out)";
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

  render();
})();
