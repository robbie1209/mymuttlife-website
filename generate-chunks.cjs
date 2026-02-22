// Generate chunk commands for each article
// Output: JSON array of {idx, chunk_idx, fn} objects for set operations
// Then a final {idx, fn} for the post operation
const fs = require('fs');

const idx = parseInt(process.argv[2]);
const payload = fs.readFileSync(`/tmp/shopify-article-${idx}.json`, 'utf-8');

const CHUNK_SIZE = 3500;
const chunks = [];
for (let i = 0; i < payload.length; i += CHUNK_SIZE) {
  chunks.push(payload.substring(i, i + CHUNK_SIZE));
}

const commands = [];

// Reset chunks
commands.push({
  type: 'reset',
  fn: `() => { window.__chunks = []; return 'reset'; }`
});

// Add chunks
for (let i = 0; i < chunks.length; i++) {
  commands.push({
    type: 'chunk',
    chunkIdx: i,
    fn: `() => { window.__chunks.push(${JSON.stringify(chunks[i])}); return window.__chunks.length; }`
  });
}

// Post
commands.push({
  type: 'post',
  fn: `async () => { const result = await window.__postFromChunks(); return JSON.stringify(result); }`
});

console.log(JSON.stringify({
  articleIdx: idx,
  totalChunks: chunks.length,
  totalCommands: commands.length,
  payloadSize: payload.length,
  commands: commands
}, null, 2));
