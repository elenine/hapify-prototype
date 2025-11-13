// Achievement Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievement = {
    name: '🏆 Achievement Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievement Title</label>
                <input type="text" placeholder="Promotion to Senior Manager" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Organization/Company</label>
                <input type="text" placeholder="Acme Corporation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="organization" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea rows="4" placeholder="Describe the achievement..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}; color: ${style.text || '#1f2937'}">
            <div class="max-w-2xl mx-auto">
                <div class="text-center mb-8">
                    <div class="text-5xl mb-4">🏆</div>
                    <h2 class="text-3xl font-bold mb-2" style="color: ${style.accent || '#a855f7'}">${data.title || 'Achievement Title'}</h2>
                    <p class="text-lg font-semibold text-gray-600">${data.organization || 'Organization'}</p>
                    ${data.date ? `<p class="text-sm text-gray-500 mt-2">${new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>` : ''}
                </div>
                <div class="bg-white rounded-lg p-6 shadow-md">
                    <p class="text-gray-700 leading-relaxed">${data.description || 'Describe the achievement and what it means...'}</p>
                </div>
            </div>
        </div>
    `
};
