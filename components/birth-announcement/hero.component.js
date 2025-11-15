// Hero Header Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '👶 Hero Header',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby's Name</label>
                <input type="text" placeholder="Emma Rose" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Announcement Title</label>
                <input type="text" placeholder="Welcome to the World" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🖼️</div>
                    <div class="text-sm text-gray-600">Click to upload banner</div>
                    <input type="file" class="hidden section-data" data-field="bannerImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="bannerMode" onchange="updatePreview()">
                    <option value="none">No Banner</option>
                    <option value="background">Background</option>
                    <option value="top">Top Banner</option>
                    <option value="bottom">Bottom Banner</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Opacity (%)</label>
                <input type="range" min="0" max="100" value="30" class="w-full section-style" data-style="bannerOpacity" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Overlay Color</label>
                <input type="color" value="#000000" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bannerOverlay" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Overlay Opacity (%)</label>
                <input type="range" min="0" max="100" value="50" class="w-full section-style" data-style="bannerOverlayOpacity" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Blur (px)</label>
                <input type="range" min="0" max="10" value="0" class="w-full section-style" data-style="bannerBlur" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Height</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
                    <option value="small">Small (200px)</option>
                    <option value="medium">Medium (300px)</option>
                    <option value="large">Large (400px)</option>
                    <option value="full">Full Height</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bg || '#14b8a6';
        const textColor = style.text || '#ffffff';

        // Banner image properties
        const bannerImage = data.bannerImage || '';
        const bannerMode = style.bannerMode || 'none';
        const bannerOpacity = style.bannerOpacity || 30;
        const bannerOverlay = style.bannerOverlay || '#000000';
        const bannerOverlayOpacity = style.bannerOverlayOpacity || 50;
        const bannerBlur = style.bannerBlur || 0;
        const bannerHeight = style.bannerHeight || 'medium';

        // Banner height mapping
        const bannerHeights = {
            small: '200px',
            medium: '300px',
            large: '400px',
            full: '100%'
        };

        // Generate banner HTML based on mode
        const generateBanner = (mode) => {
            if (!bannerImage || mode === 'none') return '';

            const opacity = bannerOpacity / 100;
            const overlayOp = bannerOverlayOpacity / 100;
            const blur = bannerBlur > 0 ? `blur(${bannerBlur}px)` : 'none';

            if (mode === 'background') {
                return `
                    <div class="absolute inset-0 overflow-hidden">
                        <img src="${bannerImage}" class="w-full h-full object-cover" style="opacity: ${opacity}; filter: ${blur};">
                        <div class="absolute inset-0" style="background: ${bannerOverlay}; opacity: ${overlayOp};"></div>
                    </div>
                `;
            } else if (mode === 'top' || mode === 'bottom') {
                const positionClass = mode === 'top' ? 'top-0' : 'bottom-0';
                const height = bannerHeights[bannerHeight];
                return `
                    <div class="absolute ${positionClass} left-0 right-0 overflow-hidden" style="height: ${height};">
                        <img src="${bannerImage}" class="w-full h-full object-cover" style="opacity: ${opacity}; filter: ${blur};">
                        <div class="absolute inset-0" style="background: ${bannerOverlay}; opacity: ${overlayOp};"></div>
                    </div>
                `;
            }
            return '';
        };

        return `
            <div class="relative text-center py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                ${generateBanner(bannerMode)}
                <div class="relative z-10">
                    ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white">` : '<div class="text-6xl mb-4">👶</div>'}
                    <h1 class="text-3xl font-bold mb-2">${data.title || 'Welcome to the World'}</h1>
                    <p class="text-2xl">${data.name || "Baby's Name"}</p>
                </div>
            </div>
        `;
    }
};
