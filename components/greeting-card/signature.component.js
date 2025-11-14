// Signature Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sign-off Message</label>
                <input type="text" placeholder="With love and warm wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="signoff" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="From: John & Family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Plain Text</option>
                    <option value="elegant">Elegant - With Divider</option>
                    <option value="handwritten">Handwritten - Script Style</option>
                    <option value="formal">Formal - Traditional</option>
                    <option value="casual">Casual - Friendly</option>
                    <option value="boxed">Boxed - Framed Signature</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right" selected>Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#374151" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="nameColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Icon/Emoji</label>
                <input type="text" placeholder="💝" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="icon" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simple';
        const align = style.align || 'right';
        const bgColor = style.bg || '#f9fafb';
        const textColor = style.textColor || globalStyles.textColor;
        const nameColor = style.nameColor || globalStyles.primaryColor;
        const icon = style.icon || '';

        const fontSizes = {
            small: { signoff: 'text-sm', name: 'text-base' },
            medium: { signoff: 'text-base', name: 'text-lg' },
            large: { signoff: 'text-lg', name: 'text-xl' },
            xlarge: { signoff: 'text-xl', name: 'text-2xl' }
        };
        const sizes = fontSizes[style.fontSize] || fontSizes.large;

        const signoff = data.signoff || '';
        const name = data.name || 'Your Name';

        // Simple Layout
        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${signoff ? `<p class="${sizes.signoff} mb-2 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        <p class="${sizes.name} font-semibold" style="color: ${nameColor}">${name}</p>
                        ${icon ? `<span class="text-2xl mt-2 inline-block">${icon}</span>` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${signoff ? `<p class="${sizes.signoff} mb-4 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        <div class="inline-block" style="text-align: ${align}">
                            <div class="mb-2" style="border-bottom: 2px solid ${nameColor}; padding-bottom: 8px;">
                                <p class="${sizes.name} font-semibold" style="color: ${nameColor}">${name}</p>
                            </div>
                            ${icon ? `<span class="text-xl">${icon}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Handwritten Layout
        if (layout === 'handwritten') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${signoff ? `<p class="${sizes.signoff} mb-3 font-serif italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        <p class="${sizes.name} font-serif italic font-bold" style="color: ${nameColor}; text-decoration: underline; text-decoration-style: wavy;">${name}</p>
                        ${icon ? `<span class="text-2xl mt-2 inline-block">${icon}</span>` : ''}
                    </div>
                </div>
            `;
        }

        // Formal Layout
        if (layout === 'formal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="inline-block border-2 rounded px-6 py-4" style="border-color: ${nameColor}">
                            ${signoff ? `<p class="${sizes.signoff} mb-2" style="color: ${textColor}">${signoff}</p>` : ''}
                            <p class="${sizes.name} font-bold" style="color: ${nameColor}">${name}</p>
                            ${icon ? `<span class="text-xl mt-1 block">${icon}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Casual Layout
        if (layout === 'casual') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${icon ? `<span class="text-3xl mb-2 inline-block">${icon}</span><br>` : ''}
                        ${signoff ? `<p class="${sizes.signoff} mb-2" style="color: ${textColor}">${signoff}</p>` : ''}
                        <p class="${sizes.name} font-bold" style="color: ${nameColor}">~ ${name} ~</p>
                        <div class="mt-2 flex items-center gap-2" style="justify-content: ${align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'}">
                            <span style="color: ${nameColor}">♥</span>
                            <span style="color: ${nameColor}">♥</span>
                            <span style="color: ${nameColor}">♥</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Boxed Layout
        if (layout === 'boxed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <div class="p-6 rounded-lg shadow-lg text-center" style="background: linear-gradient(135deg, ${nameColor}15 0%, ${nameColor}05 100%); border: 2px solid ${nameColor}">
                            ${icon ? `<div class="text-3xl mb-3">${icon}</div>` : ''}
                            ${signoff ? `<p class="${sizes.signoff} mb-3 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                            <div class="inline-block px-4 py-2 rounded" style="background: ${nameColor}">
                                <p class="${sizes.name} font-bold text-white">${name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                    ${signoff ? `<p class="${sizes.signoff} mb-2 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                    <p class="${sizes.name} font-semibold" style="color: ${nameColor}">${name}</p>
                    ${icon ? `<span class="text-2xl mt-2 inline-block">${icon}</span>` : ''}
                </div>
            </div>
        `;
    }
};
