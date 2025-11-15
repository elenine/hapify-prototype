// Event Highlights/Features Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.highlights = {
    name: '⭐ Event Highlights',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" id="${sectionId}-title" value="Event Highlights" placeholder="Event Highlights" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" id="${sectionId}-subtitle" placeholder="What makes this event special" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlights</label>
                <textarea id="${sectionId}-items" placeholder="Enter one highlight per line in format: Icon | Title | Description&#10;Example:&#10;🎤 | Expert Speakers | Learn from industry leaders&#10;🎁 | Exclusive Swag | Premium event merchandise&#10;🍕 | Food & Drinks | Complimentary refreshments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="8"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Icon | Title | Description (one per line)</p>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="layoutStyle">
                    <option value="cards">Cards - Feature cards with icons</option>
                    <option value="grid">Grid - Compact grid layout</option>
                    <option value="list">List - Vertical list with dividers</option>
                    <option value="modern">Modern - Gradient backgrounds</option>
                    <option value="minimal">Minimal - Clean text layout</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="iconStyle">
                    <option value="circle">Circle Background</option>
                    <option value="square">Square Background</option>
                    <option value="none">No Background</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="accentColor" value="#10b981" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="bgColor" value="#ffffff" />
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
        const iconStyle = style.iconStyle || 'circle';
        const accentColor = style.accentColor || '#10b981';
        const bgColor = style.bgColor || '#ffffff';
        const shadow = style.shadow || 'md';

        const title = data.title || 'Event Highlights';
        const subtitle = data.subtitle || '';

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        // Parse highlights
        const highlights = data.items ? data.items.split('\n').filter(item => item.trim()).map(item => {
            const parts = item.split('|').map(p => p.trim());
            return {
                icon: parts[0] || '⭐',
                title: parts[1] || '',
                description: parts[2] || ''
            };
        }) : [];

        if (highlights.length === 0) {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                    <p class="text-gray-500">Add highlights to display them here</p>
                </div>
            `;
        }

        const getIconHTML = (icon) => {
            switch (iconStyle) {
                case 'circle':
                    return `<div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3" style="background: ${accentColor}20; color: ${accentColor};">${icon}</div>`;
                case 'square':
                    return `<div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl mb-3" style="background: ${accentColor}20; color: ${accentColor};">${icon}</div>`;
                case 'none':
                    return `<div class="text-4xl mb-3">${icon}</div>`;
                default:
                    return `<div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3" style="background: ${accentColor}20; color: ${accentColor};">${icon}</div>`;
            }
        };

        let highlightsHTML = '';

        switch (layoutStyle) {
            case 'cards':
                highlightsHTML = `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        ${highlights.map(item => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]} text-center transition hover:scale-105" style="background: white; border: 2px solid ${accentColor}15;">
                                ${getIconHTML(item.icon)}
                                <h4 class="font-bold text-lg mb-2 text-gray-900">${item.title}</h4>
                                ${item.description ? `<p class="text-gray-600 text-sm">${item.description}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'grid':
                highlightsHTML = `
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        ${highlights.map(item => `
                            <div class="p-4 rounded-lg ${shadowMap[shadow]} text-center" style="background: white;">
                                <div class="text-3xl mb-2">${item.icon}</div>
                                <h4 class="font-semibold text-sm mb-1 text-gray-900">${item.title}</h4>
                                ${item.description ? `<p class="text-gray-600 text-xs">${item.description}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'list':
                highlightsHTML = `
                    <div class="max-w-2xl mx-auto space-y-6">
                        ${highlights.map((item, index) => `
                            <div class="flex gap-4 items-start ${index < highlights.length - 1 ? 'pb-6 border-b border-gray-200' : ''}">
                                <div class="flex-shrink-0">
                                    ${getIconHTML(item.icon)}
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-bold text-lg mb-1 text-gray-900">${item.title}</h4>
                                    ${item.description ? `<p class="text-gray-600">${item.description}</p>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'modern':
                highlightsHTML = `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        ${highlights.map(item => `
                            <div class="p-6 rounded-xl ${shadowMap[shadow]} text-center transition hover:scale-105"
                                 style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}30);">
                                <div class="text-4xl mb-3">${item.icon}</div>
                                <h4 class="font-bold text-lg mb-2" style="color: ${accentColor};">${item.title}</h4>
                                ${item.description ? `<p class="text-gray-700 text-sm">${item.description}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'minimal':
                highlightsHTML = `
                    <div class="max-w-3xl mx-auto">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            ${highlights.map(item => `
                                <div class="text-center">
                                    <div class="text-4xl mb-2">${item.icon}</div>
                                    <h4 class="font-bold text-base mb-1" style="color: ${accentColor};">${item.title}</h4>
                                    ${item.description ? `<p class="text-gray-600 text-sm">${item.description}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <h3 class="text-3xl font-bold mb-2 text-gray-900">${title}</h3>
                        ${subtitle ? `<p class="text-gray-600">${subtitle}</p>` : ''}
                    </div>
                    ${highlightsHTML}
                </div>
            </div>
        `;
    }
};
