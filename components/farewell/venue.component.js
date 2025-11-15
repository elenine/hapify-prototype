// Venue/Location Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.venue = {
    name: '📍 Venue Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="venueName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Party Street, Celebration City, CA 90210" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                <input type="tel" placeholder="(555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (Optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="mapLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information (Optional)</label>
                <textarea placeholder="Free parking available in the north lot. Valet service also available." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Notes (Optional)</label>
                <textarea placeholder="Use the main entrance. Look for the farewell party banners!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Unified Box</option>
                    <option value="list">List - Clean Items</option>
                    <option value="map">Map - Featured Location</option>
                    <option value="split">Split - Info & Map</option>
                    <option value="minimal">Minimal - Simple Text</option>
                    <option value="compact">Compact - Dense Information</option>
                    <option value="elegant">Elegant - Bordered Frame</option>
                    <option value="banner">Banner - Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#8b5cf6';
        const cardColor = style.cardColor || '#ffffff';
        const shadow = style.shadow || 'md';

        // Card Layout - Unified Box
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">📍</div>
                            <h2 class="text-2xl font-bold">Venue Details</h2>
                        </div>

                        <div class="rounded-2xl p-6 shadow-${shadow}" style="background: ${accentColor}15; border-left: 4px solid ${accentColor}">
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
                                <div class="mt-6 pt-4 border-t" style="border-color: ${accentColor}30">
                                    <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90 shadow-md" style="background: ${accentColor}">
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

        // List Layout - Clean Items
        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}15">
                                <div class="text-4xl">📍</div>
                            </div>
                            <h2 class="text-3xl font-bold">Venue Details</h2>
                        </div>

                        <div class="space-y-4">
                            ${data.venueName ? `
                                <div class="p-5 rounded-xl shadow-${shadow}" style="background: ${cardColor}; border-left: 3px solid ${accentColor}">
                                    <div class="flex items-center gap-3 mb-2">
                                        <div class="text-2xl">🏛️</div>
                                        <div class="text-xs uppercase tracking-wide text-gray-500">Venue Name</div>
                                    </div>
                                    <div class="font-bold text-xl ml-11" style="color: ${accentColor}">${data.venueName}</div>
                                </div>
                            ` : ''}

                            ${data.address ? `
                                <div class="p-5 rounded-xl shadow-${shadow}" style="background: ${cardColor}; border-left: 3px solid ${accentColor}">
                                    <div class="flex items-center gap-3 mb-2">
                                        <div class="text-2xl">📮</div>
                                        <div class="text-xs uppercase tracking-wide text-gray-500">Address</div>
                                    </div>
                                    <div class="text-gray-800 ml-11">${data.address.replace(/\n/g, '<br>')}</div>
                                </div>
                            ` : ''}

                            ${data.phone ? `
                                <div class="p-5 rounded-xl shadow-${shadow}" style="background: ${cardColor}; border-left: 3px solid ${accentColor}">
                                    <div class="flex items-center gap-3 mb-2">
                                        <div class="text-2xl">📞</div>
                                        <div class="text-xs uppercase tracking-wide text-gray-500">Contact</div>
                                    </div>
                                    <div class="text-gray-800 ml-11">${data.phone}</div>
                                </div>
                            ` : ''}

                            ${data.parking ? `
                                <div class="p-5 rounded-xl shadow-${shadow}" style="background: ${cardColor}; border-left: 3px solid ${accentColor}">
                                    <div class="flex items-center gap-3 mb-2">
                                        <div class="text-2xl">🅿️</div>
                                        <div class="text-xs uppercase tracking-wide text-gray-500">Parking</div>
                                    </div>
                                    <div class="text-gray-700 text-sm ml-11">${data.parking}</div>
                                </div>
                            ` : ''}

                            ${data.directions ? `
                                <div class="p-5 rounded-xl shadow-${shadow}" style="background: ${cardColor}; border-left: 3px solid ${accentColor}">
                                    <div class="flex items-center gap-3 mb-2">
                                        <div class="text-2xl">🗺️</div>
                                        <div class="text-xs uppercase tracking-wide text-gray-500">Directions</div>
                                    </div>
                                    <div class="text-gray-700 text-sm ml-11">${data.directions}</div>
                                </div>
                            ` : ''}

                            ${data.mapLink ? `
                                <div class="text-center pt-4">
                                    <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition hover:scale-105 shadow-lg" style="background: ${accentColor}">
                                        <span class="text-xl">📱</span>
                                        <span>Open in Maps</span>
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Map Layout - Featured Location
        if (layout === 'map') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="rounded-3xl overflow-hidden shadow-${shadow}" style="background: ${cardColor}">
                            <div class="p-8 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); color: white">
                                <div class="text-6xl mb-4">📍</div>
                                <h2 class="text-3xl font-bold mb-2">Venue Location</h2>
                                ${data.venueName ? `<div class="text-xl opacity-90">${data.venueName}</div>` : ''}
                            </div>

                            <div class="p-8">
                                <div class="grid md:grid-cols-2 gap-6">
                                    <div class="space-y-4">
                                        ${data.address ? `
                                            <div>
                                                <div class="flex items-center gap-2 mb-2">
                                                    <div class="text-xl">📮</div>
                                                    <div class="text-xs uppercase tracking-wide font-semibold" style="color: ${accentColor}">Address</div>
                                                </div>
                                                <div class="text-gray-700 pl-7">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        ` : ''}
                                        ${data.phone ? `
                                            <div>
                                                <div class="flex items-center gap-2 mb-2">
                                                    <div class="text-xl">📞</div>
                                                    <div class="text-xs uppercase tracking-wide font-semibold" style="color: ${accentColor}">Phone</div>
                                                </div>
                                                <div class="text-gray-700 pl-7">${data.phone}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="space-y-4">
                                        ${data.parking ? `
                                            <div>
                                                <div class="flex items-center gap-2 mb-2">
                                                    <div class="text-xl">🅿️</div>
                                                    <div class="text-xs uppercase tracking-wide font-semibold" style="color: ${accentColor}">Parking</div>
                                                </div>
                                                <div class="text-gray-700 text-sm pl-7">${data.parking}</div>
                                            </div>
                                        ` : ''}
                                        ${data.directions ? `
                                            <div>
                                                <div class="flex items-center gap-2 mb-2">
                                                    <div class="text-xl">🗺️</div>
                                                    <div class="text-xs uppercase tracking-wide font-semibold" style="color: ${accentColor}">Directions</div>
                                                </div>
                                                <div class="text-gray-700 text-sm pl-7">${data.directions}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>

                                ${data.mapLink ? `
                                    <div class="mt-8 pt-6 border-t text-center" style="border-color: ${accentColor}20">
                                        <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white transition hover:scale-105 shadow-lg" style="background: ${accentColor}">
                                            <span class="text-2xl">📱</span>
                                            <span>Get Directions</span>
                                        </a>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout - Info & Map
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-10">Venue Details</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="p-8 rounded-2xl shadow-${shadow}" style="background: ${accentColor}15">
                                <div class="text-center mb-6">
                                    <div class="text-5xl mb-3">📍</div>
                                    ${data.venueName ? `<h3 class="text-xl font-bold" style="color: ${accentColor}">${data.venueName}</h3>` : ''}
                                </div>
                                ${data.mapLink ? `
                                    <a href="${data.mapLink}" target="_blank" class="block w-full py-3 text-center rounded-lg font-semibold text-white shadow-md hover:opacity-90 mb-4" style="background: ${accentColor}">
                                        <span class="mr-2">📱</span>View Map
                                    </a>
                                ` : ''}
                            </div>

                            <div class="space-y-4">
                                ${data.address ? `
                                    <div class="p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl">📮</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Address</div>
                                                <div class="text-gray-800 text-sm">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl">📞</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Phone</div>
                                                <div class="text-gray-800 text-sm">${data.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.parking ? `
                                    <div class="p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl">🅿️</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Parking</div>
                                                <div class="text-gray-700 text-sm">${data.parking}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.directions ? `
                                    <div class="p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl">🗺️</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Directions</div>
                                                <div class="text-gray-700 text-sm">${data.directions}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout - Simple Text
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="mb-8">
                            <div class="text-5xl mb-4">📍</div>
                            <h2 class="text-3xl font-bold mb-3">Venue Details</h2>
                            <div class="w-20 h-1 mx-auto" style="background: ${accentColor}"></div>
                        </div>

                        <div class="space-y-6 text-left">
                            ${data.venueName ? `
                                <div>
                                    <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accentColor}">🏛️ Venue</div>
                                    <div class="text-xl font-bold text-gray-800">${data.venueName}</div>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div>
                                    <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accentColor}">📮 Address</div>
                                    <div class="text-gray-700">${data.address.replace(/\n/g, '<br>')}</div>
                                </div>
                            ` : ''}
                            ${data.phone ? `
                                <div>
                                    <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accentColor}">📞 Contact</div>
                                    <div class="text-gray-700">${data.phone}</div>
                                </div>
                            ` : ''}
                            ${data.parking ? `
                                <div>
                                    <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accentColor}">🅿️ Parking</div>
                                    <div class="text-gray-700 text-sm">${data.parking}</div>
                                </div>
                            ` : ''}
                            ${data.directions ? `
                                <div>
                                    <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accentColor}">🗺️ Directions</div>
                                    <div class="text-gray-700 text-sm">${data.directions}</div>
                                </div>
                            ` : ''}
                        </div>

                        ${data.mapLink ? `
                            <div class="mt-8">
                                <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition hover:scale-105 shadow-md" style="background: ${accentColor}">
                                    <span>📱</span>
                                    <span>View Map</span>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Compact Layout - Dense Information
        if (layout === 'compact') {
            return `
                <div class="py-10 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white rounded-xl shadow-${shadow} p-6">
                            <div class="flex items-center gap-3 mb-4 pb-4 border-b" style="border-color: ${accentColor}20">
                                <div class="text-3xl">📍</div>
                                <h2 class="text-xl font-bold">Venue Details</h2>
                            </div>
                            <div class="space-y-3">
                                ${data.venueName ? `
                                    <div class="flex items-start gap-2">
                                        <div class="text-lg mt-0.5">🏛️</div>
                                        <div class="flex-1">
                                            <div class="text-xs text-gray-500 uppercase">Venue</div>
                                            <div class="font-bold" style="color: ${accentColor}">${data.venueName}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div class="flex items-start gap-2">
                                        <div class="text-lg mt-0.5">📮</div>
                                        <div class="flex-1">
                                            <div class="text-xs text-gray-500 uppercase">Address</div>
                                            <div class="text-sm text-gray-700">${data.address.replace(/\n/g, '<br>')}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-start gap-2">
                                        <div class="text-lg mt-0.5">📞</div>
                                        <div class="flex-1">
                                            <div class="text-xs text-gray-500 uppercase">Phone</div>
                                            <div class="text-sm text-gray-700">${data.phone}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.parking ? `
                                    <div class="flex items-start gap-2">
                                        <div class="text-lg mt-0.5">🅿️</div>
                                        <div class="flex-1">
                                            <div class="text-xs text-gray-500 uppercase">Parking</div>
                                            <div class="text-xs text-gray-600">${data.parking}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.directions ? `
                                    <div class="flex items-start gap-2">
                                        <div class="text-lg mt-0.5">🗺️</div>
                                        <div class="flex-1">
                                            <div class="text-xs text-gray-500 uppercase">Directions</div>
                                            <div class="text-xs text-gray-600">${data.directions}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.mapLink ? `
                                    <div class="pt-3 mt-3 border-t" style="border-color: ${accentColor}20">
                                        <a href="${data.mapLink}" target="_blank" class="flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-white text-sm transition" style="background: ${accentColor}">
                                            <span>📱</span>
                                            <span>Open Map</span>
                                        </a>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Layout - Bordered Frame
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 rounded-2xl p-10 bg-white shadow-${shadow}" style="border-color: ${accentColor}">
                            <div class="text-center mb-8">
                                <div class="inline-block p-5 rounded-full mb-4" style="background: ${accentColor}15">
                                    <div class="text-5xl">📍</div>
                                </div>
                                <h2 class="text-3xl font-bold mb-3" style="color: ${accentColor}">Venue Location</h2>
                                <div class="w-24 h-1 mx-auto" style="background: ${accentColor}30"></div>
                            </div>

                            ${data.venueName ? `
                                <div class="text-center mb-8">
                                    <div class="text-2xl font-bold" style="color: ${accentColor}">${data.venueName}</div>
                                </div>
                            ` : ''}

                            <div class="space-y-5">
                                ${data.address ? `
                                    <div class="p-5 rounded-xl" style="background: ${accentColor}10">
                                        <div class="flex items-start gap-4">
                                            <div class="text-3xl">📮</div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wide font-bold mb-2" style="color: ${accentColor}">Address</div>
                                                <div class="text-gray-800">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone || data.parking || data.directions ? `
                                    <div class="grid gap-4">
                                        ${data.phone ? `
                                            <div class="p-4 rounded-xl" style="background: ${accentColor}05">
                                                <div class="flex items-center gap-3">
                                                    <div class="text-2xl">📞</div>
                                                    <div>
                                                        <div class="text-xs uppercase font-bold" style="color: ${accentColor}">Phone</div>
                                                        <div class="text-gray-700">${data.phone}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.parking ? `
                                            <div class="p-4 rounded-xl" style="background: ${accentColor}05">
                                                <div class="flex items-start gap-3">
                                                    <div class="text-2xl">🅿️</div>
                                                    <div>
                                                        <div class="text-xs uppercase font-bold mb-1" style="color: ${accentColor}">Parking</div>
                                                        <div class="text-gray-700 text-sm">${data.parking}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.directions ? `
                                            <div class="p-4 rounded-xl" style="background: ${accentColor}05">
                                                <div class="flex items-start gap-3">
                                                    <div class="text-2xl">🗺️</div>
                                                    <div>
                                                        <div class="text-xs uppercase font-bold mb-1" style="color: ${accentColor}">Directions</div>
                                                        <div class="text-gray-700 text-sm">${data.directions}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>

                            ${data.mapLink ? `
                                <div class="mt-8 text-center">
                                    <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white transition hover:scale-105 shadow-lg" style="background: ${accentColor}">
                                        <span class="text-2xl">📱</span>
                                        <span>Get Directions</span>
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Banner Layout - Full Width
        if (layout === 'banner') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90)">
                    <div class="max-w-3xl mx-auto text-center text-white">
                        <div class="text-6xl mb-4">📍</div>
                        <h2 class="text-4xl font-bold mb-8">Find Us Here</h2>
                        ${data.venueName ? `
                            <div class="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                                <div class="text-3xl font-bold">${data.venueName}</div>
                            </div>
                        ` : ''}
                        <div class="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                            ${data.address ? `
                                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                    <div class="flex items-center gap-2 mb-3">
                                        <div class="text-2xl">📮</div>
                                        <div class="text-sm uppercase tracking-wide font-bold">Address</div>
                                    </div>
                                    <div class="text-white/90">${data.address.replace(/\n/g, '<br>')}</div>
                                </div>
                            ` : ''}
                            ${data.phone ? `
                                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                    <div class="flex items-center gap-2 mb-3">
                                        <div class="text-2xl">📞</div>
                                        <div class="text-sm uppercase tracking-wide font-bold">Phone</div>
                                    </div>
                                    <div class="text-white/90">${data.phone}</div>
                                </div>
                            ` : ''}
                            ${data.parking ? `
                                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                    <div class="flex items-center gap-2 mb-3">
                                        <div class="text-2xl">🅿️</div>
                                        <div class="text-sm uppercase tracking-wide font-bold">Parking</div>
                                    </div>
                                    <div class="text-white/90 text-sm">${data.parking}</div>
                                </div>
                            ` : ''}
                            ${data.directions ? `
                                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                    <div class="flex items-center gap-2 mb-3">
                                        <div class="text-2xl">🗺️</div>
                                        <div class="text-sm uppercase tracking-wide font-bold">Directions</div>
                                    </div>
                                    <div class="text-white/90 text-sm">${data.directions}</div>
                                </div>
                            ` : ''}
                        </div>
                        ${data.mapLink ? `
                            <div class="mt-10">
                                <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-3 px-12 py-5 bg-white rounded-full font-bold text-2xl transition hover:scale-105 shadow-2xl" style="color: ${accentColor}">
                                    <span>📱</span>
                                    <span>Open in Maps</span>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        return '';
    }
};
