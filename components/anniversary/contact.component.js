// Contact Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Information',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Get In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                <input type="text" placeholder="Event Coordinator" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="anniversary@email.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea placeholder="For questions about the celebration..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Cards</option>
                    <option value="modern">Modern</option>
                    <option value="minimal">Minimal</option>
                    <option value="compact">Compact</option>
                    <option value="detailed">Detailed</option>
                    <option value="split">Split Layout</option>
                    <option value="centered">Centered</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fef2f2';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#ffffff';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'lg';

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Contact Information'}</h2>
                        ${data.info ? `<p class="text-center text-gray-600 mb-6">${data.info}</p>` : ''}
                        <div class="space-y-4">
                            ${data.name ? `
                                <div class="flex items-center gap-4 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                    <div class="text-2xl">👤</div>
                                    <div>
                                        <div class="text-xs text-gray-500">Contact Person</div>
                                        <div class="font-medium">${data.name}</div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.phone ? `
                                <div class="flex items-center gap-4 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                    <div class="text-2xl">📞</div>
                                    <div>
                                        <div class="text-xs text-gray-500">Phone</div>
                                        <a href="tel:${data.phone}" class="font-medium hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.email ? `
                                <div class="flex items-center gap-4 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                    <div class="text-2xl">📧</div>
                                    <div>
                                        <div class="text-xs text-gray-500">Email</div>
                                        <a href="mailto:${data.email}" class="font-medium hover:underline" style="color: ${accentColor}">${data.email}</a>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Contact Information'}</h2>
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                            ${data.info ? `<p class="text-center text-gray-600 mb-6">${data.info}</p>` : ''}
                            <div class="grid md:grid-cols-3 gap-6">
                                ${data.name ? `
                                    <div class="text-center p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${bg}">
                                        <div class="text-3xl mb-2">👤</div>
                                        <div class="text-xs text-gray-500 mb-1">Contact</div>
                                        <div class="font-bold">${data.name}</div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="text-center p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${bg}">
                                        <div class="text-3xl mb-2">📞</div>
                                        <div class="text-xs text-gray-500 mb-1">Phone</div>
                                        <a href="tel:${data.phone}" class="font-bold hover:underline" style="color: ${accentColor}">${data.phone}</a>
                                    </div>
                                ` : ''}
                                ${data.email ? `
                                    <div class="text-center p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${bg}">
                                        <div class="text-3xl mb-2">📧</div>
                                        <div class="text-xs text-gray-500 mb-1">Email</div>
                                        <a href="mailto:${data.email}" class="font-bold hover:underline break-all" style="color: ${accentColor}">${data.email}</a>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-lg mx-auto p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Contact'}</h2>
                    ${data.info ? `<p class="text-gray-600 mb-6">${data.info}</p>` : ''}
                    ${data.name ? `<p class="mb-2"><strong>👤</strong> ${data.name}</p>` : ''}
                    ${data.phone ? `<p class="mb-2"><strong>📞</strong> <a href="tel:${data.phone}" style="color: ${accentColor}">${data.phone}</a></p>` : ''}
                    ${data.email ? `<p><strong>📧</strong> <a href="mailto:${data.email}" style="color: ${accentColor}">${data.email}</a></p>` : ''}
                </div>
            </div>
        `;
    }
};
