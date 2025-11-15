// Family Message Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '💌 Family Message',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Title</label>
                <input type="text" placeholder="A Message from Our Hearts" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Share your feelings and gratitude..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Centered</option>
                    <option value="card">Card Style</option>
                    <option value="quote">Quote Block</option>
                    <option value="letter">Letter Style</option>
                    <option value="minimal">Minimal</option>
                    <option value="framed">Framed Message</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Accent Color</label>
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
                        <div class="text-5xl mb-4">💌</div>
                        <h2 class="text-2xl font-bold mb-6" style="color: ${textColor};">${data.title || 'A Message from Our Hearts'}</h2>
                        <p class="leading-relaxed" style="color: ${textColor}; opacity: 0.8;">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white rounded-2xl shadow-xl p-8 text-center">
                            <div class="text-4xl mb-4">💌</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor};">${data.title || 'A Message from Our Hearts'}</h2>
                            <p class="leading-relaxed" style="color: ${textColor};">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'quote') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="border-l-4 pl-6" style="border-color: ${accentColor};">
                            <div class="text-6xl mb-4" style="color: ${accentColor};">"</div>
                            <h3 class="text-xl font-bold mb-4" style="color: ${textColor};">${data.title || 'A Message from Our Hearts'}</h3>
                            <p class="text-lg italic leading-relaxed mb-4" style="color: ${textColor}; opacity: 0.9;">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                            <div class="text-6xl text-right" style="color: ${accentColor};">"</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'letter') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8" style="border-top: 4px solid ${accentColor};">
                        <div class="mb-6 text-right">
                            <div class="text-3xl">💌</div>
                        </div>
                        <h2 class="text-2xl font-serif mb-6" style="color: ${accentColor};">${data.title || 'A Message from Our Hearts'}</h2>
                        <p class="leading-loose mb-6 font-serif" style="color: ${textColor};">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                        <div class="text-right mt-8">
                            <div class="inline-block border-t pt-2" style="border-color: ${accentColor};">
                                <span class="text-sm italic" style="color: ${textColor}; opacity: 0.7;">With love</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-20 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <p class="text-sm uppercase tracking-widest mb-6" style="color: ${accentColor};">${data.title || 'A Message from Our Hearts'}</p>
                        <p class="text-xl font-light leading-relaxed" style="color: ${textColor};">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'framed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="border-4 rounded-xl p-8 text-center" style="border-color: ${accentColor}; background: white;">
                            <div class="mb-4">
                                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl" style="background: ${accentColor}; color: white;">💌</div>
                            </div>
                            <h2 class="text-2xl font-bold mb-6" style="color: ${accentColor};">${data.title || 'A Message from Our Hearts'}</h2>
                            <div class="h-1 w-20 mx-auto mb-6" style="background: ${accentColor};"></div>
                            <p class="leading-relaxed" style="color: ${textColor};">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">💌</div>
                    <h2 class="text-2xl font-bold mb-6" style="color: ${textColor};">${data.title || 'A Message from Our Hearts'}</h2>
                    <p class="leading-relaxed" style="color: ${textColor};">${data.message || 'We are overjoyed to welcome our little one into the world and grateful for all the love and support.'}</p>
                </div>
            </div>
        `;
    }`
};
