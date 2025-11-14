// Transportation & Parking Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.transportation = {
    name: '🚗 Transportation',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Transportation & Parking" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information</label>
                <textarea placeholder="Free parking available in the venue lot&#10;&#10;Additional parking on Main Street&#10;&#10;Valet parking available for $10" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transportation</label>
                <textarea placeholder="Bus routes: 12, 34, 56&#10;Nearest Metro: Central Station (10 min walk)" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="publicTransport" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <input type="text" placeholder="Rideshare drop-off area at main entrance" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="notes" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="stacked">Stacked</option>
                    <option value="columns">Two Columns</option>
                    <option value="compact">Compact</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'stacked';

        if (layout === 'columns') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
                    <div class="max-w-5xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">🚗</div>
                            <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Transportation & Parking'}</h3>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            ${data.parking ? `
                                <div class="bg-white rounded-xl p-6 shadow-md">
                                    <div class="text-3xl mb-3">🅿️</div>
                                    <h4 class="text-xl font-bold mb-3 text-gray-900">Parking</h4>
                                    <div class="text-gray-700 leading-relaxed whitespace-pre-line">${data.parking}</div>
                                </div>
                            ` : ''}
                            ${data.publicTransport ? `
                                <div class="bg-white rounded-xl p-6 shadow-md">
                                    <div class="text-3xl mb-3">🚌</div>
                                    <h4 class="text-xl font-bold mb-3 text-gray-900">Public Transport</h4>
                                    <div class="text-gray-700 leading-relaxed whitespace-pre-line">${data.publicTransport}</div>
                                </div>
                            ` : ''}
                        </div>
                        ${data.notes ? `<div class="mt-6 text-center text-gray-600 bg-green-50 rounded-lg p-4">${data.notes}</div>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${style.bg || '#f0fdf4'}; border-top: 2px solid #22c55e; border-bottom: 2px solid #22c55e;">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex items-start gap-6">
                            <div class="text-4xl flex-shrink-0">🚗</div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4 text-gray-900">${data.title || 'Transportation & Parking'}</h3>
                                <div class="space-y-3">
                                    ${data.parking ? `<div><strong class="text-gray-900">🅿️ Parking:</strong> <span class="text-gray-700">${data.parking.split('\n').join(' • ')}</span></div>` : ''}
                                    ${data.publicTransport ? `<div><strong class="text-gray-900">🚌 Public Transport:</strong> <span class="text-gray-700">${data.publicTransport.split('\n').join(' • ')}</span></div>` : ''}
                                    ${data.notes ? `<div class="text-green-700 font-medium">ℹ️ ${data.notes}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🚗</div>
                        <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Transportation & Parking'}</h3>
                    </div>
                    <div class="bg-white rounded-xl p-8 shadow-md space-y-6">
                        ${data.parking ? `
                            <div>
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-2xl">🅿️</span>
                                    <h4 class="text-xl font-bold text-gray-900">Parking</h4>
                                </div>
                                <div class="text-gray-700 leading-relaxed whitespace-pre-line pl-8">${data.parking}</div>
                            </div>
                        ` : ''}
                        ${data.publicTransport ? `
                            <div>
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-2xl">🚌</span>
                                    <h4 class="text-xl font-bold text-gray-900">Public Transportation</h4>
                                </div>
                                <div class="text-gray-700 leading-relaxed whitespace-pre-line pl-8">${data.publicTransport}</div>
                            </div>
                        ` : ''}
                        ${data.notes ? `<div class="pt-4 border-t border-gray-200 text-center text-green-700 font-medium">${data.notes}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
