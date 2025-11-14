// Accommodations Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodations = {
    name: '🏨 Accommodations',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Where to Stay" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction Message</label>
                <textarea placeholder="We've arranged special rates at nearby hotels for our out-of-town guests." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotels</label>
                <div class="text-xs text-gray-500 mb-2">Format: Hotel Name | Distance | Price | Phone (one per line)</div>
                <textarea placeholder="Grand Hotel | 0.5 miles | $129/night | (555) 123-4567&#10;University Inn | 1 mile | $99/night | (555) 234-5678&#10;Comfort Suites | 2 miles | $89/night | (555) 345-6789" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm section-data" data-field="hotels" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Group Code (Optional)</label>
                <input type="text" placeholder="Use code GRAD2024 for special rates" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="groupCode" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Booking Deadline (Optional)</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="cards">Card Grid</option>
                    <option value="featured">Featured List</option>
                    <option value="compact">Compact Table</option>
                    <option value="minimal">Minimal List</option>
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
        const layout = style.layout || 'cards';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#6366f1';
        const hotels = data.hotels ? data.hotels.split('\n').filter(h => h.trim()) : [];

        const parsedHotels = hotels.map(hotel => {
            const parts = hotel.split('|');
            return {
                name: parts[0]?.trim() || '',
                distance: parts[1]?.trim() || '',
                price: parts[2]?.trim() || '',
                phone: parts[3]?.trim() || ''
            };
        });

        let deadlineText = '';
        if (data.deadline) {
            const deadlineDate = new Date(data.deadline);
            const formatted = deadlineDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            deadlineText = `Book by ${formatted} for best rates`;
        }

        switch(layout) {
            case 'featured':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🏨</div>
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Where to Stay'}</h2>
                                ${data.message ? `<p class="text-gray-600">${data.message}</p>` : ''}
                            </div>

                            ${data.groupCode || deadlineText ? `
                                <div class="rounded-xl p-6 mb-8 text-center" style="background: ${accent}15; border: 2px solid ${accent}30">
                                    ${data.groupCode ? `
                                        <div class="mb-2">
                                            <span class="inline-block px-6 py-3 text-white rounded-lg font-bold text-lg" style="background: ${accent}">
                                                ${data.groupCode}
                                            </span>
                                        </div>
                                    ` : ''}
                                    ${deadlineText ? `
                                        <div class="text-sm font-semibold" style="color: ${accent}">⏰ ${deadlineText}</div>
                                    ` : ''}
                                </div>
                            ` : ''}

                            <div class="space-y-6">
                                ${parsedHotels.map(hotel => `
                                    <div class="bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition" style="border-color: ${accent}20">
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accent}15">
                                                🏨
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="font-bold text-xl mb-4" style="color: ${accent}">${hotel.name}</h3>
                                                <div class="grid sm:grid-cols-3 gap-4">
                                                    ${hotel.distance ? `
                                                        <div class="flex flex-col">
                                                            <span class="text-xs text-gray-500 mb-1">Distance</span>
                                                            <div class="flex items-center gap-2">
                                                                <span class="text-lg">📍</span>
                                                                <span class="text-gray-800 font-medium">${hotel.distance}</span>
                                                            </div>
                                                        </div>
                                                    ` : ''}
                                                    ${hotel.price ? `
                                                        <div class="flex flex-col">
                                                            <span class="text-xs text-gray-500 mb-1">Rate</span>
                                                            <div class="flex items-center gap-2">
                                                                <span class="text-lg">💰</span>
                                                                <span class="font-bold" style="color: ${accent}">${hotel.price}</span>
                                                            </div>
                                                        </div>
                                                    ` : ''}
                                                    ${hotel.phone ? `
                                                        <div class="flex flex-col">
                                                            <span class="text-xs text-gray-500 mb-1">Contact</span>
                                                            <div class="flex items-center gap-2">
                                                                <span class="text-lg">📞</span>
                                                                <span class="text-gray-800 font-medium text-sm">${hotel.phone}</span>
                                                            </div>
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🏨</div>
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Where to Stay'}</h2>
                                ${data.message ? `<p class="text-gray-600">${data.message}</p>` : ''}
                            </div>

                            ${data.groupCode || deadlineText ? `
                                <div class="rounded-lg p-4 mb-6 text-center text-sm" style="background: ${accent}10; color: ${accent}">
                                    ${data.groupCode ? `<strong>${data.groupCode}</strong>` : ''}
                                    ${data.groupCode && deadlineText ? ' • ' : ''}
                                    ${deadlineText ? `⏰ ${deadlineText}` : ''}
                                </div>
                            ` : ''}

                            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                                <div class="overflow-x-auto">
                                    <table class="w-full">
                                        <thead>
                                            <tr style="background: ${accent}; color: white">
                                                <th class="px-6 py-3 text-left text-sm font-semibold">Hotel</th>
                                                <th class="px-6 py-3 text-left text-sm font-semibold">Distance</th>
                                                <th class="px-6 py-3 text-left text-sm font-semibold">Rate</th>
                                                <th class="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${parsedHotels.map((hotel, index) => `
                                                <tr class="border-t border-gray-200 hover:bg-gray-50">
                                                    <td class="px-6 py-4">
                                                        <div class="flex items-center gap-3">
                                                            <span class="text-2xl">🏨</span>
                                                            <span class="font-semibold" style="color: ${accent}">${hotel.name}</span>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 text-gray-700">${hotel.distance || '—'}</td>
                                                    <td class="px-6 py-4 font-semibold text-gray-900">${hotel.price || '—'}</td>
                                                    <td class="px-6 py-4 text-gray-600 text-sm">${hotel.phone || '—'}</td>
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-3">🏨</div>
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Where to Stay'}</h2>
                                ${data.message ? `<p class="text-gray-600 text-sm">${data.message}</p>` : ''}
                            </div>

                            ${data.groupCode || deadlineText ? `
                                <div class="text-center mb-6 p-4 border-2 rounded-lg" style="border-color: ${accent}">
                                    ${data.groupCode ? `
                                        <div class="font-bold mb-1" style="color: ${accent}">${data.groupCode}</div>
                                    ` : ''}
                                    ${deadlineText ? `
                                        <div class="text-xs text-gray-600">⏰ ${deadlineText}</div>
                                    ` : ''}
                                </div>
                            ` : ''}

                            <div class="space-y-4">
                                ${parsedHotels.map(hotel => `
                                    <div class="border-l-4 pl-4 py-3 bg-white rounded-r-lg" style="border-color: ${accent}">
                                        <div class="flex items-start justify-between gap-4">
                                            <div class="flex-1">
                                                <h3 class="font-bold mb-1" style="color: ${accent}">${hotel.name}</h3>
                                                <div class="text-sm text-gray-600 space-y-1">
                                                    ${hotel.distance ? `<div>📍 ${hotel.distance}</div>` : ''}
                                                    ${hotel.price ? `<div>💰 ${hotel.price}</div>` : ''}
                                                    ${hotel.phone ? `<div>📞 ${hotel.phone}</div>` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'cards':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🏨</div>
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Where to Stay'}</h2>
                                ${data.message ? `<p class="text-gray-600">${data.message}</p>` : ''}
                            </div>

                            ${data.groupCode || deadlineText ? `
                                <div class="rounded-xl p-6 mb-8 text-center" style="background: ${accent}10; border: 1px solid ${accent}30">
                                    ${data.groupCode ? `
                                        <div class="mb-2">
                                            <span class="inline-block px-4 py-2 text-white rounded-lg font-semibold" style="background: ${accent}">
                                                ${data.groupCode}
                                            </span>
                                        </div>
                                    ` : ''}
                                    ${deadlineText ? `
                                        <div class="text-sm font-medium" style="color: ${accent}">⏰ ${deadlineText}</div>
                                    ` : ''}
                                </div>
                            ` : ''}

                            <div class="grid md:grid-cols-2 gap-6">
                                ${parsedHotels.map(hotel => `
                                    <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
                                        <div class="flex items-start gap-3">
                                            <div class="text-3xl flex-shrink-0">🏨</div>
                                            <div class="flex-1">
                                                <h3 class="font-bold text-lg mb-3" style="color: ${accent}">${hotel.name}</h3>
                                                <div class="space-y-2 text-sm">
                                                    ${hotel.distance ? `
                                                        <div class="flex items-center gap-2">
                                                            <span class="text-gray-500">📍</span>
                                                            <span class="text-gray-700">${hotel.distance}</span>
                                                        </div>
                                                    ` : ''}
                                                    ${hotel.price ? `
                                                        <div class="flex items-center gap-2">
                                                            <span class="text-gray-500">💰</span>
                                                            <span class="text-gray-700 font-semibold">${hotel.price}</span>
                                                        </div>
                                                    ` : ''}
                                                    ${hotel.phone ? `
                                                        <div class="flex items-center gap-2">
                                                            <span class="text-gray-500">📞</span>
                                                            <span class="text-gray-700">${hotel.phone}</span>
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
