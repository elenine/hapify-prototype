// Cover Message component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.coverMessage = {
    name: '🎉 Cover Message',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Recipient Name</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="recipientName" placeholder="Enter recipient name" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message" rows="3" placeholder="Congratulations on your amazing achievement!" onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="subtitle" placeholder="You did it!" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="gradient-card">Gradient Card</option>
                    <option value="confetti">Confetti Celebration</option>
                    <option value="modern-split">Modern Split</option>
                    <option value="elegant-border">Elegant Border</option>
                    <option value="bold-banner">Bold Banner</option>
                    <option value="minimal-chic">Minimal Chic</option>
                    <option value="festive-frame">Festive Frame</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon/Emoji</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="🎉">🎉 Party Popper</option>
                    <option value="🏆">🏆 Trophy</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🎊">🎊 Confetti Ball</option>
                    <option value="👏">👏 Clapping Hands</option>
                    <option value="💫">💫 Dizzy</option>
                    <option value="🌟">🌟 Glowing Star</option>
                    <option value="🎯">🎯 Direct Hit</option>
                    <option value="">None</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const recipientName = data.recipientName || 'Congratulations';
        const message = data.message || 'Congratulations on your amazing achievement!';
        const subtitle = data.subtitle || '';
        const layout = style.layout || 'centered';
        const textAlign = style.textAlign || 'center';
        const icon = style.icon || '🎉';

        const alignClass = textAlign === 'center' ? 'text-center' : textAlign === 'left' ? 'text-left' : 'text-right';
        const justifyClass = textAlign === 'center' ? 'justify-center' : textAlign === 'left' ? 'justify-start' : 'justify-end';

        if (layout === 'centered') {
            return `
                <div class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-amber-50 to-orange-50" style="background: linear-gradient(to bottom right, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="${alignClass}">
                        ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                        <h1 class="text-5xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                        <p class="text-2xl mb-4" style="color: ${globalStyles.textColor};">${message}</p>
                        ${subtitle ? `<p class="text-lg opacity-80" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'gradient-card') {
            return `
                <div class="min-h-screen flex items-center justify-center p-6" style="background: ${globalStyles.bgColor};">
                    <div class="max-w-lg w-full rounded-3xl shadow-2xl p-12 ${alignClass}" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                        ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                        <h1 class="text-5xl font-bold mb-4 text-white">${recipientName}</h1>
                        <p class="text-2xl mb-4 text-white opacity-95">${message}</p>
                        ${subtitle ? `<p class="text-lg text-white opacity-85">${subtitle}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'confetti') {
            return `
                <div class="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style="background: ${globalStyles.bgColor};">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="absolute top-10 left-10 text-4xl opacity-50">🎉</div>
                        <div class="absolute top-20 right-20 text-3xl opacity-40">⭐</div>
                        <div class="absolute bottom-20 left-20 text-5xl opacity-30">🎊</div>
                        <div class="absolute bottom-10 right-10 text-4xl opacity-50">✨</div>
                        <div class="absolute top-40 left-1/3 text-3xl opacity-35">🌟</div>
                        <div class="absolute bottom-40 right-1/3 text-3xl opacity-45">💫</div>
                    </div>
                    <div class="${alignClass} relative z-10 bg-white rounded-2xl shadow-xl p-10 max-w-lg">
                        ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                        <h1 class="text-5xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                        <p class="text-2xl mb-4" style="color: ${globalStyles.textColor};">${message}</p>
                        ${subtitle ? `<p class="text-lg opacity-80" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern-split') {
            return `
                <div class="min-h-screen flex items-center" style="background: ${globalStyles.bgColor};">
                    <div class="w-full grid md:grid-cols-2 gap-0">
                        <div class="p-12 flex items-center justify-center" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            ${icon ? `<div class="text-9xl text-white">${icon}</div>` : ''}
                        </div>
                        <div class="p-12 flex items-center ${justifyClass}">
                            <div class="${alignClass}">
                                <h1 class="text-5xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                                <p class="text-2xl mb-4" style="color: ${globalStyles.textColor};">${message}</p>
                                ${subtitle ? `<p class="text-lg opacity-80" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant-border') {
            return `
                <div class="min-h-screen flex items-center justify-center p-6" style="background: ${globalStyles.bgColor};">
                    <div class="max-w-lg w-full rounded-2xl p-12 ${alignClass} border-8" style="border-color: ${globalStyles.primaryColor};">
                        ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                        <div class="border-t-4 border-b-4 py-8" style="border-color: ${globalStyles.secondaryColor};">
                            <h1 class="text-5xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                            <p class="text-2xl mb-4" style="color: ${globalStyles.textColor};">${message}</p>
                            ${subtitle ? `<p class="text-lg opacity-80" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'bold-banner') {
            return `
                <div class="min-h-screen flex flex-col" style="background: ${globalStyles.bgColor};">
                    <div class="flex-1 flex items-center justify-center p-6">
                        <div class="${alignClass}">
                            ${icon ? `<div class="text-8xl mb-6">${icon}</div>` : ''}
                            <h1 class="text-6xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                            <p class="text-3xl mb-6" style="color: ${globalStyles.textColor};">${message}</p>
                            ${subtitle ? `<p class="text-xl opacity-80" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                        </div>
                    </div>
                    <div class="h-20" style="background: linear-gradient(90deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                </div>
            `;
        } else if (layout === 'minimal-chic') {
            return `
                <div class="min-h-screen flex items-center justify-center p-6" style="background: ${globalStyles.bgColor};">
                    <div class="max-w-lg w-full ${alignClass}">
                        ${icon ? `<div class="text-6xl mb-8 opacity-80">${icon}</div>` : ''}
                        <h1 class="text-4xl font-light mb-6 tracking-wide" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                        <p class="text-xl mb-4 leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                        ${subtitle ? `<p class="text-base opacity-70 italic" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                        <div class="mt-8 h-1 w-20 ${textAlign === 'center' ? 'mx-auto' : textAlign === 'right' ? 'ml-auto' : ''}" style="background: ${globalStyles.primaryColor};"></div>
                    </div>
                </div>
            `;
        } else if (layout === 'festive-frame') {
            return `
                <div class="min-h-screen flex items-center justify-center p-6 relative" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}20, ${globalStyles.secondaryColor}20);">
                    <div class="max-w-lg w-full relative">
                        <div class="absolute -top-6 -left-6 text-6xl">${icon || '🎉'}</div>
                        <div class="absolute -top-6 -right-6 text-6xl">${icon || '🎊'}</div>
                        <div class="absolute -bottom-6 -left-6 text-6xl">${icon || '⭐'}</div>
                        <div class="absolute -bottom-6 -right-6 text-6xl">${icon || '✨'}</div>
                        <div class="bg-white rounded-3xl shadow-2xl p-16 ${alignClass} relative z-10">
                            <h1 class="text-5xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
                            <p class="text-2xl mb-4" style="color: ${globalStyles.textColor};">${message}</p>
                            ${subtitle ? `<p class="text-lg opacity-80" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6 ${alignClass}">
            ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
            <h1 class="text-4xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${recipientName}</h1>
            <p class="text-xl mb-2" style="color: ${globalStyles.textColor};">${message}</p>
            ${subtitle ? `<p class="text-base opacity-75" style="color: ${globalStyles.secondaryColor};">${subtitle}</p>` : ''}
        </div>`;
    }
};
