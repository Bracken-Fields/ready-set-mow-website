/* global React, RSMIcon */
const Icon = window.RSMIcon;

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="rsm-header">
      <div className="rsm-container rsm-header-inner">
        <a href="#" className="rsm-logo">
          <img src="../../assets/logo-horizontal.png" alt="ReadySetMow.co — Lawn Care" />
        </a>
        <nav className="rsm-nav">
          <a href="#services">Services</a>
          <a href="#areas">Service Areas</a>
          <a href="#process">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="rsm-header-cta">
          <a href="tel:3175556697" className="rsm-phone-link"><Icon name="phone" size={16}/> (317) 555-MOWS</a>
          <a href="#quote" className="btn btn-primary">Get a Free Quote</a>
        </div>
        <button className="rsm-burger" onClick={() => setOpen(!open)} aria-label="Menu"><Icon name="menu" size={24}/></button>
      </div>
      {open && (
        <div className="rsm-mobile-nav">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#areas" onClick={() => setOpen(false)}>Service Areas</a>
          <a href="#process" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#quote" className="btn btn-primary" onClick={() => setOpen(false)}>Get a Free Quote</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="rsm-hero">
      <div className="rsm-hero-bg" aria-hidden></div>
      <div className="rsm-container rsm-hero-inner">
        <div className="rsm-hero-copy">
          <span className="rsm-eyebrow"><Icon name="map-pin" size={14}/> Anderson · Noblesville · Fishers, IN</span>
          <h1 className="rsm-hero-h1">
            Lawn Care That's <em>Ready</em> When You Are.
          </h1>
          <p className="rsm-hero-sub">Fast, reliable mowing and yard maintenance from a local crew that actually shows up. No contracts. Text-friendly scheduling.</p>
          <div className="rsm-hero-cta">
            <a href="#quote" className="btn btn-primary btn-lg">Get a Free Quote <Icon name="arrow-right" size={18}/></a>
            <a href="#services" className="btn btn-outline btn-lg">View Services</a>
          </div>
          <div className="rsm-hero-trust">
            <span><Icon name="check" size={16}/> No contracts</span>
            <span><Icon name="check" size={16}/> Local crew</span>
            <span><Icon name="check" size={16}/> Text to book</span>
          </div>
        </div>
        <div className="rsm-hero-badge">
          <img src="../../assets/logo-primary-badge.png" alt="ReadySetMow badge" />
        </div>
      </div>
      <div className="rsm-stripe"></div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: "map-pin", label: "Local Indiana lawn care" },
    { icon: "calendar", label: "Reliable recurring service" },
    { icon: "scissors", label: "Clean cuts, sharp edges" },
    { icon: "briefcase", label: "Residential & small business" },
    { icon: "message", label: "Easy text scheduling" }
  ];
  return (
    <section className="rsm-trust">
      <div className="rsm-container rsm-trust-row">
        {items.map((it, i) => (
          <div key={i} className="rsm-trust-item">
            <Icon name={it.icon} size={20}/><span>{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

window.RSMHeader = Header;
window.RSMHero = Hero;
window.RSMTrustStrip = TrustStrip;
