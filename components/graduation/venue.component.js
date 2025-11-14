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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="modern">Modern</option>
                    <option value="featured">Map Featured</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
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
        const layout = style.layout || 'card';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#6366f1';

        switch(layout) {
            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📍</div>
                                <h2 class="text-2xl font-bold">Venue Details</h2>
                            </div>

                            <div class="grid gap-4">
                                ${data.venueName ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md border-l-4" style="border-color: ${accent}">
                                        <div class="flex items-center gap-3">
                                            <div class="text-3xl">🏛️</div>
                                            <div class="flex-1">
                                                <div class="text-xs mb-1" style="color: ${accent}">VENUE</div>
                                                <div class="font-bold text-lg">${data.venueName}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.address ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md border-l-4" style="border-color: ${accent}">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">📮</div>
                                            <div class="flex-1">
                                                <div class="text-xs mb-1" style="color: ${accent}">ADDRESS</div>
                                                <div class="text-gray-800">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}

                                <div class="grid sm:grid-cols-2 gap-4">
                                    ${data.phone ? `
                                        <div class="bg-white rounded-xl p-6 shadow-md">
                                            <div class="text-3xl mb-2">📞</div>
                                            <div class="text-xs mb-1" style="color: ${accent}">PHONE</div>
                                            <div class="text-gray-800 font-medium">${data.phone}</div>
                                        </div>
                                    ` : ''}

                                    ${data.mapLink ? `
                                        <div class="bg-white rounded-xl p-6 shadow-md">
                                            <div class="text-3xl mb-2">📱</div>
                                            <a href="${data.mapLink}" target="_blank" class="text-sm font-semibold hover:underline" style="color: ${accent}">
                                                Open in Maps →
                                            </a>
                                        </div>
                                    ` : ''}
                                </div>

                                ${data.parking ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">🅿️</div>
                                            <div class="flex-1">
                                                <div class="text-xs mb-2" style="color: ${accent}">PARKING</div>
                                                <div class="text-gray-700 text-sm">${data.parking}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.directions ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">🗺️</div>
                                            <div class="flex-1">
                                                <div class="text-xs mb-2" style="color: ${accent}">DIRECTIONS</div>
                                                <div class="text-gray-700 text-sm">${data.directions}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-6xl mb-4">📍</div>
                                <h2 class="text-4xl font-black mb-2">Venue Details</h2>
                                ${data.venueName ? `<div class="text-2xl font-bold opacity-95">${data.venueName}</div>` : ''}
                            </div>

                            <div class="grid md:grid-cols-2 gap-6 mb-8">
                                ${data.address ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">📮</div>
                                            <div>
                                                <div class="text-xs mb-2 opacity-75">ADDRESS</div>
                                                <div class="font-medium">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.phone ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">📞</div>
                                            <div>
                                                <div class="text-xs mb-2 opacity-75">PHONE</div>
                                                <div class="font-medium">${data.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.parking ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">🅿️</div>
                                            <div>
                                                <div class="text-xs mb-2 opacity-75">PARKING</div>
                                                <div class="text-sm">${data.parking}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.directions ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl">🗺️</div>
                                            <div>
                                                <div class="text-xs mb-2 opacity-75">DIRECTIONS</div>
                                                <div class="text-sm">${data.directions}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>

                            ${data.mapLink ? `
                                <div class="text-center">
                                    <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-10 py-4 bg-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition" style="color: ${accent}">
                                        <span>📱</span>
                                        <span>Open in Google Maps</span>
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-3">📍</div>
                                <h2 class="text-2xl font-bold" style="color: ${accent}">Venue Details</h2>
                            </div>

                            <div class="space-y-4">
                                ${data.venueName ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Venue</div>
                                        <div class="font-bold text-lg">${data.venueName}</div>
                                    </div>
                                ` : ''}

                                ${data.address ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Address</div>
                                        <div class="text-gray-800">${data.address.replace(/\n/g, '<br>')}</div>
                                    </div>
                                ` : ''}

                                ${data.phone ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Phone</div>
                                        <div class="text-gray-800">${data.phone}</div>
                                    </div>
                                ` : ''}

                                ${data.parking ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Parking</div>
                                        <div class="text-sm text-gray-700">${data.parking}</div>
                                    </div>
                                ` : ''}

                                ${data.directions ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Directions</div>
                                        <div class="text-sm text-gray-700">${data.directions}</div>
                                    </div>
                                ` : ''}

                                ${data.mapLink ? `
                                    <div class="text-center pt-2">
                                        <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: ${accent}">
                                            <span>📱</span>
                                            <span>Open in Maps</span>
                                        </a>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📍</div>
                                <h2 class="text-2xl font-bold">Venue Details</h2>
                            </div>

                            <div class="bg-white rounded-xl p-6 shadow-md" style="border: 2px solid ${accent}20">
                                <div class="space-y-4">
                                    ${data.venueName ? `
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">🏛️</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Venue</div>
                                                <div class="font-bold text-lg">${data.venueName}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.address ? `
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">📮</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Address</div>
                                                <div class="text-gray-800">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.phone ? `
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">📞</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Phone</div>
                                                <div class="text-gray-800">${data.phone}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.parking ? `
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">🅿️</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Parking</div>
                                                <div class="text-gray-700 text-sm">${data.parking}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.directions ? `
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">🗺️</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Directions</div>
                                                <div class="text-gray-700 text-sm">${data.directions}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>

                                ${data.mapLink ? `
                                    <div class="mt-6 pt-4 border-t border-gray-200">
                                        <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: ${accent}">
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
    }
};
