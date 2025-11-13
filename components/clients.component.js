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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Logo Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="logoStyle" onchange="updatePreview()">
                                <option value="boxes">Boxes</option>
                                <option value="circles" selected>Circles</option>
                                <option value="minimal">Minimal</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const clients = (data.clients || '').split('\n').filter(c => c.trim());
                    const logoStyle = style.logoStyle || 'circles';
                    const styleClasses = {
                        boxes: 'rounded-lg border-2 border-gray-200',
                        circles: 'rounded-full border-2 border-gray-200',
                        minimal: 'rounded'
                    };
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Clients & Partners'}</h2>
                            <div class="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6">
                                ${clients.map(client => `
                                    <div class="flex items-center justify-center">
                                        <div class="w-20 h-20 bg-white ${styleClasses[logoStyle]} flex items-center justify-center p-3 hover:shadow-md transition">
                                            <div class="text-center">
                                                <div class="text-xs font-semibold text-gray-700 leading-tight">${client.trim()}</div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            };
