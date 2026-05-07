// ReadySetMow.co — site interactivity + repeating content
(function () {
  const ICONS = {
    'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'map-pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'chevron-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>',
    'check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><polyline points="20 6 9 17 4 12"/></svg>',
    'star': '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="14" height="14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'zap': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    'calendar': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-5z"/></svg>',
    'message': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    'pin22': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'sparkles': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>'
  };

  // ---------- Services ----------
  const services = [
    { tag: 'Most popular', title: 'Weekly Mowing', desc: 'Same crew, same day, every week. Cut, edge, trim, blow.', price: '$45', unit: '/cut', featured: true },
    { tag: 'Flexible', title: 'Biweekly Lawn Care', desc: 'Every other week — perfect for slower-growing yards.', price: '$55', unit: '/cut' },
    { tag: 'Detail work', title: 'Edging & Trimming', desc: 'Crisp lines along walks, drives, beds, and fences.', price: '$25', unit: '+ add-on' },
    { tag: 'Spring & fall', title: 'Seasonal Cleanup', desc: 'Leaves, debris, stick pickup. Yard reset for the season.', price: '$120', unit: '+/visit' },
    { tag: 'No commitment', title: 'One-Time Cut', desc: 'Vacation cover, pre-event cleanup, or just a one-off.', price: '$65', unit: '+' },
    { tag: 'Commercial', title: 'Small Business Lawns', desc: 'Storefronts, offices, rentals. Reliable curb appeal.', price: 'Custom', unit: '' }
  ];
  document.getElementById('svcGrid').innerHTML = services.map(s => `
    <article class="rsm-svc ${s.featured ? 'rsm-svc-featured' : ''}">
      <span class="rsm-svc-tag">${s.tag}</span>
      <h3 class="rsm-svc-title">${s.title}</h3>
      <p class="rsm-svc-desc">${s.desc}</p>
      <div class="rsm-svc-foot">
        <span class="rsm-price">${s.price}<small>${s.unit}</small></span>
        <a href="#quote" class="rsm-svc-link">Get Quote ${ICONS['arrow-right']}</a>
      </div>
    </article>`).join('');

  // ---------- Why Us ----------
  const why = [
    { icon: 'zap', title: 'Fast response', desc: 'Quote replies within hours, most often the same day.' },
    { icon: 'calendar', title: 'Reliable schedule', desc: "Same crew, same day. We don't ghost." },
    { icon: 'shield', title: 'No contracts', desc: 'Skip a week. Pause for vacation. No fine print.' },
    { icon: 'message', title: 'Pro communication', desc: 'Text us. Real humans, quick replies.' },
    { icon: 'pin22', title: 'Neighborhood-focused', desc: 'We work routes street-by-street, not city-wide chaos.' },
    { icon: 'sparkles', title: 'Curb appeal', desc: 'Sharp edges, clean lines, blown-off walks every visit.' }
  ];
  document.getElementById('whyGrid').innerHTML = why.map(it => `
    <div class="rsm-why-item">
      <div class="rsm-why-ic">${ICONS[it.icon]}</div>
      <h3 class="rsm-why-title">${it.title}</h3>
      <p class="rsm-why-desc">${it.desc}</p>
    </div>`).join('');

  // ---------- Service Areas ----------
  const cities = [
    { name: 'Fishers', desc: 'Hamilton County · 46037 / 46038 / 46040', routes: 'Routes Tue / Thu' },
    { name: 'Noblesville', desc: 'Hamilton County · 46060 / 46062', routes: 'Routes Mon / Wed' },
    { name: 'Anderson', desc: 'Madison County · 46011 / 46012 / 46013', routes: 'Routes Wed / Fri' }
  ];
  document.getElementById('areasGrid').innerHTML = cities.map(c => `
    <div class="rsm-area">
      <div class="rsm-area-head">
        ${ICONS['map-pin']}
        <span class="rsm-area-routes">${c.routes}</span>
      </div>
      <h3 class="rsm-area-name">${c.name}</h3>
      <div class="rsm-area-state">Indiana</div>
      <p class="rsm-area-desc">${c.desc}</p>
      <a href="#quote" class="rsm-area-cta">Quote my street ${ICONS['arrow-right']}</a>
    </div>`).join('');

  // ---------- Testimonials ----------
  const quotes = [
    { quote: "We've had three lawn services in the last two years. ReadySetMow is the first one that actually shows up the day they say they will.", name: 'Jenna R.', city: 'Fishers', years: "Customer since '24" },
    { quote: 'Sharpest edge work I’ve seen on this block. Worth every penny.', name: 'Marcus T.', city: 'Noblesville', years: "Customer since '24" },
    { quote: 'Texted them at 9pm on a Tuesday. Quote in my inbox by morning. Booked.', name: 'Dana W.', city: 'Anderson', years: "Customer since '25" }
  ];
  document.getElementById('quotes').innerHTML = quotes.map(q => `
    <figure class="rsm-quote">
      <div class="rsm-stars">${ICONS.star.repeat(5)}</div>
      <blockquote>"${q.quote}"</blockquote>
      <figcaption>
        <div class="rsm-quote-name">${q.name} · ${q.city}</div>
        <div class="rsm-quote-years">${q.years}</div>
      </figcaption>
    </figure>`).join('');

  // ---------- FAQ ----------
  const faqs = [
    { q: 'Do you offer weekly mowing?', a: 'Yes — weekly is our most popular plan. Same crew, same day. Skip a week any time.' },
    { q: 'Do you serve my neighborhood?', a: "We currently route Anderson, Noblesville, and Fishers. Send us your address and we'll confirm in minutes." },
    { q: 'Can I request a one-time mow?', a: 'Absolutely. One-time cuts are great for vacations, before guests visit, or to test us out before going recurring.' },
    { q: 'Do you handle edging and trimming?', a: 'Every visit includes edging along walks and drives, trimming around fences and beds, and blowing off hard surfaces.' },
    { q: 'How do quotes work?', a: 'Free, no obligation. Send your address and any details — we reply same day with a flat per-cut price.' },
    { q: 'Can I text instead of calling?', a: 'Please do. Text (317) 555-MOWS — we usually reply within an hour during business hours.' }
  ];
  const faqList = document.getElementById('faqList');
  faqList.innerHTML = faqs.map((it, i) => `
    <div class="rsm-faq-item ${i === 0 ? 'open' : ''}" data-idx="${i}">
      <button class="rsm-faq-q" aria-expanded="${i === 0}"><span>${it.q}</span>${ICONS['chevron-down']}</button>
      <div class="rsm-faq-a" ${i === 0 ? '' : 'hidden'}>${it.a}</div>
    </div>`).join('');
  faqList.addEventListener('click', e => {
    const btn = e.target.closest('.rsm-faq-q');
    if (!btn) return;
    const item = btn.parentElement;
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    const ans = item.querySelector('.rsm-faq-a');
    if (open) ans.removeAttribute('hidden'); else ans.setAttribute('hidden', '');
  });

  // ---------- Mobile nav ----------
  const burger = document.getElementById('burger');
  const mnav = document.getElementById('mobileNav');
  burger.addEventListener('click', () => {
    const open = mnav.hasAttribute('hidden');
    if (open) { mnav.removeAttribute('hidden'); burger.setAttribute('aria-expanded', 'true'); }
    else { mnav.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); }
  });
  mnav.addEventListener('click', e => {
    if (e.target.tagName === 'A') { mnav.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); }
  });

  // ---------- Quote form ----------
  const form = document.getElementById('quoteForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    document.getElementById('quoteWrap').innerHTML = `
      <div class="rsm-quote-success">
        <div class="rsm-quote-success-ic">${ICONS.check}</div>
        <h2 class="display-md">You're in line.</h2>
        <p>We'll text you back same-day with a flat per-cut quote. Welcome to the route.</p>
        <a href="#quote" class="btn btn-outline" onclick="location.reload()">Submit another</a>
      </div>`;
  });
})();
