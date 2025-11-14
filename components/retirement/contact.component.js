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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Contact Us'}</h2>
                <div class="space-y-4">
                    ${data.organizerName ? `
                        <div class="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                            <div class="text-2xl">👤</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Organizer</div>
                                <div class="font-medium">${data.organizerName}</div>
                            </div>
                        </div>
                    ` : ''}
                    ${data.email ? `
                        <div class="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                            <div class="text-2xl">📧</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Email</div>
                                <a href="mailto:${data.email}" class="font-medium text-cyan-600 hover:text-cyan-700">${data.email}</a>
                            </div>
                        </div>
                    ` : ''}
                    ${data.phone ? `
                        <div class="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                            <div class="text-2xl">📱</div>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Phone</div>
                                <a href="tel:${data.phone}" class="font-medium text-cyan-600 hover:text-cyan-700">${data.phone}</a>
                            </div>
                        </div>
                    ` : ''}
                    ${data.additionalInfo ? `
                        <div class="p-4 bg-cyan-50 rounded-lg">
                            <p class="text-gray-700 text-sm">${data.additionalInfo}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
