// Component Loader
// This script loads all section components and makes them available globally

// Initialize the components object if it doesn't exist
window.sectionComponents = window.sectionComponents || {};

// List of all available components
const componentFiles = [
    'layout', 'hero', 'about', 'services', 'portfolio', 'team',
    'testimonials', 'contact', 'social', 'cta', 'skills', 'pricing',
    'faq', 'stats', 'gallery', 'clients', 'awards', 'video',
    'features', 'process'
];

// Function to check if all components are loaded
function checkComponentsLoaded() {
    const loaded = componentFiles.filter(name => window.sectionComponents[name]);
    const missing = componentFiles.filter(name => !window.sectionComponents[name]);

    console.log(`Components loaded: ${loaded.length}/${componentFiles.length}`);

    if (missing.length > 0) {
        console.warn('Missing components:', missing.join(', '));
    }

    // Make components available as sectionTemplates for backwards compatibility
    if (loaded.length === componentFiles.length) {
        window.sectionTemplates = window.sectionComponents;
        console.log('✅ All components loaded successfully!');

        // Dispatch event to notify that components are ready
        window.dispatchEvent(new Event('componentsReady'));
    }
}

// Auto-check after a short delay to allow all scripts to load
setTimeout(checkComponentsLoaded, 100);
