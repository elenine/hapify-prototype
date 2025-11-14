// Photo Component for Holiday Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photo = {
    name: '📸 Photo',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="photo" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input type="text" placeholder="A special holiday moment..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="caption" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption Position</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="captionPosition" onchange="updatePreview()">
                    <option value="bottom">Below Photo</option>
                    <option value="top">Above Photo</option>
                    <option value="overlay">Overlay</option>
                </select>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="displayStyle" onchange="updatePreview()">
                    <option value="simple">Simple</option>
                    <option value="framed">Framed</option>
                    <option value="polaroid">Polaroid Style</option>
                    <option value="floating">Floating</option>
                    <option value="bordered">Bordered</option>
                    <option value="ornament">Holiday Ornament</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="shape" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded-lg">Large Rounded</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Frame Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="frameColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Filter Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="filter" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sepia">Sepia</option>
                    <option value="grayscale">Grayscale</option>
                    <option value="warm">Warm</option>
                    <option value="cool">Cool</option>
                    <option value="vibrant">Vibrant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Elements</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="decoration" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="snowflakes">Snowflakes</option>
                    <option value="stars">Stars</option>
                    <option value="holly">Holly</option>
                    <option value="corner">Corner Ornaments</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        if (!data.photo) return '';

        const displayStyle = style.displayStyle || 'simple';
        const captionPosition = data.captionPosition || 'bottom';
        const frameColor = style.frameColor || '#10b981';

        // Sizes
        const sizes = {
            small: 'max-w-xs',
            medium: 'max-w-md',
            large: 'max-w-2xl',
            full: 'w-full'
        };
        const sizeClass = sizes[style.size] || 'max-w-md';

        // Shapes
        const shapes = {
            rounded: 'rounded-lg',
            circle: 'rounded-full',
            square: 'rounded-none',
            'rounded-lg': 'rounded-2xl'
        };
        const shapeClass = shapes[style.shape] || 'rounded-lg';

        // Shadows
        const shadows = {
            none: 'shadow-none',
            small: 'shadow-sm',
            medium: 'shadow-lg',
            large: 'shadow-xl',
            xlarge: 'shadow-2xl'
        };
        const shadowClass = shadows[style.shadow] || 'shadow-lg';

        // Filters
        const filters = {
            none: '',
            sepia: 'filter: sepia(0.5);',
            grayscale: 'filter: grayscale(1);',
            warm: 'filter: brightness(1.1) saturate(1.2) sepia(0.2);',
            cool: 'filter: brightness(1.05) saturate(0.9) hue-rotate(10deg);',
            vibrant: 'filter: saturate(1.4) contrast(1.1);'
        };
        const filterStyle = filters[style.filter] || '';

        // Decorations
        let decorationHTML = '';
        if (style.decoration === 'snowflakes') {
            decorationHTML = `
                <div style="position: absolute; top: -10px; left: 10%; font-size: 1.5rem;">❄️</div>
                <div style="position: absolute; top: -10px; right: 10%; font-size: 1.5rem;">❄️</div>
                <div style="position: absolute; bottom: -10px; left: 15%; font-size: 1.5rem;">❄️</div>
                <div style="position: absolute; bottom: -10px; right: 15%; font-size: 1.5rem;">❄️</div>
            `;
        } else if (style.decoration === 'stars') {
            decorationHTML = `
                <div style="position: absolute; top: -10px; left: 10%; font-size: 1.3rem;">⭐</div>
                <div style="position: absolute; top: -10px; right: 10%; font-size: 1.3rem;">✨</div>
                <div style="position: absolute; bottom: -10px; left: 15%; font-size: 1.3rem;">🌟</div>
                <div style="position: absolute; bottom: -10px; right: 15%; font-size: 1.3rem;">⭐</div>
            `;
        } else if (style.decoration === 'holly') {
            decorationHTML = `
                <div style="position: absolute; top: 10px; left: 10px; font-size: 2rem; transform: rotate(-15deg);">🌿</div>
                <div style="position: absolute; top: 10px; right: 10px; font-size: 2rem; transform: rotate(15deg);">🌿</div>
            `;
        } else if (style.decoration === 'corner') {
            decorationHTML = `
                <div style="position: absolute; top: -5px; left: -5px; width: 40px; height: 40px; border-top: 4px solid ${frameColor}; border-left: 4px solid ${frameColor};"></div>
                <div style="position: absolute; top: -5px; right: -5px; width: 40px; height: 40px; border-top: 4px solid ${frameColor}; border-right: 4px solid ${frameColor};"></div>
                <div style="position: absolute; bottom: -5px; left: -5px; width: 40px; height: 40px; border-bottom: 4px solid ${frameColor}; border-left: 4px solid ${frameColor};"></div>
                <div style="position: absolute; bottom: -5px; right: -5px; width: 40px; height: 40px; border-bottom: 4px solid ${frameColor}; border-right: 4px solid ${frameColor};"></div>
            `;
        }

        // Caption HTML
        const captionHTML = data.caption ? `<p class="text-base ${captionPosition === 'overlay' ? 'text-white' : ''}" style="color: ${captionPosition === 'overlay' ? '#ffffff' : globalStyles.textColor};">${data.caption}</p>` : '';

        if (displayStyle === 'simple') {
            return `
                <div class="py-8 px-6">
                    <div class="${sizeClass} mx-auto text-center">
                        ${captionPosition === 'top' ? `<div class="mb-4">${captionHTML}</div>` : ''}
                        <div class="relative inline-block">
                            ${decorationHTML}
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto ${shadowClass} object-cover" style="${filterStyle}" alt="Holiday photo">
                            ${captionPosition === 'overlay' && data.caption ? `
                                <div class="absolute bottom-0 left-0 right-0 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                                    ${captionHTML}
                                </div>
                            ` : ''}
                        </div>
                        ${captionPosition === 'bottom' ? `<div class="mt-4">${captionHTML}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (displayStyle === 'framed') {
            return `
                <div class="py-8 px-6">
                    <div class="${sizeClass} mx-auto text-center">
                        ${captionPosition === 'top' ? `<div class="mb-4">${captionHTML}</div>` : ''}
                        <div class="relative inline-block p-6 bg-white ${shadowClass}" style="border: 8px solid ${frameColor};">
                            ${decorationHTML}
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                            ${captionPosition === 'overlay' && data.caption ? `
                                <div class="absolute bottom-0 left-0 right-0 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                                    ${captionHTML}
                                </div>
                            ` : ''}
                        </div>
                        ${captionPosition === 'bottom' ? `<div class="mt-4">${captionHTML}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (displayStyle === 'polaroid') {
            return `
                <div class="py-8 px-6">
                    <div class="${sizeClass} mx-auto">
                        <div class="bg-white p-4 pb-16 ${shadowClass} transform rotate-1">
                            <div class="relative">
                                ${decorationHTML}
                                <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                            </div>
                            ${data.caption ? `<p class="mt-4 text-center text-gray-700 font-handwriting">${data.caption}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (displayStyle === 'floating') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto text-center">
                        ${captionPosition === 'top' ? `<div class="mb-6">${captionHTML}</div>` : ''}
                        <div class="relative inline-block transform hover:scale-105 transition-transform duration-300">
                            ${decorationHTML}
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto ${shadowClass} object-cover" style="${filterStyle} border: 4px solid white;" alt="Holiday photo">
                            ${captionPosition === 'overlay' && data.caption ? `
                                <div class="absolute bottom-0 left-0 right-0 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                                    ${captionHTML}
                                </div>
                            ` : ''}
                        </div>
                        ${captionPosition === 'bottom' ? `<div class="mt-6">${captionHTML}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (displayStyle === 'bordered') {
            return `
                <div class="py-8 px-6">
                    <div class="${sizeClass} mx-auto text-center">
                        ${captionPosition === 'top' ? `<div class="mb-4">${captionHTML}</div>` : ''}
                        <div class="relative inline-block" style="border: 4px solid ${frameColor}; padding: 0.5rem; background: white;">
                            ${decorationHTML}
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto ${shadowClass} object-cover" style="${filterStyle}" alt="Holiday photo">
                            ${captionPosition === 'overlay' && data.caption ? `
                                <div class="absolute bottom-0 left-0 right-0 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                                    ${captionHTML}
                                </div>
                            ` : ''}
                        </div>
                        ${captionPosition === 'bottom' ? `<div class="mt-4">${captionHTML}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (displayStyle === 'ornament') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative inline-block">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl">🎀</div>
                            <div class="relative inline-block ${shadowClass}" style="border: 6px solid ${frameColor}; border-radius: 50%; padding: 0.5rem; background: white;">
                                ${decorationHTML}
                                <img src="${data.photo}" class="rounded-full w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                            </div>
                        </div>
                        ${data.caption ? `<div class="mt-6">${captionHTML}</div>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
