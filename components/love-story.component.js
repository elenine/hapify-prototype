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
        }
    }
};
