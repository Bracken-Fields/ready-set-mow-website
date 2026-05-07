# Ready Set Mow — Design System

**Brand:** ReadySetMow.co
**Tagline:** Ready. Set. Mow.
**What we do:** Fast, dependable lawn mowing & yard maintenance for homeowners and small businesses on the Northeast side of Indianapolis.
**Where we serve:** Anderson · Noblesville · Fishers, Indiana.

This system is the source of truth for ReadySetMow's brand visuals, copy voice, and UI components. It's used to generate paid ads, yard signs, truck decals, business cards, and the website.

---

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This file. Brand, voice, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens (color, type, spacing, radii, shadows, motion). |
| `assets/` | Logos (badge, horizontal, stacked), monochrome marks, app icons, favicons, banner lockup. |
| `preview/` | Standalone HTML cards previewed in the Design System tab. |
| `ui_kits/website/` | Marketing-site UI kit + homepage prototype + reusable JSX components. |
| `SKILL.md` | Cross-compatible Agent Skill manifest. |

---

## The product

ReadySetMow is a **local lawn-care service** with the energy of a **pit crew**: show up fast, do the job right, leave the lawn looking sharp. The brand sits at the intersection of:

- **Sporty / racing** — checkered flag, italic athletic type, "ready, set, go" cadence.
- **Lawn / outdoor** — grass blades, racing-green palette, dirt-honest blue-collar feel.
- **Local-trusted** — Anderson · Noblesville · Fishers always called out by name.

Audience: homeowners and small-business owners in NE Indianapolis suburbs. They want to **stop thinking about mowing** and trust someone who actually shows up.

---

## Content fundamentals

**Tone:** Punchy, confident, working-class but polished. Talks like a neighbor who runs a tight crew, not a corporate franchise. No fluff, no luxury-landscaping language, no "tranquil outdoor living spaces."

**Voice rules:**
- **Short sentences. Hard stops.** "Fast cuts. Clean edges. Reliable service."
- **Second person.** Talk to the customer ("your lawn," "your schedule") — never "the homeowner."
- **First person plural** for the crew ("we show up," "we cut, edge, and clean up").
- **Active verbs.** Mow, cut, edge, trim, clean, show up, lock in.
- **Local proper nouns.** Always name Anderson, Noblesville, Fishers when relevant. "Indiana" reinforces local pride.
- **Sentence case** for body. **UPPERCASE** for buttons, eyebrows, badges. **Italic display** for big moments.
- **No emoji.** This is a blue-collar service brand — emoji read as cute or salesy. Use the brand's own iconography (checkered flag, grass, shield) instead.
- **No jargon.** "Edging and trimming," not "perimeter detail work."

**Approved sample lines:**
- "Lawn Care That's Ready When You Are."
- "Ready. Set. Mow."
- "Fast cuts. Clean edges. Reliable service."
- "Your lawn care pit crew."
- "Local mowing for Anderson, Noblesville, and Fishers."
- "Book it once. Keep your lawn sharp all season."
- "Reliable lawn care without the runaround."
- "Your lawn is on the clock. Let's get it looking sharp."

**Avoid:**
- "Transform your outdoor living space"
- "Lush, vibrant, manicured"
- "Synergy / solutions / partnership"
- Any 🌱🌿🚜 emoji
- "We're passionate about lawns" (everyone says this — show, don't tell)

---

## Visual foundations

### Colors

Five color roles, anchored in **Racing Green** and **Near Black**:

| Token | Hex | Use |
|---|---|---|
| Racing Green | `#2F7D12` | Primary CTA, links, accent strokes, eyebrow text |
| Fresh Grass | `#5FB832` | Highlight color, inline accents, dark-bg headlines |
| Deep Forest | `#041B10` | Dark sections, footer, hero overlays |
| Near Black | `#050806` | Body text on light, secondary buttons |
| White | `#FFFFFF` | Default surface |
| Soft Off-White | `#F6F8F3` | Alt surface — slightly warm/green tint |
| Light Lawn Tint | `#E8F4DF` | Callout blocks, selected states |
| Neutral Gray | `#6B7280` | Secondary text, dividers |

**Contrast rule:** the brand lives in **high contrast**. White-on-deep-forest, near-black-on-white, racing-green CTAs against either. Don't muddle with mid-tones.

### Type

- **Display:** **Barlow Condensed** — bold (800/900), often **italic**, often **UPPERCASE**, tight letter-spacing. This is the athletic, fast-feeling voice. Used for hero headlines, section heads, big stat numbers, button-style labels in the logo lockup.
- **Body:** **Inter** — 400/500/600/700. Clean, readable, no italics outside of inline emphasis.
- **Mono:** **JetBrains Mono** — 500/700. Sparingly: time slots, ZIP codes, lot sizes, phone numbers in trust-strip contexts.

> Note: The original logo wordmark is custom-drawn (italic athletic). For digital text we use **Barlow Condensed Italic Black** as the closest free Google Fonts match. **Flag this to the user** — if a custom font file or licensed match (e.g. Industry Inc, Korolev Condensed) is available, drop the file in `fonts/` and update `--font-display`.

**Casing:**
- Headlines: UPPERCASE italic for impact moments; sentence-case for descriptive headlines.
- Eyebrows / labels / buttons: UPPERCASE with `letter-spacing: 0.06–0.14em`.
- Body: sentence case.

### Backgrounds

- **No gradients** as primary backgrounds (avoids "tech startup" feel). Solid color blocks only.
- **Full-bleed photo** sections allowed for hero — fresh-cut lawns shot tight & saturated, never overhead drone hero shots.
- **Texture used sparingly:** a 6px **racing-stripe divider** between major sections; a small **checkered-flag corner accent** on hero badge. Never as a full background.
- **Section rhythm:** alternate `--bg` (white) → `--bg-alt` (off-white) → `--bg-dark` (deep forest, white text) so the page has clear blocks. Don't run two same-color sections back to back.

### Shapes & corners

- **Cards / inputs / buttons:** `--r-md` (8px) or `--r-lg` (12px). Slight softness — not pill-soft, not square-rugged.
- **Pills:** only for tags, location chips, status dots.
- **Angled cuts:** badge headers and section dividers can use a 24px diagonal clip on one corner — gives the "fast, in motion" feel. Use on max ONE element per section.
- **The badge shape itself** is the most rounded thing in the system; everything else stays modest.

### Borders

- 1px on cards, inputs in default state.
- 2px on focus rings (`--accent`, offset 2px).
- **Never** colored-left-border-only cards (avoids generic-saas look).

### Shadows

Three tiers (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) tinted with deep-forest at low alpha, so they feel earthy, not cool-blue. Buttons use a **2-layer shadow trick**: a 6px solid drop in `--rsm-green-900` (stacks under the button) plus a soft ambient shadow. This gives buttons a "stamped on" tactile feel that suits the blue-collar aesthetic.

### Motion

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out) — feels quick and confident. No bounces.
- **Durations:** 120ms (interactive), 180ms (UI state), 280ms (entrance).
- **Hover:** primary buttons brighten one step (racing → grass-600). Cards lift `translateY(-2px)` and bump shadow.
- **Press:** buttons drop 2–3px and lose stacked shadow — like pressing a stamp.
- **No parallax, no scroll-jacking, no fancy reveal animations.** Page just feels fast.

### Hover & press states

| State | Treatment |
|---|---|
| Link hover | Color shifts to `--rsm-green-800` |
| Primary button hover | Background → `--rsm-green-600`, no scale |
| Primary button press | `translateY(3px)`, drop shadow collapses |
| Card hover | `translateY(-2px)`, shadow → `--shadow-lg` |
| Input focus | 2px `--accent` ring, offset 2px, no glow |

### Layout

- **Container:** 1240px max, 24px gutter mobile / 40px desktop.
- **Section padding:** `clamp(56px, 8vw, 112px)` vertical.
- **Mobile-first:** stack everything; reveal multi-column at ≥768px.
- **Sticky mobile CTA:** floating "Get a Free Quote" bar at the bottom of viewport on scroll past hero. 56px tall, racing-green, full-width.
- **Header:** 76px, white background, sticky on scroll. Logo (horizontal lockup) left, nav center, primary CTA right.

### Imagery

- **Photography:** real Indiana yards, mid-cut moments, crew in motion, branded equipment. Saturated greens, warm sun. **Avoid:** stock perfect mansions, drone-overhead "estate" shots, anything that screams luxury landscaping.
- **Color treatment:** unfiltered, slightly warm. No B&W, no heavy grain.

### Transparency / blur

- **Frosted-blur is rare.** Used only for sticky header on scroll (`backdrop-filter: blur(12px)` over `rgba(255,255,255,0.85)`).
- No glassy cards, no big translucent overlays.

---

## Iconography

The brand has a **strong visual vocabulary already** — checkered flag, grass blades, shield/badge, circle mark. **Use those first.**

For utility icons (phone, calendar, map pin, check, arrow) we use **Lucide** (CDN: `https://unpkg.com/lucide@latest`). It matches our aesthetic: 2px stroke, rounded line caps, modern but not bubbly. We **do not use** Heroicons (too "tech-startup"), Material Icons (too generic), or FontAwesome solid (too heavy/dated).

**Rules:**
- Lucide line icons at **20–24px** in body, **28–32px** in feature cards.
- Stroke color: `currentColor` so they inherit text.
- **No emoji** anywhere in product UI.
- **No hand-drawn SVG illustrations** — when in doubt, use a real photo or one of the brand badges.
- **Brand marks (shield, circle, banner) are NOT decorative icons.** They mark identity moments: header logo, hero, footer, app icons, favicons.

### Checkered-flag & grass-pattern usage rules

- **Checkered flag:** appears already in the badge. Use full-flag pattern only inside the badge or as a corner accent (max 80×40px) on hero/CTA cards. **Never** as a full-section background, **never** at angles other than the natural ~25° wave from the logo.
- **Grass blades:** appear already in the badge. Standalone grass blades (from the `favicon-grass-circle.png`) can be used as a subtle divider above section headlines, sized 24–32px tall, racing-green color. Use sparingly — max once per page section.
- **Racing stripes** (alternating green / grass-green dashes) used as a 6px divider between sections, or as a 4px accent on the side of certain cards (e.g. featured service).

---

## Logo usage

### Variants

| File | Use |
|---|---|
| `assets/logo-primary-badge.png` | Hero, business cards, yard signs, truck decals, the "moment" |
| `assets/logo-horizontal.png` | Site header, email signatures, narrow horizontal contexts |
| `assets/logo-stacked-wordmark.png` | Print docs, T-shirt back, square-ish formats |
| `assets/icon-shield-rsm.png` | Compact mark, 32–96px, when full wordmark won't fit |
| `assets/icon-circle-rsm.png` | App-icon-style contexts, social avatars |
| `assets/badge-monochrome-black.png` | Single-color print, embroidery |
| `assets/badge-monochrome-green.png` | Tonal applications, watermark |
| `assets/banner-bottom-lockup.png` | Footer banner, email footer, dark-band lockup |
| `assets/app-icon-dark.png` / `app-icon-green.png` | iOS / Android app icons, favicon contexts |

### Rules

- **Clear space:** minimum padding around the badge = height of the "RSM" letterforms. Don't crowd it.
- **Min sizes:** primary badge ≥ 56px tall on screen / 0.75" print. Horizontal lockup ≥ 32px tall.
- **Backgrounds:** prefer white or off-white. On dark surfaces, use the white-typography variant (badge holds up; if printing 1-color, switch to monochrome green or white).
- **Don't:** stretch, recolor outside palette, drop shadows on the badge, place over busy photos without a solid backplate, rotate.

---

## Favicon / app icon guidance

- **Web favicon:** `assets/favicon.ico` (auto-imported) + `assets/favicon-circle-green.png` for retina/manifest.
- **Apple touch icon:** `assets/apple-touch-icon.png` (180×180).
- **Android (manifest):** use `android-chrome-192x192.png` and `android-chrome-512x512.png` from `uploads/`.
- **Use the GREEN circle mark on light contexts**, the **DARK shield on dark contexts**.
- The grass-circle favicon (`favicon-grass-circle`) is reserved for **secondary surfaces** like the dashboard tab indicator — not the primary site favicon.

---

## Component checklist (lives in `ui_kits/website/`)

- [x] Header / sticky nav with horizontal lockup
- [x] Hero with badge + headline + dual CTA
- [x] Trust strip (5 items, icon + label)
- [x] Service card grid
- [x] Why-us value-prop block
- [x] Service area cards (Anderson / Noblesville / Fishers)
- [x] 3-step process flow
- [x] Seasonal CTA section
- [x] Testimonials
- [x] FAQ accordion
- [x] Quote form (9 fields)
- [x] Footer with logo, areas, contact
- [x] Sticky mobile bottom CTA
- [x] Buttons (primary / secondary / outline / ghost), Forms, Cards, Badges, Pills

---

## Quickstart for designers

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="icon" href="assets/favicon.ico">

<h1 class="display-md">Lawn Care That's Ready When You Are.</h1>
<a class="btn btn-primary" href="#quote">Get a Free Quote</a>
```

That's enough to get a tonally-correct page going. Open `ui_kits/website/index.html` for a full reference homepage.

---

## Open questions / caveats

- **Display font is a free substitute.** Barlow Condensed Italic Black ≈ the wordmark, but the actual logo is custom-drawn. If a licensed font (e.g. Industry Inc, Druk Wide, Korolev Condensed) is preferred, drop the `.woff2` in `fonts/` and update `--font-display` in `colors_and_type.css`.
- **No real photos provided yet.** Hero/service-area images use placeholder color blocks with the brand badge — replace with actual yard photography for production.
- **Phone, email, address are placeholders** — `(317) 555-MOWS`, `hi@readysetmow.co`. Update before launch.
