// Directions Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.directions = {
    name: '🗺️ Directions',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Getting There" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="venueName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Main Street, City, State 12345" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="mapsLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information</label>
                <textarea placeholder="Free parking available in lot B..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transit Info (Optional)</label>
                <textarea placeholder="Take bus #5 to Main St stop..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="transit" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea placeholder="Special instructions, landmarks, etc..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Cards</option>
                    <option value="featured">Featured Venue</option>
                    <option value="modern">Modern Icons</option>
                    <option value="map">Map Focus</option>
                    <option value="grid">Icon Grid</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#e11d48';
        const cardBg = style.cardBg || '#f9fafb';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'featured') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold mb-8 text-center">${data.title || 'Getting There'}</h2>

                        <div class="relative overflow-hidden rounded-2xl shadow-2xl mb-6" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%);">
                            <div class="absolute top-4 right-4 text-7xl opacity-10">📍</div>
                            <div class="relative p-8 text-white">
                                ${data.venueName ? `<div class="font-bold text-2xl mb-4">${data.venueName}</div>` : ''}
                                ${data.address ? `<div class="text-lg mb-6 opacity-90">${data.address}</div>` : ''}
                                ${data.mapsLink ? `<a href="${data.mapsLink}" target="_blank" class="inline-block px-8 py-3 bg-white rounded-lg font-bold hover:shadow-xl transition text-lg" style="color: ${accent};">📍 Open in Maps</a>` : ''}
                            </div>
                        </div>

                        <div class="space-y-3">
                            ${data.parking ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="flex items-start gap-3"><div class="text-2xl">🅿️</div><div><div class="font-semibold mb-1">Parking</div><p class="text-sm text-gray-700">${data.parking}</p></div></div></div>` : ''}
                            ${data.transit ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="flex items-start gap-3"><div class="text-2xl">🚌</div><div><div class="font-semibold mb-1">Public Transit</div><p class="text-sm text-gray-700">${data.transit}</p></div></div></div>` : ''}
                            ${data.notes ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="flex items-start gap-3"><div class="text-2xl">ℹ️</div><div><div class="font-semibold mb-1">Additional Information</div><p class="text-sm text-gray-700">${data.notes}</p></div></div></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold mb-8 text-center">${data.title || 'Getting There'}</h2>

                        ${data.venueName || data.address ? `
                            <div class="mb-8 text-center">
                                ${data.venueName ? `<div class="font-bold text-xl mb-2">${data.venueName}</div>` : ''}
                                ${data.address ? `<div class="text-gray-600 mb-4">${data.address}</div>` : ''}
                                ${data.mapsLink ? `<a href="${data.mapsLink}" target="_blank" class="inline-block px-6 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-lg text-white" style="background: ${accent};">📍 Get Directions</a>` : ''}
                            </div>
                        ` : ''}

                        <div class="grid md:grid-cols-3 gap-4">
                            ${data.parking ? `
                                <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                                    <div class="text-4xl mb-3">🅿️</div>
                                    <div class="font-bold mb-2">Parking</div>
                                    <p class="text-xs text-gray-600">${data.parking}</p>
                                </div>
                            ` : ''}
                            ${data.transit ? `
                                <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                                    <div class="text-4xl mb-3">🚌</div>
                                    <div class="font-bold mb-2">Transit</div>
                                    <p class="text-xs text-gray-600">${data.transit}</p>
                                </div>
                            ` : ''}
                            ${data.notes ? `
                                <div class="p-6 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                                    <div class="text-4xl mb-3">ℹ️</div>
                                    <div class="font-bold mb-2">Note</div>
                                    <p class="text-xs text-gray-600">${data.notes}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'map') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="text-center text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold mb-8 text-center">${data.title || 'Getting There'}</h2>

                        <div class="mb-6 p-8 rounded-2xl shadow-xl border-4 border-dashed text-center" style="background: ${cardBg}; border-color: ${accent}30;">
                            <div class="text-6xl mb-4">📍</div>
                            ${data.venueName ? `<div class="font-bold text-xl mb-2">${data.venueName}</div>` : ''}
                            ${data.address ? `<div class="text-gray-600 mb-6">${data.address}</div>` : ''}
                            ${data.mapsLink ? `<a href="${data.mapsLink}" target="_blank" class="inline-block px-8 py-3 rounded-lg font-bold hover:opacity-90 transition text-white shadow-lg" style="background: ${accent};">Open Map</a>` : ''}
                        </div>

                        <div class="space-y-3">
                            ${data.parking ? `<div class="p-4 rounded-lg border" style="background: white; border-color: ${accent}20;"><div class="flex gap-3"><span class="text-2xl">🅿️</span><div class="flex-1"><div class="font-semibold mb-1">Parking</div><p class="text-sm text-gray-700">${data.parking}</p></div></div></div>` : ''}
                            ${data.transit ? `<div class="p-4 rounded-lg border" style="background: white; border-color: ${accent}20;"><div class="flex gap-3"><span class="text-2xl">🚌</span><div class="flex-1"><div class="font-semibold mb-1">Public Transit</div><p class="text-sm text-gray-700">${data.transit}</p></div></div></div>` : ''}
                            ${data.notes ? `<div class="p-4 rounded-lg border" style="background: white; border-color: ${accent}20;"><div class="flex gap-3"><span class="text-2xl">ℹ️</span><div class="flex-1"><div class="font-semibold mb-1">Additional Info</div><p class="text-sm text-gray-700">${data.notes}</p></div></div></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'grid') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold mb-8 text-center">${data.title || 'Getting There'}</h2>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="md:col-span-2 p-6 rounded-xl shadow-lg" style="background: ${accent}; color: white;">
                                <div class="flex items-center gap-4">
                                    <div class="text-5xl">📍</div>
                                    <div class="flex-1">
                                        ${data.venueName ? `<div class="font-bold text-xl mb-1">${data.venueName}</div>` : ''}
                                        ${data.address ? `<div class="opacity-90">${data.address}</div>` : ''}
                                    </div>
                                    ${data.mapsLink ? `<a href="${data.mapsLink}" target="_blank" class="px-6 py-3 bg-white rounded-lg font-bold hover:shadow-xl transition" style="color: ${accent};">Open</a>` : ''}
                                </div>
                            </div>
                            ${data.parking ? `<div class="p-6 rounded-xl shadow-lg" style="background: ${cardBg};"><div class="text-4xl mb-3">🅿️</div><div class="font-bold mb-2">Parking</div><p class="text-sm text-gray-600">${data.parking}</p></div>` : ''}
                            ${data.transit ? `<div class="p-6 rounded-xl shadow-lg" style="background: ${cardBg};"><div class="text-4xl mb-3">🚌</div><div class="font-bold mb-2">Public Transit</div><p class="text-sm text-gray-600">${data.transit}</p></div>` : ''}
                            ${data.notes ? `<div class="md:col-span-2 p-6 rounded-xl shadow-lg" style="background: ${cardBg};"><div class="flex gap-4"><span class="text-4xl">ℹ️</span><div><div class="font-bold mb-2">Additional Information</div><p class="text-sm text-gray-600">${data.notes}</p></div></div></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Simple Cards (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-5xl mb-4">🗺️</div>
                        <h2 class="text-2xl font-bold mb-8 text-center">${data.title || 'Getting There'}</h2>

                        ${data.venueName || data.address ? `
                            <div class="mb-6 p-4 rounded-lg" style="background: ${accent}10;">
                                ${data.venueName ? `<div class="font-bold mb-2">${data.venueName}</div>` : ''}
                                ${data.address ? `<div class="text-gray-700 mb-3">${data.address}</div>` : ''}
                                ${data.mapsLink ? `
                                    <a href="${data.mapsLink}" target="_blank" class="inline-block px-4 py-2 rounded-lg text-sm hover:opacity-90 transition text-white" style="background: ${accent};">
                                        📍 Open in Maps
                                    </a>
                                ` : ''}
                            </div>
                        ` : ''}

                        <div class="space-y-4">
                            ${data.parking ? `
                                <div class="p-4 rounded-lg" style="background: ${cardBg};">
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl">🅿️</div>
                                        <div>
                                            <div class="font-semibold mb-1">Parking</div>
                                            <p class="text-sm text-gray-700">${data.parking}</p>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.transit ? `
                                <div class="p-4 rounded-lg" style="background: ${cardBg};">
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl">🚌</div>
                                        <div>
                                            <div class="font-semibold mb-1">Public Transit</div>
                                            <p class="text-sm text-gray-700">${data.transit}</p>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.notes ? `
                                <div class="p-4 rounded-lg" style="background: ${cardBg};">
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl">ℹ️</div>
                                        <div>
                                            <div class="font-semibold mb-1">Additional Information</div>
                                            <p class="text-sm text-gray-700">${data.notes}</p>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
