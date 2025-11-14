// Poem Component for Holiday Card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.poem = {
    name: '📜 Holiday Poem',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Poem Title (Optional)</label>
                <input type="text" placeholder="A Holiday Rhyme" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Poem</label>
                <textarea placeholder="Write your holiday poem here..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="poem" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author (Optional)</label>
                <input type="text" placeholder="Poet name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="author" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Poem Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="poemStyle" onchange="updatePreview()">
                    <option value="classic">Classic</option>
                    <option value="scroll">Scroll Style</option>
                    <option value="bordered">Bordered</option>
                    <option value="decorative">Decorative</option>
                    <option value="modern">Modern Minimal</option>
                    <option value="vintage">Vintage</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="📜">📜 Scroll</option>
                    <option value="🎄">🎄 Tree</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="❄️">❄️ Snowflake</option>
                    <option value="🕊️">🕊️ Dove</option>
                    <option value="🎵">🎵 Music</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const poemStyle = style.poemStyle || 'classic';
        const bg = style.bg || '#fef3c7';
        const accent = style.accent || '#10b981';
        const align = style.align || 'center';
        const icon = style.icon || 'none';

        const iconHTML = icon !== 'none' ? `<div class="text-4xl mb-4">${icon}</div>` : '';

        if (poemStyle === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto text-${align}">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <pre class="text-base leading-relaxed whitespace-pre-wrap font-sans italic" style="color: ${globalStyles.textColor};">${data.poem || 'Your poem here...'}</pre>
                        ${data.author ? `<p class="text-sm mt-6 font-semibold" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (poemStyle === 'scroll') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-8 rounded-lg shadow-xl" style="background: linear-gradient(to bottom, #fef3c7, #fde68a); border-top: 6px solid ${accent}; border-bottom: 6px solid ${accent};">
                        <div class="text-${align}">
                            ${iconHTML}
                            ${data.title ? `<h3 class="text-2xl font-serif mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                            <pre class="text-base leading-relaxed whitespace-pre-wrap font-serif italic" style="color: ${globalStyles.textColor};">${data.poem || 'Your poem here...'}</pre>
                            ${data.author ? `<p class="text-sm mt-6 font-serif" style="color: ${accent};">— ${data.author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (poemStyle === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-8 rounded-lg" style="border: 4px solid ${accent}; text-align: ${align};">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <pre class="text-base leading-relaxed whitespace-pre-wrap font-sans italic" style="color: ${globalStyles.textColor};">${data.poem || 'Your poem here...'}</pre>
                        ${data.author ? `<p class="text-sm mt-6 font-semibold" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (poemStyle === 'decorative') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-10 rounded-lg" style="border: 3px double ${accent}; text-align: ${align};">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-serif mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <div style="width: 60px; height: 2px; background: ${accent}; margin: 0 auto 1.5rem;"></div>
                        <pre class="text-base leading-relaxed whitespace-pre-wrap font-serif italic" style="color: ${globalStyles.textColor};">${data.poem || 'Your poem here...'}</pre>
                        ${data.author ? `<div style="width: 60px; height: 2px; background: ${accent}; margin: 1.5rem auto 1rem;"></div><p class="text-sm font-serif" style="color: ${accent};">${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (poemStyle === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-8" style="text-align: ${align}; border-left: 4px solid ${accent};">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-light mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <pre class="text-base leading-relaxed whitespace-pre-wrap font-sans" style="color: ${globalStyles.textColor};">${data.poem || 'Your poem here...'}</pre>
                        ${data.author ? `<p class="text-sm mt-6 uppercase tracking-wide" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (poemStyle === 'vintage') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-10 bg-white rounded shadow-2xl" style="text-align: ${align}; border: 1px solid ${accent};">
                        ${iconHTML}
                        ${data.title ? `<h3 class="text-2xl font-serif mb-6 italic" style="color: ${accent};">${data.title}</h3>` : ''}
                        <pre class="text-base leading-relaxed whitespace-pre-wrap font-serif" style="color: ${globalStyles.textColor};">${data.poem || 'Your poem here...'}</pre>
                        ${data.author ? `<p class="text-sm mt-6 font-serif italic" style="color: ${accent};">— ${data.author}</p>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
