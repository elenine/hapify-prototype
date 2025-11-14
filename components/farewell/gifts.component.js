// Gift/Contribution Preferences Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Preferences',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Gift Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea placeholder="Your presence is the best gift, but if you'd like to contribute..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift/Contribution Link (Optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="registryLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Link Description (Optional)</label>
                <input type="text" placeholder="Group gift contribution, Memory book, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="registryName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alternative Options (Optional)</label>
                <textarea placeholder="• Donations to [Charity Name]&#10;• Written memories & well wishes&#10;• Group video messages welcome" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="alternatives" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">One option per line</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="split">Split - Two Columns</option>
                    <option value="minimal">Minimal - Simple Text</option>
                    <option value="elegant">Elegant - Bordered</option>
                    <option value="modern">Modern - Gradient</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
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
        const layout = style.layout || 'card';
        const bg = style.bg || '#f9fafb';
        const accentColor = style.accentColor || '#8b5cf6';
        const shadow = style.shadow || 'md';

        const alternatives = data.alternatives ? data.alternatives.split('\n').filter(alt => alt.trim()) : [];

        // Card Layout - Centered Box
        if (layout === 'card') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-lg mx-auto">
                        <div class="text-6xl mb-4">🎁</div>
                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Gift Information'}</h2>
                        <p class="text-gray-600 mb-8 text-lg">${data.message || "Your presence is the best gift, but if you'd like to contribute..."}</p>

                        <div class="bg-white rounded-2xl p-8 shadow-${shadow}">
                            ${data.registryLink ? `
                                <div class="mb-6">
                                    <div class="text-sm text-gray-500 mb-4 uppercase tracking-wide">Contribution Link</div>
                                    <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105" style="background: ${accentColor}">
                                        ${data.registryName || 'View Contribution Options'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="${data.registryLink ? 'pt-6 border-t' : ''}" style="border-color: ${accentColor}20">
                                    <div class="text-sm font-semibold mb-4 uppercase tracking-wide" style="color: ${accentColor}">Other Options</div>
                                    <ul class="space-y-3 text-left max-w-xs mx-auto">
                                        ${alternatives.map(alt => `<li class="flex items-start gap-2"><span style="color: ${accentColor}">•</span><span class="text-gray-700">${alt}</span></li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout - Two Columns
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-6xl mb-4">🎁</div>
                            <h2 class="text-3xl font-bold">${data.title || 'Gift Information'}</h2>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="p-8 rounded-2xl shadow-${shadow}" style="background: ${accentColor}15">
                                <h3 class="text-xl font-bold mb-4" style="color: ${accentColor}">Our Message</h3>
                                <p class="text-gray-700 leading-relaxed">${data.message || "Your presence is the best gift, but if you'd like to contribute..."}</p>
                            </div>
                            <div class="space-y-4">
                                ${data.registryLink ? `
                                    <div class="p-6 bg-white rounded-2xl shadow-${shadow}">
                                        <div class="text-sm uppercase tracking-wide mb-3" style="color: ${accentColor}">Contribution</div>
                                        <a href="${data.registryLink}" target="_blank" class="block w-full text-center py-3 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: ${accentColor}">
                                            ${data.registryName || 'View Options'}
                                        </a>
                                    </div>
                                ` : ''}
                                ${alternatives.length > 0 ? `
                                    <div class="p-6 bg-white rounded-2xl shadow-${shadow}">
                                        <div class="text-sm uppercase tracking-wide mb-3" style="color: ${accentColor}">Alternatives</div>
                                        <ul class="space-y-2 text-sm text-gray-700">
                                            ${alternatives.map(alt => `<li class="flex items-start gap-2"><span style="color: ${accentColor}">•</span><span>${alt}</span></li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout - Simple Text
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="text-5xl mb-4">🎁</div>
                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Gift Information'}</h2>
                        <div class="w-16 h-1 mx-auto mb-6" style="background: ${accentColor}"></div>
                        <p class="text-gray-700 mb-8 leading-relaxed">${data.message || "Your presence is the best gift, but if you'd like to contribute..."}</p>

                        ${data.registryLink ? `
                            <div class="mb-8">
                                <a href="${data.registryLink}" target="_blank" class="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:scale-105" style="background: ${accentColor}">
                                    <span>${data.registryName || 'View Contribution Options'}</span>
                                    <span>→</span>
                                </a>
                            </div>
                        ` : ''}

                        ${alternatives.length > 0 ? `
                            <div class="text-left max-w-sm mx-auto">
                                <div class="text-sm font-semibold mb-3" style="color: ${accentColor}">Other Options:</div>
                                <ul class="space-y-2 text-gray-700">
                                    ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout - Bordered
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 rounded-2xl p-10 bg-white shadow-${shadow}" style="border-color: ${accentColor}">
                            <div class="text-center">
                                <div class="inline-block p-3 rounded-full mb-4" style="background: ${accentColor}15">
                                    <div class="text-5xl">🎁</div>
                                </div>
                                <h2 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${data.title || 'Gift Information'}</h2>
                                <div class="w-24 h-1 mx-auto mb-6" style="background: ${accentColor}30"></div>
                                <p class="text-gray-700 mb-8 leading-relaxed">${data.message || "Your presence is the best gift, but if you'd like to contribute..."}</p>

                                ${data.registryLink ? `
                                    <div class="mb-8">
                                        <a href="${data.registryLink}" target="_blank" class="inline-block px-8 py-4 rounded-lg font-semibold text-white shadow-lg transition hover:opacity-90" style="background: ${accentColor}">
                                            ${data.registryName || 'View Contribution Options'}
                                        </a>
                                    </div>
                                ` : ''}

                                ${alternatives.length > 0 ? `
                                    <div class="pt-6 border-t" style="border-color: ${accentColor}30">
                                        <div class="text-sm font-semibold mb-4" style="color: ${accentColor}">Alternative Options</div>
                                        <ul class="space-y-2 text-left max-w-sm mx-auto text-gray-700">
                                            ${alternatives.map(alt => `<li class="flex items-start gap-2"><span style="color: ${accentColor}">✓</span><span>${alt}</span></li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout - Gradient
        if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}10, ${bg})">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-3xl shadow-${shadow} overflow-hidden">
                            <div class="p-8 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); color: white">
                                <div class="text-6xl mb-4">🎁</div>
                                <h2 class="text-3xl font-bold mb-3">${data.title || 'Gift Information'}</h2>
                                <p class="opacity-90 text-lg">${data.message || "Your presence is the best gift, but if you'd like to contribute..."}</p>
                            </div>

                            <div class="p-8">
                                ${data.registryLink ? `
                                    <div class="mb-6 text-center">
                                        <a href="${data.registryLink}" target="_blank" class="inline-block px-10 py-4 rounded-full font-bold text-white shadow-lg transition hover:scale-105" style="background: ${accentColor}">
                                            ${data.registryName || 'View Contribution Options'}
                                        </a>
                                    </div>
                                ` : ''}

                                ${alternatives.length > 0 ? `
                                    <div class="${data.registryLink ? 'pt-6 border-t' : ''}" style="border-color: ${accentColor}20">
                                        <div class="text-center mb-4 font-semibold" style="color: ${accentColor}">Other Ways to Contribute</div>
                                        <ul class="space-y-3 max-w-md mx-auto">
                                            ${alternatives.map(alt => `
                                                <li class="flex items-start gap-3 p-3 rounded-lg" style="background: ${accentColor}10">
                                                    <span class="flex-shrink-0 mt-1" style="color: ${accentColor}">•</span>
                                                    <span class="text-gray-700">${alt}</span>
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return '';
    }
};
