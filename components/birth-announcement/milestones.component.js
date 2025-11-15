// Milestones Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestones = {
    name: '🎯 First Milestones',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Baby's First Milestones" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 1</label>
                <input type="text" placeholder="First smile at 2 weeks" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 2</label>
                <input type="text" placeholder="First giggle at 1 month" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 3</label>
                <input type="text" placeholder="Held head up at 6 weeks" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone3" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 4</label>
                <input type="text" placeholder="Sleeping through the night" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone4" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="list">List with Icons</option>
                    <option value="timeline">Timeline Style</option>
                    <option value="cards">Cards Grid</option>
                    <option value="checklist">Checklist Style</option>
                    <option value="badges">Progress Badges</option>
                    <option value="compact">Compact List</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Item Color</label>
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
        const layout = style.layout || 'list';
        const bgColor = style.bg || '#f0fdfa';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        const milestones = [data.milestone1, data.milestone2, data.milestone3, data.milestone4].filter(m => m);

        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">🎯</div>
                        <h2 class="text-2xl font-bold text-center mb-6" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                        <div class="space-y-3">
                            ${milestones.map(milestone => `
                            <div class="flex items-start gap-3 p-4 rounded-lg shadow-sm" style="background: ${cardBg};">
                                <span class="text-xl">⭐</span>
                                <span style="color: ${textColor};">${milestone}</span>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">🎯</div>
                        <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                        <div class="space-y-6">
                            ${milestones.map((milestone, index) => `
                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style="background: ${accentColor};">
                                        ${index + 1}
                                    </div>
                                    ${index < milestones.length - 1 ? `<div class="w-0.5 flex-1 mt-2" style="background: ${accentColor}; opacity: 0.3;"></div>` : ''}
                                </div>
                                <div class="flex-1 pb-6">
                                    <div class="p-4 rounded-lg shadow-sm" style="background: ${cardBg}; color: ${textColor};">
                                        ${milestone}
                                    </div>
                                </div>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">🎯</div>
                        <h2 class="text-2xl font-bold text-center mb-6" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                        <div class="grid grid-cols-2 gap-4">
                            ${milestones.map((milestone, index) => `
                            <div class="p-4 rounded-xl shadow-lg text-center" style="background: ${cardBg};">
                                <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl" style="background: ${accentColor}; color: white;">
                                    ${['⭐', '🌟', '✨', '💫'][index]}
                                </div>
                                <p class="text-xs leading-relaxed" style="color: ${textColor};">${milestone}</p>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'checklist') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center mb-6">
                            <div class="text-4xl mb-2">🎯</div>
                            <h2 class="text-2xl font-bold" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                        </div>
                        <div class="p-6 rounded-xl shadow-xl" style="background: ${cardBg};">
                            <div class="space-y-3">
                                ${milestones.map(milestone => `
                                <div class="flex items-start gap-3 pb-3 border-b last:border-0" style="border-color: ${accentColor}; opacity: 0.2;">
                                    <div class="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-0.5" style="background: ${accentColor}; color: white;">
                                        ✓
                                    </div>
                                    <span class="text-sm" style="color: ${textColor};">${milestone}</span>
                                </div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'badges') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">🎯</div>
                        <h2 class="text-2xl font-bold text-center mb-8" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                        <div class="space-y-4">
                            ${milestones.map((milestone, index) => `
                            <div class="flex items-center gap-4 p-4 rounded-xl shadow-md" style="background: ${cardBg};">
                                <div class="flex-shrink-0">
                                    <div class="relative">
                                        <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg" style="background: ${accentColor}; color: white;">
                                            ${['🏆', '🥇', '🎖️', '⭐'][index]}
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style="background: ${accentColor}; color: white;">
                                            ${index + 1}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium" style="color: ${textColor};">${milestone}</p>
                                </div>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'compact') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-6" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                        <div class="p-6 rounded-xl" style="background: ${cardBg};">
                            <div class="space-y-3">
                                ${milestones.map((milestone, index) => `
                                <div class="flex items-start gap-3">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style="background: ${accentColor}; color: white;">
                                        ${index + 1}
                                    </div>
                                    <span class="text-sm leading-relaxed" style="color: ${textColor};">${milestone}</span>
                                </div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-md mx-auto">
                    <div class="text-center text-4xl mb-4">🎯</div>
                    <h2 class="text-2xl font-bold text-center mb-6" style="color: ${textColor};">${data.title || "Baby's First Milestones"}</h2>
                    <div class="space-y-3">
                        ${milestones.map(milestone => `<div class="flex items-start gap-3 p-4 rounded-lg" style="background: ${cardBg};"><span class="text-xl">⭐</span><span style="color: ${textColor};">${milestone}</span></div>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }`
};
