// Signature Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sign-off Message</label>
                <input type="text" placeholder="With love and warm wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="signoff" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="From: John & Family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Plain Text</option>
                    <option value="elegant">Elegant - With Divider</option>
                    <option value="handwritten">Handwritten - Script Style</option>
                    <option value="formal">Formal - Traditional</option>
                    <option value="casual">Casual - Friendly</option>
                    <option value="boxed">Boxed - Framed Signature</option>
                    <option value="stamp">Stamp - Official Seal</option>
                    <option value="ribbon">Ribbon - Award Style</option>
                    <option value="badge">Badge - Certificate Style</option>
                    <option value="vintage">Vintage - Classic Letter</option>
                    <option value="modern">Modern - Minimalist Line</option>
                    <option value="artistic">Artistic - Creative Flair</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right" selected>Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#374151" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="nameColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Icon/Emoji</label>
                <input type="text" placeholder="💝" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="icon" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simple';
        const align = style.align || 'right';
        const bgColor = style.bg || '#f9fafb';
        const textColor = style.textColor || globalStyles.textColor;
        const nameColor = style.nameColor || globalStyles.primaryColor;
        const icon = style.icon || '';

        const fontSizes = {
            small: { signoff: 'text-sm', name: 'text-base' },
            medium: { signoff: 'text-base', name: 'text-lg' },
            large: { signoff: 'text-lg', name: 'text-xl' },
            xlarge: { signoff: 'text-xl', name: 'text-2xl' }
        };
        const sizes = fontSizes[style.fontSize] || fontSizes.large;

        const signoff = data.signoff || '';
        const name = data.name || 'Your Name';

        // Simple Layout
        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${signoff ? `<p class="${sizes.signoff} mb-2 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        <p class="${sizes.name} font-semibold" style="color: ${nameColor}">${name}</p>
                        ${icon ? `<span class="text-2xl mt-2 inline-block">${icon}</span>` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${signoff ? `<p class="${sizes.signoff} mb-4 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        <div class="inline-block" style="text-align: ${align}">
                            <div class="mb-2" style="border-bottom: 2px solid ${nameColor}; padding-bottom: 8px;">
                                <p class="${sizes.name} font-semibold" style="color: ${nameColor}">${name}</p>
                            </div>
                            ${icon ? `<span class="text-xl">${icon}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Handwritten Layout
        if (layout === 'handwritten') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${signoff ? `<p class="${sizes.signoff} mb-3 font-serif italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        <p class="${sizes.name} font-serif italic font-bold" style="color: ${nameColor}; text-decoration: underline; text-decoration-style: wavy;">${name}</p>
                        ${icon ? `<span class="text-2xl mt-2 inline-block">${icon}</span>` : ''}
                    </div>
                </div>
            `;
        }

        // Formal Layout
        if (layout === 'formal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="inline-block border-2 rounded px-6 py-4" style="border-color: ${nameColor}">
                            ${signoff ? `<p class="${sizes.signoff} mb-2" style="color: ${textColor}">${signoff}</p>` : ''}
                            <p class="${sizes.name} font-bold" style="color: ${nameColor}">${name}</p>
                            ${icon ? `<span class="text-xl mt-1 block">${icon}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Casual Layout
        if (layout === 'casual') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        ${icon ? `<span class="text-3xl mb-2 inline-block">${icon}</span><br>` : ''}
                        ${signoff ? `<p class="${sizes.signoff} mb-2" style="color: ${textColor}">${signoff}</p>` : ''}
                        <p class="${sizes.name} font-bold" style="color: ${nameColor}">~ ${name} ~</p>
                        <div class="mt-2 flex items-center gap-2" style="justify-content: ${align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'}">
                            <span style="color: ${nameColor}">♥</span>
                            <span style="color: ${nameColor}">♥</span>
                            <span style="color: ${nameColor}">♥</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Boxed Layout
        if (layout === 'boxed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <div class="p-6 rounded-lg shadow-lg text-center" style="background: linear-gradient(135deg, ${nameColor}15 0%, ${nameColor}05 100%); border: 2px solid ${nameColor}">
                            ${icon ? `<div class="text-3xl mb-3">${icon}</div>` : ''}
                            ${signoff ? `<p class="${sizes.signoff} mb-3 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                            <div class="inline-block px-4 py-2 rounded" style="background: ${nameColor}">
                                <p class="${sizes.name} font-bold text-white">${name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Stamp Layout - Official Seal
        if (layout === 'stamp') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="inline-block relative">
                            <div class="w-32 h-32 rounded-full border-4 flex items-center justify-center relative" style="border-color: ${nameColor}; background: ${nameColor}11;">
                                <div class="absolute inset-0 rounded-full border-2 m-2" style="border-color: ${nameColor}"></div>
                                <div class="text-center z-10">
                                    ${icon ? `<div class="text-3xl mb-1">${icon}</div>` : ''}
                                    <div class="${sizes.name} font-bold leading-tight" style="color: ${nameColor}">${name.split(' ')[0]}</div>
                                    ${name.split(' ')[1] ? `<div class="text-xs font-bold" style="color: ${nameColor}">${name.split(' ').slice(1).join(' ')}</div>` : ''}
                                </div>
                            </div>
                            ${signoff ? `<p class="${sizes.signoff} mt-4 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Ribbon Layout - Award Style
        if (layout === 'ribbon') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="inline-block relative">
                            <div class="relative px-8 py-4 shadow-lg" style="background: ${nameColor}; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
                                ${icon ? `<span class="text-2xl mr-2">${icon}</span>` : ''}
                                <span class="${sizes.name} font-bold text-white">${name}</span>
                            </div>
                            ${signoff ? `<p class="${sizes.signoff} mt-4 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Layout - Certificate Style
        if (layout === 'badge') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto text-center">
                        <div class="border-4 border-double rounded-lg p-6 shadow-xl" style="border-color: ${nameColor}; background: linear-gradient(135deg, ${nameColor}08 0%, ${nameColor}15 100%);">
                            ${icon ? `<div class="text-4xl mb-3">${icon}</div>` : ''}
                            <div class="border-t-2 border-b-2 py-4 mb-3" style="border-color: ${nameColor}">
                                <p class="${sizes.name} font-bold uppercase tracking-wide" style="color: ${nameColor}">${name}</p>
                            </div>
                            ${signoff ? `<p class="${sizes.signoff} italic" style="color: ${textColor}">${signoff}</p>` : ''}
                            <div class="mt-4 flex justify-center gap-2">
                                <div class="w-3 h-3 rounded-full" style="background: ${nameColor}"></div>
                                <div class="w-3 h-3 rounded-full" style="background: ${nameColor}"></div>
                                <div class="w-3 h-3 rounded-full" style="background: ${nameColor}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Vintage Layout - Classic Letter
        if (layout === 'vintage') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #f4e4c1 0%, #e8d7b0 100%);">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="relative">
                            <div class="absolute top-0 left-0 text-6xl opacity-10" style="color: ${nameColor}">❖</div>
                            <div class="absolute bottom-0 right-0 text-6xl opacity-10" style="color: ${nameColor}">❖</div>
                            <div class="relative z-10 py-6">
                                ${signoff ? `<p class="${sizes.signoff} mb-4 font-serif italic" style="color: ${textColor}">${signoff}</p>` : ''}
                                <div class="inline-block">
                                    <p class="${sizes.name} font-serif font-bold mb-2" style="color: ${nameColor}; text-decoration: underline; text-decoration-style: double;">${name}</p>
                                    ${icon ? `<div class="text-center text-2xl" style="color: ${nameColor}">${icon}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout - Minimalist Line
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="inline-block">
                            ${signoff ? `<p class="${sizes.signoff} mb-4 tracking-wide" style="color: ${textColor}">${signoff}</p>` : ''}
                            <div class="relative inline-block">
                                <p class="${sizes.name} font-bold uppercase tracking-widest mb-2" style="color: ${nameColor}">${name}</p>
                                <div class="h-1" style="background: linear-gradient(to right, ${nameColor} 0%, transparent 100%);"></div>
                            </div>
                            ${icon ? `<div class="mt-3 text-2xl" style="color: ${nameColor}">${icon}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Artistic Layout - Creative Flair
        if (layout === 'artistic') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}">
                    <div class="absolute inset-0 opacity-5" style="background: repeating-linear-gradient(45deg, ${nameColor}, ${nameColor} 10px, transparent 10px, transparent 20px);"></div>
                    <div class="max-w-2xl mx-auto relative z-10" style="text-align: ${align}">
                        <div class="inline-block relative">
                            <div class="absolute -inset-4 transform -rotate-2 rounded-lg opacity-20" style="background: ${nameColor}"></div>
                            <div class="relative p-6 rounded-lg" style="background: linear-gradient(135deg, ${nameColor}15 0%, ${nameColor}25 100%);">
                                ${icon ? `<div class="text-4xl mb-3 transform -rotate-6 inline-block">${icon}</div>` : ''}
                                ${signoff ? `<p class="${sizes.signoff} mb-3 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                                <p class="${sizes.name} font-black" style="color: ${nameColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">${name}</p>
                                <div class="mt-3 flex items-center gap-2" style="justify-content: ${align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'}">
                                    <div class="w-8 h-1 transform -rotate-12" style="background: ${nameColor}"></div>
                                    <div class="w-12 h-1" style="background: ${nameColor}"></div>
                                    <div class="w-6 h-1 transform rotate-12" style="background: ${nameColor}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                    ${signoff ? `<p class="${sizes.signoff} mb-2 italic" style="color: ${textColor}">${signoff}</p>` : ''}
                    <p class="${sizes.name} font-semibold" style="color: ${nameColor}">${name}</p>
                    ${icon ? `<span class="text-2xl mt-2 inline-block">${icon}</span>` : ''}
                </div>
            </div>
        `;
    }
};
