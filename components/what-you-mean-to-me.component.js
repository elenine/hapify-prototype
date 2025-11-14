// What You Mean to Me Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['what-you-mean-to-me'] = {
    name: '🌹 What You Mean to Me',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What You Mean to Me" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="What You Mean to Me" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Heartfelt Message</label>
                <textarea placeholder="You are my everything. You bring light to my darkest days and joy to every moment we share. With you, I've found my home, my peace, and my forever..." rows="12" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Signature (optional)</label>
                <input type="text" placeholder="Forever yours, [Your Name]" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="signature" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="messageStyle" onchange="updatePreview()">
                    <option value="letter">Love Letter</option>
                    <option value="quote">Quote Style</option>
                    <option value="handwritten">Handwritten Note</option>
                    <option value="vintage">Vintage Postcard</option>
                    <option value="modern">Modern Card</option>
                    <option value="scroll">Ancient Scroll</option>
                    <option value="frame">Elegant Frame</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fae8ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#c026d3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const messageStyle = style.messageStyle || 'letter';
        const bgColor = style.bg || '#fae8ff';
        const accentColor = style.accent || '#c026d3';
        const message = data.message || 'Share your heartfelt message here...';
        const title = data.title || 'What You Mean to Me';

        let content = '';

        if (messageStyle === 'letter') {
            content = `
                <div class="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto text-center">
                    <div class="text-5xl mb-6">🌹</div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">${title}</h2>
                    <div class="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-wrap" style="font-family: 'Georgia', serif;">
                        ${message}
                    </div>
                    ${data.signature ? `<p class="text-gray-600 italic mt-8">${data.signature}</p>` : ''}
                </div>
            `;
        } else if (messageStyle === 'quote') {
            content = `
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-6xl mb-4" style="color: ${accentColor}">❝</div>
                    <blockquote class="text-2xl md:text-3xl font-serif italic text-gray-800 leading-relaxed mb-6">
                        ${message}
                    </blockquote>
                    <div class="text-6xl mb-4" style="color: ${accentColor}">❞</div>
                    ${data.signature ? `<p class="text-xl text-gray-600 mt-6">— ${data.signature}</p>` : ''}
                </div>
            `;
        } else if (messageStyle === 'handwritten') {
            content = `
                <div class="max-w-3xl mx-auto relative">
                    <div class="bg-yellow-50 p-10 shadow-xl transform rotate-1" style="font-family: 'Comic Sans MS', cursive; border-radius: 4px;">
                        <!-- Paper lines -->
                        <div class="absolute top-0 left-0 right-0 bottom-0 pointer-events-none" style="background-image: repeating-linear-gradient(transparent, transparent 31px, ${accentColor}15 31px, ${accentColor}15 32px); opacity: 0.4;"></div>

                        <div class="relative z-10">
                            <div class="text-5xl mb-6 text-center">🌹</div>
                            <h2 class="text-2xl font-bold mb-6 text-center" style="color: ${accentColor}">${title}</h2>
                            <div class="text-base leading-loose whitespace-pre-wrap mb-8" style="line-height: 2.5; color: #2d3748;">
                                ${message}
                            </div>
                            ${data.signature ? `<p class="text-right mt-8" style="color: ${accentColor}; text-decoration: underline wavy;">${data.signature}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (messageStyle === 'vintage') {
            content = `
                <div class="max-w-3xl mx-auto">
                    <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 8px solid #8b7355;">
                        <!-- Postcard header -->
                        <div class="p-4 flex items-center justify-between" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);">
                            <div class="text-white text-sm font-bold">POSTCARD FROM THE HEART</div>
                            <div class="text-white text-2xl">💕</div>
                        </div>

                        <div class="p-8" style="background: linear-gradient(to bottom, #fffef7, #faf8f0); font-family: Georgia, serif;">
                            <div class="text-center mb-6">
                                <div class="text-5xl mb-4">🌹</div>
                                <h2 class="text-2xl font-bold mb-2" style="color: ${accentColor}">${title}</h2>
                                <div class="w-32 h-1 mx-auto" style="background: ${accentColor}"></div>
                            </div>

                            <div class="text-base text-gray-800 leading-relaxed whitespace-pre-wrap mb-6">
                                ${message}
                            </div>

                            <div class="flex items-end justify-between mt-8">
                                <div class="text-4xl">💕</div>
                                ${data.signature ? `
                                    <div class="text-right">
                                        <div class="inline-block border-4 border-dashed px-3 py-2 transform rotate-3" style="border-color: ${accentColor};">
                                            <div class="text-sm font-bold" style="color: ${accentColor}">${data.signature}</div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (messageStyle === 'modern') {
            content = `
                <div class="max-w-3xl mx-auto">
                    <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div class="h-4" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="p-10">
                            <div class="flex items-center gap-4 mb-8">
                                <div class="text-6xl">🌹</div>
                                <div class="flex-1">
                                    <h2 class="text-3xl font-bold" style="color: ${accentColor}">${title}</h2>
                                </div>
                            </div>

                            <div class="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap mb-8 border-l-4 pl-6" style="border-color: ${accentColor}40;">
                                ${message}
                            </div>

                            ${data.signature ? `
                                <div class="flex items-center justify-end gap-3 pt-6 border-t-2" style="border-color: ${accentColor}20;">
                                    <div class="text-gray-600">${data.signature}</div>
                                    <div class="text-2xl">💕</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (messageStyle === 'scroll') {
            content = `
                <div class="max-w-3xl mx-auto">
                    <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-10 shadow-2xl relative" style="border: 4px solid ${accentColor}40; font-family: Georgia, serif;">
                        <!-- Decorative corners -->
                        <div class="absolute top-4 left-4 w-10 h-10" style="border-top: 3px solid ${accentColor}; border-left: 3px solid ${accentColor};"></div>
                        <div class="absolute top-4 right-4 w-10 h-10" style="border-top: 3px solid ${accentColor}; border-right: 3px solid ${accentColor};"></div>
                        <div class="absolute bottom-4 left-4 w-10 h-10" style="border-bottom: 3px solid ${accentColor}; border-left: 3px solid ${accentColor};"></div>
                        <div class="absolute bottom-4 right-4 w-10 h-10" style="border-bottom: 3px solid ${accentColor}; border-right: 3px solid ${accentColor};"></div>

                        <div class="text-center mb-8">
                            <div class="text-6xl mb-4">🌹</div>
                            <h2 class="text-3xl font-bold italic mb-4" style="color: ${accentColor}">${title}</h2>
                            <div class="w-40 h-1 mx-auto" style="background: ${accentColor}"></div>
                        </div>

                        <div class="text-lg text-gray-800 leading-loose whitespace-pre-wrap mb-8 text-center">
                            ${message}
                        </div>

                        ${data.signature ? `
                            <div class="text-center">
                                <div class="w-40 h-1 mx-auto mb-4" style="background: ${accentColor}"></div>
                                <p class="text-xl italic" style="color: ${accentColor}">${data.signature}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else if (messageStyle === 'frame') {
            content = `
                <div class="max-w-3xl mx-auto">
                    <div class="relative p-8" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10);">
                        <!-- Ornate frame -->
                        <div class="absolute inset-0" style="border: 12px solid ${accentColor}; border-image: linear-gradient(45deg, ${accentColor}, ${accentColor}dd) 1;"></div>
                        <div class="absolute inset-3 bg-white"></div>

                        <div class="relative z-10 p-8">
                            <div class="text-center mb-8">
                                <div class="text-6xl mb-4">🌹</div>
                                <div class="w-24 h-1 mx-auto mb-4" style="background: ${accentColor}"></div>
                                <h2 class="text-3xl font-bold" style="color: ${accentColor}; font-family: Georgia, serif;">${title}</h2>
                                <div class="w-24 h-1 mx-auto mt-4" style="background: ${accentColor}"></div>
                            </div>

                            <div class="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-8 text-center" style="font-family: Georgia, serif;">
                                ${message}
                            </div>

                            ${data.signature ? `
                                <div class="text-center">
                                    <div class="inline-block px-6 py-2 rounded-full" style="background: ${accentColor}20; color: ${accentColor}; font-weight: bold;">
                                        ${data.signature}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${bgColor}">
                ${content}
            </div>
        `;
    }
};
