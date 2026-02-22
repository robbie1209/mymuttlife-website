// This script outputs a JSON object suitable for the browser act request
// Usage: node execute-post.cjs <index>
// Outputs the fn string for browser evaluate
const fs = require('fs');
const path = require('path');

const idx = parseInt(process.argv[2]);
const dir = path.join(__dirname, 'shopify-articles');
const data = JSON.parse(fs.readFileSync(path.join(dir, `article-${idx}.json`), 'utf-8'));
const fileName = data.article.fileName;
delete data.article.fileName;

const payload = JSON.stringify(data);

// Build the async function as a string
const fn = `async () => {
  const scripts = document.querySelectorAll('script');
  let csrfToken = '';
  scripts.forEach(s => { const m = s.textContent.match(/"csrfToken":"([^"]+)"/); if (m) csrfToken = m[1]; });
  if (!csrfToken) return 'ERROR: No CSRF token found';
  const r = await fetch('/store/kbdwgh-0m/blogs/114954862971/articles.json', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken},
    body: ${JSON.stringify(payload)}
  });
  const text = await r.text();
  return r.status + ' ' + text.substring(0, 500);
}`;

console.log(fn);
