// Builds fetch JS for browser evaluate - includes CSRF token extraction
const fs = require('fs');
const path = require('path');

const idx = parseInt(process.argv[2]);
const dir = path.join(__dirname, 'shopify-articles');
const data = JSON.parse(fs.readFileSync(path.join(dir, `article-${idx}.json`), 'utf-8'));

// Remove fileName from article data
const fileName = data.article.fileName;
delete data.article.fileName;

const payload = JSON.stringify(data);

// We need to escape backticks and ${ in payload for template literal safety
// But actually we're using JSON.stringify which should handle it
const js = `async () => {
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
  return r.status + ' ' + text.substring(0, 300);
}`;

fs.writeFileSync(path.join(dir, `fetch2-${idx}.js`), js);
console.log(`Built fetch2-${idx}.js for: ${data.article.title} (handle: ${data.article.handle}) [${fileName}]`);
