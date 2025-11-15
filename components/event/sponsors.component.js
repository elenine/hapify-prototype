// Sponsors Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.sponsors = {
    name: '🤝 Sponsors',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Sponsors" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sponsor Names (one per line)</label>
                <textarea placeholder="Company A&#10;Company B&#10;Company C" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="sponsors" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="badges">Badges - Pill shaped</option>
                    <option value="cards">Cards - Box style</option>
                    <option value="grid">Grid - Logo style</option>
                    <option value="list">List - Simple rows</option>
                    <option value="minimal">Minimal - Text only</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Item Background</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="itemBg" oninput="updatePreview()">
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Item Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="itemSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'badges';
        const bgColor = style.bg || '#ffffff';
        const itemBg = style.itemBg || '#f0fdf4';
        const accentColor = style.accentColor || '#059669';
        const shadow = style.shadow || 'none';
        const itemSize = style.itemSize || 'medium';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const sizeMap = {
            small: { padding: 'px-4 py-2', text: 'text-sm' },
            medium: { padding: 'px-6 py-3', text: 'text-base' },
            large: { padding: 'px-8 py-4', text: 'text-lg' }
        };

        const sponsors = data.sponsors ? data.sponsors.split('\n').filter(s => s.trim()) : [];
        const size = sizeMap[itemSize];

        const renderSponsors = () => {
            switch (layoutStyle) {
                case 'badges':
                    return sponsors.map(sponsor => `
                        <div class="inline-block ${size.padding} ${size.text} ${shadowMap[shadow]} m-2 font-medium rounded-full" style="background: ${itemBg}; color: ${accentColor};">
                            ${sponsor}
                        </div>
                    `).join('');

                case 'cards':
                    return `
                        <div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                            ${sponsors.map(sponsor => `
                                <div class="${size.padding} ${size.text} ${shadowMap[shadow]} font-semibold text-center rounded-lg" style="background: ${itemBg}; border: 2px solid ${accentColor}20;">
                                    ${sponsor}
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'grid':
                    return `
                        <div class="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                            ${sponsors.map(sponsor => `
                                <div class="aspect-square flex items-center justify-center ${shadowMap[shadow]} rounded-xl" style="background: ${itemBg}; border: 2px solid ${accentColor}20;">
                                    <div class="${size.text} font-bold text-center px-2" style="color: ${accentColor};">${sponsor}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'list':
                    return `
                        <div class="max-w-md mx-auto space-y-3">
                            ${sponsors.map(sponsor => `
                                <div class="flex items-center gap-3 ${size.padding} ${shadowMap[shadow]} rounded-lg" style="background: ${itemBg};">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="${size.text} font-medium">${sponsor}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'minimal':
                    return `
                        <div class="max-w-2xl mx-auto text-center">
                            ${sponsors.map((sponsor, index) => `
                                <span class="${size.text} font-medium" style="color: ${accentColor};">
                                    ${sponsor}${index < sponsors.length - 1 ? ' • ' : ''}
                                </span>
                            `).join('')}
                        </div>
                    `;

                default:
                    return sponsors.map(sponsor => `
                        <div class="inline-block px-6 py-3 bg-green-50 rounded-lg m-2 font-medium">${sponsor}</div>
                    `).join('');
            }
        };

        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold mb-8">${data.title || 'Our Sponsors'}</h2>
                <div>
                    ${sponsors.length > 0 ? renderSponsors() : '<p class="text-gray-500">Add sponsor names</p>'}
                </div>
            </div>
        `;
    }
};
