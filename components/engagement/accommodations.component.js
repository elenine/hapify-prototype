// Accommodations Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodations = {
    name: '🏨 Accommodations',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Where to Stay" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="We've reserved room blocks at the following hotels..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Hotels</label>
                    <button type="button" onclick="addAccommodation('${sectionId}')" class="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition">
                        + Add Hotel
                    </button>
                </div>
                <div id="accommodations-${sectionId}" class="space-y-3">
                    <!-- Accommodations will be added here -->
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Simple Cards</option>
                    <option value="elegant">Elegant Boxes</option>
                    <option value="minimal">Minimal List</option>
                    <option value="featured">Featured Hotels</option>
                    <option value="grid">Grid View</option>
                    <option value="modern">Modern Cards</option>
                    <option value="compact">Compact List</option>
                    <option value="luxury">Luxury Showcase</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#e11d48';
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.textColor || '#1f2937';
        const accommodations = [];

        // Collect accommodation items
        let i = 0;
        while (data[`hotel${i}Name`]) {
            accommodations.push({
                name: data[`hotel${i}Name`],
                address: data[`hotel${i}Address`] || '',
                phone: data[`hotel${i}Phone`] || '',
                website: data[`hotel${i}Website`] || '',
                code: data[`hotel${i}Code`] || ''
            });
            i++;
        }

        let hotelsHtml = '';
        if (accommodations.length > 0) {
            if (layout === 'elegant') {
                hotelsHtml = accommodations.map(hotel => `
                    <div class="p-6 rounded-xl shadow-lg border" style="background: ${cardBg}; border-color: ${accent}20; color: ${textColor};">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md" style="background: ${accent}20;">
                                🏨
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-xl mb-2">${hotel.name}</div>
                                ${hotel.code ? `<div class="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2" style="background: ${accent};">Code: ${hotel.code}</div>` : ''}
                            </div>
                        </div>
                        ${hotel.address ? `<div class="text-sm text-gray-600 mb-2">📍 ${hotel.address}</div>` : ''}
                        ${hotel.phone ? `<div class="text-sm text-gray-600 mb-3">📞 ${hotel.phone}</div>` : ''}
                        ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="inline-block mt-2 px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition shadow-md text-white" style="background: ${accent};">Book Now</a>` : ''}
                    </div>
                `).join('');
            } else if (layout === 'minimal') {
                hotelsHtml = accommodations.map((hotel, index) => `
                    <div class="py-4 ${index < accommodations.length - 1 ? 'border-b' : ''}" style="border-color: ${accent}20; color: ${textColor};">
                        <div class="flex justify-between items-start mb-2">
                            <div class="font-bold text-lg">${hotel.name}</div>
                            ${hotel.code ? `<div class="text-xs px-3 py-1 rounded-full font-semibold text-white" style="background: ${accent};">Code: ${hotel.code}</div>` : ''}
                        </div>
                        ${hotel.address ? `<div class="text-sm text-gray-600 mb-1">📍 ${hotel.address}</div>` : ''}
                        ${hotel.phone ? `<div class="text-sm text-gray-600 mb-2">📞 ${hotel.phone}</div>` : ''}
                        ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="inline-block px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition text-white" style="background: ${accent};">Book Now</a>` : ''}
                    </div>
                `).join('');
            } else if (layout === 'featured') {
                hotelsHtml = accommodations.map(hotel => `
                    <div class="relative overflow-hidden rounded-2xl shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%);">
                        <div class="absolute top-4 right-4 text-6xl opacity-20">🏨</div>
                        <div class="relative p-8 text-white">
                            <div class="font-bold text-2xl mb-4">${hotel.name}</div>
                            ${hotel.code ? `
                                <div class="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold mb-4" style="color: ${accent};">
                                    Group Code: ${hotel.code}
                                </div>
                            ` : ''}
                            ${hotel.address ? `<div class="mb-2 opacity-90">📍 ${hotel.address}</div>` : ''}
                            ${hotel.phone ? `<div class="mb-4 opacity-90">📞 ${hotel.phone}</div>` : ''}
                            ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="inline-block px-8 py-3 bg-white rounded-lg font-bold hover:shadow-xl transition text-lg" style="color: ${accent};">Reserve Your Room</a>` : ''}
                        </div>
                    </div>
                `).join('');
            } else if (layout === 'grid') {
                hotelsHtml = `<div class="grid md:grid-cols-2 gap-4">${accommodations.map(hotel => `
                    <div class="p-4 rounded-lg shadow-md border" style="background: ${cardBg}; border-color: ${accent}20; color: ${textColor};">
                        <div class="text-3xl mb-3 text-center">🏨</div>
                        <div class="font-bold text-center mb-2">${hotel.name}</div>
                        ${hotel.code ? `<div class="text-center mb-3"><span class="text-xs px-3 py-1 rounded-full font-semibold text-white" style="background: ${accent};">Code: ${hotel.code}</span></div>` : ''}
                        ${hotel.address ? `<div class="text-xs text-gray-600 text-center mb-1">📍 ${hotel.address}</div>` : ''}
                        ${hotel.phone ? `<div class="text-xs text-gray-600 text-center mb-3">📞 ${hotel.phone}</div>` : ''}
                        ${hotel.website ? `<div class="text-center"><a href="${hotel.website}" target="_blank" class="inline-block px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition text-white" style="background: ${accent};">Book</a></div>` : ''}
                    </div>
                `).join('')}</div>`;
            } else if (layout === 'modern') {
                hotelsHtml = accommodations.map(hotel => `
                    <div class="overflow-hidden rounded-2xl shadow-xl border" style="background: ${cardBg}; border-color: ${accent}10; color: ${textColor};">
                        <div class="p-6">
                            <div class="flex items-start gap-4 mb-4">
                                <div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%); color: white;">
                                    <span class="text-2xl">🏨</span>
                                </div>
                                <div class="flex-1">
                                    <div class="font-bold text-xl mb-1">${hotel.name}</div>
                                    ${hotel.code ? `<div class="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style="background: ${accent};">Code: ${hotel.code}</div>` : ''}
                                </div>
                            </div>
                            <div class="space-y-2 mb-4">
                                ${hotel.address ? `<div class="flex items-start gap-2 text-sm text-gray-600"><span>📍</span><span>${hotel.address}</span></div>` : ''}
                                ${hotel.phone ? `<div class="flex items-center gap-2 text-sm text-gray-600"><span>📞</span><span>${hotel.phone}</span></div>` : ''}
                            </div>
                            ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="block w-full text-center px-6 py-3 rounded-xl font-bold hover:opacity-90 transition shadow-md text-white" style="background: ${accent};">Reserve Now</a>` : ''}
                        </div>
                    </div>
                `).join('');
            } else if (layout === 'compact') {
                hotelsHtml = accommodations.map((hotel, index) => `
                    <div class="flex items-center gap-4 py-3 ${index < accommodations.length - 1 ? 'border-b' : ''}" style="border-color: ${accent}20; color: ${textColor};">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background: ${accent}20;">🏨</div>
                        <div class="flex-1 min-w-0">
                            <div class="font-bold truncate">${hotel.name}</div>
                            ${hotel.address ? `<div class="text-xs text-gray-600 truncate">${hotel.address}</div>` : ''}
                            ${hotel.code ? `<div class="text-xs font-semibold mt-1" style="color: ${accent};">Code: ${hotel.code}</div>` : ''}
                        </div>
                        ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition text-white" style="background: ${accent};">Book</a>` : ''}
                    </div>
                `).join('');
            } else if (layout === 'luxury') {
                hotelsHtml = accommodations.map(hotel => `
                    <div class="relative overflow-hidden rounded-3xl shadow-2xl mb-6" style="background: linear-gradient(135deg, ${accent}15 0%, ${cardBg} 100%);">
                        <div class="absolute top-6 right-6 text-7xl opacity-10">🏨</div>
                        <div class="relative p-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-16 h-px flex-shrink-0" style="background: ${accent};"></div>
                                <h3 class="text-3xl font-bold" style="color: ${textColor}; font-family: 'Georgia', serif;">${hotel.name}</h3>
                            </div>
                            ${hotel.code ? `
                                <div class="inline-block px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg mb-6" style="background: ${accent};">
                                    Exclusive Group Code: ${hotel.code}
                                </div>
                            ` : ''}
                            <div class="space-y-3 mb-8">
                                ${hotel.address ? `<div class="flex items-start gap-3 text-gray-700"><span class="text-xl">📍</span><span class="text-lg">${hotel.address}</span></div>` : ''}
                                ${hotel.phone ? `<div class="flex items-center gap-3 text-gray-700"><span class="text-xl">📞</span><span class="text-lg">${hotel.phone}</span></div>` : ''}
                            </div>
                            ${hotel.website ? `
                                <a href="${hotel.website}" target="_blank" class="inline-block px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition text-white text-lg shadow-xl transform hover:scale-105" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%);">
                                    Reserve Your Stay
                                </a>
                            ` : ''}
                        </div>
                    </div>
                `).join('');
            } else {
                // Simple Cards (default)
                hotelsHtml = accommodations.map(hotel => `
                    <div class="p-4 rounded-lg border shadow-sm" style="background: ${cardBg}; border-color: ${accent}20; color: ${textColor};">
                        <div class="font-bold mb-2">${hotel.name}</div>
                        ${hotel.address ? `<div class="text-sm text-gray-600 mb-1">📍 ${hotel.address}</div>` : ''}
                        ${hotel.phone ? `<div class="text-sm text-gray-600 mb-1">📞 ${hotel.phone}</div>` : ''}
                        ${hotel.code ? `<div class="text-sm font-semibold mb-2" style="color: ${accent};">Group Code: ${hotel.code}</div>` : ''}
                        ${hotel.website ? `<a href="${hotel.website}" target="_blank" class="inline-block mt-2 px-4 py-2 rounded-lg text-sm hover:opacity-90 transition text-white" style="background: ${accent};">Book Now</a>` : ''}
                    </div>
                `).join('');
            }
        } else {
            hotelsHtml = `
                <div class="text-center py-8 text-gray-500">
                    <div class="text-4xl mb-2">🏨</div>
                    <p>Add hotel recommendations for your guests</p>
                </div>
            `;
        }

        const maxWidth = layout === 'grid' ? 'max-w-3xl' : 'max-w-md';

        return `
            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                <div class="${maxWidth} mx-auto">
                    <div class="text-center text-5xl mb-4">🏨</div>
                    <h2 class="text-2xl font-bold mb-4 text-center">${data.title || 'Where to Stay'}</h2>
                    ${data.intro ? `<p class="text-center text-gray-600 mb-8">${data.intro}</p>` : ''}
                    <div class="space-y-4">
                        ${hotelsHtml}
                    </div>
                </div>
            </div>
        `;
    }
};

// Helper function to add accommodation
window.addAccommodation = function(sectionId) {
    const container = document.getElementById(`accommodations-${sectionId}`);
    const itemCount = container.children.length;

    const itemHtml = `
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50" data-hotel-index="${itemCount}">
            <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-700">Hotel ${itemCount + 1}</span>
                <button type="button" onclick="this.closest('[data-hotel-index]').remove(); updatePreview();" class="text-red-600 hover:text-red-800 text-sm">Remove</button>
            </div>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Hotel Name</label>
                    <input type="text" placeholder="Grand Hotel" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Name" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Address</label>
                    <input type="text" placeholder="123 Main St, City, State" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Address" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" placeholder="(555) 123-4567" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Phone" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Website/Booking URL</label>
                    <input type="url" placeholder="https://..." class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Website" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Group Code (Optional)</label>
                    <input type="text" placeholder="WEDDING2024" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="hotel${itemCount}Code" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', itemHtml);
    updatePreview();
};
