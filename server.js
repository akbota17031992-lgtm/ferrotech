/**
 * Ferrotech Industrial Web Server & Lead Management API
 * Zero-dependency pure Node.js HTTP server.
 * Default port: 8088 (avoids collisions with other local projects)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8088;
const BASE_DIR = __dirname;
const LEADS_FILE = path.join(BASE_DIR, 'leads.json');

// Ensure leads file exists
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // API Endpoints
  if (req.method === 'POST' && url.pathname === '/api/quote') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const lead = JSON.parse(body);
        lead.id = lead.id || ('FT-KZ-' + Date.now().toString().slice(-6));
        lead.createdAt = new Date().toISOString();
        lead.market = 'Kazakhstan';
        lead.currency = 'KZT';

        const currentLeads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8') || '[]');
        currentLeads.push(lead);
        fs.writeFileSync(LEADS_FILE, JSON.stringify(currentLeads, null, 2), 'utf-8');

        console.log(`[LEAD RECEIVED] Quote #${lead.id} from ${lead.company || lead.phone} (Kazakhstan)`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, leadId: lead.id, message: 'Заявка принята в ТОО Ferrotech Kazakhstan!' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(BASE_DIR, url.pathname === '/' ? 'index.html' : url.pathname);

  // Security check to prevent directory traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(BASE_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` ⬢ ТОО FERROTECH KAZAKHSTAN PORTAL RUNNING LOCALLY`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Leads database: ${LEADS_FILE}`);
  console.log(`====================================================`);
});

