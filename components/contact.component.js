// Contact Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
                name: '📞 Contact',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Get In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (optional)</label>
                            <input type="text" placeholder="We'd love to hear from you" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" placeholder="contact@business.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="email" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" placeholder="+1 234 567 8900" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="phone" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea placeholder="Business address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Website (optional)</label>
                            <input type="url" placeholder="www.business.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="website" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Card Layout</option>
                                <option value="grid">Grid Layout</option>
                                <option value="minimal">Minimal</option>
                                <option value="boxed">Boxed Style</option>
                                <option value="modern">Modern Cards</option>
                                <option value="centered">Centered</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style, globalStyles) => {
                    const layout = style.layout || 'cards';
                    const bg = style.bg || '#eff6ff';
                    const accent = style.accent || '#2563eb';
                    const title = data.title || 'Get In Touch';
                    const subtitle = data.subtitle || '';

                    const contactItems = [
                        { icon: '📧', label: 'Email', value: data.email, show: !!data.email },
                        { icon: '📞', label: 'Phone', value: data.phone, show: !!data.phone },
                        { icon: '📍', label: 'Address', value: data.address, show: !!data.address },
                        { icon: '🌐', label: 'Website', value: data.website, show: !!data.website }
                    ].filter(item => item.show);

                    if (contactItems.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bg};">
                                <h2 class="text-2xl font-bold text-center mb-4" style="color: ${accent};">${title}</h2>
                                ${subtitle ? `<p class="text-center text-gray-500 text-sm mb-8">${subtitle}</p>` : ''}
                                <div class="text-center text-gray-500 text-sm">Add contact information to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-4xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            ${contactItems.map(item => `
                                                <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
                                                    <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" style="background: ${accent}20;">
                                                        ${item.icon}
                                                    </div>
                                                    <div class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">${item.label}</div>
                                                    <div class="font-medium text-gray-800">${item.value}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-2xl mx-auto">
                                        <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                        <div class="space-y-4">
                                            ${contactItems.map(item => `
                                                <div class="flex items-center gap-4 p-4 border-b border-gray-200">
                                                    <div class="text-2xl">${item.icon}</div>
                                                    <div class="flex-1">
                                                        <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                                        <div class="font-medium text-gray-800">${item.value}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'boxed':
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <div class="max-w-3xl mx-auto">
                                        <div class="bg-white rounded-3xl shadow-xl p-8" style="border-top: 4px solid ${accent};">
                                            <h2 class="text-3xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                            ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                            <div class="space-y-4">
                                                ${contactItems.map(item => `
                                                    <div class="flex items-center gap-4 p-4 rounded-lg" style="background: ${accent}08;">
                                                        <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0" style="background: ${accent}; color: white;">
                                                            ${item.icon}
                                                        </div>
                                                        <div>
                                                            <div class="text-xs font-semibold mb-1" style="color: ${accent};">${item.label.toUpperCase()}</div>
                                                            <div class="font-medium text-gray-800">${item.value}</div>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bg} 0%, white 100%);">
                                    <div class="max-w-4xl mx-auto">
                                        <div class="text-center mb-12">
                                            <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${accent}; color: white;">${subtitle || 'CONTACT US'}</div>
                                            <h2 class="text-4xl font-bold" style="color: ${accent};">${title}</h2>
                                        </div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            ${contactItems.map(item => `
                                                <div class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                                                    <div class="absolute top-0 right-0 w-20 h-20 opacity-10 transform translate-x-6 -translate-y-6" style="background: ${accent}; border-radius: 50%;"></div>
                                                    <div class="relative">
                                                        <div class="text-4xl mb-3">${item.icon}</div>
                                                        <div class="text-xs font-bold mb-2" style="color: ${accent};">${item.label.toUpperCase()}</div>
                                                        <div class="font-semibold text-gray-800">${item.value}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'centered':
                            return `
                                <div class="py-16 px-6" style="background: ${bg};">
                                    <div class="max-w-2xl mx-auto text-center">
                                        <div class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl" style="background: ${accent}20;">
                                            📞
                                        </div>
                                        <h2 class="text-4xl font-bold mb-3" style="color: ${accent};">${title}</h2>
                                        ${subtitle ? `<p class="text-gray-600 mb-10">${subtitle}</p>` : ''}
                                        <div class="inline-block text-left space-y-6">
                                            ${contactItems.map(item => `
                                                <div class="flex items-center gap-4">
                                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0" style="background: ${accent}; color: white;">
                                                        ${item.icon}
                                                    </div>
                                                    <div>
                                                        <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                                        <div class="font-semibold text-gray-800">${item.value}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'cards':
                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bg};">
                                    <h2 class="text-2xl font-bold text-center mb-3" style="color: ${accent};">${title}</h2>
                                    ${subtitle ? `<p class="text-center text-gray-600 mb-8">${subtitle}</p>` : ''}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${contactItems.map(item => `
                                            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                                <div class="text-2xl flex-shrink-0">${item.icon}</div>
                                                <div>
                                                    <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                                    <div class="font-medium text-sm text-gray-800">${item.value}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
