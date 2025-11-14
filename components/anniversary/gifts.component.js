// Gifts Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Preferences',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Gift Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Message</label>
                <textarea placeholder="Your presence is the greatest gift, but if you wish to honor us..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1 Name</label>
                <input type="text" placeholder="Amazon Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry1name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1 URL</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry1url" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 Name (optional)</label>
                <input type="text" placeholder="Target Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry2name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 URL (optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="registry2url" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic</option>
                    <option value="modern">Modern Cards</option>
                    <option value="elegant">Elegant</option>
                    <option value="minimal">Minimal</option>
                    <option value="boxed">Boxed Links</option>
                    <option value="grid">Grid Layout</option>
                    <option value="stacked">Stacked Buttons</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid">Solid</option>
                    <option value="outline" selected>Outline</option>
                    <option value="gradient">Gradient</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fef2f2';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#ffffff';
        const buttonStyle = style.buttonStyle || 'outline';
        const shadow = style.shadow || 'md';
        const borderRadius = style.borderRadius || 'lg';

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

        const registryButton = (name, url) => {
            if (!name || !url) return '';
            if (buttonStyle === 'solid') {
                return `<a href="${url}" target="_blank" class="block px-6 py-3 ${borderRadiusClasses[borderRadius]} text-white font-semibold transition hover:opacity-90" style="background: ${accentColor}">${name}</a>`;
            } else if (buttonStyle === 'gradient') {
                return `<a href="${url}" target="_blank" class="block px-6 py-3 ${borderRadiusClasses[borderRadius]} text-white font-semibold transition hover:opacity-90" style="background: linear-gradient(135deg, ${accentColor}, #f87171)">${name}</a>`;
            }
            return `<a href="${url}" target="_blank" class="block border-2 px-6 py-3 ${borderRadiusClasses[borderRadius]} font-semibold transition hover:opacity-90" style="color: ${accentColor}; border-color: ${accentColor}; background: ${cardBg}">${name}</a>`;
        };

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🎁</div>
                        <h2 class="text-2xl font-bold mb-6">${data.title || 'Gift Registry'}</h2>
                        ${data.message ? `<p class="text-gray-700 mb-8 px-4">${data.message}</p>` : ''}
                        <div class="space-y-3">
                            ${registryButton(data.registry1name, data.registry1url)}
                            ${registryButton(data.registry2name, data.registry2url)}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">🎁</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Gift Registry'}</h2>
                        </div>
                        ${data.message ? `<p class="text-center text-gray-700 mb-8 max-w-xl mx-auto">${data.message}</p>` : ''}
                        <div class="grid md:grid-cols-2 gap-6">
                            ${data.registry1name && data.registry1url ? `
                                <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} transition hover:scale-105" style="background: ${cardBg}">
                                    <div class="text-3xl mb-3 text-center">🛍️</div>
                                    <h3 class="font-bold mb-3 text-center">${data.registry1name}</h3>
                                    <a href="${data.registry1url}" target="_blank" class="block text-center px-4 py-2 ${borderRadiusClasses[borderRadius]} transition" style="background: ${accentColor}; color: white">View Registry</a>
                                </div>
                            ` : ''}
                            ${data.registry2name && data.registry2url ? `
                                <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} transition hover:scale-105" style="background: ${cardBg}">
                                    <div class="text-3xl mb-3 text-center">🎀</div>
                                    <h3 class="font-bold mb-3 text-center">${data.registry2name}</h3>
                                    <a href="${data.registry2url}" target="_blank" class="block text-center px-4 py-2 ${borderRadiusClasses[borderRadius]} transition" style="background: ${accentColor}; color: white">View Registry</a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-lg mx-auto p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                    <div class="text-4xl mb-4">🎁</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                    ${data.message ? `<p class="text-gray-700 mb-6">${data.message}</p>` : ''}
                    <div class="space-y-3">
                        ${registryButton(data.registry1name, data.registry1url)}
                        ${registryButton(data.registry2name, data.registry2url)}
                    </div>
                </div>
            </div>
        `;
    }
};
