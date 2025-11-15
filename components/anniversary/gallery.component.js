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
                    <option value="polaroid-grid">Polaroid Grid - Photo Frames</option>
                    <option value="hexagon">Hexagon - Honeycomb</option>
                    <option value="circle-cluster">Circle Cluster - Organic</option>
                    <option value="filmstrip">Film Strip - Cinema Style</option>
                    <option value="magazine">Magazine - Editorial</option>
                    <option value="pinterest">Pinterest - Vertical Masonry</option>
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

        // Grid 4 Column Layout
        if (layout === 'grid-4') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-4 ${gapClasses[gapSize]}">
                            ${photoPlaceholder('small')}
                            ${photoPlaceholder('small')}
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

        // Collage Layout
        if (layout === 'collage') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-6 ${gapClasses[gapSize]}">
                            ${photoPlaceholder('normal', 'col-span-3 row-span-2')}
                            ${photoPlaceholder('small', 'col-span-3')}
                            ${photoPlaceholder('small', 'col-span-2')}
                            ${photoPlaceholder('small', 'col-span-1')}
                            ${photoPlaceholder('small', 'col-span-2 row-span-2')}
                            ${photoPlaceholder('small', 'col-span-4')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Stack Layout
        if (layout === 'stack') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="relative h-96 flex items-center justify-center">
                            <div class="absolute transform -rotate-6 opacity-70" style="top: 10%; left: 10%; width: 70%;">
                                ${photoPlaceholder('normal', 'shadow-2xl')}
                            </div>
                            <div class="absolute transform rotate-3 opacity-80" style="top: 15%; right: 10%; width: 70%;">
                                ${photoPlaceholder('normal', 'shadow-2xl')}
                            </div>
                            <div class="relative z-10 w-4/5">
                                ${photoPlaceholder('normal', 'shadow-2xl')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Scrapbook Layout
        if (layout === 'scrapbook') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-2 gap-8">
                            <div class="transform rotate-2">
                                ${photoPlaceholder('normal', 'shadow-lg bg-white p-3')}
                                <div class="text-sm text-center mt-2 font-handwriting" style="color: ${accentColor};">📍 Memory #1</div>
                            </div>
                            <div class="transform -rotate-3">
                                ${photoPlaceholder('normal', 'shadow-lg bg-white p-3')}
                                <div class="text-sm text-center mt-2 font-handwriting" style="color: ${accentColor};">📍 Memory #2</div>
                            </div>
                            <div class="transform -rotate-1">
                                ${photoPlaceholder('normal', 'shadow-lg bg-white p-3')}
                                <div class="text-sm text-center mt-2 font-handwriting" style="color: ${accentColor};">📍 Memory #3</div>
                            </div>
                            <div class="transform rotate-2">
                                ${photoPlaceholder('normal', 'shadow-lg bg-white p-3')}
                                <div class="text-sm text-center mt-2 font-handwriting" style="color: ${accentColor};">📍 Memory #4</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Polaroid Grid Layout
        if (layout === 'polaroid-grid') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-2 gap-8">
                            <div class="bg-white p-4 pb-12 shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                                ${photoPlaceholder('normal', 'bg-gray-100')}
                                <p class="text-center mt-4 text-sm text-gray-600">Our favorite moment</p>
                            </div>
                            <div class="bg-white p-4 pb-12 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
                                ${photoPlaceholder('normal', 'bg-gray-100')}
                                <p class="text-center mt-4 text-sm text-gray-600">Together forever</p>
                            </div>
                            <div class="bg-white p-4 pb-12 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                                ${photoPlaceholder('normal', 'bg-gray-100')}
                                <p class="text-center mt-4 text-sm text-gray-600">Sweet memories</p>
                            </div>
                            <div class="bg-white p-4 pb-12 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                                ${photoPlaceholder('normal', 'bg-gray-100')}
                                <p class="text-center mt-4 text-sm text-gray-600">Love & laughter</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Hexagon Layout
        if (layout === 'hexagon') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-start-2">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                            <div class="col-start-1">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                            <div class="col-start-2">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                            <div class="col-start-3">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                            <div class="col-start-1">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                            <div class="col-start-2">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                            <div class="col-start-3">
                                ${photoPlaceholder('normal', 'rounded-full border-4')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Circle Cluster Layout
        if (layout === 'circle-cluster') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="relative h-96">
                            <div class="absolute top-0 left-0 w-32 h-32">
                                ${photoPlaceholder('small', 'rounded-full shadow-xl')}
                            </div>
                            <div class="absolute top-10 right-10 w-40 h-40">
                                ${photoPlaceholder('normal', 'rounded-full shadow-xl')}
                            </div>
                            <div class="absolute bottom-20 left-20 w-36 h-36">
                                ${photoPlaceholder('normal', 'rounded-full shadow-xl')}
                            </div>
                            <div class="absolute bottom-0 right-0 w-28 h-28">
                                ${photoPlaceholder('small', 'rounded-full shadow-xl')}
                            </div>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 z-10">
                                ${photoPlaceholder('normal', 'rounded-full shadow-2xl border-4 border-white')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Film Strip Layout
        if (layout === 'filmstrip') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="relative bg-black p-4 rounded-lg">
                            <div class="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-around">
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                            </div>
                            <div class="absolute right-0 top-0 bottom-0 w-4 flex flex-col justify-around">
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                                <div class="h-4 bg-gray-800 rounded-sm"></div>
                            </div>
                            <div class="grid grid-cols-4 gap-2 px-6">
                                ${photoPlaceholder('small', 'rounded-none')}
                                ${photoPlaceholder('small', 'rounded-none')}
                                ${photoPlaceholder('small', 'rounded-none')}
                                ${photoPlaceholder('small', 'rounded-none')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Magazine Layout
        if (layout === 'magazine') {
            const accentColor = style.accentColor || '#dc2626';
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-bold mb-2">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-gray-600 mb-8 text-lg">${data.description}</p>` : ''}
                        <div class="grid grid-cols-2 gap-6">
                            <div class="col-span-2">
                                ${photoPlaceholder('large', 'w-full aspect-video')}
                            </div>
                            <div>
                                ${photoPlaceholder('normal', 'aspect-square')}
                                <h3 class="mt-2 font-bold">Cherished Moment</h3>
                                <p class="text-sm text-gray-600">A beautiful memory captured forever</p>
                            </div>
                            <div>
                                ${photoPlaceholder('normal', 'aspect-square')}
                                <h3 class="mt-2 font-bold">Together Always</h3>
                                <p class="text-sm text-gray-600">Love that lasts a lifetime</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Pinterest/Vertical Masonry Layout
        if (layout === 'pinterest') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Memory Gallery'}</h2>
                        ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="grid grid-cols-2 ${gapClasses[gapSize]} auto-rows-auto">
                            ${photoPlaceholder('normal', 'aspect-[3/4]')}
                            ${photoPlaceholder('normal', 'aspect-square')}
                            ${photoPlaceholder('normal', 'aspect-[4/5]')}
                            ${photoPlaceholder('normal', 'aspect-[3/4]')}
                            ${photoPlaceholder('normal', 'aspect-square')}
                            ${photoPlaceholder('normal', 'aspect-[4/3]')}
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
