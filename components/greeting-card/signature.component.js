// Signature Component for Holiday Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sign-off Message</label>
                <input type="text" placeholder="Warmest wishes for a wonderful holiday" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="signoff" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="The Johnson Family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Optional Date/Location</label>
                <input type="text" placeholder="December 2024, New York" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Signature Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="signatureStyle" onchange="updatePreview()">
                    <option value="simple">Simple</option>
                    <option value="handwritten">Handwritten Style</option>
                    <option value="formal">Formal</option>
                    <option value="card">Card Style</option>
                    <option value="decorative">Decorative</option>
                    <option value="modern">Modern Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="align" onchange="updatePreview()">
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
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Holiday Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="🎄">🎄 Christmas Tree</option>
                    <option value="❄️">❄️ Snowflake</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🎁">🎁 Gift</option>
                    <option value="💝">💝 Heart</option>
                    <option value="🕊️">🕊️ Dove</option>
                    <option value="🌟">🌟 Glowing Star</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const signatureStyle = style.signatureStyle || 'simple';
        const align = style.align || 'right';
        const bg = style.bg || '#f9fafb';
        const textColor = style.textColor || '#10b981';
        const icon = style.icon || 'none';

        const iconHTML = icon !== 'none' ? `<div class="text-3xl mb-2">${icon}</div>` : '';

        if (signatureStyle === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align};">
                        ${iconHTML}
                        ${data.signoff ? `<p class="text-lg mb-2 italic opacity-80" style="color: ${globalStyles.textColor};">${data.signoff}</p>` : ''}
                        <p class="text-xl font-semibold mb-1" style="color: ${textColor};">${data.name || 'Your Name'}</p>
                        ${data.date ? `<p class="text-sm opacity-70" style="color: ${globalStyles.textColor};">${data.date}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (signatureStyle === 'handwritten') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align};">
                        ${iconHTML}
                        ${data.signoff ? `<p class="text-xl mb-3 italic" style="color: ${globalStyles.textColor}; font-family: cursive;">${data.signoff}</p>` : ''}
                        <p class="text-2xl font-bold mb-1" style="color: ${textColor}; font-family: cursive;">${data.name || 'Your Name'}</p>
                        ${data.date ? `<p class="text-sm" style="color: ${globalStyles.textColor}; font-family: cursive;">${data.date}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (signatureStyle === 'formal') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align};">
                        ${data.signoff ? `<p class="text-lg mb-4 italic" style="color: ${globalStyles.textColor}; font-family: serif;">${data.signoff},</p>` : ''}
                        <div style="border-top: 2px solid ${textColor}; width: 200px; ${align === 'right' ? 'margin-left: auto;' : align === 'center' ? 'margin: 0 auto;' : ''}"></div>
                        ${iconHTML}
                        <p class="text-xl font-serif mt-4 mb-1" style="color: ${textColor};">${data.name || 'Your Name'}</p>
                        ${data.date ? `<p class="text-sm font-serif" style="color: ${globalStyles.textColor};">${data.date}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (signatureStyle === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-md ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} p-6 bg-white rounded-xl shadow-lg" style="border-left: 4px solid ${textColor};">
                        ${iconHTML}
                        ${data.signoff ? `<p class="text-base mb-3 italic" style="color: ${globalStyles.textColor};">${data.signoff}</p>` : ''}
                        <p class="text-xl font-bold mb-1" style="color: ${textColor};">${data.name || 'Your Name'}</p>
                        ${data.date ? `<p class="text-xs opacity-70" style="color: ${globalStyles.textColor};">${data.date}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (signatureStyle === 'decorative') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align};">
                        <div style="display: inline-block; padding: 2rem; border: 3px double ${textColor}; border-radius: 0.5rem;">
                            ${iconHTML}
                            ${data.signoff ? `<p class="text-lg mb-4 italic font-serif" style="color: ${globalStyles.textColor};">${data.signoff}</p>` : ''}
                            <div style="width: 60px; height: 2px; background: ${textColor}; margin: 1rem ${align === 'center' ? 'auto' : align === 'right' ? '0 0 1rem auto' : '0 auto 1rem 0'};"></div>
                            <p class="text-2xl font-serif mb-1" style="color: ${textColor};">${data.name || 'Your Name'}</p>
                            ${data.date ? `<p class="text-sm font-serif" style="color: ${globalStyles.textColor};">${data.date}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (signatureStyle === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align};">
                        ${iconHTML}
                        ${data.signoff ? `<p class="text-base mb-6 tracking-wide uppercase opacity-70" style="color: ${globalStyles.textColor}; letter-spacing: 0.1em;">${data.signoff}</p>` : ''}
                        <p class="text-3xl font-light mb-2" style="color: ${textColor}; letter-spacing: 0.05em;">${data.name || 'Your Name'}</p>
                        ${data.date ? `<p class="text-xs tracking-wider opacity-60" style="color: ${globalStyles.textColor}; letter-spacing: 0.15em;">${data.date}</p>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
