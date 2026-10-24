// scripts/deploy-netlify.cjs
// Deploys dist.zip directly to Netlify using the official Netlify REST API
const https = require('https');
const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync('/Users/shaikubaidullah/.gemini/config/mcp_config.json', 'utf8'));
const token = config.mcpServers.netlify.env.NETLIFY_AUTH_TOKEN;

const zipPath = path.resolve(__dirname, '../dist.zip');
if (!fs.existsSync(zipPath)) {
  console.error('dist.zip not found!');
  process.exit(1);
}

const siteName = 'shaikubaidullah-showcase';

function request(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(data);
        const str = buffer.toString('utf8');
        try {
          resolve({ status: res.statusCode, headers: res.headers, data: JSON.parse(str) });
        } catch (e) {
          resolve({ status: res.statusCode, headers: res.headers, raw: str });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function deploy() {
  console.log(`Checking Netlify sites for "${siteName}"...`);
  const sitesRes = await request({
    hostname: 'api.netlify.com',
    path: '/api/v1/sites',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Showcase-Deployer'
    }
  });

  let site = (sitesRes.data || []).find(s => s.name === siteName);

  if (!site) {
    console.log(`Site "${siteName}" not found. Creating new site...`);
    const createRes = await request({
      hostname: 'api.netlify.com',
      path: '/api/v1/sites',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Showcase-Deployer'
      }
    }, JSON.stringify({ name: siteName }));

    if (createRes.status !== 201 && createRes.status !== 200) {
      console.log('Could not create with preferred name. Falling back to auto-named site...');
      const fallbackCreate = await request({
        hostname: 'api.netlify.com',
        path: '/api/v1/sites',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Showcase-Deployer'
        }
      }, JSON.stringify({}));
      site = fallbackCreate.data;
    } else {
      site = createRes.data;
    }
  }

  console.log(`Target site found/created: ${site.name} (ID: ${site.id})`);
  console.log(`Uploading dist.zip (${(fs.statSync(zipPath).size / 1024).toFixed(1)} KB)...`);

  const zipBuffer = fs.readFileSync(zipPath);
  const deployRes = await request({
    hostname: 'api.netlify.com',
    path: `/api/v1/sites/${site.id}/deploys`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/zip',
      'Content-Length': zipBuffer.length,
      'User-Agent': 'Showcase-Deployer'
    }
  }, zipBuffer);

  console.log('Deploy response status:', deployRes.status);
  const deployData = deployRes.data;
  console.log('Deploy ID:', deployData.id);
  console.log('Deploy state:', deployData.state);
  console.log('Production URL:', site.ssl_url || site.url || `https://${site.name}.netlify.app`);
  console.log('Deploy URL:', deployData.deploy_ssl_url || deployData.ssl_url);
}

deploy().catch(console.error);
