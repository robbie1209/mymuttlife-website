export interface DogBreed {
  name: string;
  avgWeightKg: number; // average adult weight
  sizeCategory: 'small' | 'medium' | 'large' | 'giant';
}

export const dogBreeds: DogBreed[] = [
  // Small breeds (under 10kg)
  { name: 'Chihuahua', avgWeightKg: 2.5, sizeCategory: 'small' },
  { name: 'Yorkshire Terrier', avgWeightKg: 3, sizeCategory: 'small' },
  { name: 'Maltese', avgWeightKg: 3, sizeCategory: 'small' },
  { name: 'Pomeranian', avgWeightKg: 3, sizeCategory: 'small' },
  { name: 'Papillon', avgWeightKg: 4, sizeCategory: 'small' },
  { name: 'Toy Poodle', avgWeightKg: 4, sizeCategory: 'small' },
  { name: 'Shih Tzu', avgWeightKg: 6, sizeCategory: 'small' },
  { name: 'Cavalier King Charles Spaniel', avgWeightKg: 7, sizeCategory: 'small' },
  { name: 'Miniature Dachshund', avgWeightKg: 5, sizeCategory: 'small' },
  { name: 'Jack Russell Terrier', avgWeightKg: 7, sizeCategory: 'small' },
  { name: 'Pug', avgWeightKg: 7.5, sizeCategory: 'small' },
  { name: 'Miniature Schnauzer', avgWeightKg: 7, sizeCategory: 'small' },
  { name: 'Bichon Frise', avgWeightKg: 5.5, sizeCategory: 'small' },
  { name: 'West Highland White Terrier', avgWeightKg: 8, sizeCategory: 'small' },
  { name: 'Cairn Terrier', avgWeightKg: 6.5, sizeCategory: 'small' },
  { name: 'Norfolk Terrier', avgWeightKg: 5.5, sizeCategory: 'small' },
  { name: 'Scottish Terrier', avgWeightKg: 9, sizeCategory: 'small' },
  { name: 'Lhasa Apso', avgWeightKg: 7, sizeCategory: 'small' },
  { name: 'Miniature Poodle', avgWeightKg: 7, sizeCategory: 'small' },
  { name: 'French Bulldog', avgWeightKg: 11, sizeCategory: 'small' },

  // Medium breeds (10-25kg)
  { name: 'Cocker Spaniel', avgWeightKg: 13, sizeCategory: 'medium' },
  { name: 'English Springer Spaniel', avgWeightKg: 22, sizeCategory: 'medium' },
  { name: 'Beagle', avgWeightKg: 11, sizeCategory: 'medium' },
  { name: 'Border Collie', avgWeightKg: 18, sizeCategory: 'medium' },
  { name: 'Whippet', avgWeightKg: 12, sizeCategory: 'medium' },
  { name: 'Staffordshire Bull Terrier', avgWeightKg: 14, sizeCategory: 'medium' },
  { name: 'Shetland Sheepdog', avgWeightKg: 10, sizeCategory: 'medium' },
  { name: 'Standard Dachshund', avgWeightKg: 10, sizeCategory: 'medium' },
  { name: 'Bull Terrier', avgWeightKg: 25, sizeCategory: 'medium' },
  { name: 'Basenji', avgWeightKg: 11, sizeCategory: 'medium' },
  { name: 'Australian Shepherd', avgWeightKg: 23, sizeCategory: 'medium' },
  { name: 'Welsh Corgi (Pembroke)', avgWeightKg: 12, sizeCategory: 'medium' },
  { name: 'Border Terrier', avgWeightKg: 6.5, sizeCategory: 'medium' },
  { name: 'Standard Poodle', avgWeightKg: 25, sizeCategory: 'medium' },
  { name: 'English Bulldog', avgWeightKg: 23, sizeCategory: 'medium' },
  { name: 'Cockapoo', avgWeightKg: 10, sizeCategory: 'medium' },
  { name: 'Cavapoo', avgWeightKg: 8, sizeCategory: 'medium' },
  { name: 'Sprocker Spaniel', avgWeightKg: 18, sizeCategory: 'medium' },
  { name: 'Labradoodle (Medium)', avgWeightKg: 20, sizeCategory: 'medium' },
  { name: 'Goldendoodle (Medium)', avgWeightKg: 20, sizeCategory: 'medium' },

  // Large breeds (25-40kg)
  { name: 'Labrador Retriever', avgWeightKg: 30, sizeCategory: 'large' },
  { name: 'Golden Retriever', avgWeightKg: 30, sizeCategory: 'large' },
  { name: 'German Shepherd', avgWeightKg: 35, sizeCategory: 'large' },
  { name: 'Boxer', avgWeightKg: 30, sizeCategory: 'large' },
  { name: 'Vizsla', avgWeightKg: 25, sizeCategory: 'large' },
  { name: 'Weimaraner', avgWeightKg: 32, sizeCategory: 'large' },
  { name: 'Dalmatian', avgWeightKg: 27, sizeCategory: 'large' },
  { name: 'Dobermann', avgWeightKg: 35, sizeCategory: 'large' },
  { name: 'Rhodesian Ridgeback', avgWeightKg: 37, sizeCategory: 'large' },
  { name: 'Belgian Malinois', avgWeightKg: 28, sizeCategory: 'large' },
  { name: 'Flat-Coated Retriever', avgWeightKg: 30, sizeCategory: 'large' },
  { name: 'Collie (Rough)', avgWeightKg: 27, sizeCategory: 'large' },
  { name: 'Husky', avgWeightKg: 23, sizeCategory: 'large' },
  { name: 'Greyhound', avgWeightKg: 30, sizeCategory: 'large' },
  { name: 'Irish Setter', avgWeightKg: 30, sizeCategory: 'large' },
  { name: 'Pointer', avgWeightKg: 27, sizeCategory: 'large' },
  { name: 'Rottweiler', avgWeightKg: 45, sizeCategory: 'large' },

  // Giant breeds (40kg+)
  { name: 'Great Dane', avgWeightKg: 60, sizeCategory: 'giant' },
  { name: 'Bernese Mountain Dog', avgWeightKg: 45, sizeCategory: 'giant' },
  { name: 'Newfoundland', avgWeightKg: 55, sizeCategory: 'giant' },
  { name: 'Saint Bernard', avgWeightKg: 70, sizeCategory: 'giant' },
  { name: 'Irish Wolfhound', avgWeightKg: 55, sizeCategory: 'giant' },
  { name: 'Leonberger', avgWeightKg: 55, sizeCategory: 'giant' },
  { name: 'Mastiff (English)', avgWeightKg: 75, sizeCategory: 'giant' },
  { name: 'Bullmastiff', avgWeightKg: 50, sizeCategory: 'giant' },
  { name: 'Great Pyrenees', avgWeightKg: 50, sizeCategory: 'giant' },
  { name: 'Cane Corso', avgWeightKg: 45, sizeCategory: 'giant' },
  { name: 'Akita', avgWeightKg: 40, sizeCategory: 'giant' },

  // Mixed / Other
  { name: 'Mixed Breed / Crossbreed', avgWeightKg: 20, sizeCategory: 'medium' },
  { name: 'Other (I\'ll enter weight)', avgWeightKg: 0, sizeCategory: 'medium' },
];

export function getBreedByName(name: string): DogBreed | undefined {
  return dogBreeds.find(b => b.name === name);
}
