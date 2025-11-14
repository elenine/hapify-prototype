// Personal Note Component for Holiday Card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.note = {
    name: '🎁 Personal Note',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Note Title (Optional)</label>
                <input type="text" placeholder="A Special Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Note</label>
                <textarea placeholder="Write a heartfelt personal note for the holidays..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="note" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Note Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="noteStyle" onchange="updatePreview()">
                    <option value="simple">Simple Card</option>
                    <option value="sticky">Sticky Note</option>
                    <option value="handwritten">Handwritten</option>
                    <option value="postcard">Postcard Style</option>
                    <option value="ribbon">Gift Tag</option>
                    <option value="envelope">Envelope</option>
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
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Note Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="🎁">🎁 Gift</option>
                    <option value="💝">💝 Heart Gift</option>
                    <option value="✉️">✉️ Envelope</option>
                    <option value="📝">📝 Note</option>
                    <option value="🎄">🎄 Tree</option>
                    <option value="⭐">⭐ Star</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const noteStyle = style.noteStyle || 'simple';
        const bg = style.bg || '#fef3c7';
        const accent = style.accent || '#10b981';
        const align = style.align || 'left';
        const icon = style.icon || 'none';

        const iconHTML = icon !== 'none' ? `<div class="text-3xl mb-3">${icon}</div>` : '';

        if (noteStyle === 'simple') {
            return `
                <div class="py-8 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg" style="text-align: ${align};">
                        ${iconHTML}
                        ${data.title ? `<h4 class="text-xl font-bold mb-3" style="color: ${accent};">${data.title}</h4>` : ''}
                        <p class="text-base leading-relaxed" style="color: ${globalStyles.textColor};">${data.note || 'Your personal note...'}</p>
                    </div>
                </div>
            `;
        } else if (noteStyle === 'sticky') {
            return `
                <div class="py-8 px-6" style="background: ${bg};">
                    <div class="max-w-md mx-auto p-6 rounded shadow-lg transform rotate-1" style="background: ${accent}20; text-align: ${align}; position: relative;">
                        <div style="position: absolute; top: -10px; right: 20px; width: 60px; height: 20px; background: rgba(0,0,0,0.1); border-radius: 3px;"></div>
                        ${iconHTML}
                        ${data.title ? `<h4 class="text-lg font-bold mb-2" style="color: ${accent};">${data.title}</h4>` : ''}
                        <p class="text-base leading-relaxed" style="color: ${globalStyles.textColor};">${data.note || 'Your personal note...'}</p>
                    </div>
                </div>
            `;
        } else if (noteStyle === 'handwritten') {
            return `
                <div class="py-8 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto p-8 bg-white rounded shadow-md" style="text-align: ${align}; border-left: 4px solid ${accent};">
                        ${iconHTML}
                        ${data.title ? `<h4 class="text-xl mb-3" style="color: ${accent}; font-family: cursive;">${data.title}</h4>` : ''}
                        <p class="text-base leading-relaxed" style="color: ${globalStyles.textColor}; font-family: cursive;">${data.note || 'Your personal note...'}</p>
                    </div>
                </div>
            `;
        } else if (noteStyle === 'postcard') {
            return `
                <div class="py-8 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto bg-white rounded-lg shadow-xl overflow-hidden" style="border: 8px solid ${accent};">
                        <div class="p-6" style="text-align: ${align};">
                            ${iconHTML}
                            ${data.title ? `<h4 class="text-xl font-bold mb-3" style="color: ${accent};">${data.title}</h4>` : ''}
                            <p class="text-base leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${data.note || 'Your personal note...'}</p>
                            <div style="border-top: 2px dashed ${accent}20; padding-top: 1rem; margin-top: 1rem;">
                                <div class="text-xs opacity-60">Holiday Greetings</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (noteStyle === 'ribbon') {
            return `
                <div class="py-8 px-6" style="background: ${bg};">
                    <div class="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg" style="text-align: ${align}; position: relative; clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);">
                        <div style="position: absolute; top: 10px; right: 10px; width: 30px; height: 30px; border-radius: 50%; background: ${accent};"></div>
                        ${iconHTML}
                        ${data.title ? `<h4 class="text-lg font-bold mb-2" style="color: ${accent};">${data.title}</h4>` : ''}
                        <p class="text-sm leading-relaxed" style="color: ${globalStyles.textColor};">${data.note || 'Your personal note...'}</p>
                    </div>
                </div>
            `;
        } else if (noteStyle === 'envelope') {
            return `
                <div class="py-8 px-6" style="background: ${bg};">
                    <div class="max-w-xl mx-auto">
                        <div class="relative bg-white rounded shadow-xl overflow-hidden" style="border: 2px solid ${accent};">
                            <div style="position: absolute; top: 0; left: 0; right: 0; height: 60px; background: ${accent}; clip-path: polygon(0 0, 50% 100%, 100% 0);"></div>
                            <div class="p-8 mt-8" style="text-align: ${align};">
                                ${iconHTML}
                                ${data.title ? `<h4 class="text-xl font-bold mb-3" style="color: ${accent};">${data.title}</h4>` : ''}
                                <p class="text-base leading-relaxed" style="color: ${globalStyles.textColor};">${data.note || 'Your personal note...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
