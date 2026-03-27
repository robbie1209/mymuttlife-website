# MyMuttLife — Shopify Blog Migration Guide

**What this does:** Publishes all 45 blog articles onto the live mymuttlife.co.uk Shopify store blog.

**Why this matters:** All the SEO content ends up on the same domain as your products. One domain builds authority instead of two. Readers can buy directly.

---

## Rob's 3-Step Activation

### Step 1: Get a Shopify API Token (5 minutes)

1. Log in to your MyMuttLife Shopify admin
2. Go to **Settings → Apps and sales channels → Develop apps**
3. Click **Create an app** → name it "Blog Migration"
4. Click **Configure Admin API scopes** → tick `write_content`
5. Click **Save** → then **Install app**
6. Click **Reveal token once** → copy the `shpat_xxxxx` token
7. Also grab your store URL from Settings → Domains (looks like `mymuttlife.myshopify.com`)

### Step 2: Find Your Blog ID (2 minutes)

Run this once you have your token:
```bash
curl -s \
  -H "X-Shopify-Access-Token: YOUR_TOKEN" \
  https://YOUR_STORE.myshopify.com/admin/api/2024-01/blogs.json \
  | python3 -m json.tool | grep '"id"'
```

That gives you the blog ID (a long number like `123456789`).

If you don't have a "Help & Advice" blog yet, create one first:
- Shopify admin → Online Store → Blog posts → Manage blogs → Add blog

### Step 3: Run the Migration (10 minutes)

```bash
cd ~/clawd/projects/mymuttlife-website

SHOPIFY_STORE=mymuttlife.myshopify.com \
SHOPIFY_TOKEN=shpat_XXXXXXXXXXXXXXX \
SHOPIFY_BLOG_ID=123456789 \
node migrate-to-shopify.cjs --upload
```

That's it. The script uploads all 45 articles one by one (paced to stay within Shopify's rate limits), prints progress, and confirms when done.

---

## What Gets Uploaded

45 articles across:

- **Best-of guides** (beds, food, harnesses, toys, GPS trackers, insurance, probiotics, coats, calming products)
- **Training guides** (clicker training, recall, lead pulling, socialisation, crate training)
- **Health guides** (dental care, weight management, first aid, joint supplements, allergies, anxiety)
- **Lifestyle guides** (dog-friendly beaches, pubs, holidays, swimming, car travel, travel sickness)
- **Product-linked articles** (water bottles → shop links, slow feeder bowls → shop links, training clickers → shop links)
- **Breed-specific content** (Labrador food, German Shepherd food, exercise by breed)
- **Life stage content** (puppy proofing, introducing baby, senior dog care, separation anxiety)

**8 duplicate articles are automatically skipped** — the script keeps the more comprehensive version of each.

---

## After the Upload

1. Check mymuttlife.co.uk/blogs/news (or whatever your blog URL is) to see articles live
2. Submit your sitemap to Google Search Console: `https://mymuttlife.co.uk/sitemap.xml`
3. The 3 product-linked articles are ready to drive conversions:
   - `/blogs/news/best-portable-dog-water-bottles-uk` → links to your 2 water bottle products
   - `/blogs/news/best-dog-training-clickers-uk` → links to your 2-in-1 clicker/whistle
   - `/blogs/news/best-slow-feeder-dog-bowls-uk` → links to your slow feeder bowl

---

## Already Built (No Action Needed)

- ✅ 45 articles converted to Shopify HTML and ready to upload (`shopify-articles/`)
- ✅ 3 new buyer-intent articles written targeting products you already sell
- ✅ Migration script handles rate limiting, duplicate detection, error reporting
- ✅ Astro staging site rebuilt with all 60 pages at mutt.wemakeanyapp.co.uk

---

*Built by Johnny, March 22 2026*
