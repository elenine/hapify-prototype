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
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Card Style</option>
                                <option value="list">List View</option>
                                <option value="minimal">Minimal</option>
                                <option value="boxed">Boxed Info</option>
                                <option value="modern">Modern Grid</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#14b8a6';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const title = data.title || 'Get In Touch';
                    const email = data.email || '';
                    const phone = data.phone || '';
                    const address = data.address || '';

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    const hasInfo = email || phone || address;

                    switch(layout) {
                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${email ? `
                                        <div class="flex items-center gap-4 p-5 bg-white rounded-xl ${shadowClass} hover:shadow-xl transition-shadow border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20; color: ${accentColor};">📧</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Email</div>
                                                <div class="font-semibold text-sm">${email}</div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-center gap-4 p-5 bg-white rounded-xl ${shadowClass} hover:shadow-xl transition-shadow border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20; color: ${accentColor};">📞</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Phone</div>
                                                <div class="font-semibold text-sm">${phone}</div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-start gap-4 p-5 bg-white rounded-xl ${shadowClass} hover:shadow-xl transition-shadow border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20; color: ${accentColor};">📍</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Address</div>
                                                <div class="font-semibold text-sm">${address}</div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${email ? `
                                        <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <div class="flex items-center gap-3">
                                                <span class="text-xl">📧</span>
                                                <span class="font-medium text-sm">${email}</span>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <div class="flex items-center gap-3">
                                                <span class="text-xl">📞</span>
                                                <span class="font-medium text-sm">${phone}</span>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <div class="flex items-center gap-3">
                                                <span class="text-xl">📍</span>
                                                <span class="font-medium text-sm">${address}</span>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto text-center space-y-2">
                                        ${email ? `<div class="text-sm font-medium">📧 ${email}</div>` : ''}
                                        ${phone ? `<div class="text-sm font-medium">📞 ${phone}</div>` : ''}
                                        ${address ? `<div class="text-sm font-medium">📍 ${address}</div>` : ''}
                                        ${!hasInfo ? '<div class="text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'boxed':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border-t-4" style="border-color: ${accentColor};">
                                        <div class="space-y-6">
                                            ${email ? `
                                            <div class="text-center">
                                                <div class="text-3xl mb-2">📧</div>
                                                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</div>
                                                <div class="font-semibold">${email}</div>
                                            </div>` : ''}
                                            ${phone ? `
                                            <div class="text-center">
                                                <div class="text-3xl mb-2">📞</div>
                                                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Phone</div>
                                                <div class="font-semibold">${phone}</div>
                                            </div>` : ''}
                                            ${address ? `
                                            <div class="text-center">
                                                <div class="text-3xl mb-2">📍</div>
                                                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Address</div>
                                                <div class="font-semibold">${address}</div>
                                            </div>` : ''}
                                            ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid gap-4">
                                        ${email ? `
                                        <div class="bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-2xl">📧</div>
                                                <div class="flex-1">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Email</div>
                                                    <div class="font-semibold text-sm">${email}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-2xl">📞</div>
                                                <div class="flex-1">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Phone</div>
                                                    <div class="font-semibold text-sm">${phone}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="bg-white rounded-xl p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-2xl">📍</div>
                                                <div class="flex-1">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor};">Address</div>
                                                    <div class="font-semibold text-sm">${address}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${email ? `
                                        <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                                            <div class="text-2xl">📧</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1">Email</div>
                                                <div class="font-medium text-sm">${email}</div>
                                            </div>
                                        </div>` : ''}
                                        ${phone ? `
                                        <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                                            <div class="text-2xl">📞</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1">Phone</div>
                                                <div class="font-medium text-sm">${phone}</div>
                                            </div>
                                        </div>` : ''}
                                        ${address ? `
                                        <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                                            <div class="text-2xl">📍</div>
                                            <div>
                                                <div class="text-xs text-gray-500 mb-1">Address</div>
                                                <div class="font-medium text-sm">${address}</div>
                                            </div>
                                        </div>` : ''}
                                        ${!hasInfo ? '<div class="text-center text-gray-500 text-sm">Add contact information</div>' : ''}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
