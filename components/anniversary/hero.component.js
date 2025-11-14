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

        // Classic Layout
        if (layout === 'classic') {
            return `
                <div class="text-${textAlign} ${paddingClasses[padding]}" style="background: ${bg}; color: ${text}">
                    <div class="max-w-2xl mx-auto">
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
                    <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);"></div>
                    <div class="relative max-w-2xl mx-auto text-${textAlign}">
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
                <div class="relative ${paddingClasses[padding]} min-h-[400px] flex items-center justify-center" style="background-image: url('${data.image}'); background-size: cover; background-position: center;">
                    <div class="absolute inset-0" style="background: linear-gradient(to bottom, ${bg}88, ${secondaryBg}cc);"></div>
                    <div class="relative text-center" style="color: ${text};">
                        <div class="text-6xl mb-4">❤️</div>
                        <h1 class="text-4xl font-bold mb-3 drop-shadow-2xl">${data.title || 'Happy Anniversary'}</h1>
                        <p class="text-2xl drop-shadow-lg">${data.names || 'Couple Names'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'overlay') {
            return `
                <div class="relative ${paddingClasses[padding]} min-h-[400px] flex items-center justify-center" style="background: linear-gradient(135deg, ${bg} 0%, ${secondaryBg} 100%); color: ${text}">
                    <div class="text-center">
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
                <div class="${paddingClasses[padding]}" style="background: ${bg}; color: ${text}; border-bottom: 4px solid ${secondaryBg};">
                    <div class="max-w-2xl mx-auto">
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
                <div class="grid md:grid-cols-2 gap-0" style="color: ${text};">
                    <div class="${paddingClasses[padding]} flex items-center justify-center" style="background: ${bg};">
                        <div class="${imageSizeClasses[imageSize]}">
                            ${data.image ? `<img src="${data.image}" class="${imageClass}">` : '<div class="text-8xl">❤️</div>'}
                        </div>
                    </div>
                    <div class="${paddingClasses[padding]} flex items-center justify-center" style="background: ${secondaryBg};">
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
                    <div class="max-w-2xl mx-auto text-${textAlign}">
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
                <div class="${paddingClasses[padding]}" style="background: ${bg}; color: ${text}">
                    <div class="max-w-2xl mx-auto border-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8" style="border-color: ${accentColor}; background: ${secondaryBg}">
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
                    <div class="absolute top-0 right-0 w-64 h-64 ${borderRadiusClasses[borderRadius]} opacity-20" style="background: ${accentColor}; transform: rotate(45deg) translate(50%, -50%);"></div>
                    <div class="absolute bottom-0 left-0 w-48 h-48 ${borderRadiusClasses[borderRadius]} opacity-20" style="background: ${secondaryBg}; transform: rotate(45deg) translate(-50%, 50%);"></div>
                    <div class="relative max-w-2xl mx-auto text-${textAlign}">
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
                <div class="${paddingClasses[padding]}" style="background: ${bg}; color: ${text}">
                    <div class="max-w-3xl mx-auto">
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
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-10 left-10 text-6xl">💕</div>
                        <div class="absolute top-20 right-20 text-5xl">❤️</div>
                        <div class="absolute bottom-10 left-20 text-5xl">💖</div>
                        <div class="absolute bottom-20 right-10 text-6xl">💕</div>
                    </div>
                    <div class="relative max-w-2xl mx-auto text-center ${shadowClasses[shadow]}">
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

        // Default to classic if unknown layout
        return `
            <div class="text-center ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${bg}; color: ${text}">
                ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                ${imageElement}
                <h1 class="${titleSizeClasses[titleSize]} ${fontWeightClasses[fontWeight]} mb-2">${data.title || 'Happy Anniversary'}</h1>
                <p class="text-xl">${data.names || 'Couple Names'}</p>
            </div>
        `;
    }
};
