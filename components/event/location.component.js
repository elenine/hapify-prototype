// Location Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.location = {
    name: '📍 Location',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Convention Center" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="123 Main Street, City, State, ZIP" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Parking Info</label>
                <textarea placeholder="Parking available..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
            <h2 class="text-2xl font-bold text-center mb-8">Location</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.venue ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">📍</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Venue</div>
                        <div class="font-medium">${data.venue}</div>
                    </div>
                </div>` : ''}
                ${data.address ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">🗺️</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Address</div>
                        <div class="text-sm">${data.address}</div>
                    </div>
                </div>` : ''}
                ${data.directions ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">🚗</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Directions</div>
                        <div class="text-sm">${data.directions}</div>
                    </div>
                </div>` : ''}
            </div>
        </div>
    `
};
