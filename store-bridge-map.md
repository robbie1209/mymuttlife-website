# mymuttlife — Blog-to-Store Bridge Map
*Created: 14 Feb 2026*

## The Two Assets

| Asset | URL | Platform | Content |
|-------|-----|----------|---------|
| **Store** | mymuttlife.co.uk | Shopify | 36 dog accessories (beds, coats, toys, bowls, leads, clickers) |
| **Blog** | mymuttlife.pages.dev | Astro/Cloudflare Pages | 11 SEO articles (dog food, insurance, beds, coats, supplements, exercise, gear) |

**Problem:** These are completely disconnected. Blog readers can't find the store. Store visitors can't find the blog content.

---

## Article → Product Collection Mapping

| Blog Article | Matching Store Products | CTA Recommendation |
|-------------|----------------------|-------------------|
| `best-dog-beds-uk.md` | Dog beds collection | "Shop our favourite beds → mymuttlife.co.uk/collections/dog-beds" |
| `best-dog-coats-uk.md` | Dog coats collection | "Browse our waterproof coats → mymuttlife.co.uk/collections/dog-coats" |
| `dog-walking-essentials-kit-guide.md` | Leads, harnesses, treat bags | "Get kitted out for walks → mymuttlife.co.uk/collections/frontpage" |
| `best-dog-food-labradors-uk.md` | Slow feeder bowls | "Pair with a slow feeder → mymuttlife.co.uk" (+ Amazon affiliate for food) |
| `best-dog-food-german-shepherds-uk.md` | Slow feeder bowls | Same as above |
| `best-joint-supplements-dogs-uk.md` | No direct match | Keep Amazon affiliate links only |
| `best-dog-insurance-uk.md` | No direct match | Keep insurance affiliate links only |
| `dog-exercise-breed-guide.md` | Fetch toys, training clickers | "Shop exercise toys → mymuttlife.co.uk" |
| `keeping-dogs-calm-fireworks-uk.md` | Anxiety toys/comfort items | "Browse calming toys → mymuttlife.co.uk" |
| `puppy-proofing-home-uk.md` | Training clickers, puppy toys | "Shop puppy essentials → mymuttlife.co.uk" |
| `senior-dog-care-guide.md` | Orthopaedic beds, gentle toys | "Shop senior dog comfort → mymuttlife.co.uk" |

**6 of 11 articles have direct product matches.** The remaining 5 still earn via Amazon/insurance affiliates.

---

## Integration Options (Ranked)

### Option A: Shopify Native Blog (Recommended)
**Migrate the 11 articles into Shopify's built-in blog at mymuttlife.co.uk/blogs/tips**

**Pros:**
- Everything on one domain (best for SEO — domain authority isn't split)
- Product embeds are native (can show product cards in blog posts)
- One analytics setup, one Google Search Console property
- Shopify handles SSL, hosting, CDN

**Cons:**
- Shopify's blog editor is basic (no MDX, limited formatting)
- Lose the Astro site's performance edge
- Migration effort: ~2 hours to copy 11 articles

**Verdict:** Best long-term option. The SEO benefit of one domain outweighs everything else.

### Option B: Keep Astro Blog Separate, Add Cross-Links
**Keep mymuttlife.pages.dev, add links/banners to the Shopify store**

**Pros:**
- Zero migration effort — just add CTAs to existing articles
- Astro blog is fast and well-structured
- Can be done in 30 minutes

**Cons:**
- Two separate domains = split SEO authority
- Google treats them as different sites
- Harder to track customer journey (blog → store)

**Verdict:** Quick win, but sub-optimal long-term.

### Option C: Subdomain (blog.mymuttlife.co.uk)
**Point a subdomain to Cloudflare Pages**

**Pros:**
- Branded URL (better than .pages.dev)
- Blog benefits from main domain's authority (somewhat)

**Cons:**
- Google treats subdomains as semi-separate
- Still two platforms to manage
- Adds DNS complexity

**Verdict:** Compromise option. Better than B, worse than A.

---

## Recommended Execution Plan

### Phase 1: Quick Win (This Week — Johnny Does It)
- Add "Shop at My Mutt Life" banner/CTA to every blog article on the Astro site
- Link banner to mymuttlife.co.uk
- Add store link to blog navigation
- Add blog link to Shopify store (if Rob gives admin access)
- **Time: 1 hour. Rob time: 0.**

### Phase 2: Shopify Blog Migration (Next Week)
- Copy all 11 articles into Shopify's blog at mymuttlife.co.uk/blogs/tips
- Maintain SEO metadata (titles, descriptions, schema)
- Add product recommendation cards within articles
- Set up 301 redirects from mymuttlife.pages.dev to mymuttlife.co.uk/blogs/tips/[slug]
- Submit new URLs to Google Search Console
- **Time: 3-4 hours. Rob time: 15 min (Shopify blog access + GSC submission).**

### Phase 3: Content Engine (Ongoing)
- Publish 2 new articles per week directly on Shopify blog
- Every article includes at least one store product link
- Build email list with blog-embedded signup form
- **Time: 2 hours/week (Johnny). Rob time: 0.**

---

## Revenue Projection (After Bridge)

| Timeline | Blog Traffic | Store Clicks | Orders | Revenue | Affiliate |
|----------|-------------|--------------|--------|---------|-----------|
| Month 1-3 | 50-200/mo | 10-40 | 1-2 | £25-50 | £0-20 |
| Month 6 | 500-1,000/mo | 100-200 | 5-10 | £125-250 | £50-100 |
| Month 12 | 2,000-5,000/mo | 400-1,000 | 20-50 | £500-1,250 | £100-300 |
| Month 18 | 5,000-10,000/mo | 1,000-2,000 | 50-100 | £1,250-2,500 | £200-500 |

**Combined (store + affiliate): £600-3,000/month at 18 months. Zero ongoing Rob time.**

---

## Action Items

- [ ] **Johnny:** Add store CTAs to all 11 blog articles (Phase 1)
- [ ] **Rob:** Submit mymuttlife.co.uk to Google Search Console (5 min)
- [ ] **Rob:** Register Amazon Associates account (10 min)
- [ ] **Rob:** Give Johnny Shopify blog access for migration (2 min)
- [ ] **Johnny:** Migrate articles to Shopify blog (Phase 2)
- [ ] **Johnny:** Continue 2 articles/week content publishing (Phase 3)
