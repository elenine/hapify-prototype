// Dress Code Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="type" onchange="updatePreview()">
                    <option value="">Select...</option>
                    <option value="formal">Formal/Black Tie</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="cocktail">Cocktail Attire</option>
                    <option value="smart-casual">Smart Casual</option>
                    <option value="casual">Casual</option>
                    <option value="festive">Festive/Theme</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Feel free to wear your favorite colors..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Suggested Colors (optional)</label>
                <input type="text" placeholder="Gold, Silver, Burgundy" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="colors" oninput="updatePreview()">
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
    render: (data, style, globalStyles) => {
        const typeLabels = {
            'formal': 'Formal / Black Tie',
            'semi-formal': 'Semi-Formal',
            'cocktail': 'Cocktail Attire',
            'smart-casual': 'Smart Casual',
            'casual': 'Casual',
            'festive': 'Festive / Theme'
        };
        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">👔</div>
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>
                    ${data.type ? `
                        <div class="bg-red-50 p-6 rounded-lg mb-4">
                            <p class="text-xl font-semibold text-red-700">${typeLabels[data.type] || data.type}</p>
                        </div>
                    ` : ''}
                    ${data.colors ? `
                        <div class="mb-4">
                            <p class="text-sm text-gray-600"><strong>Suggested Colors:</strong> ${data.colors}</p>
                        </div>
                    ` : ''}
                    ${data.details ? `<p class="text-gray-700 px-4">${data.details}</p>` : ''}
                </div>
            </div>
        `;
    }
};
