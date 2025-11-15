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
                    <option value="torn">Torn Paper - Rough edge effect</option>
                    <option value="vintage">Vintage Letter - Aged paper style</option>
                    <option value="polaroid">Polaroid - Photo frame style</option>
                    <option value="bookmark">Bookmark - Ribbon marker</option>
                    <option value="envelope">Envelope - Opening reveal</option>
                    <option value="scroll">Scroll - Ancient parchment</option>
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

        if (layout === 'torn') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="p-6 ${shadowClass} relative overflow-hidden" style="background: ${cardBg}; clip-path: polygon(0% 2%, 3% 0%, 7% 3%, 12% 1%, 16% 4%, 21% 2%, 27% 5%, 33% 2%, 38% 6%, 44% 3%, 49% 7%, 55% 4%, 61% 8%, 67% 5%, 72% 9%, 78% 6%, 83% 10%, 89% 7%, 94% 11%, 100% 8%, 100% 92%, 97% 95%, 93% 91%, 88% 96%, 84% 92%, 79% 97%, 73% 93%, 68% 98%, 62% 94%, 57% 99%, 51% 95%, 46% 100%, 40% 96%, 35% 100%, 29% 97%, 24% 100%, 18% 98%, 13% 100%, 7% 99%, 2% 100%, 0% 98%)">
                            <p class="${textSize} leading-relaxed" style="color: ${textColor}">${note}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'vintage') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="border-4 border-double p-8 rounded-sm ${shadowClass}" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-color: #92400e">
                            <div class="text-center mb-4">
                                <span class="text-2xl" style="color: #92400e">✉</span>
                            </div>
                            <p class="${textSize} leading-relaxed font-serif text-center" style="color: #78350f">${note}</p>
                            <div class="mt-6 pt-4 border-t border-amber-700 text-center">
                                <span class="text-xs font-serif italic" style="color: #92400e">With warm regards</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'polaroid') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-sm mx-auto">
                        <div class="p-4 pb-16 bg-white ${shadowClass} transform hover:rotate-2 transition-transform" style="box-shadow: 0 10px 30px rgba(0,0,0,0.3)">
                            <div class="p-4 rounded-sm" style="background: ${cardBg}; border: 1px solid #e5e7eb">
                                <p class="${textSize} leading-relaxed text-center" style="color: ${textColor}">${note}</p>
                            </div>
                            <div class="mt-4 text-center">
                                <span class="text-sm font-handwriting italic" style="color: ${accentColor}">Special Message</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'bookmark') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto relative">
                        <div class="absolute -top-4 right-8 w-8 h-24 ${shadowClass}" style="background: ${accentColor}; clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)"></div>
                        <div class="p-6 rounded-lg ${shadowClass} border-l-4" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="flex items-start gap-3">
                                <span class="text-3xl flex-shrink-0" style="color: ${accentColor}">📌</span>
                                <p class="${textSize} leading-relaxed" style="color: ${textColor}">${note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'envelope') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="absolute -top-6 left-0 right-0 h-32 overflow-hidden">
                            <div class="w-full h-full relative" style="background: ${accentColor}">
                                <div class="absolute bottom-0 left-0 right-0 h-0 border-l-[50%] border-r-[50%] border-b-[60px] border-l-transparent border-r-transparent" style="border-bottom-color: ${cardBg}; transform: translateY(20px)"></div>
                            </div>
                        </div>
                        <div class="p-8 rounded-b-lg ${shadowClass} relative z-10" style="background: ${cardBg}; margin-top: 24px">
                            <p class="${textSize} leading-relaxed font-serif" style="color: ${textColor}">${note}</p>
                            <div class="mt-4 text-right">
                                <span class="text-2xl">💌</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'scroll') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto relative">
                        <div class="absolute -top-4 -left-4 w-full h-full rounded-full opacity-20" style="background: radial-gradient(circle, ${accentColor}, transparent)"></div>
                        <div class="relative p-8 rounded-2xl ${shadowClass}" style="background: linear-gradient(135deg, #fef3c7, #fde68a); border-left: 8px solid #92400e; border-right: 8px solid #92400e">
                            <div class="absolute top-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, #92400e 0px, #92400e 20px, transparent 20px, transparent 40px)"></div>
                            <div class="absolute bottom-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, #92400e 0px, #92400e 20px, transparent 20px, transparent 40px)"></div>
                            <p class="${textSize} leading-relaxed font-serif text-center" style="color: #78350f">${note}</p>
                        </div>
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
