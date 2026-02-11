#!/bin/bash
# Prepare content files from draft markdown into Astro content collection

DRAFTS=~/clawd/projects/content-drafts
CONTENT=~/clawd/projects/mymuttlife-website/src/content/blog

mkdir -p "$CONTENT"

# Helper: strip metadata lines from draft markdown
process_article() {
  local src="$1"
  local slug="$2"
  local title="$3"
  local description="$4"
  local category="$5"
  local emoji="$6"
  local readTime="$7"
  local dest="$CONTENT/${slug}.md"

  cat > "$dest" << FRONTMATTER
---
title: "${title}"
description: "${description}"
category: "${category}"
emoji: "${emoji}"
readTime: "${readTime}"
publishDate: "2026-02-01"
modifiedDate: "2026-02-11"
slug: "${slug}"
---

FRONTMATTER

  # Strip the first few metadata lines (title, meta desc, keywords, word count, status, etc.)
  # Then append the actual content
  cat "$src" | \
    sed '/^# /d' | \
    sed '/^\*Last updated:/d' | \
    sed '/^\*\*Meta [Dd]escription:\*\*/d' | \
    sed '/^\*\*Meta title:\*\*/d' | \
    sed '/^\*\*Target [Kk]eyword/d' | \
    sed '/^\*\*Secondary keywords:/d' | \
    sed '/^\*\*Word [Cc]ount:/d' | \
    sed '/^\*\*Last [Uu]pdated:/d' | \
    sed '/^\*\*Affiliate potential:/d' | \
    sed '/^\*\*Status:/d' | \
    sed '/^\*\*Summary:\*\*/d' | \
    sed '/^<!-- AFFILIATE:/d' | \
    sed 's|\(https://amzn.to/XXXXX\)|https://www.amazon.co.uk/?tag=mymuttlife-21|g' | \
    sed '/^\*This article contains affiliate links/d' | \
    sed '/^---$/{ N; /^---\n$/d; }' >> "$dest"

  echo "Created: $dest"
}

process_article \
  "$DRAFTS/mymuttlife-best-dog-food-labrador-retrievers-uk-2026.md" \
  "best-dog-food-labradors-uk" \
  "Best Dog Food for Labrador Retrievers UK 2026: Complete Guide" \
  "Complete guide to the best dog food for Labradors in the UK. From budget picks to fresh food delivery, find the perfect diet for your Lab at every life stage." \
  "Dog Nutrition" \
  "🦮" \
  "12 min read"

process_article \
  "$DRAFTS/mymuttlife-best-dog-food-german-shepherds-uk-2026.md" \
  "best-dog-food-german-shepherds-uk" \
  "Best Dog Food for German Shepherds UK 2026: Complete Guide" \
  "Expert picks for the best German Shepherd dog food in the UK. Covers puppies, adults, and seniors, plus feeding tips for this active breed." \
  "Dog Nutrition" \
  "🐕‍🦺" \
  "11 min read"

process_article \
  "$DRAFTS/mymuttlife-best-dog-insurance-uk-compared-2026.md" \
  "best-dog-insurance-uk" \
  "Best Dog Insurance UK 2026: Compared & Reviewed" \
  "We compare the top UK dog insurance providers for 2026. Petplan, ManyPets, Agria and more — find the right cover for your dog without overpaying." \
  "Insurance & Finance" \
  "🛡️" \
  "14 min read"

process_article \
  "$DRAFTS/mymuttlife-best-joint-supplements-for-dogs-uk-2026.md" \
  "best-joint-supplements-dogs-uk" \
  "Best Joint Supplements for Dogs UK 2026: Complete Guide" \
  "Joint problems affect 1 in 5 UK dogs. We review the best joint supplements including YuMOVE, Lintbells, and natural options to keep your dog mobile." \
  "Dog Health" \
  "💪" \
  "10 min read"

process_article \
  "$DRAFTS/mymuttlife-dog-walking-essentials-kit-guide-uk-2026.md" \
  "dog-walking-essentials-kit-guide" \
  "Dog Walking Essentials: The Complete UK Kit Guide" \
  "The 15 must-have dog walking essentials for UK dog owners. From leads and poo bags to first aid kits and seasonal gear — never be caught short again." \
  "Dog Lifestyle" \
  "🎒" \
  "10 min read"

process_article \
  "$DRAFTS/mymuttlife-how-much-exercise-does-your-dog-need-breed-guide-uk-2026.md" \
  "dog-exercise-breed-guide" \
  "How Much Exercise Does Your Dog Need? Breed-by-Breed Guide" \
  "Not sure how much to walk your dog? Our definitive breed-by-breed exercise guide covers puppies to seniors, with tips for every energy level." \
  "Dog Lifestyle" \
  "🏃" \
  "10 min read"

process_article \
  "$DRAFTS/mymuttlife-keeping-dogs-calm-during-fireworks-uk-2026.md" \
  "keeping-dogs-calm-fireworks-uk" \
  "How to Keep Your Dog Calm During Fireworks: UK Guide" \
  "60% of UK dogs are distressed by fireworks. Expert-backed techniques, proven products, and preparation tips to keep your dog safe and calm." \
  "Dog Behaviour" \
  "🎆" \
  "13 min read"

process_article \
  "$DRAFTS/mymuttlife-senior-dog-care-complete-guide-uk-2026.md" \
  "senior-dog-care-guide" \
  "Senior Dog Care: The Complete UK Guide" \
  "Everything you need to know about caring for an older dog in the UK. Diet, exercise, health checks, and making your home comfortable for ageing joints." \
  "Dog Health" \
  "🐕" \
  "14 min read"

echo "Done! All articles processed."
