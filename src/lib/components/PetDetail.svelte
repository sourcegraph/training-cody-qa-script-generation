<script>
  import { onMount } from 'svelte';
  import { getPetById } from '../services/petService';

  export let petId;
  
  let pet = null;
  let loading = true;
  let error = null;
  
  // Default image if no pet image is available
  const defaultImage = 'https://via.placeholder.com/400x300?text=No+Image';

  // Helper function to get a valid image URL
  function getImageUrl(photoUrls) {
    if (!photoUrls || photoUrls.length === 0) {
      return defaultImage;
    }
    return photoUrls[0];
  }

  // Helper function to get status color
  function getStatusColor(status) {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  
  // Load pet data when component mounts
  onMount(async () => {
    try {
      pet = await getPetById(petId);
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  });
</script>

<div class="pet-detail">
  {#if loading}
    <div class="loading-container">
      <p>Loading pet details...</p>
    </div>
  {:else if error}
    <div class="error-container">
      <p class="text-red-500">Error: {error}</p>
    </div>
  {:else if pet}
    <div class="pet-card bg-white rounded-lg shadow-md overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Image section -->
        <div class="pet-image overflow-hidden">
          <img 
            src={getImageUrl(pet.photoUrls)} 
            alt={pet.name} 
            class="w-full h-full object-cover object-center"
            loading="lazy"
            on:error={(e) => {
              const target = e.target;
              if (target instanceof HTMLImageElement) {
                target.src = 'https://via.placeholder.com/400x300?text=No+Image';
              }
            }}
          />
        </div>
        
        <!-- Info section -->
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h1 class="text-3xl font-bold">{pet.name}</h1>
            
            {#if pet.status}
              <span class={`text-sm px-3 py-1 rounded-full ${getStatusColor(pet.status)}`}>
                {pet.status}
              </span>
            {/if}
          </div>
          
          {#if pet.category}
            <div class="mb-4">
              <h2 class="text-lg font-semibold mb-1">Category</h2>
              <p>{pet.category.name}</p>
            </div>
          {/if}
          
          {#if pet.tags && pet.tags.length > 0}
            <div class="mb-4">
              <h2 class="text-lg font-semibold mb-2">Tags</h2>
              <div class="flex flex-wrap gap-2">
                {#each pet.tags as tag}
                  <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    {tag.name}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
          
          <div class="mt-6">
            <a 
              href="/"
              class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Back to Pet List
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .loading-container,
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    width: 100%;
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem;
  }
  
  .pet-detail {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5rem;
  }
  
  .pet-image {
    min-height: 300px;
  }
  
  @media (max-width: 768px) {
    .pet-image {
      height: 300px;
    }
  }
</style>