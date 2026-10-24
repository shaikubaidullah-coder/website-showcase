// scripts/capture-previews.js
// Captures authentic, full-resolution 1280x800 screenshots of each verified deployment
const { chromium } = require("/Users/shaikubaidullah/.gemini/mcp-packages/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const projects = [
  {
    slug: "aur-music-archive",
    url: "https://aur-music-archive.netlify.app",
    waitMs: 2500
  },
  {
    slug: "boulevard-music",
    url: "https://boulevard-music.vercel.app",
    waitMs: 2500
  },
  {
    slug: "the-archive-gallery",
    url: "https://the-archive-gallery.vercel.app",
    waitMs: 2500
  },
  {
    slug: "what-do-you-love-animation",
    url: "https://what-do-you-love-animation.netlify.app",
    waitMs: 2000
  },
  {
    slug: "flowers-for-you",
    url: "https://flowers-for-you-six.vercel.app",
    waitMs: 2500
  },
  {
    slug: "sadiq-automation",
    url: "https://sadiq-automation.netlify.app",
    waitMs: 2000
  },
  {
    slug: "qalbishawarma",
    url: "https://qalbishawarma.netlify.app",
    waitMs: 2000
  },
  {
    slug: "shaikubaidullah-portfolio-v2",
    url: "https://shaikubaidullah-portfolio.netlify.app",
    waitMs: 2000
  },
  {
    slug: "shaikubaidullah-landing",
    url: "https://shaikubaidullah-landing.netlify.app",
    waitMs: 1500
  },
  {
    slug: "main-portfolio",
    url: "https://shaikubaid.netlify.app",
    waitMs: 2000
  },
  {
    slug: "journey-aiskills",
    url: "https://journey-aiskills.vercel.app",
    waitMs: 2000
  },
  {
    slug: "ubaidairesources",
    url: "https://ubaidairesources.netlify.app",
    waitMs: 2000
  }
];

const outputDir = path.resolve(__dirname, "../public/projects");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function capture() {
  console.log("Starting screenshot capture with system Google Chrome...");
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1.5,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  });

  for (const p of projects) {
    const page = await context.newPage();
    const targetFile = path.join(outputDir, `${p.slug}.png`);
    console.log(`[${p.slug}] Navigating to ${p.url}...`);
    try {
      await page.goto(p.url, { waitUntil: "domcontentloaded", timeout: 20000 });
      await page.waitForTimeout(p.waitMs);
      await page.screenshot({ path: targetFile, quality: 90, type: "jpeg" });
      const stats = fs.statSync(targetFile);
      console.log(`✓ Saved ${p.slug}.png (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Error capturing ${p.slug}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("All screenshots captured successfully!");
}

capture().catch(console.error);
