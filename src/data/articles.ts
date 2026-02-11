export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  emoji: string;
  image: string;
  readTime: string;
  publishDate: string;
  modifiedDate: string;
  featured: boolean;
  relatedSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: 'best-dog-food-labradors-uk',
    title: 'Best Dog Food for Labrador Retrievers UK 2026',
    description: 'Complete guide to the best dog food for Labradors in the UK. From budget picks to fresh food delivery, find the perfect diet for your Lab at every life stage.',
    category: 'Dog Nutrition',
    emoji: '🦮',
    image: '/images/labrador-food.jpg',
    readTime: '12 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: true,
    relatedSlugs: ['best-dog-food-german-shepherds-uk', 'best-joint-supplements-dogs-uk', 'senior-dog-care-guide'],
  },
  {
    slug: 'best-dog-food-german-shepherds-uk',
    title: 'Best Dog Food for German Shepherds UK 2026',
    description: 'Expert picks for the best German Shepherd dog food in the UK. Covers puppies, adults, and seniors, plus feeding tips for this active breed\'s sensitive stomach.',
    category: 'Dog Nutrition',
    emoji: '🐕‍🦺',
    image: '/images/german-shepherd.jpg',
    readTime: '11 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: false,
    relatedSlugs: ['best-dog-food-labradors-uk', 'best-joint-supplements-dogs-uk', 'dog-exercise-breed-guide'],
  },
  {
    slug: 'best-dog-insurance-uk',
    title: 'Best Dog Insurance UK 2026: Compared & Reviewed',
    description: 'We compare the top UK dog insurance providers for 2026. Petplan, ManyPets, Agria and more — find the right cover for your dog without overpaying.',
    category: 'Insurance & Finance',
    emoji: '🛡️',
    image: '/images/dog-vet-insurance.jpg',
    readTime: '14 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: true,
    relatedSlugs: ['senior-dog-care-guide', 'best-joint-supplements-dogs-uk'],
  },
  {
    slug: 'best-joint-supplements-dogs-uk',
    title: 'Best Joint Supplements for Dogs UK 2026',
    description: 'Joint problems affect 1 in 5 UK dogs. We review the best joint supplements including YuMOVE, Lintbells, and natural options to keep your dog mobile and pain-free.',
    category: 'Dog Health',
    emoji: '💪',
    image: '/images/senior-dog-supplements.jpg',
    readTime: '10 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: false,
    relatedSlugs: ['senior-dog-care-guide', 'best-dog-food-labradors-uk', 'dog-exercise-breed-guide'],
  },
  {
    slug: 'dog-walking-essentials-kit-guide',
    title: 'Dog Walking Essentials: The Complete UK Kit Guide',
    description: 'The 15 must-have dog walking essentials for UK dog owners. From leads and poo bags to first aid kits and seasonal gear — never be caught short on a walk again.',
    category: 'Dog Lifestyle',
    emoji: '🎒',
    image: '/images/dog-walking.jpg',
    readTime: '10 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: false,
    relatedSlugs: ['dog-exercise-breed-guide', 'keeping-dogs-calm-fireworks-uk'],
  },
  {
    slug: 'dog-exercise-breed-guide',
    title: 'How Much Exercise Does Your Dog Need? Breed-by-Breed Guide',
    description: 'Not sure how much to walk your dog? Our definitive breed-by-breed exercise guide covers puppies to seniors, with tips for every energy level.',
    category: 'Dog Lifestyle',
    emoji: '🏃',
    image: '/images/dog-running.jpg',
    readTime: '10 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: false,
    relatedSlugs: ['dog-walking-essentials-kit-guide', 'best-joint-supplements-dogs-uk', 'senior-dog-care-guide'],
  },
  {
    slug: 'keeping-dogs-calm-fireworks-uk',
    title: 'How to Keep Your Dog Calm During Fireworks: UK Guide',
    description: '60% of UK dogs are distressed by fireworks. Expert-backed techniques, proven products, and preparation tips to keep your dog safe and calm during firework season.',
    category: 'Dog Behaviour',
    emoji: '🎆',
    image: '/images/anxious-dog.jpg',
    readTime: '13 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: false,
    relatedSlugs: ['senior-dog-care-guide', 'dog-walking-essentials-kit-guide'],
  },
  {
    slug: 'senior-dog-care-guide',
    title: 'Senior Dog Care: The Complete UK Guide',
    description: 'Everything you need to know about caring for an older dog in the UK. From diet and exercise to health checks and making your home comfortable for ageing joints.',
    category: 'Dog Health',
    emoji: '🐕',
    image: '/images/senior-dog-portrait.jpg',
    readTime: '14 min read',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-11',
    featured: false,
    relatedSlugs: ['best-joint-supplements-dogs-uk', 'best-dog-food-labradors-uk', 'dog-exercise-breed-guide'],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.featured);
}
