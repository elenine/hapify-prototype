// Thank You Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '💝 Thank You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Thank You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Thank you for celebrating this special moment with us..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing</label>
                <input type="text" placeholder="With love, Sarah & John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="closing" oninput="updatePreview()">
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
    render: (data, style) => {
        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-md mx-auto text-center">
                    <div class="text-6xl mb-6">💝</div>
                    <h2 class="text-3xl font-bold mb-6">${data.title || 'Thank You'}</h2>
                    ${data.message ? `
                        <p class="text-lg text-gray-700 leading-relaxed mb-8">${data.message}</p>
                    ` : ''}
                    ${data.closing ? `
                        <div class="text-xl font-semibold text-rose-600">${data.closing}</div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
