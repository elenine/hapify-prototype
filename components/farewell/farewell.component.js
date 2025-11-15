// Reason for Farewell Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.farewell = {
                name: '✈️ Reason for Farewell',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="New Adventures Await" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="reason" oninput="updatePreview()">
                                <option value="">Select reason</option>
                                <option value="new-job">New Job Opportunity</option>
                                <option value="moving">Moving to New City</option>
                                <option value="career-change">Career Change</option>
                                <option value="retirement">Retirement</option>
                                <option value="education">Pursuing Education</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Details</label>
                            <textarea placeholder="Share details about their next chapter..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="simple">Simple - Centered Text</option>
                                <option value="card">Card - Highlighted Box</option>
                                <option value="banner">Banner - Full Width</option>
                                <option value="split">Split - Icon & Text</option>
                                <option value="journey">Journey - Path Style</option>
                                <option value="modern">Modern - Gradient Card</option>
                                <option value="minimal">Minimal - Clean Layout</option>
                                <option value="elegant">Elegant - Bordered Frame</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="align" onchange="updatePreview()">
                                <option value="center">Center</option>
                                <option value="left">Left</option>
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
                                <option value="2xl">Huge</option>
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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="iconSize" onchange="updatePreview()">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="xlarge">Extra Large</option>
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
                    const layout = style.layout || 'simple';
                    const bg = style.bg || '#faf5ff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const align = style.align || 'center';
                    const shadow = style.shadow || 'md';

                    const alignClass = align === 'center' ? 'text-center' : 'text-left';

                    const reasonLabels = {
                        'new-job': { icon: '🎯', text: 'New Job Opportunity' },
                        'moving': { icon: '🏠', text: 'Moving to New City' },
                        'career-change': { icon: '🔄', text: 'Career Change' },
                        'retirement': { icon: '🌴', text: 'Retirement' },
                        'education': { icon: '🎓', text: 'Pursuing Education' },
                        'other': { icon: '✨', text: 'New Adventure' }
                    };

                    const reasonInfo = data.reason ? reasonLabels[data.reason] : null;

                    // Simple Layout - Centered Text
                    if (layout === 'simple') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto ${alignClass}">
                                    <h2 class="text-3xl font-bold mb-6">${data.title || 'New Adventures Await'}</h2>
                                    ${reasonInfo ? `
                                        <div class="mb-6">
                                            <div class="text-4xl mb-3">${reasonInfo.icon}</div>
                                            <div class="text-xl font-semibold" style="color: ${accentColor}">${reasonInfo.text}</div>
                                        </div>
                                    ` : ''}
                                    ${data.details ? `<p class="text-gray-700 leading-relaxed text-lg">${data.details}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Card Layout - Highlighted Box
                    if (layout === 'card') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold ${alignClass} mb-6">${data.title || 'New Adventures Await'}</h2>
                                    <div class="p-8 rounded-2xl shadow-${shadow}" style="background: ${accentColor}15; border-left: 4px solid ${accentColor}">
                                        ${reasonInfo ? `
                                            <div class="flex items-center gap-4 mb-6">
                                                <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accentColor}; color: white">
                                                    ${reasonInfo.icon}
                                                </div>
                                                <div>
                                                    <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Moving Forward</div>
                                                    <div class="text-xl font-bold" style="color: ${accentColor}">${reasonInfo.text}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.details ? `<p class="text-gray-700 leading-relaxed ${alignClass}">${data.details}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Banner Layout - Full Width
                    if (layout === 'banner') {
                        return `
                            <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90)">
                                <div class="max-w-2xl mx-auto text-center text-white">
                                    <h2 class="text-4xl font-bold mb-6">${data.title || 'New Adventures Await'}</h2>
                                    ${reasonInfo ? `
                                        <div class="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                                            <span class="text-3xl">${reasonInfo.icon}</span>
                                            <span class="text-2xl font-semibold">${reasonInfo.text}</span>
                                        </div>
                                    ` : ''}
                                    ${data.details ? `<p class="text-white/90 text-xl leading-relaxed max-w-xl mx-auto">${data.details}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Split Layout - Icon & Text
                    if (layout === 'split') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="bg-white rounded-3xl shadow-${shadow} overflow-hidden">
                                        <div class="grid md:grid-cols-2">
                                            <div class="p-8 flex items-center justify-center" style="background: ${accentColor}15">
                                                ${reasonInfo ? `
                                                    <div class="text-center">
                                                        <div class="text-8xl mb-4">${reasonInfo.icon}</div>
                                                        <div class="text-xl font-bold" style="color: ${accentColor}">${reasonInfo.text}</div>
                                                    </div>
                                                ` : '<div class="text-8xl">✈️</div>'}
                                            </div>
                                            <div class="p-8 flex items-center">
                                                <div>
                                                    <h2 class="text-2xl font-bold mb-4">${data.title || 'New Adventures Await'}</h2>
                                                    ${data.details ? `<p class="text-gray-700 leading-relaxed">${data.details}</p>` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Journey Layout - Path Style
                    if (layout === 'journey') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-3xl font-bold text-center mb-10">${data.title || 'New Adventures Await'}</h2>
                                    <div class="relative">
                                        <div class="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5" style="background: linear-gradient(to bottom, ${accentColor}30, ${accentColor})"></div>

                                        ${reasonInfo ? `
                                            <div class="relative mb-12">
                                                <div class="flex items-center justify-center">
                                                    <div class="bg-white p-6 rounded-2xl shadow-${shadow} max-w-md" style="border: 3px solid ${accentColor}">
                                                        <div class="flex items-center gap-4 mb-3">
                                                            <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white">
                                                                ${reasonInfo.icon}
                                                            </div>
                                                            <div class="flex-1">
                                                                <div class="text-xs uppercase tracking-wide text-gray-500">Next Chapter</div>
                                                                <div class="text-lg font-bold" style="color: ${accentColor}">${reasonInfo.text}</div>
                                                            </div>
                                                        </div>
                                                        ${data.details ? `<p class="text-gray-700 leading-relaxed text-sm">${data.details}</p>` : ''}
                                                    </div>
                                                </div>
                                                <div class="absolute left-1/2 top-1/2 -ml-4 w-8 h-8 rounded-full flex items-center justify-center z-10" style="background: ${accentColor}">
                                                    <div class="text-white text-xl">→</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Gradient Card
                    if (layout === 'modern') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <div class="rounded-3xl overflow-hidden shadow-${shadow}">
                                        <!-- Gradient Header -->
                                        <div class="p-10 text-center text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)">
                                            ${reasonInfo ? `
                                                <div class="text-7xl mb-4">${reasonInfo.icon}</div>
                                                <h3 class="text-3xl font-bold mb-2">${reasonInfo.text}</h3>
                                            ` : '<div class="text-7xl mb-4">✈️</div>'}
                                            <div class="w-24 h-1 mx-auto opacity-50" style="background: white"></div>
                                        </div>
                                        <!-- Content Area -->
                                        <div class="p-8 bg-white">
                                            <h2 class="text-2xl font-bold text-center mb-6">${data.title || 'New Adventures Await'}</h2>
                                            ${data.details ? `<p class="text-gray-700 leading-relaxed text-center">${data.details}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Minimal Layout - Clean Layout
                    if (layout === 'minimal') {
                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto ${alignClass}">
                                    ${reasonInfo ? `
                                        <div class="inline-block w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4" style="background: ${accentColor}15">
                                            ${reasonInfo.icon}
                                        </div>
                                    ` : ''}
                                    <h2 class="text-2xl font-bold mb-3">${data.title || 'New Adventures Await'}</h2>
                                    <div class="w-16 h-0.5 ${align === 'center' ? 'mx-auto' : ''} mb-4" style="background: ${accentColor}"></div>
                                    ${reasonInfo ? `
                                        <div class="mb-4">
                                            <div class="text-sm uppercase tracking-wide font-semibold mb-1" style="color: ${accentColor}">${reasonInfo.text}</div>
                                        </div>
                                    ` : ''}
                                    ${data.details ? `<p class="text-gray-700 leading-relaxed">${data.details}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Elegant Layout - Bordered Frame
                    if (layout === 'elegant') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="border-4 rounded-2xl p-10 bg-white shadow-${shadow} ${alignClass}" style="border-color: ${accentColor}">
                                        <div class="${align === 'center' ? 'mx-auto' : ''} mb-6">
                                            <div class="inline-block p-5 rounded-full" style="background: ${accentColor}15">
                                                ${reasonInfo ? `
                                                    <div class="text-5xl">${reasonInfo.icon}</div>
                                                ` : '<div class="text-5xl">✈️</div>'}
                                            </div>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${data.title || 'New Adventures Await'}</h2>
                                        <div class="w-24 h-1 ${align === 'center' ? 'mx-auto' : ''} mb-6" style="background: ${accentColor}30"></div>
                                        ${reasonInfo ? `
                                            <div class="mb-6 pb-6 border-b" style="border-color: ${accentColor}20">
                                                <div class="flex items-center ${align === 'center' ? 'justify-center' : ''} gap-3">
                                                    <div class="text-xs uppercase tracking-wide text-gray-500">Moving Forward To</div>
                                                    <div class="font-bold text-lg" style="color: ${accentColor}">${reasonInfo.text}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.details ? `<p class="text-gray-700 leading-relaxed text-lg">${data.details}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }
            };
