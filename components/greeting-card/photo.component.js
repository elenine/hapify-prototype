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
        </div>
    `,
    render: (data, style, globalStyles) => {
        if (!data.photo) return '';

        const sizes = {
            small: 'max-w-xs',
            medium: 'max-w-md',
            large: 'max-w-2xl',
            full: 'w-full'
        };

        const shapes = {
            rounded: 'rounded-lg',
            circle: 'rounded-full',
            square: 'rounded-none'
        };

        const sizeClass = sizes[style.size] || 'max-w-md';
        const shapeClass = shapes[style.shape] || 'rounded-lg';

        return `
            <div class="py-8 px-6">
                <div class="${sizeClass} mx-auto text-center">
                    <img src="${data.photo}" class="${shapeClass} w-full h-auto shadow-lg object-cover" alt="Birthday photo">
                    ${data.caption ? `<p class="mt-4 text-sm italic" style="color: ${globalStyles.textColor}">${data.caption}</p>` : ''}
                </div>
            </div>
        `;
    }
};
