(function () {
  "use strict";

  const root = document.getElementById("appDetailRoot");
  if (!root) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const app = (typeof APPS !== "undefined" && Array.isArray(APPS)) ? APPS.find((a) => a.slug === id) : null;

  if (!app) {
    root.innerHTML = `
      <section class="container section">
        <div class="empty-state">
          <p>لم يتم العثور على التطبيق المطلوب.</p>
          <p><a class="detail-hero__nav" href="./apps.html" style="margin-top:1rem">
            <span>${icon("arrow")}</span><span>العودة لكل التطبيقات</span>
          </a></p>
        </div>
      </section>`;
    return;
  }

  document.title = `${app.name} — تطبيقات عبقرينو`;

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function arabicNumber(n) {
    const map = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    return String(n).split("").map((c) => /\d/.test(c) ? map[+c] : c).join("");
  }

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

  function placeholderSection(app, label, idx) {
    const hue = (idx * 37 + (app.slug || "a").charCodeAt(0)) % 360;
    const seed = (app.slug || "a").charCodeAt(0) + idx + 200;
    const ar = label || "لقطة";
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" role="img">',
        '<defs>',
          '<linearGradient id="g' + seed + '" x1="0%" y1="0%" x2="100%" y2="100%">',
            '<stop offset="0%" stop-color="hsl(' + hue + ', 24%, 17%)"/>',
            '<stop offset="100%" stop-color="hsl(' + ((hue + 24) % 360) + ', 28%, 9%)"/>',
          '</linearGradient>',
        '</defs>',
        '<rect width="600" height="450" fill="url(#g' + seed + ')"/>',
        '<g transform="translate(300 225)" opacity="0.16" stroke="hsl(42, 70%, 65%)" fill="none">',
          '<circle r="130" stroke-width="0.8"/>',
          '<circle r="80" stroke-width="0.6"/>',
          '<path d="M0 -110 L0 110 M-110 0 L110 0" stroke-width="0.5"/>',
        '</g>',
        '<text x="300" y="240" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="700" font-size="28" fill="hsla(42, 70%, 72%, 0.42)">' + escapeHtml(ar) + '</text>',
        '<text x="300" y="280" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="500" font-size="12" fill="hsla(42, 70%, 65%, 0.38)" letter-spacing="6">' + escapeHtml(app.name) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  /* -------- data shaping -------- */
  const heroSrc = app.cover ? app.cover : placeholderCover(app, 0);
  const isComing = app.status === "coming-soon";
  const categoryIcon = app.icon || "bolt";

  const features = Array.isArray(app.features) ? app.features : [];
  const howItWorks = Array.isArray(app.howItWorks) ? app.howItWorks : [];
  const faq = Array.isArray(app.faq) ? app.faq : [];
  const gallery = Array.isArray(app.gallery) ? app.gallery : [];

  const FEATURE_ICONS = ["target", "sparkles", "bolt", "shop", "star", "heart"];

  /* -------- markup -------- */
  const statusBadge = isComing
    ? '<span class="status-badge status-badge--coming">قريباً</span>'
    : '<span class="status-badge status-badge--live">متاح الآن</span>';

  const priceCard = app.price ? `
    <div class="price-card price-card--lg">
      <div class="price-card__amount">
        <strong>${arabicNumber(app.price.amount)}</strong>
        <span>${escapeHtml(app.price.currency)} / ${escapeHtml(app.price.period)}</span>
      </div>
      ${app.price.trialDays
        ? `<span class="trial-badge">تجربة مجانية ${arabicNumber(app.price.trialDays)} أيام</span>`
        : ""}
    </div>
  ` : "";

  const primaryCta = (!isComing && app.url)
    ? `<a class="btn-preview" href="${app.url}" target="_blank" rel="noopener" aria-label="زيارة موقع تطبيق ${escapeHtml(app.name)} في نافذة جديدة">
        ${icon("eye")}
        <span>زيارة التطبيق</span>
        ${icon("external")}
      </a>`
    : `<span class="btn-repo" style="cursor:default" title="التطبيق سيتوفر قريباً">
        ${icon("eye")}
        <span>قريباً</span>
      </span>`;

  const sallaCta = app.sallaUrl
    ? `<a class="btn-repo" href="${app.sallaUrl}" target="_blank" rel="noopener" aria-label="صفحة تطبيق ${escapeHtml(app.name)} على متجر تطبيقات سلة">
        ${icon("shop")}
        <span>صفحة التطبيق على سلة</span>
        ${icon("external")}
      </a>`
    : "";

  const featuresHtml = features.length ? features.map((f, i) => {
    const ic = f.icon || FEATURE_ICONS[i % FEATURE_ICONS.length];
    return `
      <article class="feature">
        <span class="feature__icon" aria-hidden="true">${icon(ic)}</span>
        <h3 class="feature__name">${escapeHtml(f.title)}</h3>
        <p class="feature__desc">${escapeHtml(f.desc)}</p>
      </article>
    `;
  }).join("") : "";

  const howItWorksHtml = howItWorks.length ? `
    <section class="howitworks section">
      <div class="container">
        <div class="features__head">
          <p class="eyebrow">طريقة العمل</p>
          <h2>كيف يعمل</h2>
        </div>
        <ol class="howitworks__grid">
          ${howItWorks.map((step, i) => `
            <li class="howitworks-step">
              <span class="howitworks-step__num" aria-hidden="true">${arabicNumber(i + 1)}</span>
              <h3 class="howitworks-step__title">${escapeHtml(step.title)}</h3>
              <p class="howitworks-step__desc">${escapeHtml(step.desc)}</p>
            </li>
          `).join("")}
        </ol>
      </div>
    </section>
  ` : "";

  const galleryHtml = gallery.length ? `
    <section class="sections-gallery container section">
      <div class="sections-gallery__head">
        <div>
          <p class="eyebrow">معرض الصور</p>
          <h2>لقطات من داخل التطبيق</h2>
        </div>
        <div class="themes__count">${arabicNumber(gallery.length)} لقطة</div>
      </div>
      <div class="sections-gallery__grid">
        ${gallery.map((src, i) => {
          const isReal = !!src;
          const finalSrc = isReal ? src : placeholderSection(app, "لقطة " + arabicNumber(i + 1), i);
          return `
            <article class="section-card">
              <div class="section-card__img">
                <img src="${finalSrc}" alt="لقطة من تطبيق ${escapeHtml(app.name)}" loading="lazy" decoding="async" />
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  ` : "";

  const faqHtml = faq.length ? `
    <section class="faq section">
      <div class="container">
        <div class="features__head">
          <p class="eyebrow">قبل ما تبدأ</p>
          <h2>الأسئلة الشائعة</h2>
        </div>
        <ul class="faq__list">
          ${faq.map((item) => `
            <li class="faq__item">
              <details>
                <summary>
                  <span>${escapeHtml(item.q)}</span>
                  <span class="faq__chev" aria-hidden="true">${icon("arrow")}</span>
                </summary>
                <p class="faq__answer">${escapeHtml(item.a)}</p>
              </details>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  ` : "";

  root.innerHTML = `
    <!-- DETAIL HERO -->
    <section class="detail-hero">
      <div class="container">
        <div class="detail-hero__grid rise">
          <div class="detail-hero__meta">
            <a class="detail-hero__nav" href="./apps.html">
              <span aria-hidden="true">${icon("arrow")}</span>
              <span>كل التطبيقات</span>
            </a>
            <h1 class="detail-hero__title">
              <em>${escapeHtml((app.slug || "").toUpperCase())}</em>
              <span class="shimmer-underline">${escapeHtml(app.name)}</span>
            </h1>
            <p class="detail-hero__desc">${escapeHtml(app.tagline || app.description)}</p>
            ${app.tagline && app.description && app.tagline !== app.description
              ? `<p class="detail-hero__desc detail-hero__desc--soft">${escapeHtml(app.description)}</p>`
              : ""}
            <div class="badges">
              <span class="category-chip category-chip--lg">${icon(categoryIcon)}<span>${escapeHtml(app.category || "")}</span></span>
              ${statusBadge}
            </div>
            ${priceCard}
            <div class="detail-hero__actions">
              ${primaryCta}
              ${sallaCta}
            </div>
          </div>
          <div class="detail-hero__visual">
            <img src="${heroSrc}" alt="معاينة تطبيق ${escapeHtml(app.name)}" width="800" height="500" loading="eager" fetchpriority="high" decoding="async" />
          </div>
        </div>
      </div>
    </section>

    ${featuresHtml ? `
      <section class="features section">
        <div class="container">
          <div class="features__head">
            <p class="eyebrow">ما يميزه</p>
            <h2>مميزات التطبيق</h2>
          </div>
          <div class="features__grid">${featuresHtml}</div>
        </div>
      </section>` : ""}

    ${howItWorksHtml}

    ${galleryHtml}

    ${faqHtml}

    <section class="container section">
      <a class="detail-hero__nav" href="./apps.html">
        <span aria-hidden="true">${icon("arrow")}</span>
        <span>كل التطبيقات</span>
      </a>
    </section>
  `;

  /* Reveal stagger — features, how-it-works, gallery; honors reduced-motion */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const targets = [
      ...document.querySelectorAll(".features__grid .feature"),
      ...document.querySelectorAll(".howitworks__grid .howitworks-step"),
      ...document.querySelectorAll(".sections-gallery__grid .section-card"),
      ...document.querySelectorAll(".faq__list .faq__item")
    ];
    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out)";
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const list = Array.from(entry.target.parentElement.children);
          const idx = list.indexOf(entry.target);
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, Math.min(30 * idx, 400));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

    targets.forEach((el) => observer.observe(el));
  }
})();
