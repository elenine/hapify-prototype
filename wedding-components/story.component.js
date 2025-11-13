// Our Story Component for Wedding Invitations

window.weddingSectionComponents = window.weddingSectionComponents || {};

window.weddingSectionComponents.story = {
    name: '💕 Our Story',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Our Love Story" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story</label>
                <textarea placeholder="Share your beautiful journey..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">${data.title || 'Our Story'}</h2>
                <p class="text-gray-600 leading-relaxed">${data.story || 'Share your beautiful journey together...'}</p>
            </div>
        </div>
    `
};
