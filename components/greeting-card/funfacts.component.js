// Fun Facts Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.funfacts = {
    name: '🌟 Fun Facts',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Fun Facts About You!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fun Facts</label>
                <p class="text-xs text-gray-500 mb-2">Add fun facts about the birthday person</p>
                <div data-items-container="funfact" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'funfact')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Fun Fact
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Cards - Classic</option>
                    <option value="list">List View - Clean</option>
                    <option value="numbered">Numbered List - Formal</option>
                    <option value="icons">Icon Cards - Playful</option>
                    <option value="minimal">Minimal - Simple</option>
                    <option value="bubbles">Bubble Style - Fun</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#dbeafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="cardSize" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="sparkle">✨ Sparkle</option>
                    <option value="star">⭐ Star</option>
                    <option value="check">✓ Checkmark</option>
                    <option value="bullet">• Bullet</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const funfacts = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="funfact"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const factInput = item.querySelector('[data-field="fact"]');
                const fact = factInput?.value || '';
                if (fact) funfacts.push(fact);
            });
        }

        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#eff6ff';
        const cardBg = style.cardBg || '#dbeafe';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || globalStyles.primaryColor;
        const title = data.title || 'Fun Facts About You!';

        const cardSizes = {
            compact: 'p-4 text-sm',
            medium: 'p-6 text-base',
            large: 'p-8 text-lg'
        };
        const padding = cardSizes[style.cardSize] || cardSizes.medium;

        const icons = {
            sparkle: '✨',
            star: '⭐',
            check: '✓',
            bullet: '•'
        };
        const icon = icons[style.iconStyle] || icons.sparkle;

        // Grid Cards Layout
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="${padding} rounded-xl shadow-md" style="background: ${cardBg}">
                                    <div class="flex items-start gap-3">
                                        <span class="text-2xl">${icon}</span>
                                        <p class="flex-1">${fact}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // List View Layout
        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-3">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="${padding} rounded-lg border-l-4 bg-white" style="border-color: ${accentColor}">
                                    <div class="flex items-start gap-3">
                                        <span class="text-xl">${icon}</span>
                                        <p class="flex-1">${fact}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Numbered List Layout
        if (layout === 'numbered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${funfacts.length > 0 ? funfacts.map((fact, index) => `
                                <div class="${padding} rounded-xl shadow-md" style="background: ${cardBg}">
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <p class="flex-1">${fact}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Icon Cards Layout
        if (layout === 'icons') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="${padding} rounded-2xl text-center shadow-lg" style="background: ${cardBg}">
                                    <div class="text-4xl mb-3">${icon}</div>
                                    <p>${fact}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-2xl font-bold text-center mb-6">${title}</h3>
                        <div class="space-y-2">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="flex items-start gap-3">
                                    <span style="color: ${accentColor}">${icon}</span>
                                    <p class="text-sm">${fact}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Bubble Style Layout
        if (layout === 'bubbles') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="${padding} rounded-full shadow-lg" style="background: ${cardBg}; max-width: 250px">
                                    <div class="flex items-center gap-2">
                                        <span class="text-xl">${icon}</span>
                                        <p class="text-sm">${fact}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        ${funfacts.length > 0 ? funfacts.map((fact) => `
                            <div class="${padding} rounded-xl shadow-md" style="background: ${cardBg}">
                                <div class="flex items-start gap-3">
                                    <span class="text-2xl">${icon}</span>
                                    <p class="flex-1">${fact}</p>
                                </div>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 col-span-2">Add fun facts in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
