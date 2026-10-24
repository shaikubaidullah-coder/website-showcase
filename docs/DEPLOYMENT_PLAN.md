# Deployment Plan: Ultimate Website Showcase

**Deployment Target:** Netlify (Primary) & GitHub Pages / Vercel (Secondary)  
**Host URL Target:** `https://ubaidullah-showcase.netlify.app` or similar descriptive domain  
**Build Command:** `npm run build`  
**Publish Directory:** `dist/`  

---

## 1. Pre-Deployment Checks

1. **Clean Git State:** Verify all files are tracked, no unwanted temporary files, `.gitignore` configured correctly.
2. **Build Verification:** Run `npm run build` locally and ensure zero TypeScript or asset bundling errors.
3. **Data Integrity:** Run `node scripts/validate-projects.js` to ensure all 12 projects have valid metadata, functioning URLs, and verified screenshots.
4. **Zero Secrets in Code:** Verify no API tokens, OAuth keys, or private environment variables are included in client bundles.

---

## 2. Deployment Execution

1. Build production static bundle (`npm run build` -> `dist/`).
2. Deploy to Netlify via Netlify CLI / API using the user's verified Netlify authorization token.
3. If new site creation is needed, assign name `ubaidullah-showcase` or `shaikubaidullah-showcase`.
4. Link production site to GitHub repository `shaikubaidullah-coder/website-showcase`.

---

## 3. Post-Deployment Verification

1. Inspect HTTP status of the live deployment URL (must be 200 OK).
2. Verify all external project links open correctly in new tabs.
3. Test search and filtering functionality on the live URL.
4. Verify asset loading (fonts, screenshots, favicons).
