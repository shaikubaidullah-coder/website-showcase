// tests/showcase.spec.cjs
// Comprehensive QA test suite testing functionality, search, modal, and responsive behavior.
const { chromium } = require('/Users/shaikubaidullah/.gemini/mcp-packages/node_modules/playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');

// Simple static server for dist/
function startServer(port = 5892) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
      if (!fs.existsSync(filePath)) {
        filePath = path.join(DIST_DIR, 'index.html');
      }
      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
      };
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(port, () => {
      resolve({ server, port });
    });
  });
}

async function runTests() {
  console.log('🧪 Starting Automated QA Test Suite for Website Showcase...');
  const { server, port } = await startServer(5892);
  const baseUrl = `http://localhost:${port}`;
  console.log(`✓ Local test server running on ${baseUrl}`);

  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  try {
    // 1. Initial Load
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    console.log('✓ Page loaded successfully. Title:', await page.title());

    // 2. Check total cards
    const cardCount = await page.locator('article').count();
    console.log(`✓ Rendered project cards count: ${cardCount}`);
    if (cardCount !== 12) throw new Error(`Expected 12 cards, got ${cardCount}`);

    // 3. Test Search
    const searchInput = page.locator('input[type="text"]');
    await searchInput.fill('Shawarma');
    await page.waitForTimeout(300);
    const shawarmaCards = await page.locator('article').count();
    console.log(`✓ Search for "Shawarma" returned ${shawarmaCards} card(s)`);
    if (shawarmaCards !== 1) throw new Error(`Expected 1 Shawarma card, got ${shawarmaCards}`);

    // 4. Test Search Clear
    await searchInput.fill('');
    await page.waitForTimeout(300);
    const clearedCount = await page.locator('article').count();
    console.log(`✓ Cleared search restored ${clearedCount} cards`);
    if (clearedCount !== 12) throw new Error(`Expected 12 cards after clear, got ${clearedCount}`);

    // 5. Test Category Filtering
    // Click "Sound & Music"
    await page.locator('button:has-text("Sound & Music")').click();
    await page.waitForTimeout(300);
    const soundCards = await page.locator('article').count();
    console.log(`✓ Filter "Sound & Music" returned ${soundCards} card(s)`);
    if (soundCards !== 2) throw new Error(`Expected 2 music cards, got ${soundCards}`);

    // Click "Creative Code & Canvas"
    await page.locator('button:has-text("Creative Code & Canvas")').click();
    await page.waitForTimeout(300);
    const canvasCards = await page.locator('article').count();
    console.log(`✓ Filter "Creative Code & Canvas" returned ${canvasCards} card(s)`);
    if (canvasCards !== 3) throw new Error(`Expected 3 canvas cards, got ${canvasCards}`);

    // Reset back to "All Projects"
    await page.locator('button:has-text("All Projects")').click();
    await page.waitForTimeout(300);
    const allCount = await page.locator('article').count();
    console.log(`✓ Filter "All Projects" returned ${allCount} cards`);
    if (allCount !== 12) throw new Error(`Expected 12 cards, got ${allCount}`);

    // 6. Test Modal Open & Close
    const firstDetailsBtn = page.locator('article button:has-text("Details")').first();
    await firstDetailsBtn.click();
    await page.waitForSelector('[role="dialog"]');
    console.log('✓ Project details modal opened successfully.');
    
    // Check modal title
    const modalTitle = await page.locator('#modal-project-title').innerText();
    console.log(`✓ Modal displayed project: "${modalTitle}"`);

    // Close modal via ESC
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const modalVisible = await page.locator('[role="dialog"]').isVisible();
    console.log(`✓ Modal dismissed via ESC key (visible: ${modalVisible})`);
    if (modalVisible) throw new Error('Modal should be closed after ESC key');

    // 7. Test Responsive Viewports & Horizontal Overflow
    const viewports = [
      { name: 'Mobile 375px', width: 375, height: 667 },
      { name: 'Mobile 390px', width: 390, height: 844 },
      { name: 'Tablet 768px', width: 768, height: 1024 },
      { name: 'Laptop 1024px', width: 1024, height: 768 },
      { name: 'Desktop 1440px', width: 1440, height: 900 }
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(200);
      const isOverflowing = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      console.log(`✓ Viewport ${vp.name}: Horizontal overflow check = ${isOverflowing ? 'FAILED' : 'PASSED'}`);
      if (isOverflowing) throw new Error(`Horizontal overflow detected at ${vp.name}!`);
    }

    // 8. Console errors check
    if (consoleErrors.length > 0) {
      console.warn('⚠️ Console errors detected:', consoleErrors);
    } else {
      console.log('✓ Zero console errors detected during runtime!');
    }

    console.log('\n🎉 ALL QA CHECKS PASSED PERFECTLY!');
  } finally {
    await browser.close();
    server.close();
  }
}

runTests().catch(err => {
  console.error('\n❌ QA Test Suite Failed:', err.message);
  process.exit(1);
});
