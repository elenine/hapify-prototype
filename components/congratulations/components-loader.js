// Components loader for congratulations card
// This file ensures all components are properly loaded and ready before the app initializes

(function() {
    console.log('📦 Loading congratulations card components...');

    // Check if all components are loaded
    function checkComponents() {
        const requiredComponents = [
            'layout',
            'coverMessage',
            'achievement',
            'photo',
            'praise',
            'journey',
            'quote',
            'futureWishes',
            'celebration',
            'signature',
            'memories',
            'teamMessages',
            'successTimeline',
            'advice',
            'video',
            'gallery'
        ];

        const loadedComponents = Object.keys(window.sectionComponents || {});
        const allLoaded = requiredComponents.every(comp => loadedComponents.includes(comp));

        if (allLoaded) {
            console.log('✅ All components loaded successfully:', loadedComponents);
            // Dispatch custom event to signal components are ready
            window.dispatchEvent(new Event('componentsReady'));
            return true;
        } else {
            const missing = requiredComponents.filter(comp => !loadedComponents.includes(comp));
            console.warn('⚠️ Missing components:', missing);
            return false;
        }
    }

    // Try to check components immediately
    if (!checkComponents()) {
        // If not all loaded, try again after a short delay
        setTimeout(() => {
            if (!checkComponents()) {
                console.error('❌ Failed to load all components');
            }
        }, 100);
    }
})();
