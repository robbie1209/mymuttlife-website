// Split article payload into chunks for browser injection
// Usage: node chunk-and-post.cjs <index>
// Outputs: lines of commands - first N are "set chunk" calls, last is "execute"
const fs = require('fs');

const idx = parseInt(process.argv[2]);
const payload = fs.readFileSync(`/tmp/shopify-article-${idx}.json`, 'utf-8');

// Split into 4KB chunks
const CHUNK_SIZE = 4000;
const chunks = [];
for (let i = 0; i < payload.length; i += CHUNK_SIZE) {
  chunks.push(payload.substring(i, i + CHUNK_SIZE));
}

console.log(JSON.stringify({
  totalChunks: chunks.length,
  totalSize: payload.length,
  chunks: chunks
}));
