// Read article JSON and output the body as a single-line JSON string for browser evaluate
const fs = require('fs');
const path = require('path');

const idx = parseInt(process.argv[2]);
const dir = path.join(__dirname, 'shopify-articles');
const data = JSON.parse(fs.readFileSync(path.join(dir, `article-${idx}.json`), 'utf-8'));

delete data.article.fileName;

// Output the JSON payload as a single line
process.stdout.write(JSON.stringify(data));
