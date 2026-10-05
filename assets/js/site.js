/* Shared site chrome: year, footer themes list, active nav link, drawer, floating WhatsApp.
   Runs on every page after data.js and icons.js. */
(function () {
  "use strict";

  const WHATS_NUMBER = "966590206179";
  const WHATS_MSG = encodeURIComponent("مرحباً عبقرينو، أود الاستفسار عن قوالب سلة.");
  const WHATS_URL = `https://wa.me/${WHATS_NUMBER}?text=${WHATS_MSG}`;

  /* ----- Year ----- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Footer themes list ----- */
  const footerThemes = document.getElementById("footerThemes");
  const themesData = typeof THEMES !== "undefined" && Array.isArray(THEMES) ? THEMES : null;
  if (footerThemes && themesData) {
    footerThemes.innerHTML = themesData
      .map((t) => {
        const ar = escapeHtml(t.nameAr || "");
        const en = escapeHtml(t.name || "");
        return `<li><a href="theme.html?id=${encodeURIComponent(t.id)}">
          <span class="site-footer__theme-ar">${ar}</span>
          <span class="site-footer__theme-en">${en}</span>
        </a></li>`;
      })
      .join("");
  }

  /* ----- Inject nav drawer into DOM ----- */
  document.body.insertAdjacentHTML("beforeend", `
    <div class="nav-overlay" id="navOverlay" aria-hidden="true"></div>
    <aside class="site-drawer" id="siteDrawer" aria-label="القائمة الرئيسية" aria-hidden="true" inert>
      <div class="site-drawer__head">
        <a class="brand" href="./index.html" aria-label="منتجات عبقرينو">
          <span class="brand__mark" aria-hidden="true">
            <img src="assets/images/logo.png" alt="" width="38" height="38" loading="lazy" decoding="async" />
          </span>
          <span>منتجات عبقرينو</span>
        </a>
        <button class="site-drawer__close" id="drawerClose" aria-label="إغلاق القائمة">
          <span class="site-drawer__close-icon" data-icon="xmark"></span>
        </button>
      </div>
      <nav class="site-drawer__nav" aria-label="التنقل الرئيسي">
        <a class="site-drawer__link" href="./index.html" data-page="home" style="--i:0">
          <span class="site-drawer__link-icon" data-icon="grid"></span>
          <span class="site-drawer__link-text">
            <span class="site-drawer__link-label">القوالب</span>
            <span class="site-drawer__link-sub">مجموعة قوالب سلة الاحترافية</span>
          </span>
        </a>
        <a class="site-drawer__link" href="./apps.html" data-page="apps" style="--i:1">
          <span class="site-drawer__link-icon" data-icon="bolt"></span>
          <span class="site-drawer__link-text">
            <span class="site-drawer__link-label">التطبيقات</span>
            <span class="site-drawer__link-sub">تطبيقات سلة لرفع مبيعاتك</span>
          </span>
        </a>
        <a class="site-drawer__link" href="./about.html" data-page="about" style="--i:2">
          <span class="site-drawer__link-icon" data-icon="users"></span>
          <span class="site-drawer__link-text">
            <span class="site-drawer__link-label">من نحن</span>
            <span class="site-drawer__link-sub">استوديو عبقرينو وقصتنا</span>
          </span>
        </a>
        <div class="site-drawer__divider"></div>
        <a class="site-drawer__link site-drawer__link--bundle" href="./bundle.html" data-page="bundle" data-event="cta_nav_bundle" style="--i:3">
          <span class="site-drawer__link-icon" data-icon="gift"></span>
          <span class="site-drawer__link-text">
            <span class="site-drawer__link-label">اطلب الباقة</span>
            <span class="site-drawer__link-sub">خصم ٢٠٪ لفترة محدودة</span>
          </span>
        </a>
      </nav>
      <div class="site-drawer__foot">
        <a class="site-drawer__link site-drawer__link--cta" href="${WHATS_URL}" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب">
          <span class="site-drawer__link-icon" data-icon="whatsapp"></span>
          <span>تواصل معنا عبر واتساب</span>
        </a>
        <div class="site-drawer__socials">
          <a class="site-drawer__social" href="https://www.facebook.com/profile.php?id=100089730480472" target="_blank" rel="noopener" aria-label="فيسبوك"><span data-icon="facebook"></span></a>
          <a class="site-drawer__social" href="https://www.instagram.com/apqrinu/" target="_blank" rel="noopener" aria-label="إنستجرام"><span data-icon="instagram"></span></a>
          <a class="site-drawer__social" href="https://t.me/EcommerceAPQRINU" target="_blank" rel="noopener" aria-label="تلجرام"><span data-icon="telegram"></span></a>
          <a class="site-drawer__social" href="${WHATS_URL}" target="_blank" rel="noopener" aria-label="واتساب"><span data-icon="whatsapp"></span></a>
        </div>
      </div>
    </aside>
  `);

  /* ----- Drawer open / close ----- */
  const toggle  = document.querySelector(".nav-toggle");
  const drawer  = document.getElementById("siteDrawer");
  const overlay = document.getElementById("navOverlay");
  const closeBtn = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.removeAttribute("inert");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    requestAnimationFrame(function () {
      drawer.classList.add("is-open");
      overlay.classList.add("is-open");
    });
    if (toggle) {
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
    document.body.classList.add("nav-open");
    setTimeout(function () { if (closeBtn) closeBtn.focus(); }, 60);
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    if (toggle) {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
    document.body.classList.remove("nav-open");
    drawer.addEventListener("transitionend", function handler() {
      drawer.setAttribute("inert", "");
      drawer.setAttribute("aria-hidden", "true");
      drawer.removeEventListener("transitionend", handler);
    });
  }

  if (toggle)   toggle.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay)  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  /* ----- Active nav link (header + drawer) ----- */
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const pageKey =
    (path === "apps.html" || path === "app.html") ? "apps" :
    path.includes("about")  ? "about"  :
    path.includes("bundle") ? "bundle" :
    path.includes("theme")  ? "home"   :
    "home";
  document.querySelectorAll("[data-page]").forEach(function (a) {
    if (a.getAttribute("data-page") === pageKey) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ----- Icon injection (covers page + drawer) ----- */
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    const name = el.getAttribute("data-icon");
    if (typeof window.icon === "function" && name) el.innerHTML = window.icon(name);
  });

  /* ----- WhatsApp href ----- */
  document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
    a.setAttribute("href", WHATS_URL);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  /* ----- Sticky header scroll state ----- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- Floating WhatsApp button ----- */
  if (!document.querySelector(".whatsapp-fab")) {
    const fab = document.createElement("a");
    fab.className = "whatsapp-fab";
    fab.href = WHATS_URL;
    fab.target = "_blank";
    fab.rel = "noopener";
    fab.setAttribute("aria-label", "تواصل معنا عبر واتساب");
    fab.innerHTML = `
      <span class="whatsapp-fab__pulse" aria-hidden="true"></span>
      <span class="whatsapp-fab__icon" aria-hidden="true">${window.icon ? window.icon("whatsapp") : ""}</span>
      <span class="whatsapp-fab__label">تواصل واتساب</span>
    `;
    document.body.appendChild(fab);
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ----- Toast + copy-to-clipboard (shared) ----- */
  let toastEl = null;
  let toastTimer = null;

  function ensureToast() {
    if (toastEl) return toastEl;
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    toastEl.setAttribute("aria-live", "polite");
    document.body.appendChild(toastEl);
    return toastEl;
  }

  window.abqarinuToast = function (msg) {
    const el = ensureToast();
    el.textContent = msg;
    el.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
  };

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  window.abqarinuCopyCoupon = function (code) {
    if (!code) return;
    const done = () => window.abqarinuToast("تم نسخ الكوبون: " + code);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done).catch(() => {
        if (fallbackCopy(code)) done();
        else window.abqarinuToast("تعذّر النسخ — الكود: " + code);
      });
    } else if (fallbackCopy(code)) {
      done();
    } else {
      window.abqarinuToast("تعذّر النسخ — الكود: " + code);
    }
  };

  /* ----- Delegated click for any [data-coupon] element ----- */
  document.addEventListener("click", function (e) {
    const target = e.target.closest("[data-coupon]");
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();
    window.abqarinuCopyCoupon(target.getAttribute("data-coupon"));
  });
})();
