# Product Requirements Document (PRD)

**Project:** Shaik Ubaidullah — Ultimate Website Showcase  
**Version:** 1.0.0  
**Target:** Production-grade Digital Exhibition  

---

## 1. Core User Journeys

### Journey 1: The Fast Explorer (15 seconds)
1. Lands on the showcase.
2. Immediately understands whose work this is and sees the live project count ("12 Verified Live Projects").
3. Glances at the hero showcase (interactive preview of *AUR* or *Boulevard*).
4. Clicks "Open Live ↗" on a project card to test the real site in a new tab.

### Journey 2: The Focused Evaluator (Category / Tech filtering)
1. Wants to see specific work (e.g., "Music & Audio", "Creative Code & Canvas", or "AI Automations").
2. Clicks a category pill (e.g., `Sound & Music`) or types `React` / `Canvas` in the search bar.
3. The catalog dynamically transitions with smooth layout reordering without page reload.
4. Clicks "Inspect Details" to view technical specs, source repo (if public), and verified features.

### Journey 3: The Mobile Visitor
1. Visits on a smartphone (375px/390px).
2. Sees a clean, edge-to-edge layout with zero horizontal overflow.
3. Uses thumb-friendly filter chips and search.
4. Taps cards to expand details or launch live sites.

---

## 2. Essential Features (P0)

1. **Header & Announcement Bar:**
   - Top banner with tactile copy: *"Curated Digital Exhibition · 12 Verified Builds · Zero Fluff"*.
   - Brand mark: "Shaik Ubaidullah" with subtitle "Creative Developer & Systems Engineer".
   - Quick navigation & "Say Hello" contact link.
2. **Featured Flagship Exhibit:**
   - Prominently showcases top creative works (*AUR* / *Boulevard* / *The Archive*) with high-res screenshot bezel, interactive metadata, and verified stamp badge.
3. **Interactive Search & Discovery Controls:**
   - Fuzzy search input across Title, Category, Technologies, and Description.
   - Filter chips: All, Sound & Music, Creative Code, AI Automations, Local Business, Identity & Portfolios.
   - Sort dropdown: Recent Deployments, Alphabetical.
   - Live result counter: "Showing X of 12 verified projects".
   - Reset filters button when zero results match.
4. **Curated Project Cards:**
   - Genuine high-resolution screenshot preview inside a clean border bezel.
   - Title, category badge, and live host tag (`● Vercel` / `● Netlify`).
   - Grounded description and verified technology pills (`TypeScript`, `React`, `Audio API`, `Canvas`, etc.).
   - Primary action: "Visit Live Website ↗" (opens external URL in new tab with `rel="noopener noreferrer"`).
   - Secondary action: "Project Details" (opens accessible drawer/modal).
5. **Accessible Project Detail Modal / Drawer:**
   - Large screenshot preview.
   - Architectural summary, key features, verified technologies.
   - Direct link to live website + link to GitHub repository (if public).
   - Keyboard accessible (ESC to close, focus trap).
6. **About / Philosophy Section:**
   - Grounded personal mission, core disciplines, and contact channels.
7. **Clean Footer:**
   - Copyright 2026, status indicator, repository links.

---

## 3. Performance & Quality Non-Negotiables (P0)

- **Responsive Viewports:** 320px, 375px, 390px, 768px, 1024px, 1440px without any horizontal scroll (`overflow-x: clip`).
- **Zero Jank Motion:** Continuous animations restricted to `transform` and `opacity`. Spring physics applied for tactile feel.
- **Accessibility:** Minimum WCAG AA color contrast (4.5:1 for body copy), visible `:focus-visible` styling, semantic HTML5 headings (`h1` → `h2` → `h3`), descriptive `aria-label` attributes.
- **Zero Hallucinated Code:** No dummy metrics, no fake testimonials, no fabricated client logos.
