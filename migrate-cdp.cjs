// Direct CDP migration - connects to browser and posts all articles
const http = require('http');
const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');

const TARGET_ID = '4B635E4CF0A32B38BF2B523FFD91B1F0';
const WS_URL = `ws://127.0.0.1:18800/devtools/page/${TARGET_ID}`;

async function evaluate(ws, expression) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000);
    const timeout = setTimeout(() => reject(new Error('timeout')), 30000);
    
    const handler = (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.id === id) {
        clearTimeout(timeout);
        ws.off('message', handler);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result?.result?.value);
      }
    };
    
    ws.on('message', handler);
    ws.send(JSON.stringify({
      id,
      method: 'Runtime.evaluate',
      params: {
        expression,
        returnByValue: true,
        awaitPromise: true
      }
    }));
  });
}

async function main() {
  console.log('Connecting to browser...');
  const ws = new WebSocket(WS_URL);
  
  await new Promise((resolve, reject) => {
    ws.on('open', resolve);
    ws.on('error', reject);
  });
  
  console.log('Connected!');
  
  // Get CSRF token
  const csrfToken = await evaluate(ws, `
    (() => {
      const scripts = document.querySelectorAll('script');
      let csrfToken = '';
      scripts.forEach(s => {
        const m = s.textContent.match(/"csrfToken":"([^"]+)"/);
        if (m) csrfToken = m[1];
      });
      return csrfToken;
    })()
  `);
  
  if (!csrfToken) {
    console.error('No CSRF token found!');
    ws.close();
    return;
  }
  
  console.log('CSRF token:', csrfToken.substring(0, 10) + '...');
  
  const results = [];
  
  for (let i = 0; i < 13; i++) {
    const payload = fs.readFileSync(`/tmp/shopify-article-${i}.json`, 'utf-8');
    const data = JSON.parse(payload);
    
    console.log(`\n[${i+1}/13] Posting: ${data.article.handle}...`);
    
    try {
      // Use CDP to evaluate a fetch with the full payload
      const fetchCode = `
        (async () => {
          const r = await fetch('/store/kbdwgh-0m/blogs/114954862971/articles.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': ${JSON.stringify(csrfToken)}
            },
            body: ${JSON.stringify(payload)}
          });
          const text = await r.text();
          return JSON.stringify({status: r.status, body: text});
        })()
      `;
      
      const resultStr = await evaluate(ws, fetchCode);
      const result = JSON.parse(resultStr);
      
      if (result.status === 201) {
        const articleData = JSON.parse(result.body);
        console.log(`  ✅ Created! ID: ${articleData.article.id}, Handle: ${articleData.article.handle}`);
        results.push({
          index: i,
          file: data.article.handle + '.md',
          status: 'success',
          id: articleData.article.id,
          handle: articleData.article.handle,
          title: articleData.article.title
        });
      } else {
        console.log(`  ❌ HTTP ${result.status}: ${result.body.substring(0, 200)}`);
        results.push({
          index: i,
          file: data.article.handle + '.md',
          status: 'error',
          httpStatus: result.status,
          error: result.body.substring(0, 200)
        });
      }
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
      results.push({
        index: i,
        file: data.article.handle + '.md',
        status: 'error',
        error: e.message
      });
    }
    
    // Delay between requests
    await new Promise(r => setTimeout(r, 1000));
  }
  
  ws.close();
  
  console.log('\n\n=== MIGRATION RESULTS ===');
  console.log(JSON.stringify(results, null, 2));
  
  const success = results.filter(r => r.status === 'success');
  const failed = results.filter(r => r.status === 'error');
  console.log(`\nSuccessful: ${success.length}/13`);
  console.log(`Failed: ${failed.length}/13`);
  
  fs.writeFileSync('/tmp/migration-results.json', JSON.stringify(results, null, 2));
}

main().catch(console.error);
