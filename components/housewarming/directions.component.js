// Directions & Parking Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.directions = {
    name: '🗺️ Directions & Parking',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Driving Directions</label>
                <textarea placeholder="From highway, take exit 5..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Info</label>
                <textarea placeholder="Street parking available, driveway..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff7ed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fff7ed'}">
            <h2 class="text-2xl font-bold text-center mb-8">Directions & Parking</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.directions ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">🗺️</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Directions</div>
                        <div class="text-sm">${data.directions}</div>
                    </div>
                </div>` : ''}
                ${data.parking ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
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
