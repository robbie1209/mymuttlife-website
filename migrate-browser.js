// This script runs IN the browser context. It fetches article data from local server and posts to Shopify.
(async function() {
  const results = [];
  
  // Get CSRF token
  const scripts = document.querySelectorAll('script');
  let csrfToken = '';
  scripts.forEach(s => {
    const m = s.textContent.match(/"csrfToken":"([^"]+)"/);
    if (m) csrfToken = m[1];
  });
  
  if (!csrfToken) {
    window.__migrationResults = [{error: 'No CSRF token found'}];
    return;
  }
  
  for (let i = 0; i < 13; i++) {
    try {
      // Fetch article data from local server
      const dataResp = await fetch('http://localhost:19876/article/' + i);
      const articleData = await dataResp.json();
      
      // Post to Shopify
      const r = await fetch('/store/kbdwgh-0m/blogs/114954862971/articles.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(articleData)
      });
      
      const responseData = await r.json();
      
      if (r.status === 201 && responseData.article) {
        results.push({
          index: i,
          status: 'success',
          id: responseData.article.id,
          handle: responseData.article.handle,
          title: responseData.article.title
        });
      } else {
        results.push({
          index: i,
          status: 'error',
          httpStatus: r.status,
          error: JSON.stringify(responseData).substring(0, 200)
        });
      }
    } catch (e) {
      results.push({
        index: i,
        status: 'error',
        error: e.message
      });
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  window.__migrationResults = results;
})();
