// Accommodation Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodation = {
    name: '🏨 Accommodation',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Where to Stay" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Where to Stay" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="We've reserved room blocks at the following hotels..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Hotel 1</h4>
                <div class="space-y-3">
                    <input type="text" placeholder="Hotel Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel1name" oninput="updatePreview()">
                    <input type="text" placeholder="Address" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel1address" oninput="updatePreview()">
                    <input type="text" placeholder="Phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel1phone" oninput="updatePreview()">
                    <input type="url" placeholder="Website URL" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel1url" oninput="updatePreview()">
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Hotel 2 (Optional)</h4>
                <div class="space-y-3">
                    <input type="text" placeholder="Hotel Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel2name" oninput="updatePreview()">
                    <input type="text" placeholder="Address" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel2address" oninput="updatePreview()">
                    <input type="text" placeholder="Phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel2phone" oninput="updatePreview()">
                    <input type="url" placeholder="Website URL" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="hotel2url" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const hotels = [];

        if (data.hotel1name) {
            hotels.push({
                name: data.hotel1name,
                address: data.hotel1address,
                phone: data.hotel1phone,
                url: data.hotel1url
            });
        }

        if (data.hotel2name) {
            hotels.push({
                name: data.hotel2name,
                address: data.hotel2address,
                phone: data.hotel2phone,
                url: data.hotel2url
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0f9ff'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🏨</div>
                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Where to Stay'}</h2>
                        ${data.description ? `<p class="text-gray-600">${data.description}</p>` : ''}
                    </div>
                    <div class="space-y-4">
                        ${hotels.map(hotel => `
                            <div class="p-6 rounded-lg shadow-md" style="background: ${style.cardBg || '#ffffff'}">
                                <h3 class="font-bold text-xl mb-3 text-purple-700">${hotel.name}</h3>
                                ${hotel.address ? `<p class="text-gray-600 text-sm mb-2">📍 ${hotel.address}</p>` : ''}
                                ${hotel.phone ? `<p class="text-gray-600 text-sm mb-2">📞 ${hotel.phone}</p>` : ''}
                                ${hotel.url ? `<a href="${hotel.url}" target="_blank" class="inline-block mt-3 text-purple-600 font-medium hover:underline">Visit Website →</a>` : ''}
                            </div>
                        `).join('')}
                        ${hotels.length === 0 ? `
                            <p class="text-center text-gray-500">Add hotel information to display here</p>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
