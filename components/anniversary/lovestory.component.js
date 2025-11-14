// Love Story Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.lovestory = {
    name: '💕 Love Story',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                <input type="text" placeholder="How We Met" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Love Story</label>
                <textarea placeholder="Share your beautiful love story..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="narrative">Narrative - Story Format</option>
                    <option value="quote">Quote - Letter Style</option>
                    <option value="elegant">Elegant - Minimalist</option>
                    <option value="romantic">Romantic - Heart Themed</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'card';
        const cardBg = style.cardBg || '#fef2f2';
        const accentColor = style.accentColor || '#dc2626';
        const bg = style.bg || '#ffffff';
        const textAlign = style.textAlign || 'center';

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-center mb-6">
                            <div class="text-5xl mb-3">💕</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Our Love Story'}</h2>
                        </div>
                        <div class="p-6 rounded-lg" style="background: ${cardBg}">
                            <p class="text-gray-700 leading-relaxed text-${textAlign}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'narrative') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-l-4 pl-6" style="border-color: ${accentColor}">
                            <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                            <div class="text-2xl mb-6">💕</div>
                            <p class="text-lg text-gray-700 leading-relaxed text-${textAlign}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'quote') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-8 rounded-lg" style="background: ${cardBg}">
                            <div class="text-6xl opacity-20 absolute top-4 left-4" style="color: ${accentColor}">"</div>
                            <div class="relative z-10">
                                <h2 class="text-2xl font-serif mb-6 text-center" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                                <p class="text-gray-700 leading-relaxed italic text-${textAlign}">${data.story || 'Share your beautiful love story here...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${accentColor}33">
                        <div class="text-xs uppercase tracking-widest mb-4" style="color: ${accentColor}">${data.title || 'Our Love Story'}</div>
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                            <div class="text-3xl">💕</div>
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                        </div>
                        <p class="text-gray-600 font-light leading-relaxed text-${textAlign}">${data.story || 'Share your beautiful love story here...'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'romantic') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${cardBg} 0%, ${bg} 100%);">
                    <div class="absolute top-4 left-4 text-6xl opacity-10">💕</div>
                    <div class="absolute bottom-4 right-4 text-6xl opacity-10">💕</div>
                    <div class="max-w-md mx-auto relative z-10">
                        <div class="text-center mb-6">
                            <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}22">
                                <div class="text-4xl">❤️</div>
                            </div>
                            <h2 class="text-2xl font-bold" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                        </div>
                        <div class="p-6 bg-white rounded-lg shadow-lg">
                            <p class="text-gray-700 leading-relaxed text-${textAlign}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <div class="text-center mb-6">
                        <div class="text-5xl mb-3">💕</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Our Love Story'}</h2>
                    </div>
                    <div class="p-6 rounded-lg" style="background: ${cardBg}">
                        <p class="text-gray-700 leading-relaxed">${data.story || 'Share your beautiful love story here...'}</p>
                    </div>
                </div>
            </div>
        `;
    }
};
