/**
 * Service for fetching pet data from mock implementation
 * 
 * This file serves as the API client for pet data, using mock data
 * for development and testing purposes. It maintains the same interface
 * as the real API would have, making it easy to switch back to the real API later.
 */

// Import mock data implementations
import { 
  getPetsByStatus as mockGetPetsByStatus,
  getPetById as mockGetPetById,
  getPetsByTags as mockGetPetsByTags
} from './mockPetData';

// Flag to control whether to use mock data or real API
const USE_MOCK_DATA = true;
const API_URL = 'https://petstore3.swagger.io/api/v3';

/**
 * Fetch pets by status
 * @param {string} status - Pet status (available, pending, sold)
 * @returns {Promise<Array>} - Array of pet objects
 */
export async function getPetsByStatus(status = 'available') {
  if (USE_MOCK_DATA) {
    return mockGetPetsByStatus(status);
  }
  
  try {
    const response = await fetch(`${API_URL}/pet/findByStatus?status=${status}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching pets: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
}

/**
 * Fetch a pet by ID
 * @param {number} id - Pet ID
 * @returns {Promise<Object>} - Pet object
 */
export async function getPetById(id) {
  if (USE_MOCK_DATA) {
    return mockGetPetById(id);
  }
  
  try {
    const response = await fetch(`${API_URL}/pet/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching pet: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching pet with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Fetch pets by tags
 * @param {Array<string>} tags - Array of tag names
 * @returns {Promise<Array>} - Array of pet objects
 */
export async function getPetsByTags(tags = []) {
  if (USE_MOCK_DATA) {
    return mockGetPetsByTags(tags);
  }
  
  try {
    // Join tags with comma for the API
    const tagsParam = tags.join(',');
    const response = await fetch(`${API_URL}/pet/findByTags?tags=${tagsParam}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching pets by tags: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching pets by tags:', error);
    throw error;
  }
}