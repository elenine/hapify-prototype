// Hero Header Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎓 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduate Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                <input type="text" placeholder="Graduation Ceremony" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduate Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Center</option>
                    <option value="modern">Modern Split</option>
                    <option value="minimal">Minimal Card</option>
                    <option value="bold">Bold Gradient</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="split-vertical">Vertical Split</option>
                    <option value="card-floating">Floating Card</option>
                    <option value="gradient-diagonal">Diagonal Gradient</option>
                    <option value="circle-frame">Circle Frame</option>
                    <option value="banner-style">Banner Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="titleSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
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
        const bg = style.bg || '#6366f1';
        const text = style.text || '#ffffff';
        const accent = style.accent || '#fbbf24';
        const align = style.align || 'center';
        const spacing = style.spacing || 'normal';
        const titleSize = style.titleSize || 'medium';

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

        const spacingMap = {
            compact: 'py-8',
            normal: 'py-16',
            relaxed: 'py-24'
        };

        const titleSizeMap = {
            small: 'text-2xl',
            medium: 'text-3xl',
            large: 'text-4xl',
            xlarge: 'text-5xl'
        };

        const paddingClass = spacingMap[spacing];
        const titleClass = titleSizeMap[titleSize];

        switch(layout) {
            case 'modern':
                return `
                    <div class="relative ${paddingClass} px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${accent} 100%); color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div class="flex-shrink-0">
                                ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-2xl object-cover border-4 shadow-2xl" style="border-color: ${text}33">` : '<div class="text-8xl">🎓</div>'}
                            </div>
                            <div class="text-${align} flex-1">
                                <h1 class="${titleClass} font-bold mb-3">${data.title || 'Graduation Ceremony'}</h1>
                                <p class="text-2xl font-light opacity-90">${data.name || "Graduate Name"}</p>
                                <div class="mt-4 h-1 w-20 rounded" style="background: ${accent}; ${align === 'center' ? 'margin: 0 auto' : align === 'right' ? 'margin-left: auto' : ''}"></div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="relative ${paddingClass} px-6 overflow-hidden" style="background: ${bg}; color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-${align} relative z-10">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4" style="border-color: ${accent}">` : '<div class="text-6xl mb-4">🎓</div>'}
                            <h1 class="${titleClass} font-bold mb-2">${data.title || 'Graduation Ceremony'}</h1>
                            <div class="h-0.5 w-16 my-4 rounded" style="background: ${accent}; ${align === 'center' ? 'margin-left: auto; margin-right: auto' : align === 'right' ? 'margin-left: auto; margin-right: 0' : 'margin-left: 0'}"></div>
                            <p class="text-xl opacity-90">${data.name || "Graduate Name"}</p>
                        </div>
                    </div>
                `;

            case 'bold':
                return `
                    <div class="${paddingClass} px-6 relative overflow-hidden" style="background: ${bg}; color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="absolute inset-0 opacity-10">
                            <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: ${accent}"></div>
                            <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full" style="background: ${accent}"></div>
                        </div>
                        <div class="relative max-w-3xl mx-auto text-${align} z-10">
                            ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} mb-6 object-cover border-8 shadow-2xl" style="border-color: ${accent}">` : '<div class="text-8xl mb-6">🎓</div>'}
                            <h1 class="${titleClass} font-black mb-4 tracking-tight" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.2)">${data.title || 'Graduation Ceremony'}</h1>
                            <div class="inline-block px-6 py-3 rounded-full text-xl font-semibold" style="background: ${accent}; color: ${bg}">
                                ${data.name || "Graduate Name"}
                            </div>
                        </div>
                    </div>
                `;

            case 'overlay':
                return `
                    <div class="relative ${paddingClass} px-6 overflow-hidden min-h-[400px] flex items-center justify-center" style="background: ${bg}; color: ${text}">
                        ${data.image ? `
                            <div class="absolute inset-0">
                                <img src="${data.image}" class="w-full h-full object-cover opacity-40">
                                <div class="absolute inset-0" style="background: linear-gradient(to bottom, ${bg}00, ${bg}99)"></div>
                            </div>
                        ` : ''}
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 text-${align} max-w-xl">
                            <div class="inline-block px-4 py-2 rounded-full mb-4" style="background: ${accent}33; backdrop-filter: blur(10px)">
                                <span class="text-sm font-semibold" style="color: ${accent}">🎓 Graduation</span>
                            </div>
                            <h1 class="${titleClass} font-bold mb-4" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.3)">${data.title || 'Graduation Ceremony'}</h1>
                            <p class="text-2xl font-light mb-4" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.2)">${data.name || "Graduate Name"}</p>
                            <div class="h-1 w-24 rounded" style="background: ${accent}; ${align === 'center' ? 'margin: 0 auto' : align === 'right' ? 'margin-left: auto' : ''}"></div>
                        </div>
                    </div>
                `;

            case 'split-vertical':
                return `
                    <div class="relative overflow-hidden" style="background: ${bg}; color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            <div class="py-8 px-6 text-center" style="background: ${accent}">
                                ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-2xl mx-auto object-cover border-4 border-white shadow-2xl">` : '<div class="text-8xl">🎓</div>'}
                            </div>
                            <div class="py-12 px-6 text-${align}">
                                <h1 class="${titleClass} font-bold mb-3">${data.title || 'Graduation Ceremony'}</h1>
                                <div class="h-1 w-20 rounded mb-4" style="background: ${accent}; ${align === 'center' ? 'margin-left: auto; margin-right: auto' : align === 'right' ? 'margin-left: auto; margin-right: 0' : 'margin-left: 0'}"></div>
                                <p class="text-2xl">${data.name || "Graduate Name"}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'card-floating':
                return `
                    <div class="relative ${paddingClass} px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${accent} 100%); color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 max-w-lg mx-auto">
                            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300" style="color: #1f2937">
                                ${data.image ? `
                                    <div class="h-48 overflow-hidden">
                                        <img src="${data.image}" class="w-full h-full object-cover">
                                    </div>
                                ` : `
                                    <div class="h-48 flex items-center justify-center" style="background: ${accent}15">
                                        <div class="text-8xl">🎓</div>
                                    </div>
                                `}
                                <div class="p-8 text-${align}">
                                    <h1 class="${titleClass} font-bold mb-3" style="color: ${bg}">${data.title || 'Graduation Ceremony'}</h1>
                                    <div class="h-1 w-16 rounded mb-4" style="background: ${accent}; ${align === 'center' ? 'margin-left: auto; margin-right: auto' : align === 'right' ? 'margin-left: auto; margin-right: 0' : 'margin-left: 0'}"></div>
                                    <p class="text-xl font-medium" style="color: ${accent}">${data.name || "Graduate Name"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient-diagonal':
                return `
                    <div class="relative ${paddingClass} px-6 overflow-hidden" style="background: linear-gradient(120deg, ${bg} 0%, ${accent} 100%); color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="absolute top-0 right-0 w-64 h-64 opacity-20 rounded-full" style="background: ${text}; transform: translate(50%, -50%)"></div>
                        <div class="absolute bottom-0 left-0 w-80 h-80 opacity-20 rounded-full" style="background: ${text}; transform: translate(-50%, 50%)"></div>
                        <div class="relative z-10 max-w-2xl mx-auto text-${align}">
                            <div class="flex flex-col items-${align === 'center' ? 'center' : align === 'right' ? 'end' : 'start'} gap-6 md:flex-row md:items-center ${align === 'center' ? 'md:justify-center' : ''}">
                                ${data.image ? `
                                    <img src="${data.image}" class="w-36 h-36 rounded-3xl object-cover border-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform" style="border-color: ${text}33">
                                ` : '<div class="text-8xl transform rotate-3">🎓</div>'}
                                <div>
                                    <h1 class="${titleClass} font-black mb-3 tracking-tight">${data.title || 'Graduation Ceremony'}</h1>
                                    <p class="text-2xl font-light opacity-95 mb-4">${data.name || "Graduate Name"}</p>
                                    <div class="inline-block px-6 py-2 rounded-full font-semibold backdrop-blur-sm" style="background: ${text}33">
                                        🌟 Class of 2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'circle-frame':
                return `
                    <div class="relative ${paddingClass} px-6 overflow-hidden" style="background: ${bg}; color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 max-w-md mx-auto text-center">
                            <div class="relative inline-block">
                                <div class="absolute inset-0 rounded-full animate-pulse" style="background: ${accent}; opacity: 0.2; transform: scale(1.1)"></div>
                                <div class="relative p-4 rounded-full" style="background: ${accent}33">
                                    ${data.image ? `
                                        <img src="${data.image}" class="w-48 h-48 rounded-full object-cover border-8 shadow-2xl" style="border-color: ${accent}">
                                    ` : `
                                        <div class="w-48 h-48 rounded-full flex items-center justify-center text-8xl" style="background: ${accent}15">
                                            🎓
                                        </div>
                                    `}
                                </div>
                            </div>
                            <div class="mt-8">
                                <div class="inline-block px-4 py-2 rounded-full mb-4 text-sm font-bold" style="background: ${accent}; color: ${bg}">
                                    CONGRATULATIONS
                                </div>
                                <h1 class="${titleClass} font-bold mb-2">${data.title || 'Graduation Ceremony'}</h1>
                                <p class="text-2xl font-light opacity-90">${data.name || "Graduate Name"}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'banner-style':
                return `
                    <div class="relative overflow-hidden" style="color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            <div class="py-6 px-6 text-center" style="background: ${accent}">
                                <h1 class="${titleClass} font-black tracking-tight">${data.title || 'Graduation Ceremony'}</h1>
                            </div>
                            <div class="py-12 px-6 text-center" style="background: ${bg}">
                                ${data.image ? `
                                    <img src="${data.image}" class="w-40 h-40 rounded-2xl mx-auto mb-6 object-cover shadow-2xl border-4" style="border-color: ${accent}">
                                ` : '<div class="text-8xl mb-6">🎓</div>'}
                                <p class="text-3xl font-bold mb-4">${data.name || "Graduate Name"}</p>
                                <div class="flex items-center justify-center gap-4 flex-wrap">
                                    <div class="px-6 py-3 rounded-lg font-semibold" style="background: ${accent}15; color: ${accent}">
                                        🌟 Graduating Class
                                    </div>
                                    <div class="px-6 py-3 rounded-lg font-semibold" style="background: ${accent}; color: ${bg}">
                                        2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
            default:
                return `
                    <div class="relative text-${align} ${paddingClass} px-6 overflow-hidden" style="background: ${bg}; color: ${text}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} mb-6 object-cover border-4" style="border-color: ${accent}">` : '<div class="text-6xl mb-4">🎓</div>'}
                            <h1 class="${titleClass} font-bold mb-2">${data.title || 'Graduation Ceremony'}</h1>
                            <p class="text-xl opacity-90">${data.name || "Graduate Name"}</p>
                        </div>
                    </div>
                `;
        }
    }`
};
