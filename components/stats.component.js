// Statistics Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.stats = {
                name: '📊 Statistics',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Achievements" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Statistics</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'stats'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Stat</button>
                            </div>
                            <div data-items-container="stats"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid View</option>
                                <option value="cards">Card Style</option>
                                <option value="minimal">Minimal</option>
                                <option value="bold">Bold Numbers</option>
                                <option value="icons">With Icons</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#1e40af" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'grid';
                    const bgColor = style.bg || '#1e40af';
                    const textColor = style.textColor || '#ffffff';
                    const title = data.title || 'Our Achievements';

                    const stats = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^stat-value-(.+)$/);
                        if (match) {
                            const id = match[1];
                            stats.push({
                                value: data[`stat-value-${id}`],
                                label: data[`stat-label-${id}`]
                            });
                        }
                    });

                    if (stats.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                <h2 class="text-2xl font-bold text-center mb-8">${title}</h2>
                                <div class="text-center text-sm opacity-75">Add statistics to display</div>
                            </div>
                        `;
                    }

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    switch(layout) {
                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-6">
                                        ${stats.map(stat => `
                                            <div class="text-center">
                                                <div class="text-4xl font-bold mb-2">${stat.value || '0'}</div>
                                                <div class="text-sm opacity-90">${stat.label || 'Stat'}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">${title}</h2>
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${stats.map(stat => `
                                            <div class="bg-white rounded-xl p-5 shadow-lg text-center">
                                                <div class="text-3xl font-bold mb-1" style="color: ${bgColor};">${stat.value || '0'}</div>
                                                <div class="text-xs text-gray-600 uppercase tracking-wide">${stat.label || 'Stat'}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${stats.map(stat => `
                                            <div class="flex items-center justify-between border-b pb-3 opacity-90" style="border-color: ${textColor}40;">
                                                <div class="text-sm">${stat.label || 'Stat'}</div>
                                                <div class="text-2xl font-bold">${stat.value || '0'}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'bold':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-6">
                                        ${stats.map(stat => `
                                            <div class="text-center p-4 rounded-xl" style="background: ${textColor}10;">
                                                <div class="text-5xl font-black mb-2">${stat.value || '0'}</div>
                                                <div class="text-xs uppercase tracking-widest opacity-75">${stat.label || 'Stat'}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'icons':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${stats.map(stat => `
                                            <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${textColor}15;">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${textColor};">
                                                    <span style="color: ${bgColor};">📊</span>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="text-3xl font-bold">${stat.value || '0'}</div>
                                                    <div class="text-xs opacity-90">${stat.label || 'Stat'}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-6">
                                        ${stats.map(stat => `
                                            <div class="text-center">
                                                <div class="text-3xl font-bold mb-2">${stat.value || '0'}</div>
                                                <div class="text-sm opacity-90">${stat.label || 'Stat'}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
