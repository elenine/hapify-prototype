// Services Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.services = {
                name: '⚙️ Services',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Services" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (optional)</label>
                            <input type="text" placeholder="What we offer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Services (one per line)</label>
                            <textarea placeholder="Web Development&#10;Mobile Apps&#10;Consulting&#10;Design Services" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="services" oninput="updatePreview()"></textarea>
                            <p class="text-xs text-gray-500 mt-1">Tip: Add emoji icons like "🌐 Web Development" for better visuals</p>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="list">List View</option>
                                <option value="grid-cards">Grid Cards</option>
                                <option value="icon-boxes">Icon Boxes</option>
                                <option value="minimal-list">Minimal List</option>
                                <option value="feature-cards">Feature Cards</option>
                                <option value="modern-grid">Modern Grid</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style, globalStyles) => {
                    const layout = style.layout || 'list';
                    const bg = style.bg || '#eff6ff';
                    const accent = style.accent || '#2563eb';
                    const title = data.title || 'Our Services';
                    const subtitle = data.subtitle || '';
                    const services = data.services ? data.services.split('\n').filter(s => s.trim()) : [];

                    if (services.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bg};">
                                <h2 class="text-2xl font-bold text-center mb-4" style="color: ${accent};">${title}</h2>
                                ${subtitle ? `<p class="text-center text-gray-500 text-sm mb-8">${subtitle}</p>` : ''}
                                <div class="text-center text-gray-500 text-sm">Add services to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'grid-cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            ${services.map(service => `
                                                <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4" style="border-color: ${accent};">
                                                    <div class="flex items-start gap-3">
                                                        <div class="text-2xl flex-shrink-0">⚙️</div>
                                                        <div class="font-semibold text-gray-800">${service}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'icon-boxes':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(services.length, 3)} gap-6">
                                            ${services.map(service => `
                                                <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                    <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style="background: ${accent}20;">
                                                        ⚙️
                                                    </div>
                                                    <div class="font-semibold text-gray-800 text-sm">${service}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal-list':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-2xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="space-y-4">
                                            ${services.map(service => `
                                                <div class="flex items-center gap-4 p-4 border-b border-gray-200">
                                                    <div class="w-2 h-2 rounded-full flex-shrink-0" style="background: ${accent};"></div>
                                                    <div class="font-medium text-gray-700">${service}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'feature-cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="space-y-4">
                                            ${services.map((service, index) => `
                                                <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-center gap-4">
                                                    <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0" style="background: ${accent};">
                                                        ${index + 1}
                                                    </div>
                                                    <div class="font-semibold text-gray-800">${service}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern-grid':
                            return `
                                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bg} 0%, white 100%);">
                                    <div class="max-w-5xl mx-auto">
                                        <div class="text-center mb-12">
                                            <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${accent}; color: white;">${subtitle || 'SERVICES'}</div>
                                            <h2 class="text-4xl font-bold" style="color: ${accent};">${title}</h2>
                                        </div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            ${services.map((service, index) => `
                                                <div class="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden">
                                                    <div class="absolute top-0 right-0 w-20 h-20 opacity-10 transform translate-x-6 -translate-y-6" style="background: ${accent}; border-radius: 50%;"></div>
                                                    <div class="relative">
                                                        <div class="text-3xl mb-3">⚙️</div>
                                                        <div class="font-bold text-lg text-gray-800">${service}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'list':
                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <h2 class="text-2xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                    ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${services.map(service => `
                                            <div class="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                                <div class="text-xl flex-shrink-0" style="color: ${accent};">✓</div>
                                                <div class="text-sm font-medium text-gray-800">${service}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
