// Engagement Announcement Component Loader
// This script loads all engagement section components and makes them available globally

// Initialize the components object if it doesn't exist
window.sectionComponents = window.sectionComponents || {};

console.log('🔄 Engagement component loader started');

// List of all available engagement components
const componentFiles = [
    'layout', 'hero', 'lovestory', 'proposal', 'couple',
    'photos', 'celebration', 'registry', 'rsvp', 'future',
    'timeline', 'faq', 'dresscode', 'accommodations', 'directions',
    'socialmedia', 'guestbook', 'thankyou'
];

// Function to check if all components are loaded
function checkComponentsLoaded() {
    console.log('🔍 Checking if engagement components are loaded...');
    const loaded = componentFiles.filter(name => window.sectionComponents[name]);
    const missing = componentFiles.filter(name => !window.sectionComponents[name]);

    console.log(`✨ Engagement components loaded: ${loaded.length}/${componentFiles.length}`);

    if (missing.length > 0) {
        console.warn('⚠️ Missing engagement components:', missing.join(', '));
    } else {
        console.log('✅ All engagement components loaded successfully!');
    }

    // Make components available as sectionTemplates for backwards compatibility
    window.sectionTemplates = window.sectionComponents;

    // Always dispatch event (even if some components are missing, we should still try to run)
    console.log('📢 Dispatching componentsReady event');
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
