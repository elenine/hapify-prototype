// Photo component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photo = {
    name: '📸 Photo',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
                <input type="file" accept="image/*" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="image" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="caption" placeholder="The moment of victory!" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="full-width">Full Width</option>
                    <option value="framed">Framed</option>
                    <option value="polaroid">Polaroid</option>
                    <option value="circular">Circular</option>
                    <option value="tilted">Tilted</option>
                    <option value="collage-single">Collage Style</option>
                    <option value="gradient-border">Gradient Border</option>
                    <option value="shadow-pop">Shadow Pop</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption Position</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="captionPos" onchange="updatePreview()">
                    <option value="bottom">Bottom</option>
                    <option value="top">Top</option>
                    <option value="overlay">Overlay</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const image = data.image || '';
        const caption = data.caption || '';
        const layout = style.layout || 'full-width';
        const size = style.size || 'medium';
        const captionPos = style.captionPos || 'bottom';

        const sizeClass = size === 'small' ? 'max-w-xs' : size === 'large' ? 'max-w-2xl' : 'max-w-lg';

        const imagePlaceholder = `
            <div class="w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-4xl">
                📸
            </div>
        `;

        const imageHTML = image ? `<img src="${image}" alt="Photo" class="w-full h-full object-cover">` : imagePlaceholder;

        if (layout === 'full-width') {
            return `
                <div class="relative">
                    ${captionPos === 'top' && caption ? `<div class="p-4 text-center bg-white"><p class="text-lg font-medium" style="color: ${globalStyles.textColor};">${caption}</p></div>` : ''}
                    <div class="relative">
                        ${imageHTML}
                        ${captionPos === 'overlay' && caption ? `<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4"><p class="text-lg font-medium text-white text-center">${caption}</p></div>` : ''}
                    </div>
                    ${captionPos === 'bottom' && caption ? `<div class="p-4 text-center bg-white"><p class="text-lg font-medium" style="color: ${globalStyles.textColor};">${caption}</p></div>` : ''}
                </div>
            `;
        } else if (layout === 'framed') {
            return `
                <div class="p-6">
                    <div class="${sizeClass} mx-auto">
                        ${captionPos === 'top' && caption ? `<p class="text-lg font-medium mb-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                        <div class="border-8 rounded-lg overflow-hidden shadow-2xl" style="border-color: ${globalStyles.primaryColor};">
                            <div class="relative">
                                ${imageHTML}
                                ${captionPos === 'overlay' && caption ? `<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4"><p class="text-lg font-medium text-white text-center">${caption}</p></div>` : ''}
                            </div>
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-lg font-medium mt-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="p-6">
                    <div class="${sizeClass} mx-auto bg-white p-4 shadow-2xl rounded-sm transform rotate-2">
                        ${captionPos === 'top' && caption ? `<p class="text-base font-medium mb-3 text-center" style="color: ${globalStyles.textColor};">${caption}</p>` : ''}
                        <div class="relative">
                            ${imageHTML}
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-base font-medium mt-3 text-center" style="color: ${globalStyles.textColor};">${caption}</p>` : ''}
                        ${!caption && captionPos === 'bottom' ? `<div class="h-12"></div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'circular') {
            return `
                <div class="p-6">
                    <div class="${sizeClass} mx-auto text-center">
                        ${captionPos === 'top' && caption ? `<p class="text-lg font-medium mb-4" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                        <div class="relative inline-block">
                            <div class="rounded-full overflow-hidden shadow-2xl aspect-square" style="border: 6px solid ${globalStyles.primaryColor};">
                                ${imageHTML}
                            </div>
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-lg font-medium mt-4" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'tilted') {
            return `
                <div class="p-6 overflow-hidden">
                    <div class="${sizeClass} mx-auto">
                        ${captionPos === 'top' && caption ? `<p class="text-lg font-medium mb-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                        <div class="transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <div class="relative">
                                    ${imageHTML}
                                    ${captionPos === 'overlay' && caption ? `<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4"><p class="text-lg font-medium text-white text-center">${caption}</p></div>` : ''}
                                </div>
                            </div>
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-lg font-medium mt-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'collage-single') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15, ${globalStyles.secondaryColor}15);">
                    <div class="${sizeClass} mx-auto">
                        ${captionPos === 'top' && caption ? `<p class="text-lg font-medium mb-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                        <div class="relative">
                            <div class="absolute -top-2 -left-2 w-full h-full rounded-lg" style="background: ${globalStyles.secondaryColor}; opacity: 0.3;"></div>
                            <div class="relative rounded-lg overflow-hidden shadow-xl">
                                ${imageHTML}
                                ${captionPos === 'overlay' && caption ? `<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4"><p class="text-lg font-medium text-white text-center">${caption}</p></div>` : ''}
                            </div>
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-lg font-medium mt-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'gradient-border') {
            return `
                <div class="p-6">
                    <div class="${sizeClass} mx-auto">
                        ${captionPos === 'top' && caption ? `<p class="text-lg font-medium mb-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                        <div class="p-1 rounded-2xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="bg-white rounded-xl overflow-hidden">
                                <div class="relative">
                                    ${imageHTML}
                                    ${captionPos === 'overlay' && caption ? `<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4"><p class="text-lg font-medium text-white text-center">${caption}</p></div>` : ''}
                                </div>
                            </div>
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-lg font-medium mt-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'shadow-pop') {
            return `
                <div class="p-6">
                    <div class="${sizeClass} mx-auto">
                        ${captionPos === 'top' && caption ? `<p class="text-lg font-medium mb-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                        <div class="relative">
                            <div class="absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4" style="background: ${globalStyles.primaryColor}; opacity: 0.2;"></div>
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                                ${imageHTML}
                                ${captionPos === 'overlay' && caption ? `<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4"><p class="text-lg font-medium text-white text-center">${caption}</p></div>` : ''}
                            </div>
                        </div>
                        ${captionPos === 'bottom' && caption ? `<p class="text-lg font-medium mt-4 text-center" style="color: ${globalStyles.primaryColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <div class="${sizeClass} mx-auto rounded-lg overflow-hidden shadow-lg">
                ${imageHTML}
            </div>
            ${caption ? `<p class="text-center mt-3" style="color: ${globalStyles.textColor};">${caption}</p>` : ''}
        </div>`;
    }
};
