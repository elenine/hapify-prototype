// Newsletter Subscription Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.newsletter = {
    name: '📧 Newsletter',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input type="text" placeholder="Subscribe to Our Newsletter" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="heading" value="Subscribe to Our Newsletter" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Get the latest updates and news delivered to your inbox" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                <input type="text" placeholder="Subscribe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="buttonText" value="Subscribe" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#1e40af" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="button" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#2563eb'}; color: ${style.text || '#ffffff'};">
            <div class="max-w-2xl mx-auto text-center">
                <div class="text-4xl mb-4">📧</div>
                <h2 class="text-3xl font-bold mb-3">${data.heading || 'Subscribe to Our Newsletter'}</h2>
                <p class="mb-6 opacity-90">${data.description || 'Get the latest updates and news delivered to your inbox'}</p>
                <div class="flex gap-2 max-w-md mx-auto">
                    <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg" style="background: rgba(255,255,255,0.9);">
                    <button class="px-6 py-3 rounded-lg font-semibold" style="background: ${style.button || '#1e40af'}; color: white;">
                        ${data.buttonText || 'Subscribe'}
                    </button>
                </div>
            </div>
        </div>
    `
};
