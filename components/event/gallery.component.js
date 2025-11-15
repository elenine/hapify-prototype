// Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '🖼️ Photo Gallery',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Photo Gallery" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Captions (one per line)</label>
                <textarea placeholder="Opening Ceremony&#10;Guest Speakers&#10;Networking Session&#10;Awards Ceremony" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="captions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="grid-2">Grid - 2 Columns</option>
                    <option value="grid-3">Grid - 3 Columns</option>
                    <option value="masonry">Masonry - Pinterest style</option>
                    <option value="carousel">Carousel - Scrollable</option>
                    <option value="featured">Featured - Large + Small</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="imageShape" onchange="updatePreview()">
                    <option value="rounded">Rounded Corners</option>
                    <option value="circle">Circular</option>
                    <option value="square">Square</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Show Captions</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="showCaptions" onchange="updatePreview()">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="hover">On Hover</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'grid-2';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#059669';
        const imageShape = style.imageShape || 'rounded';
        const shadow = style.shadow || 'none';
        const showCaptions = style.showCaptions || 'yes';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const shapeMap = {
            rounded: 'rounded-lg',
            circle: 'rounded-full aspect-square',
            square: 'rounded-none'
        };

        const captions = data.captions ? data.captions.split('\n').filter(c => c.trim()) : [];

        const renderGallery = () => {
            switch (layoutStyle) {
                case 'grid-2':
                    return `
                        <div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                            ${captions.map(caption => `
                                <div class="relative ${shadowMap[shadow]} overflow-hidden ${shapeMap[imageShape]}">
                                    <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <span class="text-4xl">📷</span>
                                    </div>
                                    ${showCaptions === 'yes' ? `<div class="p-2 text-xs text-center" style="background: ${accentColor}20; color: ${accentColor};">${caption}</div>` : ''}
                                    ${showCaptions === 'hover' ? `<div class="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-sm p-2 text-center">${caption}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'grid-3':
                    return `
                        <div class="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
                            ${captions.map(caption => `
                                <div class="relative ${shadowMap[shadow]} overflow-hidden ${shapeMap[imageShape]}">
                                    <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <span class="text-2xl">📷</span>
                                    </div>
                                    ${showCaptions === 'yes' ? `<div class="p-1 text-xs text-center" style="background: ${accentColor}20; color: ${accentColor};">${caption}</div>` : ''}
                                    ${showCaptions === 'hover' ? `<div class="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-xs p-2 text-center">${caption}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'masonry':
                    return `
                        <div class="columns-2 gap-4 max-w-2xl mx-auto">
                            ${captions.map((caption, index) => {
                                const heights = ['h-40', 'h-48', 'h-56', 'h-64'];
                                const height = heights[index % heights.length];
                                return `
                                    <div class="break-inside-avoid mb-4">
                                        <div class="relative ${shadowMap[shadow]} overflow-hidden ${shapeMap[imageShape]}">
                                            <div class="${height} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                                <span class="text-4xl">📷</span>
                                            </div>
                                            ${showCaptions === 'yes' ? `<div class="p-2 text-xs" style="background: ${accentColor}20; color: ${accentColor};">${caption}</div>` : ''}
                                            ${showCaptions === 'hover' ? `<div class="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-sm p-2 text-center">${caption}</div>` : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;

                case 'carousel':
                    return `
                        <div class="flex gap-4 overflow-x-auto pb-4 max-w-full px-4" style="scroll-snap-type: x mandatory;">
                            ${captions.map(caption => `
                                <div class="flex-shrink-0 w-64" style="scroll-snap-align: start;">
                                    <div class="relative ${shadowMap[shadow]} overflow-hidden ${shapeMap[imageShape]}">
                                        <div class="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            <span class="text-5xl">📷</span>
                                        </div>
                                        ${showCaptions === 'yes' ? `<div class="p-3 text-sm text-center" style="background: ${accentColor}20; color: ${accentColor};">${caption}</div>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'featured':
                    return `
                        <div class="max-w-3xl mx-auto space-y-4">
                            ${captions.length > 0 ? `
                                <div class="relative ${shadowMap[shadow]} overflow-hidden ${shapeMap[imageShape]}">
                                    <div class="h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <span class="text-6xl">📷</span>
                                    </div>
                                    ${showCaptions === 'yes' ? `<div class="p-4 text-center font-semibold" style="background: ${accentColor}20; color: ${accentColor};">${captions[0]}</div>` : ''}
                                </div>
                            ` : ''}
                            <div class="grid grid-cols-3 gap-3">
                                ${captions.slice(1, 4).map(caption => `
                                    <div class="relative ${shadowMap[shadow]} overflow-hidden ${shapeMap[imageShape]}">
                                        <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            <span class="text-2xl">📷</span>
                                        </div>
                                        ${showCaptions === 'yes' ? `<div class="p-1 text-xs text-center" style="background: ${accentColor}20; color: ${accentColor};">${caption}</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;

                default:
                    return '<p class="text-center text-gray-500">Add photo captions</p>';
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Photo Gallery'}</h2>
                ${captions.length > 0 ? renderGallery() : '<p class="text-center text-gray-500">Add photo captions to display gallery</p>'}
            </div>
        `;
    }
};
