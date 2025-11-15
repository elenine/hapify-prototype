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
                                <option value="journal">Journal - Diary Pages</option>
                                <option value="postcard">Postcard - Travel Style</option>
                                <option value="bulletin">Bulletin - Pin Board</option>
                                <option value="notebook">Notebook - Lined Paper</option>
                                <option value="album">Album - Photo Book</option>
                                <option value="accordion">Accordion - Expandable</option>
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
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto space-y-6">
                                    ${memories.map((memory, idx) => `
                                        <div class="bg-white p-4 shadow-xl ${idx % 2 === 0 ? 'ml-0 mr-8 rotate-[-2deg]' : 'ml-8 mr-0 rotate-[2deg]'} transition hover:rotate-0">
                                            <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 mb-3 flex items-center justify-center text-5xl">
                                                ${icon}
                                            </div>
                                            <p class="text-sm text-gray-700 text-center font-handwriting">${memory}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Scrapbook Layout - Angled Cards
                    if (layout === 'scrapbook') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto space-y-8">
                                    ${memories.map((memory, idx) => {
                                        const rotations = ['rotate-[-3deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[3deg]'];
                                        const rotation = rotations[idx % rotations.length];
                                        return `
                                            <div class="relative ${rotation} transition hover:rotate-0">
                                                <div class="bg-white p-6 shadow-lg" style="border: 8px solid ${accentColor}20">
                                                    <div class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${accentColor}">
                                                        <span class="text-white text-sm">${icon}</span>
                                                    </div>
                                                    <div class="pr-8">
                                                        <p class="text-gray-700 leading-relaxed">${memory}</p>
                                                    </div>
                                                </div>
                                                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6" style="background: repeating-linear-gradient(90deg, transparent, transparent 2px, ${accentColor}40 2px, ${accentColor}40 4px)"></div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Mosaic Layout - Colorful Tiles
                    if (layout === 'mosaic') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
                                    ${memories.map((memory, idx) => {
                                        const opacity = [20, 30, 40, 50][idx % 4];
                                        return `
                                            <div class="p-4 flex flex-col items-center justify-center text-center min-h-[140px] transition hover:scale-105" style="background: ${accentColor}${opacity}">
                                                <div class="text-3xl mb-2">${icon}</div>
                                                <p class="text-xs text-gray-800 leading-snug">${memory}</p>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Journal Layout - Diary Pages
                    if (layout === 'journal') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto space-y-6">
                                    ${memories.map((memory, idx) => `
                                        <div class="bg-white p-6 shadow-lg" style="border-left: 3px solid ${accentColor}; background-image: repeating-linear-gradient(transparent, transparent 24px, #e5e7eb 24px, #e5e7eb 25px)">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm" style="background: ${accentColor}">
                                                    <span class="text-white">${idx + 1}</span>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="text-xs mb-2 opacity-60" style="color: ${accentColor}">Memory ${idx + 1} ${icon}</div>
                                                    <p class="text-gray-700 leading-relaxed text-sm" style="font-family: 'Courier New', monospace">${memory}</p>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Postcard Layout - Travel Style
                    if (layout === 'postcard') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto space-y-6">
                                    ${memories.map((memory, idx) => `
                                        <div class="bg-white shadow-lg overflow-hidden">
                                            <div class="h-2" style="background: repeating-linear-gradient(90deg, #dc2626 0px, #dc2626 10px, #3b82f6 10px, #3b82f6 20px)"></div>
                                            <div class="p-6">
                                                <div class="flex items-start gap-4">
                                                    <div class="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style="background: ${accentColor}20">
                                                        ${icon}
                                                    </div>
                                                    <div class="flex-1">
                                                        <p class="text-gray-700 leading-relaxed text-sm italic">${memory}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-6 pb-4 flex justify-end">
                                                <div class="text-xs opacity-40" style="font-family: 'Courier New', monospace">Memory #${idx + 1}</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    // Bulletin Layout - Pin Board
                    if (layout === 'bulletin') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-2xl mx-auto" style="background: linear-gradient(135deg, #8b7355 0%, #a0826d 100%); padding: 2rem; min-height: 300px">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        ${memories.map((memory, idx) => {
                                            const colors = ['#fef08a', '#bfdbfe', '#fecaca', '#d9f99d', '#e9d5ff', '#fed7aa'];
                                            const color = colors[idx % colors.length];
                                            const rotations = ['rotate-[-2deg]', 'rotate-[3deg]', 'rotate-[-1deg]', 'rotate-[2deg]'];
                                            const rotation = rotations[idx % rotations.length];
                                            return `
                                                <div class="relative ${rotation} transition hover:rotate-0 hover:scale-105">
                                                    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-2xl">📌</div>
                                                    <div class="p-4 shadow-md" style="background: ${color}">
                                                        <div class="flex items-center gap-2 mb-2">
                                                            <span class="text-lg">${icon}</span>
                                                            <span class="text-xs font-bold opacity-60">Memory ${idx + 1}</span>
                                                        </div>
                                                        <p class="text-sm text-gray-800 leading-snug">${memory}</p>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Notebook Layout - Lined Paper
                    if (layout === 'notebook') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto bg-white shadow-2xl" style="border: 1px solid #d1d5db">
                                    <div class="h-12 flex items-center px-6" style="background: linear-gradient(to bottom, #fef3c7 0%, #fde68a 100%)">
                                        <h3 class="font-bold text-gray-700 text-sm">📝 Memory Log</h3>
                                    </div>
                                    <div class="p-6 space-y-6" style="background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px); background-position: 0 8px">
                                        ${memories.map((memory, idx) => `
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: ${accentColor}">
                                                    ${idx + 1}
                                                </div>
                                                <div class="flex-1">
                                                    <p class="text-gray-700 text-sm leading-loose" style="font-family: 'Courier New', monospace">${memory}</p>
                                                </div>
                                                <div class="flex-shrink-0 text-lg">${icon}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Album Layout - Photo Book
                    if (layout === 'album') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto bg-gray-900 p-6 shadow-2xl">
                                    <div class="space-y-6">
                                        ${memories.map((memory, idx) => `
                                            <div class="bg-white p-4">
                                                <div class="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 mb-3 flex items-center justify-center text-5xl">
                                                    ${icon}
                                                </div>
                                                <div class="bg-black p-3">
                                                    <p class="text-white text-xs leading-relaxed" style="font-family: 'Courier New', monospace">${memory}</p>
                                                    <div class="text-right mt-2">
                                                        <span class="text-gray-400 text-xs">Page ${idx + 1}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Accordion Layout - Expandable
                    if (layout === 'accordion') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                                <div class="max-w-md mx-auto shadow-lg rounded-xl overflow-hidden">
                                    ${memories.map((memory, idx) => `
                                        <div class="border-b" style="border-color: ${accentColor}20">
                                            <div class="p-4 flex items-center justify-between" style="background: ${idx % 2 === 0 ? '#ffffff' : accentColor + '05'}">
                                                <div class="flex items-center gap-3 flex-1">
                                                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white" style="background: ${accentColor}">
                                                        ${idx + 1}
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="flex items-center gap-2 mb-1">
                                                            <span class="text-sm">${icon}</span>
                                                            <span class="text-xs font-semibold opacity-60" style="color: ${accentColor}">Memory ${idx + 1}</span>
                                                        </div>
                                                        <p class="text-sm text-gray-700 leading-relaxed">${memory}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
