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
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Centered</option>
                    <option value="modern">Modern Card</option>
                    <option value="minimal">Minimal</option>
                    <option value="split">Split View</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="banner">Banner Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="photoShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="square">Square</option>
                    <option value="heart">Heart Shaped</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="photoSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#0d9488" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Border</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="photoBorder" onchange="updatePreview()">
                    <option value="none">No Border</option>
                    <option value="thin">Thin Border</option>
                    <option value="thick">Thick Border</option>
                    <option value="double">Double Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Border Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="photoBorderColor" oninput="updatePreview()">
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
        const accentColor = style.accent || '#0d9488';
        const layout = style.layout || 'classic';
        const photoShape = style.photoShape || 'circle';
        const photoSize = style.photoSize || 'medium';
        const textAlign = style.textAlign || 'center';
        const photoBorder = style.photoBorder || 'none';
        const photoBorderColor = style.photoBorderColor || '#ffffff';

        // Photo size mapping
        const photoSizes = {
            small: { width: 'w-24', height: 'h-24' },
            medium: { width: 'w-32', height: 'h-32' },
            large: { width: 'w-40', height: 'h-40' },
            xlarge: { width: 'w-48', height: 'h-48' }
        };

        // Photo shape classes
        const shapeClasses = {
            circle: 'rounded-full',
            rounded: 'rounded-2xl',
            square: 'rounded-none',
            heart: 'rounded-full'
        };

        // Photo border classes
        const borderClasses = {
            none: '',
            thin: 'border-2',
            thick: 'border-4',
            double: 'border-4 shadow-[0_0_0_8px_rgba(255,255,255,0.3)]'
        };

        const photoClass = `${photoSizes[photoSize].width} ${photoSizes[photoSize].height} ${shapeClasses[photoShape]} ${borderClasses[photoBorder]} object-cover`;
        const borderStyle = photoBorder !== 'none' ? `border-color: ${photoBorderColor};` : '';

        // Banner image properties
        const bannerImage = data.bannerImage || '';
        const bannerMode = style.bannerMode || 'none';
        const bannerOpacity = style.bannerOpacity || 30;
        const bannerOverlay = style.bannerOverlay || '#000000';
        const bannerOverlayOpacity = style.bannerOverlayOpacity || 50;
        const bannerBlur = style.bannerBlur || 0;
        const bannerHeight = style.bannerHeight || 'medium';

        const bannerHeights = {
            small: '200px',
            medium: '300px',
            large: '400px',
            full: '100%'
        };

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

        // Layout-specific rendering
        if (layout === 'classic') {
            return `
                <div class="relative text-${textAlign} py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10">
                        ${data.image ? `<img src="${data.image}" class="${photoClass} mx-auto mb-6" style="${borderStyle}">` : '<div class="text-6xl mb-4">👶</div>'}
                        <h1 class="text-3xl font-bold mb-2">${data.title || 'Welcome to the World'}</h1>
                        <p class="text-2xl">${data.name || "Baby's Name"}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden" style="color: ${textColor === '#ffffff' ? '#1f2937' : textColor};">
                        ${data.image ? `<img src="${data.image}" class="w-full h-64 object-cover">` : '<div class="bg-gray-100 h-64 flex items-center justify-center text-6xl">👶</div>'}
                        <div class="p-8 text-center" style="background: ${accentColor}; color: ${textColor};">
                            <h1 class="text-2xl font-bold mb-2">${data.title || 'Welcome to the World'}</h1>
                            <p class="text-xl">${data.name || "Baby's Name"}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-20 px-6 text-${textAlign}" style="background: ${bgColor}; color: ${textColor};">
                    <div class="max-w-md mx-auto">
                        <h1 class="text-4xl font-light mb-4" style="letter-spacing: 2px;">${data.title || 'WELCOME'}</h1>
                        <div class="border-t-2 border-b-2 py-6 my-6" style="border-color: ${accentColor};">
                            <p class="text-3xl font-serif italic">${data.name || "Baby's Name"}</p>
                        </div>
                        ${data.image ? `<img src="${data.image}" class="${photoClass} ${textAlign === 'center' ? 'mx-auto' : ''} mt-8" style="${borderStyle}">` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="relative overflow-hidden" style="background: ${bgColor};">
                    <div class="flex flex-col md:flex-row">
                        <div class="flex-1 flex items-center justify-center p-8" style="background: ${accentColor};">
                            ${data.image ? `<img src="${data.image}" class="${photoClass}" style="${borderStyle}">` : '<div class="text-8xl">👶</div>'}
                        </div>
                        <div class="flex-1 flex items-center justify-center p-8 text-center" style="color: ${textColor};">
                            <div>
                                <h1 class="text-3xl font-bold mb-4">${data.title || 'Welcome to the World'}</h1>
                                <p class="text-2xl font-light">${data.name || "Baby's Name"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'overlay') {
            return `
                <div class="relative h-96 overflow-hidden" style="background: ${bgColor};">
                    ${data.image ? `
                        <img src="${data.image}" class="absolute inset-0 w-full h-full object-cover">
                        <div class="absolute inset-0" style="background: linear-gradient(to bottom, transparent, ${bgColor});"></div>
                    ` : ''}
                    <div class="absolute inset-0 flex items-end justify-center pb-12 px-6">
                        <div class="text-center" style="color: ${textColor};">
                            <h1 class="text-4xl font-bold mb-2 drop-shadow-lg">${data.title || 'Welcome to the World'}</h1>
                            <p class="text-3xl drop-shadow-lg">${data.name || "Baby's Name"}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="relative text-center py-8 px-6" style="background: ${bgColor}; color: ${textColor};">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex items-center justify-center gap-6 flex-wrap">
                            ${data.image ? `<img src="${data.image}" class="${photoClass}" style="${borderStyle}">` : '<div class="text-6xl">👶</div>'}
                            <div class="text-left">
                                <p class="text-sm uppercase tracking-widest mb-2" style="color: ${accentColor};">${data.title || 'Welcome to the World'}</p>
                                <h1 class="text-4xl font-bold">${data.name || "Baby's Name"}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="relative text-center py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                ${generateBanner(bannerMode)}
                <div class="relative z-10">
                    ${data.image ? `<img src="${data.image}" class="${photoClass} mx-auto mb-6" style="${borderStyle}">` : '<div class="text-6xl mb-4">👶</div>'}
                    <h1 class="text-3xl font-bold mb-2">${data.title || 'Welcome to the World'}</h1>
                    <p class="text-2xl">${data.name || "Baby's Name"}</p>
                </div>
            </div>
        `;
    }
};
