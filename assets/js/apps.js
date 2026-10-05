// Apqrinu Salla apps catalog. Single source of truth for apps.html (grid)
// and app.html (detail). Adding a new app = appending one object below.
//
// Schema:
//   slug         ← unique identifier; used in URL (?id=<slug>) and as the
//                  seed for the SVG placeholder. Kebab-case.
//   name         ← Arabic display name (primary heading on card + detail hero)
//   tagline      ← short Arabic line shown under the name on card + hero
//   description  ← longer Arabic paragraph; used in meta description and detail body
//   category     ← Arabic category label shown as a pill chip
//   icon         ← optional icon key from icons.js for the category chip; "" → 'bolt'
//   cover        ← optional cover image URL or relative path. "" → generated SVG placeholder
//   gallery[]    ← optional screenshot URLs for the detail-page gallery;
//                  each "" falls back to placeholderSection. Omit (or []) to hide the section.
//   status       ← "published" | "coming-soon"
//                  → "coming-soon" shows a قريباً badge and disables the primary CTA
//   url          ← public app website / landing page (primary CTA target)
//   sallaUrl     ← optional Salla app-store URL; hide the secondary CTA when ""
//   price        ← { amount, currency, period, trialDays }
//                    - amount   : number (rendered with Arabic-Indic digits)
//                    - currency : "ر.س" etc.
//                    - period   : "شهرياً" / "سنوياً"
//                    - trialDays: number → "تجربة مجانية N أيام" badge; 0 hides the badge
//   features[]   ← required. Each item: { title, desc, icon? }.
//                    icon is optional; defaults rotate through a small set.
//   howItWorks[] ← optional. Each item: { title, desc }. Omit (or []) to hide the section.
//   faq[]        ← optional. Each item: { q, a }. Omit (or []) to hide the section.
const APPS = [
  {
    slug: "zd-mabeatk",
    name: "زد مبيعاتك",
    tagline: "حوّل كل زيارة لمتجرك إلى عملية بيع",
    description: "تطبيق سلة يطوّر صفحات المنتج والسلة بمميزات ذكية لرفع معدل التحويل ومتوسط قيمة الطلب.",
    category: "تحسين معدل التحويل (CRO)",
    icon: "bolt",
    cover: "",
    gallery: [],
    status: "published",
    url: "https://zd-mabeatk.site/",
    sallaUrl: "",
    price: { amount: 49, currency: "ر.س", period: "شهرياً", trialDays: 7 },
    features: [
      {
        title: "منتجات مميزة في صفحة المنتج",
        desc: "بيع متقاطع داخل صفحة المنتج لزيادة فرص الشراء.",
        icon: "shop"
      },
      {
        title: "منتجات مميزة في صفحة السلة",
        desc: "اقتراحات داخل السلة ترفع متوسط قيمة الطلب (AOV).",
        icon: "sparkles"
      },
      {
        title: "عروض وتنبيهات خصومات حصرية",
        desc: "عروض داخل السلة وإشعارات تدفع لقرار شراء أسرع.",
        icon: "bolt"
      },
      {
        title: "استهداف وتخصيص متقدّم",
        desc: "تحكّم لكل منتج على حدة، أو تطبيق الإعدادات على المتجر بضغطة.",
        icon: "target"
      }
    ],
    howItWorks: [
      { title: "ثبّت التطبيق", desc: "أضف «زد مبيعاتك» لمتجرك من متجر تطبيقات سلة في دقائق." },
      { title: "فعّل وخصّص المميزات", desc: "اختر المنتجات المميزة والعروض والتنبيهات اللي تناسب متجرك." },
      { title: "شاهد مبيعاتك تزيد", desc: "تابع تفاعل عملائك وزيادة طلباتك مع كل زيارة." }
    ],
    faq: [
      { q: "هل التطبيق متوافق مع متجري على سلة؟", a: "نعم، مصمّم خصيصاً لمنصة سلة ويتكامل مع متجرك مباشرة." },
      { q: "هل في فترة تجريبية مجانية؟", a: "نعم، تقدر تجرّب التطبيق مجاناً لمدة ٧ أيام قبل الاشتراك." },
      { q: "هل أقدر أغيّر باقتي لاحقاً؟", a: "نعم، تقدر ترقّي أو تغيّر باقتك في أي وقت من لوحة التحكم." },
      { q: "هل الأسعار شاملة الضريبة؟", a: "لا، كل الأسعار غير شاملة ضريبة القيمة المضافة." },
      { q: "هل أحتاج خبرة تقنية؟", a: "لا، الإعداد بسيط وما يحتاج أي خبرة برمجية." },
      { q: "هل في التزام طويل المدى؟", a: "لا، الاشتراك شهري وتقدر تلغي في أي وقت." }
    ]
  }
];
