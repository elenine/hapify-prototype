// Clients & Partners Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.clients = {
                name: '🤝 Clients & Partners',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Clients & Partners" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Client Names (one per line)</label>
                            <textarea placeholder="Company A&#10;Company B&#10;Company C&#10;Company D&#10;Company E&#10;Company F" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="clients" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid View</option>
                                <option value="carousel">Carousel Strip</option>
                                <option value="minimal">Minimal List</option>
                                <option value="cards">Card Style</option>
                                <option value="badges">Badge Style</option>
                                <option value="gradient">Gradient Cards</option>
                                <option value="timeline">Timeline View</option>
                                <option value="floating">Floating Style</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                                <option value="2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'grid';
                    const bgColor = style.bg || '#f9fafb';
                    const accentColor = style.accent || '#3b82f6';
                    const secondaryColor = style.secondary || '#10b981';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
                    const title = data.title || 'Our Clients & Partners';
                    const clients = (data.clients || '').split('\n').filter(c => c.trim());

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (clients.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add client names to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-3 gap-4">
                                        ${clients.map(client => `
                                            <div class="aspect-square bg-white rounded-xl border-2 flex items-center justify-center p-3 hover:shadow-md transition" style="border-color: ${accentColor}20;">
                                                <div class="text-center">
                                                    <div class="text-xs font-bold leading-tight" style="color: ${accentColor};">${client.trim()}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'carousel':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto overflow-hidden">
                                        <div class="flex gap-4 pb-4">
                                            ${clients.map(client => `
                                                <div class="flex-shrink-0 w-24 h-24 bg-white rounded-xl border-2 flex items-center justify-center p-3 shadow-sm" style="border-color: ${accentColor}20;">
                                                    <div class="text-center">
                                                        <div class="text-xs font-bold leading-tight" style="color: ${accentColor};">${client.trim()}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="flex justify-center gap-2 mt-2">
                                            ${clients.slice(0, Math.min(5, clients.length)).map((_, idx) => `
                                                <div class="w-2 h-2 rounded-full ${idx === 0 ? 'opacity-100' : 'opacity-30'}" style="background: ${accentColor};"></div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-2">
                                        ${clients.map(client => `
                                            <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition border-l-4" style="border-color: ${accentColor};">
                                                <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                                <div class="font-semibold text-sm">${client.trim()}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${clients.map(client => `
                                            <div class="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition text-center border-t-4" style="border-color: ${accentColor};">
                                                <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white text-xl" style="background: ${accentColor};">
                                                    🤝
                                                </div>
                                                <div class="font-bold text-sm">${client.trim()}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'badges':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto flex flex-wrap justify-center gap-3">
                                        ${clients.map(client => `
                                            <div class="px-4 py-2 rounded-full font-semibold text-sm text-white shadow-md hover:shadow-lg transition" style="background: ${accentColor};">
                                                ${client.trim()}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${clients.map((client, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const gradientColor = isEven ? `linear-gradient(135deg, ${accentColor}, ${secondaryColor})` : `linear-gradient(135deg, ${secondaryColor}, ${accentColor})`;
                                            return `
                                            <div class="${radius} ${shadowClass} p-5 text-center hover:shadow-2xl transition" style="background: ${gradientColor};">
                                                <div class="text-white font-bold text-sm">${client.trim()}</div>
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            `;

                        case 'timeline':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto relative">
                                        <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}40;"></div>
                                        <div class="space-y-4">
                                            ${clients.map((client, idx) => `
                                                <div class="relative pl-16">
                                                    <div class="absolute left-5 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: ${accentColor};">
                                                        ${idx + 1}
                                                    </div>
                                                    <div class="bg-white p-4 ${radius} ${shadowClass} border-l-4" style="border-color: ${accentColor};">
                                                        <div class="font-semibold text-sm">${client.trim()}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${clients.map((client, idx) => `
                                            <div class="relative">
                                                <div class="bg-white ${radius} ${shadowClass} p-5 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
                                                    <div class="font-semibold text-sm">${client.trim()}</div>
                                                </div>
                                                <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg" style="background: ${accentColor};">
                                                    🤝
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
                                    <div class="max-w-md mx-auto grid grid-cols-3 gap-4">
                                        ${clients.map(client => `
                                            <div class="aspect-square bg-white rounded-lg border-2 flex items-center justify-center p-3" style="border-color: ${accentColor}20;">
                                                <div class="text-center">
                                                    <div class="text-xs font-semibold">${client.trim()}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
