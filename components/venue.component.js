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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const addressLines = data.address ? data.address.split('\n').filter(l => l.trim()) : [];
                    const infoLines = data.info ? data.info.split('\n').filter(l => l.trim()) : [];
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
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
            };
