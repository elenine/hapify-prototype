// Memories/Highlights component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
    name: '💭 Memories & Highlights',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Memorable Moments" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlight 1</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="highlight1" placeholder="Your first big presentation" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlight 2</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="highlight2" placeholder="Leading the team project" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlight 3</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="highlight3" placeholder="Achieving record results" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="description" rows="2" placeholder="A look back at key moments..." onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="checklist">Checklist</option>
                    <option value="timeline">Timeline</option>
                    <option value="cards">Cards</option>
                    <option value="numbered">Numbered List</option>
                    <option value="boxes">Boxes</option>
                    <option value="badges">Badges</option>
                    <option value="ribbon">Ribbon Style</option>
                    <option value="stars">Star Highlights</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="iconStyle" onchange="updatePreview()">
                    <option value="check">✓ Checkmark</option>
                    <option value="star">⭐ Star</option>
                    <option value="trophy">🏆 Trophy</option>
                    <option value="medal">🏅 Medal</option>
                    <option value="sparkle">✨ Sparkle</option>
                    <option value="fire">🔥 Fire</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Memorable Moments';
        const highlight1 = data.highlight1 || 'Your first big presentation';
        const highlight2 = data.highlight2 || 'Leading the team project';
        const highlight3 = data.highlight3 || 'Achieving record results';
        const description = data.description || '';
        const layout = style.layout || 'checklist';
        const iconStyle = style.iconStyle || 'check';

        const highlights = [highlight1, highlight2, highlight3].filter(h => h);

        const icons = {
            'check': '✓',
            'star': '⭐',
            'trophy': '🏆',
            'medal': '🏅',
            'sparkle': '✨',
            'fire': '🔥'
        };
        const icon = icons[iconStyle] || '✓';

        if (layout === 'checklist') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-6 opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="space-y-4">
                            ${highlights.map(h => `
                                <div class="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md">
                                    <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold" style="background: ${globalStyles.primaryColor};">
                                        ${icon}
                                    </div>
                                    <p class="flex-1 text-lg pt-1" style="color: ${globalStyles.textColor};">${h}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'timeline') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="relative">
                            <div class="absolute left-6 top-0 bottom-0 w-1" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                            <div class="space-y-8">
                                ${highlights.map((h, idx) => `
                                    <div class="relative pl-16">
                                        <div class="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg" style="background: ${idx === 0 ? globalStyles.primaryColor : idx === 1 ? globalStyles.secondaryColor : globalStyles.primaryColor};">
                                            ${icon}
                                        </div>
                                        <div class="bg-white rounded-xl p-4 shadow-md">
                                            <p class="text-lg" style="color: ${globalStyles.textColor};">${h}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'cards') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="grid md:grid-cols-3 gap-4">
                            ${highlights.map(h => `
                                <div class="rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}20, ${globalStyles.secondaryColor}20);">
                                    <div class="text-4xl mb-3">${icon}</div>
                                    <p class="text-base font-medium" style="color: ${globalStyles.textColor};">${h}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'numbered') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-6 opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="space-y-4">
                            ${highlights.map((h, idx) => `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                                        ${idx + 1}
                                    </div>
                                    <div class="flex-1 pt-2">
                                        <p class="text-lg" style="color: ${globalStyles.textColor};">${h}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'boxes') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="space-y-3">
                            ${highlights.map(h => `
                                <div class="border-l-4 pl-6 py-4 bg-white rounded-r-xl shadow-md" style="border-color: ${globalStyles.primaryColor};">
                                    <p class="text-lg flex items-center gap-3" style="color: ${globalStyles.textColor};">
                                        <span class="text-2xl">${icon}</span>
                                        ${h}
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'badges') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-2xl mx-auto text-center py-8">
                        <h3 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="flex flex-wrap justify-center gap-4">
                            ${highlights.map(h => `
                                <div class="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2">
                                    <span class="text-2xl">${icon}</span>
                                    <span class="text-base font-medium" style="color: ${globalStyles.textColor};">${h}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'ribbon') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        ${description ? `<p class="text-base mb-8 text-center opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        <div class="space-y-4">
                            ${highlights.map((h, idx) => `
                                <div class="relative">
                                    <div class="rounded-lg p-4 pr-8 shadow-md text-white" style="background: linear-gradient(90deg, ${idx % 2 === 0 ? globalStyles.primaryColor : globalStyles.secondaryColor}, ${idx % 2 === 0 ? globalStyles.secondaryColor : globalStyles.primaryColor});">
                                        <div class="flex items-center gap-3">
                                            <span class="text-2xl">${icon}</span>
                                            <p class="text-lg font-medium">${h}</p>
                                        </div>
                                    </div>
                                    <div class="absolute right-0 top-0 bottom-0 w-8" style="background: ${idx % 2 === 0 ? globalStyles.secondaryColor : globalStyles.primaryColor}; clip-path: polygon(0 0, 100% 50%, 0 100%);"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'stars') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
                        <div class="text-center mb-6">
                            <h3 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
                            ${description ? `<p class="text-base opacity-80" style="color: ${globalStyles.textColor};">${description}</p>` : ''}
                        </div>
                        <div class="space-y-6">
                            ${highlights.map(h => `
                                <div class="text-center">
                                    <div class="text-4xl mb-2">${icon}</div>
                                    <p class="text-lg font-medium" style="color: ${globalStyles.textColor};">${h}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
            <ul class="space-y-2">
                ${highlights.map(h => `<li class="text-lg" style="color: ${globalStyles.textColor};">• ${h}</li>`).join('')}
            </ul>
        </div>`;
    }
};
