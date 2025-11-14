// Dress Code Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="type" oninput="updatePreview()">
                    <option value="">Select dress code...</option>
                    <option value="casual">Casual</option>
                    <option value="smart-casual">Smart Casual</option>
                    <option value="cocktail">Cocktail Attire</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="formal">Formal / Black Tie</option>
                    <option value="costume">Costume / Theme Party</option>
                    <option value="custom">Custom (specify below)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme/Color Scheme (Optional)</label>
                <input type="text" placeholder="e.g., Tropical, Hollywood Glam, All White, 80s Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="theme" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Feel free to dress up! We'll be taking lots of photos. Comfortable shoes recommended for dancing!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="minimal">Minimal</option>
                    <option value="banner">Banner Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const dressCodeIcons = {
            'casual': '👕',
            'smart-casual': '👔',
            'cocktail': '🥂',
            'semi-formal': '👗',
            'formal': '🤵',
            'costume': '🎭',
            'custom': '👚'
        };

        const dressCodeDescriptions = {
            'casual': 'Come as you are! Relaxed and comfortable.',
            'smart-casual': 'Dress to impress, but keep it comfortable.',
            'cocktail': 'Elegant cocktail dresses and suits.',
            'semi-formal': 'Dressy but not quite formal - think party chic!',
            'formal': 'Evening gowns and tuxedos. Time to go all out!',
            'costume': 'Get creative with your costume!',
            'custom': ''
        };

        const icon = data.type ? dressCodeIcons[data.type] || '👔' : '👔';
        const description = data.type ? dressCodeDescriptions[data.type] || '' : '';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-2xl mx-auto text-center">
                    <div class="text-5xl mb-4">${icon}</div>
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>

                    <div class="bg-white rounded-xl p-8 shadow-sm max-w-lg mx-auto">
                        ${data.type ? `
                            <div class="mb-4">
                                <div class="inline-block px-6 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold text-lg mb-3">
                                    ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </div>
                                ${description ? `<p class="text-gray-600 text-sm">${description}</p>` : ''}
                            </div>
                        ` : ''}

                        ${data.theme ? `
                            <div class="mt-6 pt-6 border-t border-gray-200">
                                <div class="text-sm font-semibold text-gray-700 mb-2">🎨 Theme</div>
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
