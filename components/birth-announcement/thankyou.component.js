// Thank You Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '🙏 Thank You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Title</label>
                <input type="text" placeholder="Thank You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you for all the love and support..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Centered</option>
                    <option value="elegant">Elegant Card</option>
                    <option value="modern">Modern Block</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="bordered">Bordered Box</option>
                    <option value="gradient">Gradient Banner</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#f0fdfa';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🙏</div>
                        <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Thank You'}</h2>
                        <p class="leading-relaxed" style="color: ${textColor}; opacity: 0.8;">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div class="p-8 text-center" style="background: ${accentColor}; color: white;">
                            <div class="text-5xl mb-3">🙏</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Thank You'}</h2>
                        </div>
                        <div class="p-8 text-center" style="color: ${textColor};">
                            <p class="leading-relaxed">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center gap-6 p-8 rounded-xl bg-white shadow-lg">
                            <div class="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl" style="background: ${accentColor}; color: white;">
                                🙏
                            </div>
                            <div class="flex-1" style="color: ${textColor};">
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'Thank You'}</h2>
                                <p class="leading-relaxed text-sm opacity-80">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-20 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="mb-8">
                            <div class="inline-block w-16 h-1 mb-6" style="background: ${accentColor};"></div>
                            <h2 class="text-3xl font-light mb-4" style="color: ${textColor};">${data.title || 'Thank You'}</h2>
                            <div class="inline-block w-16 h-1" style="background: ${accentColor};"></div>
                        </div>
                        <p class="text-lg leading-relaxed" style="color: ${textColor}; opacity: 0.7;">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="border-4 rounded-2xl p-10 text-center bg-white" style="border-color: ${accentColor};">
                            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-3xl" style="background: ${accentColor}; color: white;">
                                🙏
                            </div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor};">${data.title || 'Thank You'}</h2>
                            <p class="leading-relaxed" style="color: ${textColor};">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'gradient') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${bgColor});">
                    <div class="max-w-md mx-auto text-center">
                        <div class="bg-white bg-opacity-95 rounded-2xl p-10 backdrop-blur">
                            <div class="text-5xl mb-4">🙏</div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor};">${data.title || 'Thank You'}</h2>
                            <p class="leading-relaxed" style="color: ${textColor};">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">🙏</div>
                    <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Thank You'}</h2>
                    <p class="leading-relaxed" style="color: ${textColor};">${data.message || 'Thank you for celebrating this special moment with us and for all your love and support.'}</p>
                </div>
            </div>
        `;
    }`
};
