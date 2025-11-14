// Greeting Message Component for Holiday Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.greeting = {
    name: '💌 Greeting Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Title (Optional)</label>
                <input type="text" placeholder="Season's Greetings" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea placeholder="Wishing you and your loved ones a joyful holiday season filled with warmth, laughter, and cherished moments together..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Text</option>
                    <option value="card">Card Style</option>
                    <option value="bordered">Bordered Box</option>
                    <option value="highlight">Highlighted</option>
                    <option value="quote">Quote Style</option>
                    <option value="columns">Two Columns</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="🎄">🎄 Christmas Tree</option>
                    <option value="❄️">❄️ Snowflake</option>
                    <option value="🎁">🎁 Gift</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="💝">💝 Heart</option>
                    <option value="🕊️">🕊️ Dove</option>
                    <option value="🔔">🔔 Bell</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simple';
        const align = style.align || 'center';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#10b981';
        const icon = style.icon || 'none';

        // Text sizes
        const textSizes = {
            small: 'text-base',
            medium: 'text-lg',
            large: 'text-xl',
            xlarge: 'text-2xl'
        };
        const textSize = textSizes[style.textSize] || 'text-lg';

        // Spacing
        const spacings = {
            compact: 'py-6',
            normal: 'py-12',
            relaxed: 'py-16',
            loose: 'py-20'
        };
        const spacing = spacings[style.spacing] || 'py-12';

        const iconHTML = icon !== 'none' ? `<div class="text-4xl mb-4">${icon}</div>` : '';

        if (layout === 'simple') {
            return `
                <div class="${spacing} px-6" style="background: ${bg}; text-align: ${align};">
                    <div class="max-w-2xl mx-auto">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="${textSize} leading-relaxed" style="color: ${globalStyles.textColor};">${data.message || 'Your heartfelt holiday message goes here...'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'card') {
            return `
                <div class="${spacing} px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl" style="text-align: ${align}; border-top: 4px solid ${accent};">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="${textSize} leading-relaxed" style="color: ${globalStyles.textColor};">${data.message || 'Your heartfelt holiday message goes here...'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'bordered') {
            return `
                <div class="${spacing} px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-8 rounded-lg" style="text-align: ${align}; border: 3px solid ${accent};">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="${textSize} leading-relaxed" style="color: ${globalStyles.textColor};">${data.message || 'Your heartfelt holiday message goes here...'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'highlight') {
            return `
                <div class="${spacing} px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-8 rounded-lg" style="text-align: ${align}; background: ${accent}; background: linear-gradient(135deg, ${accent}20 0%, ${accent}10 100%);">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="${textSize} leading-relaxed" style="color: ${globalStyles.textColor};">${data.message || 'Your heartfelt holiday message goes here...'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'quote') {
            return `
                <div class="${spacing} px-6" style="background: ${bg}; text-align: ${align};">
                    <div class="max-w-2xl mx-auto">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                        <div style="border-left: 4px solid ${accent}; padding-left: 1.5rem;">
                            <p class="${textSize} leading-relaxed italic" style="color: ${globalStyles.textColor};">"${data.message || 'Your heartfelt holiday message goes here...'}"</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'columns') {
            const words = (data.message || 'Your heartfelt holiday message goes here...').split(' ');
            const midpoint = Math.ceil(words.length / 2);
            const firstHalf = words.slice(0, midpoint).join(' ');
            const secondHalf = words.slice(midpoint).join(' ');

            return `
                <div class="${spacing} px-6" style="background: ${bg};">
                    <div class="max-w-4xl mx-auto text-center">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="text-${align}">
                                <p class="${textSize} leading-relaxed" style="color: ${globalStyles.textColor};">${firstHalf}</p>
                            </div>
                            <div class="text-${align}">
                                <p class="${textSize} leading-relaxed" style="color: ${globalStyles.textColor};">${secondHalf}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
