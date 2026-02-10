// 🔐 TU HTML COMPLETO AQUÍ (sin variables críticas)
const INDEX = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>MINIWASH® — Pureza y eficiencia urbana | Reserva 49€</title>
  <meta name="description" content="MINIWASH® — Mini lavadora plegable con desinfección UV. -50% agua, portátil y rápida. Ideal para bebés, viajeros y apartamentos. Reserva ahora 49€." />
  <meta name="keywords" content="mini lavadora, portátil, UV, desinfección, lavadora plegable, Miniwash, 49€" />
  <meta property="og:title" content="MINIWASH® — Pureza y eficiencia urbana" />
  <meta property="og:description" content="Mini lavadora plegable con desinfección UV. -50% agua, portátil y rápida. Reserva ahora 49€." />
  <meta property="og:image" content="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" />
  <meta property="og:type" content="product" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <!-- EmailJS -->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"><\/script>

  <link rel="preload" as="image" href="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" />
  <style>
    :root{
      --olive:#556B2F;
      --bg:#F9FBF9;
      --glass: rgba(255,255,255,0.75);
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
    .pulse-cta{transition:transform .18s ease, box-shadow .18s ease}
    .pulse-cta:active{transform:translateY(1px)}
    .skip{position:absolute;left:1rem;top:1rem;background:#111;color:#fff;padding:.5rem .75rem;border-radius:.5rem;z-index:60}
    .skip:not(:focus){clip:rect(0 0 0 0); clip-path: inset(50%); height:1px; overflow:hidden; position:absolute; white-space:nowrap; width:1px}
    .badge-uv{background:linear-gradient(180deg,rgba(86,124,36,0.12),rgba(86,124,36,0.04)); border:1px solid rgba(86,124,36,0.08); padding:.6rem 1rem; border-radius:1rem}
    .testimonial{min-height:120px}
    .spinner{display:inline-block;width:16px;height:16px;border:2px solid rgba(85,107,47,0.2);border-top-color:var(--olive);border-radius:50%;animation:spin 0.6s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
    
    #hero-slider::-webkit-scrollbar { display: none; }
    #hero-slider { -ms-overflow-style: none; scrollbar-width: none; }
    
    @media (min-width:1024px){ .hero-img{height:520px} }
    @media (max-width:640px){ .desktop-only{display:none} .mobile-only{display:block} }

  </style>

  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":"MINIWASH® Mini Lavadora Plegable",
    "image":["https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200"],
    "description":"Mini lavadora portátil plegable con luz UV para desinfección. Ahorro de agua, diseñada para prendas delicadas, bebés y viajeros.",
    "brand":{"@type":"Brand","name":"MINIWASH"},
    "offers":{
      "@type":"Offer",
      "url":"#store",
      "priceCurrency":"EUR",
      "price":"49.00",
      "availability":"https://schema.org/InStock",
      "priceValidUntil":"2026-12-31"
    }
  }
  <\/script>


</head>
<body>

  <a class="skip" href="#main">Saltar al contenido</a>

  <!-- NAV -->
  <nav class="fixed top-4 inset-x-4 z-50">
    <div class="max-w-[var(--content-width)] mx-auto glass-premium p-3 rounded-full flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <a aria-label="Inicio MINIWASH" class="text-xl font-extrabold tracking-tight uppercase">
          Miniwash<span class="text-olive">.</span>
        </a>
      </div>

      <div class="hidden md:flex items-center gap-3">
        <a data-reserva class="ml-3 bg-olive text-white px-4 py-2 rounded-full text-sm font-bold uppercase pulse-cta shadow-sm" id="nav-buy">Reservar</a>
      </div>

      <div class="md:hidden flex items-center gap-2">
        <a data-reserva class="bg-olive text-white px-3 py-2 rounded-full text-xs font-bold uppercase pulse-cta">Reservar</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <main id="main" class="pt-28">
    <header class="max-w-[var(--content-width)] mx-auto px-6">
      <section class="grid lg:grid-cols-2 gap-10 items-center py-12">
        <div>
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            EFICIENCIA <span class="text-olive">SIN LÍMITES</span>
          </h1>
          <p class="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
            MINIWASH®: mini lavadora plegable con desinfección UV. Consume hasta <strong>-50% agua</strong>, protege prendas delicadas y viaja contigo. Diseño urbano pensado para resultados profesionales.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a id="cta-primary" data-reserva class="bg-olive text-white px-6 py-3 rounded-2xl font-bold text-sm uppercase pulse-cta focus-ring" data-variant="hero_A">RESERVAR 49€</a>
            <button id="cta-demo" class="border border-gray-200 px-5 py-3 rounded-2xl text-sm font-semibold focus-ring" aria-controls="videoModal">VER DEMO RÁPIDA</button>
          </div>

          <div class="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div class="badge-uv">
              <div class="text-[10px] uppercase tracking-wider font-semibold text-olive">Consumo Consciente</div>
              <div class="font-black text-2xl">-50% Agua</div>
            </div>
            <div class="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2L15 8H9L12 2Z" fill="#556B2F"/><\/svg>
              <span>Entrega cuidada, seguimiento incluido • Compra con tranquilidad </span>
            </div>
          </div>

          <div class="mt-6 flex gap-4 items-center text-xs text-gray-500">
            <div class="flex items-center gap-2"><strong>Pago seguro</strong> • Tarjeta / Bizum</div>
            <div class="hidden sm:block">•</div>
            <div class="hidden sm:flex items-center gap-2">Opiniones verificadas ★★★★☆ (4.6)</div>
          </div>
        </div>

        <!-- HERO IMAGE -->
        <div class="relative group">
          <div id="hero-slider" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-hero shadow-xl" style="scrollbar-width: none; -ms-overflow-style: none;">
            
            <div class="min-w-full snap-center h-[350px] lg:h-[520px]">
              <img src="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Miniwash 1">
            </div>

            <div class="min-w-full snap-center h-[350px] lg:h-[520px]">
              <img src="https://tu-url-aqui.com/foto2.jpg" class="w-full h-full object-cover" alt="Miniwash 2">
            </div>

          </div>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
             <div class="w-2 h-2 rounded-full bg-white shadow"><\/div>
             <div class="w-2 h-2 rounded-full bg-white/50 shadow"><\/div>
          </div>

          <div class="absolute -top-6 -left-4 hidden md:block bg-white p-4 rounded-2xl shadow-lg z-30">
            <p class="text-[10px] font-bold text-olive uppercase tracking-widest mb-1 italic">Higiene Profesional</p>
            <p class="text-2xl font-black">UV + Ciclos Rápidos</p>
          </div>
        </div>
      </section>
    </header>

    <!-- FEATURES & PRICE -->
    <section id="features" class="py-12 bg-white">
      <div class="max-w-[var(--content-width)] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-extrabold">Diseñada para el <span class="italic font-light">estilo de vida móvil</span></h2>
          <p class="text-gray-600">No es sólo portabilidad; es libertad. Ideal para profesionales, viajeros, familias con bebés y cualquier persona que exija higiene en prendas pequeñas.</p>

          <ul class="grid sm:grid-cols-2 gap-4 mt-4">
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">01</div>
                <div>
                  <h4 class="font-bold">Ecosistema Plegable</h4>
                  <p class="text-sm text-gray-500">Ocupa menos que una caja de zapatos. Fácil guardar y transportar.</p>
                </div>
              </div>
            </li>
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">02</div>
                <div>
                  <h4 class="font-bold">Higiene Avanzada</h4>
                  <p class="text-sm text-gray-500">Luz UV integrada para desinfección complementaria de prendas pequeñas.</p>
                </div>
              </div>
            </li>
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">03</div>
                <div>
                  <h4 class="font-bold">Ciclos Rápidos</h4>
                  <p class="text-sm text-gray-500">Ciclos diseñados para delicados, bebé y prendas esenciales en menos de 20 min.</p>
                </div>
              </div>
            </li>
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">04</div>
                <div>
                  <h4 class="font-bold">Eficiencia Hídrica</h4>
                  <p class="text-sm text-gray-500">Reduce consumo hasta un 50% frente a lavadoras convencionales para cargas pequeñas.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- PRICE CARD -->
        <aside id="store" class="p-8 bg-[#F0F4F0] rounded-[2rem] text-center shadow-md">
          <div aria-hidden class="text-sm uppercase tracking-widest text-gray-400">Oferta por tiempo limitado</div>
          <div class="text-5xl font-black text-olive my-4 italic">49€</div>
          <div class="text-xs uppercase font-bold tracking-[0.2em] text-gray-400 mb-6">Inversión única. Ahorro a futuro.</div>

          <button class="w-full bg-olive text-white py-4 rounded-2xl font-black text-lg shadow-xl pulse-cta focus-ring" id="storeReserveBtn">RESERVAR AHORA</button>
          <p class="mt-4 text-[13px] text-gray-500">Entrega cuidada, seguimiento incluido •  Compra con tranquilidad • Pago seguro</p>

          <div class="mt-6 text-sm text-gray-600">
            <div>Stock reservado: <strong id="stockCount">25</strong></div>
            <div class="mt-3 text-xs text-rose-600" id="scarcityText" aria-live="polite"><\/div>
          </div>

          <div class="mt-6 text-xs text-gray-500">
            <strong>Formas de pago:</strong>
            <div class="flex items-center justify-center gap-3 mt-2">
              <img src="https://i.postimg.cc/K4tbRQxs/logo-monpay.png" alt="Monpay" class="w-16 h-auto" />
              <img src="https://i.postimg.cc/Xp7nmd0Y/helio.avif" alt="Helio" class="w-16 h-auto" />
              <img src="https://i.postimg.cc/1g12h1NP/euro-and-dollar-money-logo-icon-sign-symbol-vector-removebg-preview.png" alt="Euro y Dólar" class="w-16 h-auto" />
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- USE CASES -->
    <section id="usos" class="py-12 max-w-[var(--content-width)] mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-6">
        
        <article class="p-8 border border-gray-100 rounded-[1.5rem] bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
            <img src="https://i.postimg.cc/zXDP38F6/Save_Clip_App_526697450_1305439328254470_4186378348620069982_n.jpg" alt="Casa" class="w-full h-full object-cover scale-110" />
          </div>
          <h3 class="font-bold text-2xl">Urbano</h3>
          <p class="text-sm text-gray-500 mt-2">Ideal para apartamentos y estudiantes que necesitan lavados rápidos sin ocupar espacio.</p>
        </article>
        
        <article class="p-8 border border-gray-100 rounded-[1.5rem] bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
            <img src="https://i.postimg.cc/Kvcs4xDV/tips_compra.jpg" alt="Caravana" class="w-full h-full object-cover scale-110" />
          </div>
          <h3 class="font-bold text-2xl">Aventura</h3>
          <p class="text-sm text-gray-500 mt-2">Perfecta para caravanas, camping y vida nómada.</p>
        </article>
        
        <article class="p-8 border border-gray-100 rounded-[1.5rem] bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
            <img src="https://i.postimg.cc/xTjFqnPr/portrait_young_family.jpg" alt="Bebé" class="w-full h-full object-cover scale-110" />
          </div>
          <h3 class="font-bold text-2xl">Bebé</h3>
          <p class="text-sm text-gray-500 mt-2">Lavados rápidos y separados para prendas de bebé sin contaminar la colada general.</p>
        </article>
        
      </div>

      <!-- TESTIMONIOS -->
      <section id="testimonios" class="py-12 bg-white mt-12">
        <div class="max-w-[var(--content-width)] mx-auto px-6">
          <h3 class="text-2xl font-extrabold mb-6">Lo que dicen</h3>
          <div class="relative">
            <div id="testimonials" class="flex gap-4 overflow-hidden">
              <blockquote class="testimonial p-6 bg-[#f7faf6] rounded-xl min-w-full">
                <p class="text-gray-700">"Compacta y potente — lavar los bodies del bebé en 15 min cambió las mañanas." <span class="text-olive font-bold">— María, Madrid</span><\/p>
              </blockquote>
              <blockquote class="testimonial p-6 bg-[#f7faf6] rounded-xl min-w-full hidden">
                <p class="text-gray-700">"La llevé al camping y fue impecable. Agua y espacio ahorrados." <span class="text-olive font-bold">— Hugo, Valencia</span><\/p>
              </blockquote>
              <blockquote class="testimonial p-6 bg-[#f7faf6] rounded-xl min-w-full hidden">
                <p class="text-gray-700">"Reservé una para la oficina — toallas y uniformes pequeños listos al instante." <span class="text-olive font-bold">— Laura, Barcelona</span><\/p>
              </blockquote>
            </div>

            <div class="flex gap-2 mt-3">
              <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300" data-index="0" aria-label="testimonio 1"><\/button>
              <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300/60" data-index="1" aria-label="testimonio 2"><\/button>
              <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300/60" data-index="2" aria-label="testimonio 3"><\/button>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="py-12 max-w-[var(--content-width)] mx-auto px-6">
        <h3 class="text-2xl font-extrabold mb-6">Preguntas frecuentes</h3>
        <div class="space-y-3">
          <details class="p-4 bg-white border border-gray-100 rounded-lg">
            <summary class="font-semibold">¿Cuánto dura un ciclo de desinfección?</summary>
            <div class="mt-2 text-sm text-gray-600">Ciclos cortos (10–20 min) para prendas pequeñas; el modo UV se puede activar al final del ciclo.</div>
          </details>
          <details class="p-4 bg-white border border-gray-100 rounded-lg">
            <summary class="font-semibold">¿Puedo usar detergente normal?</summary>
            <div class="mt-2 text-sm text-gray-600">Sí — recomendamos detergentes líquidos para cargas pequeñas. No usar blanqueantes agresivos.</div>
          </details>
          <details class="p-4 bg-white border border-gray-100 rounded-lg">
            <summary class="font-semibold">Soporte y Confianza</summary>
            <div class="mt-2 text-sm text-gray-600"> Compra con tranquilidad; soporte vía email y teléfono. Documentación incluida en el embalaje.</div>
          </details>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="py-8 border-t border-gray-100 mt-12">
        <div class="max-w-[var(--content-width)] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-sm text-gray-600">© <strong>MINIWASH</strong> — Todos los derechos reservados</div>
          <div class="flex gap-4 items-center text-sm text-gray-500">
            <a href="#" class="hover:underline">Política de envío</a>
            <a href="#" class="hover:underline">Soporte y Confianza</a>
          </div>
        </div>
      </footer>
    </section>
  </main>

  <!-- RESERVATION / CHECKOUT MODAL -->
  <div id="reserveModal"
     class="fixed inset-0 z-60 hidden items-center justify-center bg-olive/20 backdrop-blur-sm p-4"
     role="dialog" aria-modal="true" aria-hidden="true">
    <div class="bg-[#F7FAF7] rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
      <button id="closeModal" aria-label="cerrar" class="absolute right-4 top-4 text-gray-500 text-2xl font-bold">✕</button>
      <h4 class="text-xl font-extrabold mb-2">Reserva tu MINIWASH — 49€</h4>
      <p class="text-sm text-gray-600 mb-6">Rellena los datos y te enviaremos confirmación y opciones de pago seguras.</p>

      <form id="reserveForm" class="space-y-4" autocomplete="on" novalidate>
        <div>
          <label class="text-xs font-semibold">Nombre *</label>
          <input name="name" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus-ring" placeholder="Ej. Ana López" />
        </div>
        <div>
          <label class="text-xs font-semibold">Email *</label>
          <input name="email" type="email" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus-ring" placeholder="tu@correo.com" />
        </div>
        <div>
          <label class="text-xs font-semibold">Teléfono</label>
          <input name="phone" inputmode="tel" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus-ring" placeholder="+34 6XX XXX XXX" />
        </div>
        <div>
          <label class="text-xs font-semibold">País *</label>
          <input name="country" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus-ring" placeholder="Ej. España" />
        </div>

        <!-- DIRECCIÓN CON AUTOCOMPLETE -->
        <div>
          <label class="text-xs font-semibold">Dirección/Ubicación *</label>
          <div class="relative">
            <input 
              id="addressInput" 
              name="address" 
              required 
              class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus-ring" 
              placeholder="Escribe tu dirección o ciudad"
              autocomplete="off"
            />
            <div id="addressLoader" class="absolute right-3 top-3 hidden">
              <div class="spinner"><\/div>
            </div>
          </div>
          <!-- Sugerencias de dirección -->
          <div id="addressSuggestions" class="mt-2 grid gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-2 bg-white hidden"><\/div>
          <div id="addressError" class="text-red-600 text-xs mt-1 hidden">✗ Selecciona una dirección válida de las opciones</div>
          <div id="addressSuccess" class="text-green-600 text-xs mt-1 hidden">✓ Dirección confirmada</div>
        </div>

        <!-- MONEDA -->
        <div>
          <label class="text-xs font-semibold">Moneda *</label>
          <div class="mt-3 flex gap-4">
            <!-- EUR -->
            <label class="cursor-pointer flex items-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-blue-50 transition flex-1">
              <input type="radio" name="currency" value="EUR" required class="peer" />
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-olive">€</span>
                <div>
                  <div class="font-bold">EUR</div>
                  <div class="text-xs text-gray-500">49€</div>
                </div>
              </div>
            </label>

            <!-- USD -->
            <label class="cursor-pointer flex items-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-blue-50 transition flex-1">
              <input type="radio" name="currency" value="USD" class="peer" />
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-olive">$</span>
                <div>
                  <div class="font-bold">USD</div>
                  <div class="text-xs text-gray-500">$49</div>
                </div>
              </div>
            </label>
          </div>
          <div id="currencyError" class="text-red-600 text-xs mt-2 hidden">✗ Selecciona una moneda</div>
        </div>

        <!-- INFO BLOCKCHAIN -->
        <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p class="text-xs text-blue-800">
            <strong>🔐 Pago seguro:</strong> Tu pago se verificará automáticamente en blockchain después de completar la transacción en Onramper.
          </p>
        </div>

        <div class="flex gap-3 pt-4">
          <button type="submit" id="confirmReserve" class="flex-1 bg-olive text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
            Confirmar y pagar
          </button>
          <button type="button" id="payLater" class="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
            Pagar después
          </button>
        </div>

        <p class="text-xs text-gray-500 text-center">
          Al reservar aceptas <a href="#" class="text-olive hover:underline">Términos y condiciones</a>
        </p>
      </form>
    </div>
  </div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const ONRAMPER_URLS = {
      EUR: 'https://buy.onramper.com/?defaultAmount=49&fiatAmount=49&defaultFiat=EUR&defaultCrypto=USDT_POLYGON&address=0xecfdaf07bcb29f3eeb07bafefdff67ca25dffcd5&isAmountEditable=false&isAddressEditable=false',
      USD: 'https://buy.onramper.com/?defaultAmount=49&fiatAmount=49&defaultFiat=USD&defaultCrypto=USDT_POLYGON&address=0xecfdaf07bcb29f3eeb07bafefdff67ca25dffcd5&isAmountEditable=false&isAddressEditable=false'
    };

    const modal = document.getElementById('reserveModal');
    const closeBtn = document.getElementById('closeModal');
    const reserveForm = document.getElementById('reserveForm');
    const confirmReserveBtn = document.getElementById('confirmReserve');
    const payLaterBtn = document.getElementById('payLater');
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
      if (reserveForm) reserveForm.reset();
      selectedAddress = null;
      addressSuggestions.innerHTML = '';
      addressSuggestions.classList.add('hidden');
    }

    document.querySelectorAll('[data-reserva]').forEach(btn => {
      btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (payLaterBtn) payLaterBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // ADDRESS AUTOCOMPLETE - LLAMADAS AL WORKER
    if (addressInput) {
      addressInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        clearTimeout(addressDebounceTimer);

        if (query.length < 3) {
          addressSuggestions.classList.add('hidden');
          return;
        }

        addressLoader.classList.remove('hidden');
        addressError.classList.add('hidden');
        addressSuccess.classList.add('hidden');

        addressDebounceTimer = setTimeout(async () => {
          try {
            // 📡 FETCH al worker (ruta privada)
            const response = await fetch('/api/address-search?q=' + encodeURIComponent(query));
            if (!response.ok) throw new Error('Error API');
            
            const results = await response.json();
            addressSuggestions.innerHTML = '';
            addressLoader.classList.add('hidden');

            if (!results || results.length === 0) {
              addressSuggestions.innerHTML = '<div class="p-3 text-sm text-gray-500">No se encontraron resultados.</div>';
              addressSuggestions.classList.remove('hidden');
              return;
            }

            results.forEach(result => {
              const div = document.createElement('div');
              div.className = 'p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-sm';
              div.innerHTML = '<strong>' + result.display_name.split(',')[0] + '</strong><br><span class="text-xs text-gray-500">' + result.display_name + '</span>';
              div.onclick = () => {
                addressInput.value = result.display_name;
                selectedAddress = {
                  display_name: result.display_name,
                  lat: result.lat,
                  lon: result.lon
                };
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

    // SUBMIT FORM
    if (reserveForm) {
      reserveForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!selectedAddress) {
          addressError.classList.remove('hidden');
          return;
        }

        const formData = new FormData(reserveForm);
        const currency = formData.get('currency');
        
        if (!currency) {
          document.getElementById('currencyError').classList.remove('hidden');
          return;
        }

        const clientData = {
          id: 'ORD-' + Date.now(),
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          country: formData.get('country'),
          currency: currency,
          amount: 49,
          address: selectedAddress.display_name,
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        
        sessionStorage.setItem('miniwash_reservation', JSON.stringify(clientData));

        // 📡 ENVIAR AL WORKER (BIN 1)
        try {
          await fetch('/api/save-reservation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientData)
          });
        } catch (err) {
          console.warn('Error guardando reserva:', err);
        }

        confirmReserveBtn.innerHTML = '⏳ Redirigiendo...';
        
        setTimeout(() => {
          window.location.href = ONRAMPER_URLS[currency];
        }, 500);
      });
    }

    // TESTIMONIOS
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
            if(i === index) { d.classList.remove('bg-gray-300/60'); d.classList.add('bg-gray-300'); }
            else { d.classList.add('bg-gray-300/60'); d.classList.remove('bg-gray-300'); }
        });
      });
    });

  });
<\/script>

</body>
</html>`;

// 🔐 VARIABLES SECRETAS (NUNCA se ven en cliente)
const CONFIG = {
  locationIqApiKey: 'pk_5e06b6a83b83a',
  jsonBinReservasId: '6989b4c943b1c97be971665c', // BIN 1
  jsonBinPagosId: '6989b551ae596e708f1d3940',    // BIN 2
  jsonBinApiKey: '$2a$10$B2cNnu655L5eJEmbC5RS7euMLyb9jmsdGmsvyxWWVb6bclH/0D2VS'
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 🛡️ RUTAS VIRTUALES PRIVADAS
  if (pathname === '/api/address-search') {
    return handleAddressSearch(request, url);
  }
  if (pathname === '/api/save-reservation') {
    return handleSaveReservation(request);
  }
  if (pathname === '/api/save-payment') {
    return handleSavePayment(request);
  }

  // 📄 Por defecto, sirve el index (SPA)
  return new Response(INDEX, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

// 📍 RUTA 1: Búsqueda de direcciones (LocationIQ)
async function handleAddressSearch(request, url) {
  const query = url.searchParams.get('q');
  
  if (!query) return new Response(JSON.stringify([]), { status: 400 });
  
  try {
    const response = await fetch(
      `https://us1.locationiq.com/v1/autocomplete.php?key=${CONFIG.locationIqApiKey}&q=${encodeURIComponent(query)}&format=json&limit=5`
    );
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// 💾 RUTA 2: Guardar reserva (BIN 1) - ANTES DE PAGAR
async function handleSaveReservation(request) {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  
  try {
    const clientData = await request.json();
    
    // 📤 Guardar en JSONBin BIN 1 (Reservas sin pagar)
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${CONFIG.jsonBinReservasId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': CONFIG.jsonBinApiKey
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          order: clientData,
          status: 'pending_payment'
        })
      }
    );

    if (!response.ok) throw new Error('JSONBin error');

    return new Response(JSON.stringify({ ok: true, bin: 'reservas' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Save error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// 💳 RUTA 3: Guardar pago (BIN 2) - DESPUÉS DE PAGAR
async function handleSavePayment(request) {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  
  try {
    const paymentData = await request.json();
    
    // 📤 Guardar en JSONBin BIN 2 (Pagos completados)
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${CONFIG.jsonBinPagosId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': CONFIG.jsonBinApiKey
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          order: paymentData,
          status: 'payment_completed'
        })
      }
    );

    if (!response.ok) throw new Error('JSONBin error');

    return new Response(JSON.stringify({ ok: true, bin: 'pagos' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Payment save error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
