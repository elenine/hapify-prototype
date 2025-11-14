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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
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

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🏨</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Where to Stay'}</h2>
                        ${data.message ? `<p class="text-gray-600">${data.message}</p>` : ''}
                    </div>

                    ${data.groupCode || deadlineText ? `
                        <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8 text-center">
                            ${data.groupCode ? `
                                <div class="mb-2">
                                    <span class="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">
                                        ${data.groupCode}
                                    </span>
                                </div>
                            ` : ''}
                            ${deadlineText ? `
                                <div class="text-sm text-indigo-700 font-medium">⏰ ${deadlineText}</div>
                            ` : ''}
                        </div>
                    ` : ''}

                    <div class="grid md:grid-cols-2 gap-6">
                        ${parsedHotels.map(hotel => `
                            <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
                                <div class="flex items-start gap-3">
                                    <div class="text-3xl flex-shrink-0">🏨</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-3 text-indigo-700">${hotel.name}</h3>
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
};
