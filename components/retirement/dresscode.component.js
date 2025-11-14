// Dress Code Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="dressCode" onchange="updatePreview()">
                    <option value="">Select dress code...</option>
                    <option value="formal">Formal / Black Tie</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="business">Business Casual</option>
                    <option value="casual">Casual</option>
                    <option value="custom">Custom</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Any special instructions or suggestions..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
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
            'formal': '🎩 Formal attire: Suits, ties, and evening gowns',
            'semi-formal': '👔 Semi-formal: Dress shirts, slacks, and cocktail dresses',
            'business': '💼 Business casual: Smart but comfortable attire',
            'casual': '👕 Casual: Comfortable, everyday clothing',
            'custom': data.details || 'Please refer to additional details'
        };

        const description = dressCodeDescriptions[data.dressCode] || 'Dress code information';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto text-center">
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>
                    <div class="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-200">
                        <div class="text-4xl mb-4">👔</div>
                        <p class="text-lg font-semibold text-gray-900 mb-2">${description}</p>
                        ${data.details && data.dressCode !== 'custom' ? `
                            <p class="text-gray-600 text-sm mt-4">${data.details}</p>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
