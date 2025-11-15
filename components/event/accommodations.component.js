// Accommodations/Hotels Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodations = {
    name: '🏨 Accommodations',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" id="${sectionId}-title" value="Where to Stay" placeholder="Where to Stay" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea id="${sectionId}-description" placeholder="Recommended hotels near the venue" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="2"></textarea>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotels</label>
                <textarea id="${sectionId}-hotels" placeholder="Enter one hotel per line in format: Hotel Name | Address | Phone | Website | Rate&#10;Example:&#10;Grand Plaza Hotel | 123 Main St | (555) 123-4567 | grandplaza.com | $150/night&#10;Comfort Inn Downtown | 456 Oak Ave | (555) 234-5678 | comfortinn.com | $120/night" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="8"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Name | Address | Phone | Website | Rate (one per line)</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Note</label>
                <textarea id="${sectionId}-note" placeholder="Mention group discount codes or booking deadlines" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="2"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="layoutStyle">
                    <option value="cards">Cards - Feature cards with all details</option>
                    <option value="list">List - Compact list view</option>
                    <option value="modern">Modern - Gradient cards</option>
                    <option value="minimal">Minimal - Simple text layout</option>
                    <option value="detailed">Detailed - Full information cards</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Show Price</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="showPrice">
                    <option value="yes" selected>Yes</option>
                    <option value="no">No</option>
                    <option value="badge">As Badge</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="accentColor" value="#10b981" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="bgColor" value="#f9fafb" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="shadow">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'cards';
        const showPrice = style.showPrice || 'yes';
        const accentColor = style.accentColor || '#10b981';
        const bgColor = style.bgColor || '#f9fafb';
        const shadow = style.shadow || 'md';

        const title = data.title || 'Where to Stay';
        const description = data.description || '';
        const note = data.note || '';

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        // Parse hotels
        const hotels = data.hotels ? data.hotels.split('\n').filter(item => item.trim()).map(item => {
            const parts = item.split('|').map(p => p.trim());
            return {
                name: parts[0] || '',
                address: parts[1] || '',
                phone: parts[2] || '',
                website: parts[3] || '',
                rate: parts[4] || ''
            };
        }) : [];

        if (hotels.length === 0) {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                    <p class="text-gray-500">Add accommodation information to display here</p>
                </div>
            `;
        }

        const getPriceHTML = (rate) => {
            if (!rate || showPrice === 'no') return '';

            if (showPrice === 'badge') {
                return `<span class="inline-block px-3 py-1 rounded-full text-sm font-semibold" style="background: ${accentColor}; color: white;">${rate}</span>`;
            }

            return `<div class="font-bold text-lg mt-2" style="color: ${accentColor};">${rate}</div>`;
        };

        let hotelsHTML = '';

        switch (layoutStyle) {
            case 'cards':
                hotelsHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        ${hotels.map(hotel => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]} bg-white">
                                <div class="flex items-start justify-between mb-3">
                                    <div>
                                        <h4 class="font-bold text-lg text-gray-900">${hotel.name}</h4>
                                        ${getPriceHTML(hotel.rate)}
                                    </div>
                                    <div class="text-3xl">🏨</div>
                                </div>
                                ${hotel.address ? `<div class="flex items-start gap-2 mb-2"><span>📍</span><span class="text-sm text-gray-600">${hotel.address}</span></div>` : ''}
                                ${hotel.phone ? `<div class="flex items-center gap-2 mb-2"><span>📞</span><a href="tel:${hotel.phone}" class="text-sm" style="color: ${accentColor};">${hotel.phone}</a></div>` : ''}
                                ${hotel.website ? `<div class="flex items-center gap-2"><span>🌐</span><a href="https://${hotel.website}" target="_blank" class="text-sm hover:underline" style="color: ${accentColor};">${hotel.website}</a></div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'list':
                hotelsHTML = `
                    <div class="max-w-3xl mx-auto space-y-4">
                        ${hotels.map(hotel => `
                            <div class="p-4 rounded-lg ${shadowMap[shadow]} bg-white flex items-center justify-between">
                                <div class="flex-1">
                                    <h4 class="font-bold text-base text-gray-900">${hotel.name}</h4>
                                    ${hotel.address ? `<p class="text-sm text-gray-600">${hotel.address}</p>` : ''}
                                    <div class="flex gap-4 mt-1 text-sm">
                                        ${hotel.phone ? `<a href="tel:${hotel.phone}" style="color: ${accentColor};">📞 ${hotel.phone}</a>` : ''}
                                        ${hotel.website ? `<a href="https://${hotel.website}" target="_blank" style="color: ${accentColor};">🌐 ${hotel.website}</a>` : ''}
                                    </div>
                                </div>
                                ${getPriceHTML(hotel.rate)}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'modern':
                hotelsHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        ${hotels.map(hotel => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}30);">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">🏨</div>
                                    <div class="flex-1">
                                        <h4 class="font-bold text-lg text-gray-900">${hotel.name}</h4>
                                        ${showPrice !== 'no' && hotel.rate ? `<div class="text-sm font-semibold" style="color: ${accentColor};">${hotel.rate}</div>` : ''}
                                    </div>
                                </div>
                                ${hotel.address ? `<div class="text-sm text-gray-700 mb-2">📍 ${hotel.address}</div>` : ''}
                                <div class="flex gap-3 text-sm">
                                    ${hotel.phone ? `<a href="tel:${hotel.phone}" class="hover:underline" style="color: ${accentColor};">📞 Call</a>` : ''}
                                    ${hotel.website ? `<a href="https://${hotel.website}" target="_blank" class="hover:underline" style="color: ${accentColor};">🌐 Website</a>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'minimal':
                hotelsHTML = `
                    <div class="max-w-2xl mx-auto space-y-6">
                        ${hotels.map((hotel, index) => `
                            <div class="${index < hotels.length - 1 ? 'pb-6 border-b border-gray-300' : ''}">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-bold text-lg text-gray-900">${hotel.name}</h4>
                                    ${showPrice !== 'no' && hotel.rate ? `<span class="font-semibold" style="color: ${accentColor};">${hotel.rate}</span>` : ''}
                                </div>
                                ${hotel.address ? `<p class="text-sm text-gray-600 mb-1">${hotel.address}</p>` : ''}
                                <div class="flex gap-4 text-sm">
                                    ${hotel.phone ? `<span class="text-gray-600">${hotel.phone}</span>` : ''}
                                    ${hotel.website ? `<a href="https://${hotel.website}" target="_blank" class="hover:underline" style="color: ${accentColor};">${hotel.website}</a>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'detailed':
                hotelsHTML = `
                    <div class="max-w-4xl mx-auto space-y-6">
                        ${hotels.map(hotel => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]} bg-white border-l-4" style="border-color: ${accentColor};">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 class="font-bold text-xl text-gray-900 mb-1">${hotel.name}</h4>
                                        ${hotel.address ? `<p class="text-gray-600 flex items-center gap-2"><span>📍</span><span>${hotel.address}</span></p>` : ''}
                                    </div>
                                    ${getPriceHTML(hotel.rate)}
                                </div>
                                <div class="flex flex-wrap gap-4">
                                    ${hotel.phone ? `<a href="tel:${hotel.phone}" class="px-4 py-2 rounded-lg text-sm font-medium transition" style="background: ${accentColor}15; color: ${accentColor};">📞 ${hotel.phone}</a>` : ''}
                                    ${hotel.website ? `<a href="https://${hotel.website}" target="_blank" class="px-4 py-2 rounded-lg text-sm font-medium transition" style="background: ${accentColor}15; color: ${accentColor};">🌐 Visit Website</a>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <h3 class="text-3xl font-bold mb-2 text-gray-900">${title}</h3>
                        ${description ? `<p class="text-gray-600">${description}</p>` : ''}
                    </div>
                    ${hotelsHTML}
                    ${note ? `<div class="mt-8 p-4 rounded-lg max-w-3xl mx-auto text-center" style="background: ${accentColor}15;"><p class="text-sm font-medium" style="color: ${accentColor};">💡 ${note}</p></div>` : ''}
                </div>
            </div>
        `;
    }
};
