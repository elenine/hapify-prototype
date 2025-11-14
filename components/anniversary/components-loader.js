// Component Loader for Anniversary Wishes
// This file ensures all components are loaded and dispatches a ready event

(function() {
    'use strict';

    // Wait for all component scripts to load
    function waitForComponents() {
        // Check if all components are registered
        const requiredComponents = [
            'layout',
            'hero',
            'milestone',
            'journey',
            'lovestory',
            'celebration',
            'vowrenewal',
            'rsvp',
            'gallery',
            'thankyou'
        ];

        const allLoaded = requiredComponents.every(comp =>
            window.sectionComponents && window.sectionComponents[comp]
        );

        if (allLoaded) {
            console.log('✅ All anniversary components loaded successfully');

            // Dispatch custom event to signal components are ready
            const event = new CustomEvent('componentsReady', {
                detail: {
                    components: Object.keys(window.sectionComponents),
                    count: Object.keys(window.sectionComponents).length
                }
            });
            window.dispatchEvent(event);
        } else {
            // Some components not loaded yet, check which ones
            const missing = requiredComponents.filter(comp =>
                !window.sectionComponents || !window.sectionComponents[comp]
            );
            console.warn('⚠️ Waiting for anniversary components:', missing);
        }
    }

    // Check immediately and set up a short delay as fallback
    setTimeout(waitForComponents, 50);
})();
