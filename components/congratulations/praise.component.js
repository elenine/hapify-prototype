// Praise component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.praise = {
    name: '⭐ Praise',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Praise Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message" rows="4" placeholder="You truly deserve this recognition. Your dedication and hard work have been inspiring!" onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="heading" placeholder="You're Amazing!" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="quote-box">Quote Box</option>
                    <option value="highlight">Highlight</option>
                    <option value="elegant-card">Elegant Card</option>
                    <option value="speech-bubble">Speech Bubble</option>
                    <option value="banner">Banner</option>
                    <option value="side-accent">Side Accent</option>
                    <option value="framed">Framed</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="⭐">⭐ Star</option>
                    <option value="🌟">🌟 Glowing Star</option>
                    <option value="💫">💫 Dizzy</option>
                    <option value="✨">✨ Sparkles</option>
                    <option value="👏">👏 Clapping</option>
                    <option value="💪">💪 Flex</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="💝">💝 Heart Gift</option>
                    <option value="">None</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const message = data.message || 'You truly deserve this recognition. Your dedication and hard work have been inspiring!';
        const heading = data.heading || '';
        const layout = style.layout || 'quote-box';
        const icon = style.icon || '⭐';

        if (layout === 'quote-box') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-l-8" style="border-color: ${globalStyles.primaryColor};">
                        ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
                        ${heading ? `<h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                        <p class="text-xl leading-relaxed italic" style="color: ${globalStyles.textColor};">"${message}"</p>
                    </div>
                </div>
            `;
        } else if (layout === 'highlight') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto text-center p-10 rounded-3xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}20, ${globalStyles.secondaryColor}20);">
                        ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                        ${heading ? `<h3 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                        <p class="text-2xl leading-relaxed font-medium" style="color: ${globalStyles.textColor};">${message}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant-card') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div class="p-2" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="bg-white rounded-2xl p-8 text-center">
                                ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                                ${heading ? `<h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                                <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'speech-bubble') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto relative">
                        ${icon ? `<div class="text-5xl mb-4 text-center">${icon}</div>` : ''}
                        <div class="bg-white rounded-3xl shadow-xl p-8 relative" style="border: 3px solid ${globalStyles.primaryColor};">
                            ${heading ? `<h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                            <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                            <div class="absolute -bottom-4 left-12 w-8 h-8 transform rotate-45" style="background: white; border-right: 3px solid ${globalStyles.primaryColor}; border-bottom: 3px solid ${globalStyles.primaryColor};"></div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-12 text-center" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                    <div class="max-w-3xl mx-auto px-6">
                        ${icon ? `<div class="text-7xl mb-6 text-white">${icon}</div>` : ''}
                        ${heading ? `<h3 class="text-4xl font-bold mb-6 text-white">${heading}</h3>` : ''}
                        <p class="text-2xl leading-relaxed text-white opacity-95">${message}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'side-accent') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto flex gap-6">
                        <div class="w-2 rounded-full flex-shrink-0" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                        <div class="flex-1">
                            ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
                            ${heading ? `<h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                            <p class="text-xl leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'framed') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto border-8 rounded-lg p-10 text-center" style="border-color: ${globalStyles.primaryColor};">
                        <div class="border-4 border-dashed p-8" style="border-color: ${globalStyles.secondaryColor};">
                            ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                            ${heading ? `<h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                            <p class="text-xl leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto text-center py-8">
                        ${icon ? `<div class="text-5xl mb-6 opacity-70">${icon}</div>` : ''}
                        ${heading ? `<h3 class="text-2xl font-light mb-6 tracking-wide" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
                        <p class="text-lg leading-relaxed font-light" style="color: ${globalStyles.textColor};">${message}</p>
                        <div class="mt-6 h-1 w-24 mx-auto" style="background: ${globalStyles.primaryColor};"></div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            ${icon ? `<div class="text-4xl mb-3">${icon}</div>` : ''}
            ${heading ? `<h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${heading}</h3>` : ''}
            <p class="text-lg" style="color: ${globalStyles.textColor};">${message}</p>
        </div>`;
    }
};
