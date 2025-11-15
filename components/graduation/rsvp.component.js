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
                    <option value="card-split">Split Card</option>
                    <option value="gradient-card">Gradient Header Card</option>
                    <option value="invitation">Invitation Style</option>
                    <option value="modern-split">Modern Split</option>
                    <option value="compact">Compact Button</option>
                    <option value="decorative">Decorative Card</option>
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

            case 'card-split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div class="flex flex-col sm:flex-row">
                                    <div class="w-full sm:w-1/3 p-8 flex flex-col items-center justify-center text-white" style="background: ${accent}">
                                        <div class="text-6xl mb-3">✉️</div>
                                        <div class="text-sm font-bold uppercase tracking-wide">RSVP</div>
                                    </div>
                                    <div class="flex-1 p-8">
                                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can attend the ceremony"}</p>
                                        ${deadlineText ? `
                                            <div class="inline-block px-4 py-2 rounded-lg mb-6" style="background: ${accent}10; color: ${accent}">
                                                <div class="text-xs font-bold mb-1">Deadline</div>
                                                <div class="font-semibold">${deadlineText}</div>
                                            </div>
                                        ` : ''}
                                        <button class="w-full px-6 py-3 font-bold ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                            RSVP Now
                                        </button>
                                        ${data.contact ? `
                                            <div class="text-sm text-gray-500 mt-4">
                                                Contact: <strong>${data.contact}</strong>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient-card':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div class="p-8 text-center text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)">
                                    <div class="text-5xl mb-3">✉️</div>
                                    <h2 class="text-3xl font-bold mb-2">${data.title || 'Please RSVP'}</h2>
                                    ${deadlineText ? `
                                        <div class="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur rounded-full">
                                            <span class="text-sm font-semibold">Respond by ${deadlineText}</span>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="p-8 text-center">
                                    <p class="text-gray-600 mb-6">${data.message || "Let us know if you can attend the ceremony"}</p>
                                    <button class="px-10 py-4 font-bold text-lg ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                        RSVP Now
                                    </button>
                                    ${data.contact ? `
                                        <div class="text-sm text-gray-500 mt-6 pt-6 border-t">
                                            ${data.contact}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'invitation':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white rounded-lg shadow-2xl p-10 border-8 border-double" style="border-color: ${accent}">
                                <div class="text-center">
                                    <div class="mb-4">
                                        <div class="inline-block w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accent}20">
                                            ✉️
                                        </div>
                                    </div>
                                    <div class="mb-6">
                                        <div class="h-px w-32 mx-auto mb-4" style="background: ${accent}"></div>
                                        <h2 class="text-3xl font-serif font-bold mb-2" style="color: ${accent}">${data.title || 'Please RSVP'}</h2>
                                        <div class="h-px w-32 mx-auto mt-4" style="background: ${accent}"></div>
                                    </div>
                                    <p class="text-gray-700 mb-8 font-serif italic">${data.message || "Let us know if you can attend the ceremony"}</p>
                                    ${deadlineText ? `
                                        <div class="mb-6">
                                            <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Kindly Respond By</div>
                                            <div class="font-bold" style="color: ${accent}">${deadlineText}</div>
                                        </div>
                                    ` : ''}
                                    <button class="px-8 py-3 font-bold ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                        RSVP Now
                                    </button>
                                    ${data.contact ? `
                                        <div class="text-xs text-gray-500 mt-8">
                                            ${data.contact}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'modern-split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div class="grid sm:grid-cols-2">
                                    <div class="p-10 order-2 sm:order-1">
                                        <div class="mb-6">
                                            <div class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style="background: ${accent}20; color: ${accent}">
                                                ✉️ RSVP Required
                                            </div>
                                            <h2 class="text-3xl font-bold mb-3">${data.title || 'Please RSVP'}</h2>
                                            <p class="text-gray-600">${data.message || "Let us know if you can attend the ceremony"}</p>
                                        </div>
                                        ${deadlineText ? `
                                            <div class="mb-6 p-4 rounded-xl" style="background: ${accent}05">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">⏰ Deadline</div>
                                                <div class="font-bold text-lg">${deadlineText}</div>
                                            </div>
                                        ` : ''}
                                        <button class="w-full px-6 py-4 font-bold text-lg ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                            RSVP Now
                                        </button>
                                        ${data.contact ? `
                                            <div class="text-sm text-gray-500 mt-4">
                                                ${data.contact}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="min-h-64 sm:min-h-full order-1 sm:order-2 flex items-center justify-center p-10 text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)">
                                        <div class="text-center">
                                            <div class="text-8xl mb-4">✉️</div>
                                            <div class="text-2xl font-bold">We'd Love to See You!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accent}20">
                                        ✉️
                                    </div>
                                    <div class="flex-1">
                                        <h2 class="text-xl font-bold mb-1">${data.title || 'Please RSVP'}</h2>
                                        <p class="text-sm text-gray-600">${data.message || "Let us know if you can attend"}</p>
                                        ${deadlineText ? `<div class="text-xs font-semibold mt-1" style="color: ${accent}">Respond by ${deadlineText}</div>` : ''}
                                    </div>
                                    <div class="flex-shrink-0">
                                        <button class="px-6 py-3 font-bold ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                            RSVP
                                        </button>
                                    </div>
                                </div>
                                ${data.contact ? `
                                    <div class="text-xs text-gray-500 mt-4 pt-4 border-t text-center">
                                        ${data.contact}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'decorative':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
                                <div class="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10" style="background: ${accent}; transform: translate(-50%, -50%)"></div>
                                <div class="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10" style="background: ${accent}; transform: translate(50%, 50%)"></div>
                                <div class="relative z-10 text-center">
                                    <div class="inline-block mb-4">
                                        <div class="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-4 mx-auto" style="border-color: ${accent}; background: ${accent}10">
                                            ✉️
                                        </div>
                                    </div>
                                    <div class="mb-6">
                                        <div class="flex items-center justify-center gap-2 mb-3">
                                            <div class="h-px w-12" style="background: ${accent}"></div>
                                            <span class="text-2xl">❋</span>
                                            <div class="h-px w-12" style="background: ${accent}"></div>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-3" style="color: ${accent}">${data.title || 'Please RSVP'}</h2>
                                        <div class="flex items-center justify-center gap-2">
                                            <div class="h-px w-12" style="background: ${accent}"></div>
                                            <span class="text-2xl">❋</span>
                                            <div class="h-px w-12" style="background: ${accent}"></div>
                                        </div>
                                    </div>
                                    <p class="text-gray-700 mb-6 text-lg">${data.message || "Let us know if you can attend the ceremony"}</p>
                                    ${deadlineText ? `
                                        <div class="inline-block px-6 py-3 rounded-full mb-6 border-2" style="border-color: ${accent}; background: ${accent}05">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Please Respond By</div>
                                            <div class="font-bold text-lg">${deadlineText}</div>
                                        </div>
                                    ` : ''}
                                    <div class="mb-6">
                                        <button class="px-10 py-4 font-bold text-lg ${getButtonClasses(buttonStyle, accent)}" style="${getButtonStyles(buttonStyle, accent)}">
                                            RSVP Now
                                        </button>
                                    </div>
                                    ${data.contact ? `
                                        <div class="text-sm text-gray-500 pt-6 border-t">
                                            ${data.contact}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
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
