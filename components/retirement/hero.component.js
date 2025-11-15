// Hero Header Component for Retirement Celebration

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🌴 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retiree Name</label>
                <input type="text" placeholder="John Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Position/Title</label>
                <input type="text" placeholder="Senior Manager" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent section-data" data-field="position" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retiree Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="minimal">Minimal Elegant</option>
                    <option value="bold">Bold Celebration</option>
                    <option value="gradient">Gradient Modern</option>
                    <option value="card">Card Style</option>
                    <option value="split">Split Design</option>
                    <option value="vintage">Vintage Classic</option>
                    <option value="confetti">Confetti Party</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color (for gradients)</label>
                <input type="color" value="#0891b2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgSecondary" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
                    <option value="small">Small (200px)</option>
                    <option value="medium">Medium (300px)</option>
                    <option value="large">Large (400px)</option>
                    <option value="full">Full Height</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#06b6d4';
        const bgSecondary = style.bgSecondary || '#0891b2';
        const textColor = style.text || '#ffffff';
        const accentColor = style.accent || '#fbbf24';

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

        switch(layout) {
            case 'centered':
                return `
                    <div class="relative text-center py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="text-6xl mb-4">🌴</div>'}
                            <h1 class="text-3xl font-bold mb-2">Happy Retirement!</h1>
                            <p class="text-2xl font-semibold">${data.name || "Retiree Name"}</p>
                            ${data.position ? `<p class="text-lg mt-2 opacity-90">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="relative text-center py-20 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            ${data.image ? `<img src="${data.image}" class="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="text-5xl mb-4">🌴</div>'}
                            <p class="text-sm uppercase tracking-widest mb-3 opacity-80">Celebrating</p>
                            <h1 class="text-4xl font-light mb-3">${data.name || "Retiree Name"}</h1>
                            <div class="w-16 h-0.5 mx-auto mb-3" style="background: ${textColor}; opacity: 0.5;"></div>
                            ${data.position ? `<p class="text-base opacity-75">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'bold':
                return `
                    <div class="relative py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="absolute inset-0 opacity-10 z-0">
                            <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                            <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full" style="background: ${textColor}; transform: translate(-50%, 50%);"></div>
                        </div>
                        <div class="relative text-center z-10">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="text-7xl mb-6">🌴</div>'}
                            <h1 class="text-4xl font-black mb-2 tracking-tight">HAPPY RETIREMENT</h1>
                            <p class="text-3xl font-bold">${data.name || "Retiree Name"}</p>
                            ${data.position ? `<p class="text-xl font-medium opacity-90 mt-2">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'gradient':
                return `
                    <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgSecondary} 100%); color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="relative text-center z-10">
                            ${data.image ? `<img src="${data.image}" class="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 shadow-2xl" style="border-color: ${accentColor};">` : '<div class="text-7xl mb-6">🌴</div>'}
                            <div class="inline-block px-6 py-2 rounded-full mb-4" style="background: ${accentColor}30; border: 2px solid ${accentColor};">
                                <span class="text-sm font-bold tracking-wider" style="color: ${accentColor};">RETIREMENT CELEBRATION</span>
                            </div>
                            <h1 class="text-4xl font-bold mb-3">${data.name || "Retiree Name"}</h1>
                            ${data.position ? `<p class="text-lg opacity-90">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="relative py-16 px-6" style="background: linear-gradient(to bottom, ${bgColor}20, ${bgColor}40);">
                        ${generateBanner(bannerMode)}
                        <div class="max-w-sm mx-auto relative z-10">
                            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden" style="border-top: 6px solid ${accentColor};">
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                                    ${data.image ? `<img src="${data.image}" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg">` : '<div class="text-6xl mb-4">🌴</div>'}
                                    <h1 class="text-3xl font-bold mb-2">Happy Retirement!</h1>
                                    <p class="text-xl font-semibold">${data.name || "Retiree Name"}</p>
                                </div>
                                <div class="py-6 px-6" style="color: #1f2937;">
                                    ${data.position ? `<p class="text-center text-lg font-medium" style="color: ${bgColor};">${data.position}</p>` : '<p class="text-center text-gray-500">Celebrating a remarkable career</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="relative overflow-hidden" style="background: ${bgColor}20;">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 flex flex-col">
                            <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                                ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-2xl mx-auto object-cover border-4 border-white shadow-lg">` : '<div class="text-6xl">🌴</div>'}
                            </div>
                            <div class="py-12 px-6 text-center bg-white">
                                <div class="inline-block w-16 h-1 rounded-full mb-4" style="background: ${accentColor};"></div>
                                <h1 class="text-3xl font-bold mb-2" style="color: ${bgColor};">Happy Retirement!</h1>
                                <p class="text-2xl font-semibold mb-2" style="color: #1f2937;">${data.name || "Retiree Name"}</p>
                                ${data.position ? `<p class="text-base text-gray-600">${data.position}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'vintage':
                return `
                    <div class="relative py-20 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor};">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10 text-center">
                            <div class="inline-block mb-6">
                                <div class="border-4 p-1 rounded-full" style="border-color: ${accentColor};">
                                    ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full object-cover">` : '<div class="w-32 h-32 rounded-full flex items-center justify-center text-6xl" style="background: ${textColor}20;">🌴</div>'}
                                </div>
                            </div>
                            <div class="border-t-2 border-b-2 py-6 mb-6 max-w-sm mx-auto" style="border-color: ${accentColor};">
                                <p class="text-xs uppercase tracking-widest mb-2 font-serif" style="color: ${accentColor};">Celebrating</p>
                                <h1 class="text-3xl font-serif mb-1">${data.name || "Retiree Name"}</h1>
                                ${data.position ? `<p class="text-sm font-serif italic opacity-90">${data.position}</p>` : ''}
                            </div>
                            <p class="text-lg font-serif tracking-wide">🎉 Retirement Celebration 🎉</p>
                        </div>
                    </div>
                `;

            case 'confetti':
                return `
                    <div class="relative py-20 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor};">
                        ${generateBanner(bannerMode)}
                        <div class="absolute inset-0 opacity-20 z-0">
                            <div class="absolute top-10 left-10 text-4xl" style="color: ${accentColor};">🎉</div>
                            <div class="absolute top-20 right-16 text-3xl" style="color: ${accentColor};">🎊</div>
                            <div class="absolute bottom-20 left-20 text-3xl" style="color: ${accentColor};">✨</div>
                            <div class="absolute bottom-10 right-10 text-4xl" style="color: ${accentColor};">🎈</div>
                            <div class="absolute top-1/3 left-1/4 text-2xl" style="color: ${accentColor};">🌟</div>
                            <div class="absolute top-1/2 right-1/4 text-2xl" style="color: ${accentColor};">🎁</div>
                        </div>
                        <div class="relative text-center z-10">
                            ${data.image ? `<img src="${data.image}" class="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-xl">` : '<div class="text-7xl mb-6">🌴</div>'}
                            <div class="mb-4">
                                <span class="inline-block px-6 py-2 rounded-full text-lg font-bold" style="background: ${accentColor}; color: ${bgColor};">
                                    🎉 IT'S TIME TO CELEBRATE! 🎉
                                </span>
                            </div>
                            <h1 class="text-4xl font-bold mb-2">${data.name || "Retiree Name"}</h1>
                            <p class="text-xl font-semibold mb-2">is retiring!</p>
                            ${data.position ? `<p class="text-lg opacity-90">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="relative text-center py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        ${generateBanner(bannerMode)}
                        <div class="relative z-10">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white">` : '<div class="text-6xl mb-4">🌴</div>'}
                            <h1 class="text-3xl font-bold mb-2">Happy Retirement!</h1>
                            <p class="text-2xl font-semibold">${data.name || "Retiree Name"}</p>
                            ${data.position ? `<p class="text-lg mt-2 opacity-90">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
