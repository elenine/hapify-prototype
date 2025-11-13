// Location Map Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.map = {
    name: '🗺️ Location Map',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location Name</label>
                <input type="text" placeholder="Venue Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps URL</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="url" oninput="updatePreview()">
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.name || 'Location'}</h2>
            <div class="max-w-md mx-auto text-center">
                <div class="bg-gray-100 rounded-lg p-12">
                    <div class="text-5xl mb-4">🗺️</div>
                    <p class="text-gray-500 text-sm">Map will appear here</p>
                </div>
                ${data.url ? `<a href="${data.url}" target="_blank" class="inline-block mt-4 text-purple-600 font-medium hover:underline">View on Google Maps →</a>` : ''}
            </div>
        </div>
    `
};
