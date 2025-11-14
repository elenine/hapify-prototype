// Personal Note Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.note = {
    name: '💌 Personal Note',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Note</label><textarea placeholder="A personal note..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="note" oninput="updatePreview()"></textarea></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simpleCard">Simple Card - Clean card design</option>
                    <option value="handwritten">Handwritten - Script font style</option>
                    <option value="stickyNote">Sticky Note - Post-it note appearance</option>
                    <option value="letterPaper">Letter Paper - Lined paper look</option>
                    <option value="fancyFrame">Fancy Frame - Decorated frame</option>
                    <option value="speechBubble">Speech Bubble - Chat bubble style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="text-sm">Small</option>
                    <option value="text-base" selected>Medium</option>
                    <option value="text-lg">Large</option>
                    <option value="text-xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simpleCard';
        const bgColor = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || '#ef4444';
        const textSize = style.textSize || 'text-base';
        const shadow = style.shadow || 'lg';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const note = data.note || 'Your personal note...';

        if (layout === 'simpleCard') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto p-6 rounded-lg ${shadowClass}" style="background: ${cardBg}">
                        <p class="${textSize} leading-relaxed" style="color: ${textColor}">${note}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'handwritten') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto p-6 rounded-lg ${shadowClass}" style="background: ${cardBg}">
                        <p class="${textSize} leading-relaxed font-serif italic" style="color: ${textColor}">${note}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'stickyNote') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto p-6 ${shadowClass} transform rotate-1" style="background: ${accentColor}; background: linear-gradient(135deg, ${accentColor}, #fef08a)">
                        <p class="${textSize} leading-relaxed font-sans" style="color: ${textColor}">${note}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'letterPaper') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto p-8 rounded-lg ${shadowClass} relative" style="background: ${cardBg}; background-image: repeating-linear-gradient(transparent, transparent 35px, #e5e7eb 35px, #e5e7eb 36px)">
                        <p class="${textSize} leading-9" style="color: ${textColor}">${note}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'fancyFrame') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="border-4 rounded-2xl p-8 relative ${shadowClass}" style="border-color: ${accentColor}; background: ${cardBg}">
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">💌</div>
                            <p class="${textSize} leading-relaxed text-center" style="color: ${textColor}">${note}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'speechBubble') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="p-6 rounded-2xl ${shadowClass}" style="background: ${cardBg}">
                            <p class="${textSize} leading-relaxed" style="color: ${textColor}">${note}</p>
                        </div>
                        <div class="absolute -bottom-3 left-8 w-6 h-6 transform rotate-45 ${shadowClass}" style="background: ${cardBg}"></div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-8 px-6" style="background: ${bgColor}">
                <div class="max-w-xl mx-auto p-6 rounded-lg ${shadowClass}" style="background: ${cardBg}">
                    <p class="${textSize} leading-relaxed" style="color: ${textColor}">${note}</p>
                </div>
            </div>
        `;
    }
};
