// Hero Banner Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '🎤 Hero Banner',
                allowMultiple: false,  // Only one hero section allowed
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                            <input type="text" placeholder="Tech Summit 2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Tagline/Theme</label>
                            <input type="text" placeholder="Innovating the Future Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                            <input type="text" placeholder="March 15-17, 2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="date" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
                            <input type="text" placeholder="San Francisco, CA" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent section-data" data-field="location" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered Classic</option>
                                <option value="modern">Modern Card</option>
                                <option value="split">Split View</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="bold">Bold Impact</option>
                                <option value="gradient">Gradient Overlay</option>
                                <option value="countdown">Event Countdown</option>
                                <option value="floating">Floating Badge</option>
                                <option value="asymmetric">Asymmetric Modern</option>
                                <option value="layered">Layered Card</option>
                                <option value="spotlight">Spotlight Focus</option>
                                <option value="ribbon">Ribbon Banner</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary/Accent Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="imageRadius" onchange="updatePreview()">
                                <option value="rounded-lg">Rounded</option>
                                <option value="rounded-full">Circle</option>
                                <option value="rounded-none">Square</option>
                                <option value="rounded-3xl">Extra Rounded</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Intensity</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-sm">Subtle</option>
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                                <option value="shadow-2xl">Dramatic</option>
                            </select>
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
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#14b8a6';
                    const accentColor = style.accent || '#10b981';
                    const textColor = style.text || '#ffffff';
                    const imageRadius = style.imageRadius || 'rounded-lg';
                    const shadow = style.shadow || 'shadow-lg';
                    const imageSrc = data.image || '';
                    const name = data.name || 'Conference Name';
                    const tagline = data.tagline || 'Innovating the Future Together';
                    const date = data.date || 'March 15-17, 2025';
                    const location = data.location || 'San Francisco, CA';

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
                        case 'centered':
                            return `
                                <div class="relative text-center py-20 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="relative z-10">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white ${shadow}">` : '<div class="text-7xl mb-6">🎤</div>'}
                                        <h1 class="text-4xl font-bold mb-3 leading-tight">${name}</h1>
                                        <p class="text-xl opacity-90 mb-4">${tagline}</p>
                                        <div class="flex flex-col gap-2 items-center text-sm opacity-80">
                                            <div class="flex items-center gap-2">
                                                <span>📅</span>
                                                <span>${date}</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <span>📍</span>
                                                <span>${location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="relative py-12 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor}15, ${accentColor}15);">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="bg-white rounded-3xl ${shadow} overflow-hidden border-t-4" style="border-top-color: ${bgColor}">
                                            <div class="p-8 text-center">
                                                ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-5 object-cover ${shadow}">` : `<div class="inline-flex items-center justify-center w-28 h-28 rounded-2xl mb-5 ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})"><span class="text-6xl">🎤</span></div>`}
                                                <h1 class="text-3xl font-bold text-gray-900 mb-3">${name}</h1>
                                                <p class="text-lg text-gray-600 mb-5">${tagline}</p>
                                                <div class="space-y-2">
                                                    <div class="inline-block px-4 py-2 rounded-xl text-sm font-semibold" style="background: ${bgColor}20; color: ${bgColor}">
                                                        📅 ${date}
                                                    </div>
                                                    <div class="inline-block px-4 py-2 rounded-xl text-sm font-semibold ml-2" style="background: ${accentColor}20; color: ${accentColor}">
                                                        📍 ${location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="relative py-12 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto flex flex-col gap-6 relative z-10">
                                        <div class="flex-shrink-0 text-center">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-40 h-40 ${imageRadius} mx-auto object-cover border-4 border-white ${shadow}">` : `<div class="inline-flex items-center justify-center w-40 h-40 ${imageRadius} bg-white bg-opacity-20 ${shadow}"><span class="text-8xl">🎤</span></div>`}
                                        </div>
                                        <div class="text-center">
                                            <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                            <p class="text-xl opacity-90 mb-5">${tagline}</p>
                                            <div class="inline-flex flex-col gap-2 text-base">
                                                <div class="px-4 py-2 bg-white bg-opacity-20 rounded-lg">
                                                    📅 ${date}
                                                </div>
                                                <div class="px-4 py-2 bg-white bg-opacity-20 rounded-lg">
                                                    📍 ${location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="relative text-center py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="text-5xl mb-5">🎤</div>
                                        <h1 class="text-5xl font-light mb-4 tracking-wide">${name}</h1>
                                        <div class="w-20 h-0.5 mx-auto mb-5" style="background: ${textColor}; opacity: 0.4;"></div>
                                        <p class="text-lg opacity-75 mb-6">${tagline}</p>
                                        <div class="flex justify-center gap-6 text-sm opacity-70">
                                            <span>${date}</span>
                                            <span>•</span>
                                            <span>${location}</span>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'bold':
                            return `
                                <div class="relative py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="absolute inset-0 opacity-10 z-0">
                                        <div class="absolute top-0 right-0 w-72 h-72 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                                        <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full" style="background: ${accentColor}; transform: translate(-50%, 50%);"></div>
                                    </div>
                                    <div class="relative text-center max-w-md mx-auto z-10">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="text-8xl mb-6">🎤</div>'}
                                        <h1 class="text-5xl font-black mb-4 tracking-tight leading-tight">${name}</h1>
                                        <p class="text-2xl font-semibold opacity-90 mb-6">${tagline}</p>
                                        <div class="flex flex-col gap-3">
                                            <div class="inline-block px-6 py-3 bg-white bg-opacity-25 backdrop-blur-sm rounded-xl font-bold">
                                                📅 ${date}
                                            </div>
                                            <div class="inline-block px-6 py-3 bg-white bg-opacity-25 backdrop-blur-sm rounded-xl font-bold">
                                                📍 ${location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor} 100%); color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    ${imageSrc ? `
                                        <div class="absolute inset-0 opacity-20 z-0">
                                            <img src="${imageSrc}" class="w-full h-full object-cover">
                                        </div>
                                        <div class="absolute inset-0 z-0" style="background: linear-gradient(135deg, ${bgColor}cc 0%, ${accentColor}cc 100%);"></div>
                                    ` : `
                                        <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-8 -mr-8 z-0">🎤</div>
                                        <div class="absolute bottom-0 left-0 text-9xl opacity-10 -mb-8 -ml-8 z-0">🎤</div>
                                    `}
                                    <div class="relative text-center max-w-md mx-auto z-10">
                                        <div class="inline-block px-4 py-1.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-xs font-bold mb-5 uppercase tracking-wide">
                                            Upcoming Event
                                        </div>
                                        <h1 class="text-4xl font-bold mb-4 leading-tight">${name}</h1>
                                        <p class="text-xl opacity-95 mb-6">${tagline}</p>
                                        <div class="flex justify-center gap-4 text-sm font-semibold">
                                            <div class="px-5 py-2.5 bg-white bg-opacity-25 backdrop-blur-sm rounded-lg">
                                                📅 ${date}
                                            </div>
                                            <div class="px-5 py-2.5 bg-white bg-opacity-25 backdrop-blur-sm rounded-lg">
                                                📍 ${location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'countdown':
                            return `
                                <div class="relative py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto text-center relative z-10">
                                        <div class="mb-6">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-24 h-24 ${imageRadius} mx-auto mb-4 object-cover border-3 border-white ${shadow}">` : '<div class="text-7xl mb-4">🎤</div>'}
                                            <h1 class="text-4xl font-bold mb-2">${name}</h1>
                                            <p class="text-lg opacity-90">${tagline}</p>
                                        </div>
                                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-5 ${shadow}">
                                            <div class="text-xs uppercase tracking-wider mb-3 opacity-75">Event Starts In</div>
                                            <div class="flex justify-center gap-4">
                                                <div class="text-center">
                                                    <div class="text-3xl font-bold">15</div>
                                                    <div class="text-xs opacity-75">Days</div>
                                                </div>
                                                <div class="text-3xl opacity-50">:</div>
                                                <div class="text-center">
                                                    <div class="text-3xl font-bold">07</div>
                                                    <div class="text-xs opacity-75">Hours</div>
                                                </div>
                                                <div class="text-3xl opacity-50">:</div>
                                                <div class="text-center">
                                                    <div class="text-3xl font-bold">23</div>
                                                    <div class="text-xs opacity-75">Mins</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="space-y-2 text-sm">
                                            <div>📅 ${date}</div>
                                            <div>📍 ${location}</div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="relative py-12 px-6 overflow-hidden" style="background: linear-gradient(to bottom, ${bgColor}10, transparent);">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="bg-white rounded-3xl ${shadow} p-8">
                                            <div class="flex flex-col items-center text-center">
                                                ${imageSrc ? `
                                                    <div class="relative mb-6">
                                                        <img src="${imageSrc}" class="w-28 h-28 ${imageRadius} object-cover ${shadow}">
                                                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ✨
                                                        </div>
                                                    </div>
                                                ` : `
                                                    <div class="relative mb-6">
                                                        <div class="w-28 h-28 rounded-2xl flex items-center justify-center ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})">
                                                            <span class="text-6xl">🎤</span>
                                                        </div>
                                                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ✨
                                                        </div>
                                                    </div>
                                                `}
                                                <div class="mb-6">
                                                    <h1 class="text-3xl font-bold text-gray-900 mb-2">${name}</h1>
                                                    <p class="text-lg text-gray-600">${tagline}</p>
                                                </div>
                                                <div class="w-full space-y-3">
                                                    <div class="flex items-center gap-3 p-3 rounded-xl border-2" style="border-color: ${bgColor}30; background: ${bgColor}10">
                                                        <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl" style="background: ${bgColor}; color: white;">
                                                            📅
                                                        </div>
                                                        <div class="flex-1 text-left text-sm font-semibold text-gray-700">
                                                            ${date}
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center gap-3 p-3 rounded-xl border-2" style="border-color: ${accentColor}30; background: ${accentColor}10">
                                                        <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl" style="background: ${accentColor}; color: white;">
                                                            📍
                                                        </div>
                                                        <div class="flex-1 text-left text-sm font-semibold text-gray-700">
                                                            ${location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'asymmetric':
                            return `
                                <div class="relative py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="absolute top-0 right-0 w-48 h-48" style="background: ${accentColor}; opacity: 0.15; border-radius: 0 0 0 100%;"></div>
                                    <div class="absolute bottom-0 left-0 w-32 h-32" style="background: ${textColor}; opacity: 0.1; border-radius: 0 100% 0 0;"></div>
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="flex flex-col items-start">
                                            ${imageSrc ? `
                                                <img src="${imageSrc}" class="w-24 h-24 ${imageRadius} object-cover mb-5 ${shadow}" style="border: 4px solid ${textColor}40;">
                                            ` : `
                                                <div class="w-24 h-24 rounded-2xl flex items-center justify-center mb-5 ${shadow}" style="background: ${textColor}20;">
                                                    <span class="text-5xl">🎤</span>
                                                </div>
                                            `}
                                            <div class="inline-block px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-xs font-bold uppercase tracking-wide mb-3">
                                                Upcoming Event
                                            </div>
                                            <h1 class="text-4xl font-black mb-3 leading-tight" style="text-shadow: 0 2px 10px ${bgColor}80;">${name}</h1>
                                            <p class="text-xl opacity-90 mb-6 max-w-xs">${tagline}</p>
                                            <div class="grid grid-cols-2 gap-3 w-full">
                                                <div class="p-4 rounded-xl bg-white bg-opacity-15 backdrop-blur-sm">
                                                    <div class="text-xs opacity-75 mb-1">Date</div>
                                                    <div class="text-sm font-bold">📅 ${date.split(',')[0] || date}</div>
                                                </div>
                                                <div class="p-4 rounded-xl bg-white bg-opacity-15 backdrop-blur-sm">
                                                    <div class="text-xs opacity-75 mb-1">Location</div>
                                                    <div class="text-sm font-bold truncate">📍 ${location.split(',')[0] || location}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'layered':
                            return `
                                <div class="relative py-12 px-6" style="background: linear-gradient(to bottom, ${bgColor}15, transparent);">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="relative">
                                            <div class="absolute top-4 left-4 right-4 h-full rounded-3xl ${shadow}" style="background: ${bgColor}40;"></div>
                                            <div class="absolute top-2 left-2 right-2 h-full rounded-3xl ${shadow}" style="background: ${bgColor}60;"></div>
                                            <div class="relative bg-white rounded-3xl shadow-2xl p-8">
                                                <div class="text-center">
                                                    ${imageSrc ? `
                                                        <div class="relative inline-block mb-5">
                                                            <img src="${imageSrc}" class="w-32 h-32 ${imageRadius} object-cover ${shadow}">
                                                            <div class="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-bold ${shadow}" style="background: ${bgColor}; color: white;">
                                                                New
                                                            </div>
                                                        </div>
                                                    ` : `
                                                        <div class="relative inline-block mb-5">
                                                            <div class="w-32 h-32 rounded-2xl flex items-center justify-center ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})">
                                                                <span class="text-6xl">🎤</span>
                                                            </div>
                                                            <div class="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-bold ${shadow}" style="background: ${accentColor}; color: white;">
                                                                New
                                                            </div>
                                                        </div>
                                                    `}
                                                    <h1 class="text-3xl font-bold text-gray-900 mb-2">${name}</h1>
                                                    <p class="text-lg text-gray-600 mb-6">${tagline}</p>
                                                    <div class="space-y-2">
                                                        <div class="p-3 rounded-xl" style="background: ${bgColor}10;">
                                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${bgColor}">When</div>
                                                            <div class="text-sm font-semibold text-gray-900">${date}</div>
                                                        </div>
                                                        <div class="p-3 rounded-xl" style="background: ${accentColor}10;">
                                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accentColor}">Where</div>
                                                            <div class="text-sm font-semibold text-gray-900">${location}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'spotlight':
                            return `
                                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd); color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="absolute inset-0 overflow-hidden z-0">
                                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full" style="background: radial-gradient(circle, ${textColor}20 0%, transparent 70%);"></div>
                                    </div>
                                    <div class="max-w-md mx-auto text-center relative z-10">
                                        <div class="relative inline-block mb-6">
                                            ${imageSrc ? `
                                                <div class="relative">
                                                    <div class="absolute inset-0 rounded-full animate-ping" style="background: ${textColor}30;"></div>
                                                    <img src="${imageSrc}" class="relative w-36 h-36 ${imageRadius} object-cover border-4 ${shadow}" style="border-color: ${textColor};">
                                                </div>
                                            ` : `
                                                <div class="relative">
                                                    <div class="absolute inset-0 rounded-full animate-ping" style="background: ${textColor}30;"></div>
                                                    <div class="relative w-36 h-36 rounded-full flex items-center justify-center border-4 ${shadow}" style="background: ${textColor}20; border-color: ${textColor};">
                                                        <span class="text-7xl">🎤</span>
                                                    </div>
                                                </div>
                                            `}
                                        </div>
                                        <div class="inline-block px-4 py-1.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                                            Featured Event
                                        </div>
                                        <h1 class="text-5xl font-black mb-4 leading-tight">${name}</h1>
                                        <p class="text-xl opacity-95 mb-8 max-w-sm mx-auto">${tagline}</p>
                                        <div class="flex justify-center gap-4 text-sm font-semibold flex-wrap">
                                            <div class="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                                                <div class="text-xs opacity-80 mb-1">📅</div>
                                                <div>${date}</div>
                                            </div>
                                            <div class="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                                                <div class="text-xs opacity-80 mb-1">📍</div>
                                                <div>${location}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'ribbon':
                            return `
                                <div class="relative py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="relative">
                                            <div class="absolute -top-3 -left-6 px-6 py-2 text-xs font-bold text-white ${shadow}" style="background: ${accentColor}; transform: rotate(-3deg);">
                                                CONFERENCE 2025
                                            </div>
                                            <div class="mt-6 text-center">
                                                ${imageSrc ? `
                                                    <div class="inline-block relative mb-5">
                                                        <img src="${imageSrc}" class="w-28 h-28 ${imageRadius} object-cover ${shadow}" style="border: 3px solid ${textColor};">
                                                        <div class="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${shadow}" style="background: ${accentColor}; color: white; transform: rotate(15deg);">
                                                            <span class="text-2xl">⭐</span>
                                                        </div>
                                                    </div>
                                                ` : `
                                                    <div class="inline-block relative mb-5">
                                                        <div class="w-28 h-28 rounded-2xl flex items-center justify-center ${shadow}" style="background: ${textColor}20; border: 3px solid ${textColor};">
                                                            <span class="text-6xl">🎤</span>
                                                        </div>
                                                        <div class="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${shadow}" style="background: ${accentColor}; color: white; transform: rotate(15deg);">
                                                            <span class="text-2xl">⭐</span>
                                                        </div>
                                                    </div>
                                                `}
                                                <h1 class="text-4xl font-bold mb-3 leading-tight">${name}</h1>
                                                <div class="w-24 h-1 mx-auto mb-4 rounded-full" style="background: ${accentColor};"></div>
                                                <p class="text-xl opacity-90 mb-6">${tagline}</p>
                                                <div class="flex flex-col gap-2 items-center">
                                                    <div class="inline-flex items-center gap-2 px-5 py-2 bg-white bg-opacity-20 rounded-full">
                                                        <span class="text-lg">📅</span>
                                                        <span class="text-sm font-semibold">${date}</span>
                                                    </div>
                                                    <div class="inline-flex items-center gap-2 px-5 py-2 bg-white bg-opacity-20 rounded-full">
                                                        <span class="text-lg">📍</span>
                                                        <span class="text-sm font-semibold">${location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="relative text-center py-16 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    ${generateBanner(bannerMode)}
                                    <div class="relative z-10">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white ${shadow}">` : '<div class="text-7xl mb-6">🎤</div>'}
                                        <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                        <p class="text-xl opacity-90 mb-4">${tagline}</p>
                                        <div class="flex flex-col gap-2 items-center text-sm opacity-80">
                                            <div>📅 ${date}</div>
                                            <div>📍 ${location}</div>
                                        </div>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
