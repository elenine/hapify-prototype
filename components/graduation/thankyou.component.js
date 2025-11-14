// Thank You Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '🙏 Thank You',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you for supporting me throughout this journey..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing</label>
                <input type="text" placeholder="With gratitude," class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered Card</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="gradient">Warm Gradient</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#6366f1';

        switch(layout) {
            case 'elegant':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white rounded-3xl p-10 shadow-xl border-4" style="border-color: ${accent}">
                                <div class="inline-block p-4 rounded-full mb-6" style="background: ${accent}15">
                                    <span class="text-5xl">🙏</span>
                                </div>
                                <div class="w-20 h-1 rounded mx-auto mb-6" style="background: ${accent}"></div>
                                <h2 class="text-3xl font-bold mb-6" style="color: ${accent}">Thank You</h2>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">${data.message || 'Thank you for your support throughout my academic journey.'}</p>
                                ${data.closing ? `
                                    <div class="pt-6 border-t border-gray-200">
                                        <p class="text-gray-600 italic font-medium">${data.closing}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-6xl mb-6">🙏</div>
                            <h2 class="text-4xl font-black mb-6">Thank You</h2>
                            <p class="text-lg leading-relaxed mb-8 opacity-95">${data.message || 'Thank you for your support throughout my academic journey.'}</p>
                            ${data.closing ? `
                                <div class="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur rounded-full">
                                    <p class="italic font-medium">${data.closing}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-xl mx-auto text-center">
                            <div class="text-4xl mb-4">🙏</div>
                            <h2 class="text-2xl font-bold mb-6" style="color: ${accent}">Thank You</h2>
                            <p class="text-gray-700 text-lg leading-relaxed mb-4">${data.message || 'Thank you for your support throughout my academic journey.'}</p>
                            ${data.closing ? `<p class="text-gray-500 italic">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🙏</div>
                            <h2 class="text-2xl font-bold mb-6" style="color: ${accent}">Thank You</h2>
                            <p class="text-gray-700 text-lg mb-6">${data.message || 'Thank you for your support throughout my academic journey.'}</p>
                            ${data.closing ? `<p class="text-gray-600 italic">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
