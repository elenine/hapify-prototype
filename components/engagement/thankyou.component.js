// Thank You Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '💝 Thank You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Thank You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Thank you for celebrating this special moment with us..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing</label>
                <input type="text" placeholder="With love, Sarah & John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="elegant">Elegant Card</option>
                    <option value="hearts">Hearts Background</option>
                    <option value="gradient">Gradient Banner</option>
                    <option value="minimal">Minimal Signature</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#ec4899';
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'elegant') {
            return `
                <div class="py-20 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-12 rounded-3xl shadow-2xl" style="background: ${cardBg};">
                            <div class="text-center">
                                <div class="inline-block p-6 rounded-full shadow-xl mb-6" style="background: ${accent}20;">
                                    <span class="text-7xl">💝</span>
                                </div>
                                <h2 class="text-4xl font-bold mb-6">${data.title || 'Thank You'}</h2>
                                ${data.message ? `
                                    <p class="text-xl text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto">${data.message}</p>
                                ` : ''}
                                ${data.closing ? `
                                    <div class="mt-10 pt-8 border-t" style="border-color: ${accent}20;">
                                        <div class="text-2xl font-bold" style="color: ${accent};">${data.closing}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'hearts') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: ${bg}; color: ${textColor};">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-10 left-10 text-8xl">💝</div>
                        <div class="absolute top-20 right-20 text-6xl">💕</div>
                        <div class="absolute bottom-20 left-1/4 text-7xl">💗</div>
                        <div class="absolute bottom-10 right-10 text-5xl">💖</div>
                        <div class="absolute top-1/3 right-1/3 text-4xl">💘</div>
                    </div>
                    <div class="relative max-w-2xl mx-auto text-center">
                        <div class="text-7xl mb-8">💝</div>
                        <h2 class="text-5xl font-bold mb-8">${data.title || 'Thank You'}</h2>
                        ${data.message ? `
                            <div class="p-8 bg-white bg-opacity-90 rounded-2xl shadow-2xl mb-8">
                                <p class="text-xl text-gray-700 leading-relaxed">${data.message}</p>
                            </div>
                        ` : ''}
                        ${data.closing ? `
                            <div class="text-3xl font-bold" style="color: ${accent};">${data.closing}</div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'gradient') {
            return `
                <div class="py-20 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="p-16 rounded-3xl shadow-2xl text-center text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}60 100%);">
                            <div class="text-8xl mb-8">💝</div>
                            <h2 class="text-5xl font-bold mb-8">${data.title || 'Thank You'}</h2>
                            ${data.message ? `
                                <p class="text-2xl leading-relaxed mb-10 opacity-95 max-w-2xl mx-auto">${data.message}</p>
                            ` : ''}
                            ${data.closing ? `
                                <div class="inline-block px-10 py-4 bg-white rounded-full shadow-2xl" style="color: ${accent};">
                                    <div class="text-2xl font-bold">${data.closing}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-20 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-6xl mb-8">💝</div>
                        <h2 class="text-4xl font-bold mb-8">${data.title || 'Thank You'}</h2>
                        ${data.message ? `
                            <p class="text-lg text-gray-700 leading-relaxed mb-10">${data.message}</p>
                        ` : ''}
                        ${data.closing ? `
                            <div class="relative inline-block">
                                <div class="text-2xl font-bold italic" style="color: ${accent}; font-family: 'Brush Script MT', cursive;">${data.closing}</div>
                                <div class="mt-2 h-0.5 w-full" style="background: ${accent};"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="text-6xl mb-6">💝</div>
                        <h2 class="text-3xl font-bold mb-6">${data.title || 'Thank You'}</h2>
                        ${data.message ? `
                            <p class="text-lg text-gray-700 leading-relaxed mb-8">${data.message}</p>
                        ` : ''}
                        ${data.closing ? `
                            <div class="text-xl font-semibold" style="color: ${accent};">${data.closing}</div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    }
};
