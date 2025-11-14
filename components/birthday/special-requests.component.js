// Special Requests Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.specialrequests = {
    name: '📋 Special Requests',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Important Information, Please Note"
                       value="Important Information"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Allergies & Dietary</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="allergies"
                          rows="3"
                          placeholder="Please inform us of any allergies or dietary restrictions..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="parking"
                          rows="2"
                          placeholder="Free parking available in lot A. Street parking also available."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accessibility</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="accessibility"
                          rows="2"
                          placeholder="Wheelchair accessible, elevator available, etc."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Weather Considerations</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="weather"
                          rows="2"
                          placeholder="Outdoor event - please dress accordingly. Backup indoor location available."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Plus Ones</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="plusOnes"
                          rows="2"
                          placeholder="e.g., Feel free to bring a plus one, Adults only event, etc."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photography</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="photography"
                          rows="2"
                          placeholder="e.g., Professional photographer will be present, Feel free to take photos"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Other Requests</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="other"
                          rows="3"
                          placeholder="Any other important information guests should know..."
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
                       value="#fef3c7"
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
                       value="#f59e0b"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="cards" selected>Cards</option>
                    <option value="list">List</option>
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
        const bgColor = style.bgColor || '#fef3c7';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#f59e0b';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'cards';

        // Collect all non-empty requests
        const requests = [
            { icon: '🚫', label: 'Allergies & Dietary', value: data.allergies },
            { icon: '🅿️', label: 'Parking', value: data.parking },
            { icon: '♿', label: 'Accessibility', value: data.accessibility },
            { icon: '🌤️', label: 'Weather', value: data.weather },
            { icon: '👥', label: 'Plus Ones', value: data.plusOnes },
            { icon: '📸', label: 'Photography', value: data.photography },
            { icon: '📌', label: 'Other Information', value: data.other }
        ].filter(req => req.value);

        if (requests.length === 0) {
            return '';
        }

        let requestsHtml = '';

        if (layoutStyle === 'cards') {
            requestsHtml = `
                <div class="grid sm:grid-cols-2 gap-6">
                    ${requests.map(req => `
                        <div class="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition">
                            <div class="flex items-start gap-3">
                                <span class="text-3xl flex-shrink-0">${req.icon}</span>
                                <div class="flex-1">
                                    <h3 class="font-bold mb-2" style="color: ${accentColor};">
                                        ${req.label}
                                    </h3>
                                    <p class="text-sm whitespace-pre-line">${req.value}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'list') {
            requestsHtml = `
                <div class="space-y-4">
                    ${requests.map(req => `
                        <div class="bg-white bg-opacity-70 rounded-lg p-4">
                            <div class="flex items-start gap-3">
                                <span class="text-2xl flex-shrink-0">${req.icon}</span>
                                <div class="flex-1">
                                    <h3 class="font-semibold mb-1" style="color: ${accentColor};">
                                        ${req.label}
                                    </h3>
                                    <p class="whitespace-pre-line">${req.value}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else { // compact
            requestsHtml = `
                <div class="bg-white rounded-lg p-6 space-y-4">
                    ${requests.map(req => `
                        <div class="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <h3 class="font-semibold mb-2 flex items-center gap-2" style="color: ${accentColor};">
                                <span>${req.icon}</span> ${req.label}
                            </h3>
                            <p class="text-sm whitespace-pre-line pl-7">${req.value}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">📋</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Important Information'}
                        </h2>
                        <p class="text-sm italic mt-2">Please read the following information</p>
                    </div>

                    ${requestsHtml}
                </div>
            </div>
        `;
    }
};
