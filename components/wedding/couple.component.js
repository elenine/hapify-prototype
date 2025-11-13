// Couple Info Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.couple = {
    name: '💑 Couple Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bride Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bride" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Groom Name</label>
                <input type="text" placeholder="John Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="groom" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">About</label>
                <textarea placeholder="Tell your story..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="about" oninput="updatePreview()"></textarea>
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
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">The Happy Couple</h2>
                <div class="space-y-4">
                    <div class="p-4 bg-purple-50 rounded-lg">
                        <div class="text-3xl mb-2">👰</div>
                        <div class="font-semibold">${data.bride || 'Bride Name'}</div>
                    </div>
                    <div class="text-2xl">💕</div>
                    <div class="p-4 bg-purple-50 rounded-lg">
                        <div class="text-3xl mb-2">🤵</div>
                        <div class="font-semibold">${data.groom || 'Groom Name'}</div>
                    </div>
                </div>
                ${data.about ? `<p class="mt-6 text-gray-600 text-sm leading-relaxed">${data.about}</p>` : ''}
            </div>
        </div>
    `
};
