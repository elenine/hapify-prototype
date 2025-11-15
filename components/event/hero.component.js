// Hero Header Component for Event Invitation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎉 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                <input type="text" placeholder="Annual Tech Conference" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input type="text" placeholder="Join us for an inspiring event" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="classic">Classic - Centered</option>
                    <option value="modern">Modern - Split Layout</option>
                    <option value="minimal">Minimal - Clean & Simple</option>
                    <option value="bold">Bold - Large Typography</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="gradient">Gradient Background</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color (for gradients)</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Content Position</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="contentPosition" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="imageStyle" onchange="updatePreview()">
                    <option value="default">Default - Rounded</option>
                    <option value="circular">Circular</option>
                    <option value="full-width">Full Width</option>
                    <option value="contained">Contained Box</option>
                    <option value="none">Hide Image</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="padding" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">No Radius</option>
                    <option value="small">Small (4px)</option>
                    <option value="medium">Medium (8px)</option>
                    <option value="large">Large (16px)</option>
                    <option value="xl">Extra Large (24px)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
                    <option value="small">Small (200px)</option>
                    <option value="medium">Medium (300px)</option>
                    <option value="large">Large (400px)</option>
                    <option value="full">Full Height</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bg || '#059669';
        const secondaryBg = style.secondaryBg || '#10b981';
        const textColor = style.text || '#ffffff';
        const layoutStyle = style.layoutStyle || 'classic';
        const textAlign = style.textAlign || 'center';
        const contentPosition = style.contentPosition || 'center';
        const imageStyle = style.imageStyle || 'default';
        const padding = style.padding || 'medium';
        const borderRadius = style.borderRadius || 'medium';

        // Banner image properties
        const bannerImage = data.bannerImage || '';
        const bannerMode = style.bannerMode || 'none';
        const bannerOpacity = style.bannerOpacity || 30;
        const bannerOverlay = style.bannerOverlay || '#000000';
        const bannerOverlayOpacity = style.bannerOverlayOpacity || 50;
        const bannerBlur = style.bannerBlur || 0;
        const bannerHeight = style.bannerHeight || 'medium';

        // Padding mapping
        const paddingMap = {
            small: 'py-8 px-4',
            medium: 'py-16 px-6',
            large: 'py-24 px-8',
            xlarge: 'py-32 px-10'
        };

        // Border radius mapping
        const borderRadiusMap = {
            none: '0px',
            small: '4px',
            medium: '8px',
            large: '16px',
            xl: '24px'
        };

        // Content position mapping
        const positionMap = {
            top: 'items-start',
            center: 'items-center',
            bottom: 'items-end'
        };

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

        // Generate image HTML based on style
        const generateImage = () => {
            if (!data.image || imageStyle === 'none') {
                return '<div class="text-6xl mb-4">🎉</div>';
            }

            const radius = borderRadiusMap[borderRadius];

            switch (imageStyle) {
                case 'circular':
                    return `<img src="${data.image}" class="w-32 h-32 object-cover mb-6 rounded-full mx-auto shadow-lg">`;
                case 'full-width':
                    return `<img src="${data.image}" class="w-full h-56 object-cover mb-6" style="border-radius: ${radius};">`;
                case 'contained':
                    return `<div class="max-w-md mx-auto mb-6 p-2 bg-white/10 backdrop-blur-sm" style="border-radius: ${radius};"><img src="${data.image}" class="w-full h-48 object-cover" style="border-radius: ${radius};"></div>`;
                default:
                    return `<img src="${data.image}" class="w-full h-48 object-cover mb-6 shadow-lg" style="border-radius: ${radius};">`;
            }
        };

        // Generate content based on layout style
        const generateContent = () => {
            const content = `
                ${generateImage()}
                <h1 class="text-3xl font-bold mb-2" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                <p class="text-lg opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
            `;

            switch (layoutStyle) {
                case 'classic':
                    return `<div class="relative z-10 max-w-2xl mx-auto">${content}</div>`;

                case 'modern':
                    return `
                        <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                            <div class="order-2 md:order-1" style="text-align: ${textAlign};">
                                <h1 class="text-3xl font-bold mb-2">${data.name || 'Event Name'}</h1>
                                <p class="text-lg opacity-90">${data.tagline || 'Join us for an inspiring event'}</p>
                            </div>
                            <div class="order-1 md:order-2">${generateImage()}</div>
                        </div>
                    `;

                case 'minimal':
                    return `
                        <div class="relative z-10 max-w-xl mx-auto">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-8">${generateImage()}</div>` : ''}
                            <h1 class="text-2xl font-light mb-3 tracking-wide" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-base opacity-80 font-light" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'bold':
                    return `
                        <div class="relative z-10 max-w-3xl mx-auto">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-10">${generateImage()}</div>` : '<div class="text-8xl mb-6">🎉</div>'}
                            <h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-xl md:text-2xl font-medium" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'overlay':
                    const overlayImage = data.image ? `
                        <div class="absolute inset-0 overflow-hidden">
                            <img src="${data.image}" class="w-full h-full object-cover opacity-40">
                            <div class="absolute inset-0 bg-black/40"></div>
                        </div>
                    ` : '';
                    return `
                        ${overlayImage}
                        <div class="relative z-10 max-w-2xl mx-auto">
                            <h1 class="text-4xl font-bold mb-3 drop-shadow-lg" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-xl opacity-95 drop-shadow-md" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                case 'gradient':
                    return `
                        <div class="relative z-10 max-w-2xl mx-auto">
                            ${data.image && imageStyle !== 'none' ? `<div class="mb-8">${generateImage()}</div>` : '<div class="text-6xl mb-4">🎉</div>'}
                            <h1 class="text-4xl font-bold mb-3" style="text-align: ${textAlign};">${data.name || 'Event Name'}</h1>
                            <p class="text-lg opacity-90" style="text-align: ${textAlign};">${data.tagline || 'Join us for an inspiring event'}</p>
                        </div>
                    `;

                default:
                    return `<div class="relative z-10 max-w-2xl mx-auto">${content}</div>`;
            }
        };

        // Background style based on layout
        const getBackground = () => {
            if (layoutStyle === 'gradient') {
                return `background: linear-gradient(135deg, ${bgColor} 0%, ${secondaryBg} 100%);`;
            }
            return `background: ${bgColor};`;
        };

        return `
            <div class="relative ${paddingMap[padding]} ${positionMap[contentPosition]} flex overflow-hidden" style="${getBackground()} color: ${textColor}; min-height: 300px;">
                ${generateBanner(bannerMode)}
                ${generateContent()}
            </div>
        `;
    }
};
