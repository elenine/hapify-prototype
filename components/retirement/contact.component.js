// Contact Information Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Information',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Contact Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Organizer Name</label>
                <input type="text" placeholder="Event Organizer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="organizerName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="organizer@company.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea placeholder="Any additional contact details..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="additionalInfo" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="list">List View</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="boxed">Boxed Design</option>
                    <option value="elegant">Elegant Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Contact Us'}</h2>
                            <div class="space-y-4">
                                ${data.organizerName ? `
                                    <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <div class="text-2xl">👤</div>
                                        <div>
                                            <div class="text-xs opacity-70 mb-1">Organizer</div>
                                            <div class="font-medium">${data.organizerName}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.email ? `
                                    <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <div class="text-2xl">📧</div>
                                        <div>
                                            <div class="text-xs opacity-70 mb-1">Email</div>
                                            <a href="mailto:${data.email}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.email}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <div class="text-2xl">📱</div>
                                        <div>
                                            <div class="text-xs opacity-70 mb-1">Phone</div>
                                            <a href="tel:${data.phone}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.phone}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.additionalInfo ? `
                                    <div class="p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <p class="text-sm">${data.additionalInfo}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'list':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">${data.title || 'Contact Us'}</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-4 text-left">
                                ${data.organizerName ? `
                                    <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor}20;">
                                        <div class="text-xl">👤</div>
                                        <div class="flex-1">
                                            <div class="text-xs opacity-60">Organizer</div>
                                            <div class="font-medium">${data.organizerName}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.email ? `
                                    <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor}20;">
                                        <div class="text-xl">📧</div>
                                        <div class="flex-1">
                                            <div class="text-xs opacity-60">Email</div>
                                            <a href="mailto:${data.email}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.email}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-center gap-3 pb-4 border-b" style="border-color: ${accentColor}20;">
                                        <div class="text-xl">📱</div>
                                        <div class="flex-1">
                                            <div class="text-xs opacity-60">Phone</div>
                                            <a href="tel:${data.phone}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.phone}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.additionalInfo ? `<div class="pt-2"><p class="text-sm opacity-80">${data.additionalInfo}</p></div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-light mb-2">${data.title || 'Contact Us'}</h2>
                            <div class="w-16 h-0.5 mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-3">
                                ${data.organizerName ? `
                                    <div class="flex items-center justify-center gap-2">
                                        <span>👤</span>
                                        <span class="font-medium">${data.organizerName}</span>
                                    </div>
                                ` : ''}
                                ${data.email ? `
                                    <div class="flex items-center justify-center gap-2">
                                        <span>📧</span>
                                        <a href="mailto:${data.email}" class="hover:opacity-80" style="color: ${accentColor};">${data.email}</a>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-center justify-center gap-2">
                                        <span>📱</span>
                                        <a href="tel:${data.phone}" class="hover:opacity-80" style="color: ${accentColor};">${data.phone}</a>
                                    </div>
                                ` : ''}
                                ${data.additionalInfo ? `<div class="mt-6 pt-4 border-t" style="border-color: ${accentColor}20;"><p class="text-sm opacity-70">${data.additionalInfo}</p></div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'boxed':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="border-4 rounded-2xl p-8 text-center" style="border-color: ${accentColor};">
                                <h2 class="text-2xl font-bold mb-6" style="color: ${accentColor};">${data.title || 'Contact Us'}</h2>
                                <div class="space-y-4">
                                    ${data.organizerName ? `
                                        <div class="flex items-center gap-3 p-3 rounded-lg" style="background: ${accentColor}10;">
                                            <div class="text-xl">👤</div>
                                            <div class="flex-1 text-left">
                                                <div class="text-xs opacity-60">Organizer</div>
                                                <div class="font-medium">${data.organizerName}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.email ? `
                                        <div class="flex items-center gap-3 p-3 rounded-lg" style="background: ${accentColor}10;">
                                            <div class="text-xl">📧</div>
                                            <div class="flex-1 text-left">
                                                <div class="text-xs opacity-60">Email</div>
                                                <a href="mailto:${data.email}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.email}</a>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.phone ? `
                                        <div class="flex items-center gap-3 p-3 rounded-lg" style="background: ${accentColor}10;">
                                            <div class="text-xl">📱</div>
                                            <div class="flex-1 text-left">
                                                <div class="text-xs opacity-60">Phone</div>
                                                <a href="tel:${data.phone}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.phone}</a>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.additionalInfo ? `<div class="p-3 rounded-lg text-sm" style="background: ${accentColor}10;">${data.additionalInfo}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif">${data.title || 'Contact Us'}</h2>
                                <div class="w-24 h-0.5 mx-auto mt-3" style="background: ${accentColor};"></div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg p-6 space-y-4">
                                ${data.organizerName ? `
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}20;">
                                            <span>👤</span>
                                        </div>
                                        <div class="flex-1 text-left">
                                            <div class="text-xs opacity-60">Organizer</div>
                                            <div class="font-serif font-medium">${data.organizerName}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.email ? `
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}20;">
                                            <span>📧</span>
                                        </div>
                                        <div class="flex-1 text-left">
                                            <div class="text-xs opacity-60">Email</div>
                                            <a href="mailto:${data.email}" class="font-serif font-medium hover:opacity-80" style="color: ${accentColor};">${data.email}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}20;">
                                            <span>📱</span>
                                        </div>
                                        <div class="flex-1 text-left">
                                            <div class="text-xs opacity-60">Phone</div>
                                            <a href="tel:${data.phone}" class="font-serif font-medium hover:opacity-80" style="color: ${accentColor};">${data.phone}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.additionalInfo ? `
                                    <div class="pt-4 border-t text-sm font-serif italic" style="border-color: ${accentColor}20;">${data.additionalInfo}</div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Contact Us'}</h2>
                            <div class="space-y-4">
                                ${data.organizerName ? `
                                    <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <div class="text-2xl">👤</div>
                                        <div>
                                            <div class="text-xs opacity-70 mb-1">Organizer</div>
                                            <div class="font-medium">${data.organizerName}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.email ? `
                                    <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <div class="text-2xl">📧</div>
                                        <div>
                                            <div class="text-xs opacity-70 mb-1">Email</div>
                                            <a href="mailto:${data.email}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.email}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.phone ? `
                                    <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <div class="text-2xl">📱</div>
                                        <div>
                                            <div class="text-xs opacity-70 mb-1">Phone</div>
                                            <a href="tel:${data.phone}" class="font-medium hover:opacity-80" style="color: ${accentColor};">${data.phone}</a>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.additionalInfo ? `
                                    <div class="p-4 rounded-lg shadow-sm" style="background: ${accentColor}10;">
                                        <p class="text-sm">${data.additionalInfo}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
