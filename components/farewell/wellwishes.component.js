// Well Wishes Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wellwishes = {
                name: '💌 Well Wishes',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Messages & Well Wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Share your favorite memories and wishes for the future..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid - Card Layout</option>
                                <option value="masonry">Masonry - Staggered Cards</option>
                                <option value="wall">Wall - Post-it Style</option>
                                <option value="bubbles">Bubbles - Chat Style</option>
                                <option value="elegant">Elegant - Framed Messages</option>
                                <option value="testimonial">Testimonial - Quote Cards</option>
                                <option value="compact">Compact - Dense Layout</option>
                                <option value="showcase">Showcase - Featured Display</option>
                                <option value="letter">Letter - Envelope Style</option>
                                <option value="guestbook">Guestbook - Signature Book</option>
                                <option value="scrapbook">Scrapbook - Memory Book</option>
                                <option value="timeline">Timeline - Chronological</option>
                                <option value="mosaic">Mosaic - Tile Pattern</option>
                                <option value="scrolls">Scrolls - Paper Rolls</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="none">None</option>
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                                <option value="2xl">Huge</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="icon" onchange="updatePreview()">
                                <option value="💌">💌 Love Letter</option>
                                <option value="✨">✨ Sparkles</option>
                                <option value="💝">💝 Heart Gift</option>
                                <option value="🌟">🌟 Star</option>
                                <option value="💭">💭 Thought</option>
                                <option value="📝">📝 Note</option>
                                <option value="💬">💬 Speech</option>
                                <option value="🎈">🎈 Balloon</option>
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
                    const layout = style.layout || 'grid';
                    const bg = style.bg || '#ffffff';
                    const cardColor = style.cardColor || '#ffffff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const shadow = style.shadow || 'md';
                    const icon = style.icon || '💌';

                    const sampleMessages = [
                        { message: "Will miss our coffee chats!", author: "Team Member" },
                        { message: "Good luck in your next adventure!", author: "Colleague" },
                        { message: "Thanks for all the memories!", author: "Work Friend" },
                        { message: "You'll be greatly missed!", author: "Manager" }
                    ];

                    // Grid Layout - Card Layout
                    if (layout === 'grid') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto text-center">
                                    <div class="text-5xl mb-4">${icon}</div>
                                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Well Wishes'}</h2>
                                    <p class="text-gray-600 mb-8">${data.description || 'Share your messages and well wishes'}</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        ${sampleMessages.map(msg => `
                                            <div class="p-5 rounded-xl shadow-${shadow} text-left" style="background: ${cardColor}; border-left: 4px solid ${accentColor}">
                                                <p class="text-gray-700 italic mb-3">"${msg.message}"</p>
                                                <p class="text-sm font-semibold" style="color: ${accentColor}">- ${msg.author}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Masonry Layout - Staggered Cards
                    if (layout === 'masonry') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-8">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="columns-1 md:columns-2 gap-4 space-y-4">
                                        ${sampleMessages.map((msg, idx) => `
                                            <div class="break-inside-avoid p-6 rounded-2xl shadow-${shadow}" style="background: ${idx % 2 === 0 ? accentColor + '15' : cardColor}">
                                                <div class="flex items-start gap-3 mb-3">
                                                    <span class="text-2xl">${icon}</span>
                                                    <p class="text-gray-700 leading-relaxed flex-1">"${msg.message}"</p>
                                                </div>
                                                <div class="text-right">
                                                    <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background: ${accentColor}; color: white">${msg.author}</span>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Wall Layout - Post-it Style
                    if (layout === 'wall') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-10">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-6">
                                        ${sampleMessages.map((msg, idx) => {
                                            const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];
                                            const colors = [`${accentColor}30`, `${accentColor}20`, `${accentColor}25`, `${accentColor}35`];
                                            return `
                                                <div class="p-6 ${rotations[idx % 4]} hover:rotate-0 transition-transform duration-300 shadow-${shadow}" style="background: ${colors[idx % 4]}">
                                                    <div class="text-center mb-3">
                                                        <div class="inline-block w-8 h-1 rounded" style="background: ${accentColor}"></div>
                                                    </div>
                                                    <p class="text-gray-800 text-sm mb-4 leading-relaxed">"${msg.message}"</p>
                                                    <div class="text-right text-xs font-semibold opacity-70">- ${msg.author}</div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Bubbles Layout - Chat Style
                    if (layout === 'bubbles') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <div class="text-center mb-8">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600 mb-6">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-4">
                                        ${sampleMessages.map((msg, idx) => `
                                            <div class="flex ${idx % 2 === 0 ? '' : 'justify-end'}">
                                                <div class="max-w-[80%]">
                                                    <div class="p-4 rounded-2xl ${idx % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'} shadow-${shadow}" style="background: ${idx % 2 === 0 ? accentColor + '20' : accentColor}; color: ${idx % 2 === 0 ? '#1f2937' : '#ffffff'}">
                                                        <p class="text-sm leading-relaxed mb-2">"${msg.message}"</p>
                                                        <div class="text-xs opacity-80 ${idx % 2 === 0 ? 'text-left' : 'text-right'}">- ${msg.author}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Elegant Layout - Framed Messages
                    if (layout === 'elegant') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-10 border-b-2 pb-6" style="border-color: ${accentColor}30">
                                        <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}15">
                                            <div class="text-4xl">${icon}</div>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-6">
                                        ${sampleMessages.map(msg => `
                                            <div class="border-2 rounded-2xl p-6 shadow-${shadow}" style="border-color: ${accentColor}; background: ${cardColor}">
                                                <div class="flex items-start gap-4">
                                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
                                                        ${icon}
                                                    </div>
                                                    <div class="flex-1">
                                                        <p class="text-gray-700 italic text-lg mb-3 leading-relaxed">"${msg.message}"</p>
                                                        <div class="flex items-center gap-2">
                                                            <div class="h-px flex-1" style="background: ${accentColor}30"></div>
                                                            <span class="text-sm font-semibold" style="color: ${accentColor}">${msg.author}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Testimonial Layout - Quote Cards
                    if (layout === 'testimonial') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-10">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="grid gap-6">
                                        ${sampleMessages.map(msg => `
                                            <div class="p-8 rounded-3xl shadow-${shadow}" style="background: ${cardColor}; border-top: 4px solid ${accentColor}">
                                                <div class="text-5xl mb-4 opacity-20" style="color: ${accentColor}">"</div>
                                                <p class="text-gray-700 text-lg italic mb-6 leading-relaxed">${msg.message}</p>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}">
                                                        <span class="text-white">${icon}</span>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold" style="color: ${accentColor}">${msg.author}</div>
                                                        <div class="text-sm text-gray-500">Well Wisher</div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Compact Layout - Dense Layout
                    if (layout === 'compact') {
                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <div class="text-center mb-6">
                                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-sm text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-3">
                                        ${sampleMessages.map(msg => `
                                            <div class="p-4 rounded-lg shadow-${shadow}" style="background: ${cardColor}; border-left: 3px solid ${accentColor}">
                                                <div class="flex items-start gap-3">
                                                    <span class="text-lg flex-shrink-0">${icon}</span>
                                                    <div class="flex-1">
                                                        <p class="text-sm text-gray-700 mb-1">"${msg.message}"</p>
                                                        <p class="text-xs font-semibold" style="color: ${accentColor}">- ${msg.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Showcase Layout - Featured Display
                    if (layout === 'showcase') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-3xl mx-auto">
                                    <div class="text-center mb-10">
                                        <div class="inline-block p-6 rounded-full shadow-xl mb-4" style="background: ${accentColor}">
                                            <div class="text-5xl text-white">${icon}</div>
                                        </div>
                                        <h2 class="text-4xl font-bold mb-4">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600 text-lg">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-8">
                                        ${sampleMessages.map((msg, idx) => `
                                            <div class="relative p-10 rounded-3xl shadow-2xl overflow-hidden" style="background: ${idx % 2 === 0 ? 'linear-gradient(135deg, ' + accentColor + '10, ' + accentColor + '05)' : cardColor}">
                                                <div class="absolute top-4 right-4 text-6xl opacity-5" style="color: ${accentColor}">${icon}</div>
                                                <div class="relative z-10">
                                                    <p class="text-2xl text-gray-800 italic mb-6 leading-relaxed">"${msg.message}"</p>
                                                    <div class="flex items-center gap-3">
                                                        <div class="h-1 w-16 rounded" style="background: ${accentColor}"></div>
                                                        <span class="text-lg font-bold" style="color: ${accentColor}">${msg.author}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Letter Layout - Envelope Style
                    if (layout === 'letter') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-8">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-6">
                                        ${sampleMessages.map(msg => `
                                            <div class="bg-white rounded-lg shadow-${shadow} overflow-hidden">
                                                <div class="relative h-24" style="background: linear-gradient(to bottom right, ${accentColor}80 0%, ${accentColor}80 50%, transparent 50%, transparent 100%), linear-gradient(to bottom left, ${accentColor}80 0%, ${accentColor}80 50%, transparent 50%, transparent 100%)">
                                                    <div class="absolute inset-0 flex items-center justify-center">
                                                        <div class="text-4xl text-white">${icon}</div>
                                                    </div>
                                                </div>
                                                <div class="p-6" style="background: ${cardColor}">
                                                    <p class="text-gray-700 italic mb-4 leading-relaxed">"${msg.message}"</p>
                                                    <div class="text-right">
                                                        <div class="inline-block px-4 py-2 rounded-lg" style="background: ${accentColor}15">
                                                            <span class="font-semibold text-sm" style="color: ${accentColor}">With love, ${msg.author}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Guestbook Layout - Signature Book
                    if (layout === 'guestbook') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="bg-white shadow-2xl rounded-none p-10" style="border: 1px solid #d1d5db">
                                        <div class="text-center border-b-2 pb-6 mb-8" style="border-color: ${accentColor}">
                                            <div class="text-4xl mb-3">${icon}</div>
                                            <h2 class="text-3xl font-bold mb-2" style="font-family: serif">${data.title || 'Guest Book'}</h2>
                                            <p class="text-gray-600 italic" style="font-family: serif">${data.description || 'Sign your name and leave your wishes'}</p>
                                        </div>
                                        <div class="space-y-6">
                                            ${sampleMessages.map((msg, idx) => `
                                                <div class="border-b pb-4" style="border-color: ${accentColor}20">
                                                    <div class="flex items-start gap-4">
                                                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: ${accentColor}">
                                                            ${idx + 1}
                                                        </div>
                                                        <div class="flex-1">
                                                            <p class="text-gray-700 mb-2 leading-relaxed" style="font-family: 'Courier New', monospace">"${msg.message}"</p>
                                                            <div class="flex items-center gap-2">
                                                                <div class="h-px flex-1" style="background: ${accentColor}30"></div>
                                                                <span class="font-semibold text-sm" style="font-family: 'Courier New', monospace; color: ${accentColor}">${msg.author}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Scrapbook Layout - Memory Book
                    if (layout === 'scrapbook') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-10">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Memory Book'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-8">
                                        ${sampleMessages.map((msg, idx) => {
                                            const rotations = ['rotate-[-2deg]', 'rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[2deg]'];
                                            const rotation = rotations[idx % rotations.length];
                                            return `
                                                <div class="relative ${rotation} transition hover:rotate-0">
                                                    <div class="bg-white p-6 shadow-xl" style="border: 8px solid ${accentColor}15">
                                                        <div class="absolute top-2 right-2 text-2xl">📌</div>
                                                        <div class="mb-4">
                                                            <p class="text-gray-700 leading-relaxed">"${msg.message}"</p>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                            <span class="text-2xl">${icon}</span>
                                                            <span class="font-semibold" style="color: ${accentColor}">${msg.author}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Timeline Layout - Chronological
                    if (layout === 'timeline') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-10">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="relative">
                                        <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}30"></div>
                                        <div class="space-y-8">
                                            ${sampleMessages.map((msg, idx) => `
                                                <div class="relative pl-16">
                                                    <div class="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg" style="background: ${accentColor}">
                                                        <span class="text-white">${icon}</span>
                                                    </div>
                                                    <div class="bg-white p-6 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                                        <p class="text-gray-700 italic mb-3 leading-relaxed">"${msg.message}"</p>
                                                        <div class="flex items-center justify-between">
                                                            <span class="font-semibold" style="color: ${accentColor}">- ${msg.author}</span>
                                                            <span class="text-xs text-gray-400">Message ${idx + 1}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Mosaic Layout - Tile Pattern
                    if (layout === 'mosaic') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-8">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Well Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2">
                                        ${sampleMessages.map((msg, idx) => {
                                            const opacity = [15, 25, 20, 30][idx % 4];
                                            return `
                                                <div class="p-6 flex flex-col items-center justify-center text-center min-h-[160px] transition hover:scale-105" style="background: ${accentColor}${opacity}">
                                                    <div class="text-3xl mb-3">${icon}</div>
                                                    <p class="text-sm text-gray-800 mb-2 leading-snug">"${msg.message}"</p>
                                                    <div class="w-12 h-0.5 mb-2" style="background: ${accentColor}"></div>
                                                    <p class="text-xs font-bold" style="color: ${accentColor}">${msg.author}</p>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Scrolls Layout - Paper Rolls
                    if (layout === 'scrolls') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-10">
                                        <div class="text-5xl mb-4">${icon}</div>
                                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Ancient Wishes'}</h2>
                                        <p class="text-gray-600">${data.description || 'Share your messages and well wishes'}</p>
                                    </div>
                                    <div class="space-y-6">
                                        ${sampleMessages.map(msg => `
                                            <div class="relative">
                                                <div class="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 p-8 shadow-lg" style="border-top: 3px solid ${accentColor}; border-bottom: 3px solid ${accentColor}">
                                                    <div class="absolute top-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, ${accentColor}30 0px, ${accentColor}30 10px, transparent 10px, transparent 20px)"></div>
                                                    <div class="absolute bottom-0 left-0 w-full h-2" style="background: repeating-linear-gradient(90deg, ${accentColor}30 0px, ${accentColor}30 10px, transparent 10px, transparent 20px)"></div>
                                                    <div class="text-center">
                                                        <div class="text-3xl mb-4">${icon}</div>
                                                        <p class="text-gray-800 italic text-lg mb-4 leading-relaxed" style="font-family: serif">"${msg.message}"</p>
                                                        <div class="inline-block px-4 py-2 rounded" style="background: ${accentColor}20">
                                                            <span class="font-bold" style="font-family: serif; color: ${accentColor}">~ ${msg.author} ~</span>
                                                        </div>
                                                    </div>
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
