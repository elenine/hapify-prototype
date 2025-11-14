// Gifts Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Preferences',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Gift Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Message</label>
                <textarea placeholder="Your presence is the greatest gift, but if you wish to honor us..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1 Name</label>
                <input type="text" placeholder="Amazon Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry1name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1 URL</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry1url" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 Name (optional)</label>
                <input type="text" placeholder="Target Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry2name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 URL (optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry2url" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
            <div class="max-w-md mx-auto text-center">
                <div class="text-5xl mb-4">🎁</div>
                <h2 class="text-2xl font-bold mb-6">${data.title || 'Gift Registry'}</h2>
                ${data.message ? `<p class="text-gray-700 mb-8 px-4">${data.message}</p>` : ''}
                <div class="space-y-3">
                    ${data.registry1name && data.registry1url ? `
                        <a href="${data.registry1url}" target="_blank" class="block bg-white border-2 border-red-500 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-semibold">
                            ${data.registry1name}
                        </a>
                    ` : ''}
                    ${data.registry2name && data.registry2url ? `
                        <a href="${data.registry2url}" target="_blank" class="block bg-white border-2 border-red-500 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-semibold">
                            ${data.registry2name}
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
