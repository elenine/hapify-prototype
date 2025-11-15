// Parking Component for Event

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.parking = {
    name: '🅿️ Parking & Transportation',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Parking & Transportation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" value="Parking & Transportation" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Here's everything you need to know about getting to the event..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Locations</label>
                <textarea placeholder="• Main parking lot (free)&#10;• Street parking available&#10;• Parking garage at 123 Main St ($10)" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="parkingLocations" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transportation</label>
                <textarea placeholder="Bus routes: 5, 12, 23&#10;Metro: Green Line to Central Station&#10;Bike racks available" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="publicTransit" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ride-Share Pickup Point</label>
                <input type="text" placeholder="Drop-off area at main entrance" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="rideshare" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea placeholder="Valet service available, accessible parking near entrance, etc." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
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
    render: (data, style) => {
        const bgColor = style.bg || '#f0fdf4';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🅿️</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Parking & Transportation'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    <div class="space-y-6">
                        ${data.parkingLocations ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">🚗</div>
                                    <h3 class="font-semibold text-lg text-green-700">Parking Locations</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.parkingLocations}</div>
                            </div>
                        ` : ''}

                        ${data.publicTransit ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">🚌</div>
                                    <h3 class="font-semibold text-lg text-green-700">Public Transportation</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.publicTransit}</div>
                            </div>
                        ` : ''}

                        ${data.rideshare ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">🚕</div>
                                    <div>
                                        <h3 class="font-semibold text-lg text-green-700 mb-1">Ride-Share Pickup</h3>
                                        <p class="text-gray-700">${data.rideshare}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.notes ? `
                            <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                <p class="text-sm text-gray-700">${data.notes}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
