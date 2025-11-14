// Accommodations Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodations = {
    name: '🏨 Accommodations',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Where to Stay" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="We've reserved room blocks at the following hotels..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Hotels</label>
                    <button type="button" onclick="addAccommodation('${sectionId}')" class="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition">
                        + Add Hotel
                    </button>
                </div>
                <div id="accommodations-${sectionId}" class="space-y-3">
                    <!-- Accommodations will be added here -->
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const accommodations = [];

        // Collect accommodation items
        let i = 0;
        while (data[`hotel${i}Name`]) {
            accommodations.push({
                name: data[`hotel${i}Name`],
                address: data[`hotel${i}Address`] || '',
                phone: data[`hotel${i}Phone`] || '',
                website: data[`hotel${i}Website`] || '',
                code: data[`hotel${i}Code`] || ''
            });
            i++;
        }

        const hotelsHtml = accommodations.length > 0 ? accommodations.map(hotel => `
            <div class="p-4 bg-white rounded-lg border border-rose-100">
                <div class="font-bold text-gray-900 mb-2">${hotel.name}</div>
                ${hotel.address ? `<div class="text-sm text-gray-600 mb-1">📍 ${hotel.address}</div>` : ''}
                ${hotel.phone ? `<div class="text-sm text-gray-600 mb-1">📞 ${hotel.phone}</div>` : ''}
                ${hotel.code ? `<div class="text-sm text-rose-600 font-semibold mb-2">Group Code: ${hotel.code}</div>` : ''}
                ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="inline-block mt-2 px-4 py-2 bg-rose-600 text-white rounded-lg text-sm hover:bg-rose-700 transition">Book Now</a>` : ''}
            </div>
        `).join('') : `
            <div class="text-center py-8 text-gray-500">
                <div class="text-4xl mb-2">🏨</div>
                <p>Add hotel recommendations for your guests</p>
            </div>
        `;

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-md mx-auto">
                    <div class="text-center text-5xl mb-4">🏨</div>
                    <h2 class="text-2xl font-bold mb-4 text-center">${data.title || 'Where to Stay'}</h2>
                    ${data.intro ? `<p class="text-center text-gray-600 mb-8">${data.intro}</p>` : ''}
                    <div class="space-y-4">
                        ${hotelsHtml}
                    </div>
                </div>
            </div>
        `;
    }
};

// Helper function to add accommodation
window.addAccommodation = function(sectionId) {
    const container = document.getElementById(`accommodations-${sectionId}`);
    const itemCount = container.children.length;

    const itemHtml = `
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50" data-hotel-index="${itemCount}">
            <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-700">Hotel ${itemCount + 1}</span>
                <button type="button" onclick="this.closest('[data-hotel-index]').remove(); updatePreview();" class="text-red-600 hover:text-red-800 text-sm">Remove</button>
            </div>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Hotel Name</label>
                    <input type="text" placeholder="Grand Hotel" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Name" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Address</label>
                    <input type="text" placeholder="123 Main St, City, State" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Address" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" placeholder="(555) 123-4567" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Phone" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Website/Booking URL</label>
                    <input type="url" placeholder="https://..." class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Website" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Group Code (Optional)</label>
                    <input type="text" placeholder="WEDDING2024" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Code" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', itemHtml);
    updatePreview();
};
