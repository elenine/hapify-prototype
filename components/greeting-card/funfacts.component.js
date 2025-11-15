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
                    <option value="polaroid">Polaroid Cards - Photo-like cards</option>
                    <option value="timeline">Timeline View - Chronological style</option>
                    <option value="masonry">Masonry Grid - Pinterest style</option>
                    <option value="stacked">Stacked Cards - Layered effect</option>
                    <option value="neon">Neon Signs - Glowing neon style</option>
                    <option value="comic">Comic Strips - Comic book style</option>
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

        // Polaroid Cards Layout
        if (layout === 'polaroid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-6">
                            ${funfacts.length > 0 ? funfacts.map((fact, index) => `
                                <div class="p-4 bg-white shadow-xl transform ${index % 3 === 0 ? 'rotate-2' : index % 3 === 1 ? '-rotate-2' : 'rotate-1'}" style="max-width: 280px">
                                    <div class="aspect-square rounded flex items-center justify-center mb-3 text-5xl" style="background: ${cardBg}">
                                        ${icon}
                                    </div>
                                    <p class="text-center text-sm">${fact}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Timeline View Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-12">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${accentColor}"></div>
                            <div class="space-y-8">
                                ${funfacts.length > 0 ? funfacts.map((fact, index) => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="${padding} rounded-lg shadow-md" style="background: ${cardBg}">
                                            <div class="flex items-start gap-3">
                                                <span class="text-xl">${icon}</span>
                                                <p>${fact}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Masonry Grid Layout
        if (layout === 'masonry') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-3 gap-4">
                            ${funfacts.length > 0 ? funfacts.map((fact, index) => {
                                const heights = ['h-32', 'h-40', 'h-36', 'h-44'];
                                const height = heights[index % heights.length];
                                return `
                                    <div class="${padding} ${height} rounded-xl shadow-lg flex flex-col justify-center" style="background: ${cardBg}">
                                        <div class="text-3xl text-center mb-2">${icon}</div>
                                        <p class="text-sm text-center">${fact}</p>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500 col-span-3">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Stacked Cards Layout
        if (layout === 'stacked') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-6">
                            ${funfacts.length > 0 ? funfacts.map((fact, index) => `
                                <div class="relative" style="margin-left: ${index * 20}px">
                                    <div class="${padding} rounded-xl shadow-xl" style="background: ${cardBg}">
                                        <div class="flex items-start gap-3">
                                            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background: ${accentColor}; color: white">
                                                ${index + 1}
                                            </div>
                                            <p class="flex-1">${fact}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Neon Signs Layout
        if (layout === 'neon') {
            return `
                <div class="py-12 px-6" style="background: #1a1a1a; color: white">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8" style="color: ${accentColor}; text-shadow: 0 0 20px ${accentColor}">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="${padding} rounded-lg" style="background: rgba(0,0,0,0.5); border: 2px solid ${accentColor}; box-shadow: 0 0 20px ${accentColor}, inset 0 0 20px rgba(255,255,255,0.05)">
                                    <div class="flex items-start gap-3">
                                        <span class="text-2xl" style="color: ${accentColor}; filter: drop-shadow(0 0 10px ${accentColor})">${icon}</span>
                                        <p style="text-shadow: 0 0 10px rgba(255,255,255,0.5)">${fact}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add fun facts in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Comic Strips Layout
        if (layout === 'comic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${funfacts.length > 0 ? funfacts.map((fact) => `
                                <div class="${padding} rounded-lg relative" style="background: ${cardBg}; border: 4px solid ${accentColor}">
                                    <div class="absolute -top-3 left-4 px-3 py-1 text-xs font-bold rounded-full" style="background: ${accentColor}; color: white">POW!</div>
                                    <div class="flex items-start gap-3">
                                        <span class="text-3xl">${icon}</span>
                                        <p class="font-semibold">${fact}</p>
                                    </div>
                                    <div class="absolute -right-2 top-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8" style="border-top-color: ${accentColor}"></div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add fun facts in the editor</p>'}
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
