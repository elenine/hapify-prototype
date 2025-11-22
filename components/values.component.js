// Values/Mission Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.values = {
    name: '💎 Values & Mission',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Values" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                <textarea placeholder="Our mission is to..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="mission" oninput="updatePreview()"></textarea>
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Core Values</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'values'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Value</button>
                </div>
                <div data-items-container="values"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="icons">Icon Grid</option>
                    <option value="list">Simple List</option>
                    <option value="feature">Feature Style</option>
                    <option value="modern">Modern Cards</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#faf5ff';
        const accentColor = style.accent || '#a855f7';
        const title = data.title || 'Our Values';
        const mission = data.mission || '';

        const values = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^value-title-(.+)$/);
            if (match) {
                const id = match[1];
                values.push({
                    icon: data[`value-icon-${id}`],
                    title: data[`value-title-${id}`],
                    desc: data[`value-desc-${id}`]
                });
            }
        });

        const headerHtml = `
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2">${title}</h2>
                ${mission ? `<p class="text-sm text-gray-600 max-w-sm mx-auto">${mission}</p>` : ''}
            </div>
        `;

        if (values.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    ${headerHtml}
                    <div class="text-center text-gray-500 text-sm">Add values to display</div>
                </div>
            `;
        }

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${values.map(value => `
                                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition">
                                    <div class="flex items-start gap-3">
                                        <div class="text-3xl">${value.icon || '💎'}</div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-1" style="color: ${accentColor};">${value.title || 'Value'}</h3>
                                            ${value.desc ? `<p class="text-xs text-gray-600">${value.desc}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'icons':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                            ${values.map(value => `
                                <div class="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-lg transition">
                                    <div class="text-4xl mb-2">${value.icon || '💎'}</div>
                                    <h3 class="text-sm font-bold mb-1" style="color: ${accentColor};">${value.title || 'Value'}</h3>
                                    ${value.desc ? `<p class="text-xs text-gray-600">${value.desc}</p>` : ''}
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
                            ${values.map(value => `
                                <div class="border-l-4 pl-4" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="text-xl">${value.icon || '💎'}</span>
                                        <h3 class="text-sm font-bold" style="color: ${accentColor};">${value.title || 'Value'}</h3>
                                    </div>
                                    ${value.desc ? `<p class="text-xs text-gray-600 pl-7">${value.desc}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'feature':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${values.map(value => `
                                <div class="bg-white rounded-xl p-5 shadow-lg">
                                    <div class="flex items-start gap-4">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0" style="background: ${accentColor};">
                                            ${value.icon || '💎'}
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-2">${value.title || 'Value'}</h3>
                                            ${value.desc ? `<p class="text-xs text-gray-600">${value.desc}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${values.map(value => `
                                <div class="rounded-xl overflow-hidden shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                    <div class="p-5 text-white">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="text-3xl">${value.icon || '💎'}</span>
                                            <h3 class="text-sm font-bold">${value.title || 'Value'}</h3>
                                        </div>
                                        ${value.desc ? `<p class="text-xs opacity-90">${value.desc}</p>` : ''}
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
                            ${values.map(value => `
                                <div class="bg-white rounded-lg p-4 shadow-md">
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl">${value.icon || '💎'}</div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-1">${value.title || 'Value'}</h3>
                                            ${value.desc ? `<p class="text-xs text-gray-600">${value.desc}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
