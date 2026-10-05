// Auto-generated from twilight.json files of 22 Abqarino theme repos.
// Source: https://github.com/apqrinu (tabby, style, waead, sarie, el-baraka, shop, view, tamayaz, bon, tamim, glow, rawea, bahij, silina, rose, clothes, prime, xerox, sennheiser, plus, pro, max)
// Schema mapping:
//   sectionsCount  ← components.length
//   blocksCount    ← sum of fields.length across all components
//   image          ← top-level cover used by the grid card and detail hero.
//                    Local path under assets/images/covers/<id>-theme.webp recommended (WebP, ~16:10).
//                    "" falls back to the first section image, then a generated SVG placeholder.
//   sections[].image ← real Salla CDN image URL when present, "" otherwise
//   features[]     ← curated AR dictionary keyed off slug
//   preview        ← live demo URL on demostore.salla.sa, "" if not yet published
//   buyUrl         ← Salla theme-store marketplace URL (s.salla.sa/themes/marketplace/<id>); omit (or "") to hide the "اشترِ الآن" button
//   coupon         ← 20% discount coupon code (F-XXXXXXXX). Rendered as a click-to-copy chip on the grid card
//                    and as a full block on the detail page. Omit (or "") to hide.
//   priceBefore    ← original price in SAR (ر.س). Shown with strikethrough next to the discounted price.
//   priceAfter     ← discounted price in SAR (ر.س) after the 20% coupon.
//                    Omit it (and leave coupon "") when there is no discount — priceBefore then renders as a plain price.
//   docs           ← optional external documentation site URL; omit (or "") to hide the docs button
//   videos[]       ← optional showcase clips for the detail-page slider. Each item:
//                      { src, poster, title }
//                    - src    : path under assets/videos/<theme-id>/...
//                    - poster : path to a JPG first-frame (recommended assets/videos/<id>/posters/<name>.jpg);
//                               "" falls back to a generated SVG placeholder
//                    - title  : short Arabic caption shown under the slide
//                    Omit the field (or empty array) to hide the slider for a theme.
const THEMES = [
  {
    "id": "tabby",
    "name": "Tabby",
    "nameAr": "تابي",
    "coupon": "F-1IJHCYW7",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة عصري بتصميم ديناميكي وعناصر متحركة لتجربة تسوق احترافية تجذب الزائر من اللحظة الأولى",
    "image": "assets/images/covers/tabby-theme.webp",
    "sectionsCount": 26,
    "blocksCount": 364,
    "repo": "https://github.com/apqrinu/tabby",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1412444137",
    "preview": "https://demostore.salla.sa/ar/dev-vjokhbvxln6qlczw",
    "docs": "https://tabby.apqrinu-co.com/",
    "videos": [
      {
        "src": "assets/videos/tabby/product-page.mp4",
        "poster": "assets/videos/tabby/posters/product-page.webp",
        "title": "صفحة المنتج"
      },
      {
        "src": "assets/videos/tabby/product-card-features.mp4",
        "poster": "assets/videos/tabby/posters/product-card-imposter.webp",
        "title": "بطاقة المنتج والمميزات"
      },
      {
        "src": "assets/videos/tabby/product-collection-section.mp4",
        "poster": "assets/videos/tabby/posters/product-collection-imposter.webp",
        "title": "قسم مجموعات المنتجات"
      },
      {
        "src": "assets/videos/tabby/products-bundle.mp4",
        "poster": "assets/videos/tabby/posters/bundle-product-imposter.webp",
        "title": "حزم المنتجات"
      },
      {
        "src": "assets/videos/tabby/videos-with-products-section.mp4",
        "poster": "assets/videos/tabby/posters/videos-porducts-imposter.webp",
        "title": "التسوّق عبر الفيديوهات"
      },
      {
        "src": "assets/videos/tabby/products-in-blog-page.mp4",
        "poster": "assets/videos/tabby/posters/products-in-blog-page-poster.webp",
        "title": "منتجات في صفحة المدونة"
      }
    ],
    "sections": [
      {
        "nameAr": "القسم الرئيسي",
        "nameEn": "Hero Section",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/DHYyHtCQ/Frame-17-webp.webp",
        "fields": 34,
        "path": "home.T_hero_combined"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-paper-send",
        "image": "https://i.ibb.co/93yM0yv8/Frame-2147223591-webp.webp",
        "fields": 8,
        "path": "home.T_our_services"
      },
      {
        "nameAr": "بنرات عريضة",
        "nameEn": "Wide Banners",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/Q3z2fxqb/Frame-2147223573-webp.webp",
        "fields": 20,
        "path": "home.T_wide_banner"
      },
      {
        "nameAr": "تسوق من خلال الفيديوهات",
        "nameEn": "Shopping With Videos",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/wFBWYNRP/Frame-2147223676-webp.webp",
        "fields": 20,
        "path": "home.T_shopping_with_video"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Testimonials",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/TM8sX3JR/Frame-2147223555-webp.webp",
        "fields": 18,
        "path": "home.T_testimonials"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Blogs",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/4R5rbpLD/Frame-2147223649-webp.webp",
        "fields": 12,
        "path": "home.T_blog_posts"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/RT88FGXy/Frame-2147223613-webp.webp",
        "fields": 17,
        "path": "home.T_FAQ"
      },
      {
        "nameAr": "تسوق من إنستجرام",
        "nameEn": "Shop Instagram",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/fTk7jgz/Frame-2147223612-webp.webp",
        "fields": 18,
        "path": "home.T_shop_instagram"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/pvD1x6v3/Screenshot-2026-05-21-160442-webp.webp",
        "fields": 8,
        "path": "home.T_branches"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "",
        "fields": 13,
        "path": "home.T_product_set"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "سلايدر متعدد البطاقات",
        "nameEn": "Multi Cards Slider",
        "icon": "sicon-heart-check",
        "image": "https://i.ibb.co/0pW3YNDm/cbbfe82c-4619-4313-b1d3-94e0367fb4cb.webp",
        "fields": 10,
        "path": "home.T_multi-cards-slider"
      },
      {
        "nameAr": "منتج مميز",
        "nameEn": "Special Product",
        "icon": "sicon-gift-sharing",
        "image": "",
        "fields": 30,
        "path": "home.T_special_product"
      },
      {
        "nameAr": "تصنيفات مميزة",
        "nameEn": "Special Categories",
        "icon": "sicon-favorite",
        "image": "",
        "fields": 18,
        "path": "home.T_special_categories"
      },
      {
        "nameAr": "بانرات جانبيه مع منتج مميز",
        "nameEn": "Side banners with special product",
        "icon": "sicon-store",
        "image": "",
        "fields": 20,
        "path": "home.T_side_banners_with_products"
      },
      {
        "nameAr": "عرض سريع",
        "nameEn": "Flash Deal",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/r2qnxT60/34ffdfc9-38d6-41eb-815e-ad99e4243061.webp",
        "fields": 21,
        "path": "home.T_flash_deal"
      },
      {
        "nameAr": "بانر مقارنة المنتج",
        "nameEn": "Product Comparison Banner",
        "icon": "sicon-magic-wand",
        "image": "https://i.ibb.co/BKsDZqDz/Screenshot-2026-05-20-134912-webp.webp",
        "fields": 29,
        "path": "home.T_product_comparison_banner"
      },
      {
        "nameAr": "مقارنة",
        "nameEn": "Comparing",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/99XNVRts/Screenshot-2026-05-20-135431-webp.webp",
        "fields": 15,
        "path": "home.T_comparing"
      },
      {
        "nameAr": "منتجات مع بانر",
        "nameEn": "Products with Banner",
        "icon": "sicon-t-shirt",
        "image": "https://i.ibb.co/DPQnzD7w/Frame-2147223571.png",
        "fields": 22,
        "path": "home.T_products_with_banner"
      },
      {
        "nameAr": "تجريبي",
        "nameEn": "تجريبي",
        "icon": "sicon-store",
        "image": "",
        "fields": 2,
        "path": "home.Test"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "style",
    "name": "Simah",
    "nameAr": "سمة",
    "coupon": "F-6Z2ZQJC0",
    "priceBefore": 299,
    "priceAfter": 239.2,
    "description": "قالب سلة أنيق يجمع بين البساطة والاحتراف ليمنح متجرك طابعاً فريداً وهوية بصرية متماسكة",
    "image": "https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/I3nULJHH8xiQ58Mco6w7LIujD5XfjZ55krKl8snw.png",
    "sectionsCount": 24,
    "blocksCount": 423,
    "repo": "https://github.com/apqrinu/style",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1146562717",
    "preview": "https://demostore.salla.sa/dev-bjon5vwgn8di3vik/",
    "sections": [
      {
        "nameAr": "عنوان",
        "nameEn": "Title",
        "icon": "sicon-format-text-alt",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/screen-5.webp",
        "fields": 19,
        "path": "home.S_header_section"
      },
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Main Banner",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/bRztMBmg/Frame-171-1.png",
        "fields": 25,
        "path": "home.S_Universal_Slider"
      },
      {
        "nameAr": "تصنيفات",
        "nameEn": "Categories",
        "icon": "sicon-tag",
        "image": "https://i.ibb.co/60FfW3Kv/Frame-171-3.png",
        "fields": 37,
        "path": "home.S_categories"
      },
      {
        "nameAr": "معرض صور مع منتجات",
        "nameEn": "Image Gallery with Products",
        "icon": "sicon-image1",
        "image": "https://cdn.files.salla.network/homepage/1398715320/b95b4665-4dfd-4aa3-911c-25df80b23586.webp",
        "fields": 11,
        "path": "home.S_photo_gallery_of_products"
      },
      {
        "nameAr": "تصنيفات مميزة",
        "nameEn": "Featured Categories",
        "icon": "sicon-store",
        "image": "https://cdn.files.salla.network/homepage/1398715320/5741a73b-92b9-4d7e-90f8-1354fd99e6fc.webp",
        "fields": 38,
        "path": "home.S_special_categories"
      },
      {
        "nameAr": "مراجعات العملاء بالفيديو",
        "nameEn": "Customer Video Reviews",
        "icon": "sicon-hand",
        "image": "https://cdn.files.salla.network/homepage/1398715320/2d0c4b0c-97ca-424d-91c1-bd3f2405969e.webp",
        "fields": 19,
        "path": "home.S_customer_video_reviews"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "https://i.ibb.co/zpG0TBy/Frame-82.png",
        "fields": 22,
        "path": "home.S_product_set"
      },
      {
        "nameAr": "اختيارتنا لكم",
        "nameEn": "Our Picks for You",
        "icon": "sicon-medal",
        "image": "https://i.ibb.co/vx69v8bq/Frame-84.png",
        "fields": 12,
        "path": "home.S_top_picks"
      },
      {
        "nameAr": "شبكة عرض البانر الرئيسي",
        "nameEn": "Main Banner Grid",
        "icon": "sicon-border-all",
        "image": "https://cdn.files.salla.network/homepage/1398715320/0dea8a44-ef61-4cdf-8c3d-502e68ac3fce.webp",
        "fields": 41,
        "path": "home.S_showcase_hero_grid"
      },
      {
        "nameAr": "المقارنة",
        "nameEn": "Comparison",
        "icon": "sicon-store",
        "image": "https://cdn.files.salla.network/homepage/1398715320/7e53161c-4d4c-4919-a200-e18d93f74636.webp",
        "fields": 18,
        "path": "home.S_comparing"
      },
      {
        "nameAr": "بانر مع عداد",
        "nameEn": "Banner with Counter",
        "icon": "sicon-discount-coupon",
        "image": "https://cdn.files.salla.network/homepage/1398715320/c5a75710-bc68-4590-a551-7bb92df20f06.webp",
        "fields": 30,
        "path": "home.S_banner_counter"
      },
      {
        "nameAr": "ركن المختارات",
        "nameEn": "Featured Corner",
        "icon": "sicon-magic-wand",
        "image": "https://i.ibb.co/Cp4wHvnx/image.png",
        "fields": 22,
        "path": "home.S_highlight_zone"
      },
      {
        "nameAr": "سلايدر منتجات",
        "nameEn": "Product Slider",
        "icon": "sicon-cart2",
        "image": "https://cdn.files.salla.network/homepage/1398715320/8c24a423-e7b1-4a43-ace6-acac6649b680.webp",
        "fields": 38,
        "path": "home.S_products_slider"
      },
      {
        "nameAr": "مواضيع مختاره",
        "nameEn": "Featured Topics",
        "icon": "sicon-check-circle2",
        "image": "https://i.ibb.co/20Mrq5f1/image.png",
        "fields": 18,
        "path": "home.S_Selected_Topics"
      },
      {
        "nameAr": "تقييمات العملاء",
        "nameEn": "Customer Reviews",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/XxVbLfxc/image.png",
        "fields": 10,
        "path": "home.S_testimonials"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/MkLJs8Zb/Frame-85-1.png",
        "fields": 11,
        "path": "home.S_FQA"
      },
      {
        "nameAr": "مميزات المتجر",
        "nameEn": "Store Features",
        "icon": "sicon-shopping-basket",
        "image": "https://i.ibb.co/yFs9CdvJ/Frame-85.png",
        "fields": 19,
        "path": "home.S_store_features"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "blog posts",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/yn4HJw7m/image.png",
        "fields": 8,
        "path": "home.S_blog_posts"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image",
        "image": "",
        "fields": 2,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "waead",
    "name": "Waead",
    "nameAr": "وعد",
    "coupon": "F-WRNGBMKB",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة شامل وغني بالمكونات يلبي احتياجات المتاجر الكبيرة متعددة الأقسام والفئات",
    "image": "",
    "sectionsCount": 35,
    "blocksCount": 485,
    "repo": "https://github.com/apqrinu/waead",
    "buyUrl": "https://s.salla.sa/themes/marketplace/2053832936",
    "preview": "https://demostore.salla.sa/ar/dev-olwl3hbbyyzsa6wn",
    "videos": [
      {
        "src": "assets/videos/waed/category-page.mp4",
        "poster": "assets/videos/waed/posters/category_page_poster.webp",
        "title": "صفحة التصنيف",
        "description":"صفحة تصنيف احترافية تعرض المنتجات بشكل منظم مع تجربة تصفح سلسة تساعد العملاء على الوصول لما يريدون بسهولة"
      },
      {
        "src": "assets/videos/waed/main-section.mp4",
        "poster": "assets/videos/waed/posters/main_section_poster.webp",
        "title": "البانر الرئيسي",
        "description":"واجهة جذابة بتصميم احترافي تعرض أهم عروض ومتجرك بأسلوب يلفت الانتباه ويزيد تفاعل الزوار منذ اللحظة الأولى"
      },
      {
        "src": "assets/videos/waed/products-collection.mp4",
        "poster": "assets/videos/waed/posters/products_collection_poster.webp",
        "title": "مجموعة المنتجات",
        "description":"اعرض مجموعة من المنتجات في قسم واحد بتصميم منظم يسهّل التصفح ويبرز خياراتك للعملاء بشكل جذاب"
      },
      {
        "src": "assets/videos/waed/products.mp4",
        "poster": "assets/videos/waed/posters/products_poster.webp",
        "title": "المنتجات",
        "description":"استعرض منتجاتك ببطاقات عصرية وجذابة تُبرز أهم التفاصيل، مع تصميم احترافي يعزز تجربة التسوق ويزيد معدلات الشراء."
      },
      {
        "src": "assets/videos/waed/shop-by-videos-section.mp4",
        "poster": "assets/videos/waed/posters/shop_by_videos_section_poster.webp",
        "title": "تسوق من خلال الفيديوهات",
        "description":"تسوق من خلال الفيديوهات يجمع المنتجات الخاصة بالقسم وتوفر خيارات الشراء بسهولة وسريعة"
      },
      {
        "src": "assets/videos/waed/special-cat-section.mp4",
        "poster": "assets/videos/waed/posters/special_cat_section_poster.webp",
        "title": "طريقة عرض التصنيفات المميزة",
        "description":"اعرض أبرز التصنيفات في سلايدر أنيق وسريع، ليسهّل على العملاء الوصول لما يبحثون عنه بسرعة وسلاسة"
      }
    ],
    "sections": [
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Hero Section",
        "icon": "sicon-star-o",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/1.jpg",
        "fields": 22,
        "path": "home.W_hero_section"
      },
      {
        "nameAr": "استكشف الاقسام المميزه",
        "nameEn": "Explore Featured categories",
        "icon": "sicon-cart2",
        "image": "https://i.ibb.co/DPfzYC4V/image.webp",
        "fields": 25,
        "path": "home.W_explore-categories"
      },
      {
        "nameAr": "تسوق من خلال الفيديوهات",
        "nameEn": "Shopping With Videos",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/prWJ4XQc/width-800-5.webp",
        "fields": 17,
        "path": "home.W_shopping_with_video"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "",
        "fields": 9,
        "path": "home.W_product_set"
      },
      {
        "nameAr": "منتج مميز",
        "nameEn": "Special Product",
        "icon": "sicon-gift-sharing",
        "image": "",
        "fields": 35,
        "path": "home.W_special_product"
      },
      {
        "nameAr": "منتج مختار",
        "nameEn": "Selected Product",
        "icon": "sicon-packed-box",
        "image": "https://i.ibb.co/jvNPxt4z/s-product.webp",
        "fields": 12,
        "path": "home.W_selected_product"
      },
      {
        "nameAr": "تسوّق العروض",
        "nameEn": "Shop The Deals",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/fYWC1WjJ/shop-deals.webp",
        "fields": 15,
        "path": "home.W_shop_deals"
      },
      {
        "nameAr": "صورة جانبية مع منتجات",
        "nameEn": "Side Banner Products",
        "icon": "sicon-photos",
        "image": "https://i.ibb.co/WWW9T8Kx/W-side-banner.jpg",
        "fields": 29,
        "path": "home.W_side_banner_products"
      },
      {
        "nameAr": "أقسام المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/XfxNMpPM/image.webp",
        "fields": 13,
        "path": "home.W_store_categories"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Article",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/HT2GzzNV/article.webp",
        "fields": 10,
        "path": "home.W_blog_posts"
      },
      {
        "nameAr": "الاسئله الشائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/4n4rbHhY/FQA.webp",
        "fields": 11,
        "path": "home.W_FQA"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/fztmG7qj/customer.webp",
        "fields": 13,
        "path": "home.W_mix_reviews"
      },
      {
        "nameAr": "بانر ثنائي",
        "nameEn": "Dual Banner",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/Gfj6DTw5/side-dual-1.webp",
        "fields": 12,
        "path": "home.W_Dual_Banner"
      },
      {
        "nameAr": "الأفضل لكِ",
        "nameEn": "Signature Picks",
        "icon": "sicon-medal",
        "image": "https://i.ibb.co/JRdyBDVP/section.webp",
        "fields": 9,
        "path": "home.W_top_picks"
      },
      {
        "nameAr": "أفضل الماركات",
        "nameEn": "Top Brands",
        "icon": "sicon-cart22",
        "image": "https://i.ibb.co/FqzM1NTf/51daa068-9e75-4b1e-b79a-41bf2838e342-1.webp",
        "fields": 12,
        "path": "home.W_top-brands"
      },
      {
        "nameAr": "بانر مقارنة المنتج",
        "nameEn": "Product Comparison Banner",
        "icon": "sicon-magic-wand",
        "image": "https://i.ibb.co/3mPxWSvz/banner-comparing.webp",
        "fields": 27,
        "path": "home.W_product_comparison_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/pBndqR9F/compare.webp",
        "fields": 15,
        "path": "home.W_comparing"
      },
      {
        "nameAr": "عروض لفترة محدودة",
        "nameEn": "Limited Time Offers",
        "icon": "sicon-add-to-cart",
        "image": "https://i.ibb.co/SDHgXLwL/5d05ae54-39b2-4deb-86ce-976386b2ebc6.webp",
        "fields": 23,
        "path": "home.W_limited-time-offers"
      },
      {
        "nameAr": "سلايدر متعدد البطاقات",
        "nameEn": "Multi Cards Slider",
        "icon": "sicon-heart-check",
        "image": "https://i.ibb.co/0pW3YNDm/cbbfe82c-4619-4313-b1d3-94e0367fb4cb.webp",
        "fields": 10,
        "path": "home.W_multi-cards-slider"
      },
      {
        "nameAr": "الأقسام الرئيسية",
        "nameEn": "Main Categories",
        "icon": "sicon-table",
        "image": "https://i.ibb.co/jPt90N8R/15669650-265f-4b9a-8fef-e7d9567dc4ad.webp",
        "fields": 21,
        "path": "home.W_main-categories"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "تصنيفات بصرية",
        "nameEn": "Visual Categories",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/WWfGMWQJ/d1b8a144-35d0-47cf-806e-5c36eced0f6b.webp",
        "fields": 11,
        "path": "home.W_visual_categories"
      },
      {
        "nameAr": "استكشف الآن",
        "nameEn": "Explore Now",
        "icon": "sicon-border-all",
        "image": "https://i.ibb.co/xSqbWhcT/27396bc7-8e07-4663-886d-8380a561e31f.webp",
        "fields": 16,
        "path": "home.W_explore_now"
      },
      {
        "nameAr": "بنرات أكورديون",
        "nameEn": "Accordion Banners",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/MDkSSJ21/899bded2-4767-4eb6-9f3c-df5e961d44ed.webp",
        "fields": 6,
        "path": "home.W_accordion_banners"
      },
      {
        "nameAr": "نبذة عنا",
        "nameEn": "About Us",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/mrRRS5SB/f729037a-534f-4ee4-ab7c-ee773e71de25.webp",
        "fields": 15,
        "path": "home.W_about_us"
      },
      {
        "nameAr": "بنر التصنيفات",
        "nameEn": "Categories Banner",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/Kxx92d57/0a462cff-5bb4-4f3d-b418-0af1129c1df5.webp",
        "fields": 18,
        "path": "home.W_categories_banner"
      },
      {
        "nameAr": "محتوى متحرك",
        "nameEn": "Marquee",
        "icon": "sicon-slider",
        "image": "https://i.ibb.co/BHVGxv3k/1dfae2e0-90af-407a-84a7-b113bc76f8c6.webp",
        "fields": 9,
        "path": "home.W_marquee"
      },
      {
        "nameAr": "سيكشن ترويجي",
        "nameEn": "Promotional Section",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/qM38C9Yj/9307537e-0f54-4154-9343-02dff5ad591c.webp",
        "fields": 18,
        "path": "home.W_promotional_section"
      },
      {
        "nameAr": "مجموعة التصنيفات",
        "nameEn": "Categories Collection",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/DHBpDZDf/674a27cf-c67d-4851-8001-851393710955.webp",
        "fields": 8,
        "path": "home.W_categories_collection"
      },
      {
        "nameAr": "عرض سريع",
        "nameEn": "Flash Deal",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/r2qnxT60/34ffdfc9-38d6-41eb-815e-ad99e4243061.webp",
        "fields": 18,
        "path": "home.W_flash_deal"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "sarie",
    "name": "Sarie",
    "nameAr": "سريع",
    "coupon": "F-HP1LC8VE",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة سريع التحميل ومحسّن للأداء العالي مع تجربة استخدام سلسة على كل الأجهزة",
    "image": "",
    "sectionsCount": 33,
    "blocksCount": 371,
    "repo": "https://github.com/apqrinu/sarie",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1477558347",
    "preview": "https://demostore.salla.sa/ar/dev-8pqqremcvzpr2kku",
    "docs": "https://sarie.apqrinu-co.com/",
    "videos": [
      {
        "src": "assets/videos/sariea/hero-section.mp4",
        "poster": "assets/videos/sariea/posters/hero-section.webp",
        "title": "القسم الرئيسي"
      },
      {
        "src": "assets/videos/sariea/special-section.mp4",
        "poster": "assets/videos/sariea/posters/special-section.webp",
        "title": "تصنيفات مميزة"
      },
      {
        "src": "assets/videos/sariea/products.mp4",
        "poster": "assets/videos/sariea/posters/products.webp",
        "title": "سكشن منتجات"
      },
      {
        "src": "assets/videos/sariea/product-page.mp4",
        "poster": "assets/videos/sariea/posters/product-page.webp",
        "title": "صفحة المنتج"
      },
      {
        "src": "assets/videos/sariea/product-card.mp4",
        "poster": "assets/videos/sariea/posters/category-page.webp",
        "title": "بطاقة المنتج"
      },
      {
        "src": "assets/videos/sariea/video-motion-with-text.mp4",
        "poster": "assets/videos/sariea/posters/video-motion-with-text.webp",
        "title": "فيديو تفاعلي مع نص متحرك"
      }
    ],
    "sections": [
      {
        "nameAr": "القسم الرئيسي",
        "nameEn": "Hero Section",
        "icon": "sicon-image1",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/Untitled-design.jpg",
        "fields": 33,
        "path": "home.S_hero_combined"
      },
      {
        "nameAr": "سلايدر بنرات",
        "nameEn": "Main slider",
        "icon": "sicon-image1",
        "image": "",
        "fields": 19,
        "path": "home.S_main_slider"
      },
      {
        "nameAr": "شريط متحرك",
        "nameEn": "marquee",
        "icon": "sicon-swipe-right",
        "image": "",
        "fields": 11,
        "path": "home.S_marquee"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "",
        "fields": 9,
        "path": "home.S_product_set"
      },
      {
        "nameAr": "تصنيفات مميزة",
        "nameEn": "Special Categories",
        "icon": "sicon-favorite",
        "image": "",
        "fields": 14,
        "path": "home.S_special_categories"
      },
      {
        "nameAr": "مواضيع مختاره",
        "nameEn": "Featured Topics",
        "icon": "sicon-check-circle2",
        "image": "",
        "fields": 8,
        "path": "home.S_Selected_Topics"
      },
      {
        "nameAr": "منتجات مع بانر",
        "nameEn": "Hero Banner with Categories",
        "icon": "sicon-cellphone-landscape",
        "image": "",
        "fields": 10,
        "path": "home.S_hero_categories"
      },
      {
        "nameAr": "منتجات مع بانر",
        "nameEn": "Products with Banner",
        "icon": "sicon-t-shirt",
        "image": "",
        "fields": 34,
        "path": "home.S_products_with_banner"
      },
      {
        "nameAr": "مقارنة",
        "nameEn": "compare",
        "icon": "sicon-transfer",
        "image": "",
        "fields": 13,
        "path": "home.S_comparing"
      },
      {
        "nameAr": "الأسئلة الشائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "",
        "fields": 7,
        "path": "home.S_FAQ"
      },
      {
        "nameAr": "تقييمات العملاء",
        "nameEn": "Customer Reviews",
        "icon": "sicon-star2",
        "image": "",
        "fields": 6,
        "path": "home.S_testimonials"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "",
        "fields": 3,
        "path": "home.S_blog_posts"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "عروضنا المميزة",
        "nameEn": "Our special offers",
        "icon": "sicon-table",
        "image": "",
        "fields": 24,
        "path": "home.S_our_special_offers"
      },
      {
        "nameAr": "قسم التصنيفات + اسلايدر للمنتجات + اسلايدر للعروض",
        "nameEn": "Categories section + Products slider + Offers slider",
        "icon": "sicon-carousel",
        "image": "",
        "fields": 14,
        "path": "home.S_best_categories_and_products"
      },
      {
        "nameAr": "منتجات مميزة مع عروض حصرية",
        "nameEn": "Featured products with exclusive offers - quick view",
        "icon": "sicon-table",
        "image": "",
        "fields": 22,
        "path": "home.S_special_products_with_offer"
      },
      {
        "nameAr": "بنارات عروض مميزة",
        "nameEn": "special offers banners",
        "icon": "sicon-device-image",
        "image": "",
        "fields": 9,
        "path": "home.S_special_offers_banners"
      },
      {
        "nameAr": "تسوق من خلال الفيديوهات",
        "nameEn": "Shopping With Videos",
        "icon": "sicon-carousel",
        "image": "",
        "fields": 15,
        "path": "home.S_shopping_by_videos"
      },
      {
        "nameAr": "التسوق عبر التصنيفات",
        "nameEn": "Shopping by categories",
        "icon": "sicon-store",
        "image": "",
        "fields": 13,
        "path": "home.S_shopping_by_categories"
      },
      {
        "nameAr": "تسوق حسب",
        "nameEn": "Shopping by",
        "icon": "sicon-store",
        "image": "",
        "fields": 16,
        "path": "home.S_shopping_by"
      },
      {
        "nameAr": "منتج مميز",
        "nameEn": "special product",
        "icon": "sicon-store",
        "image": "",
        "fields": 18,
        "path": "home.S_selected_product"
      },
      {
        "nameAr": "بانر تخفيضات",
        "nameEn": "Banner of discounts",
        "icon": "sicon-store",
        "image": "",
        "fields": 13,
        "path": "home.S_discount_banner"
      },
      {
        "nameAr": "بنرات Accordion",
        "nameEn": "Accordion Banners",
        "icon": "sicon-store",
        "image": "",
        "fields": 5,
        "path": "home.S_accordion_banners"
      },
      {
        "nameAr": "تسوق من إنستجرام",
        "nameEn": "Shop Instagram",
        "icon": "sicon-store",
        "image": "",
        "fields": 8,
        "path": "home.S_shop_instagram"
      },
      {
        "nameAr": "الموقع و ايام العمل",
        "nameEn": "Location and working days",
        "icon": "sicon-location-target",
        "image": "",
        "fields": 9,
        "path": "home.S_locations_working_days"
      },
      {
        "nameAr": "قسم الفيديو التفاعلي",
        "nameEn": "Interactive Video Section",
        "icon": "sicon-play-circle",
        "image": "",
        "fields": 5,
        "path": "home.S_interactive_video"
      },
      {
        "nameAr": "عروض متحركة",
        "nameEn": "animated shows",
        "icon": "sicon-fast-forward",
        "image": "",
        "fields": 1,
        "path": "home.S_horizontal_animated_shows"
      },
      {
        "nameAr": "النص الترويجي",
        "nameEn": "promotional text",
        "icon": "sicon-format-shapes",
        "image": "",
        "fields": 6,
        "path": "home.S_promotional_text"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "el-baraka",
    "name": "El Baraka",
    "nameAr": "البركة",
    "coupon": "F-XGHYCCIQ",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة بهوية عربية أصيلة مصمم خصيصاً لمتاجر التراث والمنتجات التقليدية والحرف اليدوية",
    "image": "",
    "sectionsCount": 20,
    "blocksCount": 226,
    "repo": "https://github.com/apqrinu/el-baraka",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1247918317",
    "preview": "https://demostore.salla.sa/dev-op7cyzoxb2bfrlfg/",
    "sections": [
      {
        "nameAr": "سلايدر مميز",
        "nameEn": "special slider",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/5gMGG7XN/5-6.webp",
        "fields": 11,
        "path": "home.B_special_slider"
      },
      {
        "nameAr": "أقسام المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/RkwX7t5m/5-1.webp",
        "fields": 17,
        "path": "home.B_store_categories"
      },
      {
        "nameAr": "بنرات عريضة",
        "nameEn": "Wide Banners - Al Baraka",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/FGXz6Jm/5.webp",
        "fields": 20,
        "path": "home.B_wide_banner"
      },
      {
        "nameAr": "ليش تختارنا",
        "nameEn": "Why Choose Us",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/Gf9CGRZB/5.webp",
        "fields": 10,
        "path": "home.B_why_us"
      },
      {
        "nameAr": "اكتشف منتجاتنا",
        "nameEn": "Explore Products",
        "icon": "sicon-add-to-cart",
        "image": "https://i.ibb.co/vxL4wLPf/5-2.webp",
        "fields": 14,
        "path": "home.B_explore_products"
      },
      {
        "nameAr": "تسوق حسب الفئة",
        "nameEn": "Shop by Category",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/vpkWSS0/6.webp",
        "fields": 9,
        "path": "home.B_shop_by_category"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "https://i.ibb.co/Zz2gmLLy/5-4.webp",
        "fields": 16,
        "path": "home.B_product_set"
      },
      {
        "nameAr": "منتجات مميزة - البركه",
        "nameEn": "special products - El beaka",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/B24tmF2y/5-5.webp",
        "fields": 26,
        "path": "home.B_special_products"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/NwkMwVg/5-3-1.png",
        "fields": 14,
        "path": "home.B_FAQ"
      },
      {
        "nameAr": "مميزات المتجر",
        "nameEn": "store features",
        "icon": "sicon-gold-badge",
        "image": "https://i.ibb.co/VWm3yyGf/5-1.png",
        "fields": 10,
        "path": "home.B_store_features"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Testimonials",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/P0k5DC3/5-2.png",
        "fields": 15,
        "path": "home.B_testimonials"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Article",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/60WQ4x2S/5-2-1.webp",
        "fields": 11,
        "path": "home.B_blog_posts"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/sJqL0zZS/5-4.webp",
        "fields": 13,
        "path": "home.B_branches"
      },
      {
        "nameAr": "إحصائيات المتجر - البركه",
        "nameEn": "Stats - Al Barkah",
        "icon": "sicon-shopping-basket",
        "image": "https://i.ibb.co/yjkvtHj/image-28-1.png",
        "fields": 14,
        "path": "home.B_stats"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "shop",
    "name": "Shop",
    "nameAr": "تسوق",
    "coupon": "F-P4ERU87R",
    "priceBefore": 300,
    "priceAfter": 240,
    "description": "قالب سلة عملي ومباشر يركز على عرض المنتجات بوضوح وتسهيل قرار الشراء",
    "image": "",
    "sectionsCount": 21,
    "blocksCount": 162,
    "repo": "https://github.com/apqrinu/shop",
    "buyUrl": "https://s.salla.sa/themes/marketplace/842694915",
    "preview": "https://demostore.salla.sa/dev-dhxvf2j62w6vg90c/",
    "sections": [
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image-carousel",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/2-1.jpg",
        "fields": 6,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/4.jpg",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-list-play",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/Untitled-design.jpg",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image",
        "image": "https://cdn.salla.sa/mQgZlG/VSk26LArCczWj085xH8jxuusMiKzrcE1wsVC6pLm.png",
        "fields": 2,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.sa/mQgZlG/kvFhVeuUyjK4nHUovBQBZ632Hb6gKV2BXZwid40e.png",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.sa/mQgZlG/JMJiEx1KVn7mzxo5FdtsVsAmpWPM8UJW0i0B93c0.png",
        "fields": 2,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-add_col_after",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/1.jpg",
        "fields": 6,
        "path": "home.tasawq_enhanced_categories_1"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-cellphone-landscape",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/6.jpg",
        "fields": 18,
        "path": "home.enhanced_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-bullhorn",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/12.jpg",
        "fields": 3,
        "path": "home.adv"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-award-ribbon",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/8.jpg",
        "fields": 7,
        "path": "home.enhanced_sf"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-fire",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/5.jpg",
        "fields": 11,
        "path": "home.offer"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-images",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/3.jpg",
        "fields": 18,
        "path": "home.products_with_design"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-add_col_after",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/7.jpg",
        "fields": 8,
        "path": "home.tasawq_enhanced_categories_2"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-shopping-bag2",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/10.jpg",
        "fields": 7,
        "path": "home.special_product"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-content",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/9.jpg",
        "fields": 13,
        "path": "home.about_us"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-help",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/11.jpg",
        "fields": 6,
        "path": "home.fq"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-help",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/07/11.jpg",
        "fields": 11,
        "path": "home.fq2"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-browser-alt",
        "image": "",
        "fields": 10,
        "path": "home.T_enhanced_cats_banners_1"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-browser-alt",
        "image": "",
        "fields": 10,
        "path": "home.Special_cat_gallery"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-fresh-arrival",
        "image": "",
        "fields": 1,
        "path": "home.T_videos_shop"
      },
      {
        "nameAr": "فروع المتجر (تسوق)",
        "nameEn": "store locations (tasawq)",
        "icon": "sicon-location",
        "image": "",
        "fields": 5,
        "path": "home.T_maps"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "view",
    "name": "View",
    "nameAr": "فيو",
    "coupon": "F-OQMFLNUU",
    "priceBefore": 300,
    "priceAfter": 240,
    "description": "قالب سلة مرئي بصري يبرز جماليات منتجك بقوة عبر تخطيطات صور غنية ومدروسة",
    "image": "",
    "sectionsCount": 26,
    "blocksCount": 484,
    "repo": "https://github.com/apqrinu/view",
    "buyUrl": "https://s.salla.sa/themes/marketplace/2140366990",
    "preview": "https://demostore.salla.sa/dev-fljujdrithw8rlgp",
    "sections": [
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-carousel",
        "image": "https://cdn.salla.sa/form-builder/VBF4P3ZP7Ia46UFwVFh90KN9Q3MYzl3CDx9dVE7Z.webp",
        "fields": 34,
        "path": "home.V_multi_slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-braille-hand",
        "image": "https://cdn.salla.sa/form-builder/IYCSFA2kwt914esKWABNQqnNP4F4pJayOSVQYOpG.webp",
        "fields": 27,
        "path": "home.V_styled_categories"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-star2",
        "image": "https://cdn.salla.sa/form-builder/xDlmqBp61rwpO5e9HllJDX0AjnkY87C25eED6NTv.jpg",
        "fields": 30,
        "path": "home.V_featured_product"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-box",
        "image": "https://cdn.salla.sa/form-builder/h4tH1xgaTe2Tes9I6f4vV83gCX44Q3QJLUIf1cAu.webp",
        "fields": 17,
        "path": "home.V_product_bundle"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-page",
        "image": "https://cdn.salla.sa/form-builder/ocUM7otZ0TOS9LlO4nQVphEis6YCzoA1S6pKgUjV.png",
        "fields": 26,
        "path": "home.V_text_block"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-badge",
        "image": "https://cdn.salla.sa/form-builder/z2n4uIGkMAKIdKHW5hsq17HvJsmWBfvp1cQOOGqL.jpg",
        "fields": 19,
        "path": "home.V_brands_slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-clothes-tag",
        "image": "https://cdn.salla.sa/form-builder/61GZuwzi8eBRRBdL2eD4Tq3vo0LT3XLwmYCYpqIY.jpg",
        "fields": 27,
        "path": "home.V_tagged_products"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-timer",
        "image": "https://cdn.salla.sa/form-builder/DsvTiGXxs6VFFodAyAYoLpsqSVUgZbuzS8jHVXKi.jpg",
        "fields": 30,
        "path": "home.V_countdown_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-clipboard-person",
        "image": "https://cdn.salla.sa/form-builder/5FkCiRFoFwB63vjH6yURIvMIg6pWq2VUikRyZjMo.jpg",
        "fields": 12,
        "path": "home.V_reviews_with_product"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-office",
        "image": "https://cdn.salla.sa/form-builder/ofBPtoUdXwclHzgp3qYqps2YmfOKr3Ybppn9fw2S.jpg",
        "fields": 16,
        "path": "home.V_store_features"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-basket",
        "image": "https://cdn.salla.sa/form-builder/FSkwN8IoUTXDZLzLFg7KiWetaCeAPiv9Ri5fwTXa.jpg",
        "fields": 26,
        "path": "home.V_products_slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-discount-coupon",
        "image": "https://cdn.salla.sa/form-builder/T2rYbFJ8Z05g7JYnI8bhm2QkwCWmh83kKmYYcUQB.jpg",
        "fields": 20,
        "path": "home.V_offer_collection"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-brightness-low",
        "image": "https://cdn.salla.sa/form-builder/YLxyRXyzg8AFIJZ8RyYoRG167oplOgVznjHwlS2m.jpg",
        "fields": 21,
        "path": "home.V_product_highlight"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-branch",
        "image": "https://cdn.salla.sa/form-builder/KdhaRtdfyWH4fhLdWUyTk7d6QlS3dEwH5yzm1eCW.jpg",
        "fields": 23,
        "path": "home.V_nested_categories"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-paperclip",
        "image": "https://cdn.salla.sa/form-builder/rUmYHqwQOr2t3uHm8hDJbLfvrinkP3KgYD4Wq6wf.jpg",
        "fields": 16,
        "path": "home.V_links_gallery"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-checklist",
        "image": "https://cdn.salla.sa/form-builder/fi75YuvYJ4UvsDgYFhM4E42ss3CDEMjI8GxPMAeE.jpg",
        "fields": 17,
        "path": "home.V_group_features"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-chat-conversation",
        "image": "https://cdn.salla.sa/form-builder/HIxvsN73ddWs16ZsZxoMWPVs9UckkCmKFzAjQQyw.jpg",
        "fields": 19,
        "path": "home.V_mixed_reviews"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-quote",
        "image": "https://cdn.salla.sa/form-builder/1ZabK9eY4YFXQ1fB1yvIXrEa2eq03DOkgkxJ4C1l.jpg",
        "fields": 17,
        "path": "home.V_faq"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-newspaper",
        "image": "https://cdn.salla.sa/form-builder/Z8kvAdKCtAJ3sU0ecEtGE83Xrp9rdS123PYQ0a5J.jpg",
        "fields": 16,
        "path": "home.V_blog_posts"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-instagram2",
        "image": "https://cdn.salla.sa/form-builder/U8dS2RsoPdcujnbeseHafOoCE41GA8fgqEdXWmei.jpg",
        "fields": 12,
        "path": "home.V_instagram_feed"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-bullhorn",
        "image": "https://cdn.salla.sa/form-builder/JGeLIJPWm6vPULd9PMYfF4aW4SQY4Jd4Kf6c155t.png",
        "fields": 17,
        "path": "home.V_marque"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-fabric-swatch",
        "image": "https://cdn.salla.sa/form-builder/OCJnF8j5IDV0IGsrq3CGLcJDcIUT1niSN5M38ZBN.jpg",
        "fields": 22,
        "path": "home.V_banner_line"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.sa/form-builder/Dq9PTTZla5mSPmNDLtxMBOYSNkegrv69t8Juy0Kg.jpg",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.sa/form-builder/bZowPiZqPFfKemyJpjVtf3RimSSaERucLYSIKKSh.jpg",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image",
        "image": "https://cdn.salla.sa/form-builder/mKYNRqQJPryfcWwoOdAqbEfKIDM7rmKLBLeDhtPW.jpg",
        "fields": 2,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.sa/form-builder/SNISGB7WVnHUK9lFR5fkOLMbkCHsyLvmIGnHe6p6.jpg",
        "fields": 3,
        "path": "home.brands"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "tamayaz",
    "name": "Tamayaz",
    "nameAr": "تميز",
    "coupon": "F-QMOA7GBQ",
    "priceBefore": 260,
    "priceAfter": 208,
    "description": "قالب سلة متميز بتصميم احترافي يميز متجرك عن المنافسين ويعكس مكانة علامتك التجارية",
    "image": "",
    "sectionsCount": 24,
    "blocksCount": 247,
    "repo": "https://github.com/apqrinu/tamayaz",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1783846755",
    "preview": "https://demostore.salla.sa/dev-43ucgiz8xnc6hbjr/",
    "sections": [
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/ثيم-تميز.webp",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-discount-coupon",
        "image": "https://cdn.salla.sa/form-builder/myWebaV8RwVQ5N7L6B42GixbHRHxcG29WHGH0Zbr.png",
        "fields": 13,
        "path": "home.T_offer_collection"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-braille-hand",
        "image": "https://i.ibb.co/svHW93t0/Profile.png",
        "fields": 23,
        "path": "home.T_styled_categories"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-clothes-hanger",
        "image": "https://cdn.salla.sa/form-builder/JfqOZChm6yjQJnEcVLPGfgCRLCAgGV3XJ3s08RRu.png",
        "fields": 13,
        "path": "home.T_marquo_brands"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-explode",
        "image": "https://cdn.salla.sa/form-builder/jHIwk2SKF5JaxIivUs5JbQDdA811O8QAdAAlofd4.png",
        "fields": 11,
        "path": "home.T_marquo_moving"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-magnet",
        "image": "https://cdn.salla.sa/form-builder/KEs4jiqd0EfQZwSaG2rjawBFByZey4qMbgHfuL5H.png",
        "fields": 18,
        "path": "home.T_comparing"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "",
        "fields": 20,
        "path": "home.T_hero"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-information",
        "image": "https://cdn.salla.sa/form-builder/F3wL1382nlz9dx3038J0HTj8Uecbd4qRhKOuhsMv.png",
        "fields": 12,
        "path": "home.T_fqa"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/VWfFPLcm/Frame-34.png",
        "fields": 17,
        "path": "home.T_selected_categories"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-hashtag",
        "image": "https://cdn.salla.sa/form-builder/bmSVbMEBlN2W0fCy4aE5j5D8DoCT6E0YgeMJ0eq7.png",
        "fields": 3,
        "path": "home.T_links_tree"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-round-neck-t-shirt",
        "image": "https://cdn.salla.sa/form-builder/Npc1oYmOMQG8LDBMGSJeAaxmZtlNd8WgTRM7W3q5.png",
        "fields": 13,
        "path": "home.T_products"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-clothes-hanger",
        "image": "https://cdn.salla.sa/form-builder/qQ9W8ekolr2b8PJ1DTrFSOV6XlwMAXnk83Qjj08A.png",
        "fields": 12,
        "path": "home.T_category_showcase"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-quote-close",
        "image": "https://cdn.salla.sa/form-builder/3ZElTRH1MAqp070VzfbW6flvgVsSbaTOMl11gdf2.png",
        "fields": 10,
        "path": "home.T_reviews"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-checklist",
        "image": "https://cdn.salla.sa/form-builder/sVfGWH2CQZNlQUfUUyLZ9G3Ft3LJ9Y4uyMbKZoOk.png",
        "fields": 6,
        "path": "home.T_selected_custom_sections"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-rocket",
        "image": "https://cdn.salla.sa/form-builder/NABo642IRLpF6HrqCiO8CtnN5kBh1z4daJqDMWOh.png",
        "fields": 10,
        "path": "home.T_featuers_text"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://cdn.salla.sa/form-builder/i03DgSgR5brsuPrBhJVFv7iYlflUdmqYRv0Lge48.png",
        "fields": 8,
        "path": "home.T_single_product"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://cdn.salla.sa/form-builder/QO3VmhDd3UR6KuzzJ5yxbnG75PRCI3GeEjmWCpRS.png",
        "fields": 10,
        "path": "home.T_links_vr_count"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-minimize",
        "image": "https://cdn.salla.sa/form-builder/z0UAndJl9L3Jw88gVSjb3XYnKzSvvYuavPeq77LD.png",
        "fields": 7,
        "path": "home.T_ring"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/KzL7P85D/New-Project-20.webp",
        "fields": 15,
        "path": "home.T_step"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "bon",
    "name": "Bon",
    "nameAr": "بن",
    "coupon": "F-CNZVERRI",
    "priceBefore": 260,
    "priceAfter": 208,
    "description": "قالب سلة بنكهة عصرية دافئة يناسب متاجر القهوة والمأكولات المتخصصة والمنتجات الحرفية",
    "image": "",
    "sectionsCount": 27,
    "blocksCount": 354,
    "repo": "https://github.com/apqrinu/bon",
    "buyUrl": "https://s.salla.sa/themes/marketplace/430685046",
    "preview": "https://demostore.salla.sa/dev-4ccmvhfbcxsnva6m/",
    "sections": [
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image1",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/Untitled-design-13.webp",
        "fields": 35,
        "path": "home.B_universal_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/whRb516X/Frame-9.png",
        "fields": 26,
        "path": "home.B_shop_by_category"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-border-all",
        "image": "https://i.ibb.co/chjp020j/Frame-27.png",
        "fields": 6,
        "path": "home.B_MultiPromoCards"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-gameboard",
        "image": "https://cdn.salla.sa/form-builder/wnCb6eqAYMj6HTDdZNBy5ZPrndq14y3vlReCGUef.png",
        "fields": 16,
        "path": "home.B_products_grid"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-flash",
        "image": "https://i.ibb.co/35pf4x9d/Frame-28.png",
        "fields": 8,
        "path": "home.B_PromoCardsSection"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/JwyCtWx4/Frame-7.png",
        "fields": 23,
        "path": "home.B_discounted_Products"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-gift-sharing",
        "image": "https://i.ibb.co/yLhTjZd/Frame-31.png",
        "fields": 15,
        "path": "home.B_our_services"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/9PhJhRH/Frame-6.png",
        "fields": 17,
        "path": "home.B_special_product_with_products"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/ynv0W3fW/Frame-11.png",
        "fields": 57,
        "path": "home.B_category_with_product_highlights"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/q35dG5Ws/Frame-8.png",
        "fields": 5,
        "path": "home.B_images_grid"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/99HL3SLd/Frame-12.png",
        "fields": 17,
        "path": "home.B_featuers"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-star2",
        "image": "https://cdn.salla.sa/form-builder/R0a0niZ3Poi7ty9T69Vitwt6qRBjuqRJtUq86NXe.png",
        "fields": 25,
        "path": "home.B_special_products"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-content",
        "image": "https://i.ibb.co/PzPLxn0f/Frame-8.png",
        "fields": 11,
        "path": "home.B_menu"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://cdn.salla.sa/form-builder/7ZNMTxBKUhklhXYjMOEfjeZQSgz39dEcZK797Ce0.png",
        "fields": 10,
        "path": "home.B_special_categories"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://cdn.salla.sa/form-builder/xDUhP94NBHa3ya260jgHOnNZg7jsn99hgLhZt5Ob.png",
        "fields": 5,
        "path": "home.B_special_product"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-frame-image",
        "image": "https://i.ibb.co/S7H9Fxxs/New-Project.webp",
        "fields": 6,
        "path": "home.B_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/tT9QCqKV/3.png",
        "fields": 12,
        "path": "home.B_testimonials"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/B5JpCdVf/Frame-25.png",
        "fields": 8,
        "path": "home.B_blog_posts"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/j91VTrVM/3535fcc2-c99a-4667-bcce-4a8cfe847cd8.png",
        "fields": 4,
        "path": "home.B_animated_slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-swipe-right",
        "image": "https://i.ibb.co/b5hWJngG/image-Photoroom.webp",
        "fields": 13,
        "path": "home.B_marquee"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-information",
        "image": "https://cdn.salla.sa/form-builder/F3wL1382nlz9dx3038J0HTj8Uecbd4qRhKOuhsMv.png",
        "fields": 9,
        "path": "home.B_faq"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "tamim",
    "name": "Tamim",
    "nameAr": "تَميّم",
    "coupon": "F-RJZHVTTP",
    "priceBefore": 300,
    "priceAfter": 240,
    "description": "قالب سلة فاخر بلمسات تراثية وتفاصيل أنيقة يليق بالعلامات التجارية الراقية",
    "image": "",
    "sectionsCount": 31,
    "blocksCount": 440,
    "repo": "https://github.com/apqrinu/tamim",
    "buyUrl": "https://s.salla.sa/themes/marketplace/132854727",
    "preview": "https://demostore.salla.sa/dev-f85z1t1yitfslwzk/",
    "videos": [
      {
        "src": "assets/videos/tamim/hero-slider-section.mp4",
        "poster": "assets/videos/tamim/posters/hero-slider-section-poster.webp",
        "title": "البانر الرئيسي",
        "description":"واجهة جذابة بتصميم احترافي تعرض أهم عروض ومتجرك بأسلوب يلفت الانتباه ويزيد تفاعل الزوار منذ اللحظة الأولى"
      },
      {
        "src": "assets/videos/tamim/special-slider-cat.mp4",
        "poster": "assets/videos/tamim/posters/special-slider-cat-poster.webp",
        "title": "سلايدر التصنيفات المميزة",
        "description":"اعرض أبرز التصنيفات في سلايدر أنيق وسريع، ليسهّل على العملاء الوصول لما يبحثون عنه بسرعة وسلاسة"
      },
      {
        "src": "assets/videos/tamim/category-page.mp4",
        "poster": "assets/videos/tamim/posters/category-page.webp",
        "title": "صفحة التصنيف",
        "description":"صفحة تصنيف احترافية تعرض المنتجات بشكل منظم مع تجربة تصفح سلسة تساعد العملاء على الوصول لما يريدون بسهولة"
      },
      {
        "src": "assets/videos/tamim/product-page.mp4",
        "poster": "assets/videos/tamim/posters/product-page.webp",
        "title": "صفحة المنتج",
        "description":"صفحة منتج احترافية تعرض جميع التفاصيل بوضوح مع عناصر تعزز الثقة وتشجع العميل على إتمام عملية الشراء"
      },
      {
        "src": "assets/videos/tamim/products.mp4",
        "poster": "assets/videos/tamim/posters/products.webp",
        "title": "سكشن منتجات",
        "description":"سكشن منتجات يجمع المنتجات الخاصة بالقسم وتوفر خيارات الشراء بسهولة وسريعة"
      },
      {
        "src": "assets/videos/tamim/products-with-banner.mp4",
        "poster": "assets/videos/tamim/posters/products-with-banner-poster.webp",
        "title": "منتجات مع بانر",
        "description":"اعرض أفضل منتجاتك في الصفحة الرئيسية بتصميم جذاب يلفت الأنظار ويزيد فرص النقر والشراء"
      }
    ],
    "sections": [
      {
        "nameAr": "البانر الرئيسي - تميم",
        "nameEn": "Section",
        "icon": "sicon-star-o",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/4.webp",
        "fields": 28,
        "path": "home.T_hero_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-swipe-right",
        "image": "https://i.ibb.co/gFShVgpD/Tamim.webp",
        "fields": 13,
        "path": "home.T_marquee"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-cart",
        "image": "https://i.ibb.co/F4vZwWbj/Tamim-3.webp",
        "fields": 16,
        "path": "home.T_shop_by"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-paper-send",
        "image": "https://i.ibb.co/Dfw6DL7M/Tamim-2.webp",
        "fields": 8,
        "path": "home.T_our_services"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/p6Qb4tcV/Tamim-6.webp",
        "fields": 10,
        "path": "home.T_featured_product_cards"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/JwgK69gW/Tamim-7.webp",
        "fields": 12,
        "path": "home.T_feature_highlights"
      },
      {
        "nameAr": "تصنيفات مختارة - تميم",
        "nameEn": "Selected Categories",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/twhtYqfx/fashion.webp",
        "fields": 19,
        "path": "home.T_selected_categories"
      },
      {
        "nameAr": "عروض خاصة  - تميم",
        "nameEn": "Special Offers",
        "icon": "sicon-time",
        "image": "https://i.ibb.co/bgQLFzXx/Untitled-design-8.webp",
        "fields": 20,
        "path": "home.T_special_offers"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/xq4W3yy0/Tamim-9.webp",
        "fields": 24,
        "path": "home.T_image_slider"
      },
      {
        "nameAr": "معرض التصنيفات - تميم",
        "nameEn": "Section",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/KxPXJP1F/Tamim-8.webp",
        "fields": 34,
        "path": "home.T_Category_Grid"
      },
      {
        "nameAr": "صورة جانبية مع منتجات - تميم",
        "nameEn": "side-banner-products",
        "icon": "sicon-photos",
        "image": "https://i.ibb.co/VYVHS7YK/fashion-1.webp",
        "fields": 32,
        "path": "home.T_side_banner_products"
      },
      {
        "nameAr": "استكشف الفئات - تميم",
        "nameEn": "ُExplore Categories",
        "icon": "sicon-layout-grid",
        "image": "https://i.ibb.co/DP4r7h5x/Untitled-design-7.webp",
        "fields": 18,
        "path": "home.T_explore_categories"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-cart",
        "image": "https://i.ibb.co/tTMrpNqJ/Tamim-17.webp",
        "fields": 19,
        "path": "home.T_Shop_by_2"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-award-ribbon",
        "image": "https://i.ibb.co/TD9RbTFT/Tamim-1.webp",
        "fields": 22,
        "path": "home.T_style_explorer"
      },
      {
        "nameAr": "منتج مميز - تميم",
        "nameEn": "Section",
        "icon": "sicon-round-neck-t-shirt",
        "image": "https://i.ibb.co/rfsSjzv8/Tamim-5.webp",
        "fields": 16,
        "path": "home.T_special_product"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/9kwZXFXH/Tamim-12.webp",
        "fields": 16,
        "path": "home.T_ready_products"
      },
      {
        "nameAr": "بطاقات التصنيفات - تميم",
        "nameEn": "Categories Cards",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/7d95qMZk/Untitled-design.webp",
        "fields": 10,
        "path": "home.T_category_cards"
      },
      {
        "nameAr": "منتج مختار - تميم",
        "nameEn": "selected_product",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/p6QcBFF5/Untitled-design-5.webp",
        "fields": 19,
        "path": "home.T_selected_product"
      },
      {
        "nameAr": "أقسام المتجر - تميم",
        "nameEn": "Store Categories",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/5h8BRKPs/Untitled-design-6.webp",
        "fields": 13,
        "path": "home.T_store_categories"
      },
      {
        "nameAr": "بانر ثنائي - تميم",
        "nameEn": "Dual Banner",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/XfRkVrVf/Untitled-design-4.webp",
        "fields": 11,
        "path": "home.T_Dual_Banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/n8MyDW5g/Tamim-13.webp",
        "fields": 14,
        "path": "home.T_comparing"
      },
      {
        "nameAr": "خطوات - تميم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://cdn.files.salla.network/homepage/321773363/951bbc5d-31e9-4a30-b938-51763772d614.webp",
        "fields": 14,
        "path": "home.T_step"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/KcyVYYyj/Tamim-15.webp",
        "fields": 8,
        "path": "home.T_mix_reviews"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/7xdW4VDs/Tamim-16.webp",
        "fields": 9,
        "path": "home.T_blog_posts"
      },
      {
        "nameAr": "الأسئلة الشائعة - تميم",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/20QsTh2B/Tamim.webp",
        "fields": 9,
        "path": "home.T_FAQ"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "glow",
    "name": "Wahaj",
    "nameAr": "وهج",
    "coupon": "F-8YGDRLID",
    "priceBefore": 260,
    "priceAfter": 208,
    "description": "قالب سلة جذاب بألوان مشرقة وحركات متقنة يصنع تجربة تسوق نابضة بالحياة",
    "image": "",
    "sectionsCount": 20,
    "blocksCount": 191,
    "repo": "https://github.com/apqrinu/glow",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1138588187",
    "preview": "https://demostore.salla.sa/dev-pdunpllnile0aeyr/",
    "sections": [
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-journal-pencil",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/06/Untitled-design-37.webp",
        "fields": 18,
        "path": "home.W_main_banner"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-activity",
        "image": "https://cdn.salla.sa/form-builder/UbfvRk0F9h5G4FbzR7ET8kBsXRTDpUEg4UTU1YV4.webp",
        "fields": 24,
        "path": "home.W_Who_are_we"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-packed-box",
        "image": "https://cdn.salla.sa/form-builder/G6CszZGeKpzynnZM3bgqwLtWju4etZ75BU4soICT.webp",
        "fields": 17,
        "path": "home.W_cat"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-location-target",
        "image": "https://cdn.salla.sa/form-builder/xfRjcTUw6LJGUuiAaseuJtONy8GOh4SakGYNhHsn.webp",
        "fields": 15,
        "path": "home.W_brands"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-book-open",
        "image": "https://cdn.salla.sa/form-builder/nOncEw23ZE69kjyrqkSxIj8XQbNC5tBNSozbfE6v.webp",
        "fields": 7,
        "path": "home.W_photos_squer"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-megaphone",
        "image": "https://cdn.salla.sa/form-builder/3uby6BfxZWHuxqDIImc6JXTAFmTFpw5tHEbYIaub.webp",
        "fields": 7,
        "path": "home.W_features_cirlce"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-magic-wand",
        "image": "https://cdn.salla.sa/form-builder/X6hElwRetvLtQBNbnfPmZ3OIkArQZRtu7wq0ml2y.webp",
        "fields": 10,
        "path": "home.W_grid_banners"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-magnet",
        "image": "https://cdn.salla.sa/form-builder/QwmGIhwnp08W5PJTfPhoWqGUCSmKgLSHXmXLEPBj.webp",
        "fields": 12,
        "path": "home.E_special_bannr_pro"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-bold",
        "image": "https://cdn.salla.sa/form-builder/Q2NcbfjnL0sl4qi62R9tcW85g5CvFJST4gFU8mCO.webp",
        "fields": 17,
        "path": "home.W_line_title"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-braille-hand",
        "image": "https://cdn.salla.sa/form-builder/8uLqJGzLJyPs2XpOMALlhKurk2EhSup1DCUWiUH1.webp",
        "fields": 15,
        "path": "home.W_products"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-help",
        "image": "https://cdn.salla.sa/form-builder/Y2ktYvp9LChMzrFf5mckDL2vxYimXvXCRWzZ9LZc.webp",
        "fields": 8,
        "path": "home.W_faq"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-brain",
        "image": "https://cdn.salla.sa/form-builder/0PkATWzqUf5pAiNNAIVNlwJEBSJ2ubaqESl8z5wu.webp",
        "fields": 3,
        "path": "home.W_articlas"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-instagram2",
        "image": "https://cdn.salla.sa/form-builder/c6YI5fTCJkr9UmGnXQwR3wjYhy666MWCoVk6hJaF.webp",
        "fields": 4,
        "path": "home.W_insta"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-special-discount",
        "image": "https://cdn.salla.sa/form-builder/i0rLvRzxh6gUN6LYMIthBeDtktUStwSdkehyzWBl.webp",
        "fields": 9,
        "path": "home.W_marque"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.sa/mQgZlG/K36XDnXG3odwQs7Xzy68IpM2wNuJ7uTImfBInlQ8.png",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.sa/mQgZlG/c3AwZKb12ZRFFfK3vE0vaZYTePnFAUOiZA4dQBg1.png",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.sa/mQgZlG/3hhreht06MIPFWepyuz42rg3bHqGZIYmDVs1PjYc.png",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-image",
        "image": "https://cdn.salla.sa/mQgZlG/VSk26LArCczWj085xH8jxuusMiKzrcE1wsVC6pLm.png",
        "fields": 2,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.sa/mQgZlG/kvFhVeuUyjK4nHUovBQBZ632Hb6gKV2BXZwid40e.png",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "قسم",
        "nameEn": "Section",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.sa/mQgZlG/JMJiEx1KVn7mzxo5FdtsVsAmpWPM8UJW0i0B93c0.png",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "rawea",
    "name": "Rawea",
    "nameAr": "روعة",
    "coupon": "F-D8VDV80M",
    "priceBefore": 260,
    "priceAfter": 208,
    "description": "قالب سلة بروعة بصرية وتفاصيل آسرة يصنع تجربة تسوق مبهرة من أول نظرة",
    "image": "",
    "sectionsCount": 20,
    "blocksCount": 160,
    "repo": "https://github.com/apqrinu/rawea",
    "buyUrl": "https://s.salla.sa/themes/marketplace/369981367",
    "preview": "https://demostore.salla.sa/dev-3pzyrf7dggwk2mlr/",
    "sections": [
      {
        "nameAr": "سلايدر متقدم (روعة)",
        "nameEn": "advanced slider (rawaa)",
        "icon": "sicon-cash-payment",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/1.jpg",
        "fields": 10,
        "path": "home.R_advanced_slider"
      },
      {
        "nameAr": "شريط اعلاني",
        "nameEn": "ِads-bar",
        "icon": "sicon-graph-line",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/12.jpg",
        "fields": 5,
        "path": "home.R_ads_bar"
      },
      {
        "nameAr": "التسوق بالفيديوهات",
        "nameEn": "shop with videos",
        "icon": "sicon-carousel",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/2.jpg",
        "fields": 5,
        "path": "home.R_shop_videos"
      },
      {
        "nameAr": "تصنيفات مميزة (روعة)",
        "nameEn": "special categories (rawea)",
        "icon": "sicon-double-zero-square",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/9.jpg",
        "fields": 9,
        "path": "home.R_special_categories"
      },
      {
        "nameAr": "شريط تصنيفات متقدم (روعة)",
        "nameEn": "advanced cats banner",
        "icon": "sicon-store",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/3.jpg",
        "fields": 4,
        "path": "home.R_advancedcats"
      },
      {
        "nameAr": "قبل و بعد",
        "nameEn": "Before and After",
        "icon": "sicon-arrow-expand",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/4.jpg",
        "fields": 16,
        "path": "home.R_before_after"
      },
      {
        "nameAr": "معرض صور او تصينفات (روعة)",
        "nameEn": "Photo gallery or categories (rawea)",
        "icon": "sicon-add_row_before",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/10.jpg",
        "fields": 11,
        "path": "home.R_gallery_or_cats"
      },
      {
        "nameAr": "أبرز وسائل التواصل الاجتماعي",
        "nameEn": "social media highlights",
        "icon": "sicon-fire",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/8.jpg",
        "fields": 9,
        "path": "home.R_socialmediahighlights"
      },
      {
        "nameAr": "وسائل الدفع (روعة)",
        "nameEn": "payments (rawea)",
        "icon": "sicon-donation",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/6.jpg",
        "fields": 7,
        "path": "home.R_payments"
      },
      {
        "nameAr": "الأسئلة الشائعة (روعة)",
        "nameEn": "faqs (rawaa)",
        "icon": "sicon-help",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/5.jpg",
        "fields": 16,
        "path": "home.R_faqs"
      },
      {
        "nameAr": "آراء عملاء مخصصة (روعة)",
        "nameEn": "customer reviews (rawaa)",
        "icon": "sicon-heart",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/7.jpg",
        "fields": 2,
        "path": "home.R_customereviews"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 2,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية (روعة)",
        "nameEn": "Brands (rawea)",
        "icon": "sicon-award-ribbon",
        "image": "https://apqrinu-co.com/wp-content/uploads/2025/08/Untitled-design-33.jpg",
        "fields": 9,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "بنر متقدم (روعة)",
        "nameEn": "advanced banner",
        "icon": "sicon-feather-pen",
        "image": "",
        "fields": 17,
        "path": "home.R_advancedbanner"
      },
      {
        "nameAr": "عد تنازلي",
        "nameEn": "countdown",
        "icon": "sicon-dashboard-high",
        "image": "https://apqrinu-co.com/wp-content/uploads/2026/03/11.jpg",
        "fields": 16,
        "path": "home.R_timer"
      },
      {
        "nameAr": "خصائص المتجر (مروعة)",
        "nameEn": "store features (rawaa)",
        "icon": "sicon-store",
        "image": "",
        "fields": 2,
        "path": "home.R_storefeatures"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "bahij",
    "name": "Bahij",
    "nameAr": "بهيج",
    "coupon": "F-FEMXPBII",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة بهيج عصري يمزج بين أناقة التصميم وقوة التخصيص، مع أكثر من ٣١ مكوناً تفاعلياً يمنح متجرك حضوراً مبهجاً يستحوذ على الزوار",
    "image": "https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/WCu4j4OnRR1m4a7S4DXkD8UKB8c1aEdcAaaEPVHL.webp",
    "sectionsCount": 31,
    "blocksCount": 450,
    "repo": "https://github.com/apqrinu/bahij",
    "buyUrl": "https://s.salla.sa/themes/marketplace/202083242",
    "preview": "https://demostore.salla.sa/dev-c4jn7y5pnwy42vjk/",
    "docs": "https://bahij.apqrinu-co.com/",
    "sections": [
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Main Banner",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/sdNBX0gY/1-webp.webp",
        "fields": 29,
        "path": "home.T_hero_banner"
      },
      {
        "nameAr": "شريط متحرك",
        "nameEn": "Marquee",
        "icon": "sicon-swipe-right",
        "image": "https://i.ibb.co/VYH6V373/2-webp.webp",
        "fields": 13,
        "path": "home.T_marquee"
      },
      {
        "nameAr": "تسوق حسب",
        "nameEn": "Shop by",
        "icon": "sicon-cart",
        "image": "https://i.ibb.co/1fVZ6dyB/14-webp.webp",
        "fields": 16,
        "path": "home.T_shop_by"
      },
      {
        "nameAr": "خدماتنا",
        "nameEn": "Our Services",
        "icon": "sicon-paper-send",
        "image": "https://i.ibb.co/wrK7rKCp/4-webp.webp",
        "fields": 8,
        "path": "home.T_our_services"
      },
      {
        "nameAr": "بطاقات منتجات مميزة",
        "nameEn": "Featured Product Cards",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/wNnDHxXN/Frame-198-webp.webp",
        "fields": 11,
        "path": "home.T_featured_product_cards"
      },
      {
        "nameAr": "مزايا",
        "nameEn": "Feature Highlights",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/237b5vDd/14-1-webp.webp",
        "fields": 12,
        "path": "home.T_feature_highlights"
      },
      {
        "nameAr": "تصنيفات مختارة",
        "nameEn": "Selected Categories",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/VsKHZVh/Frame-198-1-webp.webp",
        "fields": 19,
        "path": "home.T_selected_categories"
      },
      {
        "nameAr": "عروض خاصة",
        "nameEn": "Special Offers",
        "icon": "sicon-time",
        "image": "https://i.ibb.co/zVNntVRk/Screenshot-2026-06-28-103116-webp.webp",
        "fields": 20,
        "path": "home.T_special_offers"
      },
      {
        "nameAr": "عارض الصور",
        "nameEn": "Image Slider",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/8vN72L8/Frame-163-webp.webp",
        "fields": 25,
        "path": "home.T_image_slider"
      },
      {
        "nameAr": "معرض التصنيفات",
        "nameEn": "Category Grid",
        "icon": "sicon-layout-grid",
        "image": "https://i.ibb.co/R4PGK4j9/14-2-webp.webp",
        "fields": 34,
        "path": "home.T_Category_Grid"
      },
      {
        "nameAr": "صورة جانبية مع منتجات",
        "nameEn": "Side Banner Products",
        "icon": "sicon-photos",
        "image": "https://i.ibb.co/jkLVr5TT/SIDEBANNER-webp.webp",
        "fields": 32,
        "path": "home.T_side_banner_products"
      },
      {
        "nameAr": "استكشف الفئات",
        "nameEn": "Explore Categories",
        "icon": "sicon-layout-grid",
        "image": "https://i.ibb.co/B5GTr4Rf/webp.webp",
        "fields": 18,
        "path": "home.T_explore_categories"
      },
      {
        "nameAr": "طرق التسوق",
        "nameEn": "Shopping Methods",
        "icon": "sicon-cart",
        "image": "https://i.ibb.co/0Rmjvwvy/webp.webp",
        "fields": 19,
        "path": "home.T_Shop_by_2"
      },
      {
        "nameAr": "استكشف الإطلالات",
        "nameEn": "Explore Styles",
        "icon": "sicon-award-ribbon",
        "image": "https://i.ibb.co/B22Vp0KC/Screenshot-2026-06-28-105639-webp.webp",
        "fields": 22,
        "path": "home.T_style_explorer"
      },
      {
        "nameAr": "منتج مميز",
        "nameEn": "Featured Product",
        "icon": "sicon-round-neck-t-shirt",
        "image": "https://i.ibb.co/hxyC3JXr/Screenshot-2026-06-28-160805-webp.webp",
        "fields": 17,
        "path": "home.T_special_product"
      },
      {
        "nameAr": "منتجات جاهزة",
        "nameEn": "Ready Products",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/8gwVGfCn/Screenshot-2026-06-28-160543-webp.webp",
        "fields": 17,
        "path": "home.T_ready_products"
      },
      {
        "nameAr": "بطاقات التصنيفات",
        "nameEn": "Categories Cards",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/7dkdtRGn/Screenshot-2026-06-28-105900-webp.webp",
        "fields": 10,
        "path": "home.T_category_cards"
      },
      {
        "nameAr": "منتج مختار",
        "nameEn": "Selected Product",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/PzJNSFG2/Screenshot-2026-06-28-160418-webp.webp",
        "fields": 19,
        "path": "home.T_selected_product"
      },
      {
        "nameAr": "أقسام المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/2Y8Q3Z7r/Screenshot-2026-06-28-110111-webp.webp",
        "fields": 13,
        "path": "home.T_store_categories"
      },
      {
        "nameAr": "بانر ثنائي",
        "nameEn": "Dual Banner",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/C3GfDKL5/Screenshot-2026-06-28-110653-webp.webp",
        "fields": 11,
        "path": "home.T_Dual_Banner"
      },
      {
        "nameAr": "مقارنة",
        "nameEn": "Comparing",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/CszsW615/Screenshot-2026-06-28-111702-webp.webp",
        "fields": 15,
        "path": "home.T_comparing"
      },
      {
        "nameAr": "خطوات",
        "nameEn": "Steps",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/1fvKhbpZ/Screenshot-2026-06-28-111840-webp.webp",
        "fields": 15,
        "path": "home.T_step"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Reviews",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/DDXRm31r/Screenshot-2026-06-28-111940-webp.webp",
        "fields": 9,
        "path": "home.T_mix_reviews"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Articles",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/x8DzL4zL/Screenshot-2026-06-28-112040-webp.webp",
        "fields": 10,
        "path": "home.T_blog_posts"
      },
      {
        "nameAr": "الأسئلة الشائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/9mY2D2SZ/Screenshot-2026-06-28-112137-webp.webp",
        "fields": 10,
        "path": "home.T_FAQ"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "silina",
    "name": "Silina",
    "nameAr": "سيلينا",
    "coupon": "",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة متكامل بتصميم مرن يجمع بين الأداء العالي وسهولة التخصيص لتجربة تسوق راقية",
    "image": "assets/images/covers/silina-cover.png",
    "sectionsCount": 37,
    "blocksCount": 452,
    "repo": "https://github.com/apqrinu/silina",
    "buyUrl": "",
    "preview": "",
    "docs": "https://silina.apqrinu-co.com/",
    "sections": [
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 4,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 10,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 7,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 4,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 4,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 3,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "سلايدر متقدم - سيلينا",
        "nameEn": "Advanced Slider - Silina",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/1fJR4rS0/chrome-capture-2026-07-09-webp.webp",
        "fields": 17,
        "path": "home.advanced-slider"
      },
      {
        "nameAr": "سلايدر منتجات مميزة - سيلينا",
        "nameEn": "Special Products Slider - Silina",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/C3yw7tK8/874dfa26-8eec-46cd-b426-98df0b40afb8-webp.webp",
        "fields": 25,
        "path": "home.special-products-slider"
      },
      {
        "nameAr": "عداد العروض - سيلينا",
        "nameEn": "Offer Countdown - Silina",
        "icon": "sicon-clock",
        "image": "https://i.ibb.co/fzrtszhR/4580d9c5-7057-4726-af9c-bfce39dd9d17-webp.webp",
        "fields": 23,
        "path": "home.offer-countdown"
      },
      {
        "nameAr": "الأسئلة الشائعة - سيلينا",
        "nameEn": "FAQ - Silina",
        "icon": "sicon-question-circle",
        "image": "https://i.ibb.co/QjC2fbKJ/download-2026-07-09-T151110-825-webp.webp",
        "fields": 7,
        "path": "home.faq"
      },
      {
        "nameAr": "مميزات المتجر المحسنة - سيلينا",
        "nameEn": "Enhanced Features - Silina",
        "icon": "sicon-bolt",
        "image": "https://i.ibb.co/fzMhfb06/bcd29181-8572-4682-a701-2ee09b6f68d1-webp.webp",
        "fields": 6,
        "path": "home.enhanced-features"
      },
      {
        "nameAr": "معرض المنتجات الديناميكي - سيلينا",
        "nameEn": "Products Lookbook - Silina",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/MkY6VGzQ/8577c337-ffd6-46f3-b506-9aa40fd32231-webp.webp",
        "fields": 10,
        "path": "home.products-lookbook"
      },
      {
        "nameAr": "تصنيفات مميزة مع خلفية - سيلينا",
        "nameEn": "Special Categories With Background - Silina",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/Rkv29nZT/download-2026-07-09-T150255-773-webp.webp",
        "fields": 9,
        "path": "home.special-categories-with-bg"
      },
      {
        "nameAr": "إحصائيات - سيلينا",
        "nameEn": "Statistics - Silina",
        "icon": "sicon-chart-bar",
        "image": "https://i.ibb.co/ycKSvmXf/download-2026-07-09-T151059-625-webp.webp",
        "fields": 5,
        "path": "home.statistics"
      },
      {
        "nameAr": "منتج مميز - سيلينا",
        "nameEn": "Special Product - Silina",
        "icon": "sicon-bookmark-star",
        "image": "https://i.ibb.co/WpVtML4W/download-2026-07-09-T151026-316-webp.webp",
        "fields": 10,
        "path": "home.special_product"
      },
      {
        "nameAr": "آراء عملاء مخصصة - سيلينا",
        "nameEn": "Enhanced Testimonials - Silina",
        "icon": "sicon-quote",
        "image": "https://i.ibb.co/Mk7Kt2Qw/download-2026-07-09-T151206-833-webp.webp",
        "fields": 9,
        "path": "home.enhanced-testimonials"
      },
      {
        "nameAr": "موقعك على خرائط قوقل - سيلينا",
        "nameEn": "Google Map - Silina",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/1YJTksZY/download-2026-07-09-T163706-688-webp.webp",
        "fields": 8,
        "path": "home.map"
      },
      {
        "nameAr": "فروع المتجر - سيلينا",
        "nameEn": "Store Branches - Silina",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/TMbmThFH/download-2026-07-09-T151312-019-webp.webp",
        "fields": 12,
        "path": "home.store_branches"
      },
      {
        "nameAr": "ماركات تجارية متحركة - سيلينا",
        "nameEn": "Animated Brands - Silina",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/VcSPJHj4/chrome-capture-2026-07-09-webp.webp",
        "fields": 10,
        "path": "home.animated-brands"
      },
      {
        "nameAr": "محتوى متقدم - سيلينا",
        "nameEn": "Advanced Content - Silina",
        "icon": "sicon-browser-code-alt",
        "image": "https://i.ibb.co/hxZvNW5F/download-2026-07-09-T171634-323-webp.webp",
        "fields": 27,
        "path": "home.advanced-content"
      },
      {
        "nameAr": "عرض خاص مع عد تنازلي - سيلينا",
        "nameEn": "Promo With Countdown - Silina",
        "icon": "sicon-clock",
        "image": "https://i.ibb.co/whfDgX8f/download-2026-07-09-T144729-641-webp.webp",
        "fields": 13,
        "path": "home.promo_with_countdown"
      },
      {
        "nameAr": "نموذج التواصل - سيلينا",
        "nameEn": "Contact Form - Silina",
        "icon": "sicon-mail",
        "image": "https://i.ibb.co/5Dt3xLf/download-2026-07-09-T151250-093-webp.webp",
        "fields": 14,
        "path": "home.contact-form"
      },
      {
        "nameAr": "المدونة - سيلينا",
        "nameEn": "Blog - Silina",
        "icon": "sicon-blog",
        "image": "https://i.ibb.co/Hf0ymTCV/Chat-GPT-Image-Jul-5-2026-09-39-13-AM-removebg-preview-webp.webp",
        "fields": 5,
        "path": "home.blog"
      },
      {
        "nameAr": "شريط اعلاني متحرك - سيلينا",
        "nameEn": "Animated Text Bar - Silina",
        "icon": "sicon-bullhorn",
        "image": "https://i.ibb.co/mrtCcpLK/7c4befed-3e0f-4b4a-a79f-6d3c05d6682a-webp.webp",
        "fields": 8,
        "path": "home.animated-text"
      },
      {
        "nameAr": "فيديوهات المنتجات - سيلينا",
        "nameEn": "Products Videos - Silina",
        "icon": "sicon-video",
        "image": "https://i.ibb.co/SwR9xk3R/c1a9f473-c027-464f-8fe3-4f83786dc700-webp.webp",
        "fields": 14,
        "path": "home.products-videos"
      },
      {
        "nameAr": "منتجات مخصصة - سيلينا",
        "nameEn": "Custom Products - Silina",
        "icon": "sicon-t-shirt",
        "image": "https://i.ibb.co/Hf0ymTCV/Chat-GPT-Image-Jul-5-2026-09-39-13-AM-removebg-preview-webp.webp",
        "fields": 16,
        "path": "home.custom-products"
      },
      {
        "nameAr": "تبويبات المنتجات - سيلينا",
        "nameEn": "Product Tabs - Silina",
        "icon": "sicon-tab",
        "image": "https://i.ibb.co/Hf0ymTCV/Chat-GPT-Image-Jul-5-2026-09-39-13-AM-removebg-preview-webp.webp",
        "fields": 9,
        "path": "home.product-tabs"
      },
      {
        "nameAr": "عن المتجر - سيلينا",
        "nameEn": "About Store - Silina",
        "icon": "sicon-info",
        "image": "https://i.ibb.co/Pv0fptcs/chrome-capture-2026-07-09-1-webp.webp",
        "fields": 14,
        "path": "home.about"
      },
      {
        "nameAr": "روابط مربعة - سيلينا",
        "nameEn": "Square Links - Silina",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/ccMqj5Bb/fc17df5b-34b8-4926-b420-0d2c10182bbd-webp.webp",
        "fields": 17,
        "path": "home.square-links"
      },
      {
        "nameAr": "شبكة صور - سيلينا",
        "nameEn": "Images Grid - Silina",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/GQL1Y4TL/chrome-capture-2026-07-09-2-webp.webp",
        "fields": 32,
        "path": "home.images-grid"
      },
      {
        "nameAr": "معرض الفيديو - سيلينا",
        "nameEn": "Videos Gallery - Silina",
        "icon": "sicon-video",
        "image": "https://i.ibb.co/Hf0ymTCV/Chat-GPT-Image-Jul-5-2026-09-39-13-AM-removebg-preview-webp.webp",
        "fields": 17,
        "path": "home.videos-gallery"
      },
      {
        "nameAr": "روابط دائرية - سيلينا",
        "nameEn": "Circle Links - Silina",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/MykgzXQF/download-2026-07-09-T144710-118-webp.webp",
        "fields": 13,
        "path": "home.circle-links"
      },
      {
        "nameAr": "بانر مزدوج - سيلينا",
        "nameEn": "Double Banner - Silina",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/tT01fpHN/download-2026-07-09-T150624-689-webp.webp",
        "fields": 16,
        "path": "home.double-banner"
      },
      {
        "nameAr": "بانرات متحركة - سيلينا",
        "nameEn": "Banners Slider - Silina",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/tM5fK7gd/1d8ffae8-e848-4ee7-9774-3d111321b940-webp.webp",
        "fields": 13,
        "path": "home.banners-slider"
      },
      {
        "nameAr": "بانر ثلاثي - سيلينا",
        "nameEn": "Three Banners - Silina",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/Hf0ymTCV/Chat-GPT-Image-Jul-5-2026-09-39-13-AM-removebg-preview-webp.webp",
        "fields": 15,
        "path": "home.three-banners"
      },
      {
        "nameAr": "فاصل - سيلينا",
        "nameEn": "Splitter - Silina",
        "icon": "sicon-minus",
        "image": "https://i.ibb.co/Hf0ymTCV/Chat-GPT-Image-Jul-5-2026-09-39-13-AM-removebg-preview-webp.webp",
        "fields": 9,
        "path": "home.splitter"
      },
      {
        "nameAr": "قبل وبعد - سيلينا",
        "nameEn": "Compare - Before & After - Silina",
        "icon": "sicon-columns-alt",
        "image": "https://i.ibb.co/Z1K8h9kX/download-2026-07-09-T144757-627-webp.webp",
        "fields": 17,
        "path": "home.compare"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "rose",
    "name": "Rose",
    "nameAr": "روز",
    "coupon": "",
    "description": "قالب سلة أنيق بلمسة وردية ناعمة يمنح متجرك حضوراً بصرياً دافئاً ويبرز منتجاتك بأسلوب راقٍ وعصري",
    "image": "assets/images/covers/rose-cover.webp",
    "sectionsCount": 21,
    "blocksCount": 354,
    "repo": "https://github.com/apqrinu/rose",
    "buyUrl": "https://s.salla.sa/themes/marketplace/63647655",
    "preview": "https://demostore.salla.sa/ar/dev-ho2wv64zsdt35o2u",
    "sections": [
      {
        "nameAr": "واجهة ترويجية",
        "nameEn": "Promo Showcase",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/QvZmF4b9/Frame-99-webp.webp",
        "fields": 36,
        "path": "home.R_promo-showcase"
      },
      {
        "nameAr": "تصنيفات المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/GvCHJk68/Frame-1984077976-webp.webp",
        "fields": 16,
        "path": "home.R_categories"
      },
      {
        "nameAr": "عنوان مميز",
        "nameEn": "Feature Heading",
        "icon": "sicon-format-text-alt",
        "image": "https://i.ibb.co/gMzYSPKK/image-webp.webp",
        "fields": 31,
        "path": "home.R_section-heading"
      },
      {
        "nameAr": "قوس ترويجي + شريط منتجات",
        "nameEn": "Arch Promo + Product Slider",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/tMZ167ns/Component-39-1-webp.webp",
        "fields": 31,
        "path": "home.R_arch-promo-slider"
      },
      {
        "nameAr": "بطاقات المجموعات",
        "nameEn": "Collection Cards",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/tpbng8fC/Frame-103-webp.webp",
        "fields": 12,
        "path": "home.R-collection-cards"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "https://i.ibb.co/My31zbjf/Frame-1984078000-1-webp.webp",
        "fields": 12,
        "path": "home.R_product_set"
      },
      {
        "nameAr": "عروض بعدّاد تنازلي",
        "nameEn": "Offers Countdown",
        "icon": "sicon-clock",
        "image": "https://i.ibb.co/M5VKrgWL/Frame-82-1-webp.webp",
        "fields": 33,
        "path": "home.R_offers-countdown"
      },
      {
        "nameAr": "شريط متحرك (ماركيه)",
        "nameEn": "Marquee",
        "icon": "sicon-arrow-left-right",
        "image": "https://i.ibb.co/23XmwV1h/image-webp.webp",
        "fields": 26,
        "path": "home.R_marquee"
      },
      {
        "nameAr": "بانر خاص",
        "nameEn": "Special Banner",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/1c2Qxwr/Frame-1984077990-webp.webp",
        "fields": 11,
        "path": "home.R-parallax-slider"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/Y4fdwL3h/Container-webp.webp",
        "fields": 20,
        "path": "home.R_FAQ"
      },
      {
        "nameAr": "بانر عروض رئيسي",
        "nameEn": "Offers Hero Banner",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/ymX10rPJ/Frame-94-1-webp.webp",
        "fields": 25,
        "path": "home.R_offers-hero"
      },
      {
        "nameAr": "شاهد الانستجرام",
        "nameEn": "On Instagram",
        "icon": "sicon-camera",
        "image": "https://i.ibb.co/LXtpFKBz/Frame-84-1-webp.webp",
        "fields": 23,
        "path": "home.R_on_instagram"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Testimonials",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/bj1hS3zb/Frame-64-webp.webp",
        "fields": 18,
        "path": "home.R_testimonials"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "Branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/wN8jm28h/Frame-96-1-webp.webp",
        "fields": 19,
        "path": "home.R_branches"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Blog Posts",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/LhDQ9GvV/Frame-64-jpg.jpg",
        "fields": 15,
        "path": "home.R_blog_posts"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "clothes",
    "name": "Clothes",
    "nameAr": "أزياء",
    "coupon": "",
    "description": "قالب سلة أنيق مصمم خصيصاً لمتاجر الأزياء والملابس، يبرز المنتجات بأسلوب راقٍ ويعزز تجربة التسوق البصرية",
    "image": "",
    "sectionsCount": 20,
    "blocksCount": 245,
    "repo": "https://github.com/apqrinu/clothes",
    "buyUrl": "",
    "preview": "",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "سلايدر مميز",
        "nameEn": "Special Slider",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/RTtZ8mHq/download-2026-07-29-T150415-198-webp.webp",
        "fields": 11,
        "path": "home.C_special_slider"
      },
      {
        "nameAr": "أقسام المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/Sw6zYh4S/Frame-1984078019-webp.webp",
        "fields": 18,
        "path": "home.C_store_categories"
      },
      {
        "nameAr": "بنرات عريضة",
        "nameEn": "Wide Banners",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/7dBxHkzC/Component-2-webp.webp",
        "fields": 21,
        "path": "home.C_wide_banner"
      },
      {
        "nameAr": "ليش تختارنا",
        "nameEn": "Why Choose Us",
        "icon": "sicon-fit",
        "image": "https://i.ibb.co/s9tzXkfQ/Frame-1984078007-webp.webp",
        "fields": 11,
        "path": "home.C_why_us"
      },
      {
        "nameAr": "اكتشف منتجاتنا",
        "nameEn": "Explore Products",
        "icon": "sicon-add-to-cart",
        "image": "https://i.ibb.co/pr6gjr3v/Frame-35734-png.png",
        "fields": 15,
        "path": "home.C_explore_products"
      },
      {
        "nameAr": "تسوق حسب الفئة",
        "nameEn": "Shop by Category",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/V0n9gMCL/Frame-35764-webp.webp",
        "fields": 10,
        "path": "home.C_shop_by_category"
      },
      {
        "nameAr": "مجموعة المنتجات",
        "nameEn": "Product Collection",
        "icon": "sicon-braille",
        "image": "https://i.ibb.co/3yLZvDW7/Message-Container-webp.webp",
        "fields": 17,
        "path": "home.C_product_set"
      },
      {
        "nameAr": "منتجات مميزة",
        "nameEn": "Special Products",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/nqsqdc7R/Frame-1984077990-2-webp.webp",
        "fields": 27,
        "path": "home.C_special_products"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/23s4YDbP/Frame-1984077963-png.png",
        "fields": 15,
        "path": "home.C_FAQ"
      },
      {
        "nameAr": "مميزات المتجر",
        "nameEn": "Store Features",
        "icon": "sicon-gold-badge",
        "image": "https://i.ibb.co/Xf2vKCtx/Frame-1984077950-png.png",
        "fields": 11,
        "path": "home.C_store_features"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Testimonials",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/GQmtMxsM/Frame-1984077979-png.png",
        "fields": 16,
        "path": "home.C_testimonials"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Articles",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/GQXt3hXr/Screenshot-2026-07-29-152045-webp.webp",
        "fields": 12,
        "path": "home.C_blog_posts"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "Branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/1YHTm443/location-webp.webp",
        "fields": 14,
        "path": "home.C_branches"
      },
      {
        "nameAr": "إحصائيات المتجر",
        "nameEn": "Store Stats",
        "icon": "sicon-shopping-basket",
        "image": "https://i.ibb.co/yjkvtHj/image-28-1.png",
        "fields": 15,
        "path": "home.C_stats"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 4,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 10,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 7,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 4,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 4,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 3,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "prime",
    "name": "Prime",
    "nameAr": "برايم",
    "coupon": "F-XIL9OM7D",
    "priceBefore": 250,
    "priceAfter": 200,
    "description": "قالب سلة عصري متكامل بلمسة احترافية، يمنح متجرك حضوراً مميزاً وأقسام مرنة لعرض المنتجات بأسلوب جذاب",
    "image": "assets/images/covers/prime-theme.webp",
    "sectionsCount": 23,
    "blocksCount": 343,
    "repo": "https://github.com/apqrinu/prime",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1693337710",
    "preview": "https://demostore.salla.sa/dev-ocxxt1evruxtlpk3",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "القسم المميز",
        "nameEn": "Hero Special Section",
        "icon": "sicon-image1",
        "image": "https://i.ibb.co/KzxGnyXc/Shared-Screenshot-webp.webp",
        "fields": 26,
        "path": "home.P_special_hero"
      },
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Hero Section",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/fzkSb15G/Screenshot-2026-08-03-105416-webp.webp",
        "fields": 21,
        "path": "home.P_main_hero_section"
      },
      {
        "nameAr": "تسوق حسب",
        "nameEn": "Shop By",
        "icon": "sicon-cart",
        "image": "https://i.ibb.co/fG9Yt9M9/Screenshot-2026-08-03-112856-webp.webp",
        "fields": 17,
        "path": "home.P_shop_by"
      },
      {
        "nameAr": "بانر منتج مميز",
        "nameEn": "Flash Banner Product",
        "icon": "sicon-fire",
        "image": "https://i.ibb.co/xq4VtSC5/po-webp.webp",
        "fields": 26,
        "path": "home.P_flash_banner_product"
      },
      {
        "nameAr": "بانر مع التصنيفات",
        "nameEn": "Banner With Categories",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/fdyBnxnf/banner-cat-webp.webp",
        "fields": 28,
        "path": "home.P_banner_categories"
      },
      {
        "nameAr": "بانر ثنائي",
        "nameEn": "Dual Banner",
        "icon": "sicon-layout-column",
        "image": "https://i.ibb.co/qLz028Jb/dualbanner-webp.webp",
        "fields": 11,
        "path": "home.P_dual_banner"
      },
      {
        "nameAr": "أقسام المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/0VK7Wm9j/store-cat-webp.webp",
        "fields": 18,
        "path": "home.P_store_categories"
      },
      {
        "nameAr": "تبويبات المنتجات",
        "nameEn": "Product Tabs",
        "icon": "sicon-tab",
        "image": "https://i.ibb.co/SwCLBYgq/product-tabs-webp.webp",
        "fields": 12,
        "path": "home.P_product_tabs"
      },
      {
        "nameAr": "منتج مختار",
        "nameEn": "Selected Product",
        "icon": "sicon-clothes-hanger",
        "image": "https://i.ibb.co/My409cWL/Screenshot-2026-08-04-121759-webp.webp",
        "fields": 18,
        "path": "home.P_selected_product"
      },
      {
        "nameAr": "شريط متحرك",
        "nameEn": "Marquee",
        "icon": "sicon-arrow-left-right",
        "image": "https://i.ibb.co/jPyts2VF/Screenshot-2026-08-04-151512-webp.webp",
        "fields": 28,
        "path": "home.P_marquee"
      },
      {
        "nameAr": "أبرز المجموعات",
        "nameEn": "Featured Collections",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/6QYp9XT/pasted-1785853421680-webp.webp",
        "fields": 11,
        "path": "home.P_featured_collections"
      },
      {
        "nameAr": "مقارنة قبل وبعد",
        "nameEn": "Before / After Comparison",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/N6vsq90d/comparing1-webp.webp",
        "fields": 16,
        "path": "home.P_comparing"
      },
      {
        "nameAr": "استكشف التصنيفات",
        "nameEn": "Explore Categories",
        "icon": "sicon-delete_table",
        "image": "https://i.ibb.co/j9Dty3cp/categories-webp.webp",
        "fields": 14,
        "path": "home.P_explore_categories"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/Mk88j73j/FAQ-webp.webp",
        "fields": 15,
        "path": "home.P_FAQ"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Article",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/JW2ssS8R/articles-webp.webp",
        "fields": 12,
        "path": "home.P_blog_posts"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Stories",
        "icon": "sicon-chat-processing",
        "image": "https://i.ibb.co/GfWwt97k/customerreviews-webp.webp",
        "fields": 24,
        "path": "home.P_customer_stories"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "Branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/WvYXpK78/bbb-webp.webp",
        "fields": 20,
        "path": "home.P_branches"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "xerox",
    "name": "Xerox",
    "nameAr": "زيروكس",
    "coupon": "",
    "description": "قالب سلة عصري متعدد الأقسام مع تبويبات منتجات وعروض ديناميكية لتجربة تسوق متكاملة تُبرز هوية متجرك بأناقة",
    "image": "assets/images/covers/xerox-cover.jpg",
    "sectionsCount": 21,
    "blocksCount": 338,
    "repo": "https://github.com/apqrinu/xerox",
    "buyUrl": "https://s.salla.sa/themes/marketplace/1167647193",
    "preview": "https://demostore.salla.sa/ar/dev-jtgzzjb4ouo3qlgo",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "العروض والتصنيفات",
        "nameEn": "Promotions & Categories",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/pvmS949Q/image-webp.webp",
        "fields": 15,
        "path": "home.X-promotions-categories"
      },
      {
        "nameAr": "الماركات والتصنيفات",
        "nameEn": "Brands & Categories",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/PqGHwy7/Gemini-Generated-Image-6wtwwq6wtwwq6wtw-webp.webp",
        "fields": 21,
        "path": "home.X-brands-categories"
      },
      {
        "nameAr": "الماركات والتصنيفات المخصص",
        "nameEn": "Custom Brands & Categories",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/PqGHwy7/Gemini-Generated-Image-6wtwwq6wtwwq6wtw-webp.webp",
        "fields": 19,
        "path": "home.X-brands-categories-custom"
      },
      {
        "nameAr": "بطاقات التصنيفات",
        "nameEn": "Category Cards",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/d4SG3s62/Gemini-Generated-Image-b013lb013lb013lb-webp.webp",
        "fields": 12,
        "path": "home.X-category-cards"
      },
      {
        "nameAr": "تصنيف مع منتجاته",
        "nameEn": "Category with Products",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/mrY3rdXV/Gemini-Generated-Image-o16sc8o16sc8o16s-webp.webp",
        "fields": 36,
        "path": "home.X-category-with-products"
      },
      {
        "nameAr": "شريط العروض",
        "nameEn": "Promotion Bar",
        "icon": "sicon-star",
        "image": "https://i.ibb.co/xKz3NbT7/image-webp.webp",
        "fields": 26,
        "path": "home.X-promotion-bar"
      },
      {
        "nameAr": "استكشف العروض",
        "nameEn": "Explore Promotions",
        "icon": "sicon-star",
        "image": "https://i.ibb.co/rffy8jdK/Gemini-Generated-Image-thhugithhugithhu-webp.webp",
        "fields": 20,
        "path": "home.X-explore-promotions"
      },
      {
        "nameAr": "شريط متحرك (ماركيه)",
        "nameEn": "Marquee",
        "icon": "sicon-arrow-left-right",
        "image": "https://i.ibb.co/qYrcpcwB/image-webp.webp",
        "fields": 26,
        "path": "home.X_marquee"
      },
      {
        "nameAr": "منتج مميز",
        "nameEn": "Special Product",
        "icon": "sicon-gift-sharing",
        "image": "https://i.ibb.co/gZTWpV4d/image-webp.webp",
        "fields": 38,
        "path": "home.X_special_product"
      },
      {
        "nameAr": "تبويبات المنتجات",
        "nameEn": "Product Tabs",
        "icon": "sicon-tab",
        "image": "https://i.ibb.co/kV3FzHQv/Gemini-Generated-Image-q46zxyq46zxyq46z-webp.webp",
        "fields": 11,
        "path": "home.X-product-tabs"
      },
      {
        "nameAr": "قبل وبعد",
        "nameEn": "Before & After",
        "icon": "sicon-swap-fill",
        "image": "https://i.ibb.co/YFRjrRyh/image-webp.webp",
        "fields": 24,
        "path": "home.X-before-after"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Testimonials",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/pjmTb9TM/image-webp.webp",
        "fields": 20,
        "path": "home.X_testimonials"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "Branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/Pvn1vxNf/image-webp.webp",
        "fields": 18,
        "path": "home.X_branches"
      },
      {
        "nameAr": "الخدمات",
        "nameEn": "Services",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/pjtCcKLX/image-webp.webp",
        "fields": 11,
        "path": "home.X-services"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Article",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/jvBh4MqH/image-webp.webp",
        "fields": 15,
        "path": "home.X_blog_posts"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "sennheiser",
    "name": "Sennheiser",
    "nameAr": "سينهايزر",
    "coupon": "",
    "description": "قالب سلة متكامل بأقسام تفاعلية غنية كالبطل المتقدم والإحصائيات والمقارنة، بتصميم عصري راقٍ يُبرز هوية علامتك التجارية",
    "image": "assets/images/covers/senhier-cover.webp",
    "sectionsCount": 20,
    "blocksCount": 372,
    "repo": "https://github.com/apqrinu/sennheiser",
    "buyUrl": "https://s.salla.sa/themes/marketplace/928436091",
    "preview": "https://demostore.salla.sa/dev-onc8ghsjboxtdh9d",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 4,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 10,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 7,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 4,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 4,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 3,
        "path": "home.custom-testimonials"
      },
      {
        "nameAr": "أقسام المتجر",
        "nameEn": "Store Categories",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/3mJwTYzY/download-2026-08-05-T113706-780-webp.webp",
        "fields": 23,
        "path": "home.S_store_categories"
      },
      {
        "nameAr": "شبكة بنارات",
        "nameEn": "Banners Grid",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/CpBBC0k9/download-2026-08-05-T113256-269-webp.webp",
        "fields": 14,
        "path": "home.S_banners_grid"
      },
      {
        "nameAr": "منتجات مختارة",
        "nameEn": "Selected Products",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/4nYxZtxR/download-2026-08-05-T173853-053-webp.webp",
        "fields": 27,
        "path": "home.S_selected_products"
      },
      {
        "nameAr": "شريط متحرك (ماركيه)",
        "nameEn": "Marquee",
        "icon": "sicon-arrow-left-right",
        "image": "https://i.ibb.co/VWHpzZK5/2c495cad-8709-42ac-a7b3-4b03d0a1109a-gif.gif",
        "fields": 27,
        "path": "home.R_marquee"
      },
      {
        "nameAr": "بانر عرض مع تصنيفات",
        "nameEn": "Promo Banner With Tags",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/ztPptjP/download-2026-08-05-T113008-486-webp.webp",
        "fields": 21,
        "path": "home.S_promo_banner_tags"
      },
      {
        "nameAr": "تبويبات المنتجات مع بانر",
        "nameEn": "Products Tabs with Banner",
        "icon": "sicon-t-shirt",
        "image": "https://i.ibb.co/rGrG6XXh/44569772-4f9d-4e9b-b204-d2433e3bc74b-gif.gif",
        "fields": 30,
        "path": "home.S_products_with_banner"
      },
      {
        "nameAr": "بطاقات الماركات",
        "nameEn": "Brand Promo Cards",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/39f41yPC/download-2026-08-05-T113314-394-webp.webp",
        "fields": 20,
        "path": "home.S_brand_cards"
      },
      {
        "nameAr": "منتج مميز + تبويبات منتجات",
        "nameEn": "Spotlight Product & Tabs",
        "icon": "sicon-star",
        "image": "https://i.ibb.co/jvnJvRpJ/39ad3fa9-00ed-4021-ba81-4f6f35bcbb87-gif.gif",
        "fields": 43,
        "path": "home.S_spotlight_products"
      },
      {
        "nameAr": "آخر المقالات",
        "nameEn": "Latest Articles",
        "icon": "sicon-blog",
        "image": "https://i.ibb.co/rJ3GsHJ/download-2026-08-05-T173925-163-webp.webp",
        "fields": 16,
        "path": "home.S_latest_articles"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Reviews",
        "icon": "sicon-star",
        "image": "https://i.ibb.co/W4F90yZq/download-2026-08-05-T112718-155-webp.webp",
        "fields": 17,
        "path": "home.S_customer_reviews"
      },
      {
        "nameAr": "مقارنة",
        "nameEn": "Comparing",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/PvsndYmM/download-2026-08-05-T173458-531-webp.webp",
        "fields": 15,
        "path": "home.S_comparing"
      },
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Hero Section",
        "icon": "sicon-window-layout",
        "image": "https://i.ibb.co/LDB514YK/1bf0cf3d-4ee7-4eeb-b12d-e3d323cc9cd3-1-gif.gif",
        "fields": 42,
        "path": "home.S_complex_hero"
      },
      {
        "nameAr": "إحصائيات وكروت",
        "nameEn": "Complex Stats",
        "icon": "sicon-bar-chart",
        "image": "https://i.ibb.co/rKzXq5X4/download-2026-08-09-T102602-196-webp.webp",
        "fields": 24,
        "path": "home.S_complex_stats"
      },
      {
        "nameAr": "الفروع والخريطة",
        "nameEn": "Branches & Map",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/sdnfbvwW/cda3df49-8540-43bd-9a82-ba9bbbb7fcce-gif.gif",
        "fields": 21,
        "path": "home.S_branches_map"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "plus",
    "name": "Plus",
    "nameAr": "بلس",
    "coupon": "",
    "description": "قالب سلة مرن بمكوّنات ذكية وأقسام تفاعلية غنية كالبطل الرئيسي وتبويبات المنتجات وقبل/بعد، يمنح متجرك تجربة تسوق حديثة وسلسة",
    "image": "assets/images/covers/max-cover.jpg",
    "sectionsCount": 20,
    "blocksCount": 288,
    "repo": "https://github.com/apqrinu/plus",
    "buyUrl": "",
    "preview": "",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Main Hero",
        "icon": "sicon-image",
        "image": "https://i.ibb.co/7N86DPbG/image-webp.webp",
        "fields": 10,
        "path": "home.P_hero_main"
      },
      {
        "nameAr": "أقسام الرئيسية",
        "nameEn": "Main Categories",
        "icon": "sicon-coffee-togo",
        "image": "https://i.ibb.co/v4WhGv21/2.png",
        "fields": 23,
        "path": "home.P_main_categories"
      },
      {
        "nameAr": "مميزات حول صورة",
        "nameEn": "Features Showcase",
        "icon": "sicon-layout-grid",
        "image": "https://i.ibb.co/gLzsB5zy/image-webp.webp",
        "fields": 33,
        "path": "home.P_features_showcase"
      },
      {
        "nameAr": "تبويبات المنتجات",
        "nameEn": "Product Tabs",
        "icon": "sicon-menu",
        "image": "https://i.ibb.co/7xVQGsKv/P-product-tabs.webp",
        "fields": 9,
        "path": "home.P_product_tabs"
      },
      {
        "nameAr": "تصنيفات مميزة",
        "nameEn": "Featured Categories",
        "icon": "sicon-award-ribbon",
        "image": "https://i.ibb.co/XZmDfTJk/image-webp.webp",
        "fields": 15,
        "path": "home.P_featured_categories"
      },
      {
        "nameAr": "قبل وبعد",
        "nameEn": "Before & After",
        "icon": "sicon-swap-stroke",
        "image": "https://i.ibb.co/9kKkdfkC/image-png.png",
        "fields": 13,
        "path": "home.P_before_after"
      },
      {
        "nameAr": "عروض ومنتجات",
        "nameEn": "Offers & Products",
        "icon": "sicon-fire",
        "image": "https://i.ibb.co/6RjvvcQF/Frame-3-webp.webp",
        "fields": 33,
        "path": "home.P_offers_products"
      },
      {
        "nameAr": "بنر العرض التسويقي",
        "nameEn": "Promo Banner",
        "icon": "sicon-megaphone",
        "image": "https://i.ibb.co/vvKLfXgn/image-webp.webp",
        "fields": 30,
        "path": "home.P_promo_banner"
      },
      {
        "nameAr": "نصوص متحركة",
        "nameEn": "Text Slider",
        "icon": "sicon-caret-right-double",
        "image": "https://i.ibb.co/GQDgtzRj/5.png",
        "fields": 9,
        "path": "home.P_text_swiper"
      },
      {
        "nameAr": "أحدث المجموعات",
        "nameEn": "Latest Collections",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/RTjwKJKX/image-webp.webp",
        "fields": 14,
        "path": "home.P_latest_collections"
      },
      {
        "nameAr": "ليش تختارنا",
        "nameEn": "Why Choose Us",
        "icon": "sicon-award-ribbon",
        "image": "https://i.ibb.co/QFzsZtR4/image-webp.webp",
        "fields": 18,
        "path": "home.P_why_choose"
      },
      {
        "nameAr": "سلايدر التقييمات",
        "nameEn": "Testimonials Slider",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/mF9gWSMC/image-webp.webp",
        "fields": 23,
        "path": "home.P_testimonial_slider"
      },
      {
        "nameAr": "فروعنا",
        "nameEn": "Branches",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/Pvn1vxNf/image-webp.webp",
        "fields": 15,
        "path": "home.P_branches"
      },
      {
        "nameAr": "المدونة",
        "nameEn": "Blog",
        "icon": "sicon-news",
        "image": "https://i.ibb.co/p6ySH6fc/12.png",
        "fields": 17,
        "path": "home.P_blog"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "pro",
    "name": "Pro",
    "nameAr": "برو",
    "coupon": "F-WBPGCPUI",
    "priceBefore": 299,
    "priceAfter": 239.2,
    "description": "قالب سلة بروفيشنال بعناصر ديناميكية وبطاقات اشتراك ذكية وأقسام تسويقية متكاملة تمنح متجرك تجربة تسوق راقية ومتقدمة",
    "image": "assets/images/covers/pro-cover.jpg",
    "sectionsCount": 22,
    "blocksCount": 434,
    "repo": "https://github.com/apqrinu/pro",
    "buyUrl": "",
    "preview": "https://demostore.salla.sa/dev-nmehywbobegfjhau",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "عناوين",
        "nameEn": "Blush Titles",
        "icon": "sicon-quote",
        "image": "https://i.ibb.co/27gnQbGp/Gemini-Generated-Image-qjbnezqjbnezqjbn-webp.webp",
        "fields": 31,
        "path": "home.B_promo_title_section"
      },
      {
        "nameAr": "البانر الرئيسي",
        "nameEn": "Hero Banner",
        "icon": "sicon-star-o",
        "image": "https://i.ibb.co/x8Cf02Ty/Component-2-1-webp.webp",
        "fields": 30,
        "path": "home.B_explor_product_banner"
      },
      {
        "nameAr": "بطاقات التصنيفات",
        "nameEn": "Categories Cards",
        "icon": "sicon-images",
        "image": "https://i.ibb.co/BVfhHR9W/Frame-3-webp.webp",
        "fields": 19,
        "path": "home.B_Categories_Card"
      },
      {
        "nameAr": "عالم التصنيفات",
        "nameEn": "Category Universe",
        "icon": "sicon-d-rotate",
        "image": "https://i.ibb.co/Y4j4g0Rw/universe-card-webp.webp",
        "fields": 31,
        "path": "home.B_Category_Universe"
      },
      {
        "nameAr": "تبويبات المنتجات",
        "nameEn": "Product Tabs",
        "icon": "sicon-carousel",
        "image": "https://i.ibb.co/kVXNBdMC/cards-webp.webp",
        "fields": 10,
        "path": "home.B_product_tabs"
      },
      {
        "nameAr": "خدماتنا",
        "nameEn": "Our Services",
        "icon": "sicon-paper-send",
        "image": "https://i.ibb.co/93grGcdC/Frame-2147224395-1-webp.webp",
        "fields": 13,
        "path": "home.B_our_services"
      },
      {
        "nameAr": "بطاقات الاشتراكات المخصصة",
        "nameEn": "Custom Subscription Cards",
        "icon": "sicon-credit-card",
        "image": "https://i.ibb.co/SXgbztqD/subscribtion-webp.webp",
        "fields": 40,
        "path": "home.B_subscription_cards"
      },
      {
        "nameAr": "بطاقات الاشتراكات للمنتجات",
        "nameEn": "Product Subscription Cards",
        "icon": "sicon-credit-card",
        "image": "https://i.ibb.co/SXgbztqD/subscribtion-webp.webp",
        "fields": 39,
        "path": "home.B_subscription_products"
      },
      {
        "nameAr": "اكتشف المجموعة",
        "nameEn": "Explore Collection",
        "icon": "sicon-cellphone-landscape",
        "image": "https://i.ibb.co/fz59HFzL/explore-banner-webp.webp",
        "fields": 27,
        "path": "home.B_explore_collection"
      },
      {
        "nameAr": "عروض مختارة",
        "nameEn": "Featured Offers",
        "icon": "sicon-tag-special",
        "image": "https://i.ibb.co/wZrzgnXf/Frame-2147224386-1-webp.webp",
        "fields": 33,
        "path": "home.B_selected_offers"
      },
      {
        "nameAr": "بانر الخدمات",
        "nameEn": "Services Banner",
        "icon": "sicon-gift-card",
        "image": "https://i.ibb.co/sD5ktt8/1-webp.webp",
        "fields": 31,
        "path": "home.B_hero_services_banner"
      },
      {
        "nameAr": "مقالات",
        "nameEn": "Article",
        "icon": "sicon-store",
        "image": "https://i.ibb.co/TD5mYhzX/articles-section-1-webp.webp",
        "fields": 23,
        "path": "home.B_blog_posts"
      },
      {
        "nameAr": "اسئلة شائعة",
        "nameEn": "FAQ",
        "icon": "sicon-information",
        "image": "https://i.ibb.co/mC7NHFQv/faq-section-1-webp.webp",
        "fields": 22,
        "path": "home.B_FAQ"
      },
      {
        "nameAr": "آراء العملاء",
        "nameEn": "Customer Testimonials",
        "icon": "sicon-mail-open",
        "image": "https://i.ibb.co/gZZMQJ7f/feedbacks-section-webp.webp",
        "fields": 14,
        "path": "home.B_testimonials"
      },
      {
        "nameAr": "تابعنا على وسائل التواصل",
        "nameEn": "Follow Us on Social Media",
        "icon": "sicon-instagram2",
        "image": "https://i.ibb.co/LX50VCkZ/instagram-section-1-webp.webp",
        "fields": 32,
        "path": "home.B_social_follow"
      },
      {
        "nameAr": "موقعنا",
        "nameEn": "our location",
        "icon": "sicon-map-location",
        "image": "https://i.ibb.co/ZzM3qqSV/location-webp.webp",
        "fields": 13,
        "path": "home.B_location"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 9,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 6,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 3,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 3,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 2,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  },
  {
    "id": "max",
    "name": "Max",
    "nameAr": "ماكس",
    "coupon": "",
    "priceBefore": 250,
    "description": "قالب سلة مرن بأقسام تسوّق حديثة كسلايدر الإطلالات وشبكة التصنيفات وبانرات مزدوجة، مصمّم ليمنح متجرك حضوراً بصرياً قوياً وتجربة سلسة",
    "image": "assets/images/covers/plus-cover.webp",
    "sectionsCount": 19,
    "blocksCount": 390,
    "repo": "https://github.com/apqrinu/max",
    "buyUrl": "",
    "preview": "https://demostore.salla.sa/ar/dev-9hmvzzcgrur3a2i4",
    "docs": "",
    "videos": [],
    "sections": [
      {
        "nameAr": "القسم الرئيسي",
        "nameEn": "Main Section",
        "icon": "sicon-image-carousel",
        "image": "https://i.ibb.co/Dg7jyzHV/17162a3d-5880-46bc-8d2c-e24d470c4b82-gif.gif",
        "fields": 35,
        "path": "home.M_hero_marquee"
      },
      {
        "nameAr": "مميزات المتجر",
        "nameEn": "Store Features",
        "icon": "sicon-award-ribbon",
        "image": "https://i.ibb.co/YBsP3f2X/download-23-webp.webp",
        "fields": 20,
        "path": "home.M_features"
      },
      {
        "nameAr": "تصنيفات المتجر",
        "nameEn": "Categories",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/6cnHyzcR/4a3090b8-b11b-4f7c-bf54-e9c4b1a7530b-gif.gif",
        "fields": 30,
        "path": "home.M_categories"
      },
      {
        "nameAr": "بانرين مزدوجين",
        "nameEn": "Dual Banners",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://i.ibb.co/m5KDbNqG/9489f0f8-a8e5-45f7-9297-20ba82ac1253-gif.gif",
        "fields": 40,
        "path": "home.M_dual_banners"
      },
      {
        "nameAr": "بانر منتج مميز",
        "nameEn": "Featured Product Banner",
        "icon": "sicon-star2",
        "image": "https://i.ibb.co/rKtCz2cB/download-24-webp.webp",
        "fields": 30,
        "path": "home.M_featured_product"
      },
      {
        "nameAr": "سلايدر وشبكة المنتجات المميزة",
        "nameEn": "Showcase Slider & Grid",
        "icon": "sicon-sales-presentation",
        "image": "https://i.ibb.co/WWTkMB3q/download-25-webp.webp",
        "fields": 27,
        "path": "home.M_showcase_slider"
      },
      {
        "nameAr": "سلايدر إطلالات ومنتجات مختارة",
        "nameEn": "Shop The Look & Hot Items Slider",
        "icon": "sicon-star",
        "image": "https://i.ibb.co/TBdk14Ws/ba1b1c88-16da-40a1-851a-4c96166e0d21-gif.gif",
        "fields": 22,
        "path": "home.M_shop_the_look"
      },
      {
        "nameAr": "شبكة التصنيفات",
        "nameEn": "Categories Grid",
        "icon": "sicon-grid",
        "image": "https://i.ibb.co/mrPvvFmZ/514909b2-ff32-4e2b-a43e-d63be53c22d8-gif.gif",
        "fields": 30,
        "path": "home.M_categories_grid"
      },
      {
        "nameAr": "قصة ونبذة عن المتجر",
        "nameEn": "Store Story & About Us",
        "icon": "sicon-book-open",
        "image": "https://i.ibb.co/pBhLNk7m/2d8e07ff-8d6f-4bb0-8c27-06c22f4cfe39-webp.webp",
        "fields": 29,
        "path": "home.M_about_story"
      },
      {
        "nameAr": "بانر شريطي مميز",
        "nameEn": "Promo Ribbon Banner",
        "icon": "sicon-award-ribbon",
        "image": "https://i.ibb.co/x8DGXF80/download-26-webp.webp",
        "fields": 25,
        "path": "home.M_promo_ribbon"
      },
      {
        "nameAr": "آراء و تقييمات العملاء",
        "nameEn": "Customer Reviews",
        "icon": "sicon-star",
        "image": "https://i.ibb.co/mFSKBWPT/download-30-webp.webp",
        "fields": 22,
        "path": "home.M_customer_reviews"
      },
      {
        "nameAr": "فروع المتجر وأوقات العمل",
        "nameEn": "Store Branches & Locations",
        "icon": "sicon-location",
        "image": "https://i.ibb.co/tPB3C1GB/download-28-webp.webp",
        "fields": 17,
        "path": "home.M_store_location"
      },
      {
        "nameAr": "المقالات والنصائح",
        "nameEn": "Blog Articles & News",
        "icon": "sicon-newspaper",
        "image": "https://i.ibb.co/Y7fTsM7p/download-29-webp.webp",
        "fields": 22,
        "path": "home.M_blog"
      },
      {
        "nameAr": "صور متحركة (محسنة)",
        "nameEn": "Enhances Animated Images",
        "icon": "sicon-image-carousel",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/images-slider-enhancement.png?v=1.1",
        "fields": 5,
        "path": "home.enhanced-slider"
      },
      {
        "nameAr": "روابط سريعة",
        "nameEn": "Quick Links",
        "icon": "sicon-layout-grid-rearrange",
        "image": "https://cdn.salla.network/images/themes/raed/main-links-with-bg.jpg?v=1.1",
        "fields": 11,
        "path": "home.main-links"
      },
      {
        "nameAr": "منتجات متحركة مع خلفية",
        "nameEn": "Animated products with a background",
        "icon": "sicon-list-play",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/slider-products-with-bg.png?v=1.1",
        "fields": 8,
        "path": "home.slider-products-with-header"
      },
      {
        "nameAr": "صور مربعة (محسنة)",
        "nameEn": "Enhanced square images",
        "icon": "sicon-image",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/square-images.png?v=1.1",
        "fields": 5,
        "path": "home.enhanced-square-banners"
      },
      {
        "nameAr": "الماركات التجارية",
        "nameEn": "Brands",
        "icon": "sicon-award-ribbon",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/brands.png?v=1.1",
        "fields": 5,
        "path": "home.brands"
      },
      {
        "nameAr": "آراء عملاء مخصصة",
        "nameEn": "Custom testimonials",
        "icon": "sicon-chat-bubbles",
        "image": "https://cdn.salla.network/images/themes/raed/preview-images/custom-testimonials.png?v=1.1",
        "fields": 7,
        "path": "home.custom-testimonials"
      }
    ],
    "features": [
      {
        "slug": "mega-menu",
        "nameAr": "القائمة الضخمة",
        "description": "قائمة تنقل متعددة الأعمدة لتنظيم الفئات وإبراز العروض الرئيسية",
        "icon": "menu"
      },
      {
        "slug": "fonts",
        "nameAr": "خطوط مخصصة",
        "description": "عدة عائلات خطوط عربية احترافية يمكن تبديلها لتناسب هوية متجرك",
        "icon": "type"
      },
      {
        "slug": "color",
        "nameAr": "ألوان قابلة للتخصيص",
        "description": "نظام ألوان مرن يتيح تطبيق هوية علامتك التجارية بدقة كاملة",
        "icon": "palette"
      },
      {
        "slug": "breadcrumb",
        "nameAr": "مسار التنقل",
        "description": "يُظهر للزائر موقعه داخل المتجر ويحسّن سهولة التصفح والوصول",
        "icon": "route"
      },
      {
        "slug": "unite-cards-height",
        "nameAr": "توحيد ارتفاع البطاقات",
        "description": "بطاقات منتجات متساوية الارتفاع لشبكة عرض متناسقة ومريحة بصرياً",
        "icon": "rows"
      },
      {
        "slug": "component-featured-products",
        "nameAr": "المنتجات المميزة",
        "description": "اعرض أبرز منتجاتك في شبكة مخصصة بإطار جذاب لزيادة المبيعات",
        "icon": "sparkles"
      },
      {
        "slug": "component-fixed-banner",
        "nameAr": "بانر ثابت",
        "description": "بانر بصري كبير يبرز عرضاً موسمياً أو حملة تسويقية مميزة",
        "icon": "flag"
      },
      {
        "slug": "component-fixed-products",
        "nameAr": "منتجات ثابتة",
        "description": "ثبّت منتجات محددة في الصفحة الرئيسية لإبراز الأكثر طلباً",
        "icon": "pin"
      },
      {
        "slug": "component-products-slider",
        "nameAr": "سلايدر المنتجات",
        "description": "اعرض منتجاتك في شريط أفقي متحرك يوفر مساحة ويزيد التفاعل",
        "icon": "shop"
      },
      {
        "slug": "component-photos-slider",
        "nameAr": "سلايدر الصور",
        "description": "سلايدر بصري احترافي لعرض البانرات والعروض في شريحة متحركة",
        "icon": "slider"
      },
      {
        "slug": "component-parallax-background",
        "nameAr": "خلفية بارالاكس",
        "description": "تأثير حركي ثلاثي الأبعاد يضيف عمقاً وحيوية لصفحات المتجر",
        "icon": "layers"
      },
      {
        "slug": "component-testimonials",
        "nameAr": "آراء العملاء",
        "description": "شارك شهادات عملائك السعداء لبناء الثقة وزيادة معدلات التحويل",
        "icon": "quote"
      },
      {
        "slug": "component-square-photos",
        "nameAr": "الصور المربعة",
        "description": "شبكة صور مربعة تبرز الفئات والمجموعات بأسلوب أنيق ومنظم",
        "icon": "grid"
      },
      {
        "slug": "component-store-features",
        "nameAr": "مميزات المتجر",
        "description": "اعرض مزاياك التنافسية كالشحن المجاني والدفع الآمن في شريط بارز",
        "icon": "star"
      },
      {
        "slug": "component-youtube",
        "nameAr": "عنصر يوتيوب",
        "description": "ضمّن فيديوهات يوتيوب داخل صفحاتك لشرح منتجاتك بصرياً وجذاب",
        "icon": "play"
      },
      {
        "slug": "menu-images",
        "nameAr": "صور القائمة",
        "description": "اعرض صوراً جذابة داخل قوائم التنقل لإبراز الأقسام الرئيسية",
        "icon": "image"
      },
      {
        "slug": "filters",
        "nameAr": "فلاتر المنتجات",
        "description": "أدوات تصفية متقدمة تسرّع وصول الزائر للمنتج الذي يبحث عنه",
        "icon": "filter"
      }
    ]
  }
];

if (typeof module !== "undefined") { module.exports = { THEMES }; }
