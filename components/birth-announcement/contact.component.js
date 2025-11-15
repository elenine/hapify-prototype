// Contact Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="person" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="contact@email.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="list">Simple List</option>
                    <option value="compact">Compact</option>
                    <option value="elegant">Elegant</option>
                    <option value="modern">Modern Blocks</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#f0fdfa';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Get in Touch</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${data.person ? `
                        <div class="flex items-center gap-4 p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-2xl">👤</div>
                            <div class="font-medium">${data.person}</div>
                        </div>` : ''}
                        ${data.email ? `
                        <div class="flex items-center gap-4 p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-2xl">📧</div>
                            <div class="text-sm">${data.email}</div>
                        </div>` : ''}
                        ${data.phone ? `
                        <div class="flex items-center gap-4 p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-2xl">📞</div>
                            <div class="text-sm">${data.phone}</div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Get in Touch</h2>
                    <div class="max-w-md mx-auto space-y-4" style="color: ${textColor};">
                        ${data.person ? `
                        <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor};">
                            <span class="text-xl">👤</span>
                            <span class="font-medium">${data.person}</span>
                        </div>` : ''}
                        ${data.email ? `
                        <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor};">
                            <span class="text-xl">📧</span>
                            <span>${data.email}</span>
                        </div>` : ''}
                        ${data.phone ? `
                        <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor};">
                            <span class="text-xl">📞</span>
                            <span>${data.phone}</span>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'compact') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <h2 class="text-2xl font-bold mb-6" style="color: ${textColor};">Get in Touch</h2>
                        <div class="space-y-2" style="color: ${textColor};">
                            ${data.person ? `<div class="text-lg font-medium">${data.person}</div>` : ''}
                            ${data.email ? `<div class="text-sm opacity-80">${data.email}</div>` : ''}
                            ${data.phone ? `<div class="text-sm opacity-80">${data.phone}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="border-2 rounded-2xl p-8 text-center" style="border-color: ${accentColor}; background: ${cardBg};">
                            <h2 class="text-2xl font-bold mb-8" style="color: ${accentColor};">Get in Touch</h2>
                            <div class="space-y-4" style="color: ${textColor};">
                                ${data.person ? `
                                <div class="flex items-center justify-center gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg" style="background: ${accentColor}; color: white;">👤</div>
                                    <span class="font-medium">${data.person}</span>
                                </div>` : ''}
                                ${data.email ? `
                                <div class="flex items-center justify-center gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg" style="background: ${accentColor}; color: white;">📧</div>
                                    <span class="text-sm">${data.email}</span>
                                </div>` : ''}
                                ${data.phone ? `
                                <div class="flex items-center justify-center gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg" style="background: ${accentColor}; color: white;">📞</div>
                                    <span class="text-sm">${data.phone}</span>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Get in Touch</h2>
                    <div class="max-w-md mx-auto grid gap-4">
                        ${data.person ? `
                        <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">👤</div>
                            <div>
                                <div class="text-xs opacity-60 mb-1">Contact Person</div>
                                <div class="font-semibold">${data.person}</div>
                            </div>
                        </div>` : ''}
                        ${data.email ? `
                        <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">📧</div>
                            <div>
                                <div class="text-xs opacity-60 mb-1">Email</div>
                                <div class="font-semibold text-sm">${data.email}</div>
                            </div>
                        </div>` : ''}
                        ${data.phone ? `
                        <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">📞</div>
                            <div>
                                <div class="text-xs opacity-60 mb-1">Phone</div>
                                <div class="font-semibold">${data.phone}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Get in Touch</h2>
                <div class="max-w-md mx-auto space-y-4">
                    ${data.person ? `<div class="flex items-center gap-4 p-4 rounded-lg" style="background: ${cardBg};"><div class="text-2xl">👤</div><div class="font-medium">${data.person}</div></div>` : ''}
                    ${data.email ? `<div class="flex items-center gap-4 p-4 rounded-lg" style="background: ${cardBg};"><div class="text-2xl">📧</div><div class="text-sm">${data.email}</div></div>` : ''}
                    ${data.phone ? `<div class="flex items-center gap-4 p-4 rounded-lg" style="background: ${cardBg};"><div class="text-2xl">📞</div><div class="text-sm">${data.phone}</div></div>` : ''}
                </div>
            </div>
        `;
    }`
};
