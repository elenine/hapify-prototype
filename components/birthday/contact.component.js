// Contact Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Info',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Contact Us, Questions?"
                       value="Questions?"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="description"
                          rows="2"
                          placeholder="Feel free to reach out if you have any questions!"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Person Name</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="contactName"
                       placeholder="e.g., Sarah Johnson"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="phone"
                       placeholder="e.g., (555) 123-4567"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="email"
                       placeholder="e.g., sarah@example.com"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number (Optional)</label>
                <input type="tel"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="whatsapp"
                       placeholder="e.g., +1 555 123 4567"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="additionalInfo"
                          rows="2"
                          placeholder="Best time to call, preferred contact method, etc."
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#eff6ff"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#3b82f6"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="centered" selected>Centered</option>
                    <option value="card">Card Style</option>
                    <option value="compact">Compact</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#eff6ff';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#3b82f6';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'centered';

        if (!data.contactName && !data.phone && !data.email) {
            return '';
        }

        let contentHtml = '';
        const contactItems = [
            { icon: '👤', label: 'Contact', value: data.contactName },
            { icon: '📱', label: 'Phone', value: data.phone },
            { icon: '📧', label: 'Email', value: data.email },
            { icon: '💬', label: 'WhatsApp', value: data.whatsapp }
        ].filter(item => item.value);

        if (layoutStyle === 'centered') {
            contentHtml = `
                <div class="text-center space-y-4">
                    ${contactItems.map(item => `
                        <div class="flex items-center justify-center gap-3">
                            <span class="text-2xl">${item.icon}</span>
                            <div class="text-left">
                                <div class="text-sm text-gray-600">${item.label}</div>
                                <div class="font-medium text-lg">${item.value}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'card') {
            contentHtml = `
                <div class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                    <div class="space-y-4">
                        ${contactItems.map(item => `
                            <div class="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                <span class="text-2xl">${item.icon}</span>
                                <div class="flex-1">
                                    <div class="text-sm text-gray-600">${item.label}</div>
                                    <div class="font-medium">${item.value}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else { // compact
            contentHtml = `
                <div class="grid sm:grid-cols-2 gap-4">
                    ${contactItems.map(item => `
                        <div class="bg-white bg-opacity-70 rounded-lg p-4 text-center">
                            <div class="text-2xl mb-2">${item.icon}</div>
                            <div class="text-xs text-gray-600 mb-1">${item.label}</div>
                            <div class="font-medium">${item.value}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">📞</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Questions?'}
                        </h2>
                        ${data.description ? `
                            <p class="text-lg mt-3">${data.description}</p>
                        ` : ''}
                    </div>

                    ${contentHtml}

                    ${data.additionalInfo ? `
                        <div class="mt-6 text-center">
                            <p class="text-sm italic bg-white bg-opacity-50 rounded-lg p-3">
                                💡 ${data.additionalInfo}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
