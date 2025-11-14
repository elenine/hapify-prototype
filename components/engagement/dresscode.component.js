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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="card">Fashion Card</option>
                    <option value="split">Split View</option>
                    <option value="banner">Elegant Banner</option>
                    <option value="grid">Icon Grid</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#e11d48';
        const cardBg = style.cardBg || '#fdf2f8';
        const textColor = style.textColor || '#1f2937';

        const dressCodeDescriptions = {
            formal: 'Floor-length gowns for women, tuxedos or dark suits for men',
            semiformal: 'Cocktail dresses for women, suits or dress shirts for men',
            casual: 'Smart casual attire, dress pants and nice tops',
            beach: 'Light, flowing fabrics, sundresses, linen shirts',
            garden: 'Floral prints, light colors, garden party attire',
            custom: data.details || 'Please dress comfortably'
        };

        const description = data.dresscodeType ? dressCodeDescriptions[data.dresscodeType] : '';
        const displayType = data.dresscodeType ? data.dresscodeType.replace(/^\w/, c => c.toUpperCase()).replace(/([A-Z])/g, ' $1') : '';

        if (layout === 'card') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="p-8 rounded-2xl shadow-xl" style="background: ${cardBg};">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg" style="background: ${accent}20;">
                                    👔
                                </div>
                                <div>
                                    <h2 class="text-2xl font-bold">${data.title || 'Dress Code'}</h2>
                                    ${data.dresscodeType ? `<div class="inline-block px-4 py-1 rounded-full text-sm font-semibold mt-2 text-white" style="background: ${accent};">${displayType}</div>` : ''}
                                </div>
                            </div>
                            ${description ? `<p class="text-gray-700 mb-4 leading-relaxed">${description}</p>` : ''}
                            ${data.details && data.dresscodeType !== 'custom' ? `<p class="text-gray-600 mb-4">${data.details}</p>` : ''}
                            ${data.colors ? `
                                <div class="mt-6 p-4 bg-white rounded-lg border" style="border-color: ${accent}30;">
                                    <div class="text-sm font-semibold mb-2" style="color: ${accent};">Suggested Colors</div>
                                    <div class="text-gray-600">${data.colors}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-center">
                                <div class="inline-block p-8 rounded-3xl shadow-xl" style="background: ${cardBg};">
                                    <div class="text-7xl mb-4">👔</div>
                                    ${data.dresscodeType ? `<div class="inline-block px-6 py-2 rounded-full text-sm font-bold text-white" style="background: ${accent};">${displayType}</div>` : ''}
                                </div>
                            </div>
                            <div>
                                <h2 class="text-3xl font-bold mb-4">${data.title || 'Dress Code'}</h2>
                                ${description ? `<p class="text-gray-700 mb-4 leading-relaxed">${description}</p>` : ''}
                                ${data.details && data.dresscodeType !== 'custom' ? `<p class="text-gray-600 mb-4">${data.details}</p>` : ''}
                                ${data.colors ? `
                                    <div class="mt-4 p-4 rounded-lg" style="background: ${cardBg};">
                                        <div class="text-sm font-semibold mb-2" style="color: ${accent};">Suggested Colors</div>
                                        <div class="text-gray-600">${data.colors}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="p-10 rounded-3xl shadow-2xl text-center text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%);">
                            <div class="text-6xl mb-4">👔</div>
                            <h2 class="text-4xl font-bold mb-4">${data.title || 'Dress Code'}</h2>
                            ${data.dresscodeType ? `
                                <div class="mb-6">
                                    <div class="inline-block px-8 py-3 bg-white rounded-full shadow-lg" style="color: ${accent};">
                                        <span class="font-bold text-lg">${displayType}</span>
                                    </div>
                                </div>
                            ` : ''}
                            ${description ? `<p class="text-lg mb-4 opacity-90 max-w-xl mx-auto">${description}</p>` : ''}
                            ${data.details && data.dresscodeType !== 'custom' ? `<p class="mb-4 opacity-80">${data.details}</p>` : ''}
                            ${data.colors ? `
                                <div class="mt-6 inline-block px-6 py-3 bg-white rounded-lg" style="color: ${accent};">
                                    <div class="text-sm font-semibold mb-1">Suggested Colors</div>
                                    <div class="text-gray-700">${data.colors}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'grid') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-5xl mb-4">👔</div>
                        <h2 class="text-3xl font-bold mb-8">${data.title || 'Dress Code'}</h2>
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <div class="p-6 rounded-xl shadow-lg" style="background: ${cardBg};">
                                <div class="text-4xl mb-3">👗</div>
                                <div class="font-bold text-lg mb-2">Women</div>
                                ${description && data.dresscodeType !== 'custom' ? `<p class="text-sm text-gray-600">${description.split(',')[0]}</p>` : `<p class="text-sm text-gray-600">${description}</p>`}
                            </div>
                            <div class="p-6 rounded-xl shadow-lg" style="background: ${cardBg};">
                                <div class="text-4xl mb-3">🤵</div>
                                <div class="font-bold text-lg mb-2">Men</div>
                                ${description && description.includes(',') && data.dresscodeType !== 'custom' ? `<p class="text-sm text-gray-600">${description.split(',')[1]}</p>` : `<p class="text-sm text-gray-600">${description}</p>`}
                            </div>
                        </div>
                        ${data.dresscodeType ? `<div class="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-4 text-white" style="background: ${accent};">${displayType}</div>` : ''}
                        ${data.details && data.dresscodeType !== 'custom' ? `<p class="text-gray-600 mt-4">${data.details}</p>` : ''}
                        ${data.colors ? `
                            <div class="mt-6 p-4 rounded-lg inline-block" style="background: ${cardBg};">
                                <div class="text-sm font-semibold mb-2" style="color: ${accent};">Suggested Colors</div>
                                <div class="text-gray-600">${data.colors}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="text-5xl mb-4">👔</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Dress Code'}</h2>
                        ${data.dresscodeType ? `
                            <div class="mb-6">
                                <div class="inline-block px-6 py-3 rounded-full" style="background: ${cardBg};">
                                    <span class="font-semibold" style="color: ${accent};">${displayType}</span>
                                </div>
                            </div>
                            <p class="text-gray-700 mb-4">${description}</p>
                        ` : ''}
                        ${data.details && data.dresscodeType !== 'custom' ? `<p class="text-gray-600 mb-4">${data.details}</p>` : ''}
                        ${data.colors ? `
                            <div class="mt-6 p-4 rounded-lg" style="background: ${cardBg};">
                                <div class="text-sm font-semibold mb-2 text-gray-700">Suggested Colors</div>
                                <div class="text-gray-600">${data.colors}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    }
};
