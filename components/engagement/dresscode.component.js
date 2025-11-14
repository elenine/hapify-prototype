// Dress Code Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dresscodeType" onchange="updatePreview()">
                    <option value="">Select dress code...</option>
                    <option value="formal">Formal / Black Tie</option>
                    <option value="semiformal">Semi-Formal / Cocktail</option>
                    <option value="casual">Casual Elegant</option>
                    <option value="beach">Beach Casual</option>
                    <option value="garden">Garden Party</option>
                    <option value="custom">Custom</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Additional dress code information..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Color Suggestions (Optional)</label>
                <input type="text" placeholder="e.g., Pastel colors, Earth tones" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="colors" oninput="updatePreview()">
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
        const dressCodeDescriptions = {
            formal: 'Floor-length gowns for women, tuxedos or dark suits for men',
            semiformal: 'Cocktail dresses for women, suits or dress shirts for men',
            casual: 'Smart casual attire, dress pants and nice tops',
            beach: 'Light, flowing fabrics, sundresses, linen shirts',
            garden: 'Floral prints, light colors, garden party attire',
            custom: data.details || 'Please dress comfortably'
        };

        const description = data.dresscodeType ? dressCodeDescriptions[data.dresscodeType] : '';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto text-center">
                    <div class="text-5xl mb-4">👔</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Dress Code'}</h2>
                    ${data.dresscodeType ? `
                        <div class="mb-6">
                            <div class="inline-block px-6 py-3 bg-rose-100 rounded-full">
                                <span class="text-rose-700 font-semibold">${data.dresscodeType.replace(/^\w/, c => c.toUpperCase()).replace(/([A-Z])/g, ' $1')}</span>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">${description}</p>
                    ` : ''}
                    ${data.details && data.dresscodeType !== 'custom' ? `<p class="text-gray-600 mb-4">${data.details}</p>` : ''}
                    ${data.colors ? `
                        <div class="mt-6 p-4 bg-rose-50 rounded-lg">
                            <div class="text-sm font-semibold text-gray-700 mb-2">Suggested Colors</div>
                            <div class="text-gray-600">${data.colors}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
