<script>
  import { onMount } from 'svelte';
  import PetDetail from './lib/components/PetDetail.svelte';
  
  // Get pet ID from URL
  let petId = null;
  
  onMount(() => {
    // Extract pet ID from current URL
    const urlPath = window.location.pathname;
    const match = urlPath.match(/\/pet\/([\d]+)/);
    
    if (match && match[1]) {
      petId = parseInt(match[1], 10);
    }
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
    {#if petId}
      <PetDetail {petId} />
    {:else}
      <div class="text-center p-8 bg-white rounded-lg shadow-md">
        <p class="text-red-500">Invalid pet ID. Please select a valid pet.</p>
        <a 
          href="/"
          class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Pet List
        </a>
      </div>
    {/if}
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
</style>