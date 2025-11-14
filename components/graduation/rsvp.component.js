// RSVP Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can attend the ceremony..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline (Optional)</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email/Phone (Optional)</label>
                <input type="text" placeholder="rsvp@email.com or (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="contact" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered Card</option>
                    <option value="boxed">Boxed Style</option>
                    <option value="minimal">Minimal</option>
                    <option value="bold">Bold CTA</option>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="buttonStyle" oninput="updatePreview()">
                    <option value="solid">Solid</option>
                    <option value="outlined">Outlined</option>
                    <option value="rounded">Rounded Pill</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';
        const buttonStyle = style.buttonStyle || 'solid';

        let deadlineText = '';
        if (data.deadline) {
            const deadlineDate = new Date(data.deadline);
            const formattedDate = deadlineDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            deadlineText = formattedDate;
        }

        const getButtonClasses = (buttonStyle, accent) => {
            switch(buttonStyle) {
                case 'outlined':
                    return `border-2 bg-transparent hover:bg-${accent}10`;
                case 'rounded':
                    return `rounded-full`;
                default:
                    return `rounded-lg`;
            }
        };

        const getButtonStyles = (buttonStyle, accent) => {
            switch(buttonStyle) {
                case 'outlined':
                    return `border-color: ${accent}; color: ${accent}`;
                default:
                    return `background: ${accent}; color: white`;
            }
        };

        switch(layout) {
            case 'boxed':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 border-4" style="border-color: ${accent}">
                            <div class="text-center">
                                <div class="text-5xl mb-4">✉️</div>
                                <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can attend the ceremony"}</p>
                                ${deadlineText ? `
                                    <div class="inline-block px-4 py-2 rounded-lg mb-6" style="background: ${accent}15; color: ${accent}">
                                        <div class="text-xs font-semibold mb-1">RSVP BY</div>
                                        <div class="font-bold">${deadlineText}</div>
                                    </div>
                                ` : ''}
                                <button class="w-full px-8 py-4 font-bold text-lg ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                    RSVP Now
                                </button>
                                ${data.contact ? `
                                    <div class="text-sm text-gray-500 mt-6 pt-6 border-t">
                                        Or contact us: <strong>${data.contact}</strong>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Let us know if you can attend the ceremony"}</p>
                            <div class="flex flex-wrap justify-center gap-4 items-center mb-6">
                                ${deadlineText ? `
                                    <span class="text-sm text-gray-500">Respond by <strong>${deadlineText}</strong></span>
                                ` : ''}
                            </div>
                            <button class="px-8 py-3 font-semibold ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                RSVP Now
                            </button>
                            ${data.contact ? `
                                <div class="text-sm text-gray-500 mt-4">
                                    ${data.contact}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'bold':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-6xl mb-6">✉️</div>
                            <h2 class="text-4xl font-black mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-lg mb-8 opacity-90">${data.message || "Let us know if you can attend the ceremony"}</p>
                            ${deadlineText ? `
                                <div class="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur rounded-lg mb-6">
                                    <div class="text-xs font-semibold mb-1">DEADLINE</div>
                                    <div class="font-bold text-lg">${deadlineText}</div>
                                </div>
                            ` : ''}
                            <div class="mt-6">
                                <button class="px-12 py-4 bg-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition" style="color: ${accent}">
                                    RSVP Now
                                </button>
                            </div>
                            ${data.contact ? `
                                <div class="text-sm mt-6 opacity-75">
                                    ${data.contact}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">✉️</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Let us know if you can attend the ceremony"}</p>
                            ${deadlineText ? `
                                <div class="text-sm text-gray-600 mb-4">
                                    Please respond by <strong>${deadlineText}</strong>
                                </div>
                            ` : ''}
                            <button class="px-8 py-3 font-semibold ${getButtonClasses(buttonStyle, accent)} shadow-md hover:shadow-lg transition mb-4" style="${getButtonStyles(buttonStyle, accent)}">
                                RSVP Now
                            </button>
                            ${data.contact ? `
                                <div class="text-sm text-gray-500 mt-4">
                                    Or contact us at: <strong>${data.contact}</strong>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
