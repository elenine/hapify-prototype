// Contact Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Information',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Get in Touch" value="Get in Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="sectionTitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="contact@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url" placeholder="https://example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="website" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Social Media Links (Optional)</label>
                <input type="text" placeholder="LinkedIn Profile URL" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 mb-2 section-data" data-field="linkedin" oninput="updatePreview()">
                <input type="text" placeholder="Twitter Profile URL" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="twitter" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}; color: ${style.text || '#1f2937'}">
            <div class="max-w-2xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8" style="color: ${style.accent || '#a855f7'}">${data.sectionTitle || 'Get in Touch'}</h2>
                <div class="bg-gray-50 rounded-lg p-6 space-y-4">
                    ${data.email ? `
                        <div class="flex items-center gap-3">
                            <div class="text-2xl">📧</div>
                            <a href="mailto:${data.email}" class="text-lg hover:underline" style="color: ${style.accent || '#a855f7'}">${data.email}</a>
                        </div>
                    ` : ''}
                    ${data.phone ? `
                        <div class="flex items-center gap-3">
                            <div class="text-2xl">📞</div>
                            <a href="tel:${data.phone}" class="text-lg hover:underline" style="color: ${style.accent || '#a855f7'}">${data.phone}</a>
                        </div>
                    ` : ''}
                    ${data.website ? `
                        <div class="flex items-center gap-3">
                            <div class="text-2xl">🌐</div>
                            <a href="${data.website}" target="_blank" class="text-lg hover:underline" style="color: ${style.accent || '#a855f7'}">${data.website}</a>
                        </div>
                    ` : ''}
                    ${data.linkedin || data.twitter ? `
                        <div class="flex gap-4 pt-4 border-t">
                            ${data.linkedin ? `<a href="${data.linkedin}" target="_blank" class="text-2xl hover:scale-110 transition">💼</a>` : ''}
                            ${data.twitter ? `<a href="${data.twitter}" target="_blank" class="text-2xl hover:scale-110 transition">🐦</a>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
