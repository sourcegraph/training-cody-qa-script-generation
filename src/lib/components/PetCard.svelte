<script>
  export let pet = {};

  // Default image if no pet image is available
  const defaultImage = 'https://via.placeholder.com/150?text=No+Image';

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
</script>

<div class="pet-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
  <div class="pet-image h-48 overflow-hidden">
    <img 
      src={getImageUrl(pet.photoUrls)} 
      alt={pet.name || 'Pet'} 
      class="w-full h-full object-cover object-center"
      loading="lazy"
      on:error={(e) => {
        const target = e.target;
        if (target instanceof HTMLImageElement) {
          target.src = 'https://via.placeholder.com/150?text=No+Image';
        }
      }}
    />
  </div>
  
  <div class="card-header p-4 pb-0">
    <div class="flex justify-between items-start">
      <h3 class="text-xl font-bold">{pet.name || 'Unknown'}</h3>
      {#if pet.status}
        <span class={`text-xs px-2 py-1 rounded-full ${getStatusColor(pet.status)}`}>
          {pet.status}
        </span>
      {/if}
    </div>
  </div>
  
  <div class="card-content p-4">
    {#if pet.category}
      <p class="text-sm text-gray-600 mb-2">
        Category: {pet.category.name || 'Unknown'}
      </p>
    {/if}
    
    {#if pet.tags && pet.tags.length > 0}
      <div class="mt-3">
        <p class="text-xs text-gray-500 mb-1">Tags:</p>
        <div class="flex flex-wrap gap-1">
          {#each pet.tags as tag}
            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              {tag.name}
            </span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
  
  <div class="card-footer p-4 pt-0">
    <a 
      href={`/pet/${pet.id}`} 
      class="text-sm text-blue-600 hover:text-blue-800 hover:underline"
    >
      View details
    </a>
  </div>
</div>

<style>
  .pet-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transform: translateY(0);
    will-change: transform, box-shadow;
    box-sizing: border-box;
  }
</style>