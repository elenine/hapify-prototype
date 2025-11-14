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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
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

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#eef2ff'}">
                <div class="max-w-2xl mx-auto text-center">
                    <div class="text-5xl mb-4">${icon}</div>
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>

                    <div class="bg-white rounded-xl p-8 shadow-sm max-w-lg mx-auto">
                        ${data.type ? `
                            <div class="mb-4">
                                <div class="inline-block px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-lg mb-3">
                                    ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </div>
                                ${description ? `<p class="text-gray-600 text-sm">${description}</p>` : ''}
                            </div>
                        ` : ''}

                        ${data.theme ? `
                            <div class="mt-6 pt-6 border-t border-gray-200">
                                <div class="text-sm font-semibold text-gray-700 mb-2">🎨 Color Scheme</div>
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
};
