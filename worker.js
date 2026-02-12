// ========================================
// MINIWASH® LANDING PAGE - CLOUDFLARE WORKER
// ========================================

// 🔐 HTML CONTENT (COMPLETE & SELF-CONTAINED)
const INDEX = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>MINIWASH® — Urban Efficiency | Reserve €49</title>
  <meta name="description" content="MINIWASH® — Portable foldable mini washer with UV disinfection. -50% water, compact & fast. Perfect for babies, travelers & apartments. Reserve now €49." />
  <meta name="keywords" content="mini washer, portable, UV, disinfection, foldable washer, Miniwash, €49" />
  <meta property="og:title" content="MINIWASH® — Urban Efficiency" />
  <meta property="og:description" content="Portable foldable mini washer with UV disinfection. -50% water consumption. Reserve now €49." />
  <meta property="og:image" content="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" />
  <meta property="og:type" content="product" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"><\/script>
  <link rel="preload" as="image" href="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" />
  <style>
    :root{
      --olive:#556B2F;
      --bg:#FFFFFF;
      --glass: rgba(255,255,255,0.8);
      --radius: 1.25rem;
      --accent-contrast: #fff;
      --content-width: 1100px;
      --focus: 3px solid rgba(85,107,47,0.18);
    }
    html,body{height:100%}
    body{font-family:'Plus Jakarta Sans',system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial; background:var(--bg); color:#0f172a; -webkit-font-smoothing:antialiased}
    .text-olive{color:var(--olive)}
    .bg-olive{background:var(--olive)}
    .glass-premium{background:var(--glass); backdrop-filter: blur(10px); border:1px solid rgba(0,0,0,0.04)}
    .rounded-hero{border-radius:2rem}
    .focus-ring:focus{outline:none; box-shadow:var(--focus); border-radius:.5rem}
    .card-radius{border-radius:1.5rem}
    .border-error { border-color: #dc2626 !important; }
    .text-error { color: #dc2626; }
    input.border-error:focus { box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.15); }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .pulse-cta{
      transition:transform .25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow .25s ease;
      position: relative;
      overflow: hidden;
    }
    .pulse-cta::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      transform: translate(-50%, -50%);
      transition: width .7s, height .7s;
      pointer-events: none;
    }
    .pulse-cta:hover::before {
      width: 400px;
      height: 400px;
    }
    .pulse-cta:hover{
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(85,107,47,0.4), 0 0 25px rgba(85,107,47,0.2);
    }
    .pulse-cta:active{
      transform:translateY(-1px);
    }
    h1 {
      background: linear-gradient(135deg, #0f172a 0%, #0f172a 65%, var(--olive) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
      animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .text-olive-underline {
      position: relative;
      display: inline-block;
    }
    .text-olive-underline::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--olive) 0%, var(--olive) 70%, transparent 100%);
      border-radius: 2px;
      box-shadow: 0 4px 12px rgba(85,107,47,0.2);
    }
    .skip{position:absolute;left:1rem;top:1rem;background:#111;color:#fff;padding:.5rem .75rem;border-radius:.5rem;z-index:60}
    .skip:not(:focus){clip:rect(0 0 0 0); clip-path: inset(50%); height:1px; overflow:hidden; position:absolute; white-space:nowrap; width:1px}
    .badge-uv{
      background:linear-gradient(180deg,rgba(86,124,36,0.1),rgba(86,124,36,0.03)); 
      border:1.5px solid rgba(86,124,36,0.18); 
      padding:.7rem 1.2rem; 
      border-radius:1.2rem;
      box-shadow: 0 4px 16px rgba(85,107,47,0.12), inset 0 1px 0 rgba(255,255,255,0.5);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      backdrop-filter: blur(8px);
      animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
    }
    .badge-uv:hover {
      box-shadow: 0 12px 32px rgba(85,107,47,0.2), inset 0 1px 0 rgba(255,255,255,0.5);
      border-color: rgba(86,124,36,0.32);
      transform: translateY(-2px);
    }
    .feature-card {
      transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      border: 1.5px solid rgba(85,107,47,0.08);
      background: linear-gradient(135deg, rgba(250,251,249,0.8), rgba(85,107,47,0.015));
      backdrop-filter: blur(4px);
      position: relative;
      overflow: hidden;
      animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 100% 0%, rgba(85,107,47,0.08) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .feature-card:hover::before {
      opacity: 1;
    }
    .feature-card:hover {
      transform: translateY(-8px);
      border-color: rgba(85,107,47,0.25);
      box-shadow: 0 24px 48px rgba(85,107,47,0.15);
    }
    .testimonial{
      min-height:140px;
      transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      border-left: 5px solid transparent;
      background: linear-gradient(135deg, #f9faf8 0%, #f0f4f0 100%);
      position: relative;
      overflow: hidden;
      animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .testimonial::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 8px;
      font-size: 80px;
      opacity: 0.08;
      color: var(--olive);
    }
    .testimonial:hover {
      border-left-color: var(--olive);
      box-shadow: 0 12px 32px rgba(85,107,47,0.15);
      transform: translateX(4px);
    }
    .price-card {
      background: linear-gradient(135deg, #F5F7F3 0%, #EEF1EB 100%);
      border: 2px solid rgba(85,107,47,0.15);
      box-shadow: 0 24px 64px rgba(85,107,47,0.12), inset 0 1px 0 rgba(255,255,255,0.8);
      position: relative;
      overflow: hidden;
      animation: scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
    }
    .price-card::before {
      content: '';
      position: absolute;
      top: -40%;
      right: -20%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(85,107,47,0.1) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(40px);
    }
    .case-card {
      transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
      border: 1.5px solid rgba(85,107,47,0.1);
      background: linear-gradient(135deg, rgba(250,251,249,0.95), rgba(85,107,47,0.01));
      animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .case-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 30%, rgba(85,107,47,0.08) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .case-card:hover::before {
      opacity: 1;
    }
    .case-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 28px 56px rgba(85,107,47,0.18);
      border-color: rgba(85,107,47,0.2);
    }
    .circular-image {
      position: relative;
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .circular-image::before {
      content: '';
      position: absolute;
      inset: -12px;
      background: radial-gradient(circle, rgba(85,107,47,0.25) 0%, transparent 70%);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.35s ease;
      filter: blur(8px);
    }
    .case-card:hover .circular-image {
      transform: scale(1.08);
    }
    .case-card:hover .circular-image::before {
      opacity: 1;
    }
    .modal-content {
      animation: slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      background: linear-gradient(135deg, #F7FAF7 0%, #EFF3EE 100%);
    }
    input:focus, textarea:focus {
      border-color: var(--olive);
      box-shadow: 0 0 0 4px rgba(85,107,47,0.15), inset 0 1px 2px rgba(0,0,0,0.05);
      transition: all 0.25s ease;
    }
    input, textarea {
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }
    .spinner{display:inline-block;width:16px;height:16px;border:2px solid rgba(85,107,47,0.2);border-top-color:var(--olive);border-radius:50%;animation:spin 0.6s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
    #hero-slider::-webkit-scrollbar { display: none; }
    #hero-slider { -ms-overflow-style: none; scrollbar-width: none; }
    details summary {
      cursor: pointer;
      padding: 6px 0;
      transition: color 0.3s ease;
      user-select: none;
    }
    details summary:hover {
      color: var(--olive);
    }
    details[open] summary {
      color: var(--olive);
      font-weight: 700;
    }
    .btn-secondary {
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      border: 2px solid rgba(85,107,47,0.3);
    }
    .btn-secondary:hover {
      border-color: var(--olive);
      background: linear-gradient(135deg, rgba(85,107,47,0.05), transparent);
      box-shadow: 0 8px 24px rgba(85,107,47,0.1);
      transform: translateY(-2px);
    }
    .social-proof {
      animation: fadeIn 0.8s ease 0.4s both;
    }
    .metric-card {
      transition: all 0.3s ease;
    }
    .metric-card:hover {
      transform: translateY(-4px);
    }
    @media (min-width:1024px){ .hero-img{height:520px} }
    @media (max-width:640px){ 
      .desktop-only{display:none} 
      .mobile-only{display:block}
      h1 { font-size: 2.25rem !important; }
    }
  </style>
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":"MINIWASH® Portable Mini Washer",
    "image":["https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200"],
    "description":"Portable foldable mini washer with UV disinfection. 50% less water consumption, perfect for delicate clothes, babies and travelers.",
    "brand":{"@type":"Brand","name":"MINIWASH"},
    "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.6","reviewCount":"847"},
    "offers":{
      "@type":"Offer",
      "url":"#store",
      "priceCurrency":"EUR",
      "price":"49.00",
      "availability":"https://schema.org/InStock"
    }
  }
  <\/script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <nav class="fixed top-4 inset-x-4 z-50">
    <div class="max-w-[var(--content-width)] mx-auto glass-premium p-3 rounded-full flex items-center justify-between gap-4 backdrop-blur-xl">
      <div class="flex items-center gap-4">
        <a aria-label="MINIWASH Home" class="text-xl font-extrabold tracking-tight uppercase">
          Miniwash<span class="text-olive">.</span>
        </a>
      </div>
      <div class="hidden md:flex items-center gap-3">
        <a data-reserva class="ml-3 bg-olive text-white px-4 py-2 rounded-full text-sm font-bold uppercase pulse-cta shadow-md hover:shadow-lg" id="nav-buy">Reserve</a>
      </div>
      <div class="md:hidden flex items-center gap-2">
        <a data-reserva class="bg-olive text-white px-3 py-2 rounded-full text-xs font-bold uppercase pulse-cta">Reserve</a>
      </div>
    </div>
  </nav>
  <main id="main" class="pt-28">
    <header class="max-w-[var(--content-width)] mx-auto px-6">
      <section class="grid lg:grid-cols-2 gap-12 items-center py-16">
        <div>
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            UNLIMITED <span class="text-olive-underline">EFFICIENCY</span>
          </h1>
          <p class="mt-6 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed font-medium">
            MINIWASH®: portable foldable mini washer with UV disinfection. Uses up to <strong class="text-gray-800">-50% water</strong>, protects delicate fabrics and travels with you. Urban design engineered for professional results.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a id="cta-primary" data-reserva class="bg-olive text-white px-8 py-4 rounded-full font-bold text-base uppercase pulse-cta focus-ring shadow-lg">RESERVE €49</a>
            <a href="https://www.youtube.com/watch?v=lnlRbIqY6yI" target="_blank" class="btn-secondary border-2 border-olive/30 px-6 py-4 rounded-full text-base font-semibold focus-ring">▶ EXTERNAL REVIEW</a>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
            <div class="badge-uv">
              <div class="text-[11px] uppercase tracking-wider font-bold text-olive">Conscious Consumption</div>
              <div class="font-black text-2xl text-olive mt-1">-50% Water</div>
            </div>
            <div class="flex items-center gap-2 font-medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2L15 8H9L12 2Z" fill="#556B2F"/></svg>
              <span>Careful delivery • Tracking included</span>
            </div>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center text-xs text-gray-600 font-medium">
            <div class="flex items-center gap-2">🔒 <strong>Secure Payment</strong> • Card / Bank Transfer</div>
            <div class="hidden sm:block text-gray-400">|</div>
            <div class="flex items-center gap-2">⭐ <strong>4.6/5</strong> (847 verified reviews)</div>
          </div>
        </div>
        <div class="relative group">
          <div id="hero-slider" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-hero shadow-2xl" style="scrollbar-width: none; -ms-overflow-style: none;">
            <div class="min-w-full snap-center h-[350px] lg:h-[520px]">
              <img src="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Miniwash 1">
            </div>
            <div class="min-w-full snap-center h-[350px] lg:h-[520px]">
              <img src="https://tu-url-aqui.com/foto2.jpg" class="w-full h-full object-cover" alt="Miniwash 2">
            </div>
          </div>
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            <div class="w-2.5 h-2.5 rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-125 cursor-pointer"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/60 shadow-lg transition-all duration-300 hover:scale-125 hover:bg-white/80 cursor-pointer"></div>
          </div>
          <div class="absolute -top-8 -left-6 hidden md:block bg-white p-5 rounded-2xl shadow-2xl z-30 border border-olive/15 backdrop-blur-sm">
            <p class="text-[10px] font-bold text-olive uppercase tracking-widest mb-2 italic">Professional Hygiene</p>
            <p class="text-2xl font-black text-olive">UV + Fast Cycles</p>
          </div>
        </div>
      </section>
    </header>
    <section class="py-12 bg-olive/5">
      <div class="max-w-[var(--content-width)] mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-6 social-proof">
          <div class="metric-card text-center">
            <div class="text-4xl font-black text-olive">847+</div>
            <p class="text-sm text-gray-700 mt-2 font-medium">Verified Reviews</p>
          </div>
          <div class="metric-card text-center">
            <div class="text-4xl font-black text-olive">4.6⭐</div>
            <p class="text-sm text-gray-700 mt-2 font-medium">Average Rating</p>
          </div>
          <div class="metric-card text-center">
            <div class="text-4xl font-black text-olive">15K+</div>
            <p class="text-sm text-gray-700 mt-2 font-medium">Completed Washes</p>
          </div>
          <div class="metric-card text-center">
            <div class="text-4xl font-black text-olive">72h</div>
            <p class="text-sm text-gray-700 mt-2 font-medium">Guaranteed Delivery</p>
          </div>
        </div>
      </div>
    </section>
    <section id="features" class="py-16 bg-white/80">
      <div class="max-w-[var(--content-width)] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div class="space-y-8">
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">Designed for <span class="italic font-light text-olive">mobile lifestyle</span></h2>
          <p class="text-gray-700 text-lg leading-relaxed font-medium">It's not just portability; it's freedom. Ideal for professionals, travelers, families with babies, and anyone who demands hygiene in small garments.</p>
          <ul class="grid sm:grid-cols-2 gap-5 mt-8">
            <li class="feature-card p-5 card-radius glass-premium">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-olive/25 to-olive/15 rounded-xl text-olive font-bold text-lg flex-shrink-0">01</div>
                <div>
                  <h4 class="font-bold text-olive text-lg">Foldable Design</h4>
                  <p class="text-sm text-gray-600 mt-1 leading-relaxed">Takes up less space than a shoebox. Easy to store and transport.</p>
                </div>
              </div>
            </li>
            <li class="feature-card p-5 card-radius glass-premium">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-olive/25 to-olive/15 rounded-xl text-olive font-bold text-lg flex-shrink-0">02</div>
                <div>
                  <h4 class="font-bold text-olive text-lg">Advanced Hygiene</h4>
                  <p class="text-sm text-gray-600 mt-1 leading-relaxed">Integrated UV light for complementary disinfection of small garments.</p>
                </div>
              </div>
            </li>
            <li class="feature-card p-5 card-radius glass-premium">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-olive/25 to-olive/15 rounded-xl text-olive font-bold text-lg flex-shrink-0">03</div>
                <div>
                  <h4 class="font-bold text-olive text-lg">Fast Cycles</h4>
                  <p class="text-sm text-gray-600 mt-1 leading-relaxed">Cycles designed for delicate, baby clothes and essentials in under 20 min.</p>
                </div>
              </div>
            </li>
            <li class="feature-card p-5 card-radius glass-premium">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-olive/25 to-olive/15 rounded-xl text-olive font-bold text-lg flex-shrink-0">04</div>
                <div>
                  <h4 class="font-bold text-olive text-lg">Water Efficiency</h4>
                  <p class="text-sm text-gray-600 mt-1 leading-relaxed">Reduces consumption up to 50% versus standard washers for small loads.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <aside id="store" class="price-card p-10 rounded-3xl text-center sticky top-32">
          <div aria-hidden class="text-xs uppercase tracking-widest text-olive/70 font-bold">Limited Time Offer</div>
          <div class="text-7xl font-black text-olive my-6">49<span class="text-3xl ml-1">€</span></div>
          <div class="text-xs uppercase font-bold tracking-[0.3em] text-gray-600 mb-10">One-time investment. Lifetime savings.</div>
          <button class="w-full bg-olive text-white py-5 rounded-full font-black text-lg shadow-xl pulse-cta focus-ring hover:shadow-2xl" id="storeReserveBtn">RESERVE NOW</button>
          <p class="mt-6 text-sm text-gray-700 leading-relaxed font-medium">Careful delivery, tracking included • Shop with confidence • Secure payment</p>
          <div class="mt-8 text-sm text-gray-800 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-olive/10">
            <div class="font-bold">📦 Available Stock: <span class="text-olive" id="stockCount">25</span></div>
            <div class="mt-2 text-xs text-orange-600 font-semibold" id="scarcityText" aria-live="polite">⚡ Only a few units left</div>
          </div>
          <div class="mt-8 space-y-3 text-xs text-gray-700">
            <div class="flex items-center gap-2 justify-center">
              <span class="text-lg">✓</span>
              <strong>30-day money back guarantee</strong>
            </div>
            <div class="flex items-center gap-2 justify-center">
              <span class="text-lg">✓</span>
              <strong>2-year complete warranty</strong>
            </div>
            <div class="flex items-center gap-2 justify-center">
              <span class="text-lg">✓</span>
              <strong>24/7 support included</strong>
            </div>
          </div>
          <div class="mt-8 text-xs text-gray-700">
            <strong>Payment Methods:</strong>
            <div class="flex items-center justify-center gap-4 mt-4">
              <img src="https://i.postimg.cc/K4tbRQxs/logo-monpay.png" alt="Monpay" class="w-14 h-auto opacity-85 hover:opacity-100 transition" />
              <img src="https://i.postimg.cc/Xp7nmd0Y/helio.avif" alt="Helio" class="w-14 h-auto opacity-85 hover:opacity-100 transition" />
              <img src="https://i.postimg.cc/1g12h1NP/euro-and-dollar-money-logo-icon-sign-symbol-vector-removebg-preview.png" alt="Currency" class="w-14 h-auto opacity-85 hover:opacity-100 transition" />
            </div>
          </div>
        </aside>
      </div>
    </section>
    <section id="usos" class="py-16 max-w-[var(--content-width)] mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">Perfect for every lifestyle</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <article class="case-card p-8 rounded-2xl bg-white text-center shadow-lg">
          <div class="circular-image w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full border-3 border-olive/12">
            <img src="https://i.postimg.cc/zXDP38F6/Save_Clip_App_526697450_1305439328254470_4186378348620069982_n.jpg" alt="Urban" class="w-full h-full object-cover scale-110" />
          </div>
          <h3 class="font-bold text-2xl text-gray-900">Urban</h3>
          <p class="text-sm text-gray-700 mt-3 leading-relaxed">Perfect for apartments and students needing quick washes without taking up space.</p>
          <div class="mt-4 text-xs font-semibold text-olive">40-50% of market</div>
        </article>
        <article class="case-card p-8 rounded-2xl bg-white text-center shadow-lg">
          <div class="circular-image w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full border-3 border-olive/12">
            <img src="https://i.postimg.cc/Kvcs4xDV/tips_compra.jpg" alt="Adventure" class="w-full h-full object-cover scale-110" />
          </div>
          <h3 class="font-bold text-2xl text-gray-900">Adventure</h3>
          <p class="text-sm text-gray-700 mt-3 leading-relaxed">Perfect for RVs, camping and nomadic lifestyle.</p>
          <div class="mt-4 text-xs font-semibold text-olive">10-15% of market</div>
        </article>
        <article class="case-card p-8 rounded-2xl bg-white text-center shadow-lg">
          <div class="circular-image w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full border-3 border-olive/12">
            <img src="https://i.postimg.cc/xTjFqnPr/portrait_young_family.jpg" alt="Baby" class="w-full h-full object-cover scale-110" />
          </div>
          <h3 class="font-bold text-2xl text-gray-900">Baby & Family</h3>
          <p class="text-sm text-gray-700 mt-3 leading-relaxed">Quick separate washes for baby clothes without contaminating general laundry.</p>
          <div class="mt-4 text-xs font-semibold text-olive">30-40% of market</div>
        </article>
      </div>
      <section id="testimonios" class="py-16 bg-white/80 mt-16 rounded-3xl">
        <div class="max-w-[var(--content-width)] mx-auto px-6">
          <h3 class="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900">What our customers say</h3>
          <div class="relative">
            <div id="testimonials" class="flex gap-5 overflow-hidden">
              <blockquote class="testimonial p-7 rounded-2xl min-w-full">
                <div class="flex gap-1 mb-4 text-lg">★★★★★</div>
                <p class="text-gray-800 font-medium leading-relaxed text-base">"Compact and powerful — washing baby onesies in 15 min changed my mornings."</p>
                <p class="text-olive font-bold mt-4">— María, Madrid</p>
              </blockquote>
              <blockquote class="testimonial p-7 rounded-2xl min-w-full hidden">
                <div class="flex gap-1 mb-4 text-lg">★★★★★</div>
                <p class="text-gray-800 font-medium leading-relaxed text-base">"Took it camping and it was flawless. Water and space saved."</p>
                <p class="text-olive font-bold mt-4">— Hugo, Valencia</p>
              </blockquote>
              <blockquote class="testimonial p-7 rounded-2xl min-w-full hidden">
                <div class="flex gap-1 mb-4 text-lg">★★★★★</div>
                <p class="text-gray-800 font-medium leading-relaxed text-base">"Got one for the office — small towels and uniforms ready instantly."</p>
                <p class="text-olive font-bold mt-4">— Laura, Barcelona</p>
              </blockquote>
            </div>
            <div class="flex gap-3 mt-8 justify-center">
              <button class="testimonial-dot w-3.5 h-3.5 rounded-full bg-olive transition-all hover:scale-125" data-index="0" aria-label="testimony 1"></button>
              <button class="testimonial-dot w-3.5 h-3.5 rounded-full bg-gray-300 transition-all hover:scale-125 hover:bg-gray-400" data-index="1" aria-label="testimony 2"></button>
              <button class="testimonial-dot w-3.5 h-3.5 rounded-full bg-gray-300 transition-all hover:scale-125 hover:bg-gray-400" data-index="2" aria-label="testimony 3"></button>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" class="py-16 max-w-[var(--content-width)] mx-auto px-6">
        <h3 class="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900">Frequently asked questions</h3>
        <div class="space-y-4 max-w-3xl">
          <details class="p-6 bg-white border-2 border-gray-200 rounded-2xl group cursor-pointer hover:border-olive/40 transition">
            <summary class="font-bold text-gray-900 flex justify-between items-center text-base">
              How long does a disinfection cycle take?
              <span class="transition group-open:rotate-180 text-olive">▼</span>
            </summary>
            <div class="mt-4 text-sm text-gray-700 leading-relaxed">Short cycles (10–20 min) for small garments; UV mode can be activated at end of cycle.</div>
          </details>
          <details class="p-6 bg-white border-2 border-gray-200 rounded-2xl group cursor-pointer hover:border-olive/40 transition">
            <summary class="font-bold text-gray-900 flex justify-between items-center text-base">
              Can I use regular detergent?
              <span class="transition group-open:rotate-180 text-olive">▼</span>
            </summary>
            <div class="mt-4 text-sm text-gray-700 leading-relaxed">Yes — we recommend liquid detergents for small loads. Don't use aggressive bleaches.</div>
          </details>
          <details class="p-6 bg-white border-2 border-gray-200 rounded-2xl group cursor-pointer hover:border-olive/40 transition">
            <summary class="font-bold text-gray-900 flex justify-between items-center text-base">
              What's your warranty?
              <span class="transition group-open:rotate-180 text-olive">▼</span>
            </summary>
            <div class="mt-4 text-sm text-gray-700 leading-relaxed">Shop with confidence; support via email and phone. 2-year complete warranty + 30-day money back guarantee. Documentation included.</div>
          </details>
          <details class="p-6 bg-white border-2 border-gray-200 rounded-2xl group cursor-pointer hover:border-olive/40 transition">
            <summary class="font-bold text-gray-900 flex justify-between items-center text-base">
              What's the actual water consumption?
              <span class="transition group-open:rotate-180 text-olive">▼</span>
            </summary>
            <div class="mt-4 text-sm text-gray-700 leading-relaxed">MINIWASH uses approx. 10-15L per cycle vs 80-100L for standard washers. Guaranteed 50% savings.</div>
          </details>
        </div>
      </section>
      <footer class="py-10 border-t-2 border-gray-200 mt-16">
        <div class="max-w-[var(--content-width)] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-sm text-gray-700 font-medium">© <strong>MINIWASH®</strong> — All rights reserved</div>
          <div class="flex gap-6 items-center text-sm text-gray-700 font-medium">
            <a href="#" class="hover:text-olive transition duration-300">Shipping Policy</a>
            <a href="#" class="hover:text-olive transition duration-300">Support & Trust</a>
          </div>
        </div>
      </footer>
    </section>
  </main>
  <div id="reserveModal" class="fixed inset-0 z-60 hidden items-center justify-center bg-black/40 backdrop-blur-md p-4" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="modal-content rounded-3xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto border-2 border-olive/15 shadow-2xl">
      <button id="closeModal" aria-label="close" class="absolute right-6 top-6 text-gray-500 hover:text-olive text-3xl font-bold transition">✕</button>
      <h4 class="text-3xl font-extrabold mb-3 text-gray-900">Reserve Your MINIWASH — €49</h4>
      <p class="text-base text-gray-700 mb-8 font-medium">Fill in your details and we'll send confirmation and secure payment options.</p>
      <form id="reserveForm" class="space-y-5" autocomplete="on" novalidate>
        <div>
          <label class="text-sm font-bold text-gray-900">Full Name *</label>
          <input name="name" required class="w-full mt-2 p-3.5 border-2 border-gray-300 rounded-lg focus-ring font-medium" placeholder="E.g. John Smith" />
          <div class="text-red-600 text-xs mt-1 hidden name-error font-bold">⚠ Please enter a valid name</div>
        </div>
        <div>
          <label class="text-sm font-bold text-gray-900">Email Address *</label>
          <input name="email" type="email" required class="w-full mt-2 p-3.5 border-2 border-gray-300 rounded-lg focus-ring font-medium" placeholder="you@email.com" />
          <div class="text-red-600 text-xs mt-1 hidden email-error font-bold">⚠ Please enter a valid email</div>
        </div>
        <div>
          <label class="text-sm font-bold text-gray-900">Phone (International Prefix)*</label>
          <div class="flex gap-2 mt-2">
            <select name="phone_prefix" required class="w-24 p-3.5 border-2 border-gray-300 rounded-lg focus-ring font-medium">
              <option value="">Select</option>
              <option value="+1">+1 (USA/Canada)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+64">+64 (New Zealand)</option>
              <option value="+353">+353 (Ireland)</option>
              <option value="+27">+27 (South Africa)</option>
              <option value="+65">+65 (Singapore)</option>
              <option value="+852">+852 (Hong Kong)</option>
            </select>
            <input name="phone" inputmode="tel" required class="flex-1 p-3.5 border-2 border-gray-300 rounded-lg focus-ring font-medium" placeholder="Your number" />
          </div>
          <div class="text-red-600 text-xs mt-1 hidden phone-error font-bold">⚠ Please enter a valid phone number</div>
        </div>
        <div>
          <label class="text-sm font-bold text-gray-900">Country *</label>
          <input name="country" required class="w-full mt-2 p-3.5 border-2 border-gray-300 rounded-lg focus-ring font-medium" placeholder="E.g. United States" />
          <div class="text-red-600 text-xs mt-1 hidden country-error font-bold">⚠ Please enter a valid country</div>
        </div>
        <div>
          <label class="text-sm font-bold text-gray-900">Address/Location * (must select from autocomplete)</label>
          <div class="relative">
            <input id="addressInput" name="address" required class="w-full mt-2 p-3.5 border-2 border-gray-300 rounded-lg focus-ring font-medium" placeholder="Start typing your address..." autocomplete="off" />
            <div id="addressLoader" class="absolute right-4 top-4 hidden"><div class="spinner"></div></div>
          </div>
          <div id="addressSuggestions" class="mt-2 grid gap-2 max-h-48 overflow-y-auto border-2 border-gray-300 rounded-lg p-2 bg-white hidden"></div>
          <div id="addressError" class="text-red-600 text-xs mt-2 hidden font-bold">✗ Must select an address from suggestions</div>
          <div id="addressSuccess" class="text-green-600 text-xs mt-2 hidden font-bold">✓ Address confirmed</div>
        </div>
        <div>
          <label class="text-sm font-bold text-gray-900">Currency *</label>
          <div class="mt-3 flex gap-4">
            <label class="cursor-pointer flex items-center gap-3 p-4 border-2 border-gray-300 rounded-xl hover:border-olive hover:bg-olive/5 transition flex-1">
              <input type="radio" name="currency" value="EUR" required class="peer w-5 h-5 accent-olive" />
              <div class="flex items-center gap-2">
                <span class="text-3xl font-bold text-olive">€</span>
                <div>
                  <div class="font-bold text-gray-900">EUR</div>
                  <div class="text-xs text-gray-600">€49</div>
                </div>
              </div>
            </label>
            <label class="cursor-pointer flex items-center gap-3 p-4 border-2 border-gray-300 rounded-xl hover:border-olive hover:bg-olive/5 transition flex-1">
              <input type="radio" name="currency" value="USD" class="peer w-5 h-5 accent-olive" />
              <div class="flex items-center gap-2">
                <span class="text-3xl font-bold text-olive">$</span>
                <div>
                  <div class="font-bold text-gray-900">USD</div>
                  <div class="text-xs text-gray-600">$49</div>
                </div>
              </div>
            </label>
          </div>
          <div id="currencyError" class="text-red-600 text-xs mt-3 hidden font-bold">✗ Please select a currency</div>
        </div>
        <div class="p-5 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <p class="text-sm text-blue-900 leading-relaxed font-medium">
            <strong>🔐 Secure Payment:</strong> Your payment will be verified automatically on blockchain after completing the Onramper transaction.
          </p>
        </div>
        <div class="flex gap-3 pt-6">
          <button type="submit" id="confirmReserve" class="flex-1 bg-olive text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition shadow-lg hover:shadow-xl">Confirm & Pay</button>
          <button type="button" id="payLater" class="flex-1 border-2 border-gray-300 py-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition">Pay Later</button>
        </div>
        <p class="text-xs text-gray-600 text-center font-medium">
          By reserving you accept our <a href="#" class="text-olive hover:underline font-bold">Terms & Conditions</a>
        </p>
      </form>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const CONFIG = {
        locationIqApiKey: window.ENV_LOCATION_IQ_KEY,
        emailjsService: window.ENV_EMAILJS_SERVICE_ID,
        emailjsTemplate: window.ENV_EMAILJS_TEMPLATE_ID
      };
      const ONRAMPER_URLS = {
        EUR: 'https://buy.onramper.com/?defaultAmount=49&fiatAmount=49&defaultFiat=EUR&defaultCrypto=USDT_POLYGON&address=0xecfdaf07bcb29f3eeb07bafefdff67ca25dffcd5&isAmountEditable=false&isAddressEditable=false',
        USD: 'https://buy.onramper.com/?defaultAmount=49&fiatAmount=49&defaultFiat=USD&defaultCrypto=USDT_POLYGON&address=0xecfdaf07bcb29f3eeb07bafefdff67ca25dffcd5&isAmountEditable=false&isAddressEditable=false'
      };
      try {
        if (typeof emailjs !== 'undefined') {
          emailjs.init(window.ENV_EMAILJS_PUBLIC_KEY);
        }
      } catch (e) {
        console.error("EmailJS Error:", e);
      }
      const modal = document.getElementById('reserveModal');
      const reserveForm = document.getElementById('reserveForm');
      const confirmReserveBtn = document.getElementById('confirmReserve');
      const addressInput = document.getElementById('addressInput');
      const addressSuggestions = document.getElementById('addressSuggestions');
      const addressLoader = document.getElementById('addressLoader');
      const addressError = document.getElementById('addressError');
      const addressSuccess = document.getElementById('addressSuccess');
      if (!modal) return;
      let selectedAddress = null;
      let addressDebounceTimer = null;
      function openModal(e) {
        if (e) e.preventDefault();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
        reserveForm.reset();
        selectedAddress = null;
        addressSuggestions.innerHTML = '';
        addressSuggestions.classList.add('hidden');
      }
      document.querySelectorAll('[data-reserva]').forEach(btn => {
        btn.addEventListener('click', openModal);
      });
      document.getElementById('closeModal').addEventListener('click', closeModal);
      document.getElementById('payLater').addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
      });
      if (addressInput) {
        addressInput.addEventListener('input', function(e) {
          const query = e.target.value.trim();
          clearTimeout(addressDebounceTimer);
          addressError.classList.add('hidden');
          addressSuccess.classList.add('hidden');
          if (query.length < 3) {
            addressSuggestions.classList.add('hidden');
            return;
          }
          addressLoader.classList.remove('hidden');
          addressDebounceTimer = setTimeout(async () => {
            try {
              const response = await fetch(\`https://us1.locationiq.com/v1/autocomplete.php?key=\${CONFIG.locationIqApiKey}&q=\${encodeURIComponent(query)}&format=json&limit=5\`);
              if (!response.ok) throw new Error('Error API');
              const results = await response.json();
              addressSuggestions.innerHTML = '';
              addressLoader.classList.add('hidden');
              if (!results || results.length === 0) {
                addressSuggestions.innerHTML = '<div class="p-3 text-sm text-gray-600">No results found</div>';
                addressSuggestions.classList.remove('hidden');
                return;
              }
              results.forEach(result => {
                const div = document.createElement('div');
                div.className = 'p-3 border-b border-gray-200 hover:bg-olive/8 cursor-pointer text-sm transition font-medium';
                div.innerHTML = \`<strong class="text-gray-900">\${result.display_name.split(',')[0]}</strong><br><span class="text-xs text-gray-600">\${result.display_name}</span>\`;
                div.onclick = () => {
                  addressInput.value = result.display_name;
                  selectedAddress = { display_name: result.display_name, lat: result.lat, lon: result.lon };
                  addressSuggestions.classList.add('hidden');
                  addressSuccess.classList.remove('hidden');
                };
                addressSuggestions.appendChild(div);
              });
              addressSuggestions.classList.remove('hidden');
            } catch (error) {
              console.error(error);
              addressLoader.classList.add('hidden');
            }
          }, 500);
        });
      }
      function validateForm() {
        let isValid = true;
        const nameInput = reserveForm.querySelector('input[name="name"]');
        const nameError = reserveForm.querySelector('.name-error');
        if (nameInput.value.trim().length < 2) {
          nameInput.classList.add('border-error');
          nameError.classList.remove('hidden');
          isValid = false;
        } else {
          nameInput.classList.remove('border-error');
          nameError.classList.add('hidden');
        }
        const emailInput = reserveForm.querySelector('input[name="email"]');
        const emailError = reserveForm.querySelector('.email-error');
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          emailInput.classList.add('border-error');
          emailError.classList.remove('hidden');
          isValid = false;
        } else {
          emailInput.classList.remove('border-error');
          emailError.classList.add('hidden');
        }
        const phonePrefix = reserveForm.querySelector('select[name="phone_prefix"]');
        const phoneInput = reserveForm.querySelector('input[name="phone"]');
        const phoneError = reserveForm.querySelector('.phone-error');
        if (!phonePrefix.value || phoneInput.value.trim().length < 5) {
          phonePrefix.classList.add('border-error');
          phoneInput.classList.add('border-error');
          phoneError.classList.remove('hidden');
          isValid = false;
        } else {
          phonePrefix.classList.remove('border-error');
          phoneInput.classList.remove('border-error');
          phoneError.classList.add('hidden');
        }
        const countryInput = reserveForm.querySelector('input[name="country"]');
        const countryError = reserveForm.querySelector('.country-error');
        if (countryInput.value.trim().length < 2) {
          countryInput.classList.add('border-error');
          countryError.classList.remove('hidden');
          isValid = false;
        } else {
          countryInput.classList.remove('border-error');
          countryError.classList.add('hidden');
        }
        if (!selectedAddress) {
          addressInput.classList.add('border-error');
          addressError.classList.remove('hidden');
          isValid = false;
        } else {
          addressInput.classList.remove('border-error');
          addressError.classList.add('hidden');
        }
        const currencyRadios = reserveForm.querySelectorAll('input[name="currency"]');
        const currencyError = document.getElementById('currencyError');
        const currencySelected = Array.from(currencyRadios).some(r => r.checked);
        if (!currencySelected) {
          currencyError.classList.remove('hidden');
          isValid = false;
        } else {
          currencyError.classList.add('hidden');
        }
        return isValid;
      }
      if (reserveForm) {
        reserveForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (!validateForm()) {
            return;
          }
          const formData = new FormData(reserveForm);
          const currency = formData.get('currency');
          const email = formData.get('email');
          const clientData = {
            id: \`ORD-\${Date.now()}\`,
            name: formData.get('name'),
            email: email,
            phone: formData.get('phone_prefix') + formData.get('phone'),
            country: formData.get('country'),
            currency: currency,
            amount: 49,
            address: selectedAddress.display_name,
            timestamp: new Date().toISOString()
          };
          sessionStorage.setItem('miniwash_reservation', JSON.stringify(clientData));
          try {
            await emailjs.send(CONFIG.emailjsService, CONFIG.emailjsTemplate, {
              to_email: email,
              order_id: clientData.id,
              customer_name: clientData.name,
              amount: currency === 'EUR' ? '€49' : '$49',
              address: clientData.address,
              message: \`Your MINIWASH order #\${clientData.id} has been received. Proceeding to payment...\`
            });
          } catch (err) {
            console.warn('Email send failed:', err);
          }
          confirmReserveBtn.innerHTML = '⏳ Redirecting...';
          setTimeout(() => {
            window.location.href = ONRAMPER_URLS[currency];
          }, 1000);
        });
      }
      document.querySelectorAll('.testimonial-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const index = parseInt(dot.dataset.index);
          const testimonials = document.querySelectorAll('.testimonial');
          const dots = document.querySelectorAll('.testimonial-dot');
          testimonials.forEach((t, i) => {
            if(i === index) t.classList.remove('hidden');
            else t.classList.add('hidden');
          });
          dots.forEach((d, i) => {
            if(i === index) { 
              d.classList.remove('bg-gray-300'); 
              d.classList.add('bg-olive'); 
            }
            else { 
              d.classList.add('bg-gray-300'); 
              d.classList.remove('bg-olive'); 
            }
          });
        });
      });
    });
  </script>
</body>
</html>\`;

// ========================================
// WORKER LOGIC (OUTSIDE INDEX)
// ========================================

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
      // Serve main HTML page
      if (pathname === '/' || pathname === '') {
        return new Response(INDEX, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }

      // Address search API endpoint
      if (pathname === '/api/address-search') {
        const query = url.searchParams.get('q');
        if (!query) return new Response(JSON.stringify([]), { status: 400 });

        const response = await fetch(
          `https://us1.locationiq.com/v1/autocomplete.php?key=${env.LOCATION_IQ_KEY}&q=${encodeURIComponent(query)}&format=json&limit=5`
        );
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // 404 for unknown routes
      return new Response('Not Found', { status: 404 });

    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};
