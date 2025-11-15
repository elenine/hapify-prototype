// Love Story Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-story'] = {
    name: '📖 Love Story',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                <input type="text" placeholder="How We Met" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Story</label>
                <textarea placeholder="Tell your beautiful love story here..." rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="book">Book Pages</option>
                    <option value="scroll">Scroll Parchment</option>
                    <option value="card">Story Card</option>
                    <option value="chapter">Chapter Style</option>
                    <option value="handwritten">Handwritten Note</option>
                    <option value="letter">Love Letter</option>
                    <option value="diary">Diary Entry</option>
                    <option value="newspaper">Newspaper Article</option>
                    <option value="quote">Framed Quote</option>
                    <option value="typewriter">Typewriter Style</option>
                    <option value="modern-card">Modern Card Stack</option>
                    <option value="ribbon">Ribbon Banner</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="fontStyle" onchange="updatePreview()">
                    <option value="modern">Modern Sans</option>
                    <option value="serif">Classic Serif</option>
                    <option value="elegant">Elegant Script</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bgColor = style.bg || '#fef2f2';
        const accentColor = style.accent || '#f43f5e';
        const textAlign = style.align || 'center';
        const fontStyle = style.fontStyle || 'modern';

        // Font family based on selection
        let fontFamily = 'system-ui, -apple-system, sans-serif';
        if (fontStyle === 'serif') {
            fontFamily = 'Georgia, serif';
        } else if (fontStyle === 'elegant') {
            fontFamily = '"Brush Script MT", cursive';
        }

        const title = data.title || 'How We Met';
        const story = data.story || 'Tell your beautiful love story here...';

        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${textAlign}; font-family: ${fontFamily}">
                        <div class="text-5xl mb-4">📖</div>
                        <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor}">${title}</h2>
                        <p class="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">${story}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'book') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl" style="border: 12px solid #8b7355; position: relative;">
                        <div class="grid md:grid-cols-2 divide-x divide-gray-300">
                            <div class="p-8" style="text-align: ${textAlign}; font-family: ${fontFamily}">
                                <div class="text-4xl mb-4">📖</div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${title}</h2>
                                <p class="text-base text-gray-700 leading-relaxed whitespace-pre-wrap">${story.substring(0, Math.ceil(story.length / 2))}</p>
                            </div>
                            <div class="p-8" style="text-align: ${textAlign}; font-family: ${fontFamily}">
                                <p class="text-base text-gray-700 leading-relaxed whitespace-pre-wrap">${story.substring(Math.ceil(story.length / 2))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'scroll') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div style="background: linear-gradient(to bottom, #f5e6d3, #f0dcc4); border-radius: 8px; padding: 40px 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 2px solid #8b7355; position: relative;">
                            <div style="position: absolute; top: 0; left: 0; right: 0; height: 20px; background: linear-gradient(to right, #8b7355, #d4a574, #8b7355);"></div>
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 20px; background: linear-gradient(to right, #8b7355, #d4a574, #8b7355);"></div>
                            <div style="text-align: ${textAlign}; font-family: ${fontFamily}; padding: 20px 0;">
                                <div class="text-4xl mb-4">📜</div>
                                <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor}; font-family: Georgia, serif;">${title}</h2>
                                <p class="text-lg leading-relaxed whitespace-pre-wrap" style="color: #3e2723;">${story}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10" style="border-top: 8px solid ${accentColor};">
                        <div style="text-align: ${textAlign}; font-family: ${fontFamily}">
                            <div class="inline-block px-4 py-2 rounded-full mb-4" style="background: ${accentColor}20;">
                                <span class="text-4xl">📖</span>
                            </div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor}">${title}</h2>
                            <div class="w-20 h-1 mx-auto mb-6" style="background: ${accentColor};"></div>
                            <p class="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">${story}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'chapter') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="mb-8" style="text-align: ${textAlign}">
                            <div class="text-sm font-bold tracking-widest mb-2" style="color: ${accentColor}; opacity: 0.7;">CHAPTER ONE</div>
                            <div class="text-6xl mb-2" style="color: ${accentColor}; font-family: Georgia, serif; font-weight: bold;">01</div>
                            <h2 class="text-4xl font-bold mb-4" style="color: #1f2937; font-family: ${fontFamily};">${title}</h2>
                            <div class="w-16 h-1 mx-auto" style="background: ${accentColor};"></div>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-8" style="font-family: ${fontFamily};">
                            <p class="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left" style="text-align: ${textAlign}; color: ${accentColor}20;">${story}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'handwritten') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div style="background: #fffef7; padding: 40px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); transform: rotate(-0.5deg); border-radius: 4px;">
                            <div style="text-align: ${textAlign}; font-family: 'Comic Sans MS', 'Brush Script MT', cursive;">
                                <div class="text-5xl mb-4">💝</div>
                                <h2 class="text-3xl mb-6" style="color: ${accentColor}; text-decoration: underline; text-decoration-style: wavy;">${title}</h2>
                                <p class="text-lg leading-loose whitespace-pre-wrap" style="color: #2d3748; line-height: 2;">${story}</p>
                                <div class="mt-8" style="text-align: right;">
                                    <div style="color: ${accentColor}; font-size: 2rem;">💕</div>
                                </div>
                            </div>
                        </div>
                        <!-- Paper lines effect -->
                        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; background-image: repeating-linear-gradient(transparent, transparent 31px, ${accentColor}15 31px, ${accentColor}15 32px); opacity: 0.3;"></div>
                    </div>
                </div>
            `;
        } else if (layout === 'letter') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-xl p-10" style="border-left: 4px solid ${accentColor};">
                            <div class="mb-6">
                                <div class="text-sm text-gray-500 mb-2">My Dearest,</div>
                                <div class="text-4xl mb-4">💌</div>
                            </div>
                            <h2 class="text-2xl font-serif mb-6" style="color: ${accentColor}; font-family: ${fontFamily};">${title}</h2>
                            <div class="prose prose-lg" style="text-align: ${textAlign}; font-family: ${fontFamily};">
                                <p class="text-gray-700 leading-relaxed whitespace-pre-wrap first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none" style="color: ${accentColor};">${story}</p>
                            </div>
                            <div class="mt-8 text-right">
                                <div style="color: ${accentColor}; font-family: 'Brush Script MT', cursive; font-size: 1.5rem;">
                                    With all my love 💕
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'diary') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-2xl p-10 relative" style="border: 1px solid #d4a574;">
                            <!-- Diary binding holes -->
                            <div class="absolute left-6 top-8 bottom-8 flex flex-col justify-around">
                                <div class="w-4 h-4 rounded-full bg-gray-400 shadow-inner"></div>
                                <div class="w-4 h-4 rounded-full bg-gray-400 shadow-inner"></div>
                                <div class="w-4 h-4 rounded-full bg-gray-400 shadow-inner"></div>
                            </div>
                            <div class="pl-8">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="text-4xl">📔</div>
                                    <div>
                                        <div class="text-sm text-gray-500">Dear Diary,</div>
                                        <div class="text-xs text-gray-400">${new Date().toLocaleDateString()}</div>
                                    </div>
                                </div>
                                <h2 class="text-2xl font-handwriting mb-4" style="color: ${accentColor}; font-family: 'Comic Sans MS', cursive;">${title}</h2>
                                <div class="relative">
                                    <p class="text-base leading-loose whitespace-pre-wrap" style="color: #4a4a4a; font-family: 'Comic Sans MS', cursive; text-align: ${textAlign};">${story}</p>
                                    <!-- Lined paper effect -->
                                    <div class="absolute inset-0 pointer-events-none opacity-20" style="background-image: repeating-linear-gradient(transparent, transparent 28px, ${accentColor} 28px, ${accentColor} 29px);"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'newspaper') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8" style="border-top: 6px double ${accentColor}; border-bottom: 6px double ${accentColor};">
                        <div class="border-b-2 border-gray-800 pb-4 mb-6">
                            <div class="text-center mb-2">
                                <div class="text-xs tracking-widest font-bold text-gray-600">THE LOVE CHRONICLE</div>
                                <div class="text-xs text-gray-500">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            </div>
                        </div>
                        <div class="text-center mb-6">
                            <h2 class="text-4xl font-black mb-3" style="color: ${accentColor}; font-family: Georgia, serif; letter-spacing: -1px;">
                                ${title}
                            </h2>
                            <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                                <span>★</span>
                                <span>SPECIAL EDITION</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div class="columns-1 md:columns-2 gap-6" style="font-family: Georgia, serif;">
                            <div class="text-4xl float-left mr-3 mt-1" style="color: ${accentColor};">💕</div>
                            <p class="text-base leading-relaxed text-justify whitespace-pre-wrap" style="color: #1a1a1a;">${story}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'quote') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative">
                            <!-- Decorative frame -->
                            <div class="absolute -inset-4 rounded-2xl" style="background: linear-gradient(135deg, ${accentColor}40, ${accentColor}20);"></div>
                            <div class="relative bg-white rounded-xl shadow-2xl p-10">
                                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div class="text-6xl">📖</div>
                                </div>
                                <div class="text-center pt-8">
                                    <div class="text-7xl mb-6 leading-none" style="color: ${accentColor}; opacity: 0.3; font-family: Georgia, serif;">"</div>
                                    <h2 class="text-3xl font-serif mb-6 italic" style="color: ${accentColor}; font-family: Georgia, serif;">
                                        ${title}
                                    </h2>
                                    <div class="max-w-xl mx-auto">
                                        <p class="text-lg leading-relaxed whitespace-pre-wrap italic" style="color: #374151; text-align: ${textAlign}; font-family: Georgia, serif;">
                                            ${story}
                                        </p>
                                    </div>
                                    <div class="text-7xl mt-6 leading-none rotate-180" style="color: ${accentColor}; opacity: 0.3; font-family: Georgia, serif;">"</div>
                                    <div class="mt-6 flex items-center justify-center gap-2">
                                        <div class="w-12 h-px" style="background: ${accentColor};"></div>
                                        <div class="text-2xl">💕</div>
                                        <div class="w-12 h-px" style="background: ${accentColor};"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'typewriter') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-xl p-10" style="background-image: repeating-linear-gradient(transparent, transparent 24px, rgba(0,0,0,0.03) 24px, rgba(0,0,0,0.03) 25px);">
                            <div class="mb-6 flex items-center gap-3">
                                <div class="text-4xl">⌨️</div>
                                <div class="text-xs text-gray-500 uppercase tracking-widest">Typewritten</div>
                            </div>
                            <h2 class="text-2xl mb-6 font-mono uppercase tracking-wide" style="color: ${accentColor};">
                                ${title}
                            </h2>
                            <div class="prose" style="font-family: 'Courier New', monospace;">
                                <p class="text-base leading-loose whitespace-pre-wrap" style="color: #1a1a1a; text-align: ${textAlign};">
                                    ${story}
                                </p>
                            </div>
                            <div class="mt-8 text-right">
                                <div class="inline-block px-4 py-2" style="border: 2px solid ${accentColor}; font-family: 'Courier New', monospace;">
                                    <span style="color: ${accentColor};">♥</span> WITH LOVE <span style="color: ${accentColor};">♥</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern-card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <!-- Stacked cards effect -->
                        <div class="relative">
                            <div class="absolute top-2 left-2 right-2 h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl opacity-50"></div>
                            <div class="absolute top-4 left-4 right-4 h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl opacity-70"></div>
                            <div class="relative bg-white rounded-2xl shadow-2xl p-10" style="background: linear-gradient(135deg, white 0%, ${accentColor}05 100%);">
                                <div class="text-center mb-6">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10);">
                                        <div class="text-5xl">📖</div>
                                    </div>
                                    <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor}; font-family: ${fontFamily};">
                                        ${title}
                                    </h2>
                                    <div class="flex items-center justify-center gap-2 mt-4">
                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor}; opacity: 0.6;"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor}; opacity: 0.3;"></div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-inner">
                                    <p class="text-lg leading-relaxed whitespace-pre-wrap" style="color: #374151; text-align: ${textAlign}; font-family: ${fontFamily};">
                                        ${story}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'ribbon') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <!-- Ribbon banner -->
                        <div class="relative mb-8">
                            <div class="relative inline-block w-full">
                                <div class="py-4 px-8 text-center relative" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); color: white; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                                    <h2 class="text-3xl font-bold" style="font-family: ${fontFamily};">
                                        ${title}
                                    </h2>
                                    <!-- Ribbon tails -->
                                    <div class="absolute -left-3 top-0 w-0 h-0" style="border-style: solid; border-width: 28px 15px 28px 0; border-color: transparent ${accentColor}dd transparent transparent;"></div>
                                    <div class="absolute -right-3 top-0 w-0 h-0" style="border-style: solid; border-width: 28px 0 28px 15px; border-color: transparent transparent transparent ${accentColor}dd;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-2xl shadow-xl p-10">
                            <div class="text-center mb-6">
                                <div class="text-5xl">📖</div>
                            </div>
                            <p class="text-lg leading-relaxed whitespace-pre-wrap" style="color: #374151; text-align: ${textAlign}; font-family: ${fontFamily};">
                                ${story}
                            </p>
                            <div class="mt-8 text-center">
                                <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full" style="background: ${accentColor}10;">
                                    <span style="color: ${accentColor};">💕</span>
                                    <span class="text-sm font-medium" style="color: ${accentColor};">Our Love Story</span>
                                    <span style="color: ${accentColor};">💕</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
