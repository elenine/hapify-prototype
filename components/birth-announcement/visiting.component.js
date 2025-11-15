// Visiting Hours Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.visiting = {
    name: '🏥 Visiting Hours',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="Hospital/Home" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Visiting Hours</label>
                <textarea placeholder="Daily 2PM - 6PM" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="hours" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                <textarea placeholder="Please call ahead..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="list">List View</option>
                    <option value="compact">Compact Info</option>
                    <option value="schedule">Schedule Style</option>
                    <option value="modern">Modern Blocks</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
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
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f0fdfa';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Visiting Information</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${data.location ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-2xl">🏥</div>
                            <div>
                                <div class="text-xs opacity-60 mb-1">Location</div>
                                <div class="font-medium">${data.location}</div>
                            </div>
                        </div>` : ''}
                        ${data.hours ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-2xl">🕐</div>
                            <div>
                                <div class="text-xs opacity-60 mb-1">Hours</div>
                                <div class="text-sm">${data.hours}</div>
                            </div>
                        </div>` : ''}
                        ${data.instructions ? `
                        <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                            <div class="text-2xl">ℹ️</div>
                            <div>
                                <div class="text-xs opacity-60 mb-1">Instructions</div>
                                <div class="text-sm">${data.instructions}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Visiting Information</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${data.location ? `
                        <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                            <span class="text-xl">🏥</span>
                            <div class="flex-1">
                                <div class="text-xs opacity-60">Location</div>
                                <div class="font-medium">${data.location}</div>
                            </div>
                        </div>` : ''}
                        ${data.hours ? `
                        <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                            <span class="text-xl">🕐</span>
                            <div class="flex-1">
                                <div class="text-xs opacity-60">Hours</div>
                                <div class="text-sm">${data.hours}</div>
                            </div>
                        </div>` : ''}
                        ${data.instructions ? `
                        <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                            <span class="text-xl">ℹ️</span>
                            <div class="flex-1">
                                <div class="text-xs opacity-60">Instructions</div>
                                <div class="text-sm">${data.instructions}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'compact') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="inline-block p-8 rounded-2xl" style="background: ${cardBg};">
                            <h2 class="text-2xl font-bold mb-6" style="color: ${accentColor};">Visit Us</h2>
                            <div class="space-y-3" style="color: ${textColor};">
                                ${data.location ? `<div><span class="text-lg">🏥</span> ${data.location}</div>` : ''}
                                ${data.hours ? `<div><span class="text-lg">🕐</span> ${data.hours}</div>` : ''}
                                ${data.instructions ? `<div class="text-sm opacity-80 mt-4 pt-4 border-t" style="border-color: ${accentColor};">${data.instructions}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'schedule') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div class="p-6 text-center" style="background: ${accentColor}; color: white;">
                                <div class="text-3xl mb-2">🏥</div>
                                <h2 class="text-2xl font-bold">Visiting Schedule</h2>
                            </div>
                            <div class="p-6 space-y-4" style="color: ${textColor};">
                                ${data.location ? `
                                <div>
                                    <div class="text-xs font-semibold uppercase mb-2" style="color: ${accentColor};">Location</div>
                                    <div class="text-lg font-medium">${data.location}</div>
                                </div>` : ''}
                                ${data.hours ? `
                                <div>
                                    <div class="text-xs font-semibold uppercase mb-2" style="color: ${accentColor};">Visiting Hours</div>
                                    <div class="font-medium">${data.hours}</div>
                                </div>` : ''}
                                ${data.instructions ? `
                                <div class="pt-4 border-t">
                                    <div class="text-xs font-semibold uppercase mb-2" style="color: ${accentColor};">Please Note</div>
                                    <div class="text-sm">${data.instructions}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Visiting Information</h2>
                    <div class="max-w-md mx-auto space-y-3">
                        ${data.location ? `
                        <div class="flex items-center gap-4 p-6 rounded-xl bg-white shadow-md">
                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                🏥
                            </div>
                            <div style="color: ${textColor};">
                                <div class="text-xs opacity-60 mb-1">Location</div>
                                <div class="font-semibold">${data.location}</div>
                            </div>
                        </div>` : ''}
                        ${data.hours ? `
                        <div class="flex items-center gap-4 p-6 rounded-xl bg-white shadow-md">
                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                🕐
                            </div>
                            <div style="color: ${textColor};">
                                <div class="text-xs opacity-60 mb-1">Visiting Hours</div>
                                <div class="font-semibold text-sm">${data.hours}</div>
                            </div>
                        </div>` : ''}
                        ${data.instructions ? `
                        <div class="flex items-center gap-4 p-6 rounded-xl bg-white shadow-md">
                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                ℹ️
                            </div>
                            <div style="color: ${textColor};">
                                <div class="text-xs opacity-60 mb-1">Special Instructions</div>
                                <div class="font-semibold text-sm">${data.instructions}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">Visiting Information</h2>
                <div class="max-w-md mx-auto space-y-4">
                    ${data.location ? `<div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg};"><div class="text-2xl">🏥</div><div><div class="text-xs opacity-60 mb-1">Location</div><div class="font-medium">${data.location}</div></div></div>` : ''}
                    ${data.hours ? `<div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg};"><div class="text-2xl">🕐</div><div><div class="text-xs opacity-60 mb-1">Hours</div><div class="text-sm">${data.hours}</div></div></div>` : ''}
                    ${data.instructions ? `<div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg};"><div class="text-2xl">ℹ️</div><div><div class="text-xs opacity-60 mb-1">Instructions</div><div class="text-sm">${data.instructions}</div></div></div>` : ''}
                </div>
            </div>
        `;
    }`
};
