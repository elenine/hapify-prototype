// Signature component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="closing" rows="2" placeholder="With warmest congratulations," onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sender Name(s)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="name" placeholder="John & Sarah" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title/Relationship (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Your Friends" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                    <option value="elegant">Elegant</option>
                    <option value="formal">Formal</option>
                    <option value="casual">Casual</option>
                    <option value="heartfelt">Heartfelt</option>
                    <option value="simple">Simple</option>
                    <option value="decorative">Decorative</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alignment</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="align" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="💝">💝 Gift Heart</option>
                    <option value="❤️">❤️ Heart</option>
                    <option value="✨">✨ Sparkles</option>
                    <option value="🌟">🌟 Star</option>
                    <option value="✍️">✍️ Writing Hand</option>
                    <option value="🤝">🤝 Handshake</option>
                    <option value="">None</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const closing = data.closing || 'With warmest congratulations,';
        const name = data.name || 'Your Name';
        const title = data.title || '';
        const layout = style.layout || 'classic';
        const align = style.align || 'center';
        const icon = style.icon || '';

        const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';

        if (layout === 'classic') {
            return `
                <div class="p-6">
                    <div class="max-w-lg mx-auto py-8 ${alignClass}">
                        <p class="text-lg mb-4 italic" style="color: ${globalStyles.textColor};">${closing}</p>
                        <div class="my-4">
                            <p class="text-2xl font-bold" style="color: ${globalStyles.primaryColor};">${name}</p>
                            ${title ? `<p class="text-base mt-1 opacity-75" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                        </div>
                        ${icon ? `<div class="text-4xl mt-4">${icon}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-lg mx-auto ${alignClass}">
                        <div class="inline-block bg-white rounded-2xl shadow-xl p-8">
                            ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
                            <p class="text-lg mb-4" style="color: ${globalStyles.textColor};">${closing}</p>
                            <div class="h-1 w-16 my-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}" style="background: ${globalStyles.primaryColor};"></div>
                            <p class="text-2xl font-bold" style="color: ${globalStyles.primaryColor};">${name}</p>
                            ${title ? `<p class="text-base mt-2 opacity-75" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="p-6" style="background: linear-gradient(to bottom, transparent, ${globalStyles.primaryColor}05);">
                    <div class="max-w-lg mx-auto py-12 ${alignClass}">
                        <div class="border-t-2 border-b-2 py-6 inline-block" style="border-color: ${globalStyles.primaryColor};">
                            <p class="text-lg mb-4 font-light italic" style="color: ${globalStyles.textColor};">${closing}</p>
                            ${icon ? `<div class="text-4xl my-4">${icon}</div>` : ''}
                            <p class="text-3xl font-light tracking-wide" style="color: ${globalStyles.primaryColor};">${name}</p>
                            ${title ? `<p class="text-sm mt-2 uppercase tracking-widest opacity-70" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'formal') {
            return `
                <div class="p-6 bg-white">
                    <div class="max-w-md mx-auto border-4 rounded-lg p-8 ${alignClass}" style="border-color: ${globalStyles.primaryColor};">
                        <p class="text-lg mb-6" style="color: ${globalStyles.textColor};">${closing}</p>
                        <div class="border-l-4 pl-4 inline-block" style="border-color: ${globalStyles.secondaryColor};">
                            <p class="text-2xl font-bold" style="color: ${globalStyles.primaryColor};">${name}</p>
                            ${title ? `<p class="text-base mt-1" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                        </div>
                        ${icon ? `<div class="text-4xl mt-6">${icon}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'casual') {
            return `
                <div class="p-6">
                    <div class="max-w-lg mx-auto ${alignClass} py-6">
                        ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
                        <p class="text-xl mb-4" style="color: ${globalStyles.textColor};">${closing}</p>
                        <p class="text-3xl font-bold" style="color: ${globalStyles.primaryColor};">${name}</p>
                        ${title ? `<p class="text-lg mt-2 opacity-80" style="color: ${globalStyles.secondaryColor};">${title}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'heartfelt') {
            return `
                <div class="p-6">
                    <div class="max-w-lg mx-auto rounded-3xl p-10 ${alignClass}" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15, ${globalStyles.secondaryColor}15);">
                        ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                        <p class="text-xl mb-6 font-light italic" style="color: ${globalStyles.textColor};">${closing}</p>
                        <div>
                            <p class="text-3xl font-bold mb-2" style="color: ${globalStyles.primaryColor};">${name}</p>
                            ${title ? `<p class="text-lg opacity-80" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'simple') {
            return `
                <div class="p-6 py-12">
                    <div class="max-w-lg mx-auto ${alignClass}">
                        <p class="text-base mb-3 opacity-80" style="color: ${globalStyles.textColor};">${closing}</p>
                        <p class="text-xl font-semibold" style="color: ${globalStyles.primaryColor};">${name}</p>
                        ${title ? `<p class="text-sm mt-1 opacity-70" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                        ${icon ? `<div class="text-3xl mt-3 inline-block">${icon}</div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'decorative') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto ${alignClass} py-8">
                        <div class="inline-block relative">
                            <div class="absolute -top-4 -left-4 text-6xl opacity-20" style="color: ${globalStyles.primaryColor};">❝</div>
                            <div class="relative z-10 p-6">
                                ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
                                <p class="text-lg mb-4 italic" style="color: ${globalStyles.textColor};">${closing}</p>
                                <div class="my-4 flex ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'} gap-2">
                                    <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.secondaryColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                                </div>
                                <p class="text-2xl font-bold" style="color: ${globalStyles.primaryColor};">${name}</p>
                                ${title ? `<p class="text-base mt-1 opacity-75" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
                            </div>
                            <div class="absolute -bottom-4 -right-4 text-6xl opacity-20" style="color: ${globalStyles.primaryColor};">❞</div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6 ${alignClass}">
            <p class="text-base mb-2" style="color: ${globalStyles.textColor};">${closing}</p>
            <p class="text-xl font-bold" style="color: ${globalStyles.primaryColor};">${name}</p>
            ${title ? `<p class="text-sm opacity-75" style="color: ${globalStyles.textColor};">${title}</p>` : ''}
        </div>`;
    }
};
