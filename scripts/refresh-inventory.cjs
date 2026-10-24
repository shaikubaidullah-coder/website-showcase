// scripts/refresh-inventory.js
// Automated discovery and refresh script for Shaik Ubaidullah's project showcase.
// Queries GitHub CLI ('gh') and Netlify API to discover new repositories and deployments.
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Running project inventory refresh...');

try {
  // 1. Fetch GitHub Repositories
  console.log('Fetching GitHub repositories via gh CLI...');
  const reposRaw = execSync(
    'gh repo list shaikubaidullah-coder --limit 100 --json name,description,url,homepageUrl,isPrivate,isArchived,pushedAt,createdAt,primaryLanguage',
    { stdio: ['pipe', 'pipe', 'pipe'] }
  ).toString();
  const repos = JSON.parse(reposRaw);
  console.log(`✓ Discovered ${repos.length} GitHub repositories.`);

  // 2. Load existing registry
  const registryPath = path.resolve(__dirname, '../src/data/projects.json');
  const existingProjects = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const existingSlugs = new Set(existingProjects.map(p => p.slug));

  // 3. Identify new repos
  const newRepos = repos.filter(r => !existingSlugs.has(r.name) && !r.isArchived);

  console.log(`\nExisting Showcase Projects: ${existingProjects.length}`);
  console.log(`Unregistered / New Repositories: ${newRepos.length}`);

  if (newRepos.length > 0) {
    console.log('\nDiscovered candidates for addition:');
    newRepos.forEach(r => {
      console.log(` - ${r.name} (${r.primaryLanguage?.name || 'Unknown'}) | Homepage: ${r.homepageUrl || 'None'}`);
    });
    console.log('\nTo add a new project:');
    console.log('1. Add record to src/data/projects.ts');
    console.log('2. Run: node scripts/capture-previews.js');
    console.log('3. Run: node scripts/validate-projects.js');
    console.log('4. Run: npm run build');
  } else {
    console.log('✓ All active repositories are already represented in the showcase!');
  }
} catch (err) {
  console.error('Refresh error:', err.message);
}
