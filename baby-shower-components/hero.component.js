// Hero Header Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🍼 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parent's Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent section-data" data-field="parent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                <input type="text" placeholder="Baby Shower Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="classic">Classic - Centered</option>
                    <option value="modern">Modern - Split Design</option>
                    <option value="minimal">Minimal - Simple & Clean</option>
                    <option value="elegant">Elegant - With Border</option>
                    <option value="playful">Playful - Colorful Card</option>
                    <option value="polaroid">Polaroid - Photo Frame Style</option>
                    <option value="badge">Badge - Circular Sticker</option>
                    <option value="geometric">Geometric - Bold Shapes</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="align" oninput="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="titleSize" oninput="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fbbf24';
        const text = style.text || '#ffffff';
        const accent = style.accent || '#f59e0b';
        const align = style.align || 'center';
        const titleSize = style.titleSize || 'medium';

        const titleSizes = {
            small: 'text-2xl',
            medium: 'text-3xl',
            large: 'text-4xl',
            xlarge: 'text-5xl'
        };

        const imageElement = data.image
            ? `<img src="${data.image}" class="w-32 h-32 rounded-full object-cover border-4" style="border-color: ${accent};">`
            : '<div class="text-6xl">🍼</div>';

        switch(layout) {
            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-8 items-center">
                                <div class="text-${align}" style="color: ${text};">
                                    <h1 class="${titleSizes[titleSize]} font-bold mb-4">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-xl mb-2">Celebrating</p>
                                    <p class="text-2xl font-semibold" style="color: ${accent};">${data.parent || "Parent's Name"}</p>
                                </div>
                                <div class="flex justify-center">
                                    ${imageElement}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-${align}" style="color: ${text};">
                            <div class="mb-6 flex justify-${align}">
                                ${data.image ? `<img src="${data.image}" class="w-24 h-24 rounded object-cover">` : '<div class="text-5xl">🍼</div>'}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-light mb-3" style="letter-spacing: 0.05em;">${data.title || 'Baby Shower'}</h1>
                            <div class="h-1 w-16 mb-4" style="background: ${accent}; margin-${align === 'center' ? '0 auto' : align === 'right' ? '0 0 0 auto' : '0'};"></div>
                            <p class="text-lg opacity-90">${data.parent || "Parent's Name"}</p>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="border-4 rounded-2xl p-8 text-${align}" style="border-color: ${accent}; color: ${text};">
                                <div class="mb-6 flex justify-${align}">
                                    ${imageElement}
                                </div>
                                <div class="mb-4" style="color: ${accent};">
                                    <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                    </svg>
                                </div>
                                <h1 class="${titleSizes[titleSize]} font-serif font-bold mb-3">${data.title || 'Baby Shower'}</h1>
                                <p class="text-xl font-light">for ${data.parent || "Parent's Name"}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'playful':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl text-${align}" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%); color: ${text};">
                                <div class="mb-6 flex justify-${align}">
                                    ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full object-cover border-4 shadow-lg" style="border-color: ${text};">` : '<div class="text-7xl animate-bounce">🍼</div>'}
                                </div>
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
                                    <h1 class="${titleSizes[titleSize]} font-bold mb-3">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-2xl font-semibold">Celebrating ${data.parent || "Parent's Name"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'polaroid':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
                                <div class="aspect-square bg-gray-100 mb-4 flex items-center justify-center overflow-hidden" style="background: ${accent}20;">
                                    ${data.image ? `<img src="${data.image}" class="w-full h-full object-cover">` : '<div class="text-8xl">🍼</div>'}
                                </div>
                                <div class="text-center py-4" style="color: ${accent};">
                                    <h1 class="${titleSizes[titleSize]} font-handwriting mb-2" style="font-family: 'Brush Script MT', cursive; color: #1f2937;">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-lg font-semibold">${data.parent || "Parent's Name"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="relative inline-block">
                                <div class="w-64 h-64 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%); border: 8px solid white;">
                                    <div class="text-center" style="color: ${text};">
                                        ${data.image
                                            ? `<img src="${data.image}" class="w-32 h-32 rounded-full object-cover mb-3 mx-auto border-4" style="border-color: ${text};">`
                                            : '<div class="text-7xl mb-3">🍼</div>'}
                                        <h1 class="text-xl font-bold mb-1">${data.title || 'Baby Shower'}</h1>
                                        <p class="text-sm font-semibold">${data.parent || "Parent's Name"}</p>
                                    </div>
                                </div>
                                <div class="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style="background: ${text}; color: ${accent};">
                                    <span class="text-3xl">✨</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'geometric':
                return `
                    <div class="py-16 px-6 relative overflow-hidden" style="background: ${bg};">
                        <div class="absolute top-0 left-0 w-32 h-32 opacity-20" style="background: ${accent}; transform: rotate(45deg) translate(-50%, -50%);"></div>
                        <div class="absolute bottom-0 right-0 w-40 h-40 opacity-20 rounded-full" style="background: ${accent}; transform: translate(30%, 30%);"></div>
                        <div class="max-w-2xl mx-auto text-${align} relative z-10">
                            <div class="mb-6 flex justify-${align}">
                                ${data.image
                                    ? `<div class="relative"><img src="${data.image}" class="w-32 h-32 object-cover" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); border: 4px solid ${accent};"></div>`
                                    : `<div class="w-32 h-32 flex items-center justify-center text-6xl" style="background: ${accent}; color: ${text}; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">🍼</div>`}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-black mb-3 uppercase tracking-wider" style="color: ${accent}; -webkit-text-stroke: 2px ${text}; paint-order: stroke fill; text-shadow: 4px 4px 0px ${accent}40;">
                                ${data.title || 'Baby Shower'}
                            </h1>
                            <div class="inline-block px-6 py-3 font-bold text-lg" style="background: ${accent}; color: ${text}; clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);">
                                ${data.parent || "Parent's Name"}
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
            default:
                return `
                    <div class="text-${align} py-16 px-6" style="background: ${bg}; color: ${text};">
                        <div class="max-w-2xl mx-auto">
                            <div class="mb-6 flex justify-${align}">
                                ${imageElement}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-bold mb-2">${data.title || 'Baby Shower'}</h1>
                            <p class="text-xl">Celebrating ${data.parent || "Parent's Name"}</p>
                        </div>
                    </div>
                `;
        }
    }
};
