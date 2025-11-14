// Features Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.features = {
                name: '✨ Features',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Why Choose Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Features</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'features', (id, num) => \`
                                    <div class='flex justify-between items-center mb-3'>
                                        <h5 class='font-medium text-gray-600'>Feature \${num}</h5>
                                        <button onclick='removeDynamicItem(this)' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
                                    </div>
                                    <div class='space-y-3'>
                                        <input type='text' placeholder='Icon (emoji)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-icon-\${id}' oninput='updatePreview()'>
                                        <input type='text' placeholder='Feature Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-title-\${id}' oninput='updatePreview()'>
                                        <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-desc-\${id}' oninput='updatePreview()'></textarea>
                                    </div>
                                \`); return false;" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Feature</button>
                            </div>
                            <div data-items-container="features"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid View</option>
                                <option value="list">List View</option>
                                <option value="cards">Card Style</option>
                                <option value="minimal">Minimal</option>
                                <option value="showcase">Showcase</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'grid';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#14b8a6';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const title = data.title || 'Why Choose Us';

                    const features = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^feature-icon-(.+)$/);
                        if (match) {
                            const id = match[1];
                            features.push({
                                icon: data[`feature-icon-${id}`],
                                title: data[`feature-title-${id}`],
                                desc: data[`feature-desc-${id}`]
                            });
                        }
                    });

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (features.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add features to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${features.map(feature => `
                                            <div class="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition text-center border-t-4" style="border-color: ${accentColor};">
                                                <div class="text-3xl mb-2">${feature.icon || '✨'}</div>
                                                <h3 class="text-sm font-bold mb-2">${feature.title || 'Feature'}</h3>
                                                ${feature.desc ? `<p class="text-xs text-gray-600">${feature.desc}</p>` : ''}
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
                                        ${features.map(feature => `
                                            <div class="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 border-l-4" style="border-color: ${accentColor};">
                                                <div class="text-3xl flex-shrink-0">${feature.icon || '✨'}</div>
                                                <div class="flex-1">
                                                    <h3 class="text-sm font-bold mb-1">${feature.title || 'Feature'}</h3>
                                                    ${feature.desc ? `<p class="text-xs text-gray-600">${feature.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${features.map(feature => `
                                            <div class="rounded-2xl p-5 shadow-lg text-center" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}25);">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 text-white" style="background: ${accentColor};">
                                                    ${feature.icon || '✨'}
                                                </div>
                                                <h3 class="text-base font-bold mb-2" style="color: ${accentColor};">${feature.title || 'Feature'}</h3>
                                                ${feature.desc ? `<p class="text-xs text-gray-700">${feature.desc}</p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${features.map(feature => `
                                            <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4" style="border-color: ${accentColor};">
                                                <div class="text-2xl">${feature.icon || '✨'}</div>
                                                <div class="flex-1">
                                                    <h3 class="text-sm font-semibold" style="color: ${accentColor};">${feature.title || 'Feature'}</h3>
                                                    ${feature.desc ? `<p class="text-xs text-gray-600 mt-1">${feature.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'showcase':
                            const featured = features[0];
                            const others = features.slice(1);
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${featured ? `
                                            <div class="rounded-2xl p-6 shadow-xl text-center text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                <div class="text-5xl mb-3">${featured.icon || '✨'}</div>
                                                <h3 class="text-lg font-bold mb-2">${featured.title || 'Feature'}</h3>
                                                ${featured.desc ? `<p class="text-xs opacity-90">${featured.desc}</p>` : ''}
                                            </div>
                                        ` : ''}
                                        ${others.length > 0 ? `
                                            <div class="grid grid-cols-2 gap-3">
                                                ${others.map(feature => `
                                                    <div class="bg-white rounded-xl p-4 shadow-sm text-center border-t-4" style="border-color: ${accentColor};">
                                                        <div class="text-2xl mb-2">${feature.icon || '✨'}</div>
                                                        <h3 class="text-xs font-bold">${feature.title || 'Feature'}</h3>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${features.map(feature => `
                                            <div class="bg-white rounded-xl p-4 shadow-md text-center">
                                                <div class="text-3xl mb-2">${feature.icon || '✨'}</div>
                                                <h3 class="text-sm font-bold mb-2">${feature.title || 'Feature'}</h3>
                                                ${feature.desc ? `<p class="text-xs text-gray-600">${feature.desc}</p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
