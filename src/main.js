import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import PetDetailPage from './PetDetailPage.svelte'

// Simple client-side routing
function getComponent() {
  const path = window.location.pathname;
  
  // Check if the path matches the pattern /pet/:id
  if (path.match(/^\/pet\/[\d]+$/)) {
    return PetDetailPage;
  }
  
  // Default to the main App component
  return App;
}

const app = mount(getComponent(), {
  target: document.getElementById('app'),
})

export default app
