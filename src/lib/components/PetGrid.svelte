<script>
  import PetCard from './PetCard.svelte';
  
  export let pets = [];
  export let loading = false;
  export let error = null;
</script>

<div class="pet-grid-wrapper">
  {#if loading}
    <div class="status-container loading-container">
      <p>Loading pets...</p>
    </div>
  {:else if error}
    <div class="status-container error-container">
      <p class="text-red-500">Error: {error}</p>
    </div>
  {:else if pets.length === 0}
    <div class="status-container empty-container">
      <p>No pets found.</p>
    </div>
  {:else}
    <div class="pet-cards-grid">
      {#each pets as pet (pet.id)}
        <div class="pet-card-wrapper">
          <PetCard {pet} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .pet-grid-wrapper {
    width: 100%;
    box-sizing: border-box;
  }
  
  .status-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 100%;
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .pet-cards-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    width: 100%;
  }
  
  .pet-card-wrapper {
    width: 100%;
    box-sizing: border-box;
  }
  
  @media (min-width: 640px) {
    .pet-cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 768px) {
    .pet-cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .pet-cards-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (min-width: 1280px) {
    .pet-cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>