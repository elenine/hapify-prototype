// Graduation Components Loader
// This script loads all graduation section components and makes them available globally

// Initialize the components object if it doesn't exist
window.sectionComponents = window.sectionComponents || {};

console.log('🔄 Graduation component loader started');

// List of all available graduation components
const componentFiles = [
    'layout', 'hero', 'graduateinfo', 'ceremonydetails', 'photogallery',
    'celebrationparty', 'achievements', 'thankyou', 'futureplans', 'contact'
];

// Function to check if all components are loaded
function checkComponentsLoaded() {
    console.log('🔍 Checking if graduation components are loaded...');
    const loaded = componentFiles.filter(name => window.sectionComponents[name]);
    const missing = componentFiles.filter(name => !window.sectionComponents[name]);

    console.log(`Graduation components loaded: ${loaded.length}/${componentFiles.length}`);

    if (missing.length > 0) {
        console.warn('Missing graduation components:', missing.join(', '));
    } else {
        console.log('✅ All graduation components loaded successfully!');
    }

    // Make components available as sectionTemplates for backwards compatibility
    window.sectionTemplates = window.sectionComponents;

    // Always dispatch event (even if some components are missing, we should still try to run)
    window.dispatchEvent(new Event('componentsReady'));
}

// Check immediately if DOM is already loaded
if (document.readyState === 'loading') {
    // DOM not ready, wait for it
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(checkComponentsLoaded, 50);
    });
} else {
    // DOM already loaded, check components immediately
    setTimeout(checkComponentsLoaded, 50);
}
