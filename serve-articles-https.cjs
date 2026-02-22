const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

// Generate self-signed cert
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

// Create self-signed cert using openssl via exec
const { execSync } = require('child_process');

// Generate key and cert
execSync('openssl req -x509 -newkey rsa:2048 -keyout /tmp/art-key.pem -out /tmp/art-cert.pem -days 1 -nodes -subj "/CN=localhost"', { stdio: 'ignore' });

const server = https.createServer({
  key: fs.readFileSync('/tmp/art-key.pem'),
  cert: fs.readFileSync('/tmp/art-cert.pem')
}, (req, res) => {
  const match = req.url.match(/^\/article\/(\d+)$/);
  if (match) {
    const idx = parseInt(match[1]);
    const filePath = `/tmp/shopify-article-${idx}.json`;
    if (fs.existsSync(filePath)) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(fs.readFileSync(filePath));
      return;
    }
  }
  res.writeHead(404);
  res.end('not found');
});

server.listen(19876, () => {
  console.log('HTTPS Article server on https://localhost:19876');
});
