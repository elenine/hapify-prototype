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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="banner">Banner Style</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="boxed">Boxed Design</option>
                    <option value="elegant">Elegant Classic</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        const dressCodeDescriptions = {
            'formal': '🎩 Formal attire: Suits, ties, and evening gowns',
            'semi-formal': '👔 Semi-formal: Dress shirts, slacks, and cocktail dresses',
            'business': '💼 Business casual: Smart but comfortable attire',
            'casual': '👕 Casual: Comfortable, everyday clothing',
            'custom': data.details || 'Please refer to additional details'
        };

        const description = dressCodeDescriptions[data.dressCode] || 'Dress code information';

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>
                            <div class="rounded-lg p-6 shadow-md" style="background: ${accentColor}20; border: 2px solid ${accentColor}40;">
                                <div class="text-4xl mb-4">👔</div>
                                <p class="text-lg font-semibold mb-2">${description}</p>
                                ${data.details && data.dressCode !== 'custom' ? `
                                    <p class="text-sm opacity-80 mt-4">${data.details}</p>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'banner':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${accentColor}20; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">👔</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor};">${data.title || 'Dress Code'}</h2>
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <p class="text-lg font-medium mb-2">${description}</p>
                                ${data.details && data.dressCode !== 'custom' ? `
                                    <p class="text-sm opacity-70 mt-4">${data.details}</p>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-light mb-2">${data.title || 'Dress Code'}</h2>
                            <div class="w-16 h-0.5 mx-auto mb-6" style="background: ${accentColor};"></div>
                            <div class="text-3xl mb-4">👔</div>
                            <p class="text-lg font-medium mb-4">${description}</p>
                            ${data.details && data.dressCode !== 'custom' ? `
                                <p class="text-sm opacity-70">${data.details}</p>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'boxed':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="border-4 rounded-2xl p-8 text-center" style="border-color: ${accentColor};">
                                <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor};">${data.title || 'Dress Code'}</h2>
                                <div class="text-4xl mb-4">👔</div>
                                <div class="p-4 rounded-lg" style="background: ${accentColor}10;">
                                    <p class="font-medium mb-2">${description}</p>
                                    ${data.details && data.dressCode !== 'custom' ? `
                                        <p class="text-sm opacity-80 mt-3">${data.details}</p>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif">${data.title || 'Dress Code'}</h2>
                                <div class="w-24 h-0.5 mx-auto mt-3" style="background: ${accentColor};"></div>
                            </div>
                            <div class="text-4xl mb-6">👔</div>
                            <p class="text-lg font-serif italic mb-4">${description}</p>
                            ${data.details && data.dressCode !== 'custom' ? `
                                <p class="text-sm opacity-70">${data.details}</p>
                            ` : ''}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>
                            <div class="rounded-lg p-6 shadow-md" style="background: ${accentColor}20; border: 2px solid ${accentColor}40;">
                                <div class="text-4xl mb-4">👔</div>
                                <p class="text-lg font-semibold mb-2">${description}</p>
                                ${data.details && data.dressCode !== 'custom' ? `
                                    <p class="text-sm opacity-80 mt-4">${data.details}</p>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
