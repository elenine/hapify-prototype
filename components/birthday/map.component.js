// Location Map Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.map = {
    name: '🗺️ Location Map',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="How to Find Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location Name</label>
                <input type="text" placeholder="Party Central" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="locationName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Party Lane&#10;Celebration City, ST 12345" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (Optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="mapLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Landmarks</label>
                <textarea placeholder="Near the big oak tree&#10;Look for the balloons!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="mapStyle" oninput="updatePreview()">
                    <option value="standard">Standard</option>
                    <option value="pinned">Pin Style</option>
                    <option value="detailed">Detailed</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const mapStyle = style.mapStyle || 'standard';

        if (mapStyle === 'pinned') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#ecfeff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-10 text-white shadow-2xl">
                            <div class="text-center mb-8">
                                <div class="text-7xl mb-4">📍</div>
                                <h2 class="text-4xl font-bold mb-3">${data.title || 'How to Find Us'}</h2>
                            </div>
                            <div class="bg-white/20 backdrop-blur rounded-xl p-8 text-lg">
                                ${data.locationName ? `<div class="text-2xl font-bold mb-4">${data.locationName}</div>` : ''}
                                ${data.address ? `<div class="mb-4 whitespace-pre-line">${data.address}</div>` : ''}
                                ${data.directions ? `<div class="mt-6 pt-6 border-t border-white/30"><div class="font-semibold mb-2">🧭 How to get there:</div><div class="whitespace-pre-line">${data.directions}</div></div>` : ''}
                                ${data.mapLink ? `<div class="mt-6"><a href="${data.mapLink}" target="_blank" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Open in Maps →</a></div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (mapStyle === 'detailed') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
                    <div class="max-w-5xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">🗺️</div>
                            <h3 class="text-3xl font-bold text-gray-900">${data.title || 'How to Find Us'}</h3>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-white rounded-xl p-8 shadow-md">
                                <div class="text-3xl mb-4">📍</div>
                                <h4 class="text-xl font-bold mb-4 text-gray-900">Address</h4>
                                ${data.locationName ? `<div class="text-lg font-semibold text-pink-600 mb-2">${data.locationName}</div>` : ''}
                                ${data.address ? `<div class="text-gray-700 whitespace-pre-line mb-4">${data.address}</div>` : ''}
                                ${data.mapLink ? `<a href="${data.mapLink}" target="_blank" class="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700 transition text-sm">📍 View Map</a>` : ''}
                            </div>
                            ${data.directions ? `
                                <div class="bg-white rounded-xl p-8 shadow-md">
                                    <div class="text-3xl mb-4">🧭</div>
                                    <h4 class="text-xl font-bold mb-4 text-gray-900">Directions</h4>
                                    <div class="text-gray-700 whitespace-pre-line">${data.directions}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📍</div>
                        <h3 class="text-3xl font-bold text-gray-900">${data.title || 'How to Find Us'}</h3>
                    </div>
                    <div class="bg-white rounded-xl p-8 shadow-md text-center">
                        ${data.locationName ? `<div class="text-2xl font-bold text-pink-600 mb-4">${data.locationName}</div>` : ''}
                        ${data.address ? `<div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-6">${data.address}</div>` : ''}
                        ${data.directions ? `<div class="border-t border-gray-200 pt-6 mb-6"><div class="font-semibold text-gray-900 mb-2">🧭 Getting There</div><div class="text-gray-700 whitespace-pre-line">${data.directions}</div></div>` : ''}
                        ${data.mapLink ? `<a href="${data.mapLink}" target="_blank" class="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">Open in Google Maps</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
