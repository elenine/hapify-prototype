// Hero Header Component for Farewell Party

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '👋 Hero Header',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Person's Name</label>
                            <input type="text" placeholder="Jane Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                            <input type="text" placeholder="Farewell Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Person's Photo</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-400 cursor-pointer" onclick="this.querySelector('input').click()">
                                <div class="text-3xl mb-2">📸</div>
                                <div class="text-sm text-gray-600">Click to upload photo</div>
                                <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="classic">Classic - Centered</option>
                                <option value="split">Split - Image Left</option>
                                <option value="overlay">Overlay - Image Background</option>
                                <option value="minimal">Minimal - Clean Simple</option>
                                <option value="card">Card - Boxed Design</option>
                                <option value="banner">Banner - Full Width</option>
                                <option value="floating">Floating - Elevated Card</option>
                                <option value="asymmetric">Asymmetric - Modern Layout</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent/Gradient Color</label>
                            <input type="color" value="#7c3aed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentBg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="align" onchange="updatePreview()">
                                <option value="center">Center</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="imageStyle" onchange="updatePreview()">
                                <option value="circle">Circle</option>
                                <option value="rounded">Rounded Square</option>
                                <option value="square">Square</option>
                                <option value="hexagon">Hexagon Style</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Add Shadow Effect</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="none">None</option>
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                                <option value="2xl">Huge</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                                <option value="none">None</option>
                                <option value="solid">Solid Border</option>
                                <option value="dashed">Dashed Border</option>
                                <option value="double">Double Border</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Padding Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="padding" onchange="updatePreview()">
                                <option value="compact">Compact</option>
                                <option value="normal">Normal</option>
                                <option value="spacious">Spacious</option>
                                <option value="extra">Extra Spacious</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Title Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="titleSize" onchange="updatePreview()">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="xlarge">Extra Large</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
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
                    const bg = style.bg || '#8b5cf6';
                    const accentBg = style.accentBg || '#7c3aed';
                    const textColor = style.text || '#ffffff';
                    const align = style.align || 'center';
                    const imageStyle = style.imageStyle || 'circle';
                    const shadow = style.shadow || 'none';
                    const borderStyle = style.borderStyle || 'none';
                    const padding = style.padding || 'normal';
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

                    const shadowClass = shadow !== 'none' ? `shadow-${shadow}` : '';
                    const imageRoundClass = imageStyle === 'circle' ? 'rounded-full' :
                                           imageStyle === 'rounded' ? 'rounded-2xl' :
                                           imageStyle === 'hexagon' ? 'rounded-2xl' : '';
                    const alignClass = align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right ml-auto';

                    const paddingClass = padding === 'compact' ? 'py-8 px-4' :
                                        padding === 'spacious' ? 'py-20 px-8' :
                                        padding === 'extra' ? 'py-24 px-12' : 'py-16 px-6';

                    const titleSizeClass = titleSize === 'small' ? 'text-2xl' :
                                          titleSize === 'large' ? 'text-5xl' :
                                          titleSize === 'xlarge' ? 'text-6xl' : 'text-4xl';

                    const borderClass = borderStyle === 'solid' ? `border-4` :
                                       borderStyle === 'dashed' ? `border-4 border-dashed` :
                                       borderStyle === 'double' ? `border-8` : '';

                    const borderColor = borderStyle !== 'none' ? `border-color: ${textColor};` : '';

                    // Classic Layout - Centered
                    if (layout === 'classic') {
                        return `
                            <div class="relative ${paddingClass} ${alignClass} ${borderClass} overflow-hidden" style="background: linear-gradient(135deg, ${bg}, ${accentBg}); color: ${textColor}; ${borderColor}">
                                ${generateBanner(bannerMode)}
                                <div class="relative z-10">
                                    ${data.image ? `<img src="${data.image}" class="w-32 h-32 ${imageRoundClass} ${alignClass} mb-6 object-cover border-4 ${shadowClass}" style="border-color: ${textColor}">` : '<div class="text-6xl mb-4">👋</div>'}
                                    <h1 class="${titleSizeClass} font-bold mb-3">${data.title || 'Farewell Party'}</h1>
                                    <p class="text-2xl font-semibold opacity-90">${data.name || "Person's Name"}</p>
                                </div>
                            </div>
                        `;
                    }

                    // Split Layout - Image on Left
                    if (layout === 'split') {
                        return `
                            <div class="relative py-12 px-6 overflow-hidden" style="background: ${bg}; color: ${textColor}">
                                ${generateBanner(bannerMode)}
                                <div class="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                                    <div class="flex-shrink-0">
                                        ${data.image ? `<img src="${data.image}" class="w-40 h-40 ${imageRoundClass} object-cover border-4 ${shadowClass}" style="border-color: ${textColor}">` : '<div class="text-7xl">👋</div>'}
                                    </div>
                                    <div class="flex-1">
                                        <h1 class="text-3xl font-bold mb-2">${data.title || 'Farewell Party'}</h1>
                                        <p class="text-xl font-semibold opacity-90">${data.name || "Person's Name"}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Overlay Layout - Image Background
                    if (layout === 'overlay') {
                        return `
                            <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg}, ${accentBg});">
                                ${generateBanner(bannerMode)}
                                ${data.image && bannerMode === 'none' ? `
                                    <div class="absolute inset-0 opacity-20">
                                        <img src="${data.image}" class="w-full h-full object-cover">
                                    </div>
                                ` : ''}
                                <div class="relative z-10 ${alignClass}">
                                    <div class="text-6xl mb-4">👋</div>
                                    <h1 class="text-4xl font-bold mb-3 ${shadowClass}" style="color: ${textColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.3)">${data.title || 'Farewell Party'}</h1>
                                    <p class="text-2xl font-semibold ${shadowClass}" style="color: ${textColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.3)">${data.name || "Person's Name"}</p>
                                </div>
                            </div>
                        `;
                    }

                    // Minimal Layout - Clean and Simple
                    if (layout === 'minimal') {
                        return `
                            <div class="relative py-12 px-6 overflow-hidden" style="background: ${bg}; color: ${textColor}">
                                ${generateBanner(bannerMode)}
                                <div class="max-w-xl mx-auto ${alignClass} relative z-10">
                                    ${data.image ? `<img src="${data.image}" class="w-24 h-24 ${imageRoundClass} ${alignClass} mb-4 object-cover ${shadowClass}">` : '<div class="text-5xl mb-3">👋</div>'}
                                    <h1 class="text-3xl font-bold mb-1">${data.title || 'Farewell Party'}</h1>
                                    <p class="text-xl opacity-80">${data.name || "Person's Name"}</p>
                                    <div class="mt-4 pt-4" style="border-top: 2px solid ${textColor}; opacity: 0.3; max-width: 100px; ${align === 'center' ? 'margin-left: auto; margin-right: auto;' : align === 'right' ? 'margin-left: auto;' : ''}"></div>
                                </div>
                            </div>
                        `;
                    }

                    // Card Layout - Boxed Design
                    if (layout === 'card') {
                        return `
                            <div class="relative py-12 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg}, ${accentBg});">
                                ${generateBanner(bannerMode)}
                                <div class="max-w-md mx-auto bg-white rounded-3xl overflow-hidden ${shadowClass} relative z-10" style="box-shadow: 0 20px 60px rgba(0,0,0,0.3)">
                                    ${data.image ? `
                                        <div class="h-48 overflow-hidden">
                                            <img src="${data.image}" class="w-full h-full object-cover">
                                        </div>
                                    ` : '<div class="h-32 flex items-center justify-center text-6xl" style="background: ${accentBg}">👋</div>'}
                                    <div class="p-8 ${alignClass}" style="color: #1f2937">
                                        <h1 class="text-3xl font-bold mb-2">${data.title || 'Farewell Party'}</h1>
                                        <p class="text-xl font-semibold opacity-70">${data.name || "Person's Name"}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Banner Layout - Full Width
                    if (layout === 'banner') {
                        return `
                            <div class="${paddingClass} relative overflow-hidden ${borderClass}" style="background: linear-gradient(90deg, ${bg}, ${accentBg}); color: ${textColor}; ${borderColor}">
                                ${generateBanner(bannerMode)}
                                <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                                    ${data.image ? `<img src="${data.image}" class="w-40 h-40 ${imageRoundClass} object-cover border-4 ${shadowClass}" style="border-color: ${textColor}">` : '<div class="text-7xl">👋</div>'}
                                    <div class="flex-1 ${alignClass}">
                                        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 ${shadowClass}" style="background: rgba(255,255,255,0.2)">FAREWELL EVENT</div>
                                        <h1 class="${titleSizeClass} font-bold mb-2">${data.title || 'Farewell Party'}</h1>
                                        <p class="text-2xl font-semibold opacity-90">${data.name || "Person's Name"}</p>
                                    </div>
                                </div>
                                <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style="background: ${textColor}; transform: translate(30%, -30%);"></div>
                                <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style="background: ${textColor}; transform: translate(-30%, 30%);"></div>
                            </div>
                        `;
                    }

                    // Floating Layout - Elevated Card
                    if (layout === 'floating') {
                        return `
                            <div class="relative ${paddingClass} overflow-hidden" style="background: ${bg}">
                                ${generateBanner(bannerMode)}
                                <div class="max-w-2xl mx-auto relative z-10">
                                    <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300" style="border: 6px solid ${accentBg}">
                                        <div class="p-2" style="background: linear-gradient(135deg, ${bg}, ${accentBg})"></div>
                                        <div class="p-8 ${alignClass}">
                                            ${data.image ? `
                                                <div class="inline-block p-2 rounded-full mb-6" style="background: linear-gradient(135deg, ${bg}, ${accentBg})">
                                                    <img src="${data.image}" class="w-32 h-32 ${imageRoundClass} object-cover ${shadowClass}">
                                                </div>
                                            ` : '<div class="text-6xl mb-4">👋</div>'}
                                            <div class="mb-2">
                                                <span class="inline-block px-4 py-1 rounded-full text-xs font-bold" style="background: ${accentBg}20; color: ${bg}">FAREWELL</span>
                                            </div>
                                            <h1 class="${titleSizeClass} font-bold mb-3" style="color: #1f2937">${data.title || 'Farewell Party'}</h1>
                                            <div class="w-20 h-1 mb-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}" style="background: linear-gradient(90deg, ${bg}, ${accentBg})"></div>
                                            <p class="text-xl font-semibold" style="color: ${accentBg}">${data.name || "Person's Name"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Asymmetric Layout - Modern Design
                    if (layout === 'asymmetric') {
                        return `
                            <div class="${paddingClass} relative overflow-hidden" style="background: ${bg}">
                                ${generateBanner(bannerMode)}
                                <div class="max-w-4xl mx-auto relative z-10">
                                    <div class="grid md:grid-cols-5 gap-6 items-center">
                                        <div class="md:col-span-2 ${align === 'right' ? 'md:order-2' : ''}">
                                            ${data.image ? `
                                                <div class="relative inline-block">
                                                    <img src="${data.image}" class="w-full h-64 ${imageRoundClass} object-cover ${shadowClass}">
                                                    <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${accentBg}, ${bg})"></div>
                                                </div>
                                            ` : '<div class="text-8xl ${alignClass}">👋</div>'}
                                        </div>
                                        <div class="md:col-span-3 ${alignClass} ${align === 'right' ? 'md:order-1' : ''}">
                                            <div class="inline-block mb-4">
                                                <div class="flex items-center gap-2">
                                                    <div class="w-12 h-1" style="background: ${accentBg}"></div>
                                                    <span class="text-sm font-bold tracking-wider" style="color: ${textColor}">FAREWELL EVENT</span>
                                                </div>
                                            </div>
                                            <h1 class="${titleSizeClass} font-black mb-3 leading-tight" style="color: ${textColor}">${data.title || 'Farewell Party'}</h1>
                                            <p class="text-3xl font-bold mb-6" style="color: ${accentBg}">${data.name || "Person's Name"}</p>
                                            <div class="flex gap-2 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}">
                                                <div class="w-3 h-3 rounded-full" style="background: ${accentBg}"></div>
                                                <div class="w-3 h-3 rounded-full" style="background: ${accentBg}; opacity: 0.6"></div>
                                                <div class="w-3 h-3 rounded-full" style="background: ${accentBg}; opacity: 0.3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style="background: ${accentBg}; transform: translate(40%, -40%);"></div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
