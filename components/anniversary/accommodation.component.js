// Accommodation Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodation = {
    name: '🏨 Accommodation',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
                <input type="text" placeholder="Grand Hotel & Suites" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="hotelname" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="123 Hotel Street&#10;City, State 12345" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url" placeholder="https://hotel.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="website" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Group Code/Special Rate</label>
                <input type="text" placeholder="SMITH2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="code" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea placeholder="Mention the anniversary celebration for special rates..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
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
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="text-3xl mb-3 text-center">🏨</div>
                    ${data.hotelname ? `<h3 class="text-xl font-bold text-center mb-4">${data.hotelname}</h3>` : ''}
                    ${data.address ? `<p class="text-sm text-gray-600 mb-3 whitespace-pre-line">${data.address}</p>` : ''}
                    ${data.phone ? `<p class="text-sm text-gray-700 mb-2"><strong>📞</strong> <a href="tel:${data.phone}" class="text-red-600 hover:underline">${data.phone}</a></p>` : ''}
                    ${data.code ? `
                        <div class="mt-4 p-3 bg-red-50 rounded-lg">
                            <p class="text-sm"><strong>🎟️ Group Code:</strong> <span class="font-mono font-bold text-red-600">${data.code}</span></p>
                        </div>
                    ` : ''}
                    ${data.info ? `<p class="text-sm text-gray-600 mt-3">${data.info}</p>` : ''}
                    ${data.website ? `
                        <div class="text-center mt-4">
                            <a href="${data.website}" target="_blank" class="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition text-sm">
                                Book Now
                            </a>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
