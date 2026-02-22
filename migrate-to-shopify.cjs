// Markdown to HTML converter and Shopify article data builder
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src/content/blog');
const files = [
  'best-dog-beds-uk.md',
  'best-dog-coats-uk.md',
  'best-dog-food-german-shepherds-uk.md',
  'best-dog-food-labradors-uk.md',
  'best-dog-insurance-uk.md',
  'best-dog-probiotics-uk.md',
  'best-joint-supplements-dogs-uk.md',
  'dog-exercise-breed-guide.md',
  'dog-walking-essentials-kit-guide.md',
  'keeping-dogs-calm-fireworks-uk.md',
  'puppy-proofing-home-uk.md',
  'raw-feeding-vs-kibble-uk.md',
  'senior-dog-care-guide.md'
];

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
  
  // Remove any HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  
  // Handle tables
  html = html.replace(/(\|.+\|)\n(\|[-:\s|]+\|)\n((?:\|.+\|\n?)+)/g, (match, headerRow, sepRow, bodyRows) => {
    const headers = headerRow.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = bodyRows.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('\n');
    return `<table>\n<thead><tr>${headers}</tr></thead>\n<tbody>\n${rows}\n</tbody>\n</table>`;
  });
  
  // Handle headings (must be before bold processing since ## starts with #)
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Handle blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Merge adjacent blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');
  
  // Handle horizontal rules
  html = html.replace(/^---$/gm, '<hr>');
  
  // Handle images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  
  // Handle links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Handle bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Handle inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Handle unordered lists
  const lines = html.split('\n');
  let result = [];
  let inList = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const listMatch = line.match(/^(\s*)[-*] (.+)$/);
    
    if (listMatch) {
      if (!inList) {
        result.push('<ul>');
        inList = true;
      }
      result.push(`<li>${listMatch[2]}</li>`);
    } else {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push(line);
    }
  }
  if (inList) result.push('</ul>');
  
  html = result.join('\n');
  
  // Handle ordered lists
  const lines2 = html.split('\n');
  let result2 = [];
  let inOl = false;
  
  for (let i = 0; i < lines2.length; i++) {
    const line = lines2[i];
    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    
    if (olMatch) {
      if (!inOl) {
        result2.push('<ol>');
        inOl = true;
      }
      result2.push(`<li>${olMatch[1]}</li>`);
    } else {
      if (inOl) {
        result2.push('</ol>');
        inOl = false;
      }
      result2.push(line);
    }
  }
  if (inOl) result2.push('</ol>');
  
  html = result2.join('\n');
  
  // Wrap remaining text blocks in <p> tags
  const finalLines = html.split('\n\n');
  html = finalLines.map(block => {
    block = block.trim();
    if (!block) return '';
    // Don't wrap if already wrapped in block-level tags
    if (/^<(h[1-6]|ul|ol|li|table|thead|tbody|tr|td|th|blockquote|hr|div|p|img|pre|code)/.test(block)) {
      return block;
    }
    // Don't wrap empty lines
    if (!block.trim()) return '';
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n\n');
  
  // Clean up extra whitespace and empty paragraphs  
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  
  return html.trim();
}

const articles = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const parsed = parseFrontmatter(content);
  if (!parsed) {
    console.error(`Failed to parse: ${file}`);
    return;
  }
  
  const { frontmatter: fm, body } = parsed;
  const bodyHtml = markdownToHtml(body);
  
  articles.push({
    title: fm.title || '',
    body_html: bodyHtml,
    handle: fm.slug || file.replace('.md', ''),
    tags: fm.category || '',
    published: true,
    published_at: fm.publishDate ? `${fm.publishDate}T09:00:00+00:00` : undefined,
    metafields_global_description_tag: fm.description || '',
    metafields_global_title_tag: fm.title || '',
    fileName: file
  });
});

// Write each article as a separate JSON file for the browser to pick up
const outputDir = path.join(__dirname, 'shopify-articles');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

articles.forEach((article, i) => {
  const outputPath = path.join(outputDir, `article-${i}.json`);
  fs.writeFileSync(outputPath, JSON.stringify({ article }, null, 2));
  console.log(`Prepared: ${article.fileName} -> article-${i}.json (handle: ${article.handle})`);
});

console.log(`\nTotal articles prepared: ${articles.length}`);
