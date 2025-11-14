// About Us Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.about = {
                name: 'ℹ️ About Us',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="About Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (optional)</label>
                            <input type="text" placeholder="Learn more about our company" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Tell your business story..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">About Image (optional)</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer" onclick="this.querySelector('input').click()">
                                <div class="text-3xl mb-2">🖼️</div>
                                <div class="text-sm text-gray-600">Click to upload</div>
                                <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Highlights (one per line, optional)</label>
                            <textarea placeholder="Founded in 2020&#10;100+ Happy Clients&#10;Award Winning Team" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered</option>
                                <option value="split">Split Layout</option>
                                <option value="card">Card Style</option>
                                <option value="highlight-boxes">Highlight Boxes</option>
                                <option value="bordered">Bordered</option>
                                <option value="modern">Modern Split</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style, globalStyles) => {
                    const layout = style.layout || 'centered';
                    const bg = style.bg || '#ffffff';
                    const accent = style.accent || '#2563eb';
                    const title = data.title || 'About Us';
                    const subtitle = data.subtitle || '';
                    const description = data.description || 'Tell your business story here...';
                    const hasImage = data.image;
                    const highlights = data.highlights ? data.highlights.split('\n').filter(h => h.trim()) : [];

                    switch(layout) {
                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            ${hasImage ? `<img src="${data.image}" class="w-full rounded-2xl shadow-lg object-cover" style="max-height: 400px;">` : `<div class="w-full h-64 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, ${accent}20 0%, ${accent}10 100%);"><div class="text-7xl">ℹ️</div></div>`}
                                        </div>
                                        <div>
                                            <h2 class="text-3xl font-bold mb-3" style="color: ${accent};">${title}</h2>
                                            ${subtitle ? `<p class="text-sm text-gray-500 mb-4 uppercase tracking-wide">${subtitle}</p>` : ''}
                                            <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                            ${highlights.length > 0 ? `
                                                <div class="space-y-2">
                                                    ${highlights.map(h => `
                                                        <div class="flex items-center gap-2">
                                                            <div class="w-2 h-2 rounded-full" style="background: ${accent};"></div>
                                                            <span class="text-sm font-medium">${h}</span>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'card':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-3xl mx-auto">
                                        <div class="bg-white rounded-3xl shadow-xl overflow-hidden" style="border-top: 4px solid ${accent};">
                                            ${hasImage ? `<img src="${data.image}" class="w-full h-48 object-cover">` : `<div class="h-48 flex items-center justify-center" style="background: linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%);"><div class="text-7xl">ℹ️</div></div>`}
                                            <div class="p-8">
                                                <h2 class="text-2xl font-bold mb-3 text-center" style="color: ${accent};">${title}</h2>
                                                ${subtitle ? `<p class="text-sm text-gray-500 mb-4 text-center uppercase tracking-wide">${subtitle}</p>` : ''}
                                                <p class="text-gray-600 leading-relaxed text-center mb-6">${description}</p>
                                                ${highlights.length > 0 ? `
                                                    <div class="grid grid-cols-1 sm:grid-cols-${Math.min(highlights.length, 3)} gap-4 mt-6">
                                                        ${highlights.map(h => `
                                                            <div class="text-center p-4 rounded-lg" style="background: ${accent}10;">
                                                                <div class="text-sm font-semibold" style="color: ${accent};">${h}</div>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'highlight-boxes':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto text-center">
                                        <h2 class="text-3xl font-bold mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-sm text-gray-500 mb-6 uppercase tracking-wide">${subtitle}</p>` : ''}
                                        <p class="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">${description}</p>
                                        ${hasImage ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg border-4 border-white">` : ''}
                                        ${highlights.length > 0 ? `
                                            <div class="grid grid-cols-1 sm:grid-cols-${Math.min(highlights.length, 3)} gap-4">
                                                ${highlights.map(h => `
                                                    <div class="p-6 rounded-xl shadow-md bg-white border-2" style="border-color: ${accent}20;">
                                                        <div class="font-bold text-lg" style="color: ${accent};">${h}</div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'bordered':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-3xl mx-auto border-l-4 pl-8" style="border-color: ${accent};">
                                        ${hasImage ? `<img src="${data.image}" class="w-24 h-24 rounded-lg mb-6 object-cover shadow-md">` : `<div class="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-3xl" style="background: ${accent}20;">ℹ️</div>`}
                                        <h2 class="text-3xl font-bold mb-2" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-sm text-gray-500 mb-4">${subtitle}</p>` : ''}
                                        <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                        ${highlights.length > 0 ? `
                                            <div class="flex flex-wrap gap-3">
                                                ${highlights.map(h => `
                                                    <span class="px-4 py-2 rounded-full text-sm font-medium" style="background: ${accent}15; color: ${accent};">${h}</span>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${accent}08 100%);">
                                    <div class="max-w-5xl mx-auto">
                                        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                                            <div class="md:col-span-2">
                                                ${hasImage ? `<img src="${data.image}" class="w-full rounded-3xl shadow-2xl object-cover" style="max-height: 400px;">` : `<div class="w-full aspect-square rounded-3xl flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%);"><div class="text-8xl opacity-90">ℹ️</div></div>`}
                                            </div>
                                            <div class="md:col-span-3">
                                                <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${accent}; color: white;">${subtitle || 'ABOUT US'}</div>
                                                <h2 class="text-4xl font-bold mb-4" style="color: ${accent};">${title}</h2>
                                                <p class="text-gray-700 leading-relaxed text-lg mb-6">${description}</p>
                                                ${highlights.length > 0 ? `
                                                    <div class="grid grid-cols-2 gap-4">
                                                        ${highlights.map(h => `
                                                            <div class="flex items-center gap-3">
                                                                <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white" style="background: ${accent};">✓</div>
                                                                <span class="text-sm font-medium">${h}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'centered':
                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-2xl mx-auto text-center">
                                        ${hasImage ? `<img src="${data.image}" class="w-32 h-32 rounded-2xl mx-auto mb-6 object-cover shadow-lg">` : `<div class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl" style="background: ${accent}20;">ℹ️</div>`}
                                        <h2 class="text-3xl font-bold mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-sm text-gray-500 mb-4 uppercase tracking-wide">${subtitle}</p>` : ''}
                                        <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                        ${highlights.length > 0 ? `
                                            <div class="flex flex-wrap justify-center gap-6 mt-8">
                                                ${highlights.map(h => `
                                                    <div class="text-center">
                                                        <div class="text-2xl font-bold mb-1" style="color: ${accent};">✓</div>
                                                        <div class="text-sm font-medium text-gray-700">${h}</div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
