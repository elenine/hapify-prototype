// Achievements Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievements = {
    name: '🌟 Achievements',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Amazing Accomplishments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
                <p class="text-xs text-gray-500 mb-2">Celebrate accomplishments from the past year</p>
                <div data-items-container="achievement" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'achievement')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Achievement
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
                    <option value="badges">Badge Style - Modern</option>
                    <option value="list">List View - Clean</option>
                    <option value="timeline">Timeline - Progress</option>
                    <option value="minimal">Minimal - Simple</option>
                    <option value="celebration">Celebration Style - Fun</option>
                    <option value="stars">Star Burst - Radiating star pattern</option>
                    <option value="ladder">Success Ladder - Climbing progression</option>
                    <option value="hexagons">Hexagon Grid - Honeycomb pattern</option>
                    <option value="waves">Wave Flow - Flowing wave design</option>
                    <option value="spotlight">Spotlight Shine - Featured highlights</option>
                    <option value="fireworks">Fireworks Pop - Explosive celebration</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Badge Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="badgeColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="✓">✓ Checkmark</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="💪">💪 Strength</option>
                    <option value="🚀">🚀 Rocket</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const achievements = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="achievement"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const achievementInput = item.querySelector('[data-field="achievement"]');
                const achievement = achievementInput?.value || '';
                if (achievement) achievements.push(achievement);
            });
        }

        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#f0fdf4';
        const cardBg = style.cardBg || '#ffffff';
        const badgeColor = style.badgeColor || '#10b981';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'Amazing Accomplishments';
        const icon = style.icon || '✓';

        const cardSizes = {
            compact: 'p-4 text-sm',
            medium: 'p-5 text-base',
            large: 'p-6 text-lg'
        };
        const padding = cardSizes[style.cardSize] || cardSizes.medium;

        const shadows = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };
        const shadowClass = shadows[style.shadow] || shadows.md;

        // Grid Cards Layout
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${achievements.length > 0 ? achievements.map((achievement) => `
                                <div class="${padding} rounded-xl ${shadowClass} flex items-start gap-4" style="background: ${cardBg}">
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background: ${badgeColor}; color: white">
                                        ${icon}
                                    </div>
                                    <p class="flex-1 pt-1">${achievement}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Style Layout
        if (layout === 'badges') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${achievements.length > 0 ? achievements.map((achievement) => `
                                <div class="${padding} rounded-full ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${badgeColor}">
                                    <div class="flex items-center gap-2">
                                        <div class="text-lg" style="color: ${badgeColor}">${icon}</div>
                                        <span class="text-sm">${achievement}</span>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
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
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-4">
                            ${achievements.length > 0 ? achievements.map((achievement) => `
                                <div class="${padding} rounded-lg ${shadowClass} border-l-4 flex items-center gap-4" style="background: ${cardBg}; border-color: ${badgeColor}">
                                    <div class="text-2xl" style="color: ${badgeColor}">${icon}</div>
                                    <p class="flex-1">${achievement}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Timeline Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${badgeColor}"></div>
                            <div class="space-y-6">
                                ${achievements.length > 0 ? achievements.map((achievement) => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold" style="background: ${badgeColor}; color: white">
                                            ${icon}
                                        </div>
                                        <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                            <p>${achievement}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                            </div>
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
                        <h3 class="text-2xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-3">
                            ${achievements.length > 0 ? achievements.map((achievement) => `
                                <div class="flex items-start gap-3 pb-3 border-b" style="border-color: ${badgeColor}22">
                                    <div class="text-lg" style="color: ${badgeColor}">${icon}</div>
                                    <p class="flex-1 text-sm">${achievement}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Celebration Style Layout
        if (layout === 'celebration') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${achievements.length > 0 ? achievements.map((achievement, index) => `
                                <div class="${padding} rounded-2xl ${shadowClass} text-center" style="background: ${cardBg}; transform: rotate(${[-1, 1, -2, 2][index % 4]}deg)">
                                    <div class="text-4xl mb-3" style="color: ${badgeColor}">${icon}</div>
                                    <p class="font-medium">${achievement}</p>
                                    <div class="mt-3 text-2xl">🎉</div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Star Burst Layout
        if (layout === 'stars') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-6">
                            ${achievements.length > 0 ? achievements.map((achievement) => `
                                <div class="relative" style="width: 160px; height: 160px">
                                    <div class="absolute inset-0 flex items-center justify-center" style="clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)">
                                        <div class="w-full h-full ${shadowClass}" style="background: linear-gradient(135deg, ${badgeColor}, ${badgeColor}dd)"></div>
                                    </div>
                                    <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                        <div class="text-3xl mb-2 text-white">${icon}</div>
                                        <p class="text-xs font-bold text-white">${achievement}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Success Ladder Layout
        if (layout === 'ladder') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative space-y-4">
                            <div class="absolute left-12 top-0 bottom-0 w-2 rounded-full" style="background: ${badgeColor}22"></div>
                            <div class="absolute right-12 top-0 bottom-0 w-2 rounded-full" style="background: ${badgeColor}22"></div>
                            ${achievements.length > 0 ? achievements.map((achievement, index) => `
                                <div class="relative ${padding} mx-8 rounded-xl ${shadowClass}" style="background: ${cardBg}; border: 3px solid ${badgeColor}">
                                    <div class="flex items-center gap-4">
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold" style="background: ${badgeColor}; color: white">
                                            ${icon}
                                        </div>
                                        <p class="flex-1 font-medium">${achievement}</p>
                                    </div>
                                    <div class="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-1 rounded-full" style="background: ${badgeColor}"></div>
                                    <div class="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-1 rounded-full" style="background: ${badgeColor}"></div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Hexagon Grid Layout
        if (layout === 'hexagons') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${achievements.length > 0 ? achievements.map((achievement) => `
                                <div class="relative" style="width: 140px; height: 160px">
                                    <div class="absolute inset-0 flex items-center justify-center" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)">
                                        <div class="w-full h-full ${shadowClass}" style="background: linear-gradient(135deg, ${badgeColor}, ${badgeColor}cc); border: 3px solid ${cardBg}"></div>
                                    </div>
                                    <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                        <div class="text-2xl mb-2 text-white">${icon}</div>
                                        <p class="text-xs font-semibold text-white">${achievement}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Wave Flow Layout
        if (layout === 'waves') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-6">
                            ${achievements.length > 0 ? achievements.map((achievement, index) => {
                                const positions = ['ml-0', 'ml-16', 'ml-32', 'ml-16', 'ml-0'];
                                const position = positions[index % positions.length];
                                return `
                                    <div class="${position} transition-all">
                                        <div class="${padding} rounded-full ${shadowClass}" style="background: linear-gradient(90deg, ${badgeColor}, ${badgeColor}dd); max-width: 85%">
                                            <div class="flex items-center gap-4">
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${shadowClass}" style="background: white; color: ${badgeColor}">
                                                    ${icon}
                                                </div>
                                                <p class="flex-1 font-semibold text-white">${achievement}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Spotlight Shine Layout
        if (layout === 'spotlight') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid gap-6">
                            ${achievements.length > 0 ? achievements.map((achievement, index) => {
                                const isFeatured = index % 3 === 0;
                                if (isFeatured) {
                                    return `
                                        <div class="p-10 rounded-3xl ${shadowClass} text-center" style="background: linear-gradient(135deg, ${badgeColor}, ${badgeColor}dd); position: relative; overflow: hidden">
                                            <div class="absolute inset-0 opacity-20" style="background: radial-gradient(circle at 50% 50%, white 0%, transparent 70%)"></div>
                                            <div class="relative z-10">
                                                <div class="text-6xl mb-4 text-white">${icon}</div>
                                                <p class="text-xl font-bold text-white">${achievement}</p>
                                            </div>
                                        </div>
                                    `;
                                } else {
                                    return `
                                        <div class="${padding} rounded-xl ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${badgeColor}44">
                                            <div class="flex items-center gap-4">
                                                <div class="text-2xl" style="color: ${badgeColor}">${icon}</div>
                                                <p class="flex-1">${achievement}</p>
                                            </div>
                                        </div>
                                    `;
                                }
                            }).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Fireworks Pop Layout
        if (layout === 'fireworks') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-6">
                            ${achievements.length > 0 ? achievements.map((achievement, index) => {
                                const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
                                const color = colors[index % colors.length];
                                const rotations = [-8, 5, -3, 7, -5, 4];
                                const rotation = rotations[index % rotations.length];
                                return `
                                    <div style="transform: rotate(${rotation}deg)">
                                        <div class="${padding} rounded-2xl ${shadowClass}" style="background: ${cardBg}; border: 4px dashed ${color}; box-shadow: 0 0 20px ${color}44; min-width: 200px; max-width: 250px">
                                            <div class="text-center">
                                                <div class="text-5xl mb-3" style="color: ${color}">${icon}</div>
                                                <p class="font-bold text-sm">${achievement}</p>
                                                <div class="mt-2 flex justify-center gap-1">
                                                    <div class="w-2 h-2 rounded-full" style="background: ${color}"></div>
                                                    <div class="w-2 h-2 rounded-full" style="background: ${color}"></div>
                                                    <div class="w-2 h-2 rounded-full" style="background: ${color}"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add achievements in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${achievements.length > 0 ? achievements.map((achievement) => `
                            <div class="${padding} rounded-xl ${shadowClass} flex items-start gap-4" style="background: ${cardBg}">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background: ${badgeColor}; color: white">
                                    ${icon}
                                </div>
                                <p class="flex-1 pt-1">${achievement}</p>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 col-span-2">Add achievements in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
