// Portfolio Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.portfolio = {
                name: '📁 Portfolio',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Work" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (optional)</label>
                            <input type="text" placeholder="Check out our recent projects" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Portfolio Items (one per line)</label>
                            <textarea placeholder="Project Name 1&#10;Project Name 2&#10;Project Name 3&#10;Project Name 4" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
                            <p class="text-xs text-gray-500 mt-1">Add project names or descriptions</p>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid Layout</option>
                                <option value="masonry">Masonry Style</option>
                                <option value="cards">Project Cards</option>
                                <option value="list">List View</option>
                                <option value="carousel">Carousel Style</option>
                                <option value="modern-grid">Modern Grid</option>
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
                    const layout = style.layout || 'grid';
                    const bg = style.bg || '#ffffff';
                    const accent = style.accent || '#2563eb';
                    const title = data.title || 'Our Work';
                    const subtitle = data.subtitle || '';
                    const items = data.items ? data.items.split('\n').filter(i => i.trim()) : [];

                    // Portfolio emojis for visual variety
                    const portfolioEmojis = ['📱', '💻', '🎨', '🖥️', '📊', '🎯', '💡', '⚡', '🚀', '🎪'];

                    if (items.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bg};">
                                <h2 class="text-2xl font-bold text-center mb-4" style="color: ${accent};">${title}</h2>
                                ${subtitle ? `<p class="text-center text-gray-500 text-sm mb-8">${subtitle}</p>` : ''}
                                <div class="max-w-md mx-auto text-center">
                                    <div class="text-5xl mb-4">📁</div>
                                    <p class="text-gray-500 text-sm">Add portfolio items to display</p>
                                </div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'masonry':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="grid grid-cols-2 gap-3">
                                            ${items.map((item, index) => {
                                                const isLarge = index % 3 === 0;
                                                return `
                                                    <div class="${isLarge ? 'col-span-2' : ''} group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all" style="background: linear-gradient(135deg, ${accent}20 0%, ${accent}10 100%); min-height: ${isLarge ? '200px' : '150px'};">
                                                        <div class="absolute inset-0 flex items-center justify-center">
                                                            <div class="text-center p-4">
                                                                <div class="text-4xl mb-2">${portfolioEmojis[index % portfolioEmojis.length]}</div>
                                                                <div class="font-semibold text-sm text-gray-800">${item}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            ${items.map((item, index) => `
                                                <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                                    <div class="h-40 flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, ${accent}30 0%, ${accent}10 100%);">
                                                        ${portfolioEmojis[index % portfolioEmojis.length]}
                                                    </div>
                                                    <div class="p-6">
                                                        <h3 class="font-bold text-lg text-gray-800 mb-2">${item}</h3>
                                                        <div class="flex items-center gap-2 text-sm" style="color: ${accent};">
                                                            <span>View Project</span>
                                                            <span>→</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-3xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="space-y-4">
                                            ${items.map((item, index) => `
                                                <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4" style="border-color: ${accent};">
                                                    <div class="w-14 h-14 rounded-lg flex items-center justify-center text-3xl flex-shrink-0" style="background: ${accent}15;">
                                                        ${portfolioEmojis[index % portfolioEmojis.length]}
                                                    </div>
                                                    <div class="flex-1">
                                                        <h3 class="font-bold text-gray-800">${item}</h3>
                                                        <p class="text-xs text-gray-500">Portfolio Project ${index + 1}</p>
                                                    </div>
                                                    <div style="color: ${accent};">→</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'carousel':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-3xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="relative">
                                            <div class="overflow-x-auto pb-4 flex gap-4 snap-x">
                                                ${items.map((item, index) => `
                                                    <div class="flex-shrink-0 w-64 snap-start">
                                                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                                                            <div class="h-48 flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, ${accent}25 0%, ${accent}05 100%);">
                                                                ${portfolioEmojis[index % portfolioEmojis.length]}
                                                            </div>
                                                            <div class="p-4 text-center">
                                                                <h3 class="font-bold text-gray-800">${item}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                            <div class="text-center mt-4 text-xs text-gray-500">Swipe to see more →</div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern-grid':
                            return `
                                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${accent}05 100%);">
                                    <div class="max-w-5xl mx-auto">
                                        <div class="text-center mb-12">
                                            <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${accent}; color: white;">${subtitle || 'PORTFOLIO'}</div>
                                            <h2 class="text-4xl font-bold" style="color: ${accent};">${title}</h2>
                                        </div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            ${items.map((item, index) => `
                                                <div class="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all overflow-hidden">
                                                    <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5" style="background: ${accent};"></div>
                                                    <div class="relative text-center">
                                                        <div class="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl" style="background: ${accent}15;">
                                                            ${portfolioEmojis[index % portfolioEmojis.length]}
                                                        </div>
                                                        <h3 class="font-bold text-gray-800 mb-2">${item}</h3>
                                                        <div class="text-xs font-medium" style="color: ${accent};">View Details →</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'grid':
                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <h2 class="text-2xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                    ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                    <div class="max-w-4xl mx-auto grid grid-cols-2 gap-4">
                                        ${items.map((item, index) => `
                                            <div class="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all" style="background: linear-gradient(135deg, ${accent}20 0%, ${accent}05 100%); min-height: 150px;">
                                                <div class="absolute inset-0 flex flex-col items-center justify-center p-4">
                                                    <div class="text-4xl mb-2">${portfolioEmojis[index % portfolioEmojis.length]}</div>
                                                    <div class="font-semibold text-sm text-gray-800 text-center">${item}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
