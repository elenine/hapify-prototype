// Contact Information Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Info',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="title"
                    placeholder="Get in Touch"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="message"
                    rows="2"
                    placeholder="We'd love to hear from you!"
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="email"
                    placeholder="email@example.com"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="phone"
                    placeholder="(555) 123-4567"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="address"
                    rows="2"
                    placeholder="123 Main St\nCity, State 12345"
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="website"
                    placeholder="https://www.example.com"
                    oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="bgColor"
                    value="#f3f4f6"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#1f2937"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#f3f4f6';
        const textColor = style.textColor || '#1f2937';
        const textAlign = style.textAlign || 'center';
        const title = data.title || 'Get in Touch';
        const message = data.message || '';
        const email = data.email || '';
        const phone = data.phone || '';
        const address = data.address || '';
        const website = data.website || '';

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">📞 ${title}</h2>
                    ${message ? `<p style="margin-bottom: 32px; line-height: 1.6;">${message}</p>` : ''}

                    <div style="display: grid; gap: 20px; text-align: left;">
                        ${email ? `
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="font-size: 24px;">✉️</div>
                                <div>
                                    <div style="font-weight: 600; font-size: 12px; opacity: 0.7; margin-bottom: 4px;">EMAIL</div>
                                    <a href="mailto:${email}" style="color: ${textColor}; text-decoration: none;">${email}</a>
                                </div>
                            </div>
                        ` : ''}

                        ${phone ? `
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="font-size: 24px;">📱</div>
                                <div>
                                    <div style="font-weight: 600; font-size: 12px; opacity: 0.7; margin-bottom: 4px;">PHONE</div>
                                    <a href="tel:${phone}" style="color: ${textColor}; text-decoration: none;">${phone}</a>
                                </div>
                            </div>
                        ` : ''}

                        ${address ? `
                            <div style="display: flex; align-items: start; gap: 12px;">
                                <div style="font-size: 24px;">📍</div>
                                <div>
                                    <div style="font-weight: 600; font-size: 12px; opacity: 0.7; margin-bottom: 4px;">ADDRESS</div>
                                    <div style="white-space: pre-line;">${address}</div>
                                </div>
                            </div>
                        ` : ''}

                        ${website ? `
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="font-size: 24px;">🌐</div>
                                <div>
                                    <div style="font-weight: 600; font-size: 12px; opacity: 0.7; margin-bottom: 4px;">WEBSITE</div>
                                    <a href="${website}" target="_blank" style="color: ${textColor}; text-decoration: none;">${website}</a>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
