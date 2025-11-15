// About Us Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.about = {
                name: 'ℹ️ About Event',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="About This Event" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Event Description</label>
                            <textarea placeholder="Describe what this conference/seminar is about, its goals, and what attendees will learn..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Highlight Points (one per line, optional)</label>
                            <textarea placeholder="Industry-leading speakers&#10;Hands-on workshops&#10;Networking opportunities&#10;Latest industry insights" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered Classic</option>
                                <option value="modern">Modern Card</option>
                                <option value="highlighted">Highlighted Box</option>
                                <option value="split">Split with Icon</option>
                                <option value="gradient">Gradient Background</option>
                                <option value="timeline">Timeline Style</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="featured">Featured Panel</option>
                                <option value="stacked">Stacked Cards</option>
                                <option value="diagonal">Diagonal Split</option>
                                <option value="badges">Badge Grid</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-3xl">Super Rounded</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-sm">Subtle</option>
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                                <option value="shadow-2xl">Dramatic</option>
                                <option value="shadow-none">None</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#ffffff';
                    const textColor = style.textColor || '#1f2937';
                    const accentColor = style.accent || '#14b8a6';
                    const radius = style.radius || 'rounded-lg';
                    const shadow = style.shadow || 'shadow-md';
                    const title = data.title || 'About This Event';
                    const description = data.description || 'Join us for an incredible conference experience...';
                    const highlightsText = data.highlights || '';
                    const highlights = highlightsText ? highlightsText.split('\n').filter(h => h.trim()) : [];

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="py-14 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    <div class="max-w-md mx-auto text-center">
                                        <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor};">${title}</h2>
                                        <p class="text-gray-700 leading-relaxed text-base mb-6">${description}</p>
                                        ${highlights.length > 0 ? `
                                            <div class="space-y-3 max-w-xs mx-auto">
                                                ${highlights.map(h => `
                                                    <div class="flex items-center gap-3 justify-center">
                                                        <div class="w-2 h-2 ${radius === 'rounded-none' ? '' : 'rounded-full'}" style="background: ${accentColor};"></div>
                                                        <span class="text-sm font-medium text-gray-700">${h}</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white ${radius} ${shadow} overflow-hidden border-l-4 p-8" style="border-left-color: ${accentColor};">
                                            <div class="flex items-start gap-4 mb-6">
                                                <div class="flex-shrink-0 w-14 h-14 ${radius === 'rounded-none' ? '' : 'rounded-xl'} flex items-center justify-center text-3xl" style="background: ${accentColor}20;">
                                                    ℹ️
                                                </div>
                                                <div class="flex-1">
                                                    <h2 class="text-2xl font-bold" style="color: ${accentColor};">${title}</h2>
                                                </div>
                                            </div>
                                            <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                            ${highlights.length > 0 ? `
                                                <div class="grid gap-2">
                                                    ${highlights.map(h => `
                                                        <div class="flex items-start gap-2 p-3 ${radius} border" style="border-color: ${accentColor}30; background: ${accentColor}05;">
                                                            <span class="text-lg flex-shrink-0">✓</span>
                                                            <span class="text-sm font-medium text-gray-700">${h}</span>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'highlighted':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <div class="${radius} ${shadow} overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}05);">
                                            <div class="p-8">
                                                <div class="text-center mb-6">
                                                    <div class="inline-flex items-center justify-center w-16 h-16 ${radius === 'rounded-none' ? '' : 'rounded-full'} mb-4 ${shadow}" style="background: ${accentColor}; color: white;">
                                                        <span class="text-3xl">ℹ️</span>
                                                    </div>
                                                    <h2 class="text-3xl font-bold" style="color: ${accentColor};">${title}</h2>
                                                </div>
                                                <p class="text-gray-700 leading-relaxed text-center mb-6">${description}</p>
                                                ${highlights.length > 0 ? `
                                                    <div class="grid gap-3">
                                                        ${highlights.map((h, i) => `
                                                            <div class="bg-white p-4 ${radius} ${shadow} flex items-center gap-3">
                                                                <div class="flex-shrink-0 w-8 h-8 ${radius === 'rounded-none' ? '' : 'rounded-full'} flex items-center justify-center text-sm font-bold" style="background: ${accentColor}; color: white;">
                                                                    ${i + 1}
                                                                </div>
                                                                <span class="text-sm font-medium text-gray-700">${h}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white ${radius} ${shadow} overflow-hidden">
                                            <div class="flex flex-col">
                                                <div class="p-6 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                    <span class="text-6xl">ℹ️</span>
                                                </div>
                                                <div class="p-8">
                                                    <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor};">${title}</h2>
                                                    <p class="text-gray-700 leading-relaxed mb-5">${description}</p>
                                                    ${highlights.length > 0 ? `
                                                        <div class="space-y-2">
                                                            ${highlights.map(h => `
                                                                <div class="flex items-center gap-3">
                                                                    <div class="w-1.5 h-1.5 ${radius === 'rounded-none' ? '' : 'rounded-full'} flex-shrink-0" style="background: ${accentColor};"></div>
                                                                    <span class="text-sm text-gray-600">${h}</span>
                                                                </div>
                                                            `).join('')}
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="relative py-14 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}20 0%, transparent 100%);">
                                    <div class="max-w-md mx-auto relative">
                                        <div class="absolute top-0 right-0 text-9xl opacity-5 -mt-8 -mr-8">ℹ️</div>
                                        <div class="relative">
                                            <h2 class="text-3xl font-bold mb-6 text-center" style="color: ${accentColor};">${title}</h2>
                                            <div class="bg-white ${radius} ${shadow} p-8 backdrop-blur-sm">
                                                <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                                ${highlights.length > 0 ? `
                                                    <div class="grid grid-cols-2 gap-3">
                                                        ${highlights.map(h => `
                                                            <div class="p-3 ${radius} text-center text-xs font-semibold" style="background: ${accentColor}15; color: ${accentColor};">
                                                                ${h}
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'timeline':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-3xl font-bold mb-8 text-center" style="color: ${accentColor};">${title}</h2>
                                        <div class="bg-white ${radius} ${shadow} p-8">
                                            <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                            ${highlights.length > 0 ? `
                                                <div class="relative pl-8">
                                                    <div class="absolute left-2 top-0 bottom-0 w-0.5" style="background: ${accentColor}30;"></div>
                                                    <div class="space-y-4">
                                                        ${highlights.map(h => `
                                                            <div class="relative">
                                                                <div class="absolute left-[-2rem] top-1 w-4 h-4 ${radius === 'rounded-none' ? '' : 'rounded-full'} border-2 border-white ${shadow}" style="background: ${accentColor};"></div>
                                                                <div class="text-sm font-medium text-gray-700">${h}</div>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-16 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="text-5xl mb-5">ℹ️</div>
                                        <h2 class="text-3xl font-light mb-4" style="color: ${accentColor};">${title}</h2>
                                        <div class="w-16 h-0.5 mx-auto mb-6" style="background: ${accentColor}; opacity: 0.4;"></div>
                                        <p class="text-gray-600 leading-relaxed mb-8">${description}</p>
                                        ${highlights.length > 0 ? `
                                            <div class="flex flex-wrap justify-center gap-2">
                                                ${highlights.map(h => `
                                                    <div class="px-4 py-2 ${radius} border text-xs font-medium" style="border-color: ${accentColor}; color: ${accentColor};">
                                                        ${h}
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <div class="relative ${radius} ${shadow} overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); color: white;">
                                            <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-6 -mr-6">ℹ️</div>
                                            <div class="relative p-8">
                                                <div class="inline-block px-3 py-1 bg-white bg-opacity-20 ${radius === 'rounded-none' ? '' : 'rounded-full'} text-xs font-bold mb-4 uppercase tracking-wide">
                                                    Event Details
                                                </div>
                                                <h2 class="text-3xl font-bold mb-5">${title}</h2>
                                                <p class="text-lg leading-relaxed opacity-95 mb-6">${description}</p>
                                                ${highlights.length > 0 ? `
                                                    <div class="space-y-3">
                                                        ${highlights.map(h => `
                                                            <div class="flex items-center gap-3 p-3 bg-white bg-opacity-15 backdrop-blur-sm ${radius}">
                                                                <span class="text-lg">✓</span>
                                                                <span class="text-sm font-medium">${h}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'stacked':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-8" style="color: ${accentColor};">${title}</h2>
                                        <div class="space-y-4">
                                            <div class="bg-white ${radius} ${shadow} p-6 transform -rotate-1">
                                                <p class="text-gray-700 leading-relaxed">${description}</p>
                                            </div>
                                            ${highlights.length > 0 ? `
                                                <div class="bg-white ${radius} ${shadow} p-6 transform rotate-1">
                                                    <h3 class="text-sm font-bold uppercase tracking-wide mb-4" style="color: ${accentColor};">Key Highlights</h3>
                                                    <div class="grid grid-cols-2 gap-3">
                                                        ${highlights.map((h, i) => `
                                                            <div class="flex items-center gap-2 p-2 ${radius === 'rounded-none' ? '' : 'rounded-lg'}" style="background: ${accentColor}${i % 2 === 0 ? '15' : '10'};">
                                                                <span style="color: ${accentColor};">✓</span>
                                                                <span class="text-xs font-medium text-gray-700">${h}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'diagonal':
                            return `
                                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor};">
                                    <div class="absolute top-0 right-0 w-full h-32 transform -skew-y-3" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10);"></div>
                                    <div class="max-w-md mx-auto relative z-10">
                                        <div class="bg-white ${radius} ${shadow} overflow-hidden">
                                            <div class="p-6" style="background: linear-gradient(135deg, ${accentColor}10, transparent);">
                                                <div class="flex items-center gap-4 mb-4">
                                                    <div class="w-16 h-16 ${radius === 'rounded-none' ? '' : 'rounded-xl'} flex items-center justify-center text-3xl ${shadow}" style="background: ${accentColor}; color: white; transform: rotate(-10deg);">
                                                        ℹ️
                                                    </div>
                                                    <h2 class="text-2xl font-bold flex-1" style="color: ${accentColor};">${title}</h2>
                                                </div>
                                                <p class="text-gray-700 leading-relaxed mb-6">${description}</p>
                                                ${highlights.length > 0 ? `
                                                    <div class="space-y-2">
                                                        ${highlights.map((h, i) => `
                                                            <div class="flex items-start gap-3 p-3 ${radius} transform ${i % 2 === 0 ? 'translate-x-0' : 'translate-x-2'} transition" style="background: ${accentColor}${i % 2 === 0 ? '10' : '05'};">
                                                                <span class="flex-shrink-0 w-6 h-6 ${radius === 'rounded-none' ? '' : 'rounded-full'} flex items-center justify-center text-xs font-bold" style="background: ${accentColor}; color: white;">
                                                                    ${i + 1}
                                                                </span>
                                                                <span class="text-sm font-medium text-gray-700 pt-0.5">${h}</span>
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'badges':
                            return `
                                <div class="py-14 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="inline-flex items-center justify-center w-16 h-16 ${radius === 'rounded-none' ? '' : 'rounded-full'} mb-4 ${shadow}" style="background: ${accentColor}; color: white;">
                                            <span class="text-3xl">ℹ️</span>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-4" style="color: ${accentColor};">${title}</h2>
                                        <p class="text-gray-700 leading-relaxed mb-8 max-w-sm mx-auto">${description}</p>
                                        ${highlights.length > 0 ? `
                                            <div class="flex flex-wrap justify-center gap-3">
                                                ${highlights.map(h => `
                                                    <div class="inline-flex items-center gap-2 px-4 py-2 ${radius} ${shadow} bg-white" style="border: 2px solid ${accentColor}20;">
                                                        <div class="w-2 h-2 ${radius === 'rounded-none' ? '' : 'rounded-full'}" style="background: ${accentColor};"></div>
                                                        <span class="text-sm font-semibold text-gray-700">${h}</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    <div class="max-w-md mx-auto text-center">
                                        <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor};">${title}</h2>
                                        <p class="text-gray-700 leading-relaxed">${description}</p>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
