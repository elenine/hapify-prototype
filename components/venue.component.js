// Venue/Location Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.venue = {
                name: '📍 Venue',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Venue & Location" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                            <input type="text" placeholder="Grand Conference Center" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="venueName" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea placeholder="123 Main Street&#10;San Francisco, CA 94102&#10;United States" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info (Parking, Transit, etc.)</label>
                            <textarea placeholder="Free parking available on-site&#10;Metro Station: Powell St (2 blocks away)" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="mapcard">Map Card</option>
                                <option value="split">Split View</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="featured">Featured Venue</option>
                                <option value="blocks">Info Blocks</option>
                                <option value="gradient">Gradient Panel</option>
                                <option value="timeline">Timeline Details</option>
                                <option value="modern">Modern Card</option>
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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-3xl">Super Rounded</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-sm">Subtle</option>
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                                <option value="shadow-2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const addressLines = data.address ? data.address.split('\n').filter(l => l.trim()) : [];
                    const infoLines = data.info ? data.info.split('\n').filter(l => l.trim()) : [];
                    const layout = style.layout || 'mapcard';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#14b8a6';
                    const iconStyle = style.iconStyle || 'circle';

                    switch(layout) {
                        case 'mapcard':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue & Location'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4" style="border-top-color: ${accentColor}">
                                            <div class="p-6 text-center" style="background: linear-gradient(to bottom, ${accentColor}10, transparent)">
                                                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-lg" style="background: ${accentColor}">
                                                    <span class="text-4xl">📍</span>
                                                </div>
                                                <h3 class="text-xl font-bold text-gray-900 mb-1">${data.venueName || 'Venue Name'}</h3>
                                            </div>
                                            ${addressLines.length > 0 ? `
                                                <div class="px-6 py-4 bg-gray-50">
                                                    <div class="flex items-start gap-3">
                                                        <span class="text-lg mt-0.5">🗺️</span>
                                                        <div class="text-sm text-gray-700 space-y-0.5">
                                                            ${addressLines.map(line => `<div>${line}</div>`).join('')}
                                                        </div>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${infoLines.length > 0 ? `
                                                <div class="px-6 py-4 border-t border-gray-200">
                                                    <div class="space-y-2">
                                                        ${infoLines.map(line => `
                                                            <div class="flex items-start gap-2 text-sm text-gray-600">
                                                                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style="background: ${accentColor}"></span>
                                                                <span>${line}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue & Location'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                                            <div class="flex flex-col sm:flex-row">
                                                <div class="flex items-center justify-center p-8" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)">
                                                    <span class="text-7xl">📍</span>
                                                </div>
                                                <div class="flex-1 p-6">
                                                    <h3 class="text-lg font-bold text-gray-900 mb-3">${data.venueName || 'Venue Name'}</h3>
                                                    ${addressLines.length > 0 ? `
                                                        <div class="text-sm text-gray-600 space-y-1 mb-4">
                                                            ${addressLines.map(line => `<div>${line}</div>`).join('')}
                                                        </div>
                                                    ` : ''}
                                                    ${infoLines.length > 0 ? `
                                                        <div class="text-xs text-gray-500 space-y-1">
                                                            ${infoLines.map(line => `<div>• ${line}</div>`).join('')}
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue & Location'}</h2>
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}20">
                                            <span class="text-4xl">📍</span>
                                        </div>
                                        <h3 class="text-xl font-bold mb-4" style="color: ${accentColor}">${data.venueName || 'Venue Name'}</h3>
                                        ${addressLines.length > 0 ? `
                                            <div class="text-sm text-gray-600 space-y-1 mb-4">
                                                ${addressLines.map(line => `<div>${line}</div>`).join('')}
                                            </div>
                                        ` : ''}
                                        ${infoLines.length > 0 ? `
                                            <div class="mt-6 pt-6 border-t border-gray-200">
                                                <div class="text-xs text-gray-500 space-y-2">
                                                    ${infoLines.map(line => `<div>${line}</div>`).join('')}
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue & Location'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="relative rounded-3xl shadow-2xl overflow-hidden text-white" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)">
                                            <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-8 -mr-8">📍</div>
                                            <div class="relative p-8">
                                                <div class="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-medium mb-4">
                                                    Location Details
                                                </div>
                                                <h3 class="text-2xl font-bold mb-6">${data.venueName || 'Venue Name'}</h3>
                                                ${addressLines.length > 0 ? `
                                                    <div class="mb-6 pb-6 border-b border-white border-opacity-20">
                                                        <div class="flex items-start gap-3">
                                                            <span class="text-2xl">🗺️</span>
                                                            <div class="text-sm space-y-1 opacity-90">
                                                                ${addressLines.map(line => `<div>${line}</div>`).join('')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                                ${infoLines.length > 0 ? `
                                                    <div class="space-y-2">
                                                        ${infoLines.map(line => `
                                                            <div class="flex items-start gap-2 text-sm opacity-90">
                                                                <span class="text-base">✓</span>
                                                                <span>${line}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'blocks':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue & Location'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        <div class="bg-white rounded-xl shadow-md p-5 border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="flex items-center gap-3 mb-2">
                                                <span class="text-2xl">📍</span>
                                                <h3 class="text-sm font-bold text-gray-500 uppercase tracking-wide">Venue</h3>
                                            </div>
                                            <p class="text-base font-semibold text-gray-900">${data.venueName || 'Venue Name'}</p>
                                        </div>
                                        ${addressLines.length > 0 ? `
                                            <div class="bg-white rounded-xl shadow-md p-5 border-l-4" style="border-left-color: ${accentColor}">
                                                <div class="flex items-center gap-3 mb-2">
                                                    <span class="text-2xl">🗺️</span>
                                                    <h3 class="text-sm font-bold text-gray-500 uppercase tracking-wide">Address</h3>
                                                </div>
                                                <div class="text-sm text-gray-700 space-y-1">
                                                    ${addressLines.map(line => `<div>${line}</div>`).join('')}
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${infoLines.length > 0 ? `
                                            <div class="bg-white rounded-xl shadow-md p-5 border-l-4" style="border-left-color: ${accentColor}">
                                                <div class="flex items-center gap-3 mb-3">
                                                    <span class="text-2xl">ℹ️</span>
                                                    <h3 class="text-sm font-bold text-gray-500 uppercase tracking-wide">Additional Info</h3>
                                                </div>
                                                <div class="space-y-2">
                                                    ${infoLines.map(line => `
                                                        <div class="flex items-start gap-2 text-sm text-gray-600">
                                                            <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style="background: ${accentColor}"></span>
                                                            <span>${line}</span>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Venue & Location'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                            <div class="text-center mb-4">
                                                <div class="text-5xl mb-3">📍</div>
                                                <h3 class="text-xl font-bold">${data.venueName || 'Venue Name'}</h3>
                                            </div>
                                            ${addressLines.length > 0 ? `
                                                <div class="mt-4 pt-4 border-t">
                                                    <div class="text-sm text-gray-600 space-y-1">
                                                        ${addressLines.map(line => `<div>${line}</div>`).join('')}
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${infoLines.length > 0 ? `
                                                <div class="mt-4 pt-4 border-t">
                                                    <div class="text-sm text-gray-600 space-y-1">
                                                        ${infoLines.map(line => `<div>• ${line}</div>`).join('')}
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
