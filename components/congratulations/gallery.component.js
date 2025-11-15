// Gallery component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '🖼️ Photo Gallery',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Celebrating Your Journey" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="description" rows="2" placeholder="A collection of memorable moments..." onchange="updatePreview()"></textarea>
            </div>
            <p class="text-sm text-gray-600 italic">Note: Gallery displays placeholder images. Upload functionality would be added in production.</p>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid</option>
                    <option value="masonry">Masonry</option>
                    <option value="carousel">Carousel</option>
                    <option value="collage">Collage</option>
                    <option value="spotlight">Spotlight</option>
                    <option value="modern">Modern Grid</option>
                    <option value="polaroid">Polaroid</option>
                    <option value="framed">Framed</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number of Photos</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="photoCount" onchange="updatePreview()">
                    <option value="3">3 Photos</option>
                    <option value="4">4 Photos</option>
                    <option value="6">6 Photos</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Celebrating Your Journey';
        const description = data.description || '';
        const layout = style.layout || 'grid';
        const photoCount = parseInt(style.photoCount || '4');

        const photoPlaceholder = (idx) => `
            <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                <div class="text-center">
                    <div class="text-4xl mb-2">📸</div>
                    <div class="text-sm">Photo ${idx + 1}</div>
                </div>
            </div>
        `;

        if (layout === 'grid') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid grid-cols-2 md:grid-cols-${photoCount === 6 ? '3' : '2'} gap-4">
                            ${Array.from({length: photoCount}, (_, i) => `
                                <div class="aspect-square rounded-xl overflow-hidden shadow-lg">
                                    ${photoPlaceholder(i)}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'masonry') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid grid-cols-2 gap-4">
                            ${Array.from({length: photoCount}, (_, i) => `
                                <div class="${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'} rounded-xl overflow-hidden shadow-lg">
                                    ${photoPlaceholder(i)}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'carousel') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-3xl mx-auto py-8">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            ${photoPlaceholder(0)}
                            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                ${Array.from({length: photoCount}, (_, i) => `
                                    <div class="w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-white opacity-50'}"></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'collage') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="relative bg-white p-6 rounded-3xl shadow-2xl">
                            <div class="grid grid-cols-2 gap-3">
                                ${Array.from({length: photoCount}, (_, i) => `
                                    <div class="aspect-square rounded-lg overflow-hidden shadow-md transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}">
                                        ${photoPlaceholder(i)}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'spotlight') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 aspect-square rounded-2xl overflow-hidden shadow-xl">
                                ${photoPlaceholder(0)}
                            </div>
                            <div class="space-y-4">
                                ${Array.from({length: photoCount - 1}, (_, i) => `
                                    <div class="aspect-square rounded-xl overflow-hidden shadow-lg">
                                        ${photoPlaceholder(i + 1)}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid grid-cols-2 gap-2">
                            ${Array.from({length: photoCount}, (_, i) => `
                                <div class="p-1 rounded-xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                                    <div class="aspect-square rounded-lg overflow-hidden">
                                        ${photoPlaceholder(i)}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                            ${Array.from({length: photoCount}, (_, i) => `
                                <div class="bg-white p-4 shadow-2xl rounded-sm transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}">
                                    <div class="aspect-square mb-4">
                                        ${photoPlaceholder(i)}
                                    </div>
                                    <div class="h-12"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'framed') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid grid-cols-2 gap-6">
                            ${Array.from({length: photoCount}, (_, i) => `
                                <div class="border-8 rounded-xl overflow-hidden shadow-xl" style="border-color: ${i % 2 === 0 ? globalStyles.primaryColor : globalStyles.secondaryColor};">
                                    <div class="aspect-square">
                                        ${photoPlaceholder(i)}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h3>
            <div class="grid grid-cols-2 gap-4">
                ${Array.from({length: photoCount}, (_, i) => `
                    <div class="aspect-square rounded-lg overflow-hidden">
                        ${photoPlaceholder(i)}
                    </div>
                `).join('')}
            </div>
        </div>`;
    }
};
