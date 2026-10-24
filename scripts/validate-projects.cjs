// scripts/validate-projects.js
// Validates project registry for required fields, unique IDs, valid URLs, and existing screenshot assets.
const fs = require('fs');
const path = require('path');

const projectsPath = path.resolve(__dirname, '../src/data/projects.json');
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(projectsPath)) {
  console.error('❌ projects.json does not exist!');
  process.exit(1);
}

const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
console.log(`Validating ${projects.length} project records...`);

let hasErrors = false;
const seenIds = new Set();
const seenSlugs = new Set();
const validCategories = new Set([
  'sound-music',
  'creative-code',
  'ai-automation',
  'client-business',
  'identity-portfolios'
]);

projects.forEach((p, idx) => {
  const prefix = `[Project ${idx + 1}: ${p.id || 'NO_ID'}]`;

  // Required string fields
  ['id', 'slug', 'title', 'tagline', 'description', 'category', 'productionUrl', 'thumbnail'].forEach(field => {
    if (!p[field] || typeof p[field] !== 'string' || p[field].trim() === '') {
      console.error(`❌ ${prefix} Missing or empty required field: "${field}"`);
      hasErrors = true;
    }
  });

  // Unique ID
  if (seenIds.has(p.id)) {
    console.error(`❌ ${prefix} Duplicate project ID: "${p.id}"`);
    hasErrors = true;
  }
  seenIds.add(p.id);

  // Unique Slug
  if (seenSlugs.has(p.slug)) {
    console.error(`❌ ${prefix} Duplicate project slug: "${p.slug}"`);
    hasErrors = true;
  }
  seenSlugs.add(p.slug);

  // Category
  if (!validCategories.has(p.category)) {
    console.error(`❌ ${prefix} Invalid category: "${p.category}"`);
    hasErrors = true;
  }

  // URL format
  try {
    const url = new URL(p.productionUrl);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      console.error(`❌ ${prefix} Invalid URL protocol in productionUrl: "${p.productionUrl}"`);
      hasErrors = true;
    }
  } catch (e) {
    console.error(`❌ ${prefix} Malformed productionUrl: "${p.productionUrl}"`);
    hasErrors = true;
  }

  // Thumbnail asset exists
  if (p.thumbnail) {
    const thumbnailPath = path.join(publicDir, p.thumbnail);
    if (!fs.existsSync(thumbnailPath)) {
      console.error(`❌ ${prefix} Thumbnail file does not exist at: ${thumbnailPath}`);
      hasErrors = true;
    } else {
      const stats = fs.statSync(thumbnailPath);
      if (stats.size === 0) {
        console.error(`❌ ${prefix} Thumbnail file is 0 bytes: ${thumbnailPath}`);
        hasErrors = true;
      }
    }
  }

  // Technologies
  if (!Array.isArray(p.technologies) || p.technologies.length === 0) {
    console.error(`❌ ${prefix} Missing or empty technologies array`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('\n💥 Project registry validation failed! Fix the errors above.');
  process.exit(1);
} else {
  console.log(`\n✅ All ${projects.length} projects passed data integrity and asset validation!`);
  process.exit(0);
}
