const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
  console.log('Article server on http://localhost:19876');
});
