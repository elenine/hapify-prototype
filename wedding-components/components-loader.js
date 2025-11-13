// Wedding Components Loader
// This file ensures all components are loaded and available before initializing the app

(function() {
    // Check if all components are loaded
    function checkComponentsLoaded() {
        if (!window.weddingSectionComponents) {
            console.warn('⚠️ weddingSectionComponents not initialized yet');
            return false;
        }

        const requiredComponents = [
            'layout',
            'hero',
            'couple',
            'details',
            'story',
            'gallery',
            'rsvp',
            'map',
            'schedule',
            'message'
        ];

        const loadedComponents = Object.keys(window.weddingSectionComponents);
        const missingComponents = requiredComponents.filter(comp => !loadedComponents.includes(comp));

        if (missingComponents.length > 0) {
            console.warn('⚠️ Missing components:', missingComponents);
            return false;
        }

        console.log('✅ All wedding components loaded:', loadedComponents.length, 'components');
        return true;
    }

    // Wait for components to load, then dispatch event
    let attempts = 0;
    const maxAttempts = 20;
    const checkInterval = 50;

    function tryNotify() {
        attempts++;

        if (checkComponentsLoaded()) {
            console.log('✅ Wedding components ready, dispatching event');
            window.dispatchEvent(new Event('weddingComponentsReady'));
            return;
        }

        if (attempts < maxAttempts) {
            setTimeout(tryNotify, checkInterval);
        } else {
            console.error('❌ Failed to load all wedding components after', maxAttempts, 'attempts');
            console.log('Loaded components:', Object.keys(window.weddingSectionComponents || {}));
        }
    }

    // Start checking when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryNotify);
    } else {
        // DOM already loaded, start checking immediately
        tryNotify();
    }
})();
