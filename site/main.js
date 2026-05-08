// ReadySetMow.co — interactive bits only (FAQ accordion, mobile nav, quote form)
(function () {
  // ---------- FAQ accordion ----------
  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqList.addEventListener('click', e => {
      const btn = e.target.closest('.rsm-faq-q');
      if (!btn) return;
      const item = btn.parentElement;
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      const ans = item.querySelector('.rsm-faq-a');
      if (open) ans.removeAttribute('hidden'); else ans.setAttribute('hidden', '');
    });
  }

  // ---------- Mobile nav ----------
  const burger = document.getElementById('burger');
  const mnav = document.getElementById('mobileNav');
  if (burger && mnav) {
    burger.addEventListener('click', () => {
      const willOpen = mnav.hasAttribute('hidden');
      if (willOpen) { mnav.removeAttribute('hidden'); burger.setAttribute('aria-expanded', 'true'); }
      else { mnav.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); }
    });
    mnav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        mnav.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------- Quote form ----------
  const API_ENDPOINT = '/api/quote';

  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const name    = document.getElementById('qName').value.trim();
      const phone   = document.getElementById('qPhone').value.trim();
      const email   = document.getElementById('qEmail').value.trim();
      const address = document.getElementById('qAddr').value.trim();
      const city    = document.getElementById('qCity').value;
      const service = document.getElementById('qSvc').value;
      const sched   = document.querySelector('input[name="sched"]:checked')?.nextElementSibling?.textContent || 'Unknown';
      const contact = document.querySelector('input[name="contact"]:checked')?.nextElementSibling?.textContent || 'Unknown';
      const notes   = document.getElementById('qNotes').value.trim();

      const text = [
        '*🌿 New ReadySetMow Quote Request*',
        `*Name:* ${name}`,
        `*Phone:* ${phone}`,
        `*Email:* ${email}`,
        `*Address:* ${address}, ${city}`,
        `*Service:* ${service}`,
        `*Schedule:* ${sched}`,
        `*Preferred contact:* ${contact}`,
        notes ? `*Notes:* ${notes}` : null,
      ].filter(Boolean).join('\n');

      try {
        await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, email, address, city, service, sched, contact, notes }),
        });
      } catch (_) {
        // best-effort — still show success so user isn't stuck
      }

      const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><polyline points="20 6 9 17 4 12"/></svg>';
      document.getElementById('quoteWrap').innerHTML = `
        <div class="rsm-quote-success">
          <div class="rsm-quote-success-ic">${check}</div>
          <h2 class="display-md">You're in line.</h2>
          <p>We'll text you back with a practical route quote. Welcome to ReadySetMow.</p>
          <a href="#quote" class="btn btn-outline" onclick="location.reload()">Submit another</a>
        </div>`;
    });
  }
})();
