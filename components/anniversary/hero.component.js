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
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="imageShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="heart">Heart Shape</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">No Border</option>
                    <option value="solid">Solid Border</option>
                    <option value="dashed">Dashed Border</option>
                    <option value="double">Double Border</option>
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
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const imageShape = style.imageShape || 'circle';
        const textAlign = style.textAlign || 'center';
        const bg = style.bg || '#ef4444';
        const secondaryBg = style.secondaryBg || '#dc2626';
        const text = style.text || '#ffffff';
        const borderStyle = style.borderStyle || 'none';
        const padding = style.padding || 'medium';

        // Padding classes
        const paddingClasses = {
            small: 'py-8 px-4',
            medium: 'py-16 px-6',
            large: 'py-24 px-8',
            xlarge: 'py-32 px-12'
        };

        // Image shape classes
        const imageShapeClasses = {
            circle: 'rounded-full',
            square: 'rounded-none',
            rounded: 'rounded-2xl',
            heart: 'rounded-full'
        };

        // Border styles
        const borderStyles = {
            none: 'border-0',
            solid: 'border-4 border-white',
            dashed: 'border-4 border-dashed border-white',
            double: 'border-8 border-double border-white'
        };

        const imageClass = `w-32 h-32 ${imageShapeClasses[imageShape]} object-cover ${borderStyles[borderStyle]}`;
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
                        <div class="w-48 h-48">
                            ${data.image ? `<img src="${data.image}" class="${imageClass} !w-48 !h-48">` : '<div class="text-8xl">❤️</div>'}
                        </div>
                    </div>
                    <div class="${paddingClasses[padding]} flex items-center justify-center" style="background: ${secondaryBg};">
                        <div class="text-${textAlign}">
                            <h1 class="text-3xl font-bold mb-3">${data.title || 'Happy Anniversary'}</h1>
                            <p class="text-xl">${data.names || 'Couple Names'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default to classic if unknown layout
        return `
            <div class="text-center ${paddingClasses[padding]}" style="background: ${bg}; color: ${text}">
                ${imageElement}
                <h1 class="text-3xl font-bold mb-2">${data.title || 'Happy Anniversary'}</h1>
                <p class="text-xl">${data.names || 'Couple Names'}</p>
            </div>
        `;
    }
};
