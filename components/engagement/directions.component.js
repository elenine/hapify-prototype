// Directions Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.directions = {
    name: '🗺️ Directions',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Getting There" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="venueName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Main Street, City, State 12345" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="mapsLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information</label>
                <textarea placeholder="Free parking available in lot B..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transit Info (Optional)</label>
                <textarea placeholder="Take bus #5 to Main St stop..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="transit" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea placeholder="Special instructions, landmarks, etc..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
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
    render: (data, style) => {
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto">
                    <div class="text-center text-5xl mb-4">🗺️</div>
                    <h2 class="text-2xl font-bold mb-8 text-center">${data.title || 'Getting There'}</h2>

                    ${data.venueName || data.address ? `
                        <div class="mb-6 p-4 bg-rose-50 rounded-lg">
                            ${data.venueName ? `<div class="font-bold text-gray-900 mb-2">${data.venueName}</div>` : ''}
                            ${data.address ? `<div class="text-gray-700 mb-3">${data.address}</div>` : ''}
                            ${data.mapsLink ? `
                                <a href="${data.mapsLink}" target="_blank" class="inline-block px-4 py-2 bg-rose-600 text-white rounded-lg text-sm hover:bg-rose-700 transition">
                                    📍 Open in Maps
                                </a>
                            ` : ''}
                        </div>
                    ` : ''}

                    <div class="space-y-4">
                        ${data.parking ? `
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">🅿️</div>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Parking</div>
                                        <p class="text-sm text-gray-700">${data.parking}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.transit ? `
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">🚌</div>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Public Transit</div>
                                        <p class="text-sm text-gray-700">${data.transit}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.notes ? `
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">ℹ️</div>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Additional Information</div>
                                        <p class="text-sm text-gray-700">${data.notes}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
