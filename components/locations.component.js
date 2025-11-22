// Locations Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.locations = {
    name: '📍 Locations',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Locations" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Find us at these locations..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Office Locations</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'locations'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Location</button>
                </div>
                <div data-items-container="locations"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="pins">Pin Style</option>
                    <option value="list">Simple List</option>
                    <option value="compact">Compact</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#22c55e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#f0fdf4';
        const accentColor = style.accent || '#22c55e';
        const title = data.title || 'Our Locations';
        const description = data.description || '';

        const locations = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^location-name-(.+)$/);
            if (match) {
                const id = match[1];
                locations.push({
                    name: data[`location-name-${id}`],
                    address: data[`location-address-${id}`],
                    phone: data[`location-phone-${id}`]
                });
            }
        });

        const headerHtml = `
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2">${title}</h2>
                ${description ? `<p class="text-sm text-gray-600">${description}</p>` : ''}
            </div>
        `;

        if (locations.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    ${headerHtml}
                    <div class="text-center text-gray-500 text-sm">Add locations to display</div>
                </div>
            `;
        }

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${locations.map(location => `
                                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition border-l-4" style="border-color: ${accentColor};">
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl">📍</div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-2" style="color: ${accentColor};">${location.name || 'Office'}</h3>
                                            ${location.address ? `<p class="text-xs text-gray-600 mb-1">📫 ${location.address}</p>` : ''}
                                            ${location.phone ? `<p class="text-xs text-gray-600">📞 ${location.phone}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'pins':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${locations.map(location => `
                                <div class="bg-white rounded-xl p-5 shadow-lg">
                                    <div class="flex items-start gap-4">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0" style="background: ${accentColor};">
                                            📍
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-2">${location.name || 'Office'}</h3>
                                            ${location.address ? `<p class="text-xs text-gray-600 mb-1">${location.address}</p>` : ''}
                                            ${location.phone ? `<p class="text-xs font-semibold" style="color: ${accentColor};">${location.phone}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'list':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${locations.map(location => `
                                <div class="border-l-4 pl-4" style="border-color: ${accentColor};">
                                    <h3 class="text-sm font-bold mb-1" style="color: ${accentColor};">📍 ${location.name || 'Office'}</h3>
                                    ${location.address ? `<p class="text-xs text-gray-600 mb-1">${location.address}</p>` : ''}
                                    ${location.phone ? `<p class="text-xs text-gray-600">${location.phone}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto grid grid-cols-1 gap-2">
                            ${locations.map(location => `
                                <div class="bg-white rounded-lg p-4 shadow-sm">
                                    <h3 class="text-xs font-bold mb-1" style="color: ${accentColor};">📍 ${location.name || 'Office'}</h3>
                                    <div class="text-xs text-gray-600">
                                        ${location.address ? `<div>${location.address}</div>` : ''}
                                        ${location.phone ? `<div>${location.phone}</div>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${locations.map(location => `
                                <div class="bg-white rounded-lg p-4 shadow-md">
                                    <h3 class="text-sm font-bold mb-2">${location.name || 'Office'}</h3>
                                    ${location.address ? `<p class="text-xs text-gray-600 mb-1">${location.address}</p>` : ''}
                                    ${location.phone ? `<p class="text-xs text-gray-600">${location.phone}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
