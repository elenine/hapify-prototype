// Retirement Components Loader
// This script loads all retirement-specific section components and makes them available globally

// Initialize the components object if it doesn't exist
window.sectionComponents = window.sectionComponents || {};

console.log('🔄 Retirement component loader started');

// List of all available retirement components
const retirementComponentFiles = [
    'layout', 'hero', 'careerhighlights', 'yearsofservice', 'partydetails',
    'memorylane', 'futureplans', 'rsvp', 'gallery', 'thankyou'
];

// Function to check if all components are loaded
function checkComponentsLoaded() {
    console.log('🔍 Checking if retirement components are loaded...');
    const loaded = retirementComponentFiles.filter(name => window.sectionComponents[name]);
    const missing = retirementComponentFiles.filter(name => !window.sectionComponents[name]);

    console.log(`Retirement components loaded: ${loaded.length}/${retirementComponentFiles.length}`);

    if (missing.length > 0) {
        console.warn('Missing retirement components:', missing.join(', '));
    } else {
        console.log('✅ All retirement components loaded successfully!');
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
