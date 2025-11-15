// Location Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.location = {
    name: '📍 Location',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Convention Center" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="123 Main Street, City, State, ZIP" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Parking Info</label>
                <textarea placeholder="Parking available..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards - Separate boxes</option>
                    <option value="unified">Unified - Single card</option>
                    <option value="map-style">Map Style - Pin design</option>
                    <option value="list">List - Simple rows</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="emoji">Emoji Icons</option>
                    <option value="solid">Solid Colored</option>
                    <option value="outline">Outline Style</option>
                    <option value="none">No Icons</option>
                </select>
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
        const iconStyle = style.iconStyle || 'emoji';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const getIcon = (emoji, label) => {
            switch (iconStyle) {
                case 'emoji':
                    return `<div class="text-2xl">${emoji}</div>`;
                case 'solid':
                    return `<div class="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg" style="background: ${accentColor};">${emoji}</div>`;
                case 'outline':
                    return `<div class="w-10 h-10 rounded-lg flex items-center justify-center text-lg border-2" style="color: ${accentColor}; border-color: ${accentColor};">${emoji}</div>`;
                case 'none':
                    return '';
                default:
                    return `<div class="text-2xl">${emoji}</div>`;
            }
        };

        const items = [
            { icon: '📍', label: 'Venue', value: data.venue },
            { icon: '🗺️', label: 'Address', value: data.address },
            { icon: '🚗', label: 'Directions', value: data.directions }
        ].filter(item => item.value);

        const renderItems = () => {
            switch (layoutStyle) {
                case 'cards':
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px;">
                            ${getIcon(item.icon, item.label)}
                            <div>
                                <div class="text-xs font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                                <div class="text-sm text-gray-700">${item.value}</div>
                            </div>
                        </div>
                    `).join('');

                case 'unified':
                    return `
                        <div class="p-6 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 16px;">
                            ${items.map(item => `
                                <div class="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                                    ${getIcon(item.icon, item.label)}
                                    <div class="flex-1">
                                        <div class="text-xs font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                                        <div class="text-sm text-gray-700">${item.value}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'map-style':
                    return `
                        <div class="p-6 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 16px; border-left: 4px solid ${accentColor};">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl" style="background: ${accentColor};">
                                    📍
                                </div>
                                <div class="font-bold text-lg">${data.venue || 'Location'}</div>
                            </div>
                            ${data.address ? `
                                <div class="pl-15 mb-3">
                                    <div class="text-xs font-semibold mb-1 text-gray-500">ADDRESS</div>
                                    <div class="text-sm text-gray-700">${data.address}</div>
                                </div>
                            ` : ''}
                            ${data.directions ? `
                                <div class="pl-15">
                                    <div class="text-xs font-semibold mb-1 text-gray-500">HOW TO GET THERE</div>
                                    <div class="text-sm text-gray-700">${data.directions}</div>
                                </div>
                            ` : ''}
                        </div>
                    `;

                case 'list':
                    return items.map(item => `
                        <div class="flex items-center gap-4 py-3 border-b border-gray-200 last:border-0">
                            ${getIcon(item.icon, item.label)}
                            <div class="flex-1">
                                <span class="text-sm font-semibold" style="color: ${accentColor};">${item.label}:</span>
                                <span class="text-sm text-gray-700 ml-2">${item.value}</span>
                            </div>
                        </div>
                    `).join('');

                case 'minimal':
                    return items.map(item => `
                        <div class="text-center py-3">
                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor};">${item.label.toUpperCase()}</div>
                            <div class="text-sm text-gray-700">${item.value}</div>
                        </div>
                    `).join('');

                default:
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4" style="background: ${cardBg}; border-radius: 12px;">
                            ${getIcon(item.icon, item.label)}
                            <div>
                                <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                <div class="text-sm">${item.value}</div>
                            </div>
                        </div>
                    `).join('');
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">Location</h2>
                <div class="max-w-md mx-auto ${layoutStyle === 'unified' || layoutStyle === 'map-style' ? '' : 'space-y-4'}">
                    ${items.length > 0 ? renderItems() : '<p class="text-center text-gray-500">Add location details</p>'}
                </div>
            </div>
        `;
    }
};
