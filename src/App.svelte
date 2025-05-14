<script>
  import { onMount } from 'svelte';
  import PetGrid from './lib/components/PetGrid.svelte';
  import { getPetsByStatus } from './lib/services/petService';
  
  let pets = [];
  let loading = true;
  let error = null;
  let status = 'available';
  
  // Function to load pets
  async function loadPets() {
    loading = true;
    error = null;
    
    try {
      pets = await getPetsByStatus(status);
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
  
  // Handle status change
  function handleStatusChange(newStatus) {
    status = newStatus;
    loadPets();
  }
  
  // Load pets when component mounts
  onMount(() => {
    loadPets();
  });
</script>

<main>
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">Pet Store</h1>
      <p class="mt-1">Find your perfect pet companion</p>
    </div>
  </header>
  
  <div class="container-wrapper">
    <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-2xl font-semibold mb-3 sm:mb-0">Browse Pets</h2>
      
      <div class="status-filter">
        <label for="status-select" class="mr-2 font-medium">Filter by status:</label>
        <select 
          id="status-select"
          class="border rounded p-2 bg-white"
          value={status}
          on:change={(e) => handleStatusChange(e.currentTarget.value)}
        >
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </div>
    </div>
    
    <PetGrid {pets} {loading} {error} />
  </div>
</main>

<style>
  :global(body) {
    background-color: #f0f2f5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-image: linear-gradient(to bottom, #f9fafb, #f0f2f5);
    min-height: 100vh;
  }
  
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .container-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Basic utility classes for styling */
  :global(.bg-white) {
    background-color: white;
  }
  
  :global(.bg-blue-600) {
    background-color: #2563eb;
  }
  
  :global(.text-white) {
    color: white;
  }
  
  :global(.rounded) {
    border-radius: 0.25rem;
  }
</style>
