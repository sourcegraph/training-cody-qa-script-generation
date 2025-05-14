/**
 * Mock data for pet store API
 */

// Mock pet categories
const categories = [
  { id: 1, name: 'Dogs' },
  { id: 2, name: 'Cats' },
  { id: 3, name: 'Birds' },
  { id: 4, name: 'Small Pets' },
  { id: 5, name: 'Reptiles' },
];

// Mock pet tags
const tags = [
  { id: 1, name: 'friendly' },
  { id: 2, name: 'trained' },
  { id: 3, name: 'young' },
  { id: 4, name: 'adult' },
  { id: 5, name: 'senior' },
  { id: 6, name: 'playful' },
  { id: 7, name: 'shy' },
  { id: 8, name: 'energetic' },
  { id: 9, name: 'calm' },
  { id: 10, name: 'special-needs' },
];

// Helper function to generate random tags for a pet
function getRandomTags(count = 3) {
  const shuffled = [...tags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Helper function to get a random image URL for a category
function getRandomImage(category) {
  const images = {
    'Dogs': [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
    ],
    'Cats': [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
    ],
    'Birds': [
      'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
    ],
    'Small Pets': [
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1618232118117-98d53b92683d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1591561582301-7ce7c2849276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
    ],
    'Reptiles': [
      'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      'https://images.unsplash.com/photo-1581254437620-5c6cf363c3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
    ],
  };
  
  const categoryImages = images[category] || images['Dogs'];
  return categoryImages[Math.floor(Math.random() * categoryImages.length)];
}

// Generate mock pet names based on category
function getPetName(category) {
  const names = {
    'Dogs': ['Max', 'Bella', 'Charlie', 'Luna', 'Cooper', 'Lucy', 'Buddy', 'Daisy', 'Rocky', 'Lola', 'Duke', 'Sadie'],
    'Cats': ['Oliver', 'Lily', 'Leo', 'Milo', 'Chloe', 'Simba', 'Sophie', 'Jack', 'Stella', 'Loki', 'Cleo', 'Oscar'],
    'Birds': ['Kiwi', 'Sunny', 'Blueberry', 'Rio', 'Skye', 'Tweety', 'Pepper', 'Robin', 'Phoenix', 'Feather'],
    'Small Pets': ['Hammy', 'Peanut', 'Oreo', 'Biscuit', 'Nibbles', 'Cookie', 'Cinnamon', 'Chestnut', 'Puff', 'Ginger'],
    'Reptiles': ['Rex', 'Spike', 'Ziggy', 'Draco', 'Scales', 'Fang', 'Gecko', 'Ozzy', 'Blaze', 'Coco'],
  };
  
  const categoryNames = names[category] || names['Dogs'];
  return categoryNames[Math.floor(Math.random() * categoryNames.length)];
}

// Generate 50 mock pets with different statuses
const mockPets = [];
for (let id = 1; id <= 50; id++) {
  const categoryIndex = Math.floor(Math.random() * categories.length);
  const category = categories[categoryIndex];
  const status = ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)];
  
  mockPets.push({
    id,
    name: getPetName(category.name),
    category,
    photoUrls: [getRandomImage(category.name)],
    tags: getRandomTags(Math.floor(Math.random() * 4) + 1), // 1-4 random tags
    status,
  });
}

/**
 * Mock implementation of getPetsByStatus
 * @param {string} status - Pet status (available, pending, sold)
 * @returns {Promise<Array>} - Array of pet objects
 */
export async function getPetsByStatus(status = 'available') {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (status === 'all') {
    return mockPets;
  }
  
  return mockPets.filter(pet => pet.status === status);
}

/**
 * Mock implementation of getPetById
 * @param {number|string} id - Pet ID (can be number or string)
 * @returns {Promise<Object>} - Pet object
 */
export async function getPetById(id) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Ensure id is treated as a number for comparison
  const numericId = parseInt(id, 10);
  
  // Check if conversion resulted in a valid number
  if (isNaN(numericId)) {
    throw new Error(`Invalid pet ID: ${id}`);
  }
  
  const pet = mockPets.find(pet => pet.id === numericId);
  
  if (!pet) {
    throw new Error(`Pet with ID ${id} not found`);
  }
  
  return pet;
}

/**
 * Mock implementation of getPetsByTags
 * @param {Array<string>} tags - Array of tag names
 * @returns {Promise<Array>} - Array of pet objects
 */
export async function getPetsByTags(tags = []) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  if (!tags.length) {
    return mockPets;
  }
  
  return mockPets.filter(pet => {
    return pet.tags.some(petTag => tags.includes(petTag.name));
  });
}

// Export the mock data for other potential uses
export { mockPets, categories, tags };