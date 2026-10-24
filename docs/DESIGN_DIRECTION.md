# Design Direction & Art Direction Specification

**Author:** Principal Product Designer & Creative Developer  
**Date:** 2026-10-25  

---

## 1. Visual Synthesis: Mixing & Elevating the References

The showcase synthesizes the best qualities of the user's provided references into a cohesive, original visual identity:

1. **Vauliys (`vauliys.com`):**
   - *Inspiration:* Warm cream background with faint graph-paper grid; tactile hand-drawn touches; playful announcement bar ("Accepting bookmarks, not bookings"); pill-shaped CTA buttons with star icons (`★ Say howdy hey`).
   - *Elevation:* Implemented as a fine architect's grid background on warm alabaster/paper (`#FAF8F5`), high-craft pill buttons, and confident editorial copywriting.
2. **CodeKart (`codekart.in`):**
   - *Inspiration:* Precision catalog; clean rounded cards with inner bezels; status badges ("Trending", "Popular"); integrated search bar; restrained green accent.
   - *Elevation:* Precision card geometry (`rounded-2xl`, subtle border `rgba(27,27,25,0.08)`), status chips (`● Live Vercel`, `● Live Netlify`), and instant client-side fuzzy search.
3. **Mixtape for you (`mixtape for you`):**
   - *Inspiration:* Nostalgic physical cassette packaging, sticker labels, tactile warmth.
   - *Elevation:* Subtle physical card drop-shadows with paper-like depth, retro stamp badges (`VERIFIED WORK // 2026`), and sound-friendly micro-interactions.
4. **Meng To (`mengto.com`):**
   - *Inspiration:* Elegant editorial serif headers, luxury rice-paper warmth, central open-sketchbook presentation, circular metallic/wax stamp.
   - *Elevation:* High-contrast editorial serif typography for headings, paired with a clean geometric monospace/sans for metadata, and an interactive featured showcase book element.

---

## 2. Color Palette (OKLCH & Fallbacks)

- **Canvas Background (Paper / Alabaster):** `#FAF8F5` (Warm off-white, physical paper feel)
- **Secondary Surface (Card / Container):** `#FFFFFF` (Pure crisp white with subtle border)
- **Elevated Surface (Modal / Bezel):** `#F4F0E8` (Subtle tinted neutral)
- **Grid Lines:** `rgba(27, 27, 25, 0.05)` (Ultra-subtle graph paper grid)
- **Primary Ink / Typography:** `#1B1B19` (Deep warm charcoal, high contrast)
- **Muted Ink / Secondary Text:** `#66645E` (Readable neutral gray, WCAG AA pass)
- **Hairline Borders:** `rgba(27, 27, 25, 0.10)` (Crisp physical hairline)
- **Accent Primary (Forest Olive / Sage):** `#2A5A44` (Restrained, natural organic green)
- **Accent Light (Pill / Tag Background):** `#EAF2EC` (Soft organic tint)
- **Accent Hover:** `#1E4332` (Deepened green for tactile feedback)
- **Live Status Indicator:** `#10B981` (Vibrant emerald green dot)

---

## 3. Typography Stack

- **Display & Headings:** `Newsreader`, `Fraunces`, or `Instrument Serif` fallback to serif (`"Newsreader", "Georgia", "Times New Roman", serif`). Editorial, graceful, roman (never italic headers per Hallmark rules).
- **Body & Interface:** `Geist`, `Cabinet Grotesk`, or system sans (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`). Clean, crisp, neutral.
- **Metadata & Tags:** `Geist Mono`, `JetBrains Mono`, or monospace (`ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace`). Used for counts, dates, host status, and tech tags.

---

## 4. Spacing, Geometry & Motion Principles

- **Base Grid:** 8-point system (8px, 16px, 24px, 32px, 48px, 64px, 96px).
- **Border Radii:**
  - Outer Containers & Modals: `rounded-3xl` (24px)
  - Project Cards: `rounded-2xl` (16px)
  - Search & Inputs: `rounded-full` (9999px)
  - Tags & Badges: `rounded-md` (6px)
- **Spring Physics:**
  - Card hover: `translateY(-4px)` with spring curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Button active: `scale(0.98)` or `translateY(1px)`.
  - Modals: Fade-in backdrop + scale-up sheet (spring physics, zero layout thrash).
- **Reduced Motion:** Full `@media (prefers-reduced-motion: reduce)` override disabling all continuous transitions.

---

## 5. Anti-Patterns Explicitly Banned

- ❌ No AI purple gradients or neon button glows.
- ❌ No centered, generic 3-card feature rows.
- ❌ No custom mouse cursors that hijack native browser pointers.
- ❌ No fake metrics, fabricated quotes, or placeholder logos.
- ❌ No horizontal overflow on mobile viewports.
