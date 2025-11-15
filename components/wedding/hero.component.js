// Hero Header Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '💒 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Couple Names</label>
                <input type="text" placeholder="John & Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="names" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input type="text" placeholder="Are Getting Married" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Center</option>
                    <option value="split">Split with Image</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="minimal">Minimal</option>
                    <option value="card">Card Style</option>
                    <option value="romantic">Romantic Hearts</option>
                    <option value="magazine">Magazine Editorial</option>
                    <option value="floating">Floating Card</option>
                    <option value="gradient">Gradient Wave</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
                    <option value="small">Small (200px)</option>
                    <option value="medium">Medium (300px)</option>
                    <option value="large">Large (400px)</option>
                    <option value="full">Full Height</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#9333ea';
        const textColor = style.text || '#ffffff';
        const names = data.names || 'Couple Names';
        const tagline = data.tagline || 'Are Getting Married';
        const imageUrl = data.image;

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
        const generateBanner = (mode, position = '') => {
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

        switch(layout) {
            case 'split':
                return `
                    <div class="relative flex flex-col md:flex-row min-h-[400px] overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="flex-1 flex items-center justify-center p-8 relative z-10">
                            <div class="text-center md:text-left">
                                <h1 class="text-4xl font-bold mb-3">${names}</h1>
                                <p class="text-xl opacity-90">${tagline}</p>
                                <div class="mt-6 h-1 w-20 bg-white opacity-50"></div>
                            </div>
                        </div>
                        <div class="flex-1 flex items-center justify-center p-8 relative z-10">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-full max-w-sm h-64 object-cover rounded-lg shadow-2xl">` : '<div class="w-full max-w-sm h-64 bg-white bg-opacity-20 rounded-lg"></div>'}
                        </div>
                    </div>
                `;

            case 'overlay':
                return `
                    <div class="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                        ${generateBanner(bannerMode)}
                        ${imageUrl && bannerMode === 'none' ? `
                            <img src="${imageUrl}" class="absolute inset-0 w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black opacity-50"></div>
                        ` : bannerMode === 'none' ? `<div class="absolute inset-0" style="background: ${bgColor};"></div>` : ''}
                        <div class="relative z-10 text-center px-6" style="color: ${textColor}">
                            <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">${names}</h1>
                            <p class="text-2xl opacity-90 drop-shadow-md">${tagline}</p>
                            <div class="mt-8 inline-block px-6 py-2 border-2 border-white rounded-full text-sm font-semibold">
                                ✨ Save the Date ✨
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="relative py-20 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="max-w-2xl mx-auto text-center space-y-6 relative z-10">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-24 h-24 rounded-full mx-auto object-cover border-2 opacity-90" style="border-color: ${textColor}">` : ''}
                            <div class="space-y-2">
                                <h1 class="text-4xl font-light tracking-wide">${names}</h1>
                                <div class="flex items-center justify-center gap-3">
                                    <div class="h-px w-8 opacity-50" style="background: ${textColor}"></div>
                                    <p class="text-sm uppercase tracking-widest opacity-75">${tagline}</p>
                                    <div class="h-px w-8 opacity-50" style="background: ${textColor}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="relative py-16 px-6 overflow-hidden" style="background: ${bgColor}">
                        ${generateBanner(bannerMode)}
                        <div class="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-full h-48 object-cover">` : `<div class="w-full h-48" style="background: linear-gradient(135deg, ${bgColor} 0%, #ec4899 100%);"></div>`}
                            <div class="p-8 text-center" style="color: #1f2937">
                                <h1 class="text-3xl font-bold mb-2">${names}</h1>
                                <p class="text-lg text-gray-600">${tagline}</p>
                                <div class="mt-6 text-4xl">💒</div>
                            </div>
                        </div>
                    </div>
                `;

            case 'romantic':
                return `
                    <div class="relative min-h-[450px] flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, #ec4899 100%); color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="absolute inset-0 z-0 opacity-20">
                            <div class="text-6xl absolute top-10 left-10 animate-pulse">💕</div>
                            <div class="text-5xl absolute top-20 right-16 animate-pulse" style="animation-delay: 0.5s;">💖</div>
                            <div class="text-4xl absolute bottom-16 left-20 animate-pulse" style="animation-delay: 1s;">💝</div>
                            <div class="text-5xl absolute bottom-20 right-12 animate-pulse" style="animation-delay: 1.5s;">💗</div>
                            <div class="text-3xl absolute top-1/2 left-1/4 animate-pulse" style="animation-delay: 2s;">✨</div>
                            <div class="text-3xl absolute top-1/3 right-1/4 animate-pulse" style="animation-delay: 2.5s;">✨</div>
                        </div>
                        <div class="relative z-10 text-center px-6">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 shadow-2xl" style="border-color: ${textColor}">` : '<div class="w-40 h-40 rounded-full mx-auto mb-6 bg-white bg-opacity-30 shadow-2xl"></div>'}
                            <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">${names}</h1>
                            <div class="flex items-center justify-center gap-3 mb-4">
                                <div class="h-px w-12 bg-white opacity-60"></div>
                                <span class="text-3xl">💕</span>
                                <div class="h-px w-12 bg-white opacity-60"></div>
                            </div>
                            <p class="text-xl opacity-90 drop-shadow">${tagline}</p>
                        </div>
                    </div>
                `;

            case 'magazine':
                return `
                    <div class="relative min-h-[500px] overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 max-w-5xl mx-auto px-6 py-20">
                            <div class="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div class="text-xs uppercase tracking-[0.3em] mb-4 opacity-70">Wedding Announcement</div>
                                    <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6" style="font-family: 'Georgia', serif;">${names}</h1>
                                    <div class="w-20 h-1 mb-6" style="background: ${textColor}"></div>
                                    <p class="text-2xl font-light opacity-90">${tagline}</p>
                                </div>
                                ${imageUrl ? `
                                <div class="relative">
                                    <div class="absolute -top-4 -left-4 w-full h-full border-2 opacity-30" style="border-color: ${textColor}"></div>
                                    <img src="${imageUrl}" class="relative w-full h-96 object-cover shadow-2xl">
                                </div>
                                ` : `<div class="h-96 bg-white bg-opacity-10"></div>`}
                            </div>
                        </div>
                    </div>
                `;

            case 'floating':
                return `
                    <div class="relative min-h-[550px] flex items-center justify-center py-12 px-6 overflow-hidden" style="background: linear-gradient(to bottom, ${bgColor}, #f3f4f6);">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 w-full max-w-lg">
                            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300" style="box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
                                ${imageUrl ? `
                                <div class="relative h-64 overflow-hidden">
                                    <img src="${imageUrl}" class="w-full h-full object-cover">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                ` : `<div class="h-64" style="background: linear-gradient(135deg, ${bgColor}, #ec4899);"></div>`}
                                <div class="p-8 text-center" style="color: #1f2937;">
                                    <h1 class="text-4xl font-bold mb-3">${names}</h1>
                                    <div class="flex items-center justify-center gap-2 mb-4">
                                        <div class="w-8 h-px" style="background: ${bgColor}"></div>
                                        <span class="text-2xl">💒</span>
                                        <div class="w-8 h-px" style="background: ${bgColor}"></div>
                                    </div>
                                    <p class="text-lg text-gray-600 mb-6">${tagline}</p>
                                    <div class="inline-block px-6 py-2 rounded-full text-sm font-semibold text-white" style="background: ${bgColor}">
                                        Celebrate With Us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient':
                return `
                    <div class="relative min-h-[500px] overflow-hidden">
                        ${generateBanner(bannerMode)}
                        <div class="absolute inset-0" style="background: linear-gradient(135deg, ${bgColor} 0%, #ec4899 50%, #f59e0b 100%);"></div>
                        <div class="absolute inset-0" style="background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);"></div>
                        <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ffffff" fill-opacity="0.2" d="M0,100 C360,150 720,50 1080,100 C1260,125 1350,125 1440,100 L1440,200 L0,200 Z"></path>
                            <path fill="#ffffff" fill-opacity="0.1" d="M0,120 C360,80 720,160 1080,120 C1260,100 1350,100 1440,120 L1440,200 L0,200 Z"></path>
                        </svg>
                        <div class="relative z-10 flex items-center justify-center min-h-[500px] px-6 text-center" style="color: ${textColor}">
                            <div>
                                ${imageUrl ? `<img src="${imageUrl}" class="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="w-36 h-36 rounded-full mx-auto mb-6 bg-white bg-opacity-30 border-4 border-white shadow-2xl"></div>'}
                                <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">${names}</h1>
                                <div class="flex items-center justify-center gap-3 mb-6">
                                    <div class="w-16 h-px bg-white opacity-70"></div>
                                    <span class="text-xl opacity-90">✨</span>
                                    <div class="w-16 h-px bg-white opacity-70"></div>
                                </div>
                                <p class="text-2xl opacity-90 drop-shadow mb-8">${tagline}</p>
                                <div class="inline-block px-8 py-3 border-2 border-white rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm bg-white/10">
                                    Save The Date
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
            default:
                return `
                    <div class="relative text-center py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="w-32 h-32 rounded-full mx-auto mb-6 bg-white bg-opacity-20 shadow-lg"></div>'}
                            <h1 class="text-3xl md:text-4xl font-bold mb-2">${names}</h1>
                            <p class="text-lg md:text-xl opacity-90">${tagline}</p>
                        </div>
                    </div>
                `;
        }
    }
};
