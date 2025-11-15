// Pricing Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.pricing = {
    name: '🎟️ Pricing/Tickets',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Ticket Pricing" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Pricing Tiers (format: Tier Name | $Price | Features, one per line)</label>
                <textarea placeholder="Early Bird | $99 | Access to all sessions, Lunch included, Certificate&#10;Regular | $149 | Access to all sessions, Lunch included, Certificate, Swag bag&#10;VIP | $299 | All Regular benefits, VIP lounge, Networking dinner, Priority seating" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="tiers" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards - Side by side</option>
                    <option value="featured">Featured - Highlight center</option>
                    <option value="list">List - Simple rows</option>
                    <option value="modern">Modern - Bold pricing</option>
                    <option value="minimal">Minimal - Clean text</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'cards';
        const bgColor = style.bg || '#f0fdf4';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accentColor || '#059669';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        // Parse pricing tiers - format: Tier Name | $Price | Features
        const tiers = data.tiers ? data.tiers.split('\n').filter(t => t.trim()).map((t, index) => {
            const parts = t.split('|').map(p => p.trim());
            const features = parts[2] ? parts[2].split(',').map(f => f.trim()) : [];
            return {
                name: parts[0] || 'Ticket',
                price: parts[1] || '$0',
                features: features,
                isFeatured: index === 1 // Middle tier is featured
            };
        }) : [];

        const renderTiers = () => {
            switch (layoutStyle) {
                case 'cards':
                    return `
                        <div class="grid grid-cols-1 md:grid-cols-${Math.min(tiers.length, 3)} gap-6 max-w-5xl mx-auto">
                            ${tiers.map(tier => `
                                <div class="p-6 ${shadowMap[shadow]} rounded-xl" style="background: ${cardBg};">
                                    <div class="text-center">
                                        <div class="font-bold text-xl mb-2">${tier.name}</div>
                                        <div class="text-4xl font-extrabold mb-4" style="color: ${accentColor};">${tier.price}</div>
                                        <div class="space-y-2 text-sm">
                                            ${tier.features.map(f => `<div class="flex items-center gap-2"><span style="color: ${accentColor};">✓</span><span>${f}</span></div>`).join('')}
                                        </div>
                                        <button class="w-full mt-6 py-3 rounded-lg font-semibold text-white" style="background: ${accentColor};">Get Ticket</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'featured':
                    return `
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
                            ${tiers.map((tier, index) => `
                                <div class="p-6 ${shadowMap[shadow]} rounded-xl ${tier.isFeatured ? 'md:scale-110 md:z-10' : ''}" style="background: ${tier.isFeatured ? accentColor : cardBg}; color: ${tier.isFeatured ? 'white' : 'inherit'};">
                                    ${tier.isFeatured ? '<div class="text-center text-xs font-bold mb-2 uppercase">Most Popular</div>' : ''}
                                    <div class="text-center">
                                        <div class="font-bold text-xl mb-2">${tier.name}</div>
                                        <div class="text-4xl font-extrabold mb-4">${tier.price}</div>
                                        <div class="space-y-2 text-sm">
                                            ${tier.features.map(f => `<div class="flex items-center gap-2"><span>✓</span><span>${f}</span></div>`).join('')}
                                        </div>
                                        <button class="w-full mt-6 py-3 rounded-lg font-semibold ${tier.isFeatured ? 'bg-white' : ''}" style="${tier.isFeatured ? `color: ${accentColor};` : `background: ${accentColor}; color: white;`}">Get Ticket</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'list':
                    return tiers.map(tier => `
                        <div class="p-6 ${shadowMap[shadow]} rounded-xl mb-4 flex justify-between items-center" style="background: ${cardBg};">
                            <div>
                                <div class="font-bold text-lg">${tier.name}</div>
                                <div class="text-sm text-gray-600">${tier.features.join(' • ')}</div>
                            </div>
                            <div class="text-right">
                                <div class="text-3xl font-bold" style="color: ${accentColor};">${tier.price}</div>
                                <button class="mt-2 px-6 py-2 rounded-lg text-sm font-semibold text-white" style="background: ${accentColor};">Buy</button>
                            </div>
                        </div>
                    `).join('');

                case 'modern':
                    return `
                        <div class="grid grid-cols-1 md:grid-cols-${Math.min(tiers.length, 3)} gap-6 max-w-5xl mx-auto">
                            ${tiers.map(tier => `
                                <div class="p-8 ${shadowMap[shadow]} rounded-2xl text-center" style="background: ${cardBg}; border: 2px solid ${accentColor}20;">
                                    <div class="text-sm font-bold mb-2 uppercase tracking-wide" style="color: ${accentColor};">${tier.name}</div>
                                    <div>
                                        <span class="text-5xl font-extrabold">${tier.price.replace('$', '')}</span>
                                        <span class="text-gray-500">USD</span>
                                    </div>
                                    <div class="mt-6 space-y-3 text-sm text-left">
                                        ${tier.features.map(f => `<div class="flex items-start gap-2"><span class="mt-1" style="color: ${accentColor};">✓</span><span>${f}</span></div>`).join('')}
                                    </div>
                                    <button class="w-full mt-8 py-3 rounded-lg font-bold text-white transform hover:scale-105 transition" style="background: ${accentColor};">Purchase Now</button>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'minimal':
                    return tiers.map(tier => `
                        <div class="text-center py-6 border-b border-gray-200 last:border-0">
                            <div class="font-semibold mb-1">${tier.name}</div>
                            <div class="text-2xl font-bold mb-2" style="color: ${accentColor};">${tier.price}</div>
                            <div class="text-xs text-gray-600">${tier.features.join(' • ')}</div>
                        </div>
                    `).join('');

                default:
                    return '<p class="text-center text-gray-500">Add pricing tiers</p>';
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Ticket Pricing'}</h2>
                <div class="${layoutStyle === 'list' || layoutStyle === 'minimal' ? 'max-w-3xl mx-auto' : ''}">
                    ${tiers.length > 0 ? renderTiers() : '<p class="text-center text-gray-500">Add pricing tiers (format: Tier | $Price | Features)</p>'}
                </div>
            </div>
        `;
    }
};
