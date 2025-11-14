// Memory Gallery Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '📸 Memory Gallery',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Our Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Description</label>
                <textarea placeholder="A collection of our favorite moments..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 cursor-pointer">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photos</div>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid-2">Grid - 2 Columns</option>
                    <option value="grid-3">Grid - 3 Columns</option>
                    <option value="grid-4">Grid - 4 Columns</option>
                    <option value="masonry">Masonry - Mixed Sizes</option>
                    <option value="carousel">Carousel - Sliding View</option>
                    <option value="featured">Featured - Large + Small</option>
                    <option value="collage">Collage - Creative Layout</option>
                    <option value="stack">Stack - Overlapping Style</option>
                    <option value="scrapbook">Scrapbook - Casual Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="imageStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded Corners</option>
                    <option value="circle">Circle</option>
                    <option value="sharp">Sharp Corners</option>
                    <option value="polaroid">Polaroid Frame</option>
                    <option value="film">Film Strip</option>
                    <option value="vintage">Vintage</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gap Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="gapSize" onchange="updatePreview()">
                    <option value="none">No Gap</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Aspect Ratio</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="aspectRatio" onchange="updatePreview()">
                    <option value="square">Square (1:1)</option>
                    <option value="portrait">Portrait (3:4)</option>
                    <option value="landscape">Landscape (4:3)</option>
                    <option value="wide">Wide (16:9)</option>
                    <option value="auto">Auto (Original)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Frame Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="frameColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">No Border</option>
                    <option value="thin">Thin Border</option>
                    <option value="thick">Thick Border</option>
                    <option value="shadow">Shadow</option>
                    <option value="double">Double Border</option>
                    <option value="gradient">Gradient Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="zoom">Zoom In</option>
                    <option value="lift">Lift Up</option>
                    <option value="tilt">Tilt</option>
                    <option value="glow">Glow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Corner Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full (Circle)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Intensity</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadowIntensity" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="strong">Strong</option>
                    <option value="dramatic">Dramatic</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'grid-2';
        const imageStyle = style.imageStyle || 'rounded';
        const gapSize = style.gapSize || 'medium';
        const frameColor = style.frameColor || '#fef2f2';
        const bg = style.bg || '#ffffff';
        const borderStyle = style.borderStyle || 'none';

        const gapClasses = {
            small: 'gap-2',
            medium: 'gap-4',
            large: 'gap-6'
        };

        const imageClasses = {
            rounded: 'rounded-lg',
            circle: 'rounded-full',
            sharp: 'rounded-none',
            polaroid: 'rounded-sm'
        };

        const borderClasses = {
            none: '',
            thin: 'border border-gray-200',
            thick: 'border-4 border-gray-300',
            shadow: 'shadow-lg'
        };

        const photoPlaceholder = (size = 'normal', extraClass = '') => `
            <div class="aspect-square ${imageClasses[imageStyle]} ${borderClasses[borderStyle]} ${extraClass} flex items-center justify-center overflow-hidden ${imageStyle === 'polaroid' ? 'p-3 bg-white shadow-md' : ''}" style="background: ${frameColor}">
                <span class="${size === 'large' ? 'text-6xl' : size === 'small' ? 'text-2xl' : 'text-4xl'}">📷</span>
            </div>
        `;

        // Grid 2 Column Layout
        if (layout === 'grid-2') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-2 ${gapClasses[gapSize]}">
                            ${photoPlaceholder()}
                            ${photoPlaceholder()}
                            ${photoPlaceholder()}
                            ${photoPlaceholder()}
                        </div>
                    </div>
                </div>
            `;
        }

        // Grid 3 Column Layout
        if (layout === 'grid-3') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-3 ${gapClasses[gapSize]}">
                            ${photoPlaceholder('small')}
                            ${photoPlaceholder('small')}
                            ${photoPlaceholder('small')}
                            ${photoPlaceholder('small')}
                            ${photoPlaceholder('small')}
                            ${photoPlaceholder('small')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Masonry Layout
        if (layout === 'masonry') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-2 ${gapClasses[gapSize]}">
                            ${photoPlaceholder('normal', 'row-span-2')}
                            ${photoPlaceholder()}
                            ${photoPlaceholder()}
                            ${photoPlaceholder('normal', 'col-span-2')}
                            ${photoPlaceholder()}
                            ${photoPlaceholder()}
                        </div>
                    </div>
                </div>
            `;
        }

        // Carousel Layout
        if (layout === 'carousel') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-lg mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="relative">
                            <div class="overflow-x-auto flex ${gapClasses[gapSize]} pb-4">
                                ${photoPlaceholder('large', 'flex-shrink-0 w-64')}
                                ${photoPlaceholder('large', 'flex-shrink-0 w-64')}
                                ${photoPlaceholder('large', 'flex-shrink-0 w-64')}
                            </div>
                            <div class="flex justify-center gap-2 mt-4">
                                <div class="w-2 h-2 rounded-full bg-red-600"></div>
                                <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Featured Layout
        if (layout === 'featured') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="space-y-4">
                            ${photoPlaceholder('large', 'w-full aspect-video')}
                            <div class="grid grid-cols-3 ${gapClasses[gapSize]}">
                                ${photoPlaceholder('small')}
                                ${photoPlaceholder('small')}
                                ${photoPlaceholder('small')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default - Grid 2
        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                    <div class="grid grid-cols-2 gap-4">
                        ${photoPlaceholder()}
                        ${photoPlaceholder()}
                        ${photoPlaceholder()}
                        ${photoPlaceholder()}
                    </div>
                </div>
            </div>
        `;
    }
};
