(function () {
  "use strict";


  const root = document.getElementById("detailRoot");
  const id = new URLSearchParams(window.location.search).get("id");
  const theme = (Array.isArray(THEMES) ? THEMES : []).find((t) => t.id === id);

  if (!theme) {
    root.innerHTML = `
      <section class="container section">
        <div class="empty-state">
          <p>لم يتم العثور على القالب المطلوب.</p>
          <p><a class="detail-hero__nav" href="./index.html" style="margin-top:1rem">
            <span>${icon("arrow")}</span><span>العودة لكل القوالب</span>
          </a></p>
        </div>
      </section>`;
    return;
  }

  // Update document title
  document.title = `${theme.nameAr} — منتجات عبقرينو`;

  /* -------- helpers -------- */
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function arabicNumber(n) {
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

  function placeholderSection(theme, section, idx) {
    const hue = (idx * 37 + theme.id.charCodeAt(0)) % 360;
    const seed = theme.id.charCodeAt(0) + idx;
    const ar = section.nameAr || "قسم";
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
          '<path d="M-70 -70 L70 70 M-70 70 L70 -70" stroke-width="0.5"/>',
        '</g>',
        '<text x="300" y="240" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="700" font-size="32" fill="hsla(42, 70%, 72%, 0.42)">' + escapeHtml(ar) + '</text>',
        '<text x="300" y="280" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="500" font-size="12" fill="hsla(42, 70%, 65%, 0.38)" letter-spacing="6">' + escapeHtml(theme.name.toUpperCase()) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function placeholderVideo(theme, video, idx) {
    const hue = (idx * 53 + theme.id.charCodeAt(0)) % 360;
    const seed = theme.id.charCodeAt(0) + idx + 100;
    const ar = (video && video.title) || "فيديو";
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img">',
        '<defs>',
          '<linearGradient id="g' + seed + '" x1="0%" y1="0%" x2="100%" y2="100%">',
            '<stop offset="0%" stop-color="hsl(' + hue + ', 26%, 14%)"/>',
            '<stop offset="100%" stop-color="hsl(' + ((hue + 22) % 360) + ', 30%, 8%)"/>',
          '</linearGradient>',
        '</defs>',
        '<rect width="800" height="450" fill="url(#g' + seed + ')"/>',
        '<g transform="translate(400 225)" opacity="0.14" stroke="hsl(168, 60%, 60%)" fill="none">',
          '<circle r="150" stroke-width="0.8"/>',
          '<circle r="95" stroke-width="0.6"/>',
        '</g>',
        '<text x="400" y="250" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="700" font-size="30" fill="hsla(168, 70%, 72%, 0.42)">' + escapeHtml(ar) + '</text>',
        '<text x="400" y="290" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="500" font-size="11" fill="hsla(168, 60%, 65%, 0.36)" letter-spacing="6">' + escapeHtml(theme.name.toUpperCase()) + '</text>',
      '</svg>'
    ].join("");
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function pickHeroVisual(theme) {
    if (theme.image) return { src: theme.image, isReal: true };
    const withImg = (theme.sections || []).find((s) => s.image);
    if (withImg) return { src: withImg.image, isReal: true };
    return { src: placeholderSection(theme, theme.sections[0] || { nameAr: theme.nameAr }, 0), isReal: false };
  }

  function autoSectionDesc(section) {
    const name = section.nameAr || "هذا القسم";
    return "قسم " + name + " لعرض المحتوى بشكل احترافي ومدروس داخل صفحات المتجر";
  }

  /* -------- markup -------- */
  const hero = pickHeroVisual(theme);

  const videos = Array.isArray(theme.videos) ? theme.videos : [];
  const hasVideos = videos.length > 0;
  const multi = videos.length > 1;

  const videoTourHtml = !hasVideos ? "" : (function () {
    const total = videos.length;
    const slidesHtml = videos.map((v, i) => {
      const poster = v.poster || placeholderVideo(theme, v, i);
      const idxLabel = arabicNumber(i + 1) + " من " + arabicNumber(total);
      return `
        <li class="video-tour__slide" role="group" aria-roledescription="slide" aria-label="${escapeHtml(idxLabel + ": " + (v.title || ""))}" data-idx="${i}">
          <div class="video-tour__media">
            <button type="button" class="video-tour__facade" data-src="${escapeHtml(v.src)}" aria-label="${escapeHtml("تشغيل الفيديو: " + (v.title || ""))}">
              <img src="${poster}" alt="" loading="lazy" decoding="async" />
              <span class="video-tour__play" aria-hidden="true">${icon("play")}</span>
            </button>
          </div>
          <p class="video-tour__caption">${escapeHtml(v.title || "")}</p>
          <p class="video-tour__desc">${escapeHtml(v.description || "")}</p>
        </li>
      `;
    }).join("");

    const dotsHtml = !multi ? "" : videos.map((v, i) => `
      <button type="button" class="video-tour__dot" data-idx="${i}" ${i === 0 ? 'aria-current="true"' : ''} aria-label="${escapeHtml("الانتقال إلى الفيديو " + arabicNumber(i + 1))}"></button>
    `).join("");

    const navHtml = !multi ? "" : `
      <div class="video-tour__nav">
        <button type="button" class="video-tour__btn" data-nav="prev" aria-label="السابق">${icon("arrow")}</button>
        <button type="button" class="video-tour__btn" data-nav="next" aria-label="التالي">${icon("arrowBack")}</button>
      </div>
    `;

    return `
      <section class="video-tour section" role="region" aria-roledescription="carousel" aria-label="جولة فيديو في القالب">
        <div class="container">
          <div class="video-tour__head">
            <div>
              <p class="eyebrow">خذ لك جولة سريعة</p>
              <h4 style="margin-top: 6px">تعرّف على مميزات الثيم من خلال فيديوهات قصيرة</h4>
            </div>
            ${multi ? `<div class="themes__count">${arabicNumber(total)} مقاطع</div>` : ""}
          </div>
          <div class="video-tour__viewport">
            <ul class="video-tour__track" tabindex="0" aria-label="مقاطع فيديو القالب">${slidesHtml}</ul>
            ${navHtml}
          </div>
          ${dotsHtml ? `<div class="video-tour__dots" aria-label="مؤشرات الشرائح">${dotsHtml}</div>` : ""}
        </div>
      </section>
    `;
  })();

  const featuresHtml = theme.features.map((f) => `
    <article class="feature">
      <span class="feature__icon" aria-hidden="true">${icon(f.icon)}</span>
      <h3 class="feature__name">${escapeHtml(f.nameAr)}</h3>
      <p class="feature__desc">${escapeHtml(f.description)}</p>
      <span class="feature__slug">${escapeHtml(f.slug)}</span>
    </article>
  `).join("");

  const sectionsHtml = theme.sections.map((s, i) => {
    const src = s.image || placeholderSection(theme, s, i);
    const isReal = !!s.image;
    return `
      <article class="section-card">
        <div class="section-card__img">
          <img src="${src}" alt="${escapeHtml(s.nameAr || "قسم")}" loading="lazy" decoding="async" />
        </div>
        <div class="section-card__body">
          <span class="section-card__icon" aria-hidden="true">${icon(s.icon)}</span>
          <div class="section-card__meta">
            <p class="section-card__title">${escapeHtml(s.nameAr || "قسم")}</p>
            <p class="section-card__desc">${escapeHtml(autoSectionDesc(s))}</p>
          </div>
        </div>
      </article>
    `;
  }).join("");

  root.innerHTML = `
    <!-- DETAIL HERO -->
    <section class="detail-hero">
      <div class="container">
        <div class="detail-hero__grid rise">
          <div class="detail-hero__meta">
            <a class="detail-hero__nav" href="./index.html">
              <span aria-hidden="true">${icon("arrow")}</span>
              <span>كل القوالب</span>
            </a>
            <h1 class="detail-hero__title">
              <em>${escapeHtml(theme.name)}</em>
              <span class="shimmer-underline">${escapeHtml(theme.nameAr)}</span>
            </h1>
            <p class="detail-hero__desc">${escapeHtml(theme.description)}</p>
            <div class="badges">
              <span class="badge">${icon("sections")}<strong>${theme.sectionsCount}</strong>قسم</span>
              <span class="badge">${icon("blocks")}<strong>${theme.blocksCount}</strong>مكوّن</span>
              <span class="badge">${icon("bolt")}<strong>${theme.features.length}</strong>ميزة</span>
            </div>
            ${(theme.priceAfter != null && theme.priceBefore != null) ? `
              <div class="price-block" role="group" aria-label="السعر: ${escapeHtml(formatSarText(theme.priceAfter))} بعد خصم ٢٠٪ من ${escapeHtml(formatSarText(theme.priceBefore))}">
                <div class="price-block__main">
                  <span class="price-block__after">${formatSar(theme.priceAfter)}</span>
                  <span class="price-block__before" aria-hidden="true">${formatSar(theme.priceBefore)}</span>
                </div>
                <span class="price-block__badge">وفّر ٢٠٪ بالكوبون</span>
              </div>
            ` : ""}
            ${theme.coupon ? `
              <button type="button" class="coupon-block" data-coupon="${escapeHtml(theme.coupon)}" aria-label="نسخ كوبون خصم ٢٠٪ لقالب ${escapeHtml(theme.nameAr)}: ${escapeHtml(theme.coupon)}" title="اضغط لنسخ الكوبون">
                <span class="coupon-block__icon" aria-hidden="true">${icon("discount")}</span>
                <span class="coupon-block__text">
                  <span class="coupon-block__label">كوبون خصم ٢٠٪</span>
                  <span class="coupon-block__code" dir="ltr">${escapeHtml(theme.coupon)}</span>
                </span>
                <span class="coupon-block__cta" aria-hidden="true">
                  ${icon("copy")}
                  <span>نسخ</span>
                </span>
              </button>
            ` : ""}
            <div class="detail-hero__actions">
              ${theme.preview
                ? `<a class="btn-preview" href="${theme.preview}" target="_blank" rel="noopener" aria-label="فتح معاينة مباشرة لقالب ${escapeHtml(theme.nameAr)} في نافذة جديدة">
                    ${icon("eye")}
                    <span>معاينة مباشرة</span>
                    ${icon("external")}
                  </a>`
                : `<span class="btn-repo" style="cursor:default" title="لا تتوفر معاينة عامة بعد">
                    ${icon("eye")}
                    <span>المعاينة قريباً</span>
                  </span>`}
              ${theme.buyUrl
                ? `<a class="btn-preview" href="${theme.buyUrl}" target="_blank" rel="noopener" aria-label="شراء قالب ${escapeHtml(theme.nameAr)} من متجر سلة">
                    ${icon("shop")}
                    <span>اشترِ الآن</span>
                    ${icon("external")}
                  </a>`
                : ""}
              ${theme.docs
                ? `<a class="btn-repo" href="${theme.docs}" target="_blank" rel="noopener" aria-label="فتح توثيق قالب ${escapeHtml(theme.nameAr)} في نافذة جديدة">
                    ${icon("book")}
                    <span>التوثيق</span>
                    ${icon("external")}
                  </a>`
                : ""}
            </div>
          </div>
          <div class="detail-hero__visual">
            <img src="${hero.src}" alt="معاينة قالب ${escapeHtml(theme.nameAr)}" width="800" height="500" loading="eager" fetchpriority="high" decoding="async" />
          </div>
        </div>
      </div>
    </section>

    ${videoTourHtml}

    <!-- FEATURES -->
    <section class="features section">
      <div class="container">
        <div class="features__head">
          <p class="eyebrow">ما يميزه</p>
          <h2>مميزات القالب</h2>
        </div>
        <div class="features__grid">${featuresHtml}</div>
      </div>
    </section>

    <!-- SECTIONS GALLERY -->
    <section class="sections-gallery container section">
      <div class="sections-gallery__head">
        <div>
          <p class="eyebrow">المعرض الكامل</p>
          <h2>جميع الأقسام</h2>
        </div>
        <div class="themes__count">${arabicNumber(theme.sections.length)} قسماً قابلاً للتخصيص</div>
      </div>
      <div class="sections-gallery__grid">${sectionsHtml}</div>
    </section>
  `;

  // After-render reveal stagger for feature cards + section cards
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const targets = [
      ...document.querySelectorAll(".features__grid .feature"),
      ...document.querySelectorAll(".sections-gallery__grid .section-card")
    ];
    targets.forEach((el, i) => {
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

  /* -------- Video tour slider --------
     Init is gated behind an IntersectionObserver — nothing runs until the
     section scrolls in. Slides are click-to-load facades: the <video>
     element is only created (and a network request fired) on user click. */
  (function setupVideoTourGate() {
    const section = document.querySelector(".video-tour");
    if (!section) return;

    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = RM ? "auto" : "smooth";

    const gate = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initVideoTour(section, scrollBehavior);
          gate.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    gate.observe(section);
  })();

  function initVideoTour(section, scrollBehavior) {
    const track = section.querySelector(".video-tour__track");
    const slides = Array.from(section.querySelectorAll(".video-tour__slide"));
    const dots = Array.from(section.querySelectorAll(".video-tour__dot"));
    const prevBtn = section.querySelector('[data-nav="prev"]');
    const nextBtn = section.querySelector('[data-nav="next"]');

    let activeIdx = 0;

    function scrollToSlide(i) {
      const idx = Math.max(0, Math.min(slides.length - 1, i));
      const target = slides[idx];
      if (!target) return;
      target.scrollIntoView({ behavior: scrollBehavior, inline: "center", block: "nearest" });
    }

    // Active-slide tracking (drives dots + activeIdx)
    if (slides.length > 1) {
      const slideIO = new IntersectionObserver((entries) => {
        let best = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry;
          }
        });
        if (!best) return;
        const idx = slides.indexOf(best.target);
        if (idx < 0 || idx === activeIdx) return;
        activeIdx = idx;
        dots.forEach((d, i) => {
          if (i === idx) d.setAttribute("aria-current", "true");
          else d.removeAttribute("aria-current");
        });
      }, { root: track, threshold: [0.5, 0.75, 1] });
      slides.forEach((s) => slideIO.observe(s));
    }

    // Prev / next — direction is logical; scrollIntoView handles RTL natively
    if (prevBtn) prevBtn.addEventListener("click", () => scrollToSlide(activeIdx - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => scrollToSlide(activeIdx + 1));

    // Dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.dataset.idx, 10);
        if (!isNaN(idx)) scrollToSlide(idx);
      });
    });

    // Arrow keys (RTL: ArrowLeft advances, ArrowRight goes back)
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); scrollToSlide(activeIdx + 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); scrollToSlide(activeIdx - 1); }
      else if (e.key === "Home") { e.preventDefault(); scrollToSlide(0); }
      else if (e.key === "End") { e.preventDefault(); scrollToSlide(slides.length - 1); }
    });

    // Pause videos that scroll out of view
    const playbackIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
          const v = entry.target;
          if (v.tagName === "VIDEO" && !v.paused) v.pause();
        }
      });
    }, { threshold: [0, 0.1] });

    // Click-to-load facade → real <video> with controls
    section.addEventListener("click", (e) => {
      const facade = e.target.closest(".video-tour__facade");
      if (!facade) return;
      e.preventDefault();
      activateFacade(facade);
    });

    function activateFacade(facade) {
      const src = facade.dataset.src;
      if (!src) return;
      const wrap = facade.parentElement;

      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.className = "video-tour__video";
      video.setAttribute("aria-label", facade.getAttribute("aria-label") || "");

      wrap.replaceChild(video, facade);

      video.addEventListener("play", () => {
        section.querySelectorAll(".video-tour__video").forEach((other) => {
          if (other !== video && !other.paused) other.pause();
        });
      });

      playbackIO.observe(video);
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => { /* user can press the native play control */ });
      }
    }
  }
})();
