// 🔐 TU HTML COMPLETO AQUÍ
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
            <a id="cta-primary" data-reserva class="bg-olive text-white px-6 py-3 rounded-2xl font-bold text-sm uppercase pulse-cta focus-ring">RESERVAR 49€</a>
            <button id="cta-demo" class="border border-gray-200 px-5 py-3 rounded-2xl text-sm font-semibold focus-ring">VER DEMO RÁPIDA</button>
          </div>
          <div class="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div class="badge-uv">
              <div class="text-[10px] uppercase tracking-wider font-semibold text-olive">Consumo Consciente</div>
              <div class="font-black text-2xl">-50% Agua</div>
            </div>
            <div class="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2L15 8H9L12 2Z" fill="#556B2F"/><\/svg>
              <span>Entrega cuidada, seguimiento incluido</span>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div id="hero-slider" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-hero shadow-xl">
            <div class="min-w-full snap-center h-[350px] lg:h-[520px]">
              <img src="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Miniwash 1">
            </div>
            <div class="min-w-full snap-center h-[350px] lg:h-[520px]">
              <img src="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Miniwash 2">
            </div>
          </div>
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
             <div class="w-2 h-2 rounded-full bg-white shadow"><\/div>
             <div class="w-2 h-2 rounded-full bg-white/50 shadow"><\/div>
          </div>
        </div>
      </section>
    </header>

    <section id="features" class="py-12 bg-white">
      <div class="max-w-[var(--content-width)] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-extrabold">Diseñada para el <span class="italic font-light">estilo de vida móvil</span></h2>
          <p class="text-gray-600">No es sólo portabilidad; es libertad.</p>
          <ul class="grid sm:grid-cols-2 gap-4 mt-4">
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">01</div>
                <div>
                  <h4 class="font-bold">Plegable</h4>
                  <p class="text-sm text-gray-500">Ocupa menos que una caja de zapatos.</p>
                </div>
              </div>
            </li>
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">02</div>
                <div>
                  <h4 class="font-bold">Higiene UV</h4>
                  <p class="text-sm text-gray-500">Desinfección integrada.</p>
                </div>
              </div>
            </li>
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">03</div>
                <div>
                  <h4 class="font-bold">Rápido</h4>
                  <p class="text-sm text-gray-500">Ciclos en menos de 20 min.</p>
                </div>
              </div>
            </li>
            <li class="p-4 card-radius border border-gray-100 glass-premium">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 flex items-center justify-center bg-olive/10 rounded-lg text-olive font-bold">04</div>
                <div>
                  <h4 class="font-bold">Eficiente</h4>
                  <p class="text-sm text-gray-500">-50% agua.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <aside id="store" class="p-8 bg-[#F0F4F0] rounded-[2rem] text-center shadow-md">
          <div class="text-sm uppercase tracking-widest text-gray-400">Oferta por tiempo limitado</div>
          <div class="text-5xl font-black text-olive my-4">49€</div>
          <button class="w-full bg-olive text-white py-4 rounded-2xl font-black text-lg shadow-xl pulse-cta" id="storeReserveBtn">RESERVAR AHORA</button>
          <p class="mt-4 text-[13px] text-gray-500">Pago seguro • Entrega cuidada</p>
        </aside>
      </div>
    </section>

    <footer class="py-8 border-t border-gray-100 mt-12 max-w-[var(--content-width)] mx-auto px-6">
      <div class="text-sm text-gray-600">© <strong>MINIWASH</strong> — Todos los derechos reservados</div>
    </footer>
  </main>

  <!-- MODAL -->
  <div id="reserveModal" class="fixed inset-0 z-60 hidden items-center justify-center bg-olive/20 backdrop-blur-sm p-4" role="dialog" aria-modal="true">
    <div class="bg-[#F7FAF7] rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
      <button id="closeModal" class="absolute right-4 top-4 text-gray-500 text-2xl font-bold">✕</button>
      <h4 class="text-xl font-extrabold mb-2">Reserva tu MINIWASH — 49€</h4>
      <p class="text-sm text-gray-600 mb-6">Rellena los datos y te enviaremos confirmación.</p>

      <form id="reserveForm" class="space-y-4" autocomplete="on" novalidate>
        <div>
          <label class="text-xs font-semibold">Nombre *</label>
          <input name="name" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="Ej. Ana López" />
        </div>
        <div>
          <label class="text-xs font-semibold">Email *</label>
          <input name="email" type="email" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="tu@correo.com" />
        </div>
        <div>
          <label class="text-xs font-semibold">Teléfono</label>
          <input name="phone" inputmode="tel" class="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="+34 6XX XXX XXX" />
        </div>
        <div>
          <label class="text-xs font-semibold">País *</label>
          <input name="country" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="Ej. España" />
        </div>

        <div>
          <label class="text-xs font-semibold">Dirección *</label>
          <div class="relative">
            <input id="addressInput" name="address" required class="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="Escribe tu dirección" autocomplete="off" />
            <div id="addressLoader" class="absolute right-3 top-3 hidden"><div class="spinner"><\/div></div>
          </div>
          <div id="addressSuggestions" class="mt-2 grid gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-2 bg-white hidden"><\/div>
          <div id="addressError" class="text-red-600 text-xs mt-1 hidden">✗ Selecciona una dirección</div>
          <div id="addressSuccess" class="text-green-600 text-xs mt-1 hidden">✓ Dirección confirmada</div>
        </div>

        <div>
          <label class="text-xs font-semibold">Moneda *</label>
          <div class="mt-3 flex gap-4">
            <label class="cursor-pointer flex items-center gap-2 p-3 border border-gray-300 rounded-lg flex-1">
              <input type="radio" name="currency" value="EUR" required />
              <span>€ EUR (49€)</span>
            </label>
            <label class="cursor-pointer flex items-center gap-2 p-3 border border-gray-300 rounded-lg flex-1">
              <input type="radio" name="currency" value="USD" />
              <span>$ USD ($49)</span>
            </label>
          </div>
        </div>

        <div class="flex gap-3 pt-4">
          <button type="submit" id="confirmReserve" class="flex-1 bg-olive text-white py-3 rounded-lg font-bold">Confirmar y pagar</button>
          <button type="button" id="payLater" class="flex-1 border border-gray-300 py-3 rounded-lg font-semibold">Pagar después</button>
        </div>
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
    }

    document.querySelectorAll('[data-reserva]').forEach(btn => {
      btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (payLaterBtn) payLaterBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // AUTOCOMPLETE DE DIRECCIONES
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
            const response = await fetch('/api/address-search?q=' + encodeURIComponent(query));
            if (!response.ok) throw new Error('Error');
            const results = await response.json();
            
            addressSuggestions.innerHTML = '';
            addressLoader.classList.add('hidden');

            if (!results || results.length === 0) {
              addressSuggestions.innerHTML = '<div class="p-3 text-sm">No encontrado</div>';
              addressSuggestions.classList.remove('hidden');
              return;
            }

            results.forEach(result => {
              const div = document.createElement('div');
              div.className = 'p-3 border-b hover:bg-gray-50 cursor-pointer text-sm';
              div.innerHTML = result.display_name;
              div.onclick = () => {
                addressInput.value = result.display_name;
                selectedAddress = result;
                addressSuggestions.classList.add('hidden');
                addressSuccess.classList.remove('hidden');
              };
              addressSuggestions.appendChild(div);
            });
            addressSuggestions.classList.remove('hidden');
          } catch (error) {
            addressLoader.classList.add('hidden');
          }
        }, 500);
      });
    }

    // SUBMIT DEL FORMULARIO
    if (reserveForm) {
      reserveForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!selectedAddress) {
          addressError.classList.remove('hidden');
          return;
        }

        const formData = new FormData(reserveForm);
        const currency = formData.get('currency');

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
          status: 'pending_payment'
        };

        // Guardar en sessionStorage
        sessionStorage.setItem('miniwash_reservation', JSON.stringify(clientData));

        // 📡 GUARDAR EN BIN 1 (reserva sin pagar)
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
        
        // Redirigir a Onramper para pagar
        setTimeout(() => {
          window.location.href = ONRAMPER_URLS[currency];
        }, 500);
      });
    }
  });
<\/script>

</body>
</html>`;

// 🔐 CONFIGURACIÓN PRIVADA (NUNCA se ve en cliente)
const CONFIG = {
  locationIqApiKey: 'pk_5e06b6a83b83a',
  jsonBinReservasId: '6989b4c943b1c97be971665c',  // BIN 1: Reservas SIN PAGAR
  jsonBinPagosId: '6989b551ae596e708f1d3940',     // BIN 2: Pagos COMPLETADOS
  jsonBinApiKey: '$2a$10$B2cNnu655L5eJEmbC5RS7euMLyb9jmsdGmsvyxWWVb6bclH/0D2VS',
  emailjsServiceId: 'service_oplyt2g',
  emailjsTemplateId: 'template_qyj8ure',
  emailjsPublicKey: 'reJMUB5suajjDVUYf'
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

// ========================================
// 📍 RUTA 1: Búsqueda de direcciones
// ========================================
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

// ========================================
// 💾 RUTA 2: Guardar RESERVA (BIN 1)
// Se llama CUANDO EL CLIENTE PRESIONA "Confirmar y pagar"
// ANTES de redirigir a Onramper
// ========================================
async function handleSaveReservation(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  
  try {
    const clientData = await request.json();
    
    // 📤 GUARDAR EN BIN 1 (JSONBin - Reservas sin pagar)
    const binResponse = await fetch(
      `https://api.jsonbin.io/v3/b/${CONFIG.jsonBinReservasId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': CONFIG.jsonBinApiKey
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          order: clientData,
          status: 'pending_payment',
          saved_at: new Date().toLocaleString('es-ES')
        })
      }
    );

    if (!binResponse.ok) {
      throw new Error('Error al guardar en JSONBin');
    }

    console.log('✅ Reserva guardada en BIN 1');

    return new Response(JSON.stringify({ 
      ok: true, 
      message: 'Reserva guardada. Redirigiendo a pago...',
      bin: 'reservas'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('❌ Error guardando reserva:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// ========================================
// 💳 RUTA 3: Guardar PAGO (BIN 2) + ENVIAR EMAIL
// Se llama DESPUÉS de que Onramper confirma el pago
// EL CLIENTE LLAMA A ESTO desde /confirmation o webhook
// ========================================
async function handleSavePayment(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  
  try {
    const paymentData = await request.json();
    
    // ===============================================
    // 1️⃣ GUARDAR EN BIN 2 (JSONBin - Pagos completados)
    // ===============================================
    const binResponse = await fetch(
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
          status: 'payment_completed',
          paid_at: new Date().toLocaleString('es-ES'),
          transaction_hash: paymentData.txHash || 'pending_confirmation'
        })
      }
    );

    if (!binResponse.ok) {
      throw new Error('Error al guardar pago en JSONBin');
    }

    console.log('✅ Pago guardado en BIN 2');

    // ===============================================
    // 2️⃣ ENVIAR EMAIL AL CLIENTE (EmailJS)
    // ===============================================
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: CONFIG.emailjsServiceId,
        template_id: CONFIG.emailjsTemplateId,
        user_id: CONFIG.emailjsPublicKey,
        template_params: {
          to_email: paymentData.email,
          to_name: paymentData.name,
          order_id: paymentData.id,
          amount: paymentData.currency === 'EUR' ? '49€' : '$49',
          currency: paymentData.currency,
          address: paymentData.address,
          transaction_hash: paymentData.txHash || 'pending',
          message: `Tu pedido #${paymentData.id} ha sido confirmado. Tu MINIWASH está siendo preparado para envío.`
        }
      })
    });

    if (!emailResponse.ok) {
      console.warn('⚠️ Error al enviar email, pero el pago se guardó');
    } else {
      console.log('✅ Email enviado al cliente');
    }

    // ===============================================
    // 3️⃣ RESPUESTA AL CLIENTE
    // ===============================================
    return new Response(JSON.stringify({ 
      ok: true, 
      message: 'Pago guardado y email enviado',
      order_id: paymentData.id,
      bin: 'pagos'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('❌ Error procesando pago:', err);
    return new Response(JSON.stringify({ 
      ok: false,
      error: err.message 
    }), { status: 500 });
  }
}
