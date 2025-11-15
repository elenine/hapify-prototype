// Venue/Location Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.venue = {
    name: '📍 Venue Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="venueName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Party Street, Celebration City, CA 90210" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                <input type="tel" placeholder="(555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (Optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="mapLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information (Optional)</label>
                <textarea placeholder="Free parking available in the north lot. Valet service also available." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Notes (Optional)</label>
                <textarea placeholder="Use the main entrance. Look for the birthday balloons!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
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
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="list">Simple List</option>
                    <option value="map">Map Focus</option>
                    <option value="compact">Compact</option>
                    <option value="modern-gradient">Modern Gradient</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="bold">Bold Statement</option>
                    <option value="glassmorphism">Glassmorphism</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const accentColor = style.accent || '#ec4899';
        const bgColor = style.bg || '#ffffff';
        const layout = style.layout || 'card';

        // Simple List
        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">📍 Venue Details</h2>
                        <div class="bg-white rounded-xl p-6 shadow-md">
                            <div class="space-y-5">
                                ${data.venueName ? `<div><div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Venue</div><div class="text-lg font-bold text-gray-900">${data.venueName}</div></div>` : ''}
                                ${data.address ? `<div><div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Address</div><div class="text-gray-700">${data.address.replace(/\n/g, '<br>')}</div></div>` : ''}
                                ${data.phone ? `<div><div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Phone</div><div class="text-gray-700">${data.phone}</div></div>` : ''}
                                ${data.parking ? `<div><div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Parking</div><div class="text-gray-700 text-sm">${data.parking}</div></div>` : ''}
                                ${data.directions ? `<div><div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Directions</div><div class="text-gray-700 text-sm">${data.directions}</div></div>` : ''}
                            </div>
                            ${data.mapLink ? `<div class="mt-6 pt-4 border-t"><a href="${data.mapLink}" target="_blank" class="inline-block px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90" style="background: ${accentColor}">Open in Maps 📱</a></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Map Focus
        if (layout === 'map') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">📍 Venue Location</h2>
                        ${data.mapLink ? `
                            <div class="bg-gray-200 rounded-xl h-48 mb-6 flex items-center justify-center text-4xl">🗺️</div>
                        ` : ''}
                        <div class="bg-white rounded-xl p-6 shadow-md">
                            ${data.venueName ? `<div class="text-2xl font-bold mb-4" style="color: ${accentColor}">${data.venueName}</div>` : ''}
                            ${data.address ? `<div class="text-gray-700 mb-4">${data.address.replace(/\n/g, '<br>')}</div>` : ''}
                            <div class="grid grid-cols-2 gap-3 text-sm">
                                ${data.phone ? `<div class="bg-gray-50 p-3 rounded"><div class="text-gray-500 mb-1">📞 Phone</div><div class="font-semibold">${data.phone}</div></div>` : ''}
                                ${data.parking ? `<div class="bg-gray-50 p-3 rounded col-span-2"><div class="text-gray-500 mb-1">🅿️ Parking</div><div>${data.parking}</div></div>` : ''}
                            </div>
                            ${data.mapLink ? `<div class="mt-4"><a href="${data.mapLink}" target="_blank" class="block text-center px-6 py-3 rounded-lg text-white font-bold hover:opacity-90" style="background: ${accentColor}">Get Directions 🗺️</a></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Compact
        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor}">
                        <div class="flex justify-between items-start gap-4 flex-wrap">
                            <div class="flex-1">
                                <div class="text-xl font-bold mb-1" style="color: ${accentColor}">${data.venueName || 'Venue Details'}</div>
                                ${data.address ? `<div class="text-gray-700 text-sm mb-2">${data.address.replace(/\n/g, ', ')}</div>` : ''}
                                ${data.phone ? `<div class="text-gray-600 text-sm">📞 ${data.phone}</div>` : ''}
                            </div>
                            ${data.mapLink ? `<a href="${data.mapLink}" target="_blank" class="px-4 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 whitespace-nowrap" style="background: ${accentColor}">📍 Map</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Gradient
        if (layout === 'modern-gradient') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl text-white">
                            <div class="text-center mb-6">
                                <div class="text-5xl mb-3">📍</div>
                                <h2 class="text-3xl font-bold">Visit Us Here</h2>
                            </div>

                            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 space-y-4">
                                ${data.venueName ? `
                                    <div>
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">Venue</div>
                                        <div class="text-2xl font-bold">${data.venueName}</div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div>
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">Address</div>
                                        <div class="text-lg">${data.address.replace(/\n/g, '<br>')}</div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-center gap-2">
                                        <span>📞</span>
                                        <span>${data.phone}</span>
                                    </div>
                                ` : ''}
                                ${data.parking ? `
                                    <div class="pt-4 border-t border-white border-opacity-30">
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">🅿️ Parking</div>
                                        <div class="text-sm opacity-95">${data.parking}</div>
                                    </div>
                                ` : ''}
                            </div>

                            ${data.mapLink ? `
                                <div class="mt-6 text-center">
                                    <a href="${data.mapLink}" target="_blank" class="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                                        Get Directions 🗺️
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Frame
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 rounded-2xl p-8 bg-white shadow-xl" style="border-color: ${accentColor}">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📍</div>
                                <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor}">Location</h2>
                                <div class="w-24 h-1 mx-auto" style="background: ${accentColor}; opacity: 0.5;"></div>
                            </div>

                            <div class="space-y-6 text-center">
                                ${data.venueName ? `
                                    <div>
                                        <div class="text-xs uppercase tracking-wider mb-2" style="color: ${accentColor}">Venue</div>
                                        <div class="text-2xl font-bold text-gray-900">${data.venueName}</div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div>
                                        <div class="text-xs uppercase tracking-wider mb-2" style="color: ${accentColor}">Address</div>
                                        <div class="text-gray-700 leading-relaxed">${data.address.replace(/\n/g, '<br>')}</div>
                                    </div>
                                ` : ''}

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    ${data.phone ? `
                                        <div class="p-4 rounded-lg" style="background: ${accentColor}15;">
                                            <div class="text-2xl mb-2">📞</div>
                                            <div class="text-sm text-gray-700">${data.phone}</div>
                                        </div>
                                    ` : ''}
                                    ${data.mapLink ? `
                                        <div class="p-4 rounded-lg" style="background: ${accentColor}15;">
                                            <div class="text-2xl mb-2">🗺️</div>
                                            <a href="${data.mapLink}" target="_blank" class="text-sm font-semibold hover:underline" style="color: ${accentColor}">View Map</a>
                                        </div>
                                    ` : ''}
                                </div>

                                ${data.parking || data.directions ? `
                                    <div class="pt-6 border-t space-y-3 text-left" style="border-color: ${accentColor}30;">
                                        ${data.parking ? `
                                            <div>
                                                <div class="text-xs font-semibold uppercase tracking-wider mb-1" style="color: ${accentColor}">Parking Information</div>
                                                <div class="text-sm text-gray-600">${data.parking}</div>
                                            </div>
                                        ` : ''}
                                        ${data.directions ? `
                                            <div>
                                                <div class="text-xs font-semibold uppercase tracking-wider mb-1" style="color: ${accentColor}">Directions</div>
                                                <div class="text-sm text-gray-600">${data.directions}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Bold Statement
        if (layout === 'bold') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%);">
                    <div class="max-w-3xl mx-auto text-white text-center">
                        <div class="text-7xl mb-4">📍</div>
                        <h2 class="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">Find Us Here</h2>

                        ${data.venueName ? `<div class="text-3xl md:text-4xl font-bold mb-4">${data.venueName}</div>` : ''}
                        ${data.address ? `<div class="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">${data.address.replace(/\n/g, '<br>')}</div>` : ''}

                        <div class="flex flex-wrap gap-4 justify-center mb-8">
                            ${data.phone ? `
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-xl">
                                    <div class="text-3xl mb-1">📞</div>
                                    <div class="text-lg font-semibold">${data.phone}</div>
                                </div>
                            ` : ''}
                            ${data.parking ? `
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-xl max-w-sm">
                                    <div class="text-3xl mb-1">🅿️</div>
                                    <div class="text-sm font-medium">${data.parking}</div>
                                </div>
                            ` : ''}
                        </div>

                        ${data.mapLink ? `
                            <a href="${data.mapLink}" target="_blank" class="inline-block bg-white px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl" style="color: ${accentColor}">
                                GET DIRECTIONS
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Glassmorphism
        if (layout === 'glassmorphism') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}10 100%);">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white bg-opacity-40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
                            <div class="text-center mb-6">
                                <div class="text-6xl mb-3">📍</div>
                                <h2 class="text-3xl font-bold text-gray-900">Venue Location</h2>
                            </div>

                            <div class="space-y-5">
                                ${data.venueName ? `
                                    <div class="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                                        <div class="text-xs font-semibold uppercase tracking-wider mb-2" style="color: ${accentColor}">Venue Name</div>
                                        <div class="text-2xl font-bold text-gray-900">${data.venueName}</div>
                                    </div>
                                ` : ''}

                                ${data.address ? `
                                    <div class="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                                        <div class="text-xs font-semibold uppercase tracking-wider mb-2" style="color: ${accentColor}">Address</div>
                                        <div class="text-gray-800">${data.address.replace(/\n/g, '<br>')}</div>
                                    </div>
                                ` : ''}

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    ${data.phone ? `
                                        <div class="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-4 shadow-lg text-center">
                                            <div class="text-3xl mb-2">📞</div>
                                            <div class="text-sm font-semibold text-gray-800">${data.phone}</div>
                                        </div>
                                    ` : ''}
                                    ${data.mapLink ? `
                                        <div class="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-4 shadow-lg text-center">
                                            <div class="text-3xl mb-2">🗺️</div>
                                            <a href="${data.mapLink}" target="_blank" class="text-sm font-bold hover:underline" style="color: ${accentColor}">Open Map</a>
                                        </div>
                                    ` : ''}
                                </div>

                                ${data.parking || data.directions ? `
                                    <div class="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-5 shadow-lg space-y-3">
                                        ${data.parking ? `
                                            <div>
                                                <div class="flex items-center gap-2 mb-2">
                                                    <span class="text-xl">🅿️</span>
                                                    <span class="text-xs font-semibold uppercase tracking-wider" style="color: ${accentColor}">Parking</span>
                                                </div>
                                                <div class="text-sm text-gray-700">${data.parking}</div>
                                            </div>
                                        ` : ''}
                                        ${data.directions ? `
                                            <div class="${data.parking ? 'pt-3 border-t border-gray-300' : ''}">
                                                <div class="flex items-center gap-2 mb-2">
                                                    <span class="text-xl">🧭</span>
                                                    <span class="text-xs font-semibold uppercase tracking-wider" style="color: ${accentColor}">Directions</span>
                                                </div>
                                                <div class="text-sm text-gray-700">${data.directions}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Card Style (default)
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📍</div>
                        <h2 class="text-2xl font-bold">Venue Details</h2>
                    </div>

                    <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-md">
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
