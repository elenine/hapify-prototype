// Birth Story Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.story = {
    name: '📖 Birth Story',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                <input type="text" placeholder="Our Birth Story" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birth Story</label>
                <textarea placeholder="Share your special birth story..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="book">Book Style</option>
                    <option value="journal">Journal Entry</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="bordered">Bordered Story</option>
                    <option value="narrative">Narrative Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Content Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
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
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f0fdfa';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">📖</div>
                        <h2 class="text-2xl font-bold mb-6 text-center" style="color: ${textColor};">${data.title || 'Our Birth Story'}</h2>
                        <div class="p-6 rounded-xl shadow-sm" style="background: ${cardBg};">
                            <p class="leading-relaxed" style="color: ${textColor};">${data.story || 'Share your special birth story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'book') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white rounded-lg shadow-2xl p-8" style="border-left: 8px solid ${accentColor};">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="text-3xl">📖</div>
                                <h2 class="text-2xl font-serif font-bold" style="color: ${accentColor};">${data.title || 'Our Birth Story'}</h2>
                            </div>
                            <p class="text-lg leading-loose font-serif" style="color: ${textColor}; text-indent: 2rem;">${data.story || 'Share your special birth story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'journal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-amber-50 rounded-lg p-8 shadow-lg" style="background-image: linear-gradient(to bottom, transparent 0%, transparent calc(100% - 1px), #d4d4d4 calc(100% - 1px)); background-size: 100% 24px;">
                            <div class="mb-6">
                                <div class="inline-block px-4 py-2 rounded-full mb-4" style="background: ${accentColor}; color: white;">
                                    📖 ${data.title || 'Our Birth Story'}
                                </div>
                            </div>
                            <p class="leading-loose font-handwriting" style="color: ${textColor}; line-height: 24px;">${data.story || 'Share your special birth story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <p class="text-sm uppercase tracking-widest text-center mb-8" style="color: ${accentColor};">${data.title || 'Our Birth Story'}</p>
                        <div class="border-l-2 pl-8" style="border-color: ${accentColor};">
                            <p class="text-lg leading-relaxed" style="color: ${textColor};">${data.story || 'Share your special birth story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="border-4 rounded-2xl p-8" style="border-color: ${accentColor}; background: ${cardBg};">
                            <div class="text-center mb-6">
                                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl mb-4" style="background: ${accentColor}; color: white;">
                                    📖
                                </div>
                                <h2 class="text-2xl font-bold" style="color: ${accentColor};">${data.title || 'Our Birth Story'}</h2>
                            </div>
                            <p class="leading-relaxed text-center" style="color: ${textColor};">${data.story || 'Share your special birth story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'narrative') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl font-bold mb-2" style="color: ${textColor};">${data.title || 'Our Birth Story'}</h2>
                            <div class="w-20 h-1 mx-auto" style="background: ${accentColor};"></div>
                        </div>
                        <div class="prose prose-lg mx-auto">
                            <p class="text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left" style="color: ${textColor}; first-letter:color: ${accentColor};">${data.story || 'Share your special birth story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-md mx-auto">
                    <div class="text-center text-4xl mb-4">📖</div>
                    <h2 class="text-2xl font-bold mb-6 text-center" style="color: ${textColor};">${data.title || 'Our Birth Story'}</h2>
                    <div class="p-6 rounded-lg" style="background: ${cardBg};">
                        <p class="leading-relaxed" style="color: ${textColor};">${data.story || 'Share your special birth story here...'}</p>
                    </div>
                </div>
            </div>
        `;
    }`
};
