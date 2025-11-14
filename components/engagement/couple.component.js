// Couple Details Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.couple = {
    name: '👫 Couple Details',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Relationship Length</label>
                <input type="text" placeholder="Together for 3 years" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="duration" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fun Facts</label>
                <textarea placeholder="Share fun facts about your relationship..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="facts" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Stack</option>
                    <option value="timeline">Timeline</option>
                    <option value="split">Split View</option>
                    <option value="minimal">Minimal List</option>
                    <option value="banner">Banner Style</option>
                    <option value="bubble">Speech Bubbles</option>
                    <option value="infographic">Infographic Style</option>
                    <option value="magazine">Magazine Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Accent Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">No Border</option>
                    <option value="subtle">Subtle Border</option>
                    <option value="bold">Bold Border</option>
                    <option value="gradient">Gradient Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fdf2f8';
        const textColor = style.textColor || '#1f2937';
        const borderStyle = style.borderStyle || 'none';
        const shadow = style.shadow || 'md';

        const shadows = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };

        const borders = {
            none: '',
            subtle: 'border border-gray-200',
            bold: 'border-2 border-rose-300',
            gradient: 'border-2 border-transparent bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-padding'
        };

        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <h2 class="text-2xl font-bold text-center mb-12">About Us</h2>
                    <div class="max-w-lg mx-auto relative">
                        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-rose-300"></div>
                        ${data.duration ? `
                        <div class="relative pl-16 pb-8">
                            <div class="absolute left-6 w-5 h-5 rounded-full bg-rose-500 ${shadows[shadow]}"></div>
                            <div class="p-4 rounded-lg ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">👫</span>
                                    <span class="font-semibold text-rose-600">Together</span>
                                </div>
                                <p class="text-sm">${data.duration}</p>
                            </div>
                        </div>` : ''}
                        ${data.facts ? `
                        <div class="relative pl-16">
                            <div class="absolute left-6 w-5 h-5 rounded-full bg-rose-500 ${shadows[shadow]}"></div>
                            <div class="p-4 rounded-lg ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">✨</span>
                                    <span class="font-semibold text-rose-600">Fun Facts</span>
                                </div>
                                <p class="text-sm leading-relaxed">${data.facts}</p>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <h2 class="text-2xl font-bold text-center mb-8">About Us</h2>
                    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
                        ${data.duration ? `
                        <div class="p-6 rounded-xl ${borders[borderStyle]} ${shadows[shadow]} text-center" style="background: ${cardBg};">
                            <div class="text-4xl mb-3">👫</div>
                            <div class="text-xs uppercase tracking-wide text-rose-600 mb-2 font-semibold">Together</div>
                            <div class="font-bold text-lg">${data.duration}</div>
                        </div>` : ''}
                        ${data.facts ? `
                        <div class="p-6 rounded-xl ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                            <div class="text-3xl mb-3 text-center">✨</div>
                            <div class="text-xs uppercase tracking-wide text-rose-600 mb-2 font-semibold text-center">Fun Facts</div>
                            <p class="text-sm leading-relaxed">${data.facts}</p>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-md mx-auto space-y-6">
                        <h2 class="text-3xl font-light text-center tracking-wide">About Us</h2>
                        ${data.duration ? `
                        <div class="flex items-center gap-4 py-4 border-b border-gray-200">
                            <span class="text-3xl">👫</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Together</div>
                                <div class="font-medium">${data.duration}</div>
                            </div>
                        </div>` : ''}
                        ${data.facts ? `
                        <div class="flex items-start gap-4 py-4">
                            <span class="text-3xl">✨</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Fun Facts</div>
                                <p class="text-sm leading-relaxed">${data.facts}</p>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">About Us</h2>
                        ${data.duration ? `
                        <div class="mb-4 p-6 rounded-2xl ${borders[borderStyle]} ${shadows[shadow]} flex items-center justify-center gap-6" style="background: linear-gradient(135deg, ${cardBg} 0%, ${bg} 100%);">
                            <span class="text-5xl">👫</span>
                            <div class="text-center">
                                <div class="text-sm text-rose-600 font-semibold mb-1">Together</div>
                                <div class="text-xl font-bold">${data.duration}</div>
                            </div>
                        </div>` : ''}
                        ${data.facts ? `
                        <div class="p-6 rounded-2xl ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="text-3xl">✨</span>
                                <span class="font-bold text-lg text-rose-600">Fun Facts</span>
                            </div>
                            <p class="leading-relaxed">${data.facts}</p>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'bubble') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <h2 class="text-2xl font-bold text-center mb-12">About Us</h2>
                    <div class="max-w-2xl mx-auto space-y-6">
                        ${data.duration ? `
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${shadows[shadow]}" style="background: linear-gradient(135deg, #ec4899, #f472b6);">
                                👫
                            </div>
                            <div class="relative flex-1 p-5 rounded-2xl rounded-tl-none ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                <div class="absolute -top-2 left-0 w-4 h-4 overflow-hidden">
                                    <div class="w-full h-full rotate-45 transform origin-bottom-right" style="background: ${cardBg};"></div>
                                </div>
                                <div class="text-xs uppercase tracking-wide text-rose-600 font-semibold mb-2">Together</div>
                                <div class="font-bold text-lg">${data.duration}</div>
                            </div>
                        </div>` : ''}
                        ${data.facts ? `
                        <div class="flex items-start gap-4 justify-end">
                            <div class="relative flex-1 p-5 rounded-2xl rounded-tr-none ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                <div class="absolute -top-2 right-0 w-4 h-4 overflow-hidden">
                                    <div class="w-full h-full -rotate-45 transform origin-bottom-left" style="background: ${cardBg};"></div>
                                </div>
                                <div class="text-xs uppercase tracking-wide text-rose-600 font-semibold mb-2">Fun Facts</div>
                                <p class="text-sm leading-relaxed">${data.facts}</p>
                            </div>
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${shadows[shadow]}" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);">
                                ✨
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'infographic') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <h2 class="text-2xl font-bold text-center mb-12">About Us</h2>
                    <div class="max-w-4xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-8">
                            ${data.duration ? `
                            <div class="relative">
                                <div class="absolute top-0 left-0 w-full h-2 rounded-full" style="background: linear-gradient(to right, #ec4899, #f472b6);"></div>
                                <div class="p-8 pt-10 rounded-xl ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="text-5xl">👫</div>
                                        <div class="text-right">
                                            <div class="text-4xl font-black" style="color: #ec4899;">${data.duration.split(' ')[0] || '3'}</div>
                                            <div class="text-xs uppercase tracking-wide text-gray-500">${data.duration.split(' ').slice(1).join(' ') || 'Years'}</div>
                                        </div>
                                    </div>
                                    <div class="text-sm font-semibold uppercase tracking-wide" style="color: #ec4899;">Together</div>
                                </div>
                            </div>` : ''}
                            ${data.facts ? `
                            <div class="relative">
                                <div class="absolute top-0 left-0 w-full h-2 rounded-full" style="background: linear-gradient(to right, #fbbf24, #f59e0b);"></div>
                                <div class="p-8 pt-10 rounded-xl ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                    <div class="text-5xl mb-4">✨</div>
                                    <div class="text-sm font-semibold uppercase tracking-wide mb-4" style="color: #f59e0b;">Fun Facts</div>
                                    <p class="text-sm leading-relaxed">${data.facts}</p>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'magazine') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <div class="grid md:grid-cols-3 gap-8 items-start">
                            <div class="md:col-span-1">
                                <h2 class="text-4xl font-black mb-4" style="font-family: 'Georgia', serif; line-height: 0.9;">About<br/>Us</h2>
                                <div class="w-16 h-1 mb-4" style="background: linear-gradient(to right, #ec4899, transparent);"></div>
                                <p class="text-xs text-gray-500 uppercase tracking-wider">Our Story</p>
                            </div>
                            <div class="md:col-span-2 space-y-6">
                                ${data.duration ? `
                                <div class="flex items-start gap-4 p-6 rounded-lg ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                    <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: linear-gradient(135deg, #ec4899, #f472b6);">
                                        👫
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-xs uppercase tracking-widest text-gray-500 mb-1">Together</div>
                                        <div class="text-2xl font-bold mb-2" style="font-family: 'Georgia', serif;">${data.duration}</div>
                                        <div class="h-px" style="background: linear-gradient(to right, #ec4899, transparent);"></div>
                                    </div>
                                </div>` : ''}
                                ${data.facts ? `
                                <div class="p-6 rounded-lg ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-lg" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);">✨</div>
                                        <div class="text-sm font-bold uppercase tracking-wider" style="color: #f59e0b;">Fun Facts</div>
                                    </div>
                                    <p class="text-base leading-relaxed" style="column-count: 1; font-family: 'Georgia', serif;">${data.facts}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Card Stack (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <h2 class="text-2xl font-bold text-center mb-8">About Us</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${data.duration ? `
                        <div class="p-4 rounded-lg text-center ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                            <div class="text-3xl mb-2">👫</div>
                            <div class="font-medium">${data.duration}</div>
                        </div>` : ''}
                        ${data.facts ? `
                        <div class="p-4 rounded-lg ${borders[borderStyle]} ${shadows[shadow]}" style="background: ${cardBg};">
                            <div class="text-xs text-rose-600 font-semibold mb-2 uppercase tracking-wide">Fun Facts</div>
                            <p class="text-sm leading-relaxed">${data.facts}</p>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
