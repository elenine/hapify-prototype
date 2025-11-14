// Photo Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photo = {
    name: '📸 Photo',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="photo" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input type="text" placeholder="A special moment..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="caption" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Centered Photo</option>
                    <option value="framed">Framed - With Border</option>
                    <option value="polaroid">Polaroid - Instant Photo Style</option>
                    <option value="floating">Floating - With Shadow</option>
                    <option value="tilted">Tilted - Rotated Angle</option>
                    <option value="collage">Collage - Multi-frame Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shape" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Frame Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="frameColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3f4f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Filter Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="filter" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="grayscale">Black & White</option>
                    <option value="sepia">Sepia/Vintage</option>
                    <option value="warm">Warm Tone</option>
                    <option value="cool">Cool Tone</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="captionStyle" onchange="updatePreview()">
                    <option value="simple">Simple</option>
                    <option value="italic">Italic</option>
                    <option value="handwritten">Handwritten Style</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        if (!data.photo) return '';

        const layout = style.layout || 'simple';
        const bgColor = style.bgColor || '#f3f4f6';
        const frameColor = style.frameColor || '#ffffff';

        const sizes = {
            small: 'max-w-xs',
            medium: 'max-w-md',
            large: 'max-w-2xl',
            full: 'w-full'
        };
        const sizeClass = sizes[style.size] || 'max-w-md';

        const shapes = {
            rounded: 'rounded-lg',
            circle: 'rounded-full',
            square: 'rounded-none'
        };
        const shapeClass = shapes[style.shape] || 'rounded-lg';

        const filters = {
            none: '',
            grayscale: 'filter: grayscale(100%);',
            sepia: 'filter: sepia(80%);',
            warm: 'filter: saturate(1.2) hue-rotate(-10deg);',
            cool: 'filter: saturate(1.2) hue-rotate(10deg);'
        };
        const filterStyle = filters[style.filter] || '';

        const captionStyles = {
            simple: 'text-sm',
            italic: 'text-sm italic',
            handwritten: 'text-base italic font-serif',
            bold: 'text-sm font-bold'
        };
        const captionClass = captionStyles[style.captionStyle] || 'text-sm italic';

        const caption = data.caption ? `<p class="mt-4 ${captionClass}" style="color: ${globalStyles.textColor}">${data.caption}</p>` : '';

        // Simple Layout
        if (layout === 'simple') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <img src="${data.photo}" class="${shapeClass} w-full h-auto shadow-lg object-cover" style="${filterStyle}" alt="Birthday photo">
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Framed Layout
        if (layout === 'framed') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="p-4 ${shapeClass}" style="background: ${frameColor}; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Polaroid Layout
        if (layout === 'polaroid') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="p-4 pb-16 bg-white shadow-2xl" style="box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                            <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            ${data.caption ? `<p class="mt-4 text-center text-sm font-handwriting" style="color: ${globalStyles.textColor}">${data.caption}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Layout
        if (layout === 'floating') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="transform hover:scale-105 transition-transform duration-300">
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}; box-shadow: 0 20px 60px rgba(0,0,0,0.3);" alt="Birthday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Tilted Layout
        if (layout === 'tilted') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div class="p-3 bg-white ${shapeClass}" style="box-shadow: 0 15px 40px rgba(0,0,0,0.2);">
                                <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Collage Layout
        if (layout === 'collage') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative">
                            <div class="absolute inset-0 transform translate-x-2 translate-y-2 ${shapeClass} opacity-30" style="background: ${globalStyles.primaryColor}"></div>
                            <div class="absolute inset-0 transform -translate-x-2 -translate-y-2 ${shapeClass} opacity-30" style="background: ${globalStyles.secondaryColor}"></div>
                            <div class="relative p-2 bg-white ${shapeClass} shadow-xl">
                                <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-8 px-6" style="background: ${bgColor}">
                <div class="${sizeClass} mx-auto text-center">
                    <img src="${data.photo}" class="${shapeClass} w-full h-auto shadow-lg object-cover" style="${filterStyle}" alt="Birthday photo">
                    ${caption}
                </div>
            </div>
        `;
    }
};
