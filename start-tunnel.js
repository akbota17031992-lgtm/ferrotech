const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const URL_FILE = path.join(__dirname, 'tunnel-url.txt');
let currentUrl = null;

function startTunnel() {
  console.log('[TUNNEL] Connecting with keep-alive to nokey@localhost.run...');

  const ssh = spawn('ssh', [
    '-R', '80:localhost:8088',
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'ServerAliveInterval=15',
    '-o', 'ServerAliveCountMax=999',
    '-o', 'ExitOnForwardFailure=yes',
    'nokey@localhost.run'
  ]);

  const handleOutput = (data) => {
    const text = data.toString();
    const matches = text.match(/https:\/\/[a-z0-9]+\.lhr\.life/g);
    if (matches && matches.length > 0) {
      const url = matches[matches.length - 1];
      if (url !== currentUrl) {
        currentUrl = url;
        fs.writeFileSync(URL_FILE, url, 'utf-8');
        console.log(`\n====================================================`);
        console.log(`  PUBLIC TEMPORARY URL: ${url}`);
        console.log(`====================================================\n`);
      }
    }
  };

  ssh.stdout.on('data', handleOutput);
  ssh.stderr.on('data', handleOutput);

  ssh.on('error', (err) => {
    console.error('[TUNNEL] SSH error:', err.message);
  });

  ssh.on('close', (code) => {
    console.log(`[TUNNEL] Connection closed (code: ${code}). Reconnecting in 3s...`);
    setTimeout(startTunnel, 3000);
  });
}

startTunnel();
