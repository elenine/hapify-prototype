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
                                <option value="minimal">Minimal - Simple Clean</option>
                                <option value="compact">Compact - Dense Info</option>
                                <option value="showcase">Showcase - Large Featured</option>
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
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
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

                    // Minimal Layout - Simple Clean
                    if (layout === 'minimal') {
                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto text-center">
                                    <div class="inline-block w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4" style="background: ${accentColor}15">
                                        📞
                                    </div>
                                    <h2 class="text-2xl font-bold mb-2">${data.title || 'Stay In Touch'}</h2>
                                    <div class="w-16 h-0.5 mx-auto mb-4" style="background: ${accentColor}"></div>
                                    <p class="text-gray-600 mb-6 text-sm">${data.message || "Let's keep in touch!"}</p>
                                    <div class="space-y-2 text-sm">
                                        ${data.email ? `
                                            <div>
                                                <span class="text-gray-500">✉️</span>
                                                <a href="mailto:${data.email}" class="ml-2 hover:underline break-all" style="color: ${accentColor}">${data.email}</a>
                                            </div>
                                        ` : ''}
                                        ${data.phone ? `
                                            <div>
                                                <span class="text-gray-500">📱</span>
                                                <a href="tel:${data.phone}" class="ml-2 hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                            </div>
                                        ` : ''}
                                        ${data.linkedin ? `
                                            <div>
                                                <span class="text-gray-500">💼</span>
                                                <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="ml-2 hover:underline" style="color: ${accentColor}">LinkedIn</a>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Compact Layout - Dense Info
                    if (layout === 'compact') {
                        return `
                            <div class="py-10 px-6" style="background: ${bg}">
                                <div class="max-w-sm mx-auto">
                                    <div class="bg-white rounded-xl shadow-${shadow} p-6">
                                        <div class="flex items-center gap-3 mb-4 pb-4 border-b" style="border-color: ${accentColor}20">
                                            <div class="text-2xl">📞</div>
                                            <div>
                                                <h2 class="font-bold">${data.title || 'Stay In Touch'}</h2>
                                                <p class="text-xs text-gray-600">${data.message || "Let's keep in touch!"}</p>
                                            </div>
                                        </div>
                                        <div class="space-y-3">
                                            ${data.email ? `
                                                <a href="mailto:${data.email}" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition" style="color: ${accentColor}">
                                                    <div class="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-sm" style="background: ${accentColor}15">
                                                        ✉️
                                                    </div>
                                                    <div class="flex-1 min-w-0">
                                                        <div class="text-xs text-gray-500">Email</div>
                                                        <div class="text-xs font-semibold truncate">${data.email}</div>
                                                    </div>
                                                </a>
                                            ` : ''}
                                            ${data.phone ? `
                                                <a href="tel:${data.phone}" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition" style="color: ${accentColor}">
                                                    <div class="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-sm" style="background: ${accentColor}15">
                                                        📱
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="text-xs text-gray-500">Phone</div>
                                                        <div class="text-xs font-semibold">${data.phone}</div>
                                                    </div>
                                                </a>
                                            ` : ''}
                                            ${data.linkedin ? `
                                                <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition" style="color: ${accentColor}">
                                                    <div class="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-sm" style="background: ${accentColor}15">
                                                        💼
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="text-xs text-gray-500">LinkedIn</div>
                                                        <div class="text-xs font-semibold">Connect</div>
                                                    </div>
                                                </a>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Showcase Layout - Large Featured
                    if (layout === 'showcase') {
                        return `
                            <div class="py-14 px-6" style="background: linear-gradient(to bottom, ${bg}, ${accentColor}10)">
                                <div class="max-w-2xl mx-auto text-center">
                                    <div class="inline-block p-6 rounded-full shadow-xl mb-6" style="background: ${accentColor}">
                                        <div class="text-6xl">📞</div>
                                    </div>
                                    <h2 class="text-4xl font-bold mb-4">${data.title || 'Stay In Touch'}</h2>
                                    <p class="text-xl text-gray-700 mb-10">${data.message || "Let's keep in touch!"}</p>

                                    <div class="grid md:grid-cols-${data.email && data.phone && data.linkedin ? '3' : data.email && data.phone || data.email && data.linkedin || data.phone && data.linkedin ? '2' : '1'} gap-6">
                                        ${data.email ? `
                                            <a href="mailto:${data.email}" class="group">
                                                <div class="bg-white rounded-2xl p-8 shadow-${shadow} hover:scale-105 transition-transform">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background: ${accentColor}15">
                                                        ✉️
                                                    </div>
                                                    <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Email Me</div>
                                                    <div class="font-bold text-sm break-all group-hover:underline" style="color: ${accentColor}">${data.email}</div>
                                                </div>
                                            </a>
                                        ` : ''}
                                        ${data.phone ? `
                                            <a href="tel:${data.phone}" class="group">
                                                <div class="bg-white rounded-2xl p-8 shadow-${shadow} hover:scale-105 transition-transform">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background: ${accentColor}15">
                                                        📱
                                                    </div>
                                                    <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Call Me</div>
                                                    <div class="font-bold text-sm group-hover:underline" style="color: ${accentColor}">${data.phone}</div>
                                                </div>
                                            </a>
                                        ` : ''}
                                        ${data.linkedin ? `
                                            <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="group">
                                                <div class="bg-white rounded-2xl p-8 shadow-${shadow} hover:scale-105 transition-transform">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background: ${accentColor}15">
                                                        💼
                                                    </div>
                                                    <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Connect On</div>
                                                    <div class="font-bold text-sm group-hover:underline" style="color: ${accentColor}">LinkedIn</div>
                                                </div>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }
            };
