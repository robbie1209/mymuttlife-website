export interface DogFood {
  id: string;
  name: string;
  brand: string;
  category: 'dry' | 'wet' | 'fresh' | 'raw' | 'treats';
  subcategory: string;
  caloriesPer100g: number;
  proteinPercent: number;
  fatPercent: number;
  fiberPercent: number;
  servingSuggestion: string;
  affiliateUrl: string;
  notes: string;
}

export const dogFoods: DogFood[] = [
  // ============================================================
  // BUTTERNUT BOX — Fresh food delivery (high affiliate value)
  // ============================================================
  {
    id: 'bb-beef-beautiful',
    name: 'Beef It Up',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 117,
    proteinPercent: 10.5,
    fatPercent: 5.2,
    fiberPercent: 0.5,
    servingSuggestion: 'Portion size personalised to your dog when you sign up — typically 200-600g/day.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'Freshly cooked, human-grade ingredients. Delivered frozen to your door. Very popular in the UK.'
  },
  {
    id: 'bb-chicken-you-out',
    name: 'You\'re Chicken',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 130,
    proteinPercent: 11.0,
    fatPercent: 6.5,
    fiberPercent: 0.6,
    servingSuggestion: 'Personalised portions based on your dog\'s weight and activity.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'Free-range chicken recipe. Gently cooked for nutrient retention.'
  },
  {
    id: 'bb-pork-life',
    name: 'Pork This Way',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 122,
    proteinPercent: 10.0,
    fatPercent: 5.8,
    fiberPercent: 0.5,
    servingSuggestion: 'Personalised portions — sign up for your dog\'s custom plan.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'British pork with sweet potato and apple. Grain-free.'
  },
  {
    id: 'bb-lamb-baa',
    name: 'Baa Humbug',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 118,
    proteinPercent: 10.2,
    fatPercent: 5.0,
    fiberPercent: 0.6,
    servingSuggestion: 'Personalised based on dog profile when you subscribe.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'Lamb with lentils, butternut squash and mint. Great for sensitive tummies.'
  },
  {
    id: 'bb-turkey',
    name: 'Gobble Gobble',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 112,
    proteinPercent: 10.8,
    fatPercent: 4.5,
    fiberPercent: 0.5,
    servingSuggestion: 'Portions personalised via online dog profile.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'Lean turkey recipe — lower fat option, ideal for weight management.'
  },

  // ============================================================
  // TAILS.COM — Personalised kibble (high affiliate value)
  // ============================================================
  {
    id: 'tails-personalised-dry',
    name: 'Personalised Dry Food',
    brand: 'Tails.com',
    category: 'dry',
    subcategory: 'Personalised Kibble',
    caloriesPer100g: 355,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 3.0,
    servingSuggestion: 'Scoop included — portion tailored to your dog\'s unique profile.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/tails-com',
    notes: 'Unique blend created for each dog based on breed, age, weight, and health goals. Free trial available.'
  },
  {
    id: 'tails-wet-food',
    name: 'Personalised Wet Food',
    brand: 'Tails.com',
    category: 'wet',
    subcategory: 'Personalised Wet',
    caloriesPer100g: 95,
    proteinPercent: 8.5,
    fatPercent: 5.5,
    fiberPercent: 0.5,
    servingSuggestion: 'Use as topper or mix with dry food per tails.com feeding guide.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/tails-com',
    notes: 'Custom wet food to complement the dry blend. Great as a meal topper.'
  },
  {
    id: 'tails-dental-daily',
    name: 'Dental Dailies',
    brand: 'Tails.com',
    category: 'treats',
    subcategory: 'Dental',
    caloriesPer100g: 310,
    proteinPercent: 11.0,
    fatPercent: 4.5,
    fiberPercent: 5.0,
    servingSuggestion: '1 stick per day for dogs over 10kg, half stick for smaller dogs.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/tails-com',
    notes: 'Daily dental sticks included in subscription. Help reduce plaque.'
  },

  // ============================================================
  // LILY'S KITCHEN — Natural brand
  // ============================================================
  {
    id: 'lk-chicken-duck-dry',
    name: 'Chicken & Duck Dry',
    brand: "Lily's Kitchen",
    category: 'dry',
    subcategory: 'Natural Complete',
    caloriesPer100g: 359,
    proteinPercent: 27.0,
    fatPercent: 14.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 125-160g/day. 20kg: 210-270g/day. 30kg: 285-365g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+Chicken+Duck+dry+dog+food&tag=mymuttlife-21',
    notes: 'Made with proper meat — 27% freshly prepared chicken and duck. No meal or bone derivatives.'
  },
  {
    id: 'lk-lamb-dry',
    name: 'Lamb Supper Dry',
    brand: "Lily's Kitchen",
    category: 'dry',
    subcategory: 'Natural Complete',
    caloriesPer100g: 352,
    proteinPercent: 26.0,
    fatPercent: 12.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 130-170g/day. 20kg: 220-280g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+lamb+dry+dog+food&tag=mymuttlife-21',
    notes: 'British lamb with vegetables. Naturally hypoallergenic. Great for sensitive dogs.'
  },
  {
    id: 'lk-puppy-chicken',
    name: 'Puppy Chicken & Salmon Dry',
    brand: "Lily's Kitchen",
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 369,
    proteinPercent: 28.0,
    fatPercent: 16.0,
    fiberPercent: 3.0,
    servingSuggestion: 'Follow puppy feeding guide by expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+puppy+dry+food&tag=mymuttlife-21',
    notes: 'Higher protein and fat for growing puppies. DHA from salmon for brain development.'
  },
  {
    id: 'lk-senior-salmon',
    name: 'Senior Salmon & Trout Dry',
    brand: "Lily's Kitchen",
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 346,
    proteinPercent: 26.0,
    fatPercent: 11.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 135-175g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+senior+dry+dog+food&tag=mymuttlife-21',
    notes: 'Omega-3 rich fish for joint health. Glucosamine added. Lower fat for less active seniors.'
  },
  {
    id: 'lk-cottage-pie-wet',
    name: 'Cottage Pie Wet Food',
    brand: "Lily's Kitchen",
    category: 'wet',
    subcategory: 'Natural Complete Wet',
    caloriesPer100g: 104,
    proteinPercent: 10.5,
    fatPercent: 6.2,
    fiberPercent: 0.4,
    servingSuggestion: '10kg dog: ~330g/day. 20kg: ~550g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+Cottage+Pie+wet+dog+food&tag=mymuttlife-21',
    notes: 'Classic British recipe with beef, potato, and carrots. 60% meat content.'
  },
  {
    id: 'lk-chicken-wet',
    name: 'Chicken Casserole Wet Food',
    brand: "Lily's Kitchen",
    category: 'wet',
    subcategory: 'Natural Complete Wet',
    caloriesPer100g: 98,
    proteinPercent: 9.5,
    fatPercent: 5.5,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~340g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+Chicken+Casserole+wet+dog&tag=mymuttlife-21',
    notes: 'Proper chicken casserole with vegetables. Grain-free option available.'
  },

  // ============================================================
  // POOCH & MUTT — Health-focused brand
  // ============================================================
  {
    id: 'pm-health-digestion',
    name: 'Health & Digestion Dry',
    brand: 'Pooch & Mutt',
    category: 'dry',
    subcategory: 'Health Focused',
    caloriesPer100g: 347,
    proteinPercent: 26.0,
    fatPercent: 12.0,
    fiberPercent: 4.0,
    servingSuggestion: '10kg dog: 130-165g/day. 25kg: 260-330g/day.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'Prebiotics and probiotics for gut health. Salmon oil for skin and coat. Very popular in UK.'
  },
  {
    id: 'pm-slim-slender',
    name: 'Slim & Slender Dry',
    brand: 'Pooch & Mutt',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 328,
    proteinPercent: 30.0,
    fatPercent: 9.0,
    fiberPercent: 5.0,
    servingSuggestion: '10kg dog: 120-155g/day.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'High protein, low fat formula for weight loss. L-carnitine to help burn fat.'
  },
  {
    id: 'pm-joint-care',
    name: 'Joint Care Dry',
    brand: 'Pooch & Mutt',
    category: 'dry',
    subcategory: 'Joint Support',
    caloriesPer100g: 340,
    proteinPercent: 26.0,
    fatPercent: 11.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 130-165g/day.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'Glucosamine, chondroitin, and MSM for joint support. Great for older dogs or large breeds.'
  },
  {
    id: 'pm-puppy',
    name: 'Puppy Superfood Dry',
    brand: 'Pooch & Mutt',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 365,
    proteinPercent: 30.0,
    fatPercent: 16.0,
    fiberPercent: 3.0,
    servingSuggestion: 'Follow puppy feeding chart based on expected adult weight.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'Premium puppy food with DHA, prebiotics, and superfoods.'
  },
  {
    id: 'pm-calm-relaxed',
    name: 'Calm & Relaxed Dry',
    brand: 'Pooch & Mutt',
    category: 'dry',
    subcategory: 'Calming',
    caloriesPer100g: 342,
    proteinPercent: 26.0,
    fatPercent: 12.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 130-165g/day.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'Contains L-tryptophan and chamomile to help anxious dogs. Unique in the UK market.'
  },

  // ============================================================
  // BURNS — Welsh brand, very popular
  // ============================================================
  {
    id: 'burns-chicken-rice',
    name: 'Original Chicken & Brown Rice',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 345,
    proteinPercent: 18.5,
    fatPercent: 7.5,
    fiberPercent: 2.5,
    servingSuggestion: '10kg dog: 110-140g/day. 25kg: 200-265g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+chicken+brown+rice+dog+food&tag=mymuttlife-21',
    notes: 'Welsh-made since 1993. Developed by vet John Burns. Low fat, easy to digest. Excellent for sensitive tummies.'
  },
  {
    id: 'burns-fish-rice',
    name: 'Original Fish & Brown Rice',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 340,
    proteinPercent: 18.5,
    fatPercent: 7.0,
    fiberPercent: 2.5,
    servingSuggestion: '10kg dog: 110-140g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+fish+brown+rice+dog+food&tag=mymuttlife-21',
    notes: 'Ocean white fish alternative. Hypoallergenic, ideal for dogs with chicken intolerance.'
  },
  {
    id: 'burns-duck-rice',
    name: 'Original Duck & Brown Rice',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 348,
    proteinPercent: 18.5,
    fatPercent: 8.0,
    fiberPercent: 2.5,
    servingSuggestion: '10kg dog: 110-140g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+duck+brown+rice+dog+food&tag=mymuttlife-21',
    notes: 'Novel protein option. Good for dogs needing a protein rotation.'
  },
  {
    id: 'burns-puppy',
    name: 'Puppy Original Chicken & Rice',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 355,
    proteinPercent: 21.0,
    fatPercent: 10.0,
    fiberPercent: 2.5,
    servingSuggestion: 'Follow Burns puppy feeding guide by expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+puppy+dog+food&tag=mymuttlife-21',
    notes: 'Gentle puppy food. Burns philosophy: less is more with moderate protein.'
  },
  {
    id: 'burns-weight-control',
    name: 'Weight Control+ Chicken & Oats',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 310,
    proteinPercent: 18.0,
    fatPercent: 6.0,
    fiberPercent: 5.5,
    servingSuggestion: '10kg dog: 100-130g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+weight+control+dog+food&tag=mymuttlife-21',
    notes: 'Lower calorie, higher fibre. Helps dogs feel full while losing weight.'
  },

  // ============================================================
  // FORTHGLADE — Natural trays/pouches
  // ============================================================
  {
    id: 'fg-chicken-complete',
    name: 'Complete Chicken with Brown Rice',
    brand: 'Forthglade',
    category: 'wet',
    subcategory: 'Complete Trays',
    caloriesPer100g: 107,
    proteinPercent: 9.0,
    fatPercent: 5.5,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: 1.5 trays/day (395g trays). 25kg: 2.5 trays/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Forthglade+complete+chicken+dog+food&tag=mymuttlife-21',
    notes: 'Devon-made, natural wet food in recyclable trays. 75% meat. Very popular at Waitrose.'
  },
  {
    id: 'fg-turkey-complete',
    name: 'Complete Turkey with Brown Rice',
    brand: 'Forthglade',
    category: 'wet',
    subcategory: 'Complete Trays',
    caloriesPer100g: 104,
    proteinPercent: 9.5,
    fatPercent: 4.5,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: 1.5 trays/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Forthglade+complete+turkey+dog+food&tag=mymuttlife-21',
    notes: 'Leaner protein option. Grain-free version also available.'
  },
  {
    id: 'fg-lamb-complete',
    name: 'Complete Lamb with Brown Rice',
    brand: 'Forthglade',
    category: 'wet',
    subcategory: 'Complete Trays',
    caloriesPer100g: 110,
    proteinPercent: 9.5,
    fatPercent: 6.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: 1.5 trays/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Forthglade+complete+lamb+dog+food&tag=mymuttlife-21',
    notes: 'British lamb with vegetables. No artificial colours, flavours, or preservatives.'
  },
  {
    id: 'fg-grain-free-chicken',
    name: 'Grain Free Chicken & Vegetables',
    brand: 'Forthglade',
    category: 'wet',
    subcategory: 'Grain Free Trays',
    caloriesPer100g: 100,
    proteinPercent: 10.0,
    fatPercent: 4.5,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~350-400g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Forthglade+grain+free+chicken+dog+food&tag=mymuttlife-21',
    notes: 'Grain-free option with sweet potato. Good for dogs with grain sensitivities.'
  },

  // ============================================================
  // CANAGAN — Grain-free premium
  // ============================================================
  {
    id: 'can-chicken-dry',
    name: 'Free-Run Chicken Dry',
    brand: 'Canagan',
    category: 'dry',
    subcategory: 'Grain-Free Complete',
    caloriesPer100g: 370,
    proteinPercent: 33.0,
    fatPercent: 17.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 100-135g/day. 25kg: 195-255g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Canagan+free+run+chicken+dry+dog+food&tag=mymuttlife-21',
    notes: 'British brand. 60% meat content. Sweet potato and herbs. Very high protein.'
  },
  {
    id: 'can-salmon-dry',
    name: 'Scottish Salmon Dry',
    brand: 'Canagan',
    category: 'dry',
    subcategory: 'Grain-Free Complete',
    caloriesPer100g: 368,
    proteinPercent: 32.0,
    fatPercent: 16.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 100-135g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Canagan+Scottish+Salmon+dry+dog+food&tag=mymuttlife-21',
    notes: 'Scottish salmon with herring and trout. Rich in omega-3 for skin and coat.'
  },
  {
    id: 'can-game-dry',
    name: 'Country Game Dry',
    brand: 'Canagan',
    category: 'dry',
    subcategory: 'Grain-Free Complete',
    caloriesPer100g: 372,
    proteinPercent: 33.0,
    fatPercent: 17.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg dog: 100-135g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Canagan+Country+Game+dry+dog+food&tag=mymuttlife-21',
    notes: 'Duck, venison, and rabbit. Novel proteins for dogs with common food sensitivities.'
  },
  {
    id: 'can-chicken-wet',
    name: 'Chicken Hotpot Wet',
    brand: 'Canagan',
    category: 'wet',
    subcategory: 'Grain-Free Wet',
    caloriesPer100g: 108,
    proteinPercent: 10.0,
    fatPercent: 6.5,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~350g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Canagan+chicken+hotpot+wet+dog+food&tag=mymuttlife-21',
    notes: 'Premium wet food, 65% chicken. Great as topper or complete meal.'
  },

  // ============================================================
  // ORIJEN — High-protein premium
  // ============================================================
  {
    id: 'ori-original-dry',
    name: 'Original Dry',
    brand: 'Orijen',
    category: 'dry',
    subcategory: 'Biologically Appropriate',
    caloriesPer100g: 394,
    proteinPercent: 38.0,
    fatPercent: 18.0,
    fiberPercent: 5.0,
    servingSuggestion: '10kg dog: 90-120g/day. 25kg: 170-230g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Orijen+Original+dry+dog+food&tag=mymuttlife-21',
    notes: 'Award-winning. 85% meat from 6 animals. Freeze-dried liver coating. Premium price but outstanding quality.'
  },
  {
    id: 'ori-six-fish-dry',
    name: 'Six Fish Dry',
    brand: 'Orijen',
    category: 'dry',
    subcategory: 'Biologically Appropriate',
    caloriesPer100g: 390,
    proteinPercent: 38.0,
    fatPercent: 18.0,
    fiberPercent: 4.0,
    servingSuggestion: '10kg dog: 90-120g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Orijen+Six+Fish+dry+dog+food&tag=mymuttlife-21',
    notes: 'Six wild-caught fish. Incredible omega-3 profile. One of the best fish-based kibbles available.'
  },
  {
    id: 'ori-puppy-dry',
    name: 'Puppy Dry',
    brand: 'Orijen',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 398,
    proteinPercent: 38.0,
    fatPercent: 20.0,
    fiberPercent: 5.0,
    servingSuggestion: 'Follow Orijen puppy chart by expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Orijen+puppy+dry+dog+food&tag=mymuttlife-21',
    notes: 'Same 85% meat philosophy for puppies. DHA + EPA for brain development.'
  },
  {
    id: 'ori-senior-dry',
    name: 'Senior Dry',
    brand: 'Orijen',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 382,
    proteinPercent: 38.0,
    fatPercent: 15.0,
    fiberPercent: 6.0,
    servingSuggestion: '10kg dog: 90-120g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Orijen+senior+dry+dog+food&tag=mymuttlife-21',
    notes: 'High protein to maintain muscle mass in older dogs. Lower fat and added glucosamine.'
  },

  // ============================================================
  // ROYAL CANIN — Complete product range (41 products)
  // ============================================================
  {
    id: 'rc-mini-adult',
    name: 'Mini Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Size Health Nutrition',
    caloriesPer100g: 378,
    proteinPercent: 27.0,
    fatPercent: 16.0,
    fiberPercent: 1.5,
    servingSuggestion: '4kg dog: 55-65g/day. 8kg: 90-105g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Adult+dog+food&tag=mymuttlife-21',
    notes: 'For small dogs 1-10kg. Small kibble size. Supports dental health and digestion.'
  },
  {
    id: 'rc-medium-adult',
    name: 'Medium Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Size Health Nutrition',
    caloriesPer100g: 370,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 1.3,
    servingSuggestion: '11kg: 140-170g/day. 20kg: 220-270g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Adult+dog+food&tag=mymuttlife-21',
    notes: 'For medium dogs 11-25kg. Balanced nutrition for everyday vitality.'
  },
  {
    id: 'rc-maxi-adult',
    name: 'Maxi Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Size Health Nutrition',
    caloriesPer100g: 365,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 1.2,
    servingSuggestion: '26kg: 280-345g/day. 35kg: 340-420g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Maxi+Adult+dog+food&tag=mymuttlife-21',
    notes: 'For large dogs 26-44kg. Supports joints and digestive health.'
  },
  {
    id: 'rc-giant-adult',
    name: 'Giant Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Size Health Nutrition',
    caloriesPer100g: 357,
    proteinPercent: 24.0,
    fatPercent: 12.0,
    fiberPercent: 1.5,
    servingSuggestion: '45kg: 420-520g/day. 70kg: 575-710g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Giant+Adult+dog+food&tag=mymuttlife-21',
    notes: 'For giant dogs 45kg+. Supports cardiac health and joint function.'
  },
  {
    id: 'rc-mini-puppy',
    name: 'Mini Puppy',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 396,
    proteinPercent: 31.0,
    fatPercent: 20.0,
    fiberPercent: 1.5,
    servingSuggestion: 'Follow Royal Canin puppy feeding chart by age and expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Puppy+dog+food&tag=mymuttlife-21',
    notes: 'For small breed puppies up to 10 months. Supports immune system development.'
  },
  {
    id: 'rc-medium-puppy',
    name: 'Medium Puppy',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 388,
    proteinPercent: 32.0,
    fatPercent: 18.0,
    fiberPercent: 1.7,
    servingSuggestion: 'Follow feeding chart by age and expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Puppy+dog+food&tag=mymuttlife-21',
    notes: 'For medium breed puppies up to 12 months.'
  },
  {
    id: 'rc-maxi-puppy',
    name: 'Maxi Puppy',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 375,
    proteinPercent: 30.0,
    fatPercent: 14.0,
    fiberPercent: 1.8,
    servingSuggestion: 'Follow feeding chart by age and expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Maxi+Puppy+dog+food&tag=mymuttlife-21',
    notes: 'For large breed puppies up to 15 months. Controlled energy for healthy growth.'
  },
  {
    id: 'rc-giant-puppy',
    name: 'Giant Puppy',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 368,
    proteinPercent: 30.0,
    fatPercent: 12.0,
    fiberPercent: 2.0,
    servingSuggestion: 'Follow feeding chart by age and expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Giant+Puppy+dog+food&tag=mymuttlife-21',
    notes: 'For giant breed puppies up to 8 months before switching to Giant Junior.'
  },
  {
    id: 'rc-mini-ageing',
    name: 'Mini Ageing 12+',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 380,
    proteinPercent: 27.0,
    fatPercent: 16.0,
    fiberPercent: 2.8,
    servingSuggestion: '4kg dog: 55-65g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Ageing+12+dog+food&tag=mymuttlife-21',
    notes: 'For senior small dogs over 12 years. Enhanced palatability for fussy older dogs.'
  },
  {
    id: 'rc-medium-ageing',
    name: 'Medium Ageing 10+',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 372,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 2.5,
    servingSuggestion: '11kg: 140-175g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Ageing+10+dog+food&tag=mymuttlife-21',
    notes: 'For medium dogs over 10 years. Supports ageing joints and kidney function.'
  },
  {
    id: 'rc-maxi-ageing',
    name: 'Maxi Ageing 8+',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 360,
    proteinPercent: 26.0,
    fatPercent: 12.0,
    fiberPercent: 2.5,
    servingSuggestion: '26kg: 280-350g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Maxi+Ageing+8+dog+food&tag=mymuttlife-21',
    notes: 'For large dogs over 8 years. EPA/DHA for joint support.'
  },
  {
    id: 'rc-labrador-adult',
    name: 'Labrador Retriever Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 346,
    proteinPercent: 30.0,
    fatPercent: 13.0,
    fiberPercent: 4.6,
    servingSuggestion: '25kg: 250-310g/day. 30kg: 280-350g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Labrador+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Breed-specific kibble shape to slow eating. L-carnitine for weight management. Very popular.'
  },
  {
    id: 'rc-german-shepherd-adult',
    name: 'German Shepherd Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 358,
    proteinPercent: 24.0,
    fatPercent: 14.0,
    fiberPercent: 1.5,
    servingSuggestion: '30kg: 300-370g/day. 40kg: 365-455g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+German+Shepherd+Adult+dog&tag=mymuttlife-21',
    notes: 'Tapered kibble for GSD jaw. Supports digestive sensitivity common in the breed.'
  },
  {
    id: 'rc-golden-retriever-adult',
    name: 'Golden Retriever Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 352,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 1.5,
    servingSuggestion: '28kg: 275-345g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Golden+Retriever+Adult+dog&tag=mymuttlife-21',
    notes: 'Omega-3 and biotin for the Golden\'s iconic coat. Supports skin health.'
  },
  {
    id: 'rc-cocker-spaniel-adult',
    name: 'Cocker Spaniel Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 370,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 2.0,
    servingSuggestion: '12kg: 145-175g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Cocker+Spaniel+Adult+dog&tag=mymuttlife-21',
    notes: 'Adapted for Cocker\'s ear and weight management needs.'
  },
  {
    id: 'rc-french-bulldog-adult',
    name: 'French Bulldog Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 362,
    proteinPercent: 26.0,
    fatPercent: 13.0,
    fiberPercent: 4.0,
    servingSuggestion: '9kg: 115-140g/day. 11kg: 135-165g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+French+Bulldog+Adult+dog&tag=mymuttlife-21',
    notes: 'Brachycephalic-friendly kibble shape. Supports skin folds and digestive health.'
  },
  {
    id: 'rc-bulldog-adult',
    name: 'Bulldog Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 355,
    proteinPercent: 24.0,
    fatPercent: 13.0,
    fiberPercent: 3.5,
    servingSuggestion: '20kg: 225-280g/day. 25kg: 265-325g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Bulldog+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Wave-shaped kibble for flat face. Supports joints and skin.'
  },
  {
    id: 'rc-yorkshire-terrier-adult',
    name: 'Yorkshire Terrier Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 386,
    proteinPercent: 26.0,
    fatPercent: 16.0,
    fiberPercent: 1.5,
    servingSuggestion: '2kg: 30-40g/day. 4kg: 55-65g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Yorkshire+Terrier+Adult+dog&tag=mymuttlife-21',
    notes: 'Tiny kibble for tiny jaws. Borage oil for coat health.'
  },
  {
    id: 'rc-dachshund-adult',
    name: 'Dachshund Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 370,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 3.5,
    servingSuggestion: '5kg: 65-80g/day. 9kg: 100-120g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Dachshund+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Supports the Dachshund\'s long spine. Weight management to reduce back stress.'
  },
  {
    id: 'rc-cavalier-adult',
    name: 'Cavalier King Charles Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 365,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 2.0,
    servingSuggestion: '6kg: 75-95g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Cavalier+King+Charles+Adult&tag=mymuttlife-21',
    notes: 'EPA/DHA for cardiac health — important for this breed. Coat-nourishing formula.'
  },
  {
    id: 'rc-boxer-adult',
    name: 'Boxer Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 358,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 1.7,
    servingSuggestion: '28kg: 290-360g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Boxer+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Brachycephalic-friendly. Supports cardiac health and muscle maintenance.'
  },
  {
    id: 'rc-pug-adult',
    name: 'Pug Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 368,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 3.5,
    servingSuggestion: '6kg: 80-95g/day. 8kg: 95-115g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Pug+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Clover-leaf shaped kibble for flat-faced picking. Weight and skin support.'
  },
  {
    id: 'rc-shih-tzu-adult',
    name: 'Shih Tzu Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 375,
    proteinPercent: 24.0,
    fatPercent: 16.0,
    fiberPercent: 2.8,
    servingSuggestion: '5kg: 65-80g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Shih+Tzu+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Supports coat quality and skin health. Easy-to-pick-up kibble shape.'
  },
  {
    id: 'rc-jack-russell-adult',
    name: 'Jack Russell Terrier Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 376,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 2.5,
    servingSuggestion: '6kg: 75-95g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Jack+Russell+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Tailored to the JRT\'s high energy needs. Supports muscle vitality.'
  },
  {
    id: 'rc-dalmatian-adult',
    name: 'Dalmatian Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 349,
    proteinPercent: 22.0,
    fatPercent: 12.0,
    fiberPercent: 2.5,
    servingSuggestion: '25kg: 270-335g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Dalmatian+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Moderate purine levels — critical for Dalmatians prone to urinary stones.'
  },
  {
    id: 'rc-mini-light-weight',
    name: 'Mini Light Weight Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 340,
    proteinPercent: 30.0,
    fatPercent: 10.0,
    fiberPercent: 6.0,
    servingSuggestion: '4kg: 50-60g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Light+Weight+Care&tag=mymuttlife-21',
    notes: 'Calorie-controlled for small dogs prone to weight gain.'
  },
  {
    id: 'rc-medium-light-weight',
    name: 'Medium Light Weight Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 334,
    proteinPercent: 28.0,
    fatPercent: 9.0,
    fiberPercent: 5.5,
    servingSuggestion: '15kg: 170-215g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Light+Weight+Care&tag=mymuttlife-21',
    notes: 'Lower calorie, higher satiety. L-carnitine for fat metabolism.'
  },
  {
    id: 'rc-maxi-light-weight',
    name: 'Maxi Light Weight Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 330,
    proteinPercent: 27.0,
    fatPercent: 9.0,
    fiberPercent: 6.0,
    servingSuggestion: '30kg: 310-385g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Maxi+Light+Weight+Care&tag=mymuttlife-21',
    notes: 'Weight management for large breeds. Joint support included.'
  },
  {
    id: 'rc-mini-digestive',
    name: 'Mini Digestive Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Health Focused',
    caloriesPer100g: 381,
    proteinPercent: 27.0,
    fatPercent: 16.0,
    fiberPercent: 1.5,
    servingSuggestion: '4kg: 55-65g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Digestive+Care&tag=mymuttlife-21',
    notes: 'Highly digestible proteins and prebiotics for small dogs with sensitive tummies.'
  },
  {
    id: 'rc-medium-digestive',
    name: 'Medium Digestive Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Health Focused',
    caloriesPer100g: 365,
    proteinPercent: 25.0,
    fatPercent: 12.0,
    fiberPercent: 2.0,
    servingSuggestion: '15kg: 170-215g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Digestive+Care&tag=mymuttlife-21',
    notes: 'LIP proteins for digestive health in medium breeds.'
  },
  {
    id: 'rc-mini-dental',
    name: 'Mini Dental Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Dental Health',
    caloriesPer100g: 380,
    proteinPercent: 26.0,
    fatPercent: 16.0,
    fiberPercent: 2.5,
    servingSuggestion: '4kg: 55-65g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Dental+Care&tag=mymuttlife-21',
    notes: 'Mechanical brushing effect from kibble texture to reduce tartar.'
  },
  {
    id: 'rc-dermacomfort-medium',
    name: 'Medium Dermacomfort',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Skin Health',
    caloriesPer100g: 374,
    proteinPercent: 24.0,
    fatPercent: 14.0,
    fiberPercent: 2.0,
    servingSuggestion: '15kg: 170-215g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Dermacomfort&tag=mymuttlife-21',
    notes: 'For dogs with itchy, irritated skin. Omega-3/6 blend for skin barrier support.'
  },
  {
    id: 'rc-hypoallergenic',
    name: 'Hypoallergenic Moderate Calorie',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Veterinary Diet',
    caloriesPer100g: 340,
    proteinPercent: 22.0,
    fatPercent: 10.0,
    fiberPercent: 5.0,
    servingSuggestion: 'As directed by your veterinarian.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Hypoallergenic+dog+food&tag=mymuttlife-21',
    notes: 'Veterinary diet for food allergies. Hydrolysed protein — prescription often needed.'
  },
  {
    id: 'rc-gastrointestinal',
    name: 'Gastrointestinal',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Veterinary Diet',
    caloriesPer100g: 398,
    proteinPercent: 25.0,
    fatPercent: 20.0,
    fiberPercent: 1.7,
    servingSuggestion: 'As directed by your veterinarian.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Gastrointestinal+dog+food&tag=mymuttlife-21',
    notes: 'Veterinary diet for digestive disorders. Highly digestible nutrients.'
  },
  {
    id: 'rc-satiety-weight',
    name: 'Satiety Weight Management',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Veterinary Diet',
    caloriesPer100g: 270,
    proteinPercent: 30.0,
    fatPercent: 8.0,
    fiberPercent: 14.0,
    servingSuggestion: 'As directed by your veterinarian.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Satiety+Weight+Management+dog&tag=mymuttlife-21',
    notes: 'Vet diet for obese dogs. Very high fibre for satiety. Must be vet supervised.'
  },
  {
    id: 'rc-mini-indoor',
    name: 'Mini Indoor Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Lifestyle',
    caloriesPer100g: 374,
    proteinPercent: 21.0,
    fatPercent: 14.0,
    fiberPercent: 3.0,
    servingSuggestion: '4kg: 55-65g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Indoor+Adult+dog&tag=mymuttlife-21',
    notes: 'For small dogs living mostly indoors. Reduced calorie, stool odour reduction.'
  },
  {
    id: 'rc-sporting-agility',
    name: 'Sporting Life Agility 4100',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Performance',
    caloriesPer100g: 410,
    proteinPercent: 30.0,
    fatPercent: 20.0,
    fiberPercent: 2.0,
    servingSuggestion: '25kg active dog: 350-430g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Sporting+Life+Agility+dog&tag=mymuttlife-21',
    notes: 'For active/sporting dogs. High energy density. Short burst activities.'
  },

  // ============================================================
  // JAMES WELLBELOVED — Very popular UK brand
  // ============================================================
  {
    id: 'jw-turkey-rice-adult',
    name: 'Adult Turkey & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Hypoallergenic',
    caloriesPer100g: 351,
    proteinPercent: 21.5,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 130-170g/day. 25kg: 260-335g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+turkey+rice+adult+dog&tag=mymuttlife-21',
    notes: 'UK\'s most popular hypoallergenic food. Single animal protein source. No beef, wheat, dairy, egg, soya.'
  },
  {
    id: 'jw-lamb-rice-adult',
    name: 'Adult Lamb & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Hypoallergenic',
    caloriesPer100g: 348,
    proteinPercent: 20.5,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 130-170g/day. 25kg: 260-335g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+lamb+rice+adult+dog&tag=mymuttlife-21',
    notes: 'Alternative protein for dogs sensitive to poultry. Hypoallergenic.'
  },
  {
    id: 'jw-fish-rice-adult',
    name: 'Adult Fish & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Hypoallergenic',
    caloriesPer100g: 345,
    proteinPercent: 20.0,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 130-170g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+fish+rice+adult+dog&tag=mymuttlife-21',
    notes: 'White fish protein, omega-3 rich. Great for skin and coat issues.'
  },
  {
    id: 'jw-puppy-turkey',
    name: 'Puppy Turkey & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 368,
    proteinPercent: 24.0,
    fatPercent: 14.0,
    fiberPercent: 3.0,
    servingSuggestion: 'Follow JW puppy feeding chart by expected adult weight and age.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+puppy+turkey+rice&tag=mymuttlife-21',
    notes: 'Hypoallergenic puppy food. DHA for brain development.'
  },
  {
    id: 'jw-senior-turkey',
    name: 'Senior Turkey & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 335,
    proteinPercent: 20.5,
    fatPercent: 8.0,
    fiberPercent: 3.5,
    servingSuggestion: '10kg: 130-170g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+senior+turkey+rice+dog&tag=mymuttlife-21',
    notes: 'Lower fat for less active seniors. Glucosamine for joints. Vet recommended.'
  },
  {
    id: 'jw-grain-free-turkey',
    name: 'Grain Free Adult Turkey',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Grain Free',
    caloriesPer100g: 355,
    proteinPercent: 25.0,
    fatPercent: 12.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 125-165g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+grain+free+turkey+dog&tag=mymuttlife-21',
    notes: 'All the JW quality without grains. Sweet potato and vegetables instead.'
  },

  // ============================================================
  // HARRINGTONS — Budget-friendly
  // ============================================================
  {
    id: 'harr-chicken-rice',
    name: 'Complete Rich in Chicken & Rice',
    brand: 'Harringtons',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 340,
    proteinPercent: 20.0,
    fatPercent: 8.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 140-180g/day. 25kg: 270-340g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Harringtons+chicken+rice+dog+food&tag=mymuttlife-21',
    notes: 'Best value complete food in the UK. Available at Asda, Tesco, Morrisons. No artificial colours.'
  },
  {
    id: 'harr-lamb-rice',
    name: 'Complete Rich in Lamb & Rice',
    brand: 'Harringtons',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 338,
    proteinPercent: 19.0,
    fatPercent: 8.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 140-180g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Harringtons+lamb+rice+dog+food&tag=mymuttlife-21',
    notes: 'Affordable alternative protein. No artificial colours, flavours, or preservatives.'
  },
  {
    id: 'harr-salmon-potato',
    name: 'Complete Rich in Salmon & Potato',
    brand: 'Harringtons',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 335,
    proteinPercent: 19.0,
    fatPercent: 8.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 140-180g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Harringtons+salmon+potato+dog+food&tag=mymuttlife-21',
    notes: 'Grain-free budget option. Salmon for omega-3. Great value.'
  },
  {
    id: 'harr-puppy',
    name: 'Complete Puppy Rich in Turkey & Rice',
    brand: 'Harringtons',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 358,
    proteinPercent: 24.0,
    fatPercent: 12.0,
    fiberPercent: 3.0,
    servingSuggestion: 'Follow puppy feeding guide on pack by expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Harringtons+puppy+dog+food&tag=mymuttlife-21',
    notes: 'Budget puppy option. No artificial anything. Vet approved.'
  },
  {
    id: 'harr-grain-free-chicken',
    name: 'Grain Free Chicken & Sweet Potato',
    brand: 'Harringtons',
    category: 'dry',
    subcategory: 'Grain Free',
    caloriesPer100g: 342,
    proteinPercent: 22.0,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 135-175g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Harringtons+grain+free+chicken+dog&tag=mymuttlife-21',
    notes: 'Budget grain-free. Impressive quality for the price point.'
  },

  // ============================================================
  // HILL'S SCIENCE PLAN
  // ============================================================
  {
    id: 'hills-adult-chicken-medium',
    name: 'Adult Medium Chicken',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 364,
    proteinPercent: 23.0,
    fatPercent: 14.5,
    fiberPercent: 1.7,
    servingSuggestion: '15kg: 195-240g/day. 25kg: 285-350g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Science+Plan+Adult+Medium+Chicken&tag=mymuttlife-21',
    notes: 'Vet-recommended worldwide. Clinically proven antioxidants. Omega-6 for skin and coat.'
  },
  {
    id: 'hills-adult-large-chicken',
    name: 'Adult Large Breed Chicken',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 358,
    proteinPercent: 22.5,
    fatPercent: 13.0,
    fiberPercent: 1.8,
    servingSuggestion: '30kg: 310-385g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Science+Plan+Adult+Large+Breed&tag=mymuttlife-21',
    notes: 'Glucosamine and chondroitin for large breed joints. Controlled energy.'
  },
  {
    id: 'hills-puppy-medium',
    name: 'Puppy Medium Chicken',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 382,
    proteinPercent: 27.0,
    fatPercent: 17.0,
    fiberPercent: 1.5,
    servingSuggestion: 'Follow Hill\'s puppy feeding guide by age and expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Science+Plan+Puppy+Medium+Chicken&tag=mymuttlife-21',
    notes: 'Clinically proven DHA for brain development. Balanced minerals for strong bones.'
  },
  {
    id: 'hills-senior-vitality-medium',
    name: 'Senior Vitality Medium',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 354,
    proteinPercent: 21.0,
    fatPercent: 13.0,
    fiberPercent: 2.0,
    servingSuggestion: '15kg: 185-230g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Science+Plan+Senior+Vitality+Medium&tag=mymuttlife-21',
    notes: 'Breakthrough nutrition that fights signs of ageing. Vet #1 recommendation for seniors.'
  },
  {
    id: 'hills-light-medium',
    name: 'Adult Light Medium',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 320,
    proteinPercent: 23.5,
    fatPercent: 8.5,
    fiberPercent: 6.0,
    servingSuggestion: '15kg: 175-225g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Science+Plan+Light+Medium+dog&tag=mymuttlife-21',
    notes: 'Clinically proven to help dogs maintain lean weight. L-carnitine formula.'
  },
  {
    id: 'hills-sensitive-stomach',
    name: 'Sensitive Stomach & Skin Medium',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Sensitive',
    caloriesPer100g: 367,
    proteinPercent: 22.0,
    fatPercent: 13.5,
    fiberPercent: 1.5,
    servingSuggestion: '15kg: 185-230g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Sensitive+Stomach+Skin+dog+food&tag=mymuttlife-21',
    notes: 'Prebiotic fibre for sensitive digestion. Vitamin E and omega-6 for healthy skin.'
  },

  // ============================================================
  // PURINA PRO PLAN
  // ============================================================
  {
    id: 'pp-adult-medium-chicken',
    name: 'Medium Adult OPTIBALANCE Chicken',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 370,
    proteinPercent: 27.0,
    fatPercent: 17.0,
    fiberPercent: 2.5,
    servingSuggestion: '15kg: 185-230g/day. 25kg: 270-335g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Medium+Adult+Chicken&tag=mymuttlife-21',
    notes: 'Purina\'s premium line. OPTIBALANCE nutrient blend. Chicken as #1 ingredient.'
  },
  {
    id: 'pp-adult-large-robust-chicken',
    name: 'Large Robust Adult Chicken',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 363,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 2.5,
    servingSuggestion: '30kg: 325-405g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Large+Robust+Adult&tag=mymuttlife-21',
    notes: 'For large robust-build dogs. Joint support with collagen.'
  },
  {
    id: 'pp-puppy-medium-chicken',
    name: 'Medium Puppy OPTISTART Chicken',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 388,
    proteinPercent: 29.0,
    fatPercent: 18.0,
    fiberPercent: 2.0,
    servingSuggestion: 'Follow Pro Plan puppy feeding guide.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Medium+Puppy+Chicken&tag=mymuttlife-21',
    notes: 'OPTISTART includes colostrum for immune support. DHA for brain development.'
  },
  {
    id: 'pp-sensitive-skin-salmon',
    name: 'Adult Sensitive Skin Salmon',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Sensitive',
    caloriesPer100g: 365,
    proteinPercent: 26.0,
    fatPercent: 16.0,
    fiberPercent: 2.0,
    servingSuggestion: '15kg: 180-225g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Sensitive+Skin+Salmon&tag=mymuttlife-21',
    notes: 'Salmon as single animal protein. Rich in omega-3 for healthy skin and soft coat.'
  },
  {
    id: 'pp-sport-performance',
    name: 'ALL SIZES Sport Performance',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Performance',
    caloriesPer100g: 420,
    proteinPercent: 30.0,
    fatPercent: 20.0,
    fiberPercent: 2.0,
    servingSuggestion: 'Based on activity level — up to 50% more than maintenance for very active dogs.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Sport+Performance+dog&tag=mymuttlife-21',
    notes: 'For working, sporting, and highly active dogs. Enhanced energy formula. Chicken-based.'
  },

  // ============================================================
  // ARDEN GRANGE
  // ============================================================
  {
    id: 'ag-adult-chicken-rice',
    name: 'Adult Chicken & Rice',
    brand: 'Arden Grange',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 352,
    proteinPercent: 24.0,
    fatPercent: 12.0,
    fiberPercent: 2.5,
    servingSuggestion: '10kg: 120-155g/day. 25kg: 230-295g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Arden+Grange+Adult+Chicken+Rice+dog&tag=mymuttlife-21',
    notes: 'British-made in Alresford, Hampshire. Fresh chicken, no meat meal. Krill for omega-3.'
  },
  {
    id: 'ag-adult-salmon-rice',
    name: 'Adult Salmon & Rice',
    brand: 'Arden Grange',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 348,
    proteinPercent: 23.0,
    fatPercent: 12.0,
    fiberPercent: 2.5,
    servingSuggestion: '10kg: 120-155g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Arden+Grange+Adult+Salmon+Rice+dog&tag=mymuttlife-21',
    notes: 'Fresh salmon with rice. Excellent for dogs with chicken sensitivity.'
  },
  {
    id: 'ag-puppy-chicken',
    name: 'Puppy/Junior Chicken & Rice',
    brand: 'Arden Grange',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 370,
    proteinPercent: 29.0,
    fatPercent: 16.0,
    fiberPercent: 2.5,
    servingSuggestion: 'Follow AG puppy chart by expected adult weight.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Arden+Grange+Puppy+Chicken+dog+food&tag=mymuttlife-21',
    notes: 'Premium British puppy food with fresh chicken and prebiotics.'
  },
  {
    id: 'ag-sensitive-ocean-fish',
    name: 'Sensitive Ocean White Fish & Potato',
    brand: 'Arden Grange',
    category: 'dry',
    subcategory: 'Sensitive',
    caloriesPer100g: 345,
    proteinPercent: 24.0,
    fatPercent: 12.0,
    fiberPercent: 2.5,
    servingSuggestion: '10kg: 120-155g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Arden+Grange+Sensitive+Ocean+Fish+dog&tag=mymuttlife-21',
    notes: 'Grain-free, single animal protein. Prebiotics (FOS & MOS). Great for sensitive stomachs.'
  },

  // ============================================================
  // SKINNERS — Working dog food
  // ============================================================
  {
    id: 'skin-field-trial-chicken',
    name: 'Field & Trial Chicken & Rice',
    brand: 'Skinners',
    category: 'dry',
    subcategory: 'Working Dog',
    caloriesPer100g: 365,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 2.0,
    servingSuggestion: '25kg active dog: 320-400g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Skinners+Field+Trial+Chicken+Rice+dog&tag=mymuttlife-21',
    notes: 'Suffolk-made since 1688! Trusted by working dog owners across the UK. Great value.'
  },
  {
    id: 'skin-field-trial-duck',
    name: 'Field & Trial Duck & Rice',
    brand: 'Skinners',
    category: 'dry',
    subcategory: 'Working Dog',
    caloriesPer100g: 360,
    proteinPercent: 24.0,
    fatPercent: 12.0,
    fiberPercent: 2.5,
    servingSuggestion: '25kg active dog: 320-400g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Skinners+Field+Trial+Duck+Rice+dog&tag=mymuttlife-21',
    notes: 'Alternative protein. Hypoallergenic. Popular with gundog owners.'
  },
  {
    id: 'skin-field-trial-maintenance',
    name: 'Field & Trial Maintenance',
    brand: 'Skinners',
    category: 'dry',
    subcategory: 'Working Dog',
    caloriesPer100g: 345,
    proteinPercent: 21.0,
    fatPercent: 9.0,
    fiberPercent: 3.0,
    servingSuggestion: '25kg: 280-355g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Skinners+Field+Trial+Maintenance+dog&tag=mymuttlife-21',
    notes: 'Lower energy for rest days or less active working dogs. Excellent value.'
  },

  // ============================================================
  // WAINWRIGHT'S — Pets at Home own brand
  // ============================================================
  {
    id: 'wain-adult-chicken',
    name: 'Adult Complete Chicken & Rice',
    brand: "Wainwright's",
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 350,
    proteinPercent: 24.0,
    fatPercent: 12.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 130-170g/day. 25kg: 250-320g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Wainwrights+adult+chicken+rice+dog+food&tag=mymuttlife-21',
    notes: 'Pets at Home exclusive. Single protein source. Good quality at a fair price.'
  },
  {
    id: 'wain-adult-lamb',
    name: 'Adult Complete Lamb & Rice',
    brand: "Wainwright's",
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 348,
    proteinPercent: 23.0,
    fatPercent: 11.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 130-170g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Wainwrights+adult+lamb+rice+dog+food&tag=mymuttlife-21',
    notes: 'Hypoallergenic. No dairy, wheat, beef, or soya. Popular at Pets at Home.'
  },
  {
    id: 'wain-puppy-chicken',
    name: 'Puppy Complete Chicken',
    brand: "Wainwright's",
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 370,
    proteinPercent: 27.0,
    fatPercent: 15.0,
    fiberPercent: 2.5,
    servingSuggestion: 'Follow Wainwright\'s puppy chart.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Wainwrights+puppy+chicken+dog+food&tag=mymuttlife-21',
    notes: 'Good value puppy food. Available in-store at Pets at Home nationwide.'
  },
  {
    id: 'wain-grain-free-duck',
    name: 'Grain Free Adult Duck & Potato',
    brand: "Wainwright's",
    category: 'dry',
    subcategory: 'Grain Free',
    caloriesPer100g: 355,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 125-160g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Wainwrights+grain+free+duck+potato+dog&tag=mymuttlife-21',
    notes: 'Grain-free at an affordable price. Duck as single animal protein.'
  },
  {
    id: 'wain-wet-chicken-veg',
    name: 'Adult Wet Chicken & Veg Trays',
    brand: "Wainwright's",
    category: 'wet',
    subcategory: 'Complete Wet',
    caloriesPer100g: 100,
    proteinPercent: 9.0,
    fatPercent: 5.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg: 2 trays/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Wainwrights+adult+wet+chicken+dog+food&tag=mymuttlife-21',
    notes: 'Good value wet food trays. Works well as mixer or complete meal.'
  },

  // ============================================================
  // SYMPLY
  // ============================================================
  {
    id: 'sym-chicken-adult',
    name: 'Adult Chicken Dry',
    brand: 'Symply',
    category: 'dry',
    subcategory: 'Natural Complete',
    caloriesPer100g: 360,
    proteinPercent: 26.0,
    fatPercent: 14.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 120-155g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Symply+adult+chicken+dry+dog+food&tag=mymuttlife-21',
    notes: 'British brand. Freshly prepared chicken. No artificial additives. Growing reputation.'
  },
  {
    id: 'sym-salmon-potato',
    name: 'Adult Salmon & Potato Dry',
    brand: 'Symply',
    category: 'dry',
    subcategory: 'Grain Free',
    caloriesPer100g: 355,
    proteinPercent: 25.0,
    fatPercent: 13.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 120-155g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Symply+salmon+potato+dry+dog+food&tag=mymuttlife-21',
    notes: 'Grain-free option with Scottish salmon. Good omega profile.'
  },
  {
    id: 'sym-puppy-chicken',
    name: 'Puppy Turkey & Rice',
    brand: 'Symply',
    category: 'dry',
    subcategory: 'Puppy',
    caloriesPer100g: 372,
    proteinPercent: 28.0,
    fatPercent: 16.0,
    fiberPercent: 2.5,
    servingSuggestion: 'Follow Symply puppy feeding guide.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Symply+puppy+turkey+rice+dog+food&tag=mymuttlife-21',
    notes: 'Premium puppy formula with fresh turkey and botanical herbs.'
  },

  // ============================================================
  // NATURO
  // ============================================================
  {
    id: 'nat-chicken-rice',
    name: 'Adult Chicken & Rice with Vegetables',
    brand: 'Naturo',
    category: 'wet',
    subcategory: 'Complete Wet',
    caloriesPer100g: 95,
    proteinPercent: 7.5,
    fatPercent: 4.5,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~400g/day. 25kg: ~700g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Naturo+chicken+rice+wet+dog+food&tag=mymuttlife-21',
    notes: 'Northern Irish brand. Very affordable wet food. No artificial colours or flavours.'
  },
  {
    id: 'nat-lamb-rice',
    name: 'Adult Lamb & Rice with Vegetables',
    brand: 'Naturo',
    category: 'wet',
    subcategory: 'Complete Wet',
    caloriesPer100g: 98,
    proteinPercent: 7.0,
    fatPercent: 5.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~400g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Naturo+lamb+rice+wet+dog+food&tag=mymuttlife-21',
    notes: 'Budget-friendly wet food with real meat. Popular at supermarkets.'
  },
  {
    id: 'nat-turkey-rice',
    name: 'Adult Turkey & Rice with Vegetables',
    brand: 'Naturo',
    category: 'wet',
    subcategory: 'Complete Wet',
    caloriesPer100g: 92,
    proteinPercent: 7.5,
    fatPercent: 4.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~400g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Naturo+turkey+rice+wet+dog+food&tag=mymuttlife-21',
    notes: 'Leaner option. Grain-free version also available.'
  },
  {
    id: 'nat-grain-free-chicken',
    name: 'Grain Free Chicken with Sweet Potato',
    brand: 'Naturo',
    category: 'wet',
    subcategory: 'Grain Free Wet',
    caloriesPer100g: 100,
    proteinPercent: 8.0,
    fatPercent: 5.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg dog: ~380g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Naturo+grain+free+chicken+wet+dog+food&tag=mymuttlife-21',
    notes: 'Grain-free wet food at a budget price. Hard to beat for value.'
  },

  // ============================================================
  // ADDITIONAL TREATS & TOPPERS
  // ============================================================
  {
    id: 'lk-bedtime-biscuits',
    name: 'Bedtime Biscuits',
    brand: "Lily's Kitchen",
    category: 'treats',
    subcategory: 'Biscuits',
    caloriesPer100g: 338,
    proteinPercent: 10.0,
    fatPercent: 8.0,
    fiberPercent: 3.0,
    servingSuggestion: '2-3 biscuits for small dogs, 4-6 for medium, 6-8 for large.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+Bedtime+Biscuits+dog&tag=mymuttlife-21',
    notes: 'Chamomile and honey for bedtime. Iconic yellow box. Great stocking filler.'
  },
  {
    id: 'lk-woofbrush-dental',
    name: 'Woofbrush Dental Chews',
    brand: "Lily's Kitchen",
    category: 'treats',
    subcategory: 'Dental',
    caloriesPer100g: 324,
    proteinPercent: 5.0,
    fatPercent: 3.5,
    fiberPercent: 8.0,
    servingSuggestion: '1 chew per day. Medium: 28g each. Large: 47g each.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Lilys+Kitchen+Woofbrush+dental+chew&tag=mymuttlife-21',
    notes: 'Natural dental stick alternative to Dentastix. Coconut oil and seaweed.'
  },
  {
    id: 'pm-meaty-treats-chicken',
    name: 'Meaty Treats Chicken',
    brand: 'Pooch & Mutt',
    category: 'treats',
    subcategory: 'Training Treats',
    caloriesPer100g: 340,
    proteinPercent: 40.0,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: 'Use sparingly as training rewards. Max 10% of daily calories.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'High-protein training treats. Semi-moist. Dogs go mad for them.'
  },
  {
    id: 'pm-calming-probiotic',
    name: 'Bionic Biotic Supplement',
    brand: 'Pooch & Mutt',
    category: 'treats',
    subcategory: 'Supplements',
    caloriesPer100g: 280,
    proteinPercent: 12.0,
    fatPercent: 4.0,
    fiberPercent: 2.0,
    servingSuggestion: 'Sprinkle on food daily: 1-2 scoops based on weight.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/pooch-mutt',
    notes: 'Probiotic and prebiotic supplement. Great for gut health and immunity.'
  },
  {
    id: 'harr-treats-chicken',
    name: 'Tasty Bones Chicken',
    brand: 'Harringtons',
    category: 'treats',
    subcategory: 'Biscuits',
    caloriesPer100g: 330,
    proteinPercent: 15.0,
    fatPercent: 8.0,
    fiberPercent: 4.0,
    servingSuggestion: '2-3 treats per day as rewards.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Harringtons+treats+dog&tag=mymuttlife-21',
    notes: 'Budget-friendly treats. No artificial colours or flavours.'
  },

  // ============================================================
  // RAW FOOD OPTIONS
  // ============================================================
  {
    id: 'natures-menu-raw-chicken',
    name: 'Country Hunter Raw Chicken Nuggets',
    brand: "Nature's Menu",
    category: 'raw',
    subcategory: 'Frozen Raw',
    caloriesPer100g: 155,
    proteinPercent: 14.0,
    fatPercent: 10.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg: 200-250g/day. 25kg: 400-500g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Natures+Menu+raw+chicken+nuggets+dog&tag=mymuttlife-21',
    notes: 'UK\'s leading raw brand. 80% meat. Frozen nuggets — easy to portion. Found in pets shops.'
  },
  {
    id: 'natures-menu-raw-beef',
    name: 'Country Hunter Raw Beef Nuggets',
    brand: "Nature's Menu",
    category: 'raw',
    subcategory: 'Frozen Raw',
    caloriesPer100g: 160,
    proteinPercent: 14.5,
    fatPercent: 11.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg: 200-250g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Natures+Menu+raw+beef+nuggets+dog&tag=mymuttlife-21',
    notes: 'Raw beef with bone and offal. Complete and balanced BARF diet.'
  },
  {
    id: 'nutriment-adult-chicken',
    name: 'Adult Chicken Formula',
    brand: 'Nutriment',
    category: 'raw',
    subcategory: 'Frozen Raw',
    caloriesPer100g: 150,
    proteinPercent: 14.0,
    fatPercent: 9.5,
    fiberPercent: 0.5,
    servingSuggestion: '2-3% of body weight per day. 25kg dog: ~500-750g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Nutriment+adult+chicken+raw+dog+food&tag=mymuttlife-21',
    notes: 'Premium UK raw brand. Human-grade meat. No fillers, grains, or preservatives.'
  },
  {
    id: 'nutriment-adult-lamb',
    name: 'Adult Lamb Formula',
    brand: 'Nutriment',
    category: 'raw',
    subcategory: 'Frozen Raw',
    caloriesPer100g: 155,
    proteinPercent: 13.0,
    fatPercent: 10.5,
    fiberPercent: 0.5,
    servingSuggestion: '2-3% of body weight per day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Nutriment+adult+lamb+raw+dog+food&tag=mymuttlife-21',
    notes: 'British lamb with organic vegetables, kelp, and hemp oil.'
  },

  // ============================================================
  // ADDITIONAL ROYAL CANIN — remaining breed & specialty
  // ============================================================
  {
    id: 'rc-chihuahua-adult',
    name: 'Chihuahua Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 394,
    proteinPercent: 28.0,
    fatPercent: 18.0,
    fiberPercent: 1.5,
    servingSuggestion: '2kg: 35-45g/day. 3kg: 45-55g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Chihuahua+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Ultra-small kibble for tiny jaws. High energy density for small stomach capacity.'
  },
  {
    id: 'rc-schnauzer-adult',
    name: 'Miniature Schnauzer Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 370,
    proteinPercent: 25.0,
    fatPercent: 14.0,
    fiberPercent: 2.5,
    servingSuggestion: '5kg: 65-80g/day. 7kg: 85-105g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Miniature+Schnauzer+Adult&tag=mymuttlife-21',
    notes: 'Omega-3 for Schnauzer skin and coat. EPA/DHA for urinary health.'
  },
  {
    id: 'rc-rottweiler-adult',
    name: 'Rottweiler Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 355,
    proteinPercent: 26.0,
    fatPercent: 13.0,
    fiberPercent: 2.5,
    servingSuggestion: '40kg: 380-470g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Rottweiler+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Supports cardiac health and joint function. Adapted kibble for powerful jaw.'
  },
  {
    id: 'rc-beagle-adult',
    name: 'Beagle Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Breed Health',
    caloriesPer100g: 342,
    proteinPercent: 25.0,
    fatPercent: 11.0,
    fiberPercent: 5.0,
    servingSuggestion: '10kg: 120-150g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Beagle+Adult+dog+food&tag=mymuttlife-21',
    notes: 'Higher fibre for satiety — Beagles love to eat! Weight management formula.'
  },
  {
    id: 'rc-mini-sterilised',
    name: 'Mini Sterilised Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Neutered',
    caloriesPer100g: 346,
    proteinPercent: 28.0,
    fatPercent: 11.0,
    fiberPercent: 5.0,
    servingSuggestion: '4kg: 50-60g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Sterilised+dog+food&tag=mymuttlife-21',
    notes: 'For neutered small dogs. Controlled energy to prevent post-neutering weight gain.'
  },
  {
    id: 'rc-medium-sterilised',
    name: 'Medium Sterilised Adult',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Neutered',
    caloriesPer100g: 338,
    proteinPercent: 27.0,
    fatPercent: 10.0,
    fiberPercent: 5.5,
    servingSuggestion: '15kg: 170-215g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Medium+Sterilised+dog+food&tag=mymuttlife-21',
    notes: 'Weight management for neutered medium dogs. Satisfying blend.'
  },
  {
    id: 'rc-mini-coat-care',
    name: 'Mini Coat Care',
    brand: 'Royal Canin',
    category: 'dry',
    subcategory: 'Coat Health',
    caloriesPer100g: 378,
    proteinPercent: 27.0,
    fatPercent: 16.0,
    fiberPercent: 1.5,
    servingSuggestion: '4kg: 55-65g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Royal+Canin+Mini+Coat+Care+dog+food&tag=mymuttlife-21',
    notes: 'EPA/DHA and borage oil for dull, dry coats. Small breed coat nourishment.'
  },

  // ============================================================
  // MORE HILL'S SCIENCE PLAN
  // ============================================================
  {
    id: 'hills-small-mini-adult',
    name: 'Adult Small & Mini Chicken',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 375,
    proteinPercent: 24.0,
    fatPercent: 16.0,
    fiberPercent: 1.5,
    servingSuggestion: '5kg: 65-80g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Science+Plan+Small+Mini+Adult&tag=mymuttlife-21',
    notes: 'Tiny kibble for small mouths. Clinically proven antioxidant blend.'
  },
  {
    id: 'hills-perfect-weight',
    name: 'Perfect Weight Adult Medium',
    brand: "Hill's Science Plan",
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 312,
    proteinPercent: 25.0,
    fatPercent: 9.0,
    fiberPercent: 5.5,
    servingSuggestion: '15kg: 175-220g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Hills+Perfect+Weight+Medium+dog+food&tag=mymuttlife-21',
    notes: 'Clinically proven to reduce body fat in 10 weeks. Unique blend of ingredients.'
  },

  // ============================================================
  // MORE PURINA PRO PLAN
  // ============================================================
  {
    id: 'pp-adult-small-mini',
    name: 'Small & Mini Adult Chicken',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 380,
    proteinPercent: 28.0,
    fatPercent: 18.0,
    fiberPercent: 2.0,
    servingSuggestion: '5kg: 65-80g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Small+Mini+Adult+Chicken&tag=mymuttlife-21',
    notes: 'Crunchy and tender pieces for small dogs. OPTIDIGEST for digestive health.'
  },
  {
    id: 'pp-senior-original',
    name: 'Adult 7+ Medium Chicken',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 358,
    proteinPercent: 26.0,
    fatPercent: 13.0,
    fiberPercent: 3.0,
    servingSuggestion: '15kg: 185-230g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Adult+7+Medium+Chicken&tag=mymuttlife-21',
    notes: 'OPTIAGE blend with EPA for senior brain function. Maintains muscle mass.'
  },
  {
    id: 'pp-sensitive-digestion',
    name: 'Adult Sensitive Digestion Lamb',
    brand: 'Purina Pro Plan',
    category: 'dry',
    subcategory: 'Sensitive',
    caloriesPer100g: 362,
    proteinPercent: 24.0,
    fatPercent: 14.0,
    fiberPercent: 2.5,
    servingSuggestion: '15kg: 185-230g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Purina+Pro+Plan+Sensitive+Digestion+Lamb&tag=mymuttlife-21',
    notes: 'OPTIDIGEST for dogs with digestive sensitivity. Selected protein and prebiotic fibre.'
  },

  // ============================================================
  // MORE JAMES WELLBELOVED
  // ============================================================
  {
    id: 'jw-light-turkey',
    name: 'Adult Light Turkey & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 318,
    proteinPercent: 22.0,
    fatPercent: 7.0,
    fiberPercent: 4.0,
    servingSuggestion: '10kg: 130-170g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+light+turkey+rice+dog&tag=mymuttlife-21',
    notes: 'Lower calorie version of the classic JW. Excellent for weight management. Hypoallergenic.'
  },
  {
    id: 'jw-adult-duck-rice',
    name: 'Adult Duck & Rice',
    brand: 'James Wellbeloved',
    category: 'dry',
    subcategory: 'Hypoallergenic',
    caloriesPer100g: 350,
    proteinPercent: 21.0,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 130-170g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+duck+rice+adult+dog&tag=mymuttlife-21',
    notes: 'Novel protein for dogs with common intolerances. Single animal protein source.'
  },
  {
    id: 'jw-wet-turkey-senior',
    name: 'Senior Turkey & Rice Pouches',
    brand: 'James Wellbeloved',
    category: 'wet',
    subcategory: 'Senior Wet',
    caloriesPer100g: 90,
    proteinPercent: 8.0,
    fatPercent: 4.0,
    fiberPercent: 0.5,
    servingSuggestion: '10kg: 3-4 pouches/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=James+Wellbeloved+senior+wet+pouches+dog&tag=mymuttlife-21',
    notes: 'Wet pouch option for fussy seniors. Hypoallergenic. Great for mixing with dry.'
  },

  // ============================================================
  // MORE CANAGAN
  // ============================================================
  {
    id: 'can-light-free-run',
    name: 'Free-Run Chicken Light',
    brand: 'Canagan',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 345,
    proteinPercent: 32.0,
    fatPercent: 11.0,
    fiberPercent: 4.0,
    servingSuggestion: '10kg: 100-135g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Canagan+free+run+chicken+light+dog+food&tag=mymuttlife-21',
    notes: 'High protein, lower fat for weight-conscious feeding. Still grain-free premium quality.'
  },
  {
    id: 'can-small-breed',
    name: 'Small Breed Free-Run Chicken',
    brand: 'Canagan',
    category: 'dry',
    subcategory: 'Small Breed',
    caloriesPer100g: 370,
    proteinPercent: 33.0,
    fatPercent: 17.0,
    fiberPercent: 3.5,
    servingSuggestion: '5kg: 55-70g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Canagan+Small+Breed+Chicken+dog+food&tag=mymuttlife-21',
    notes: 'Smaller kibble for small mouths. Same 60% meat recipe as the standard.'
  },

  // ============================================================
  // MORE BURNS
  // ============================================================
  {
    id: 'burns-alert-chicken',
    name: 'Alert Chicken & Brown Rice',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Complete Adult',
    caloriesPer100g: 355,
    proteinPercent: 21.0,
    fatPercent: 9.0,
    fiberPercent: 2.5,
    servingSuggestion: '10kg: 115-150g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+Alert+Chicken+Rice+dog+food&tag=mymuttlife-21',
    notes: 'Higher protein option from Burns. For active dogs needing more fuel.'
  },
  {
    id: 'burns-sensitive-pork',
    name: 'Sensitive+ Pork & Potato',
    brand: 'Burns',
    category: 'dry',
    subcategory: 'Sensitive',
    caloriesPer100g: 340,
    proteinPercent: 18.0,
    fatPercent: 7.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 115-145g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Burns+Sensitive+Pork+Potato+dog+food&tag=mymuttlife-21',
    notes: 'Grain-free, single protein. For dogs with multiple sensitivities.'
  },

  // ============================================================
  // MORE FORTHGLADE
  // ============================================================
  {
    id: 'fg-puppy-chicken-complete',
    name: 'Puppy Complete Chicken & Brown Rice',
    brand: 'Forthglade',
    category: 'wet',
    subcategory: 'Puppy Wet',
    caloriesPer100g: 112,
    proteinPercent: 10.0,
    fatPercent: 6.0,
    fiberPercent: 0.4,
    servingSuggestion: 'Based on expected adult weight — see Forthglade puppy guide.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Forthglade+puppy+complete+chicken+dog&tag=mymuttlife-21',
    notes: 'Gentle puppy recipe in convenient trays. 75% meat. Natural ingredients.'
  },
  {
    id: 'fg-just-chicken',
    name: 'Just Chicken (Complementary)',
    brand: 'Forthglade',
    category: 'wet',
    subcategory: 'Complementary Wet',
    caloriesPer100g: 120,
    proteinPercent: 12.0,
    fatPercent: 7.0,
    fiberPercent: 0.3,
    servingSuggestion: 'Mix with dry food or add vegetables. Not a complete food alone.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Forthglade+Just+Chicken+dog+food&tag=mymuttlife-21',
    notes: '90% chicken. Great as a topper to make dry food more exciting.'
  },

  // ============================================================
  // MORE ARDEN GRANGE
  // ============================================================
  {
    id: 'ag-senior-chicken',
    name: 'Senior Chicken & Rice',
    brand: 'Arden Grange',
    category: 'dry',
    subcategory: 'Senior',
    caloriesPer100g: 338,
    proteinPercent: 22.0,
    fatPercent: 10.0,
    fiberPercent: 3.0,
    servingSuggestion: '10kg: 120-155g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Arden+Grange+Senior+Chicken+Rice+dog&tag=mymuttlife-21',
    notes: 'Joint support with glucosamine and chondroitin. Moderate fat for less active seniors.'
  },
  {
    id: 'ag-light-chicken',
    name: 'Light Chicken & Rice',
    brand: 'Arden Grange',
    category: 'dry',
    subcategory: 'Weight Management',
    caloriesPer100g: 320,
    proteinPercent: 22.0,
    fatPercent: 8.0,
    fiberPercent: 5.0,
    servingSuggestion: '10kg: 120-155g/day.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Arden+Grange+Light+Chicken+Rice+dog&tag=mymuttlife-21',
    notes: 'Lower calorie with L-carnitine. Premium British weight management food.'
  },

  // ============================================================
  // ADDITIONAL BUTTERNUT BOX
  // ============================================================
  {
    id: 'bb-white-fish',
    name: 'Swish Fish',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 110,
    proteinPercent: 9.5,
    fatPercent: 4.2,
    fiberPercent: 0.5,
    servingSuggestion: 'Personalised portions based on your dog\'s profile.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'White fish recipe. Lower fat — great for dogs watching their weight.'
  },
  {
    id: 'bb-plant-power',
    name: 'Plant Get Enough',
    brand: 'Butternut Box',
    category: 'fresh',
    subcategory: 'Complete Meals',
    caloriesPer100g: 105,
    proteinPercent: 6.5,
    fatPercent: 3.8,
    fiberPercent: 1.0,
    servingSuggestion: 'Personalised portions. Good as part of a mixed feeding plan.',
    affiliateUrl: 'https://mymuttlife.co.uk/go/butternut-box',
    notes: 'Plant-based recipe. Nutritionally complete. Great for reducing environmental impact.'
  },

  // ============================================================
  // ADDITIONAL TREATS
  // ============================================================
  {
    id: 'fish4dogs-sea-jerky',
    name: 'Sea Jerky Tiddlers',
    brand: 'Fish4Dogs',
    category: 'treats',
    subcategory: 'Fish Treats',
    caloriesPer100g: 330,
    proteinPercent: 55.0,
    fatPercent: 5.0,
    fiberPercent: 1.0,
    servingSuggestion: 'Use as a training treat or reward. Max 10% of daily calories.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Fish4Dogs+Sea+Jerky+Tiddlers&tag=mymuttlife-21',
    notes: 'Made from 100% fish skin. Omega-3 rich. Low fat. Dogs adore them.'
  },
  {
    id: 'yakers-chew-medium',
    name: 'Yak Milk Dog Chew Medium',
    brand: 'Yakers',
    category: 'treats',
    subcategory: 'Long-lasting Chews',
    caloriesPer100g: 350,
    proteinPercent: 52.0,
    fatPercent: 0.5,
    fiberPercent: 1.0,
    servingSuggestion: 'Supervise chewing. One chew lasts hours for most dogs.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Yakers+Yak+Milk+Dog+Chew+Medium&tag=mymuttlife-21',
    notes: 'Himalayan yak milk chew. Incredibly long-lasting. Only 4 ingredients. Great for keeping dogs busy.'
  },
  {
    id: 'whimzees-dental-stix',
    name: 'Dental Stix Medium',
    brand: 'Whimzees',
    category: 'treats',
    subcategory: 'Dental',
    caloriesPer100g: 310,
    proteinPercent: 9.0,
    fatPercent: 2.0,
    fiberPercent: 16.0,
    servingSuggestion: '1 stick per day for 12-18kg dogs.',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=Whimzees+Dental+Stix+Medium+dog&tag=mymuttlife-21',
    notes: 'Vegetable-based dental chew. Very high fibre. 6 ingredients only. VOHC accepted.'
  },
];

// Helper functions
export function getAllBrands(): string[] {
  return [...new Set(dogFoods.map(f => f.brand))].sort();
}

export function getAllCategories(): DogFood['category'][] {
  return ['dry', 'wet', 'fresh', 'raw', 'treats'];
}

export function searchFoods(query: string): DogFood[] {
  const q = query.toLowerCase();
  return dogFoods.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.brand.toLowerCase().includes(q) ||
    f.subcategory.toLowerCase().includes(q) ||
    f.notes.toLowerCase().includes(q)
  );
}

export function filterFoods(brand?: string, category?: DogFood['category']): DogFood[] {
  return dogFoods.filter(f => {
    if (brand && f.brand !== brand) return false;
    if (category && f.category !== category) return false;
    return true;
  });
}

export function getFoodById(id: string): DogFood | undefined {
  return dogFoods.find(f => f.id === id);
}
