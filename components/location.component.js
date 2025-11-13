// Location/Map Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.location = {
    name: '📍 Location/Map',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Visit Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" value="Visit Us" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="123 Business Street\nCity, State 12345\nCountry" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Office Hours</label>
                <textarea placeholder="Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="hours" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="mapLink" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const addressLines = (data.address || '').split('\n').filter(line => line.trim());
        const hoursLines = (data.hours || '').split('\n').filter(line => line.trim());

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}; color: ${style.text || '#1f2937'};">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold mb-8 text-center">${data.title || 'Visit Us'}</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-white rounded-lg p-6 shadow-sm">
                            <div class="flex items-start mb-4">
                                <div class="text-2xl mr-3">📍</div>
                                <div>
                                    <h3 class="font-semibold mb-2">Address</h3>
                                    ${addressLines.length > 0 ? addressLines.map(line => `<p class="text-gray-600">${line}</p>`).join('') : '<p class="text-gray-500">No address provided</p>'}
                                    ${data.mapLink ? `<a href="${data.mapLink}" target="_blank" class="inline-block mt-2 text-blue-600 hover:underline text-sm">View on Map →</a>` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg p-6 shadow-sm">
                            <div class="flex items-start">
                                <div class="text-2xl mr-3">🕒</div>
                                <div>
                                    <h3 class="font-semibold mb-2">Office Hours</h3>
                                    ${hoursLines.length > 0 ? hoursLines.map(line => `<p class="text-gray-600">${line}</p>`).join('') : '<p class="text-gray-500">No hours provided</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
