// Quote Component for Holiday Card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quote = {
    name: '💭 Quote',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote</label>
                <textarea placeholder="Peace on earth, goodwill to all..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="quote" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author (Optional)</label>
                <input type="text" placeholder="Author name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="author" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="quoteStyle" onchange="updatePreview()">
                    <option value="simple">Simple</option>
                    <option value="bordered">Bordered</option>
                    <option value="highlighted">Highlighted</option>
                    <option value="sidebar">Side Border</option>
                    <option value="card">Card Style</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfdf5" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="quotation">❝❞ Quotation Marks</option>
                    <option value="🎄">🎄 Christmas Tree</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="✨">✨ Sparkles</option>
                    <option value="💫">💫 Dizzy Star</option>
                    <option value="🕊️">🕊️ Dove</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const quoteStyle = style.quoteStyle || 'simple';
        const bg = style.bg || '#ecfdf5';
        const accent = style.accent || '#10b981';
        const icon = style.icon || 'none';

        const textSizes = {
            small: 'text-lg',
            medium: 'text-xl',
            large: 'text-2xl',
            xlarge: 'text-3xl'
        };
        const textSize = textSizes[style.textSize] || 'text-2xl';

        const iconHTML = icon !== 'none' && icon !== 'quotation' ? `<div class="text-4xl mb-4">${icon}</div>` : '';
        const quoteText = data.quote || 'Your inspirational holiday quote here...';
        const displayQuote = icon === 'quotation' ? `"${quoteText}"` : quoteText;

        if (quoteStyle === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto text-center">
                        ${iconHTML}
                        <p class="${textSize} italic mb-4 leading-relaxed" style="color: ${globalStyles.textColor};">${displayQuote}</p>
                        ${data.author ? `<p class="text-lg font-semibold" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (quoteStyle === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-8 text-center" style="border: 3px solid ${accent}; border-radius: 0.5rem;">
                        ${iconHTML}
                        <p class="${textSize} italic mb-4 leading-relaxed" style="color: ${globalStyles.textColor};">${displayQuote}</p>
                        ${data.author ? `<p class="text-lg font-semibold" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (quoteStyle === 'highlighted') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-8 text-center rounded-xl" style="background: ${accent}; background: linear-gradient(135deg, ${accent}20 0%, ${accent}10 100%);">
                        ${iconHTML}
                        <p class="${textSize} italic mb-4 leading-relaxed font-bold" style="color: ${accent};">${displayQuote}</p>
                        ${data.author ? `<p class="text-lg font-semibold" style="color: ${globalStyles.textColor};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (quoteStyle === 'sidebar') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto pl-8" style="border-left: 4px solid ${accent};">
                        ${iconHTML}
                        <p class="${textSize} italic mb-4 leading-relaxed" style="color: ${globalStyles.textColor};">${displayQuote}</p>
                        ${data.author ? `<p class="text-lg font-semibold" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (quoteStyle === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-xl text-center" style="border-top: 4px solid ${accent};">
                        ${iconHTML}
                        <p class="${textSize} italic mb-6 leading-relaxed" style="color: ${globalStyles.textColor};">${displayQuote}</p>
                        ${data.author ? `<div style="width: 60px; height: 2px; background: ${accent}; margin: 0 auto 1rem;"></div><p class="text-lg font-semibold" style="color: ${accent};">${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (quoteStyle === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-10 text-center" style="border: 3px double ${accent}; border-radius: 0.5rem;">
                        ${iconHTML}
                        <p class="${textSize} italic mb-6 leading-relaxed font-serif" style="color: ${globalStyles.textColor};">${displayQuote}</p>
                        ${data.author ? `<div style="width: 80px; height: 2px; background: ${accent}; margin: 0 auto 1rem;"></div><p class="text-lg font-serif" style="color: ${accent};">${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
