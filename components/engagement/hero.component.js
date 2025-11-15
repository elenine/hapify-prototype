// Hero Component for Engagement Announcement
// Main header section with couple names, date, and photo

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '💍 Hero Header',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Partner 1 Name</label>
                <input type="text" placeholder="Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent section-data" data-field="partner1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Partner 2 Name</label>
                <input type="text" placeholder="John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent section-data" data-field="partner2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Engagement Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Couple Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-rose-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="minimal">Minimal Elegance</option>
                    <option value="dramatic">Dramatic Overlay</option>
                    <option value="split">Split Design</option>
                    <option value="modern">Modern Bold</option>
                    <option value="artistic">Artistic Frame</option>
                    <option value="romantic">Romantic Floral</option>
                    <option value="luxury">Luxury Gold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="imageShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="square">Square</option>
                    <option value="heart">Heart Shape</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="imageSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Typography Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="large">Large</option>
                    <option value="display">Display</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="soft">Soft Shadow</option>
                    <option value="medium" selected>Medium Shadow</option>
                    <option value="strong">Strong Shadow</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const imageShape = style.imageShape || 'circle';
        const imageSize = style.imageSize || 'medium';
        const fontSize = style.fontSize || 'normal';
        const shadow = style.shadow || 'medium';
        const bg = style.bg || '#e11d48';
        const accent = style.accent || '#ec4899';
        const text = style.text || '#ffffff';

        // Image sizing
        const imageSizes = {
            small: 'w-24 h-24',
            medium: 'w-32 h-32',
            large: 'w-40 h-40',
            xlarge: 'w-48 h-48'
        };

        // Image shapes
        const imageShapes = {
            circle: 'rounded-full',
            rounded: 'rounded-2xl',
            square: 'rounded-none',
            heart: 'rounded-full'
        };

        // Typography sizes
        const fontSizes = {
            compact: { title: 'text-2xl', subtitle: 'text-lg', date: 'text-xs' },
            normal: { title: 'text-3xl', subtitle: 'text-2xl', date: 'text-sm' },
            large: { title: 'text-4xl', subtitle: 'text-3xl', date: 'text-base' },
            display: { title: 'text-5xl', subtitle: 'text-4xl', date: 'text-lg' }
        };

        // Shadow styles
        const shadows = {
            none: '',
            soft: 'shadow-sm',
            medium: 'shadow-md',
            strong: 'shadow-xl'
        };

        const imgClass = `${imageSizes[imageSize]} ${imageShapes[imageShape]} object-cover border-4 ${shadows[shadow]}`;
        const fonts = fontSizes[fontSize];

        // Layout variations
        if (layout === 'minimal') {
            return `
                <div class="py-20 px-6" style="background: ${bg}; color: ${text}">
                    <div class="max-w-md mx-auto text-center space-y-6">
                        ${data.image ? `<img src="${data.image}" class="${imgClass} mx-auto" style="border-color: ${accent};">` : `<div class="text-6xl">💍</div>`}
                        <div class="space-y-2">
                            <p class="${fonts.subtitle} font-light tracking-wide">${data.partner1 || 'Sarah'} & ${data.partner2 || 'John'}</p>
                            ${data.date ? `<p class="${fonts.date} opacity-80 tracking-widest uppercase">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'dramatic') {
            return `
                <div class="relative py-24 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${accent} 100%); color: ${text}">
                    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, ${text} 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <div class="relative max-w-lg mx-auto text-center space-y-6">
                        ${data.image ? `<img src="${data.image}" class="${imgClass} mx-auto ${shadows[shadow]}" style="border-color: ${text};">` : `<div class="text-7xl mb-4 animate-pulse">💍</div>`}
                        <h1 class="${fonts.title} font-black mb-4 tracking-tight" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">We're Engaged!</h1>
                        <p class="${fonts.subtitle} font-bold">${data.partner1 || 'Sarah'} & ${data.partner2 || 'John'}</p>
                        ${data.date ? `<div class="inline-block px-6 py-2 rounded-full ${fonts.date} font-semibold" style="background: ${text}; color: ${bg};">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="grid md:grid-cols-2 min-h-[400px]">
                    <div class="flex items-center justify-center p-8" style="background: ${bg};">
                        ${data.image ? `<img src="${data.image}" class="${imgClass} ${shadows[shadow]}" style="border-color: ${accent};">` : `<div class="text-8xl">💍</div>`}
                    </div>
                    <div class="flex flex-col items-center justify-center p-8 text-center" style="background: ${accent}; color: ${text}">
                        <h1 class="${fonts.title} font-bold mb-4">We're Engaged!</h1>
                        <p class="${fonts.subtitle} font-semibold mb-2">${data.partner1 || 'Sarah'}</p>
                        <p class="text-xl opacity-75">&</p>
                        <p class="${fonts.subtitle} font-semibold mb-4">${data.partner2 || 'John'}</p>
                        ${data.date ? `<p class="${fonts.date} opacity-90 mt-2">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${text}">
                    <div class="max-w-2xl mx-auto">
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            ${data.image ? `<img src="${data.image}" class="${imgClass} flex-shrink-0 ${shadows[shadow]}" style="border-color: ${accent};">` : `<div class="text-7xl flex-shrink-0">💍</div>`}
                            <div class="text-center md:text-left">
                                <div class="inline-block px-4 py-1 rounded-full ${fonts.date} font-semibold mb-4" style="background: ${accent};">Engaged</div>
                                <h1 class="${fonts.title} font-extrabold mb-2">${data.partner1 || 'Sarah'} & ${data.partner2 || 'John'}</h1>
                                ${data.date ? `<p class="${fonts.date} opacity-80">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'artistic') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: ${bg}; color: ${text}">
                    <div class="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="hearts" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <text x="50" y="50" font-size="40" text-anchor="middle" fill="${accent}">💕</text>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hearts)"/>
                        </svg>
                    </div>
                    <div class="relative max-w-3xl mx-auto text-center">
                        <div class="relative inline-block mb-8">
                            <div class="absolute -inset-4 rounded-full border-4 border-dashed opacity-30" style="border-color: ${accent}; animation: spin 20s linear infinite;"></div>
                            ${data.image ? `<img src="${data.image}" class="${imgClass} ${shadows[shadow]}" style="border-color: ${accent};">` : `<div class="text-8xl">💍</div>`}
                        </div>
                        <div class="relative p-8 rounded-3xl" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 2px solid ${accent};">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full ${fonts.date} font-bold" style="background: ${accent};">We're Engaged!</div>
                            <h1 class="${fonts.title} font-bold mb-3 mt-4" style="font-family: 'Georgia', serif;">${data.partner1 || 'Sarah'} & ${data.partner2 || 'John'}</h1>
                            ${data.date ? `<p class="${fonts.date} opacity-90">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        </div>
                    </div>
                    <style>
                        @keyframes spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                    </style>
                </div>
            `;
        } else if (layout === 'romantic') {
            return `
                <div class="relative py-24 px-6 overflow-hidden" style="background: linear-gradient(to bottom, ${bg}, ${accent}20); color: ${text}">
                    <div class="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">🌹</div>
                    <div class="absolute top-20 right-20 text-5xl opacity-20 animate-pulse" style="animation-delay: 1s;">🌺</div>
                    <div class="absolute bottom-20 left-20 text-5xl opacity-20 animate-pulse" style="animation-delay: 2s;">🌷</div>
                    <div class="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse" style="animation-delay: 3s;">🌸</div>
                    <div class="relative max-w-2xl mx-auto text-center">
                        <div class="mb-6">
                            <div class="inline-block relative">
                                ${data.image ? `<img src="${data.image}" class="${imgClass} ${shadows[shadow]}" style="border-color: ${accent}; border-width: 6px;">` : `<div class="text-8xl">💍</div>`}
                                <div class="absolute -bottom-2 -right-2 text-4xl">🌹</div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="text-xl font-light tracking-widest opacity-75" style="font-family: 'Georgia', serif;">Together Forever</div>
                            <h1 class="${fonts.title} font-bold" style="font-family: 'Georgia', serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">${data.partner1 || 'Sarah'}</h1>
                            <div class="flex items-center justify-center gap-4">
                                <div class="w-16 h-0.5 opacity-50" style="background: ${accent};"></div>
                                <span class="text-3xl">💕</span>
                                <div class="w-16 h-0.5 opacity-50" style="background: ${accent};"></div>
                            </div>
                            <h1 class="${fonts.title} font-bold" style="font-family: 'Georgia', serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">${data.partner2 || 'John'}</h1>
                            ${data.date ? `
                            <div class="mt-6 inline-block px-8 py-3 rounded-full ${fonts.date} font-semibold ${shadows[shadow]}" style="background: ${accent};">
                                ${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'luxury') {
            return `
                <div class="relative py-20 px-6" style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #f5e6d3;">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle, ${accent} 1px, transparent 1px); background-size: 30px 30px;"></div>
                    </div>
                    <div class="relative max-w-2xl mx-auto text-center">
                        <div class="mb-8">
                            <div class="inline-block relative p-1 rounded-full" style="background: linear-gradient(135deg, #FFD700, #FFA500);">
                                ${data.image ? `<img src="${data.image}" class="${imgClass} ${shadows[shadow]} border-4 border-white">` : `<div class="text-8xl p-4">💍</div>`}
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div class="text-sm uppercase tracking-[0.3em] font-light" style="color: #FFD700;">Eternally United</div>
                            <div>
                                <h1 class="${fonts.title} font-bold tracking-wider mb-2" style="font-family: 'Georgia', serif; color: #FFD700; text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);">
                                    ${data.partner1 || 'Sarah'}
                                </h1>
                                <div class="flex items-center justify-center gap-3 my-4">
                                    <div class="w-12 h-px" style="background: linear-gradient(to right, transparent, #FFD700);"></div>
                                    <span class="text-2xl" style="color: #FFD700;">✦</span>
                                    <div class="w-12 h-px" style="background: linear-gradient(to left, transparent, #FFD700);"></div>
                                </div>
                                <h1 class="${fonts.title} font-bold tracking-wider" style="font-family: 'Georgia', serif; color: #FFD700; text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);">
                                    ${data.partner2 || 'John'}
                                </h1>
                            </div>
                            ${data.date ? `
                            <div class="mt-8">
                                <div class="inline-block px-8 py-4 rounded-lg ${fonts.date} font-semibold" style="background: linear-gradient(135deg, #FFD700, #FFA500); color: #1a1a1a; box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);">
                                    ${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                                </div>
                            </div>` : ''}
                            <div class="text-xs uppercase tracking-widest opacity-75" style="color: #FFD700;">We're Engaged</div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Centered Classic (default)
            return `
                <div class="text-center py-16 px-6" style="background: ${bg}; color: ${text}">
                    ${data.image ? `<img src="${data.image}" class="${imgClass} mx-auto mb-6 ${shadows[shadow]}" style="border-color: ${accent};">` : `<div class="text-6xl mb-4">💍</div>`}
                    <h1 class="${fonts.title} font-bold mb-2">We're Engaged!</h1>
                    <p class="${fonts.subtitle}">${data.partner1 || 'Sarah'} & ${data.partner2 || 'John'}</p>
                    ${data.date ? `<p class="${fonts.date} mt-3 opacity-90">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                </div>
            `;
        }
    }
};
