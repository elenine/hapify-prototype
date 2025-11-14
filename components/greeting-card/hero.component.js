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

        // Classic Layout
        if (layout === 'classic') {
            return `
                <div class="text-center ${padding}" style="background: ${bgColor}; color: ${textColor}">
                    <div class="mb-6">${imageHtml}</div>
                    <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                    <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                </div>
            `;
        }

        // Modern Layout - Minimalist
        if (layout === 'modern') {
            return `
                <div class="text-center ${padding}" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-lg mx-auto space-y-6">
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
                <div class="text-center ${padding}" style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%); color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
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
                <div class="text-center ${padding} relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 pointer-events-none">
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
                <div class="text-center ${padding}" style="background: ${bgColor}; color: ${textColor}">
                    <h1 class="text-6xl md:text-7xl font-black mb-8 uppercase" style="${textShadow}; letter-spacing: 0.1em;">${data.greeting || 'Happy Birthday!'}</h1>
                    <div class="my-8">${imageHtml}</div>
                    <p class="text-5xl font-black uppercase tracking-widest" style="${textShadow}; letter-spacing: 0.15em;">${data.name || 'Name'}</p>
                    <div class="mt-8">
                        <div class="inline-block bg-white bg-opacity-20 px-8 py-2 rounded-full">
                            <span class="text-3xl">★ ★ ★</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout - Image & Text Side by Side
        if (layout === 'split') {
            return `
                <div class="flex flex-col md:flex-row items-center justify-center ${padding}" style="background: ${bgColor}; color: ${textColor}">
                    <div class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                        ${data.image
                            ? `<img src="${data.image}" class="w-64 h-64 rounded-lg object-cover ${imageBorder} shadow-2xl">`
                            : '<div class="w-64 h-64 rounded-lg bg-white bg-opacity-20 flex items-center justify-center text-8xl shadow-2xl">🎂</div>'}
                    </div>
                    <div class="w-full md:w-1/2 text-center md:text-left px-6">
                        <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                        <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
                        <div class="mt-6 text-4xl">🎉🎈🎁</div>
                    </div>
                </div>
            `;
        }

        // Default to classic
        return `
            <div class="text-center ${padding}" style="background: ${bgColor}; color: ${textColor}">
                <div class="mb-6">${imageHtml}</div>
                <h1 class="${sizes.greeting} font-bold mb-4" style="${textShadow}">${data.greeting || 'Happy Birthday!'}</h1>
                <p class="${sizes.name} font-semibold" style="${textShadow}">${data.name || 'Name'}</p>
            </div>
        `;
    }
};
