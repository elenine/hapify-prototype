// Thank You Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '🙏 Thank You',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you for celebrating with us..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Note</label>
                <input type="text" placeholder="With love," class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="elegant">Elegant - Decorative</option>
                    <option value="heartfelt">Heartfelt - Warm</option>
                    <option value="minimal">Minimal - Simple</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const accentColor = style.accentColor || '#dc2626';
        const bg = style.bg || '#fef2f2';

        if (layout === 'centered') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🙏</div>
                        <h2 class="text-2xl font-bold mb-6">Thank You</h2>
                        <p class="text-gray-700 text-lg mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-600 italic">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${accentColor}33">
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                            <div class="text-5xl">🙏</div>
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                        </div>
                        <h2 class="text-3xl font-light mb-8 tracking-wide">Thank You</h2>
                        <p class="text-gray-600 font-light leading-relaxed mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-500 italic font-light">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'heartfelt') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${bg}dd 100%);">
                    <div class="absolute top-4 right-4 text-6xl opacity-10">💕</div>
                    <div class="absolute bottom-4 left-4 text-6xl opacity-10">💕</div>
                    <div class="max-w-md mx-auto text-center relative z-10">
                        <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}22">
                            <div class="text-4xl">🙏</div>
                        </div>
                        <h2 class="text-2xl font-bold mb-6">Thank You</h2>
                        <p class="text-gray-700 text-lg mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-600 italic font-medium">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-lg mx-auto text-center">
                        <h2 class="text-3xl font-light mb-8" style="color: ${accentColor}">Thank You</h2>
                        <p class="text-gray-600 text-lg font-light leading-relaxed mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-500 text-sm tracking-wide">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">🙏</div>
                    <h2 class="text-2xl font-bold mb-6">Thank You</h2>
                    <p class="text-gray-700 text-lg mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                    ${data.closing ? `<p class="text-gray-600 italic">${data.closing}</p>` : ''}
                </div>
            </div>
        `;
    }
};
