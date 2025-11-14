// Love Letter Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-letter'] = {
    name: '💌 Love Letter',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="from" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input type="text" placeholder="Their Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="to" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea placeholder="Write your heartfelt message..." rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Letter Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="letterStyle" onchange="updatePreview()">
                    <option value="classic">Classic Letter</option>
                    <option value="modern">Modern Card</option>
                    <option value="elegant">Elegant Scroll</option>
                    <option value="vintage">Vintage Postcard</option>
                    <option value="handwritten">Handwritten Note</option>
                    <option value="envelope">Envelope Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="fontStyle" onchange="updatePreview()">
                    <option value="modern">Modern Sans</option>
                    <option value="serif">Classic Serif</option>
                    <option value="cursive">Elegant Cursive</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const letterStyle = style.letterStyle || 'classic';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#f43f5e';
        const fontStyle = style.fontStyle || 'modern';

        // Font family based on selection
        let fontFamily = 'system-ui, -apple-system, sans-serif';
        if (fontStyle === 'serif') {
            fontFamily = 'Georgia, serif';
        } else if (fontStyle === 'cursive') {
            fontFamily = '"Brush Script MT", cursive';
        }

        const toName = data.to || 'My Love';
        const fromName = data.from || 'Your Name';
        const message = data.message || 'Write your heartfelt message...';

        if (letterStyle === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto bg-amber-50 border-2 border-amber-200 shadow-lg rounded-lg p-8" style="font-family: ${fontFamily};">
                        <div class="text-center text-5xl mb-6">💌</div>
                        <div class="text-right text-sm text-gray-600 mb-4">To: ${toName}</div>
                        <div class="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-6">${message}</div>
                        <div class="text-right">
                            <div class="text-sm text-gray-600 mb-2">With all my love,</div>
                            <div class="font-semibold text-gray-900">${fromName}</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden" style="font-family: ${fontFamily};">
                        <div class="h-3" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="p-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="text-5xl">💌</div>
                                <div>
                                    <div class="text-sm text-gray-500">Dear</div>
                                    <div class="text-2xl font-bold" style="color: ${accentColor};">${toName}</div>
                                </div>
                            </div>
                            <div class="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-8 border-l-4 pl-4" style="border-color: ${accentColor}40;">
                                ${message}
                            </div>
                            <div class="flex items-center justify-end gap-3">
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">With love,</div>
                                    <div class="text-xl font-bold text-gray-900">${fromName}</div>
                                </div>
                                <div class="text-3xl">💕</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div style="background: linear-gradient(to bottom, #f5e6d3, #f0dcc4); border-radius: 12px; padding: 50px 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); border: 3px solid #8b7355; font-family: ${fontFamily};">
                            <!-- Decorative corners -->
                            <div style="position: absolute; top: 20px; left: 20px; width: 40px; height: 40px; border-top: 3px solid ${accentColor}; border-left: 3px solid ${accentColor};"></div>
                            <div style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; border-top: 3px solid ${accentColor}; border-right: 3px solid ${accentColor};"></div>
                            <div style="position: absolute; bottom: 20px; left: 20px; width: 40px; height: 40px; border-bottom: 3px solid ${accentColor}; border-left: 3px solid ${accentColor};"></div>
                            <div style="position: absolute; bottom: 20px; right: 20px; width: 40px; height: 40px; border-bottom: 3px solid ${accentColor}; border-right: 3px solid ${accentColor};"></div>

                            <div class="text-center text-5xl mb-8">💌</div>
                            <div class="text-center text-xl mb-6" style="color: ${accentColor}; font-style: italic;">To My Dearest ${toName}</div>
                            <div class="text-lg leading-loose whitespace-pre-wrap mb-8 text-center" style="color: #3e2723;">${message}</div>
                            <div class="text-center">
                                <div class="text-sm mb-2" style="color: ${accentColor};">Forever yours,</div>
                                <div class="text-2xl font-bold" style="color: #3e2723; font-family: 'Brush Script MT', cursive;">${fromName}</div>
                                <div class="mt-4 text-3xl">💕</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'vintage') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 8px solid #8b7355;">
                            <!-- Postcard header -->
                            <div class="bg-gradient-to-r from-red-600 to-red-700 p-4 flex items-center justify-between">
                                <div class="text-white text-sm font-bold">EXPRESS MAIL</div>
                                <div class="text-white text-2xl">📮</div>
                                <div class="text-white text-sm font-bold">LOVE LETTER</div>
                            </div>

                            <div class="p-8" style="background: linear-gradient(to bottom, #fffef7, #faf8f0); font-family: ${fontFamily};">
                                <div class="mb-6">
                                    <div class="text-sm text-gray-600 mb-1">To:</div>
                                    <div class="text-xl font-bold" style="color: ${accentColor};">${toName}</div>
                                    <div class="border-b-2 mt-2" style="border-color: ${accentColor}40;"></div>
                                </div>

                                <div class="text-base text-gray-800 leading-relaxed whitespace-pre-wrap mb-6" style="font-family: 'Courier New', monospace;">
                                    ${message}
                                </div>

                                <div class="flex items-end justify-between">
                                    <div class="text-6xl">💌</div>
                                    <div class="text-right">
                                        <div class="text-sm text-gray-600 mb-1">From:</div>
                                        <div class="text-xl font-bold text-gray-900">${fromName}</div>
                                        <!-- Stamp -->
                                        <div class="mt-4 inline-block border-4 border-dashed px-3 py-2" style="border-color: ${accentColor}; transform: rotate(5deg);">
                                            <div style="color: ${accentColor}; font-size: 2rem;">💕</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'handwritten') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div style="background: #fffef9; padding: 40px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); transform: rotate(-0.5deg); border-radius: 4px; font-family: 'Comic Sans MS', 'Brush Script MT', cursive;">
                            <!-- Paper lines -->
                            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; background-image: repeating-linear-gradient(transparent, transparent 31px, ${accentColor}15 31px, ${accentColor}15 32px); opacity: 0.4;"></div>

                            <div class="relative z-10">
                                <div class="text-5xl mb-6 text-center">💌</div>
                                <div class="text-lg mb-4" style="color: ${accentColor};">Dear ${toName},</div>
                                <div class="text-base leading-loose whitespace-pre-wrap mb-6" style="color: #2d3748; line-height: 2.5;">
                                    ${message}
                                </div>
                                <div class="text-right mt-8">
                                    <div style="color: ${accentColor};" class="mb-2">Love always,</div>
                                    <div class="text-xl" style="color: #2d3748; text-decoration: underline; text-decoration-style: wavy;">${fromName}</div>
                                    <div class="mt-4 text-3xl">💕</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'envelope') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <!-- Envelope flap -->
                        <div class="relative mx-auto" style="width: 100%; max-width: 600px;">
                            <div style="
                                width: 0;
                                height: 0;
                                border-left: 300px solid transparent;
                                border-right: 300px solid transparent;
                                border-top: 100px solid ${accentColor}40;
                                margin: 0 auto;
                            "></div>
                        </div>

                        <!-- Envelope body -->
                        <div class="bg-white rounded-lg shadow-2xl p-10" style="border: 4px solid ${accentColor}; font-family: ${fontFamily};">
                            <div class="text-center text-5xl mb-6">💌</div>

                            <!-- Address section -->
                            <div class="mb-8 pb-6 border-b-2" style="border-color: ${accentColor}40;">
                                <div class="text-sm text-gray-500 mb-1">TO:</div>
                                <div class="text-2xl font-bold" style="color: ${accentColor};">${toName}</div>
                            </div>

                            <!-- Letter content -->
                            <div class="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-8">
                                ${message}
                            </div>

                            <!-- Signature section -->
                            <div class="pt-6 border-t-2" style="border-color: ${accentColor}40;">
                                <div class="flex items-center justify-between">
                                    <div class="text-3xl">💕</div>
                                    <div class="text-right">
                                        <div class="text-sm text-gray-500 mb-1">FROM:</div>
                                        <div class="text-xl font-bold text-gray-900">${fromName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
