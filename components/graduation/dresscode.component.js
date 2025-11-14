// Dress Code Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="type" oninput="updatePreview()">
                    <option value="">Select dress code...</option>
                    <option value="academic-regalia">Academic Regalia (Required)</option>
                    <option value="business-formal">Business Formal</option>
                    <option value="smart-casual">Smart Casual</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="formal">Formal</option>
                    <option value="custom">Custom (specify below)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Color Scheme (Optional)</label>
                <input type="text" placeholder="e.g., School colors, Black & Gold" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="theme" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Graduates should wear caps and gowns. Guests are encouraged to dress formally. Comfortable shoes recommended for outdoor areas." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="badge">Badge Style</option>
                    <option value="split">Split Layout</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';

        const dressCodeIcons = {
            'academic-regalia': '🎓',
            'business-formal': '👔',
            'smart-casual': '👕',
            'semi-formal': '👗',
            'formal': '🤵',
            'custom': '👚'
        };

        const dressCodeDescriptions = {
            'academic-regalia': 'Graduates must wear official academic regalia (cap and gown).',
            'business-formal': 'Business suits, dress shirts, formal dresses.',
            'smart-casual': 'Dress to impress, but keep it comfortable.',
            'semi-formal': 'Dressy attire - think celebration chic!',
            'formal': 'Formal attire - suits and elegant dresses.',
            'custom': ''
        };

        const icon = data.type ? dressCodeIcons[data.type] || '👔' : '🎓';
        const description = data.type ? dressCodeDescriptions[data.type] || '' : '';
        const displayName = data.type ? data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

        switch(layout) {
            case 'badge':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-8">${data.title || 'Dress Code'}</h2>
                            <div class="flex flex-wrap justify-center gap-4 mb-8">
                                ${data.type ? `
                                    <div class="px-8 py-4 rounded-full shadow-md" style="background: ${accent}; color: white">
                                        <div class="text-3xl mb-2">${icon}</div>
                                        <div class="font-bold">${displayName}</div>
                                    </div>
                                ` : ''}
                                ${data.theme ? `
                                    <div class="px-8 py-4 rounded-full border-2 shadow-md" style="border-color: ${accent}; color: ${accent}">
                                        <div class="text-3xl mb-2">🎨</div>
                                        <div class="font-bold">${data.theme}</div>
                                    </div>
                                ` : ''}
                            </div>
                            ${description ? `<p class="text-gray-600 mb-6">${description}</p>` : ''}
                            ${data.details ? `
                                <div class="max-w-lg mx-auto bg-white rounded-xl p-6 shadow-sm">
                                    <div class="text-sm text-gray-600 leading-relaxed">${data.details}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                                <div class="flex-1 p-8 text-center" style="background: ${accent}; color: white">
                                    <div class="text-7xl mb-4">${icon}</div>
                                    <h2 class="text-3xl font-bold mb-3">${data.title || 'Dress Code'}</h2>
                                    ${data.type ? `<div class="text-xl font-semibold">${displayName}</div>` : ''}
                                    ${data.theme ? `
                                        <div class="mt-6 pt-6 border-t border-white border-opacity-20">
                                            <div class="text-sm opacity-75 mb-2">Color Scheme</div>
                                            <div class="font-bold">${data.theme}</div>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="flex-1 bg-white p-8">
                                    ${description ? `<p class="text-gray-700 mb-6 font-medium">${description}</p>` : ''}
                                    ${data.details ? `
                                        <div class="text-sm text-gray-600 leading-relaxed">${data.details}</div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-10 border-t-8" style="border-color: ${accent}">
                                <div class="text-center mb-8">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accent}15">
                                        <div class="text-6xl">${icon}</div>
                                    </div>
                                    <h2 class="text-3xl font-serif font-bold mb-2" style="color: ${accent}">${data.title || 'Dress Code'}</h2>
                                    ${data.type ? `<div class="text-lg font-semibold text-gray-700">${displayName}</div>` : ''}
                                </div>
                                ${description ? `
                                    <div class="text-center mb-6 p-4 rounded-lg" style="background: ${accent}10">
                                        <p class="text-gray-700 font-medium">${description}</p>
                                    </div>
                                ` : ''}
                                <div class="space-y-4">
                                    ${data.theme ? `
                                        <div class="flex items-center gap-3 p-4 rounded-lg border" style="border-color: ${accent}33">
                                            <div class="text-2xl">🎨</div>
                                            <div>
                                                <div class="text-xs font-semibold mb-1" style="color: ${accent}">Color Scheme</div>
                                                <div class="font-medium">${data.theme}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.details ? `
                                        <div class="p-4 rounded-lg bg-gray-50">
                                            <div class="text-sm text-gray-600 leading-relaxed">${data.details}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto text-center">
                            <div class="text-5xl mb-4">${icon}</div>
                            <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>

                            <div class="bg-white rounded-xl p-8 shadow-sm max-w-lg mx-auto">
                                ${data.type ? `
                                    <div class="mb-4">
                                        <div class="inline-block px-6 py-2 rounded-full font-semibold text-lg mb-3" style="background: ${accent}20; color: ${accent}">
                                            ${displayName}
                                        </div>
                                        ${description ? `<p class="text-gray-600 text-sm">${description}</p>` : ''}
                                    </div>
                                ` : ''}

                                ${data.theme ? `
                                    <div class="mt-6 pt-6 border-t border-gray-200">
                                        <div class="text-sm font-semibold mb-2" style="color: ${accent}">🎨 Color Scheme</div>
                                        <div class="text-gray-800 font-medium">${data.theme}</div>
                                    </div>
                                ` : ''}

                                ${data.details ? `
                                    <div class="mt-6 pt-6 border-t border-gray-200">
                                        <div class="text-sm text-gray-600 leading-relaxed">
                                            ${data.details}
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
