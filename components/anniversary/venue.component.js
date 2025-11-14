// Venue Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.venue = {
    name: '📍 Venue Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Location & Venue" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="venuename" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Celebration Ave&#10;City, State 12345" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="maplink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Info</label>
                <textarea placeholder="Free parking available..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
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
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue Details'}</h2>
                <div class="bg-red-50 p-6 rounded-lg">
                    <div class="text-center text-4xl mb-4">📍</div>
                    ${data.venuename ? `<h3 class="text-xl font-bold text-center mb-4">${data.venuename}</h3>` : ''}
                    ${data.address ? `<p class="text-gray-700 text-center mb-4 whitespace-pre-line">${data.address}</p>` : ''}
                    ${data.parking ? `
                        <div class="mt-4 p-3 bg-white rounded-lg">
                            <p class="text-sm text-gray-600"><strong>🅿️ Parking:</strong> ${data.parking}</p>
                        </div>
                    ` : ''}
                    ${data.maplink ? `
                        <div class="text-center mt-6">
                            <a href="${data.maplink}" target="_blank" class="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
                                🗺️ Open in Maps
                            </a>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
