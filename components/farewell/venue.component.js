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
                    <option value="compact">Compact - Dense Info</option>
                    <option value="detailed">Detailed - Full Info</option>
                    <option value="modern">Modern - Gradient Style</option>
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

        // Compact Layout - Dense Info
        if (layout === 'compact') {
            return `
                <div class="py-10 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}15">
                                📍
                            </div>
                            <h2 class="text-xl font-bold">Venue Details</h2>
                        </div>

                        <div class="bg-white rounded-xl shadow-${shadow} p-5 space-y-3">
                            ${data.venueName ? `
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🏛️</span>
                                    <span class="font-bold" style="color: ${accentColor}">${data.venueName}</span>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="flex items-start gap-2">
                                    <span class="text-lg mt-0.5">📮</span>
                                    <span class="text-sm text-gray-700">${data.address.replace(/\n/g, ', ')}</span>
                                </div>
                            ` : ''}
                            ${data.phone ? `
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">📞</span>
                                    <a href="tel:${data.phone}" class="text-sm hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                </div>
                            ` : ''}
                            ${data.mapLink ? `
                                <div class="pt-3 border-t" style="border-color: ${accentColor}20">
                                    <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-sm hover:shadow-md transition" style="background: ${accentColor}">
                                        <span>📱</span>
                                        <span>Directions</span>
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Detailed Layout - Full Info
        if (layout === 'detailed') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, ${bg}, white)">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-3xl shadow-${shadow} overflow-hidden">
                            <div class="p-8 text-center border-b-4" style="border-color: ${accentColor}; background: ${accentColor}05">
                                <div class="inline-block p-5 rounded-full mb-4" style="background: ${accentColor}20">
                                    <span class="text-5xl">📍</span>
                                </div>
                                <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor}">Location Information</h2>
                                ${data.venueName ? `<p class="text-xl text-gray-700">${data.venueName}</p>` : ''}
                            </div>

                            <div class="p-8 space-y-6">
                                ${data.address ? `
                                    <div class="p-5 rounded-xl" style="background: ${accentColor}08">
                                        <div class="flex items-center gap-3 mb-3">
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white" style="background: ${accentColor}">
                                                <span class="text-xl">📮</span>
                                            </div>
                                            <h3 class="font-bold text-lg">Full Address</h3>
                                        </div>
                                        <p class="text-gray-700 ml-13">${data.address.replace(/\n/g, '<br>')}</p>
                                    </div>
                                ` : ''}

                                ${data.phone ? `
                                    <div class="p-5 rounded-xl" style="background: ${accentColor}08">
                                        <div class="flex items-center gap-3 mb-3">
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white" style="background: ${accentColor}">
                                                <span class="text-xl">📞</span>
                                            </div>
                                            <h3 class="font-bold text-lg">Contact Number</h3>
                                        </div>
                                        <a href="tel:${data.phone}" class="text-gray-700 ml-13 hover:underline">${data.phone}</a>
                                    </div>
                                ` : ''}

                                ${data.parking ? `
                                    <div class="p-5 rounded-xl" style="background: ${accentColor}08">
                                        <div class="flex items-center gap-3 mb-3">
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white" style="background: ${accentColor}">
                                                <span class="text-xl">🅿️</span>
                                            </div>
                                            <h3 class="font-bold text-lg">Parking Information</h3>
                                        </div>
                                        <p class="text-gray-700 text-sm ml-13">${data.parking}</p>
                                    </div>
                                ` : ''}

                                ${data.directions ? `
                                    <div class="p-5 rounded-xl" style="background: ${accentColor}08">
                                        <div class="flex items-center gap-3 mb-3">
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white" style="background: ${accentColor}">
                                                <span class="text-xl">🗺️</span>
                                            </div>
                                            <h3 class="font-bold text-lg">How to Get There</h3>
                                        </div>
                                        <p class="text-gray-700 text-sm ml-13">${data.directions}</p>
                                    </div>
                                ` : ''}

                                ${data.mapLink ? `
                                    <div class="text-center pt-4">
                                        <a href="${data.mapLink}" target="_blank" class="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition transform hover:scale-105" style="background: ${accentColor}">
                                            <span class="text-2xl">📱</span>
                                            <span>Open in Maps</span>
                                        </a>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout - Gradient Style
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative rounded-3xl overflow-hidden shadow-${shadow}" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}05)">
                            <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20" style="background: ${accentColor}; transform: translate(30%, -30%);"></div>

                            <div class="relative z-10 p-10">
                                <div class="flex items-center gap-4 mb-8">
                                    <div class="relative">
                                        <div class="absolute inset-0 rounded-full blur-xl opacity-50" style="background: ${accentColor}"></div>
                                        <div class="relative w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-white shadow-lg">
                                            📍
                                        </div>
                                    </div>
                                    <div>
                                        <h2 class="text-2xl font-bold" style="color: ${accentColor}">Venue Location</h2>
                                        ${data.venueName ? `<p class="text-gray-700 font-semibold">${data.venueName}</p>` : ''}
                                    </div>
                                </div>

                                <div class="grid gap-4">
                                    ${data.address ? `
                                        <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white" style="background: ${accentColor}">
                                                📮
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wider font-bold mb-1" style="color: ${accentColor}">Address</div>
                                                <div class="text-sm text-gray-700">${data.address.replace(/\n/g, '<br>')}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    <div class="grid grid-cols-2 gap-4">
                                        ${data.phone ? `
                                            <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm text-center">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white mb-2" style="background: ${accentColor}">
                                                    📞
                                                </div>
                                                <div class="text-xs uppercase tracking-wider font-bold mb-1" style="color: ${accentColor}">Phone</div>
                                                <a href="tel:${data.phone}" class="text-xs text-gray-700 hover:underline">${data.phone}</a>
                                            </div>
                                        ` : ''}
                                        ${data.mapLink ? `
                                            <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm text-center">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white mb-2" style="background: ${accentColor}">
                                                    🗺️
                                                </div>
                                                <div class="text-xs uppercase tracking-wider font-bold mb-1" style="color: ${accentColor}">Map</div>
                                                <a href="${data.mapLink}" target="_blank" class="text-xs hover:underline" style="color: ${accentColor}">View Directions</a>
                                            </div>
                                        ` : ''}
                                    </div>

                                    ${data.parking || data.directions ? `
                                        <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white" style="background: ${accentColor}">
                                                ${data.parking ? '🅿️' : '🗺️'}
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wider font-bold mb-1" style="color: ${accentColor}">${data.parking ? 'Parking' : 'Directions'}</div>
                                                <div class="text-sm text-gray-700">${data.parking || data.directions}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return '';
    }
};
