// Love Story Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.lovestory = {
    name: '💕 Love Story',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                <input type="text" placeholder="How We Met" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Love Story</label>
                <textarea placeholder="Share your beautiful love story..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
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
                <div class="text-center mb-6">
                    <div class="text-5xl mb-3">💕</div>
                    <h2 class="text-2xl font-bold">${data.title || 'Our Love Story'}</h2>
                </div>
                <div class="p-6 bg-red-50 rounded-lg">
                    <p class="text-gray-700 leading-relaxed">${data.story || 'Share your beautiful love story here...'}</p>
                </div>
            </div>
        </div>
    `
};
