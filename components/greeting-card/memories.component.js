// Memories Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.memories = {
    name: '🎈 Memories',
    allowMultiple: false,
    info: (id) => `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Memories Title</label><input type="text" placeholder="Cherished Moments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Memory Story</label><textarea placeholder="Share a favorite memory..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="memory" oninput="updatePreview()"></textarea></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Clean and minimal</option>
                    <option value="storybook">Storybook - Chapter-like appearance</option>
                    <option value="scrapbook">Scrapbook - Scrapbook page style</option>
                    <option value="timeline">Timeline - Timeline entry look</option>
                    <option value="photoFrame">Photo Frame - Framed memory style</option>
                    <option value="vintage">Vintage - Retro nostalgic theme</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#dbeafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="text-base">Small</option>
                    <option value="text-lg" selected>Medium</option>
                    <option value="text-xl">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simple';
        const bgColor = style.bg || '#dbeafe';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accent || '#3b82f6';
        const textColor = style.text || '#1f2937';
        const textSize = style.textSize || 'text-lg';
        const shadow = style.shadow || 'none';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const title = data.title || 'Cherished Moments';
        const memory = data.memory || 'Share your cherished memories...';

        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-2xl font-bold mb-4 text-center" style="color: ${accentColor}">${title}</h3>
                        <p class="${textSize} leading-relaxed" style="color: ${textColor}">${memory}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'storybook') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 rounded-2xl ${shadowClass}" style="background: ${cardBg}">
                            <div class="text-center mb-6">
                                <div class="text-4xl mb-2">📖</div>
                                <h3 class="text-2xl font-bold font-serif" style="color: ${accentColor}">${title}</h3>
                            </div>
                            <p class="${textSize} leading-relaxed font-serif" style="color: ${textColor}">${memory}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'scrapbook') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 rounded-lg transform -rotate-1 ${shadowClass}" style="background: ${cardBg}; border: 2px dashed ${accentColor}">
                            <h3 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                            <p class="${textSize} leading-relaxed" style="color: ${textColor}">${memory}</p>
                            <div class="mt-4 flex gap-2">
                                <div class="w-8 h-8 rounded-full opacity-30" style="background: ${accentColor}"></div>
                                <div class="w-8 h-8 rounded-full opacity-30" style="background: ${accentColor}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative pl-12">
                        <div class="absolute left-4 top-0 bottom-0 w-1" style="background: ${accentColor}"></div>
                        <div class="absolute left-1 top-4 w-7 h-7 rounded-full border-4 ${shadowClass}" style="background: ${cardBg}; border-color: ${accentColor}"></div>
                        <div class="p-6 rounded-lg ${shadowClass}" style="background: ${cardBg}">
                            <h3 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                            <p class="${textSize} leading-relaxed" style="color: ${textColor}">${memory}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'photoFrame') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 rounded-lg ${shadowClass}" style="background: ${cardBg}; border: 8px solid ${accentColor}">
                            <h3 class="text-2xl font-bold mb-4 text-center" style="color: ${accentColor}">${title}</h3>
                            <p class="${textSize} leading-relaxed text-center" style="color: ${textColor}">${memory}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'vintage') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 rounded-lg ${shadowClass}" style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 4px double ${accentColor}">
                            <h3 class="text-2xl font-bold mb-4 text-center font-serif" style="color: ${accentColor}">${title}</h3>
                            <p class="${textSize} leading-relaxed font-serif" style="color: ${textColor}">${memory}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto">
                    <h3 class="text-2xl font-bold mb-4 text-center" style="color: ${accentColor}">${title}</h3>
                    <p class="${textSize} leading-relaxed" style="color: ${textColor}">${memory}</p>
                </div>
            </div>
        `;
    }
};
