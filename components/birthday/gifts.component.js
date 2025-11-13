// Gift Registry Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Registry',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Title</label>
                <input type="text" placeholder="Gift Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link (Optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your presence is the best gift..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
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
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fdf2f8'}">
            <div class="max-w-md mx-auto">
                <div class="text-5xl mb-4">🎁</div>
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                <p class="text-gray-600 mb-6">${data.message || 'Your presence is the best gift, but if you wish to give something...'}</p>
                ${data.link ? `<a href="${data.link}" target="_blank" class="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">View Registry</a>` : ''}
            </div>
        </div>
    `
};
