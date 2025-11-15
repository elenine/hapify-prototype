// Photo Component - Shared across multiple greeting card templates
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photo = {
    name: '📷 Photo',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="image" onchange="handleImageUpload(this)">
                <p class="text-xs text-gray-500 mt-1">Upload a photo or leave blank for default</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="caption" onchange="updatePreview()" placeholder="Add a caption to your photo">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" onchange="updatePreview()">
                    <option value="standard">Standard</option>
                    <option value="framed">Framed</option>
                    <option value="polaroid">Polaroid</option>
                    <option value="fullwidth">Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="imageStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="bgColor" value="#ffffff" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Frame Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="frameColor" value="#f59e0b" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const imageStyle = style.imageStyle || 'rounded';
        const layout = style.layout || 'standard';
        const bgColor = style.bgColor || '#ffffff';
        const frameColor = style.frameColor || '#f59e0b';
        const shadow = style.shadow || 'medium';
        const caption = data.caption || '';
        const image = data.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60"%3E📷%3C/text%3E%3C/svg%3E';

        const borderRadius = imageStyle === 'circle' ? '50%' : imageStyle === 'rounded' ? '12px' : '0';
        const shadows = {
            none: '',
            small: 'shadow',
            medium: 'shadow-lg',
            large: 'shadow-2xl'
        };
        const shadowClass = shadows[shadow] || 'shadow-lg';

        if (layout === 'framed') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto p-4 ${shadowClass}" style="background-color: ${frameColor}; border-radius: 16px;">
                        <img src="${image}" alt="Photo" class="w-full h-64 object-cover" style="border-radius: ${borderRadius};">
                        ${caption ? `<p class="text-center text-white mt-4 font-medium">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto bg-white p-4 pb-12 ${shadowClass}" style="border-radius: 8px;">
                        <img src="${image}" alt="Photo" class="w-full h-64 object-cover mb-3">
                        ${caption ? `<p class="text-center text-gray-700 font-handwriting text-lg">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'fullwidth') {
            return `
                <div style="background-color: ${bgColor};">
                    <img src="${image}" alt="Photo" class="w-full h-80 object-cover">
                    ${caption ? `<p class="text-center text-gray-600 p-4">${caption}</p>` : ''}
                </div>
            `;
        } else {
            // Standard layout
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <img src="${image}" alt="Photo" class="w-full h-64 object-cover ${shadowClass}" style="border-radius: ${borderRadius};">
                        ${caption ? `<p class="text-center text-gray-600 mt-4">${caption}</p>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
