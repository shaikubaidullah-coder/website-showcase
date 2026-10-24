# AGENTS.md — AI Agent Guidelines & Architecture Rules

This document specifies the non-negotiable architectural constraints, coding standards, and modification protocols for any AI agent working on this codebase.

---

## 1. Zero Hallucinated Code ("Anti-Catfish")
- **Never fabricate metrics, users, or awards.** All numbers must come from verified sources.
- **Never insert placeholder images.** Screenshots must be captured directly from verified live deployments using `npm run capture`.
- **Never claim a feature is complete without running verification.** Always run `npm run validate`, `npm run build`, and `node tests/showcase.spec.cjs`.

---

## 2. Single Source of Truth
- The canonical project registry is strictly maintained in `src/data/projects.ts`.
- Components must never hardcode project metadata or external links independently.
- When `src/data/projects.ts` is updated, run `npm run validate` to ensure data integrity.

---

## 3. Strict Design Disciplines (Hallmark & Design-Taste)
- **Palette Discipline:** Max 1 primary accent (`--color-accent: #2A5A44`). No AI purple glows or neon gradients.
- **Typography:** Display titles must use `Newsreader` (Editorial Serif, normal weight, never italicized). Body copy uses `Geist Sans`. Metadata uses `Geist Mono`.
- **Viewport Safety:** Never use `h-screen` for hero sections; always use `min-h-[100dvh]`.
- **No Horizontal Overflow:** Root containers must enforce `overflow-x: clip`.

---

## 4. Verification Loop
Before proposing changes or declaring tasks complete:
1. `npm run validate` -> All project fields & assets pass.
2. `npm run build` -> TypeScript typecheck & Vite static bundling pass.
3. `node tests/showcase.spec.cjs` -> Playwright test suite passes at all viewports.
