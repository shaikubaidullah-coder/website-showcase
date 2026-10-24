# Design System: The Digital Atelier & Exhibition Showcase

**Design System Lead:** Principal Product Designer & Design Systems Architect  
**Project:** Shaik Ubaidullah — Ultimate Website Showcase  
**File:** `website-showcase/design/DESIGN.md`  

---

## 1. Visual Theme & Atmosphere

### Aesthetic Philosophy
The visual language is an art-directed synthesis of an **architect's sketchbook and an editorial digital gallery**. It borrows the warm tactile intimacy and notebook grid of Vauliys, the precision catalog hierarchy of CodeKart, the curated exhibition serenity of Meng To, and the fluid spring physics of Apple's Human Interface Guidelines.

### Mood & Character
- **Tactile Paper Materiality:** An off-white, warm alabaster canvas (`#FAF8F5`) layered with a faint, mathematically precise graph-paper grid (`rgba(27, 27, 25, 0.05)`).
- **Grounded Editorial Confidence:** High-contrast charcoal ink (`#1B1B19`) paired with a natural, subdued forest olive accent (`#2A5A44`).
- **Precision Craft:** 1px hairline borders (`rgba(27, 27, 25, 0.10)`), physical paper shadows with ambient diffusion, and controlled border radii (`rounded-2xl` for cards, `rounded-full` for interactive pills).
- **Zero AI Slop:** No purple gradients, no outer glows, no fake metrics, no centered generic 3-card rows.

---

## 2. Color Palette & Functional Roles

| Token Name | Hex / Value | Semantic Role |
|------------|-------------|---------------|
| `--color-paper` | `#FAF8F5` | Primary canvas background; warm off-white alabaster |
| `--color-surface` | `#FFFFFF` | Card, container, and elevated component background |
| `--color-surface-subtle` | `#F4F0E8` | Secondary container fill, input background, bezel background |
| `--color-ink-primary` | `#1B1B19` | Primary typography, headlines, active icons (contrast ratio > 12:1) |
| `--color-ink-secondary` | `#66645E` | Subtitles, descriptions, secondary metadata (contrast ratio > 4.8:1) |
| `--color-ink-muted` | `#99968E` | Faint labels, keyboard hint text, inactive timestamps |
| `--color-border-hairline` | `rgba(27, 27, 25, 0.08)` | Subtle card borders and grid divider lines |
| `--color-border-strong` | `rgba(27, 27, 25, 0.18)` | Interactive input borders, card hover borders |
| `--color-accent` | `#2A5A44` | Primary brand accent; deep forest olive |
| `--color-accent-hover` | `#1C3D2E` | Deepened forest olive for active/hover states |
| `--color-accent-subtle` | `#EBF2ED` | Pill tag background, highlight banner background |
| `--color-status-live` | `#10B981` | Live deployment beacon indicator (emerald) |
| `--color-focus-ring` | `#2A5A44` | Accessible keyboard focus outline |

---

## 3. Typography Rules

### Font Families
- **Display & Section Titles:** Editorial Serif  
  `font-family: "Newsreader", "Georgia", "Times New Roman", serif;`  
  *Usage:* Page header, project titles, quotes, philosophy statements. Never italicized in headings (Hallmark Gate 38a).
- **Body & Interface:** Clean Modern Sans-Serif  
  `font-family: "Geist", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;`  
  *Usage:* Project descriptions, navigation items, filter buttons, badges.
- **Data, Stats & Technical Metadata:** Precision Monospace  
  `font-family: "Geist Mono", "JetBrains Mono", ui-monospace, Menlo, monospace;`  
  *Usage:* Live counts, status badges, tech tags, deployment URLs, dates.

### Typographic Scale
- **Display XL (Hero H1):** `clamp(2.5rem, 5vw, 4.25rem)` / Line height: `1.08` / Tracking: `-0.03em`
- **Section Heading (H2):** `clamp(1.75rem, 3.5vw, 2.75rem)` / Line height: `1.15` / Tracking: `-0.02em`
- **Card Title (H3):** `1.375rem` (22px) / Line height: `1.25` / Tracking: `-0.015em`
- **Body Large:** `1.125rem` (18px) / Line height: `1.6` / Tracking: `0`
- **Body Regular:** `0.9375rem` (15px) / Line height: `1.55` / Tracking: `0`
- **Metadata Small:** `0.8125rem` (13px) / Line height: `1.4` / Tracking: `0.02em`

---

## 4. Component Stylings

### A. Navigation & Top Announcement
- **Announcement Strip:** Dark charcoal bar (`#1B1B19`) with warm cream text, featuring live pulse beacon and verified badge count.
- **Navbar:** Sticky header with backdrop-filter (`backdrop-filter: blur(12px)` over `rgba(250, 248, 245, 0.85)`). Contains brand wordmark, quick filter buttons, and a tactile "★ Say Hello" pill button.

### B. Project Cards
- **Geometry:** `rounded-2xl` (16px), 1px hairline border `rgba(27, 27, 25, 0.08)`.
- **Background:** Clean paper white `#FFFFFF`.
- **Preview Bezel:** 16:10 aspect ratio preview frame with realistic browser/device header bar, hosting the genuine live screenshot.
- **Hover State:** Micro-elevation `transform: translateY(-4px)`, shadow transition to `0 16px 32px -8px rgba(27, 27, 25, 0.08)`, border color deepening to `rgba(27, 27, 25, 0.16)`.
- **Actions:** Dual button row:
  - Primary: "Open Live ↗" (Filled forest olive pill or high-contrast button).
  - Secondary: "Details" (Subtle outline pill).

### C. Search & Filter Bar
- **Search Input:** Pill-shaped (`rounded-full`), white background, magnifying glass icon, subtle inner shadow.
- **Filter Tabs:** Horizontal scrollable chip strip with pill shape. Active state has solid forest olive background with crisp white text. Inactive chips have soft border and subtle hover tint.

### D. Accessible Project Modal / Sheet
- **Backdrop:** Semi-transparent warm charcoal (`rgba(27, 27, 25, 0.45)`) with backdrop blur (`blur(8px)`).
- **Dialog Sheet:** `rounded-3xl` container, maximum width 840px, full-resolution image display, verified status stamp badge, live external link, GitHub repo link (if public), and structured feature bullet points.

---

## 5. Layout & Responsive Principles

- **Max Container Width:** `1360px` centered with fluid horizontal padding (`px-4 sm:px-6 lg:px-8`).
- **Graph Paper Grid:** CSS background gradient rendering 24px x 24px subtle grid cells.
- **Mobile Viewports (320px–430px):** Single-column stacked cards, full-width search input, horizontally scrolling filter pill strip with hide-scrollbar utility, `min-h-[100dvh]` hero container.
- **Tablet (768px):** 2-column project grid with balanced card heights.
- **Desktop (1024px+):** 3-column asymmetric or 3-column structured catalog grid with featured hero span.
