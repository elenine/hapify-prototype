// Event Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.details = {
    name: '📋 Event Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <input type="text" placeholder="Conference, Workshop, Seminar..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="type" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Tell attendees about your event..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards - Individual boxes</option>
                    <option value="list">List - Simple rows</option>
                    <option value="timeline">Timeline - Vertical flow</option>
                    <option value="grid">Grid - Two columns</option>
                    <option value="minimal">Minimal - Clean text</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="emoji">Emoji</option>
                    <option value="circle">Colored Circle</option>
                    <option value="square">Colored Square</option>
                    <option value="none">No Icons</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">No Border</option>
                    <option value="light">Light Border</option>
                    <option value="medium">Medium Border</option>
                    <option value="thick">Thick Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small Shadow</option>
                    <option value="medium">Medium Shadow</option>
                    <option value="large">Large Shadow</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'cards';
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f0fdf4';
        const accentColor = style.accentColor || '#059669';
        const iconStyle = style.iconStyle || 'emoji';
        const borderStyle = style.borderStyle || 'none';
        const shadow = style.shadow || 'none';

        // Border and shadow mappings
        const borderMap = {
            none: 'border-0',
            light: 'border border-gray-200',
            medium: 'border-2 border-gray-300',
            thick: 'border-4 border-gray-400'
        };

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        // Icon generator
        const getIcon = (emoji, label) => {
            switch (iconStyle) {
                case 'emoji':
                    return `<div class="text-2xl">${emoji}</div>`;
                case 'circle':
                    return `<div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: ${accentColor};">${label[0]}</div>`;
                case 'square':
                    return `<div class="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold" style="background: ${accentColor};">${label[0]}</div>`;
                case 'none':
                    return '';
                default:
                    return `<div class="text-2xl">${emoji}</div>`;
            }
        };

        // Detail item generator
        const items = [
            { icon: '📋', label: 'Type', value: data.type },
            { icon: '📅', label: 'Date', value: data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : null },
            { icon: '🕐', label: 'Time', value: data.time }
        ].filter(item => item.value);

        const renderItems = () => {
            switch (layoutStyle) {
                case 'cards':
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4 ${borderMap[borderStyle]} ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px;">
                            ${getIcon(item.icon, item.label)}
                            <div>
                                <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                <div class="font-medium">${item.value}</div>
                            </div>
                        </div>
                    `).join('');

                case 'list':
                    return items.map(item => `
                        <div class="flex items-center gap-4 py-3 border-b border-gray-200 last:border-0">
                            ${getIcon(item.icon, item.label)}
                            <div class="flex-1">
                                <span class="text-sm text-gray-500">${item.label}:</span>
                                <span class="font-medium ml-2">${item.value}</span>
                            </div>
                        </div>
                    `).join('');

                case 'timeline':
                    return items.map((item, index) => `
                        <div class="flex gap-4 relative">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center ${shadowMap[shadow]}" style="background: ${accentColor};">
                                    ${iconStyle === 'emoji' ? `<span class="text-lg">${item.icon}</span>` : `<span class="text-white font-bold">${item.label[0]}</span>`}
                                </div>
                                ${index < items.length - 1 ? `<div class="w-0.5 h-12 mt-2" style="background: ${accentColor};"></div>` : ''}
                            </div>
                            <div class="flex-1 pb-8">
                                <div class="text-sm font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                                <div class="text-gray-700">${item.value}</div>
                            </div>
                        </div>
                    `).join('');

                case 'grid':
                    return `
                        <div class="grid grid-cols-2 gap-4">
                            ${items.map(item => `
                                <div class="p-4 text-center ${borderMap[borderStyle]} ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px;">
                                    <div class="flex justify-center mb-2">${getIcon(item.icon, item.label)}</div>
                                    <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                    <div class="font-medium text-sm">${item.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'minimal':
                    return items.map(item => `
                        <div class="text-center py-3">
                            <div class="text-sm font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                            <div class="text-gray-700">${item.value}</div>
                        </div>
                    `).join('');

                default:
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4" style="background: ${cardBg}; border-radius: 12px;">
                            ${getIcon(item.icon, item.label)}
                            <div>
                                <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                <div class="font-medium">${item.value}</div>
                            </div>
                        </div>
                    `).join('');
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-6 text-center">Event Details</h2>
                    <div class="${layoutStyle === 'grid' ? '' : 'space-y-4'}">
                        ${items.length > 0 ? renderItems() : '<p class="text-center text-gray-500">Add event details</p>'}
                    </div>
                    ${data.description ? `
                        <div class="mt-6 p-4 ${borderMap[borderStyle]} ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px;">
                            <p class="text-gray-600 text-sm leading-relaxed">${data.description}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
