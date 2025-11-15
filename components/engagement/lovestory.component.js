// Love Story Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.lovestory = {
    name: '❤️ Love Story',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Love Story" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">How You Met</label>
                <textarea placeholder="Tell the story of how you met..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="quote">Quote Style</option>
                    <option value="storybook">Storybook</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="handwritten">Handwritten Note</option>
                    <option value="comic">Comic Strip</option>
                    <option value="vintage">Vintage Letter</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Accent Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="fontStyle" onchange="updatePreview()">
                    <option value="normal">Normal</option>
                    <option value="serif">Serif</option>
                    <option value="cursive">Cursive</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fdf2f8';
        const textColor = style.textColor || '#1f2937';
        const fontStyle = style.fontStyle || 'normal';
        const textSize = style.textSize || 'medium';

        const fontStyles = {
            normal: 'font-sans',
            serif: 'font-serif',
            cursive: 'font-serif italic',
            bold: 'font-sans font-semibold'
        };

        const textSizes = {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg'
        };

        if (layout === 'quote') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-6xl mb-6 opacity-20">"</div>
                        <h2 class="text-3xl font-bold mb-8">${data.title || 'Our Love Story'}</h2>
                        <p class="${textSizes[textSize]} ${fontStyles[fontStyle]} leading-relaxed italic max-w-xl mx-auto">${data.story || 'Share your beautiful love story here...'}</p>
                        <div class="text-6xl mt-6 opacity-20 rotate-180">"</div>
                        <div class="mt-8 text-4xl">❤️</div>
                    </div>
                </div>
            `;
        } else if (layout === 'storybook') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-8 rounded-2xl shadow-lg" style="background: ${cardBg}; border-left: 4px solid #e11d48;">
                            <div class="absolute -top-4 -left-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-2xl shadow-md">❤️</div>
                            <h2 class="text-2xl font-bold mb-6 pt-2">${data.title || 'Our Love Story'}</h2>
                            <div class="${textSizes[textSize]} ${fontStyles[fontStyle]} leading-relaxed" style="text-align: justify;">
                                <span class="text-4xl font-bold text-rose-500 float-left mr-2 leading-none">O</span>
                                ${data.story || 'Share your beautiful love story here...'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'overlay') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${cardBg} 0%, ${bg} 100%); color: ${textColor}">
                    <div class="absolute inset-0 opacity-5">
                        <div class="absolute top-10 right-10 text-9xl">❤️</div>
                        <div class="absolute bottom-10 left-10 text-9xl">💕</div>
                    </div>
                    <div class="relative max-w-2xl mx-auto text-center">
                        <div class="inline-block p-3 rounded-full bg-white shadow-md mb-6">
                            <span class="text-3xl">❤️</span>
                        </div>
                        <h2 class="text-3xl font-bold mb-6">${data.title || 'Our Love Story'}</h2>
                        <div class="p-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl">
                            <p class="${textSizes[textSize]} ${fontStyles[fontStyle]} leading-relaxed">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-10 rounded-3xl shadow-2xl" style="background: ${cardBg}; border: 3px double #e11d48;">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full shadow-lg" style="background: ${bg};">
                                <span class="text-3xl">❤️</span>
                            </div>
                            <div class="text-center mt-4">
                                <h2 class="text-3xl font-serif font-bold mb-8">${data.title || 'Our Love Story'}</h2>
                                <div class="w-16 h-0.5 bg-rose-400 mx-auto mb-8"></div>
                                <p class="${textSizes[textSize]} ${fontStyles[fontStyle]} leading-relaxed text-justify">${data.story || 'Share your beautiful love story here...'}</p>
                                <div class="w-16 h-0.5 bg-rose-400 mx-auto mt-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'handwritten') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-8 rounded-lg shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform" style="background: linear-gradient(135deg, #fff9e6 0%, #fffaf0 100%); border: 1px solid #ddd;">
                            <div class="absolute top-4 right-4 text-3xl opacity-30">📝</div>
                            <div class="absolute top-0 left-8 w-16 h-8 -mt-4">
                                <div class="w-full h-full bg-amber-200 rounded-sm shadow-md transform rotate-3"></div>
                            </div>
                            <h2 class="text-3xl mb-6 pb-3 border-b-2 border-dashed border-gray-300" style="font-family: 'Brush Script MT', cursive; color: #8b4513;">${data.title || 'Our Love Story'}</h2>
                            <div class="${textSizes[textSize]} leading-loose" style="font-family: 'Comic Sans MS', 'Brush Script MT', cursive; color: #2c1810; line-height: 2;">
                                ${data.story || 'Share your beautiful love story here...'}
                            </div>
                            <div class="mt-6 text-right">
                                <div class="inline-block px-4 py-2 rounded-full" style="background: #fef3c7;">
                                    <span class="text-2xl">❤️</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'comic') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 rounded-2xl shadow-2xl" style="background: ${cardBg}; border: 4px solid #1f2937;">
                            <div class="absolute -top-4 -left-4 px-4 py-2 rounded-lg font-black text-white shadow-lg transform -rotate-3" style="background: #ef4444;">
                                <span class="text-xl">💕</span>
                            </div>
                            <div class="absolute -top-3 -right-3 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-yellow-400"></div>
                            <div class="mb-6">
                                <h2 class="text-3xl font-black uppercase tracking-tight mb-2" style="font-family: 'Impact', sans-serif; color: #1f2937; text-shadow: 3px 3px 0px #fbbf24;">${data.title || 'Our Love Story'}</h2>
                                <div class="flex gap-2">
                                    <div class="flex-1 h-1 bg-red-500"></div>
                                    <div class="flex-1 h-1 bg-yellow-400"></div>
                                    <div class="flex-1 h-1 bg-blue-500"></div>
                                </div>
                            </div>
                            <div class="relative p-6 rounded-xl" style="background: white; border: 3px solid #1f2937;">
                                <div class="absolute -top-8 left-8 w-16 h-8">
                                    <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 0,50 Q 50,0 100,50" fill="white" stroke="#1f2937" stroke-width="3"/>
                                    </svg>
                                </div>
                                <p class="${textSizes[textSize]} ${fontStyles[fontStyle]} leading-relaxed" style="font-weight: 600;">${data.story || 'Share your beautiful love story here...'}</p>
                            </div>
                            <div class="mt-4 flex justify-end gap-2">
                                <div class="text-2xl animate-bounce">❤️</div>
                                <div class="text-2xl animate-bounce" style="animation-delay: 0.2s;">💕</div>
                                <div class="text-2xl animate-bounce" style="animation-delay: 0.4s;">💖</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'vintage') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-10 rounded-lg" style="background: linear-gradient(135deg, #f5e6d3 0%, #e8d4b8 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255,255,255,0.3);">
                            <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, #8b7355 2px, #8b7355 4px); background-size: 100% 4px;"></div>
                            <div class="relative">
                                <div class="flex items-center justify-between mb-6 pb-4 border-b-2 border-double" style="border-color: #8b7355;">
                                    <div class="text-xs uppercase tracking-widest" style="color: #8b7355; font-family: 'Georgia', serif;">A Love Letter</div>
                                    <div class="text-2xl">💌</div>
                                </div>
                                <h2 class="text-2xl mb-6 text-center" style="font-family: 'Georgia', serif; color: #5d4037;">${data.title || 'Our Love Story'}</h2>
                                <div class="space-y-4">
                                    <p class="${textSizes[textSize]} leading-relaxed" style="font-family: 'Georgia', serif; color: #4e342e; text-align: justify; text-indent: 2em;">
                                        ${data.story || 'Share your beautiful love story here...'}
                                    </p>
                                </div>
                                <div class="mt-8 pt-4 border-t border-dashed" style="border-color: #8b7355;">
                                    <div class="flex items-center justify-between">
                                        <div class="text-sm italic" style="font-family: 'Georgia', serif; color: #8b7355;">With all my love</div>
                                        <div class="flex gap-2">
                                            <span class="text-2xl">❤️</span>
                                            <span class="text-sm" style="font-family: 'Georgia', serif; color: #8b7355;">∞</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute -bottom-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, #dc143c, #b22222);">
                                    <span class="text-3xl">💋</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Classic Card (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">❤️</div>
                        <h2 class="text-2xl font-bold mb-6 text-center">${data.title || 'Our Love Story'}</h2>
                        <div class="p-6 rounded-lg shadow-md" style="background: ${cardBg};">
                            <p class="${textSizes[textSize]} ${fontStyles[fontStyle]} leading-relaxed">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
