/* global React, RSMIcon */
const Icon = window.RSMIcon;

function Services() {
  const services = [
    { tag: "Most popular", title: "Weekly Mowing", desc: "Same crew, same day, every week. Cut, edge, trim, blow.", price: "$45", unit: "/cut", featured: true },
    { tag: "Flexible", title: "Biweekly Lawn Care", desc: "Every other week — perfect for slower-growing yards.", price: "$55", unit: "/cut" },
    { tag: "Detail work", title: "Edging & Trimming", desc: "Crisp lines along walks, drives, beds, and fences.", price: "$25", unit: "+ add-on" },
    { tag: "Spring & fall", title: "Seasonal Cleanup", desc: "Leaves, debris, stick pickup. Yard reset for the season.", price: "$120", unit: "+/visit" },
    { tag: "No commitment", title: "One-Time Cut", desc: "Vacation cover, pre-event cleanup, or just a one-off.", price: "$65", unit: "+" },
    { tag: "Commercial", title: "Small Business Lawns", desc: "Storefronts, offices, rentals. Reliable curb appeal.", price: "Custom", unit: "" }
  ];
  return (
    <section id="services" className="rsm-section">
      <div className="rsm-container">
        <div className="rsm-section-head">
          <span className="rsm-eyebrow">Services</span>
          <h2 className="display-md">Book one cut. Or<br/>lock in the season.</h2>
          <p className="rsm-section-sub">Pick the schedule that fits your yard. Skip a week any time. No contracts, no runaround.</p>
        </div>
        <div className="rsm-svc-grid">
          {services.map((s, i) => (
            <article key={i} className={"rsm-svc " + (s.featured ? "rsm-svc-featured" : "")}>
              <span className="rsm-svc-tag">{s.tag}</span>
              <h3 className="rsm-svc-title">{s.title}</h3>
              <p className="rsm-svc-desc">{s.desc}</p>
              <div className="rsm-svc-foot">
                <span className="rsm-price">{s.price}<small>{s.unit}</small></span>
                <a href="#quote" className="rsm-svc-link">Get Quote <Icon name="arrow-right" size={14}/></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: "zap", title: "Fast response", desc: "Quote replies within hours, most often the same day." },
    { icon: "calendar", title: "Reliable schedule", desc: "Same crew, same day. We don't ghost." },
    { icon: "shield", title: "No contracts", desc: "Skip a week. Pause for vacation. No fine print." },
    { icon: "message", title: "Pro communication", desc: "Text us. Real humans, quick replies." },
    { icon: "map-pin", title: "Neighborhood-focused", desc: "We work routes street-by-street, not city-wide chaos." },
    { icon: "sparkles", title: "Curb appeal", desc: "Sharp edges, clean lines, blown-off walks every visit." }
  ];
  return (
    <section className="rsm-why">
      <div className="rsm-container">
        <div className="rsm-section-head rsm-section-head-dark">
          <span className="rsm-eyebrow rsm-eyebrow-bright">Why ReadySetMow</span>
          <h2 className="display-md">Your lawn care<br/><em className="rsm-accent-bright">pit crew.</em></h2>
        </div>
        <div className="rsm-why-grid">
          {items.map((it, i) => (
            <div key={i} className="rsm-why-item">
              <div className="rsm-why-ic"><Icon name={it.icon} size={22}/></div>
              <h3 className="rsm-why-title">{it.title}</h3>
              <p className="rsm-why-desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const cities = [
    { name: "Fishers", desc: "Hamilton County · 46037 / 46038 / 46040", routes: "Routes Tue / Thu" },
    { name: "Noblesville", desc: "Hamilton County · 46060 / 46062", routes: "Routes Mon / Wed" },
    { name: "Anderson", desc: "Madison County · 46011 / 46012 / 46013", routes: "Routes Wed / Fri" }
  ];
  return (
    <section id="areas" className="rsm-section rsm-section-tint">
      <div className="rsm-container">
        <div className="rsm-section-head">
          <span className="rsm-eyebrow">Service Areas</span>
          <h2 className="display-md">Local mowing for<br/>NE Indianapolis.</h2>
          <p className="rsm-section-sub">If your zip is on this list, we're already on your street.</p>
        </div>
        <div className="rsm-areas-grid">
          {cities.map((c, i) => (
            <div key={i} className="rsm-area">
              <div className="rsm-area-head">
                <Icon name="map-pin" size={18}/>
                <span className="rsm-area-routes">{c.routes}</span>
              </div>
              <h3 className="rsm-area-name">{c.name}</h3>
              <div className="rsm-area-state">Indiana</div>
              <p className="rsm-area-desc">{c.desc}</p>
              <a href="#quote" className="rsm-area-cta">Quote my street <Icon name="arrow-right" size={14}/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Request a quote", desc: "Text, call, or fill the form. Tell us your address and what you need." },
    { n: "02", title: "Pick your schedule", desc: "Weekly, biweekly, or one-time. Lock your slot." },
    { n: "03", title: "Enjoy a sharp lawn", desc: "We show up, cut, edge, blow off walks. You go enjoy your weekend." }
  ];
  return (
    <section id="process" className="rsm-section">
      <div className="rsm-container">
        <div className="rsm-section-head">
          <span className="rsm-eyebrow">How It Works</span>
          <h2 className="display-md">Three steps. No runaround.</h2>
        </div>
        <div className="rsm-steps">
          {steps.map((s, i) => (
            <div key={i} className="rsm-step">
              <div className="rsm-step-n">{s.n}</div>
              <h3 className="rsm-step-title">{s.title}</h3>
              <p className="rsm-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeasonalCTA() {
  return (
    <section className="rsm-seasonal">
      <div className="rsm-container rsm-seasonal-inner">
        <div className="rsm-seasonal-flag" aria-hidden></div>
        <div className="rsm-seasonal-copy">
          <span className="rsm-eyebrow rsm-eyebrow-bright">On The Clock</span>
          <h2 className="display-lg">Your lawn is on the clock.<br/><em>Let's get it sharp.</em></h2>
          <p>Spots fill up fast in spring. Lock your weekly slot before the route is full.</p>
        </div>
        <div className="rsm-seasonal-cta">
          <a href="#quote" className="btn btn-primary btn-lg">Get My Quote <Icon name="arrow-right" size={18}/></a>
          <a href="sms:3175556697" className="rsm-seasonal-text"><Icon name="message" size={16}/> Or text (317) 555-MOWS</a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { quote: "We've had three lawn services in the last two years. ReadySetMow is the first one that actually shows up the day they say they will.", name: "Jenna R.", city: "Fishers", years: "Customer since '24" },
    { quote: "Sharpest edge work I've seen on this block. Worth every penny.", name: "Marcus T.", city: "Noblesville", years: "Customer since '24" },
    { quote: "Texted them at 9pm on a Tuesday. Quote in my inbox by morning. Booked.", name: "Dana W.", city: "Anderson", years: "Customer since '25" }
  ];
  return (
    <section className="rsm-section rsm-section-alt">
      <div className="rsm-container">
        <div className="rsm-section-head">
          <span className="rsm-eyebrow">Reviews</span>
          <h2 className="display-md">Local yards.<br/>Real neighbors.</h2>
        </div>
        <div className="rsm-quotes">
          {quotes.map((q, i) => (
            <figure key={i} className="rsm-quote">
              <div className="rsm-stars">{[0,1,2,3,4].map(s => <Icon key={s} name="star" size={14}/>)}</div>
              <blockquote>"{q.quote}"</blockquote>
              <figcaption>
                <div className="rsm-quote-name">{q.name} · {q.city}</div>
                <div className="rsm-quote-years">{q.years}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Do you offer weekly mowing?", a: "Yes — weekly is our most popular plan. Same crew, same day. Skip a week any time." },
    { q: "Do you serve my neighborhood?", a: "We currently route Anderson, Noblesville, and Fishers. Send us your address and we'll confirm in minutes." },
    { q: "Can I request a one-time mow?", a: "Absolutely. One-time cuts are great for vacations, before guests visit, or to test us out before going recurring." },
    { q: "Do you handle edging and trimming?", a: "Every visit includes edging along walks and drives, trimming around fences and beds, and blowing off hard surfaces." },
    { q: "How do quotes work?", a: "Free, no obligation. Send your address and any details — we reply same day with a flat per-cut price." },
    { q: "Can I text instead of calling?", a: "Please do. Text (317) 555-MOWS — we usually reply within an hour during business hours." }
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="rsm-section rsm-section-tint">
      <div className="rsm-container rsm-faq-wrap">
        <div className="rsm-section-head">
          <span className="rsm-eyebrow">FAQ</span>
          <h2 className="display-md">Quick answers.</h2>
        </div>
        <div className="rsm-faq">
          {items.map((it, i) => (
            <div key={i} className={"rsm-faq-item " + (open === i ? "open" : "")}>
              <button className="rsm-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span><Icon name="chevron-down" size={20}/>
              </button>
              {open === i && <div className="rsm-faq-a">{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = React.useState(false);
  if (submitted) {
    return (
      <section id="quote" className="rsm-quote-section">
        <div className="rsm-container rsm-quote-grid">
          <div className="rsm-quote-success">
            <div className="rsm-quote-success-ic"><Icon name="check" size={28}/></div>
            <h2 className="display-md">You're in line.</h2>
            <p>We'll text you back same-day with a flat per-cut quote. Welcome to the route.</p>
            <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Submit another</button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="quote" className="rsm-quote-section">
      <div className="rsm-container rsm-quote-grid">
        <div className="rsm-quote-copy">
          <span className="rsm-eyebrow rsm-eyebrow-bright">Get A Free Quote</span>
          <h2 className="display-lg" style={{color: "#fff"}}>Tell us about<br/><em className="rsm-accent-bright">your yard.</em></h2>
          <p style={{color: "#B6BDB7"}}>Reply same-day. No spam. No phone tag unless you want it.</p>
          <ul className="rsm-quote-bullets">
            <li><Icon name="check" size={18}/> Flat per-cut pricing</li>
            <li><Icon name="check" size={18}/> No contracts, ever</li>
            <li><Icon name="check" size={18}/> Cancel or skip any week</li>
          </ul>
        </div>
        <form className="rsm-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div className="rsm-form-row">
            <div className="rsm-field"><label>Name</label><input required placeholder="Jamie Carter"/></div>
            <div className="rsm-field"><label>Phone</label><input required type="tel" placeholder="(317) 555-1234"/></div>
          </div>
          <div className="rsm-field"><label>Email</label><input required type="email" placeholder="you@example.com"/></div>
          <div className="rsm-field"><label>Address</label><input required placeholder="123 Maple Ridge Dr"/></div>
          <div className="rsm-form-row">
            <div className="rsm-field"><label>City</label>
              <select><option>Fishers</option><option>Noblesville</option><option>Anderson</option></select>
            </div>
            <div className="rsm-field"><label>Service needed</label>
              <select><option>Weekly Mowing</option><option>Biweekly</option><option>Edging & Trimming</option><option>Seasonal Cleanup</option><option>One-Time Cut</option><option>Small Business</option></select>
            </div>
          </div>
          <div className="rsm-form-row">
            <div className="rsm-field"><label>Schedule</label>
              <div className="rsm-radio-row">
                <label className="rsm-radio"><input type="radio" name="sched" defaultChecked/><span>Recurring</span></label>
                <label className="rsm-radio"><input type="radio" name="sched"/><span>One-time</span></label>
              </div>
            </div>
            <div className="rsm-field"><label>Contact me by</label>
              <div className="rsm-radio-row">
                <label className="rsm-radio"><input type="radio" name="contact" defaultChecked/><span>Text</span></label>
                <label className="rsm-radio"><input type="radio" name="contact"/><span>Call</span></label>
                <label className="rsm-radio"><input type="radio" name="contact"/><span>Email</span></label>
              </div>
            </div>
          </div>
          <div className="rsm-field"><label>Notes (optional)</label><textarea rows="3" placeholder="Gate code, dog in yard, hill on east side, etc."/></div>
          <button type="submit" className="btn btn-primary btn-lg" style={{width: "100%"}}>Get My Free Quote <Icon name="arrow-right" size={18}/></button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rsm-footer">
      <div className="rsm-container rsm-footer-top">
        <div className="rsm-footer-brand">
          <img src="../../assets/logo-stacked-wordmark.png" alt="ReadySetMow.co" />
          <p>Fast, dependable lawn care for Anderson, Noblesville, and Fishers, Indiana.</p>
        </div>
        <div className="rsm-footer-cols">
          <div>
            <h4>Service Areas</h4>
            <ul><li>Fishers, IN</li><li>Noblesville, IN</li><li>Anderson, IN</li></ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul><li>Weekly Mowing</li><li>Biweekly Lawn Care</li><li>Edging & Trimming</li><li>Seasonal Cleanup</li></ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Icon name="phone" size={14}/> (317) 555-MOWS</li>
              <li><Icon name="message" size={14}/> Text us anytime</li>
              <li><Icon name="map-pin" size={14}/> hi@readysetmow.co</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rsm-footer-banner">
        <img src="../../assets/banner-bottom-lockup.png" alt="ReadySetMow Lawn Care · Anderson · Noblesville · Fishers · Indiana"/>
      </div>
      <div className="rsm-container rsm-footer-bottom">
        <span>© 2026 ReadySetMow.co · Locally owned in Indiana</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="rsm-sticky-cta">
      <a href="tel:3175556697" className="rsm-sticky-call"><Icon name="phone" size={18}/> Call</a>
      <a href="#quote" className="rsm-sticky-quote">Get a Free Quote</a>
    </div>
  );
}

window.RSMServices = Services;
window.RSMWhyUs = WhyUs;
window.RSMServiceAreas = ServiceAreas;
window.RSMProcess = Process;
window.RSMSeasonalCTA = SeasonalCTA;
window.RSMTestimonials = Testimonials;
window.RSMFAQ = FAQ;
window.RSMQuoteForm = QuoteForm;
window.RSMFooter = Footer;
window.RSMMobileStickyCTA = MobileStickyCTA;
