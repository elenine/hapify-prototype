// Parents Info Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.parents = {
    name: '👨‍👩‍👦 Parents Info',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mother's Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="mother" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Father's Name</label>
                <input type="text" placeholder="Michael Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="father" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Siblings (if any)</label>
                <input type="text" placeholder="Big brother Jake" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="siblings" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="split">Split Cards</option>
                    <option value="minimal">Minimal List</option>
                    <option value="elegant">Elegant</option>
                    <option value="modern">Modern Blocks</option>
                    <option value="family">Family Tree</option>
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
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#f0fdfa';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Proud Parents</h2>
                    <div class="max-w-md mx-auto text-center space-y-4">
                        ${data.mother || data.father ? `
                        <div class="p-6 rounded-xl shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-4xl mb-3">👨‍👩‍👦</div>
                            ${data.mother ? `<div class="font-semibold mb-2 text-lg">${data.mother}</div>` : ''}
                            ${data.father ? `<div class="font-semibold mb-2 text-lg">${data.father}</div>` : ''}
                        </div>` : ''}
                        ${data.siblings ? `
                        <div class="p-4 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-sm opacity-60 mb-2">Siblings</div>
                            <div class="font-medium">${data.siblings}</div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Proud Parents</h2>
                    <div class="max-w-md mx-auto">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            ${data.mother ? `
                            <div class="p-6 rounded-xl text-center" style="background: ${cardBg}; color: ${textColor};">
                                <div class="text-3xl mb-2">👩</div>
                                <div class="text-xs opacity-60 mb-1">Mother</div>
                                <div class="font-semibold">${data.mother}</div>
                            </div>` : ''}
                            ${data.father ? `
                            <div class="p-6 rounded-xl text-center" style="background: ${cardBg}; color: ${textColor};">
                                <div class="text-3xl mb-2">👨</div>
                                <div class="text-xs opacity-60 mb-1">Father</div>
                                <div class="font-semibold">${data.father}</div>
                            </div>` : ''}
                        </div>
                        ${data.siblings ? `
                        <div class="p-4 rounded-xl text-center" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-sm opacity-60 mb-1">Siblings</div>
                            <div class="font-medium">${data.siblings}</div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center mb-6">
                            <p class="text-sm uppercase tracking-widest mb-2" style="color: ${accentColor};">Proud Parents</p>
                        </div>
                        <div class="space-y-4 text-center" style="color: ${textColor};">
                            ${data.mother ? `<div class="text-xl font-light">${data.mother}</div>` : ''}
                            ${data.mother && data.father ? `<div class="text-sm opacity-40">&</div>` : ''}
                            ${data.father ? `<div class="text-xl font-light">${data.father}</div>` : ''}
                            ${data.siblings ? `
                            <div class="pt-6 mt-6 border-t" style="border-color: ${accentColor};">
                                <div class="text-sm opacity-60 mb-1">Big Siblings</div>
                                <div class="text-lg">${data.siblings}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="inline-block px-8 py-10 rounded-2xl border-2" style="border-color: ${accentColor}; background: ${cardBg}; color: ${textColor};">
                            <div class="text-5xl mb-6">👨‍👩‍👦</div>
                            <div class="text-sm uppercase tracking-wider mb-4" style="color: ${accentColor};">Proud Parents</div>
                            ${data.mother ? `<div class="text-xl font-serif mb-2">${data.mother}</div>` : ''}
                            ${data.father ? `<div class="text-xl font-serif mb-2">${data.father}</div>` : ''}
                            ${data.siblings ? `
                            <div class="mt-6 pt-6 border-t" style="border-color: ${accentColor};">
                                <div class="text-xs uppercase tracking-wider mb-2" style="color: ${accentColor};">Siblings</div>
                                <div class="font-medium">${data.siblings}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Proud Parents</h2>
                    <div class="max-w-md mx-auto space-y-3">
                        ${data.mother ? `
                        <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white;">👩</div>
                            <div class="flex-1">
                                <div class="text-xs opacity-60">Mother</div>
                                <div class="font-semibold">${data.mother}</div>
                            </div>
                        </div>` : ''}
                        ${data.father ? `
                        <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white;">👨</div>
                            <div class="flex-1">
                                <div class="text-xs opacity-60">Father</div>
                                <div class="font-semibold">${data.father}</div>
                            </div>
                        </div>` : ''}
                        ${data.siblings ? `
                        <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white;">👶</div>
                            <div class="flex-1">
                                <div class="text-xs opacity-60">Siblings</div>
                                <div class="font-semibold">${data.siblings}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'family') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-10" style="color: ${textColor};">Our Family</h2>
                    <div class="max-w-md mx-auto">
                        <div class="relative">
                            ${data.mother || data.father ? `
                            <div class="flex justify-center gap-6 mb-8">
                                ${data.mother ? `
                                <div class="text-center">
                                    <div class="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl" style="background: ${accentColor}; color: white;">👩</div>
                                    <div class="font-semibold text-sm" style="color: ${textColor};">${data.mother}</div>
                                    <div class="text-xs opacity-60" style="color: ${textColor};">Mother</div>
                                </div>` : ''}
                                ${data.father ? `
                                <div class="text-center">
                                    <div class="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl" style="background: ${accentColor}; color: white;">👨</div>
                                    <div class="font-semibold text-sm" style="color: ${textColor};">${data.father}</div>
                                    <div class="text-xs opacity-60" style="color: ${textColor};">Father</div>
                                </div>` : ''}
                            </div>
                            ${data.siblings ? `
                            <div class="text-center pt-6 border-t" style="border-color: ${accentColor};">
                                <div class="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl" style="background: ${cardBg}; border: 2px solid ${accentColor};">👶</div>
                                <div class="font-semibold" style="color: ${textColor};">${data.siblings}</div>
                                <div class="text-xs opacity-60" style="color: ${textColor};">Siblings</div>
                            </div>` : ''}
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Proud Parents</h2>
                <div class="max-w-md mx-auto text-center space-y-4">
                    ${data.mother || data.father ? `
                    <div class="p-4 rounded-lg" style="background: ${cardBg};">
                        <div class="text-3xl mb-2">👨‍👩‍👦</div>
                        ${data.mother ? `<div class="font-medium mb-1">${data.mother}</div>` : ''}
                        ${data.father ? `<div class="font-medium mb-1">${data.father}</div>` : ''}
                    </div>` : ''}
                    ${data.siblings ? `
                    <div class="p-4 rounded-lg" style="background: ${cardBg};">
                        <div class="text-xs opacity-60 mb-1">Siblings</div>
                        <div class="font-medium">${data.siblings}</div>
                    </div>` : ''}
                </div>
            </div>
        `;
    }
};
