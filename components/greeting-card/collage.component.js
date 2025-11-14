// Photo Collage Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.collage = {
    name: '🖼️ Photo Collage',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photos (Add 4-6 for best results)</label>
                <p class="text-xs text-gray-500 mb-2">Upload photos for the collage</p>
                <div data-items-container="collagePhoto" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'collagePhoto')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Photo
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fafafa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const photos = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="collagePhoto"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const photoInput = item.querySelector('[data-field^="photo_"]');
                const photo = photoInput?.dataset.imageData || '';
                if (photo) photos.push(photo);
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fafafa'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-4xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                    ${photos.length > 0 ? `
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                            ${photos.map((photo, index) => `
                                <div class="aspect-square overflow-hidden rounded-lg shadow-md" style="border: 4px solid ${style.border || '#ffffff'}; transform: rotate(${[-2, 2, -1, 1, -2, 2][index % 6]}deg)">
                                    <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    ` : '<p class="text-center text-gray-500">Add photos in the editor</p>'}
                </div>
            </div>
        `;
    }
};
