// Stay In Touch Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
                name: '📞 Stay In Touch',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Stay In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea placeholder="Don't be a stranger! Here's how to reach me..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" placeholder="email@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="email" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="phone" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                            <input type="url" placeholder="linkedin.com/in/username" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="linkedin" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="stacked">Stacked - Vertical List</option>
                                <option value="cards">Cards - Individual Boxes</option>
                                <option value="buttons">Buttons - Call-to-Action</option>
                                <option value="modern">Modern - Icon Grid</option>
                                <option value="business">Business - Professional Card</option>
                                <option value="compact">Compact - Minimal Space</option>
                                <option value="horizontal">Horizontal - Row Layout</option>
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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardColor" oninput="updatePreview()">
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
                                <option value="rounded-lg">Normal</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-3xl">Huge</option>
                                <option value="rounded-full">Full (Pills)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="textSize" onchange="updatePreview()">
                                <option value="sm">Small</option>
                                <option value="base">Medium</option>
                                <option value="lg">Large</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="iconSize" onchange="updatePreview()">
                                <option value="text-xl">Small</option>
                                <option value="text-2xl">Medium</option>
                                <option value="text-3xl">Large</option>
                                <option value="text-4xl">Extra Large</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'stacked';
                    const bg = style.bg || '#faf5ff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const cardColor = style.cardColor || '#ffffff';
                    const shadow = style.shadow || 'md';
                    const borderRadius = style.borderRadius || 'rounded-xl';
                    const textSize = style.textSize || 'base';
                    const iconSize = style.iconSize || 'text-2xl';

                    const textSizeClass = textSize === 'sm' ? 'text-sm' : textSize === 'lg' ? 'text-lg' : 'text-base';
                    const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;

                    // Stacked Layout - Vertical List
                    if (layout === 'stacked') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto text-center">
                                    <div class="text-5xl mb-4">📞</div>
                                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Stay In Touch'}</h2>
                                    <p class="text-gray-600 mb-6">${data.message || "Let's keep in touch!"}</p>
                                    <div class="space-y-3">
                                        ${data.email ? `
                                            <div class="flex items-center justify-center gap-3 p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                                <div class="text-2xl">✉️</div>
                                                <a href="mailto:${data.email}" class="hover:underline" style="color: ${accentColor}">${data.email}</a>
                                            </div>
                                        ` : ''}
                                        ${data.phone ? `
                                            <div class="flex items-center justify-center gap-3 p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                                <div class="text-2xl">📱</div>
                                                <a href="tel:${data.phone}" class="hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                            </div>
                                        ` : ''}
                                        ${data.linkedin ? `
                                            <div class="flex items-center justify-center gap-3 p-4 rounded-xl shadow-${shadow}" style="background: ${cardColor}">
                                                <div class="text-2xl">💼</div>
                                                <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="hover:underline" style="color: ${accentColor}">LinkedIn Profile</a>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Cards Layout - Individual Boxes
                    if (layout === 'cards') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="text-center mb-8">
                                        <div class="text-5xl mb-4">📞</div>
                                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Stay In Touch'}</h2>
                                        <p class="text-gray-600">${data.message || "Let's keep in touch!"}</p>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-${data.email && data.phone && data.linkedin ? '3' : data.email && data.phone || data.email && data.linkedin || data.phone && data.linkedin ? '2' : '1'} gap-4">
                                        ${data.email ? `
                                            <div class="p-6 rounded-2xl shadow-${shadow} text-center" style="background: ${cardColor}; border-top: 4px solid ${accentColor}">
                                                <div class="text-4xl mb-3">✉️</div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Email</div>
                                                <a href="mailto:${data.email}" class="text-sm font-semibold hover:underline break-all" style="color: ${accentColor}">${data.email}</a>
                                            </div>
                                        ` : ''}
                                        ${data.phone ? `
                                            <div class="p-6 rounded-2xl shadow-${shadow} text-center" style="background: ${cardColor}; border-top: 4px solid ${accentColor}">
                                                <div class="text-4xl mb-3">📱</div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Phone</div>
                                                <a href="tel:${data.phone}" class="text-sm font-semibold hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                            </div>
                                        ` : ''}
                                        ${data.linkedin ? `
                                            <div class="p-6 rounded-2xl shadow-${shadow} text-center" style="background: ${cardColor}; border-top: 4px solid ${accentColor}">
                                                <div class="text-4xl mb-3">💼</div>
                                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">LinkedIn</div>
                                                <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="text-sm font-semibold hover:underline" style="color: ${accentColor}">View Profile</a>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Buttons Layout - Call-to-Action
                    if (layout === 'buttons') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto text-center">
                                    <div class="text-6xl mb-4">📞</div>
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'Stay In Touch'}</h2>
                                    <p class="text-gray-600 mb-8 text-lg">${data.message || "Let's keep in touch!"}</p>
                                    <div class="space-y-3">
                                        ${data.email ? `
                                            <a href="mailto:${data.email}" class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl shadow-${shadow} font-semibold transition hover:scale-105 text-white" style="background: ${accentColor}">
                                                <span class="text-2xl">✉️</span>
                                                <span>Email Me</span>
                                            </a>
                                        ` : ''}
                                        ${data.phone ? `
                                            <a href="tel:${data.phone}" class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl shadow-${shadow} font-semibold transition hover:scale-105" style="background: ${cardColor}; color: ${accentColor}; border: 2px solid ${accentColor}">
                                                <span class="text-2xl">📱</span>
                                                <span>Call Me</span>
                                            </a>
                                        ` : ''}
                                        ${data.linkedin ? `
                                            <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl shadow-${shadow} font-semibold transition hover:scale-105" style="background: ${cardColor}; color: ${accentColor}; border: 2px solid ${accentColor}">
                                                <span class="text-2xl">💼</span>
                                                <span>Connect on LinkedIn</span>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Icon Grid
                    if (layout === 'modern') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg}, ${accentColor}10)">
                                <div class="max-w-2xl mx-auto">
                                    <div class="bg-white rounded-3xl shadow-${shadow} p-8">
                                        <div class="text-center mb-8">
                                            <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}15">
                                                <div class="text-4xl">📞</div>
                                            </div>
                                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Stay In Touch'}</h2>
                                            <p class="text-gray-600">${data.message || "Let's keep in touch!"}</p>
                                        </div>
                                        <div class="grid gap-4">
                                            ${data.email ? `
                                                <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${accentColor}10">
                                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
                                                        ✉️
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="text-xs uppercase tracking-wide text-gray-500">Email</div>
                                                        <a href="mailto:${data.email}" class="font-semibold hover:underline break-all" style="color: ${accentColor}">${data.email}</a>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${data.phone ? `
                                                <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${accentColor}10">
                                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
                                                        📱
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="text-xs uppercase tracking-wide text-gray-500">Phone</div>
                                                        <a href="tel:${data.phone}" class="font-semibold hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${data.linkedin ? `
                                                <div class="flex items-center gap-4 p-4 rounded-xl" style="background: ${accentColor}10">
                                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
                                                        💼
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="text-xs uppercase tracking-wide text-gray-500">LinkedIn</div>
                                                        <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="font-semibold hover:underline" style="color: ${accentColor}">Connect with me</a>
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Business Layout - Professional Card
                    if (layout === 'business') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <div class="border-2 rounded-2xl overflow-hidden shadow-${shadow}" style="border-color: ${accentColor}">
                                        <div class="text-center p-8" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); color: white">
                                            <div class="text-5xl mb-3">📞</div>
                                            <h2 class="text-3xl font-bold mb-2">${data.title || 'Stay In Touch'}</h2>
                                            <p class="opacity-90">${data.message || "Let's keep in touch!"}</p>
                                        </div>
                                        <div class="p-8 space-y-4" style="background: ${cardColor}">
                                            ${data.email ? `
                                                <div class="flex items-center gap-4 pb-4 border-b" style="border-color: ${accentColor}20">
                                                    <div class="text-2xl">✉️</div>
                                                    <div>
                                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Email Address</div>
                                                        <a href="mailto:${data.email}" class="font-semibold hover:underline break-all" style="color: ${accentColor}">${data.email}</a>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${data.phone ? `
                                                <div class="flex items-center gap-4 pb-4 border-b" style="border-color: ${accentColor}20">
                                                    <div class="text-2xl">📱</div>
                                                    <div>
                                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Phone Number</div>
                                                        <a href="tel:${data.phone}" class="font-semibold hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${data.linkedin ? `
                                                <div class="flex items-center gap-4">
                                                    <div class="text-2xl">💼</div>
                                                    <div>
                                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Professional Network</div>
                                                        <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="font-semibold hover:underline" style="color: ${accentColor}">LinkedIn Profile</a>
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Compact Layout - Minimal Space
                    if (layout === 'compact') {
                        return `
                            <div class="py-8 px-6" style="background: ${bg}">
                                <div class="max-w-xl mx-auto text-center">
                                    <div class="${iconSize} mb-3">📞</div>
                                    <h2 class="text-xl font-bold mb-4">${data.title || 'Stay In Touch'}</h2>
                                    <div class="flex flex-wrap justify-center gap-3">
                                        ${data.email ? `
                                            <a href="mailto:${data.email}" class="inline-flex items-center gap-2 px-4 py-2 ${borderRadius} ${shadowClass} ${textSizeClass} font-medium transition hover:scale-105" style="background: ${cardColor}; color: ${accentColor}">
                                                <span class="${iconSize}">✉️</span>
                                                <span>Email</span>
                                            </a>
                                        ` : ''}
                                        ${data.phone ? `
                                            <a href="tel:${data.phone}" class="inline-flex items-center gap-2 px-4 py-2 ${borderRadius} ${shadowClass} ${textSizeClass} font-medium transition hover:scale-105" style="background: ${cardColor}; color: ${accentColor}">
                                                <span class="${iconSize}">📱</span>
                                                <span>Call</span>
                                            </a>
                                        ` : ''}
                                        ${data.linkedin ? `
                                            <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 ${borderRadius} ${shadowClass} ${textSizeClass} font-medium transition hover:scale-105" style="background: ${cardColor}; color: ${accentColor}">
                                                <span class="${iconSize}">💼</span>
                                                <span>LinkedIn</span>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Horizontal Layout - Row Layout
                    if (layout === 'horizontal') {
                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <div class="max-w-4xl mx-auto">
                                    <div class="flex items-center gap-6 ${borderRadius} p-6 ${shadowClass}" style="background: ${cardColor}">
                                        <div class="${iconSize} flex-shrink-0" style="color: ${accentColor}">📞</div>
                                        <div class="flex-1">
                                            <h2 class="text-lg font-bold mb-1" style="color: ${accentColor}">${data.title || 'Stay In Touch'}</h2>
                                            <p class="text-gray-600 ${textSizeClass}">${data.message || "Let's keep in touch!"}</p>
                                        </div>
                                        <div class="flex gap-3 flex-shrink-0">
                                            ${data.email ? `
                                                <a href="mailto:${data.email}" class="flex items-center justify-center w-12 h-12 ${borderRadius} ${shadowClass} transition hover:scale-110" style="background: ${accentColor}; color: white">
                                                    <span class="${iconSize}">✉️</span>
                                                </a>
                                            ` : ''}
                                            ${data.phone ? `
                                                <a href="tel:${data.phone}" class="flex items-center justify-center w-12 h-12 ${borderRadius} ${shadowClass} transition hover:scale-110" style="background: ${accentColor}; color: white">
                                                    <span class="${iconSize}">📱</span>
                                                </a>
                                            ` : ''}
                                            ${data.linkedin ? `
                                                <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="flex items-center justify-center w-12 h-12 ${borderRadius} ${shadowClass} transition hover:scale-110" style="background: ${accentColor}; color: white">
                                                    <span class="${iconSize}">💼</span>
                                                </a>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Elegant Layout - Bordered Frame
                    if (layout === 'elegant') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="border-4 ${borderRadius} p-10 ${shadowClass}" style="border-color: ${accentColor}; background: ${cardColor}">
                                        <div class="text-center">
                                            <div class="inline-block p-3 rounded-full mb-4" style="background: ${accentColor}15">
                                                <div class="${iconSize}">📞</div>
                                            </div>
                                            <h2 class="text-2xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Stay In Touch'}</h2>
                                            <div class="w-20 h-1 mx-auto mb-6" style="background: ${accentColor}"></div>
                                            <p class="text-gray-600 ${textSizeClass} mb-8">${data.message || "Let's keep in touch!"}</p>
                                            <div class="space-y-4">
                                                ${data.email ? `
                                                    <div class="flex items-center justify-between p-4 ${borderRadius}" style="background: ${accentColor}10">
                                                        <div class="flex items-center gap-3">
                                                            <span class="${iconSize}">✉️</span>
                                                            <span class="font-medium ${textSizeClass}">Email</span>
                                                        </div>
                                                        <a href="mailto:${data.email}" class="font-semibold hover:underline break-all ${textSizeClass}" style="color: ${accentColor}">${data.email}</a>
                                                    </div>
                                                ` : ''}
                                                ${data.phone ? `
                                                    <div class="flex items-center justify-between p-4 ${borderRadius}" style="background: ${accentColor}10">
                                                        <div class="flex items-center gap-3">
                                                            <span class="${iconSize}">📱</span>
                                                            <span class="font-medium ${textSizeClass}">Phone</span>
                                                        </div>
                                                        <a href="tel:${data.phone}" class="font-semibold hover:underline ${textSizeClass}" style="color: ${accentColor}">${data.phone}</a>
                                                    </div>
                                                ` : ''}
                                                ${data.linkedin ? `
                                                    <div class="flex items-center justify-between p-4 ${borderRadius}" style="background: ${accentColor}10">
                                                        <div class="flex items-center gap-3">
                                                            <span class="${iconSize}">💼</span>
                                                            <span class="font-medium ${textSizeClass}">LinkedIn</span>
                                                        </div>
                                                        <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="font-semibold hover:underline ${textSizeClass}" style="color: ${accentColor}">View Profile</a>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }
            };
