// Directions Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.directions = {
    name: '📍 Directions',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Venue or Home Address" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="Street, City, State, ZIP" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Info</label>
                <textarea placeholder="Where to park..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">Location & Directions</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.venue ? `
                <div class="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div class="text-2xl">📍</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Venue</div>
                        <div class="font-medium">${data.venue}</div>
                    </div>
                </div>` : ''}
                ${data.address ? `
                <div class="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div class="text-2xl">🗺️</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Address</div>
                        <div class="text-sm">${data.address}</div>
                    </div>
                </div>` : ''}
                ${data.parking ? `
                <div class="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div class="text-2xl">🚗</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Parking</div>
                        <div class="text-sm">${data.parking}</div>
                    </div>
                </div>` : ''}
            </div>
        </div>
    `
};
