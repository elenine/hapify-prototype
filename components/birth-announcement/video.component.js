// Video Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.video = {
    name: '🎥 Video',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
                <input type="text" placeholder="Meet Our Little One" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Video URL (YouTube, Vimeo, etc.)</label>
                <input type="url" placeholder="https://www.youtube.com/watch?v=..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="videoUrl" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Paste the full URL of your video</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Watch our precious moments..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
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
            <div class="max-w-md mx-auto">
                <div class="text-center text-4xl mb-4">🎥</div>
                <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Video'}</h2>
                ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                <div class="bg-teal-100 rounded-lg p-8 text-center">
                    ${data.videoUrl ? `
                        <div class="mb-3">
                            <div class="text-5xl mb-2">▶️</div>
                            <a href="${data.videoUrl}" target="_blank" class="text-teal-600 hover:text-teal-700 underline text-sm">Watch Video</a>
                        </div>
                    ` : `
                        <div class="text-4xl mb-2">🎬</div>
                        <p class="text-sm text-gray-500">Video will appear here</p>
                    `}
                </div>
            </div>
        </div>
    `
};
