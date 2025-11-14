// Venue Details Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.venue = {
    name: '📍 Venue Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="University Auditorium" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="venueName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 University Avenue, College Town, CA 90210" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                <input type="tel" placeholder="(555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (Optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="mapLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information (Optional)</label>
                <textarea placeholder="Visitor parking available in Lot A. Handicapped parking spaces available near the main entrance." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Notes (Optional)</label>
                <textarea placeholder="Enter through the main entrance. Seating is first-come, first-served." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const accentColor = style.accent || '#6366f1';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📍</div>
                        <h2 class="text-2xl font-bold">Venue Details</h2>
                    </div>

                    <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md">
                        <div class="space-y-4">
                            ${data.venueName ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl flex-shrink-0">🏛️</div>
                                    <div>
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Venue</div>
                                        <div class="font-bold text-lg" style="color: ${accentColor}">${data.venueName}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.address ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl flex-shrink-0">📮</div>
                                    <div>
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Address</div>
                                        <div class="text-gray-800">${data.address.replace(/\n/g, '<br>')}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.phone ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl flex-shrink-0">📞</div>
                                    <div>
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Phone</div>
                                        <div class="text-gray-800">${data.phone}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.parking ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl flex-shrink-0">🅿️</div>
                                    <div>
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Parking</div>
                                        <div class="text-gray-700 text-sm">${data.parking}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.directions ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl flex-shrink-0">🗺️</div>
                                    <div>
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Directions</div>
                                        <div class="text-gray-700 text-sm">${data.directions}</div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>

                        ${data.mapLink ? `
                            <div class="mt-6 pt-4 border-t border-gray-200">
                                <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: ${accentColor}">
                                    <span>📱</span>
                                    <span>Open in Maps</span>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
