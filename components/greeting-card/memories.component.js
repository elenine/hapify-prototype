// Memories Component for Holiday Card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
    name: '🎀 Holiday Memories',
    allowMultiple: false,
    info: (id) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memories Title</label>
                <input type="text" placeholder="Cherished Holiday Moments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory Story</label>
                <textarea placeholder="Share your favorite holiday memories and special moments..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="memory" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="memoryStyle" onchange="updatePreview()">
                    <option value="simple">Simple</option>
                    <option value="scrapbook">Scrapbook</option>
                    <option value="polaroid">Polaroid</option>
                    <option value="journal">Journal Entry</option>
                    <option value="nostalgic">Nostalgic</option>
                    <option value="timeline">Timeline</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#dbeafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="🎀">🎀 Ribbon</option>
                    <option value="📖">📖 Book</option>
                    <option value="🎄">🎄 Tree</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="💝">💝 Heart</option>
                    <option value="🕯️">🕯️ Candle</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const memoryStyle = style.memoryStyle || 'simple';
        const bg = style.bg || '#dbeafe';
        const accent = style.accent || '#10b981';
        const align = style.align || 'center';
        const icon = style.icon || '🎀';

        if (memoryStyle === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align};">
                        <div class="text-5xl mb-4">${icon}</div>
                        ${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.memory || 'Share your cherished memories...'}</p>
                    </div>
                </div>
            `;
        } else if (memoryStyle === 'scrapbook') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl transform -rotate-1" style="border: 4px solid ${accent};">
                        <div class="transform rotate-1" style="text-align: ${align};">
                            <div style="position: absolute; top: 20px; right: 20px; font-size: 2rem;">${icon}</div>
                            ${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${accent}; font-family: cursive;">${data.title}</h3>` : ''}
                            <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.memory || 'Share your cherished memories...'}</p>
                            <div class="mt-6 flex justify-center gap-2 text-2xl">
                                <span>📷</span><span>✨</span><span>💫</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (memoryStyle === 'polaroid') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white p-6 pb-12 shadow-2xl transform rotate-2">
                            <div class="transform -rotate-2" style="text-align: ${align};">
                                <div class="text-4xl mb-4">${icon}</div>
                                ${data.title ? `<h3 class="text-xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                                <p class="text-base leading-relaxed" style="color: ${globalStyles.textColor};">${data.memory || 'Share your cherished memories...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (memoryStyle === 'journal') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-8 bg-white rounded shadow-lg" style="border-left: 4px solid ${accent}; text-align: ${align};">
                        <div class="text-4xl mb-4">${icon}</div>
                        ${data.title ? `<h3 class="text-2xl font-serif italic mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="text-lg leading-relaxed italic" style="color: ${globalStyles.textColor};">${data.memory || 'Share your cherished memories...'}</p>
                        <div class="mt-6 text-sm opacity-60" style="color: ${accent};">Holiday ${new Date().getFullYear()}</div>
                    </div>
                </div>
            `;
        } else if (memoryStyle === 'nostalgic') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto p-10 rounded-lg" style="background: linear-gradient(135deg, ${accent}10 0%, ${accent}20 100%); text-align: ${align};">
                        <div class="text-5xl mb-6">${icon}</div>
                        ${data.title ? `<h3 class="text-3xl font-serif mb-6" style="color: ${accent};">${data.title}</h3>` : ''}
                        <p class="text-lg leading-relaxed font-serif" style="color: ${globalStyles.textColor};">${data.memory || 'Share your cherished memories...'}</p>
                        <div class="mt-8 flex justify-center gap-3 text-2xl opacity-50">
                            <span>✨</span><span>💫</span><span>⭐</span>
                        </div>
                    </div>
                </div>
            `;
        } else if (memoryStyle === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative pl-8" style="border-left: 3px solid ${accent};">
                            <div style="position: absolute; left: -1.5rem; top: 0; width: 3rem; height: 3rem; background: ${accent}; border-radius: 50%; display: flex; align-items: center; justify-center; font-size: 1.5rem;">${icon}</div>
                            <div style="text-align: ${align};">
                                ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${accent};">${data.title}</h3>` : ''}
                                <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.memory || 'Share your cherished memories...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
