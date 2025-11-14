// Contact Info Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="graduate@email.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="(555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea placeholder="RSVP or other contact information..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="modern">Modern Icons</option>
                    <option value="minimal">Minimal List</option>
                    <option value="bold">Bold Banner</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';

        switch(layout) {
            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Get In Touch</h2>
                            <div class="grid sm:grid-cols-2 gap-6">
                                ${data.email ? `
                                <div class="text-center p-6 bg-white rounded-2xl shadow-md">
                                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style="background: ${accent}15">
                                        📧
                                    </div>
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent}">EMAIL</div>
                                    <div class="font-medium break-all">${data.email}</div>
                                </div>` : ''}
                                ${data.phone ? `
                                <div class="text-center p-6 bg-white rounded-2xl shadow-md">
                                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style="background: ${accent}15">
                                        📞
                                    </div>
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent}">PHONE</div>
                                    <div class="font-medium">${data.phone}</div>
                                </div>` : ''}
                            </div>
                            ${data.info ? `
                                <div class="mt-6 p-6 bg-white rounded-2xl shadow-md text-center">
                                    <p class="text-sm text-gray-600">${data.info}</p>
                                </div>` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Contact Information</h2>
                            <div class="space-y-3">
                                ${data.email ? `
                                <div class="flex items-center gap-3 p-4 border-l-4" style="border-color: ${accent}; background: ${accent}05">
                                    <span class="text-xl">📧</span>
                                    <div>
                                        <div class="text-xs mb-1" style="color: ${accent}">Email</div>
                                        <div class="font-medium break-all">${data.email}</div>
                                    </div>
                                </div>` : ''}
                                ${data.phone ? `
                                <div class="flex items-center gap-3 p-4 border-l-4" style="border-color: ${accent}; background: ${accent}05">
                                    <span class="text-xl">📞</span>
                                    <div>
                                        <div class="text-xs mb-1" style="color: ${accent}">Phone</div>
                                        <div class="font-medium">${data.phone}</div>
                                    </div>
                                </div>` : ''}
                                ${data.info ? `
                                <div class="p-4 text-center border-l-4" style="border-color: ${accent}; background: ${accent}05">
                                    <p class="text-sm text-gray-600">${data.info}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'bold':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${accent}; color: white">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-3xl font-bold mb-4">Questions? Get In Touch!</h2>
                            <p class="text-lg opacity-90 mb-8">We'd love to hear from you</p>
                            <div class="flex flex-wrap justify-center gap-6">
                                ${data.email ? `
                                <div class="px-8 py-4 bg-white bg-opacity-20 backdrop-blur rounded-xl">
                                    <div class="text-3xl mb-2">📧</div>
                                    <div class="text-xs mb-1 opacity-75">Email</div>
                                    <div class="font-bold">${data.email}</div>
                                </div>` : ''}
                                ${data.phone ? `
                                <div class="px-8 py-4 bg-white bg-opacity-20 backdrop-blur rounded-xl">
                                    <div class="text-3xl mb-2">📞</div>
                                    <div class="text-xs mb-1 opacity-75">Phone</div>
                                    <div class="font-bold">${data.phone}</div>
                                </div>` : ''}
                            </div>
                            ${data.info ? `
                                <div class="mt-8 p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl max-w-lg mx-auto">
                                    <p class="text-sm">${data.info}</p>
                                </div>` : ''}
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Contact Information</h2>
                            <div class="space-y-4">
                                ${data.email ? `
                                <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                                    <div class="text-2xl">📧</div>
                                    <div>
                                        <div class="text-xs mb-1" style="color: ${accent}">Email</div>
                                        <div class="font-medium break-all">${data.email}</div>
                                    </div>
                                </div>` : ''}
                                ${data.phone ? `
                                <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                                    <div class="text-2xl">📞</div>
                                    <div>
                                        <div class="text-xs mb-1" style="color: ${accent}">Phone</div>
                                        <div class="font-medium">${data.phone}</div>
                                    </div>
                                </div>` : ''}
                                ${data.info ? `
                                <div class="p-4 bg-white rounded-lg shadow-sm text-center">
                                    <p class="text-sm text-gray-600">${data.info}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }`
};
