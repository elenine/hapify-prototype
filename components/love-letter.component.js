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
                    <option value="romantic-frame">Romantic Frame</option>
                    <option value="notebook">Notebook Page</option>
                    <option value="telegram">Love Telegram</option>
                    <option value="message-bottle">Message in Bottle</option>
                    <option value="diary-entry">Diary Entry</option>
                    <option value="poetry">Poetry Style</option>
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
        } else if (letterStyle === 'romantic-frame') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <!-- Outer decorative frame -->
                        <div class="absolute -inset-6 rounded-3xl opacity-30" style="background: linear-gradient(135deg, ${accentColor}40, ${accentColor}20); filter: blur(20px);"></div>

                        <div class="relative bg-white rounded-2xl shadow-2xl p-10" style="border: 6px double ${accentColor};">
                            <!-- Rose decorations -->
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">🌹</div>

                            <div class="text-center mb-8" style="font-family: ${fontFamily};">
                                <div class="text-5xl mb-4">💌</div>
                                <div class="text-sm text-gray-500 mb-1">To My Beloved</div>
                                <div class="text-3xl font-bold mb-4" style="color: ${accentColor}; font-family: 'Brush Script MT', cursive;">
                                    ${toName}
                                </div>
                                <div class="flex items-center justify-center gap-2 mb-6">
                                    <div class="w-16 h-px" style="background: ${accentColor};"></div>
                                    <div class="text-2xl">💕</div>
                                    <div class="w-16 h-px" style="background: ${accentColor};"></div>
                                </div>
                            </div>

                            <div class="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-8 text-center px-4" style="font-family: ${fontFamily};">
                                ${message}
                            </div>

                            <div class="text-center">
                                <div class="text-sm text-gray-500 mb-2" style="font-style: italic;">Eternally yours,</div>
                                <div class="text-2xl font-bold" style="color: ${accentColor}; font-family: 'Brush Script MT', cursive;">${fromName}</div>
                                <div class="mt-4 flex justify-center gap-2">
                                    <span class="text-3xl">💝</span>
                                    <span class="text-3xl">💕</span>
                                    <span class="text-3xl">💖</span>
                                </div>
                            </div>

                            <!-- Bottom rose decoration -->
                            <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-6xl">🌹</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'notebook') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border-left: 4px solid ${accentColor};">
                            <!-- Notebook header -->
                            <div class="bg-gray-100 p-4 border-b-2 border-gray-300 flex items-center gap-3">
                                <div class="text-3xl">📓</div>
                                <div>
                                    <div class="text-xs text-gray-500">Love Note</div>
                                    <div class="text-sm font-bold text-gray-700">${new Date().toLocaleDateString()}</div>
                                </div>
                            </div>

                            <div class="p-8 relative" style="background-image: repeating-linear-gradient(transparent, transparent 30px, ${accentColor}10 30px, ${accentColor}10 31px); font-family: 'Comic Sans MS', cursive;">
                                <div class="mb-4 text-lg" style="color: ${accentColor};">Dear ${toName},</div>

                                <div class="text-base text-gray-800 leading-loose whitespace-pre-wrap mb-6" style="line-height: 2.2;">
                                    ${message}
                                </div>

                                <div class="text-right mt-8">
                                    <div class="text-sm mb-2" style="color: ${accentColor};">With all my heart,</div>
                                    <div class="text-xl font-bold text-gray-900" style="text-decoration: underline; text-decoration-color: ${accentColor};">${fromName}</div>
                                    <div class="mt-2 text-2xl">💕</div>
                                </div>

                                <!-- Doodle hearts -->
                                <div class="absolute bottom-4 left-4 text-2xl opacity-30">💝</div>
                                <div class="absolute top-16 right-4 text-xl opacity-20">💖</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'telegram') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-amber-50 rounded-lg shadow-2xl overflow-hidden" style="border: 8px solid #8b7355;">
                            <!-- Telegram header -->
                            <div class="bg-amber-600 text-white p-4 flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <div class="text-2xl">📧</div>
                                    <div class="text-sm font-bold uppercase tracking-wider">Love Telegram</div>
                                </div>
                                <div class="text-xs">URGENT</div>
                            </div>

                            <div class="p-8" style="font-family: 'Courier New', monospace;">
                                <div class="mb-6 pb-4 border-b-2 border-dashed" style="border-color: ${accentColor};">
                                    <div class="flex gap-8 text-sm">
                                        <div>
                                            <span class="font-bold">TO:</span> ${toName}
                                        </div>
                                        <div>
                                            <span class="font-bold">FROM:</span> ${fromName}
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded border-2" style="border-color: ${accentColor};">
                                    <div class="text-center mb-4">
                                        <div class="inline-block px-4 py-2 text-white font-bold text-xs tracking-widest" style="background: ${accentColor};">
                                            LOVE MESSAGE
                                        </div>
                                    </div>

                                    <div class="text-base text-gray-900 uppercase tracking-wide leading-relaxed whitespace-pre-wrap mb-4">
                                        ${message}
                                    </div>

                                    <div class="text-center mt-6 pt-4 border-t-2 border-dashed" style="border-color: ${accentColor}40;">
                                        <div class="text-3xl mb-2">💕</div>
                                        <div class="text-xs text-gray-600">END OF MESSAGE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'message-bottle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <!-- Bottle cap -->
                        <div class="text-center mb-4">
                            <div class="inline-block w-16 h-8 rounded-t-full" style="background: linear-gradient(to bottom, #8b7355, #6b5d52);"></div>
                        </div>

                        <!-- Bottle body -->
                        <div class="relative mx-auto" style="max-width: 500px;">
                            <div class="relative rounded-3xl overflow-hidden" style="background: linear-gradient(135deg, rgba(173,216,230,0.3), rgba(135,206,250,0.3)); border: 6px solid rgba(173,216,230,0.5); box-shadow: inset 0 0 30px rgba(255,255,255,0.5), 0 10px 40px rgba(0,0,0,0.3);">
                                <!-- Glass reflection effect -->
                                <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>

                                <!-- Scroll inside bottle -->
                                <div class="relative p-8 m-6">
                                    <div class="bg-amber-50 rounded-lg shadow-inner p-6 transform -rotate-2" style="border: 2px solid #d4a574; font-family: ${fontFamily};">
                                        <div class="text-center text-4xl mb-4">💌</div>

                                        <div class="text-sm text-gray-600 mb-3">To: ${toName}</div>

                                        <div class="text-base text-gray-800 leading-relaxed whitespace-pre-wrap mb-4" style="font-family: 'Brush Script MT', cursive;">
                                            ${message}
                                        </div>

                                        <div class="text-right text-sm text-gray-600">
                                            <div class="mb-1">From: ${fromName}</div>
                                            <div class="text-2xl">💕</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Waves at bottom -->
                                <div class="absolute bottom-0 left-0 right-0 h-8" style="background: linear-gradient(to top, rgba(135,206,250,0.4), transparent);"></div>
                            </div>
                        </div>

                        <!-- Sand/waves decoration -->
                        <div class="text-center mt-4">
                            <div class="text-4xl opacity-30">🌊</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'diary-entry') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-2xl p-8" style="border: 3px solid ${accentColor}40;">
                            <!-- Diary header -->
                            <div class="flex items-center gap-4 mb-6 pb-4 border-b-2" style="border-color: ${accentColor}40;">
                                <div class="text-5xl">💝</div>
                                <div>
                                    <div class="text-xs text-gray-500">My Diary</div>
                                    <div class="text-sm font-bold text-gray-700">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                </div>
                                <div class="ml-auto">
                                    <div class="text-xs text-gray-500">About</div>
                                    <div class="text-lg font-bold" style="color: ${accentColor}; font-family: 'Brush Script MT', cursive;">${toName}</div>
                                </div>
                            </div>

                            <div class="relative" style="font-family: 'Comic Sans MS', cursive;">
                                <!-- Diary lines effect -->
                                <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: repeating-linear-gradient(transparent, transparent 28px, ${accentColor} 28px, ${accentColor} 29px);"></div>

                                <div class="relative text-base text-gray-800 leading-loose whitespace-pre-wrap mb-6" style="line-height: 2.2;">
                                    ${message}
                                </div>

                                <div class="relative text-right mt-8">
                                    <div class="text-sm mb-2" style="color: ${accentColor};">Love,</div>
                                    <div class="text-xl font-bold text-gray-900">${fromName}</div>
                                    <div class="mt-3 flex justify-end gap-2">
                                        <span class="text-2xl">💕</span>
                                        <span class="text-2xl">💖</span>
                                        <span class="text-2xl">💗</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Decorative stickers -->
                            <div class="absolute top-4 right-4 flex gap-2">
                                <div class="text-3xl opacity-60 transform rotate-12">⭐</div>
                                <div class="text-3xl opacity-60 transform -rotate-12">💫</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (letterStyle === 'poetry') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-2xl p-10" style="border-top: 8px solid ${accentColor}; border-bottom: 8px solid ${accentColor};">
                            <!-- Ornamental quotation marks -->
                            <div class="absolute -top-4 left-8 text-8xl opacity-20" style="color: ${accentColor}; font-family: Georgia, serif;">"</div>

                            <div class="text-center mb-8">
                                <div class="text-5xl mb-4">💌</div>
                                <div class="text-sm tracking-widest mb-2" style="color: ${accentColor};">A LOVE POEM</div>
                                <h3 class="text-3xl font-serif italic mb-2" style="color: ${accentColor}; font-family: Georgia, serif;">
                                    For ${toName}
                                </h3>
                                <div class="flex items-center justify-center gap-2">
                                    <div class="w-12 h-px" style="background: ${accentColor};"></div>
                                    <div class="text-xl">💕</div>
                                    <div class="w-12 h-px" style="background: ${accentColor};"></div>
                                </div>
                            </div>

                            <div class="max-w-xl mx-auto text-center text-lg text-gray-800 leading-loose whitespace-pre-wrap mb-8 italic" style="font-family: Georgia, serif; line-height: 2;">
                                ${message}
                            </div>

                            <div class="text-center">
                                <div class="inline-block px-6 py-3 rounded-full" style="background: ${accentColor}10;">
                                    <div class="text-sm mb-1" style="color: ${accentColor};">Written by</div>
                                    <div class="text-2xl font-serif italic" style="color: ${accentColor}; font-family: Georgia, serif;">${fromName}</div>
                                </div>
                            </div>

                            <!-- Ornamental quotation mark closing -->
                            <div class="absolute -bottom-4 right-8 text-8xl opacity-20 rotate-180" style="color: ${accentColor}; font-family: Georgia, serif;">"</div>

                            <!-- Decorative elements -->
                            <div class="absolute top-1/2 -left-2 text-4xl opacity-30 transform -translate-y-1/2">🌹</div>
                            <div class="absolute top-1/2 -right-2 text-4xl opacity-30 transform -translate-y-1/2">🌹</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
