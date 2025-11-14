// Milestone Info Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestone = {
    name: '🎊 Milestone Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Years Together</label>
                <input type="number" placeholder="25" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="years" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="weddingdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone Description</label>
                <textarea placeholder="Celebrating a quarter century of love..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
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
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">Milestone</h2>
                <div class="p-8 bg-red-50 rounded-lg">
                    <div class="text-6xl font-bold text-red-600 mb-2">${data.years || '0'}</div>
                    <div class="text-xl font-semibold mb-4">Years Together</div>
                    ${data.weddingdate ? `<div class="text-sm text-gray-600 mb-4">Since ${new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>` : ''}
                    ${data.description ? `<p class="text-gray-700 mt-4">${data.description}</p>` : ''}
                </div>
            </div>
        </div>
    `
};
