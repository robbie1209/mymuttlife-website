/**
 * MyMuttLife → Shopify Blog Migration Script
 * 
 * STEP 1: Get a Shopify Admin API token
 * ─────────────────────────────────────
 * 1. Log in to mymuttlife.co.uk Shopify admin
 * 2. Settings → Apps and sales channels → Develop apps
 * 3. Create app → name it "Blog Migration"
 * 4. Configure Admin API scopes: write_content (blog articles)
 * 5. Install app → get Admin API access token (shpat_xxxxx)
 * 6. Find your myshopify.com store URL (Settings → Domains)
 * 
 * STEP 2: Run this script
 * ─────────────────────────────────────
 *   SHOPIFY_STORE=your-store.myshopify.com \
 *   SHOPIFY_TOKEN=shpat_xxxxx \
 *   SHOPIFY_BLOG_ID=1234567890 \
 *   node migrate-to-shopify.cjs --upload
 * 
 * To find your blog ID (once you have token):
 *   curl -H "X-Shopify-Access-Token: YOUR_TOKEN" \
 *        https://YOUR_STORE.myshopify.com/admin/api/2024-01/blogs.json
 * 
 * STEP 3 (optional): Dry run — just build JSON, no upload
 *   node migrate-to-shopify.cjs
 * 
 * ─────────────────────────────────────
 * Updated: 2026-03-22 — auto-discovers all 50+ articles
 */

'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');

// ── Config ──────────────────────────────────────────────────────────────────
const SHOPIFY_STORE  = process.env.SHOPIFY_STORE  || '';  // e.g. mymuttlife.myshopify.com
const SHOPIFY_TOKEN  = process.env.SHOPIFY_TOKEN  || '';  // shpat_xxxxx
const SHOPIFY_BLOG_ID= process.env.SHOPIFY_BLOG_ID|| '';  // numeric blog ID
const DRY_RUN        = !process.argv.includes('--upload');
const DELAY_MS       = 600; // stay within Shopify rate limits (2 req/s)

const blogDir = path.join(__dirname, 'src/content/blog');
const outputDir = path.join(__dirname, 'shopify-articles');

// ── De-duplicate: prefer the "complete" / "compared" / "vets" variant ──────
// When two files cover the same topic, keep the more comprehensive one.
const SKIP_DUPLICATES = new Set([
  'best-dog-food-labradors-uk.md',          // → use labrador-retrievers-uk.md
  'best-dog-insurance-uk.md',               // → use compared.md
  'best-joint-supplements-dogs-uk.md',      // → use for-dogs-uk.md
  'keeping-dogs-calm-fireworks-uk.md',      // → use during-fireworks-uk.md
  'puppy-proofing-home-uk.md',             // → use complete-checklist-uk.md
  'raw-feeding-vs-kibble-uk.md',            // → use vets.md
  'senior-dog-care-guide.md',              // → use complete-guide-uk.md
  'dog-exercise-breed-guide.md',           // → use how-much-exercise breed guide
]);

// ── Parsers ──────────────────────────────────────────────────────────────────
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const fm = {};
  match[1].split('\n').forEach(line => {
    const m = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (m) fm[m[1]] = m[2];
  });
  return { frontmatter: fm, body: match[2].trim() };
}

function markdownToHtml(md) {
  let html = md;

  // Remove HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // Tables
  html = html.replace(/(\|.+\|)\n(\|[-:\s|]+\|)\n((?:\|.+\|\n?)+)/g, (match, headerRow, _sep, bodyRows) => {
    const headers = headerRow.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = bodyRows.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('\n');
    return `<table>\n<thead><tr>${headers}</tr></thead>\n<tbody>\n${rows}\n</tbody>\n</table>`;
  });

  // Headings
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm,  '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm,   '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm,    '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // HR
  html = html.replace(/^---$/gm, '<hr>');

  // Images then links (order matters)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Bold / italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Unordered lists
  {
    const lines = html.split('\n');
    const out = [];
    let inList = false;
    for (const line of lines) {
      const m = line.match(/^(\s*)[-*] (.+)$/);
      if (m) {
        if (!inList) { out.push('<ul>'); inList = true; }
        out.push(`<li>${m[2]}</li>`);
      } else {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push(line);
      }
    }
    if (inList) out.push('</ul>');
    html = out.join('\n');
  }

  // Ordered lists
  {
    const lines = html.split('\n');
    const out = [];
    let inList = false;
    for (const line of lines) {
      const m = line.match(/^\d+\.\s+(.+)$/);
      if (m) {
        if (!inList) { out.push('<ol>'); inList = true; }
        out.push(`<li>${m[1]}</li>`);
      } else {
        if (inList) { out.push('</ol>'); inList = false; }
        out.push(line);
      }
    }
    if (inList) out.push('</ol>');
    html = out.join('\n');
  }

  // Wrap paragraph blocks
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h[1-6]|ul|ol|li|table|thead|tbody|tr|td|th|blockquote|hr|div|p|img|pre|code)/.test(block)) return block;
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n\n');

  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');

  return html.trim();
}

// ── Build article list ───────────────────────────────────────────────────────
const allFiles = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md'))
  .filter(f => !SKIP_DUPLICATES.has(f))
  .sort();

console.log(`\n📚 Found ${allFiles.length} articles to process (skipping ${SKIP_DUPLICATES.size} duplicates)\n`);

const articles = [];

for (const file of allFiles) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const parsed = parseFrontmatter(content);
  if (!parsed) {
    console.error(`  ⚠️  Failed to parse frontmatter: ${file}`);
    continue;
  }

  const { frontmatter: fm, body } = parsed;
  const bodyHtml = markdownToHtml(body);

  articles.push({
    title: fm.title || file.replace('.md', ''),
    body_html: bodyHtml,
    handle: fm.slug || file.replace('.md', ''),
    tags: fm.category || 'Dog Care',
    published: true,
    published_at: fm.publishDate ? `${fm.publishDate}T09:00:00+00:00` : new Date().toISOString(),
    summary_html: fm.description || '',
    metafields_global_description_tag: fm.description || '',
    metafields_global_title_tag: fm.title || '',
    _fileName: file
  });
}

// ── Write JSON outputs ───────────────────────────────────────────────────────
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

articles.forEach((article, i) => {
  const { _fileName, ...shopifyPayload } = article;
  const outputPath = path.join(outputDir, `article-${String(i).padStart(2, '0')}-${article.handle}.json`);
  fs.writeFileSync(outputPath, JSON.stringify({ article: shopifyPayload }, null, 2));
  console.log(`  ✅ Built: ${_fileName} → ${path.basename(outputPath)}`);
});

console.log(`\n📦 Total articles built: ${articles.length}`);
console.log(`📁 Output directory: ${outputDir}/\n`);

// ── Upload to Shopify ────────────────────────────────────────────────────────
if (DRY_RUN) {
  console.log('ℹ️  DRY RUN — JSON files built but NOT uploaded.');
  console.log('   To upload: SHOPIFY_STORE=xxx SHOPIFY_TOKEN=yyy SHOPIFY_BLOG_ID=zzz node migrate-to-shopify.cjs --upload\n');
  process.exit(0);
}

if (!SHOPIFY_STORE || !SHOPIFY_TOKEN || !SHOPIFY_BLOG_ID) {
  console.error('❌ Missing required env vars: SHOPIFY_STORE, SHOPIFY_TOKEN, SHOPIFY_BLOG_ID');
  process.exit(1);
}

function shopifyPost(articleData) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ article: articleData });
    const options = {
      hostname: SHOPIFY_STORE,
      path: `/admin/api/2024-01/blogs/${SHOPIFY_BLOG_ID}/articles.json`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_TOKEN,
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed.article);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        } catch (e) {
          reject(new Error(`Parse error: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log(`\n🚀 Uploading ${articles.length} articles to Shopify...\n`);
  const results = { success: 0, failed: 0, errors: [] };

  for (const article of articles) {
    const { _fileName, ...payload } = article;
    try {
      const created = await shopifyPost(payload);
      console.log(`  ✅ Uploaded: "${created.title}" (id: ${created.id})`);
      results.success++;
    } catch (err) {
      console.error(`  ❌ Failed: ${_fileName} — ${err.message}`);
      results.failed++;
      results.errors.push({ file: _fileName, error: err.message });
    }
    await sleep(DELAY_MS);
  }

  console.log('\n── Upload Summary ──────────────────────────────');
  console.log(`  ✅ Successful: ${results.success}`);
  console.log(`  ❌ Failed:     ${results.failed}`);

  if (results.errors.length > 0) {
    console.log('\n  Errors:');
    results.errors.forEach(e => console.log(`    - ${e.file}: ${e.error}`));
  }

  console.log('\nDone! Articles are now in your Shopify blog.');
  console.log(`Check: https://${SHOPIFY_STORE.replace('.myshopify.com', '')}.myshopify.com/admin/blogs/${SHOPIFY_BLOG_ID}/articles\n`);
})();
