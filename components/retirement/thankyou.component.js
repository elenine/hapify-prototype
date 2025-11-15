// Thank You Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '🙏 Thank You',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you for being part of this journey..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Note</label>
                <input type="text" placeholder="With gratitude," class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="heartfelt">Heartfelt Message</option>
                    <option value="elegant">Elegant Formal</option>
                    <option value="warm">Warm & Personal</option>
                    <option value="minimal">Minimal Modern</option>
                    <option value="framed">Framed Card</option>
                    <option value="handwritten">Handwritten Note</option>
                    <option value="signature">Signature Style</option>
                    <option value="banner">Banner Message</option>
                    <option value="quote">Quotation Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        switch(layout) {
            case 'centered':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🙏</div>
                            <h2 class="text-2xl font-bold mb-6">Thank You</h2>
                            <p class="text-lg mb-6 leading-relaxed">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                            ${data.closing ? `<p class="italic opacity-80">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'heartfelt':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor}20 100%); color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="mb-6">
                                <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}30;">
                                    <span class="text-5xl">🙏</span>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor};">Thank You</h2>
                            <div class="bg-white rounded-xl shadow-xl p-6">
                                <p class="text-lg leading-relaxed mb-4">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                                ${data.closing ? `<p class="font-serif italic text-base" style="color: ${accentColor};">${data.closing}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif mb-3">With Deepest Gratitude</h2>
                                <div class="w-24 h-0.5 mx-auto" style="background: ${accentColor};"></div>
                            </div>
                            <div class="text-4xl mb-6">🙏</div>
                            <p class="text-base font-serif italic mb-6 leading-relaxed">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                            ${data.closing ? `<p class="text-sm font-medium tracking-wide" style="color: ${accentColor};">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'warm':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-lg p-8" style="border-top: 4px solid ${accentColor};">
                                <div class="text-center mb-6">
                                    <span class="text-5xl">🙏</span>
                                    <h2 class="text-2xl font-bold mt-4 mb-2">Thank You</h2>
                                    <div class="w-16 h-1 rounded-full mx-auto" style="background: ${accentColor};"></div>
                                </div>
                                <p class="text-base leading-relaxed text-center mb-4">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                                ${data.closing ? `
                                <div class="text-center mt-6 pt-4 border-t" style="border-color: ${accentColor}20;">
                                    <p class="text-sm font-medium italic" style="color: ${accentColor};">${data.closing}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-6">
                                <span class="text-4xl">🙏</span>
                            </div>
                            <h2 class="text-2xl font-light mb-2">Thank You</h2>
                            <div class="w-12 h-0.5 mx-auto mb-8" style="background: ${accentColor};"></div>
                            <p class="text-base leading-relaxed mb-6 max-w-sm mx-auto">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                            ${data.closing ? `<p class="text-sm opacity-70">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'framed':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="border-4 rounded-2xl p-8 text-center bg-white" style="border-color: ${accentColor};">
                                <div class="text-5xl mb-4">🙏</div>
                                <h2 class="text-2xl font-bold mb-2" style="color: ${accentColor};">Thank You</h2>
                                <div class="flex justify-center gap-2 mb-6">
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <div class="p-4 rounded-lg mb-4" style="background: ${accentColor}10;">
                                    <p class="text-base leading-relaxed">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                                </div>
                                ${data.closing ? `<p class="text-sm font-medium italic" style="color: ${accentColor};">${data.closing}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🙏</div>
                            <h2 class="text-2xl font-bold mb-6">Thank You</h2>
                            <p class="text-lg mb-6 leading-relaxed">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                            ${data.closing ? `<p class="italic opacity-80">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
