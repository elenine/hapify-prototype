// Hero Greeting Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎂 Hero Greeting',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Recipient's Name</label>
                <input type="text" placeholder="Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Greeting</label>
                <input type="text" placeholder="Happy Birthday!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="greeting" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic - Center Aligned</option>
                    <option value="modern">Modern - Minimalist</option>
                    <option value="elegant">Elegant - Sophisticated</option>
                    <option value="fun">Fun - Playful</option>
                    <option value="bold">Bold - Dramatic</option>
                    <option value="split">Split - Image & Text Side by Side</option>
                    <option value="vintage">Vintage - Retro Style</option>
                    <option value="neon">Neon - Glowing Effect</option>
                    <option value="confetti">Confetti - Festive Party</option>
                    <option value="geometric">Geometric - Modern Patterns</option>
                    <option value="polaroid">Polaroid - Photo Frame</option>
                    <option value="magazine">Magazine - Editorial Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Greeting Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Text Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="soft">Soft Shadow</option>
                    <option value="medium">Medium Shadow</option>
                    <option value="strong">Strong Shadow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="imageBorder" onchange="updatePreview()">
                    <option value="solid" selected>Solid Border</option>
                    <option value="dashed">Dashed Border</option>
                    <option value="double">Double Border</option>
                    <option value="none">No Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="padding" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="spacious">Spacious</option>
                    <option value="xlarge">Extra Spacious</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
                    <option value="small">Small (200px)</option>
                    <option value="medium">Medium (300px)</option>
                    <option value="large">Large (400px)</option>
                    <option value="full">Full Height</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const textColor = style.text || '#ffffff';
        const bgColor = style.bg || globalStyles.primaryColor;
        const padding = {
            compact: 'py-8 px-4',
            normal: 'py-16 px-6',
            spacious: 'py-24 px-8',
            xlarge: 'py-32 px-10'
        }[style.padding] || 'py-16 px-6';

        const textSizes = {
            small: { greeting: 'text-2xl', name: 'text-xl' },
            medium: { greeting: 'text-3xl', name: 'text-2xl' },
            large: { greeting: 'text-4xl', name: 'text-3xl' },
            xlarge: { greeting: 'text-5xl md:text-6xl', name: 'text-4xl' }
        };
        const sizes = textSizes[style.textSize] || textSizes.large;

        const shadows = {
            none: '',
            soft: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.2);',
            medium: 'text-shadow: 3px 3px 6px rgba(0,0,0,0.3);',
            strong: 'text-shadow: 4px 4px 8px rgba(0,0,0,0.5);'
        };
        const textShadow = shadows[style.shadow] || '';

        const borderStyles = {
            solid: 'border-4 border-white',
            dashed: 'border-4 border-dashed border-white',
            double: 'border-8 border-double border-white',
            none: ''
        };
        const imageBorder = borderStyles[style.imageBorder] || borderStyles.solid;

        const imageHtml = data.image
            ? `<img src="${data.image}" class="w-40 h-40 rounded-full mx-auto object-cover ${imageBorder} shadow-lg">`
            : '<div class="w-40 h-40 rounded-full mx-auto bg-white bg-opacity-20 flex items-center justify-center text-6xl">🎂</div>';

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

        // Classic Layout
        if (layout === 'classic') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10">
                        <div class="mb-6">${imageHtml}</div>
                        <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                        <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                    </div>
                </div>
            `;
        }

        // Modern Layout - Minimalist
        if (layout === 'modern') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="max-w-lg mx-auto space-y-6 relative z-10">
                        <div class="mb-4">${imageHtml}</div>
                        <div class="border-t-2 border-white border-opacity-30 pt-6">
                            <h1 class="${sizes.greeting} font-light tracking-wide mb-2" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                            <p class="${sizes.name} font-medium tracking-wider uppercase" style="${textShadow}">${data.name || 'Name'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Layout - Sophisticated
        if (layout === 'elegant') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%); color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="max-w-2xl mx-auto relative z-10">
                        <div class="inline-block p-2 bg-white bg-opacity-20 rounded-full mb-6">
                            ${imageHtml}
                        </div>
                        <div class="border-y border-white border-opacity-40 py-6 my-4">
                            <h1 class="${sizes.greeting} font-serif italic mb-3" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                            <div class="flex items-center justify-center gap-4">
                                <span class="text-2xl">✦</span>
                                <p class="${sizes.name} font-serif" style="${textShadow}">${data.name || 'Name'}</p>
                                <span class="text-2xl">✦</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Fun Layout - Playful
        if (layout === 'fun') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 pointer-events-none z-0">
                        <div class="absolute top-10 left-10 text-4xl opacity-30">🎈</div>
                        <div class="absolute top-20 right-20 text-3xl opacity-30">🎉</div>
                        <div class="absolute bottom-20 left-20 text-3xl opacity-30">🎁</div>
                        <div class="absolute bottom-10 right-10 text-4xl opacity-30">🎊</div>
                    </div>
                    <div class="relative z-10">
                        <div class="mb-6 transform hover:scale-110 transition-transform duration-300">${imageHtml}</div>
                        <h1 class="${sizes.greeting} font-bold mb-4 transform hover:scale-105 transition-transform" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                        <p class="${sizes.name} font-bold" style="${textShadow}">${data.name || 'Name'}</p>
                        <div class="mt-6 text-4xl">🎂✨🎁</div>
                    </div>
                </div>
            `;
        }

        // Bold Layout - Dramatic
        if (layout === 'bold') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10">
                        <h1 class="text-6xl md:text-7xl font-black mb-8 uppercase" style="${textShadow}; letter-spacing: 0.1em;">${data.greeting || 'Happy Birthday!'}</h1>
                        <div class="my-8">${imageHtml}</div>
                        <p class="text-5xl font-black uppercase tracking-widest" style="${textShadow}; letter-spacing: 0.15em;">${data.name || 'Name'}</p>
                        <div class="mt-8">
                            <div class="inline-block bg-white bg-opacity-20 px-8 py-2 rounded-full">
                                <span class="text-3xl">★ ★ ★</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout - Image & Text Side by Side
        if (layout === 'split') {
            return `
                <div class="relative flex flex-col md:flex-row items-center justify-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 relative z-10">
                        ${data.image
                            ? `<img src="${data.image}" class="w-64 h-64 rounded-lg object-cover ${imageBorder} shadow-2xl">`
                            : '<div class="w-64 h-64 rounded-lg bg-white bg-opacity-20 flex items-center justify-center text-8xl shadow-2xl">🎂</div>'}
                    </div>
                    <div class="w-full md:w-1/2 text-center md:text-left px-6 relative z-10">
                        <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                        <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                        <div class="mt-6 text-4xl">🎉🎈🎁</div>
                    </div>
                </div>
            `;
        }

        // Vintage Layout - Retro Style
        if (layout === 'vintage') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: linear-gradient(135deg, ${bgColor}ee 0%, ${bgColor} 100%); color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10">
                        <div class="border-8 border-double p-8 max-w-2xl mx-auto" style="border-color: ${textColor}88">
                            <div class="mb-4 flex items-center justify-center gap-3">
                                <span class="text-3xl">✦</span>
                                <span class="text-3xl">❖</span>
                                <span class="text-3xl">✦</span>
                            </div>
                            <div class="mb-6">${imageHtml}</div>
                            <h1 class="${sizes.greeting} font-serif italic mb-4" style="${textShadow}; letter-spacing: 0.05em;">${data.greeting || 'Happy Birthday!'}</h1>
                            <div class="flex items-center justify-center gap-4 mb-3">
                                <div style="width: 60px; height: 2px; background: ${textColor}"></div>
                                <span class="text-2xl">❖</span>
                                <div style="width: 60px; height: 2px; background: ${textColor}"></div>
                            </div>
                            <p class="${sizes.name} font-serif" style="${textShadow}">${data.name || 'Name'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Neon Layout - Glowing Effect
        if (layout === 'neon') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: #0a0a0a; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10">
                        <div class="mb-6">${imageHtml}</div>
                        <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}; text-shadow: 0 0 10px ${bgColor}, 0 0 20px ${bgColor}, 0 0 30px ${bgColor}, 0 0 40px ${bgColor}; color: ${bgColor};">${data.greeting || 'Happy Birthday!'}</h1>
                        <p class="${sizes.name} font-semibold tracking-widest" style="text-shadow: 0 0 8px ${bgColor}, 0 0 15px ${bgColor}; color: ${bgColor};">${data.name || 'Name'}</p>
                        <div class="mt-6 flex justify-center gap-4">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: ${bgColor}; box-shadow: 0 0 20px ${bgColor}, 0 0 40px ${bgColor};"></div>
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: ${bgColor}; box-shadow: 0 0 20px ${bgColor}, 0 0 40px ${bgColor};"></div>
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: ${bgColor}; box-shadow: 0 0 20px ${bgColor}, 0 0 40px ${bgColor};"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Confetti Layout - Festive Party
        if (layout === 'confetti') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                        <div class="absolute" style="top: 10%; left: 10%; width: 10px; height: 20px; background: #ff6b9d; transform: rotate(45deg);"></div>
                        <div class="absolute" style="top: 20%; right: 15%; width: 15px; height: 15px; background: #feca57; border-radius: 50%;"></div>
                        <div class="absolute" style="top: 30%; left: 20%; width: 12px; height: 12px; background: #48dbfb; border-radius: 50%;"></div>
                        <div class="absolute" style="top: 40%; right: 25%; width: 8px; height: 25px; background: #ff9ff3; transform: rotate(-30deg);"></div>
                        <div class="absolute" style="top: 15%; left: 70%; width: 10px; height: 20px; background: #54a0ff; transform: rotate(60deg);"></div>
                        <div class="absolute" style="bottom: 30%; left: 15%; width: 15px; height: 15px; background: #00d2d3; border-radius: 50%;"></div>
                        <div class="absolute" style="bottom: 20%; right: 20%; width: 12px; height: 25px; background: #ee5a6f; transform: rotate(20deg);"></div>
                        <div class="absolute" style="bottom: 40%; left: 80%; width: 10px; height: 10px; background: #feca57; border-radius: 50%;"></div>
                        <div class="absolute" style="top: 50%; left: 5%; width: 8px; height: 20px; background: #ff6b9d; transform: rotate(-45deg);"></div>
                        <div class="absolute" style="bottom: 10%; right: 10%; width: 15px; height: 15px; background: #48dbfb; border-radius: 50%;"></div>
                    </div>
                    <div class="relative z-10">
                        <div class="mb-6 transform hover:scale-110 transition-transform duration-300">${imageHtml}</div>
                        <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                        <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                        <div class="mt-6 text-4xl">🎊🎉🎈</div>
                    </div>
                </div>
            `;
        }

        // Geometric Layout - Modern Patterns
        if (layout === 'geometric') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 pointer-events-none z-0 opacity-10">
                        <div class="absolute top-0 left-0 w-32 h-32 border-4" style="border-color: ${textColor}; transform: rotate(45deg);"></div>
                        <div class="absolute top-20 right-0 w-40 h-40 rounded-full border-4" style="border-color: ${textColor};"></div>
                        <div class="absolute bottom-0 left-20 w-36 h-36 border-4" style="border-color: ${textColor}; transform: rotate(30deg);"></div>
                        <div class="absolute bottom-20 right-20 w-28 h-28 rounded-full border-4" style="border-color: ${textColor};"></div>
                    </div>
                    <div class="relative z-10">
                        <div class="mb-6 relative inline-block">
                            <div class="absolute -inset-4 border-2 rounded-full opacity-30" style="border-color: ${textColor};"></div>
                            ${imageHtml}
                        </div>
                        <h1 class="${sizes.greeting} font-bold mb-4 uppercase tracking-wider" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                        <div class="inline-block px-8 py-2 border-2 mb-2" style="border-color: ${textColor}">
                            <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Polaroid Layout - Photo Frame
        if (layout === 'polaroid') {
            return `
                <div class="relative text-center ${padding} overflow-hidden" style="background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%); color: #333">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-md mx-auto">
                        <div class="bg-white p-4 pb-16 shadow-2xl transform hover:rotate-2 transition-transform duration-300" style="box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
                            ${data.image
                                ? `<img src="${data.image}" class="w-full h-auto object-cover mb-4" style="aspect-ratio: 1/1;">`
                                : '<div class="w-full bg-gray-200 flex items-center justify-center text-6xl" style="aspect-ratio: 1/1;">🎂</div>'}
                            <h1 class="${sizes.greeting} font-bold mb-2" style="color: #333; font-family: 'Courier New', monospace;">${data.greeting || 'Happy Birthday!'}</h1>
                            <p class="${sizes.name} italic" style="color: #666; font-family: 'Courier New', monospace;">${data.name || 'Name'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Magazine Layout - Editorial Style
        if (layout === 'magazine') {
            return `
                <div class="relative ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-4xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="order-2 md:order-1">
                                <div class="text-xs uppercase tracking-widest mb-2 opacity-70">Special Edition</div>
                                <h1 class="text-5xl md:text-6xl font-black uppercase mb-4 leading-none" style="${textShadow}; letter-spacing: -0.02em;">${data.greeting || 'Happy Birthday!'}</h1>
                                <div class="h-1 w-20 mb-4" style="background: ${textColor}"></div>
                                <p class="text-2xl md:text-3xl font-light tracking-wide" style="${textShadow}">${data.name || 'Name'}</p>
                                <div class="mt-6 text-xs uppercase tracking-widest opacity-70">Celebrating You</div>
                            </div>
                            <div class="order-1 md:order-2">
                                ${data.image
                                    ? `<img src="${data.image}" class="w-full h-auto object-cover shadow-2xl" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);">`
                                    : '<div class="w-full bg-white bg-opacity-20 flex items-center justify-center text-8xl aspect-square shadow-2xl">🎂</div>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default to classic
        return `
            <div class="relative text-center ${padding} overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                ${generateBanner(bannerMode)}
                <div class="relative z-10">
                    <div class="mb-6">${imageHtml}</div>
                    <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                    <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                </div>
            </div>
        `;
    }
};
