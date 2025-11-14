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

                    return '';
                }
            };
