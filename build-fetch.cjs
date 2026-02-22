// Builds a fetch JS command for a given article index
const fs = require('fs');
const path = require('path');

const idx = parseInt(process.argv[2]);
const dir = path.join(__dirname, 'shopify-articles');
const data = JSON.parse(fs.readFileSync(path.join(dir, `article-${idx}.json`), 'utf-8'));

// Remove fileName from article data (not a Shopify field)
delete data.article.fileName;

const payload = JSON.stringify(data);

const js = `async () => {
  const r = await fetch('/store/kbdwgh-0m/blogs/114954862971/articles.json', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: ${JSON.stringify(payload)}
  });
  const text = await r.text();
  return r.status + ' ' + text.substring(0, 500);
}`;

fs.writeFileSync(path.join(dir, `fetch-${idx}.js`), js);
console.log(`Built fetch-${idx}.js for: ${data.article.title} (handle: ${data.article.handle})`);
