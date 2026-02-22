// Generate chunk functions for a given article index
const fs = require('fs');

const idx = parseInt(process.argv[2]);
const payload = fs.readFileSync(`/tmp/shopify-article-${idx}.json`, 'utf-8');

const CHUNK_SIZE = 6000;
const chunks = [];
for (let i = 0; i < payload.length; i += CHUNK_SIZE) {
  chunks.push(payload.substring(i, i + CHUNK_SIZE));
}

// Output each chunk's fn as a separate line
console.log('RESET:() => { window.__chunks = []; return "reset"; }');
for (let i = 0; i < chunks.length; i++) {
  console.log('CHUNK:() => { window.__chunks.push(' + JSON.stringify(chunks[i]) + '); return window.__chunks.length; }');
}
console.log('POST:async () => { const result = await window.__postFromChunks(); return JSON.stringify(result); }');
