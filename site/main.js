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
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><polyline points="20 6 9 17 4 12"/></svg>';
      document.getElementById('quoteWrap').innerHTML = `
        <div class="rsm-quote-success">
          <div class="rsm-quote-success-ic">${check}</div>
          <h2 class="display-md">You're in line.</h2>
          <p>We'll text you back same-day with a flat per-cut quote. Welcome to the route.</p>
          <a href="#quote" class="btn btn-outline" onclick="location.reload()">Submit another</a>
        </div>`;
    });
  }
})();
