// Quotes Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quotes = {
    name: '💬 Love Quotes',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Text</label>
                <textarea placeholder="Love is not about how many days, months, or years you have been together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="quote" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author (optional)</label>
                <input type="text" placeholder="Anonymous" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="author" oninput="updatePreview()">
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
            <div class="max-w-md mx-auto">
                <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                    <div class="text-4xl text-red-500 mb-4">"</div>
                    <p class="text-lg text-gray-700 italic mb-4">${data.quote || 'Add your favorite love quote...'}</p>
                    ${data.author ? `<p class="text-sm text-gray-500">— ${data.author}</p>` : ''}
                </div>
            </div>
        </div>
    `
};
