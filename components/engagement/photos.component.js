// Photo Gallery Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photos = {
    name: '📸 Photo Gallery',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="A glimpse of our journey together..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
            ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
            <div class="max-w-md mx-auto grid grid-cols-3 gap-3">
                <div class="aspect-square bg-rose-100 rounded-lg flex items-center justify-center text-3xl">📸</div>
                <div class="aspect-square bg-rose-100 rounded-lg flex items-center justify-center text-3xl">📸</div>
                <div class="aspect-square bg-rose-100 rounded-lg flex items-center justify-center text-3xl">📸</div>
            </div>
        </div>
    `
};
