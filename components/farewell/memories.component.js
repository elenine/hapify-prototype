// Memories Together Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
                name: '💭 Memories Together',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Memories Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shared Memories (one per line)</label>
                            <textarea placeholder="Office pranks and inside jokes&#10;Late-night project sessions&#10;Team lunches and celebrations&#10;Memorable conference trips" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="memories" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Cards - Individual Boxes</option>
                                <option value="timeline">Timeline - Chronological</option>
                                <option value="bubbles">Bubbles - Chat Style</option>
                                <option value="list">List - Simple Clean</option>
                                <option value="grid">Grid - Compact</option>
                                <option value="polaroid">Polaroid - Photo Style</option>
                                <option value="scrapbook">Scrapbook - Angled Cards</option>
                                <option value="mosaic">Mosaic - Colorful Tiles</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="icon" onchange="updatePreview()">
                                <option value="💭">💭 Thought Bubble</option>
                                <option value="✨">✨ Sparkles</option>
                                <option value="💫">💫 Dizzy</option>
                                <option value="🌟">🌟 Star</option>
                                <option value="💝">💝 Heart</option>
                                <option value="📌">📌 Pin</option>
                                <option value="🎯">🎯 Target</option>
                                <option value="💡">💡 Idea</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="none">None</option>
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="textSize" onchange="updatePreview()">
                                <option value="small">Small</option>
                                <option value="normal">Normal</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'cards';
                    const bg = style.bg || '#ffffff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const icon = style.icon || '💭';

                    const memories = data.memories ? data.memories.split('\n').filter(m => m.trim()) : [];

                    if (memories.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <p class="text-center text-gray-500">Add shared memories</p>
                            </div>
                        `;
                    }

                    // Cards Layout - Individual Boxes
                    if (layout === 'cards') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto space-y-4">
                                    ${memories.map(memory => `
                                        <div class="p-5 rounded-2xl shadow-md" style="background: ${accentColor}10; border-left: 4px solid ${accentColor}">
                                            <div class="flex items-start gap-3">
                                                <div class="text-2xl">${icon}</div>
                                                <p class="text-gray-700 leading-relaxed flex-1">${memory}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Timeline Layout - Chronological
                    if (layout === 'timeline') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto relative">
                                    <div class="absolute left-6 top-0 bottom-0 w-0.5" style="background: ${accentColor}30"></div>
                                    <div class="space-y-6">
                                        ${memories.map((memory, idx) => `
                                            <div class="relative pl-12">
                                                <div class="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg" style="background: ${accentColor}">
                                                    ${icon}
                                                </div>
                                                <div class="bg-white p-4 rounded-xl shadow-md">
                                                    <p class="text-gray-700 leading-relaxed">${memory}</p>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Bubbles Layout - Chat Style
                    if (layout === 'bubbles') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto space-y-3">
                                    ${memories.map((memory, idx) => `
                                        <div class="flex ${idx % 2 === 0 ? '' : 'justify-end'}">
                                            <div class="max-w-[80%] p-4 rounded-2xl ${idx % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'}" style="background: ${idx % 2 === 0 ? accentColor + '20' : accentColor}; color: ${idx % 2 === 0 ? '#1f2937' : '#ffffff'}">
                                                <div class="flex items-center gap-2 mb-1">
                                                    <span class="text-sm">${icon}</span>
                                                </div>
                                                <p class="text-sm leading-relaxed">${memory}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // List Layout - Simple Clean
                    if (layout === 'list') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
                                    <div class="space-y-4 divide-y">
                                        ${memories.map((memory, idx) => `
                                            <div class="flex items-start gap-4 ${idx === 0 ? '' : 'pt-4'}">
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}15">
                                                    ${icon}
                                                </div>
                                                <p class="flex-1 text-gray-700 leading-relaxed pt-2">${memory}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Grid Layout - Compact
                    if (layout === 'grid') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                                    ${memories.map(memory => `
                                        <div class="p-4 rounded-xl shadow-md text-center" style="background: ${accentColor}15">
                                            <div class="text-3xl mb-2">${icon}</div>
                                            <p class="text-sm text-gray-700 leading-relaxed">${memory}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Polaroid Layout - Photo Style
                    if (layout === 'polaroid') {
                        const shadow = style.shadow || 'md';
                        const shadowClass = shadow !== 'none' ? `shadow-${shadow}` : '';

                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                    ${memories.map((memory, idx) => `
                                        <div class="bg-white p-4 ${shadowClass} ${idx % 3 === 0 ? 'rotate-2' : idx % 3 === 1 ? '-rotate-2' : 'rotate-1'} hover:rotate-0 transition-transform duration-300">
                                            <div class="aspect-square flex items-center justify-center mb-3 rounded-sm" style="background: ${accentColor}${10 + (idx % 3) * 10}">
                                                <div class="text-6xl opacity-40">${icon}</div>
                                            </div>
                                            <p class="text-sm text-gray-700 text-center leading-relaxed">${memory}</p>
                                            <div class="mt-2 text-center">
                                                <span class="inline-block w-2 h-2 rounded-full" style="background: ${accentColor}"></span>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Scrapbook Layout - Angled Cards
                    if (layout === 'scrapbook') {
                        const borderRadius = style.borderRadius || 'md';
                        const roundedClass = borderRadius === 'sm' ? 'rounded-lg' :
                                           borderRadius === 'lg' ? 'rounded-2xl' :
                                           borderRadius === 'xl' ? 'rounded-3xl' : 'rounded-xl';
                        const textSize = style.textSize || 'normal';
                        const textClass = textSize === 'small' ? 'text-sm' : textSize === 'large' ? 'text-lg' : 'text-base';

                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-xl mx-auto space-y-6">
                                    ${memories.map((memory, idx) => `
                                        <div class="relative">
                                            <div class="bg-white p-6 ${roundedClass} shadow-xl ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-all duration-300 border-4" style="border-color: ${accentColor}${20 + (idx % 4) * 10}">
                                                <div class="flex items-start gap-4">
                                                    <div class="flex-shrink-0 w-12 h-12 ${roundedClass} flex items-center justify-center text-2xl" style="background: ${accentColor}20">
                                                        ${icon}
                                                    </div>
                                                    <p class="${textClass} text-gray-700 leading-relaxed flex-1">${memory}</p>
                                                </div>
                                            </div>
                                            ${idx % 3 === 0 ? `
                                                <div class="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-lg" style="background: ${accentColor}">
                                                    <span class="text-white text-xs">📌</span>
                                                </div>
                                            ` : idx % 3 === 1 ? `
                                                <div class="absolute -top-2 -left-2 w-10 h-16 flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);">
                                                    <span class="text-white text-xl -mt-2">🎀</span>
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Mosaic Layout - Colorful Tiles
                    if (layout === 'mosaic') {
                        const colors = [
                            `${accentColor}20`,
                            `${accentColor}30`,
                            `${accentColor}15`,
                            `${accentColor}25`,
                            `${accentColor}35`,
                            `${accentColor}10`
                        ];
                        const borderRadius = style.borderRadius || 'md';
                        const roundedClass = borderRadius === 'sm' ? 'rounded-lg' :
                                           borderRadius === 'lg' ? 'rounded-2xl' :
                                           borderRadius === 'xl' ? 'rounded-3xl' : 'rounded-xl';

                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg}, ${accentColor}05)">
                                <h2 class="text-3xl font-bold text-center mb-10" style="color: ${accentColor}">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-3xl mx-auto">
                                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        ${memories.map((memory, idx) => `
                                            <div class="group ${roundedClass} p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer" style="background: ${colors[idx % colors.length]}">
                                                <div class="text-center mb-3">
                                                    <div class="inline-flex items-center justify-center w-14 h-14 ${roundedClass} mb-2" style="background: ${accentColor}30">
                                                        <span class="text-3xl">${icon}</span>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-gray-800 text-center leading-relaxed group-hover:text-gray-900 transition-colors">${memory}</p>
                                                <div class="mt-3 flex justify-center gap-1">
                                                    ${[1,2,3].map(i => `<div class="w-1.5 h-1.5 rounded-full" style="background: ${accentColor}"></div>`).join('')}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
