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
