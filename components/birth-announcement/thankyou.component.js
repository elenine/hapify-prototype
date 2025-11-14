// Thank You Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '🙏 Thank You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Title</label>
                <input type="text" placeholder="Thank You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you for all the love and support..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#f0fdfa'}">
            <div class="max-w-md mx-auto">
                <div class="text-5xl mb-4">🙏</div>
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Thank You'}</h2>
                <p class="text-gray-700 leading-relaxed">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
            </div>
        </div>
    `
};
