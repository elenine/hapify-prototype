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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic</option>
                    <option value="modern">Modern Card</option>
                    <option value="elegant">Elegant</option>
                    <option value="minimal">Minimal</option>
                    <option value="banner">Banner Style</option>
                    <option value="boxed">Boxed Info</option>
                    <option value="split">Split Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#fef2f2';
        const shadow = style.shadow || 'md';
        const borderRadius = style.borderRadius || 'lg';

        const typeLabels = {
            'formal': 'Formal / Black Tie',
            'semi-formal': 'Semi-Formal',
            'cocktail': 'Cocktail Attire',
            'smart-casual': 'Smart Casual',
            'casual': 'Casual',
            'festive': 'Festive / Theme'
        };

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">👔</div>
                        <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>
                        ${data.type ? `<div class="p-6 ${borderRadiusClasses[borderRadius]} mb-4" style="background: ${cardBg}"><p class="text-xl font-semibold" style="color: ${accentColor}">${typeLabels[data.type] || data.type}</p></div>` : ''}
                        ${data.colors ? `<div class="mb-4"><p class="text-sm text-gray-600"><strong>Suggested Colors:</strong> ${data.colors}</p></div>` : ''}
                        ${data.details ? `<p class="text-gray-700 px-4">${data.details}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="text-4xl">👔</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Dress Code'}</h2>
                            </div>
                            ${data.type ? `<div class="p-4 ${borderRadiusClasses[borderRadius]} mb-4" style="background: ${accentColor}; color: white"><p class="text-lg font-semibold">${typeLabels[data.type] || data.type}</p></div>` : ''}
                            ${data.colors ? `<p class="text-sm mb-4"><strong>Suggested Colors:</strong> ${data.colors}</p>` : ''}
                            ${data.details ? `<p class="text-gray-700">${data.details}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default simplified layout for other styles
        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                    <div class="text-4xl mb-4">👔</div>
                    <h2 class="text-xl font-bold mb-4">${data.title || 'Dress Code'}</h2>
                    ${data.type ? `<p class="text-lg font-semibold mb-4" style="color: ${accentColor}">${typeLabels[data.type] || data.type}</p>` : ''}
                    ${data.colors ? `<p class="text-sm mb-3">Colors: ${data.colors}</p>` : ''}
                    ${data.details ? `<p class="text-sm text-gray-700">${data.details}</p>` : ''}
                </div>
            </div>
        `;
    }
};
