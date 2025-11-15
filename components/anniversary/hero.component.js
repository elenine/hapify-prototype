// Hero Header Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '❤️ Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Couple Names</label>
                <input type="text" placeholder="John & Jane Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent section-data" data-field="names" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                <input type="text" placeholder="Happy Anniversary" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload couple photo</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic - Center Aligned</option>
                    <option value="modern">Modern - With Background Pattern</option>
                    <option value="overlay">Overlay - Image with Text Overlay</option>
                    <option value="minimal">Minimal - Clean & Simple</option>
                    <option value="split">Split - Side by Side</option>
                    <option value="gradient">Gradient - Vibrant Colors</option>
                    <option value="bordered">Bordered - Framed Design</option>
                    <option value="artistic">Artistic - Creative Layout</option>
                    <option value="magazine">Magazine - Editorial Style</option>
                    <option value="romantic">Romantic - Soft & Dreamy</option>
                    <option value="floating">Floating - Cards Effect</option>
                    <option value="elegant-split">Elegant Split - Asymmetric</option>
                    <option value="circle-frame">Circle Frame - Ring Design</option>
                    <option value="waves">Waves - Flowing Background</option>
                    <option value="spotlight">Spotlight - Focus Effect</option>
                    <option value="polaroid">Polaroid - Photo Frame</option>
                    <option value="diagonal">Diagonal - Angled Layout</option>
                    <option value="hearts-bg">Hearts Background - Romantic</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="imageShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="heart">Heart Shape</option>
                    <option value="hexagon">Hexagon</option>
                    <option value="octagon">Octagon</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="imageSize" onchange="updatePreview()">
                    <option value="small">Small (80px)</option>
                    <option value="medium" selected>Medium (128px)</option>
                    <option value="large">Large (200px)</option>
                    <option value="xlarge">Extra Large (280px)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="titleSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="semibold">Semi Bold</option>
                    <option value="bold" selected>Bold</option>
                    <option value="extrabold">Extra Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fecaca" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">No Border</option>
                    <option value="solid">Solid Border</option>
                    <option value="dashed">Dashed Border</option>
                    <option value="double">Double Border</option>
                    <option value="dotted">Dotted Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small Shadow</option>
                    <option value="medium">Medium Shadow</option>
                    <option value="large">Large Shadow</option>
                    <option value="xlarge">Extra Large Shadow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Elements</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="hearts">Hearts</option>
                    <option value="flowers">Flowers</option>
                    <option value="stars">Stars</option>
                    <option value="sparkles">Sparkles</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="padding" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">No Radius (Sharp)</option>
                    <option value="small">Small Radius</option>
                    <option value="medium">Medium Radius</option>
                    <option value="large">Large Radius</option>
                    <option value="full">Full Radius (Pill)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Display Mode</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="bannerMode" onchange="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="bannerHeight" onchange="updatePreview()">
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
        const imageShape = style.imageShape || 'circle';
        const imageSize = style.imageSize || 'medium';
        const textAlign = style.textAlign || 'center';
        const titleSize = style.titleSize || 'large';
        const fontWeight = style.fontWeight || 'bold';
        const bg = style.bg || '#ef4444';
        const secondaryBg = style.secondaryBg || '#dc2626';
        const text = style.text || '#ffffff';
        const accentColor = style.accentColor || '#fecaca';
        const borderStyle = style.borderStyle || 'none';
        const shadow = style.shadow || 'none';
        const decorations = style.decorations || 'none';
        const padding = style.padding || 'medium';
        const borderRadius = style.borderRadius || 'none';

        // Padding classes
        const paddingClasses = {
            small: 'py-8 px-4',
            medium: 'py-16 px-6',
            large: 'py-24 px-8',
            xlarge: 'py-32 px-12'
        };

        // Image size classes
        const imageSizeClasses = {
            small: 'w-20 h-20',
            medium: 'w-32 h-32',
            large: 'w-48 h-48',
            xlarge: 'w-64 h-64'
        };

        // Image shape classes
        const imageShapeClasses = {
            circle: 'rounded-full',
            square: 'rounded-none',
            rounded: 'rounded-2xl',
            heart: 'rounded-full',
            hexagon: 'rounded-lg',
            octagon: 'rounded-xl'
        };

        // Title size classes
        const titleSizeClasses = {
            small: 'text-2xl',
            medium: 'text-3xl',
            large: 'text-4xl',
            xlarge: 'text-5xl'
        };

        // Font weight classes
        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold'
        };

        // Border styles
        const borderStyles = {
            none: 'border-0',
            solid: 'border-4 border-white',
            dashed: 'border-4 border-dashed border-white',
            double: 'border-8 border-double border-white',
            dotted: 'border-4 border-dotted border-white'
        };

        // Shadow classes
        const shadowClasses = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg',
            xlarge: 'shadow-2xl'
        };

        // Border radius classes
        const borderRadiusClasses = {
            none: 'rounded-none',
            small: 'rounded-sm',
            medium: 'rounded-lg',
            large: 'rounded-2xl',
            full: 'rounded-full'
        };

        // Decorative elements
        const decorationMap = {
            hearts: '💕 ❤️ 💕',
            flowers: '🌸 🌺 🌸',
            stars: '⭐ ✨ ⭐',
            sparkles: '✨ 💫 ✨',
            none: ''
        };

        const imageClass = `${imageSizeClasses[imageSize]} ${imageShapeClasses[imageShape]} object-cover ${borderStyles[borderStyle]} ${shadowClasses[shadow]}`;
        const imageElement = data.image ? `<img src="${data.image}" class="${imageClass}">` : '<div class="text-6xl mb-4">❤️</div>';

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

        // Classic Layout
        if (layout === 'classic') {
            return `
                <div class="relative text-${textAlign} ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-2xl mx-auto">
                        <div class="${textAlign === 'center' ? 'mx-auto' : ''} ${textAlign === 'right' ? 'ml-auto' : ''} w-32 mb-6">
                            ${imageElement}
                        </div>
                        <h1 class="text-3xl font-bold mb-2">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-xl">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Modern Layout with pattern
        if (layout === 'modern') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${secondaryBg} 100%); color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 opacity-10 z-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);"></div>
                    <div class="relative z-10 max-w-2xl mx-auto text-${textAlign}">
                        <div class="${textAlign === 'center' ? 'mx-auto' : ''} ${textAlign === 'right' ? 'ml-auto' : ''} w-32 mb-6">
                            ${imageElement}
                        </div>
                        <h1 class="text-4xl font-bold mb-3 drop-shadow-lg">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl drop-shadow">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Overlay Layout
        if (layout === 'overlay' && data.image) {
            return `
                <div class="relative ${paddingClasses[padding]} min-h-[400px] flex items-center justify-center overflow-hidden" style="background-image: url('${data.image}'); background-size: cover; background-position: center;">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 z-0" style="background: linear-gradient(to bottom, ${bg}88, ${secondaryBg}cc);"></div>
                    <div class="relative z-10 text-center" style="color: ${text};">
                        <div class="text-6xl mb-4">❤️</div>
                        <h1 class="text-4xl font-bold mb-3 drop-shadow-2xl">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl drop-shadow-lg">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'overlay') {
            return `
                <div class="relative ${paddingClasses[padding]} min-h-[400px] flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${secondaryBg} 100%); color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 text-center">
                        <div class="text-6xl mb-4">❤️</div>
                        <h1 class="text-4xl font-bold mb-3">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}; border-bottom: 4px solid ${secondaryBg};">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-2xl mx-auto">
                        <div class="flex items-center gap-6 ${textAlign === 'center' ? 'justify-center' : ''} ${textAlign === 'right' ? 'justify-end flex-row-reverse' : ''}">
                            <div class="w-20 h-20">
                                ${data.image ? `<img src="${data.image}" class="${imageClass} !w-20 !h-20">` : '<div class="text-5xl">❤️</div>'}
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold">${data.title || 'Happy Anniversary'}</h1>
                                <p class="text-lg opacity-90">${data.names || 'Couple Names'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="relative grid md:grid-cols-2 gap-0 overflow-hidden" style="color: ${text};">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 ${paddingClasses[padding]} flex items-center justify-center" style="background: ${bg};">
                        <div class="${imageSizeClasses[imageSize]}">
                            ${data.image ? `<img src="${data.image}" class="${imageClass}">` : '<div class="text-8xl">❤️</div>'}
                        </div>
                    </div>
                    <div class="relative z-10 ${paddingClasses[padding]} flex items-center justify-center" style="background: ${secondaryBg};">
                        <div class="text-${textAlign}">
                            ${decorationMap[decorations] ? `<div class="text-2xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-3">${data.title || 'Happy Anniversary'}</h1>
                            <p class="text-xl">${data.names || 'Couple Names'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Gradient Layout
        if (layout === 'gradient') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: linear-gradient(45deg, ${bg} 0%, ${secondaryBg} 50%, ${accentColor} 100%); color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-2xl mx-auto text-${textAlign}">
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <div class="${textAlign === 'center' ? 'mx-auto' : ''} ${textAlign === 'right' ? 'ml-auto' : ''} mb-6">
                            ${imageElement}
                        </div>
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4 drop-shadow-lg">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl drop-shadow">${data.names || 'Couple Names'}</p>
                        ${decorationMap[decorations] ? `<div class="text-3xl mt-6">${decorationMap[decorations]}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Bordered Layout
        if (layout === 'bordered') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-2xl mx-auto border-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8" style="border-color: ${accentColor}; background: ${secondaryBg}">
                        <div class="text-${textAlign}">
                            ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <div class="${textAlign === 'center' ? 'mx-auto' : ''} ${textAlign === 'right' ? 'ml-auto' : ''} mb-6">
                                ${imageElement}
                            </div>
                            <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-3">${data.title || 'Happy Anniversary'}</h1>
                            <p class="text-xl opacity-90">${data.names || 'Couple Names'}</p>
                            ${decorationMap[decorations] ? `<div class="text-3xl mt-4">${decorationMap[decorations]}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Artistic Layout
        if (layout === 'artistic') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute top-0 right-0 w-64 h-64 ${borderRadiusClasses[borderRadius]} opacity-20 z-0" style="background: ${accentColor}; transform: rotate(45deg) translate(50%, -50%);"></div>
                    <div class="absolute bottom-0 left-0 w-48 h-48 ${borderRadiusClasses[borderRadius]} opacity-20 z-0" style="background: ${secondaryBg}; transform: rotate(45deg) translate(-50%, 50%);"></div>
                    <div class="relative z-10 max-w-2xl mx-auto text-${textAlign}">
                        ${decorationMap[decorations] ? `<div class="text-4xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <div class="${textAlign === 'center' ? 'mx-auto' : ''} ${textAlign === 'right' ? 'ml-auto' : ''} mb-8 ${shadowClasses[shadow]}">
                            ${imageElement}
                        </div>
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4 drop-shadow-lg">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Magazine Layout
        if (layout === 'magazine') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-3xl mx-auto">
                        <div class="grid md:grid-cols-3 gap-6 items-center">
                            <div class="md:col-span-1 ${textAlign === 'center' ? 'mx-auto' : ''}">
                                ${imageElement}
                            </div>
                            <div class="md:col-span-2">
                                ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                                <div class="uppercase tracking-widest text-xs mb-2" style="color: ${accentColor}">Anniversary Special</div>
                                <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-3 leading-tight">${data.title || 'Happy Anniversary'}</h1>
                                <div class="h-1 w-20 mb-4" style="background: ${secondaryBg}"></div>
                                <p class="text-xl">${data.names || 'Couple Names'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Romantic Layout
        if (layout === 'romantic') {
            return `
                <div class="relative ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} overflow-hidden" style="background: linear-gradient(135deg, ${bg}22 0%, ${secondaryBg}44 100%); backdrop-filter: blur(10px);">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 opacity-10 z-0">
                        <div class="absolute top-10 left-10 text-6xl">💕</div>
                        <div class="absolute top-20 right-20 text-5xl">❤️</div>
                        <div class="absolute bottom-10 left-20 text-5xl">💖</div>
                        <div class="absolute bottom-20 right-10 text-6xl">💕</div>
                    </div>
                    <div class="relative z-10 max-w-2xl mx-auto text-center ${shadowClasses[shadow]}">
                        <div class="inline-block p-2 ${borderRadiusClasses[borderRadius]} mb-6" style="background: linear-gradient(135deg, ${accentColor} 0%, ${bg} 100%);">
                            ${imageElement}
                        </div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4" style="color: ${text}">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl italic" style="color: ${text}">${data.names || 'Couple Names'}</p>
                        ${decorationMap[decorations] ? `<div class="text-3xl mt-6">${decorationMap[decorations]}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Floating Cards Layout
        if (layout === 'floating') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${secondaryBg} 100%); color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-2xl mx-auto">
                        <div class="text-center ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8 backdrop-blur-sm" style="background: rgba(255,255,255,0.1);">
                            ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <div class="inline-block ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-2 mb-6" style="background: ${accentColor};">
                                ${data.image ? `<img src="${data.image}" class="${imageClass}">` : '<div class="text-6xl p-4">❤️</div>'}
                            </div>
                            <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4 drop-shadow-lg">${data.title || 'Happy Anniversary'}</h1>
                            <p class="text-2xl">${data.names || 'Couple Names'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Split Layout
        if (layout === 'elegant-split') {
            return `
                <div class="relative grid md:grid-cols-5 gap-0 overflow-hidden min-h-[400px]" style="color: ${text};">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 md:col-span-2 ${paddingClasses[padding]} flex items-center justify-center" style="background: ${bg};">
                        <div class="text-center">
                            ${decorationMap[decorations] ? `<div class="text-3xl mb-6">${decorationMap[decorations]}</div>` : ''}
                            <div class="inline-block ${shadowClasses[shadow]}">
                                ${imageElement}
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 md:col-span-3 ${paddingClasses[padding]} flex items-center" style="background: ${secondaryBg};">
                        <div class="w-full">
                            <div class="border-l-4 pl-6" style="border-color: ${accentColor};">
                                <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Happy Anniversary'}</h1>
                                <p class="text-2xl">${data.names || 'Couple Names'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Circle Frame Layout
        if (layout === 'circle-frame') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-2xl mx-auto text-center">
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <div class="relative inline-block">
                            <div class="absolute inset-0 rounded-full border-8 animate-pulse" style="border-color: ${accentColor}; transform: scale(1.1);"></div>
                            <div class="relative rounded-full p-4 ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${secondaryBg} 0%, ${accentColor} 100%);">
                                ${data.image ? `<img src="${data.image}" class="w-48 h-48 rounded-full object-cover border-4 border-white ${shadowClasses[shadow]}">` : '<div class="text-8xl p-8">❤️</div>'}
                            </div>
                        </div>
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mt-8 mb-4">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl">${data.names || 'Couple Names'}</p>
                        ${decorationMap[decorations] ? `<div class="text-3xl mt-6">${decorationMap[decorations]}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Waves Background Layout
        if (layout === 'waves') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <svg class="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 320">
                        <path fill="${secondaryBg}" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <svg class="absolute bottom-0 left-0 w-full opacity-30" viewBox="0 0 1440 320">
                        <path fill="${accentColor}" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <div class="relative z-10 max-w-2xl mx-auto text-center">
                        ${decorationMap[decorations] ? `<div class="text-4xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <div class="inline-block mb-6">
                            ${imageElement}
                        </div>
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4 drop-shadow-lg">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl drop-shadow">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Spotlight Layout
        if (layout === 'spotlight') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden min-h-[500px] flex items-center justify-center" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 z-0" style="background: radial-gradient(circle at center, ${accentColor}22 0%, ${bg} 70%);"></div>
                    <div class="relative z-10 text-center">
                        ${decorationMap[decorations] ? `<div class="text-4xl mb-6 animate-pulse">${decorationMap[decorations]}</div>` : ''}
                        <div class="inline-block ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-3 mb-8" style="background: linear-gradient(135deg, ${secondaryBg} 0%, ${accentColor} 100%); box-shadow: 0 0 60px ${accentColor}66;">
                            ${data.image ? `<img src="${data.image}" class="${imageClass} ${shadowClasses[shadow]}">` : '<div class="text-8xl p-4">❤️</div>'}
                        </div>
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4" style="text-shadow: 0 0 20px ${accentColor}88;">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl" style="text-shadow: 0 0 10px ${accentColor}44;">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Polaroid Layout
        if (layout === 'polaroid') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="relative z-10 max-w-md mx-auto text-center">
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <div class="inline-block bg-white p-4 pb-16 ${shadowClasses[shadow]} transform rotate-2 hover:rotate-0 transition-transform" style="box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                            ${data.image ? `<img src="${data.image}" class="w-64 h-64 object-cover">` : '<div class="w-64 h-64 bg-gray-100 flex items-center justify-center text-6xl">❤️</div>'}
                            <div class="text-center mt-6">
                                <h1 class="text-2xl ${fontWeightClasses[fontWeight]} text-gray-800 mb-2">${data.title || 'Happy Anniversary'}</h1>
                                <p class="text-lg text-gray-600">${data.names || 'Couple Names'}</p>
                            </div>
                        </div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mt-6">${decorationMap[decorations]}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Diagonal Layout
        if (layout === 'diagonal') {
            return `
                <div class="relative overflow-hidden min-h-[450px]" style="color: ${text};">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 z-0" style="background: linear-gradient(135deg, ${bg} 0%, ${bg} 45%, ${secondaryBg} 45%, ${secondaryBg} 100%);"></div>
                    <div class="relative z-10 ${paddingClasses[padding]} flex items-center justify-center min-h-[450px]">
                        <div class="text-center max-w-2xl">
                            ${decorationMap[decorations] ? `<div class="text-4xl mb-6">${decorationMap[decorations]}</div>` : ''}
                            <div class="inline-block ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-4 mb-6" style="background: ${accentColor};">
                                ${data.image ? `<img src="${data.image}" class="${imageClass}">` : '<div class="text-7xl p-2">❤️</div>'}
                            </div>
                            <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4 drop-shadow-lg">${data.title || 'Happy Anniversary'}</h1>
                            <div class="h-1 w-24 mx-auto mb-4" style="background: ${accentColor};"></div>
                            <p class="text-2xl">${data.names || 'Couple Names'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Hearts Background Layout
        if (layout === 'hearts-bg') {
            return `
                <div class="relative ${paddingClasses[padding]} overflow-hidden" style="background: ${bg}; color: ${text}">
                    ${generateBanner(bannerMode)}
                    <div class="absolute inset-0 z-0 opacity-10">
                        <div class="absolute top-10 left-10 text-5xl animate-pulse">💕</div>
                        <div class="absolute top-20 right-16 text-6xl">❤️</div>
                        <div class="absolute top-40 left-1/4 text-4xl animate-pulse">💖</div>
                        <div class="absolute top-60 right-1/3 text-5xl">💗</div>
                        <div class="absolute bottom-20 left-20 text-6xl animate-pulse">💕</div>
                        <div class="absolute bottom-32 right-12 text-4xl">❤️</div>
                        <div class="absolute bottom-10 left-1/3 text-5xl animate-pulse">💖</div>
                    </div>
                    <div class="relative z-10 max-w-2xl mx-auto text-center">
                        <div class="inline-block ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-6 mb-8" style="background: linear-gradient(135deg, ${secondaryBg}dd 0%, ${accentColor}dd 100%); backdrop-filter: blur(10px);">
                            ${imageElement}
                        </div>
                        ${decorationMap[decorations] ? `<div class="text-4xl mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl italic">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        }

        // Default to classic if unknown layout
        return `
            <div class="relative text-center ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} overflow-hidden" style="background: ${bg}; color: ${text}">
                ${generateBanner(bannerMode)}
                <div class="relative z-10">
                    ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                    ${imageElement}
                    <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-2">${data.title || 'Happy Anniversary'}</h1>
                    <p class="text-xl">${data.names || 'Couple Names'}</p>
                </div>
            </div>
        `;
    }
};
