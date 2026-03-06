# MyMuttLife — Deployment Guide

## Current State
- **Build:** ✅ 25 pages, 18 blog articles, sitemap generated
- **Local dev:** `npm run dev` → http://localhost:4321
- **Production build:** `npm run build` → `/dist/`
- **Domain to point:** `mymuttlife.co.uk`

---

## Option A: Cloudflare Pages (Recommended — Free & Fast)

Best option: free hosting, global CDN, auto-deploy from GitHub, custom domain in minutes.

### Steps

1. **Go to:** https://pages.cloudflare.com → New Project → Connect GitHub
2. **Select repo:** `mymuttlife-website`
3. **Build settings:**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: 18+
4. **Deploy** → Cloudflare gives you a `*.pages.dev` URL
5. **Custom domain:** Pages → Custom Domains → Add `mymuttlife.co.uk`
6. **DNS update:** Add CNAME at registrar:
   ```
   CNAME  mymuttlife.co.uk  →  <your-project>.pages.dev
   ```
   (Cloudflare auto-handles this if domain is on Cloudflare)

**Timeline:** ~10 minutes once set up. Auto-deploys on every git push.

---

## Option B: Mac Mini + Cloudflare Tunnel (Current Infrastructure)

Use the same setup as other projects (Command Centre, PIM, etc.).

### Steps

1. **Build the site:**
   ```bash
   cd ~/clawd/projects/mymuttlife-website
   npm run build
   ```

2. **Serve the static files:**
   ```bash
   npx serve dist -l 4399
   # Or add to LaunchAgents for auto-start
   ```

3. **Add Cloudflare tunnel route:**
   Edit `~/.cloudflared/config.yml`:
   ```yaml
   - hostname: mymuttlife.co.uk
     service: http://localhost:4399
   ```
   Restart tunnel: `cloudflared service restart`

4. **DNS at registrar:**
   Add CNAME: `mymuttlife.co.uk → <tunnel-id>.cfargotunnel.com`

**Downside:** Depends on Mac Mini uptime. Good for now, Cloudflare Pages better long-term.

---

## Google Search Console (GSC) Setup

Once domain is live, do this **immediately** to get indexed on Google.

### Steps

1. **Go to:** https://search.google.com/search-console
2. **Add property:** URL prefix → `https://mymuttlife.co.uk`
3. **Verify ownership:** 
   - Download the HTML verification file (e.g., `google1234abcd.html`)
   - Place it in `/public/` folder of the project
   - Rebuild and deploy
   - Click Verify in GSC
4. **Submit sitemap:** 
   - In GSC: Sitemaps → Add sitemap URL
   - Enter: `https://mymuttlife.co.uk/sitemap-index.xml`
5. **Request indexing:** 
   - URL Inspection → Enter homepage URL → Request Indexing
   - Repeat for a few key articles

**What to expect:** 
- GSC picks up sitemap within 24h
- First articles indexed within 3-7 days
- Ranking data starts appearing in 2-4 weeks

---

## Bing/Yandex (Already Indexed)

Bing is already crawling `mymuttlife.co.uk`. Once domain is live:
1. **Bing Webmaster Tools:** https://www.bing.com/webmasters → Add site → Submit sitemap
2. Bing often indexes faster than Google for new sites

---

## Affiliate Links (Next Step)

Articles have placeholder affiliate notes — replace with real links when live:

| Brand | Program | Link |
|-------|---------|------|
| Butternut Box | butternutbox.com/refer | TBC |
| tails.com | affiliate.tails.com | TBC |
| Lily's Kitchen | TBC | TBC |
| Forthglade | TBC | TBC |
| Different Dog | differentdog.com | TBC |

Sign up via **Awin** (uk.awin.com) — most UK pet food brands are on there.
Also check **CJ Affiliate** and **Rakuten** for any not on Awin.

---

## Post-Launch Checklist

- [ ] Deploy to production (Option A or B above)
- [ ] Verify domain resolves correctly  
- [ ] Submit to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Sign up for Awin and get affiliate links
- [ ] Replace affiliate placeholders in articles
- [ ] Set up GA4 analytics (add tracking ID to BaseLayout)
- [ ] Add email signup (ConvertKit/Beehiiv — free tier)
