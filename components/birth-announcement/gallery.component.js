// Photo Gallery Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '📸 Photo Gallery',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="More Photos" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Description</label>
                <textarea placeholder="Check out more photos of our little one..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid3">3-Column Grid</option>
                    <option value="grid2">2-Column Grid</option>
                    <option value="masonry">Masonry Style</option>
                    <option value="carousel">Carousel Preview</option>
                    <option value="featured">Featured + Grid</option>
                    <option value="polaroid">Polaroid Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Placeholder Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="placeholderBg" oninput="updatePreview()">
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
        const layout = style.layout || 'grid3';
        const bgColor = style.bg || '#ffffff';
        const placeholderBg = style.placeholderBg || '#f0fdfa';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'grid3') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                    ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto grid grid-cols-3 gap-3">
                        <div class="aspect-square rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                    </div>
                </div>
            `;
        } else if (layout === 'grid2') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                    ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                        <div class="aspect-square rounded-xl flex items-center justify-center text-4xl shadow-lg" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-xl flex items-center justify-center text-4xl shadow-lg" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-xl flex items-center justify-center text-4xl shadow-lg" style="background: ${placeholderBg};">📸</div>
                        <div class="aspect-square rounded-xl flex items-center justify-center text-4xl shadow-lg" style="background: ${placeholderBg};">📸</div>
                    </div>
                </div>
            `;
        } else if (layout === 'masonry') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                    ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto grid grid-cols-2 gap-3">
                        <div class="h-40 rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="h-56 rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="h-56 rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        <div class="h-40 rounded-lg flex items-center justify-center text-3xl shadow-md" style="background: ${placeholderBg};">📸</div>
                    </div>
                </div>
            `;
        } else if (layout === 'carousel') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                    ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto">
                        <div class="aspect-video rounded-2xl flex items-center justify-center text-6xl mb-4 shadow-2xl" style="background: ${placeholderBg};">📸</div>
                        <div class="flex gap-2 justify-center">
                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-xl" style="background: ${placeholderBg}; border: 2px solid ${accentColor};">📸</div>
                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-xl opacity-50" style="background: ${placeholderBg};">📸</div>
                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-xl opacity-50" style="background: ${placeholderBg};">📸</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'featured') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                    ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto space-y-4">
                        <div class="aspect-video rounded-2xl flex items-center justify-center text-6xl shadow-xl" style="background: ${placeholderBg};">📸</div>
                        <div class="grid grid-cols-3 gap-3">
                            <div class="aspect-square rounded-lg flex items-center justify-center text-2xl shadow-md" style="background: ${placeholderBg};">📸</div>
                            <div class="aspect-square rounded-lg flex items-center justify-center text-2xl shadow-md" style="background: ${placeholderBg};">📸</div>
                            <div class="aspect-square rounded-lg flex items-center justify-center text-2xl shadow-md" style="background: ${placeholderBg};">📸</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                    ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto grid grid-cols-2 gap-6">
                        <div class="bg-white p-3 shadow-xl transform -rotate-2">
                            <div class="aspect-square rounded flex items-center justify-center text-3xl mb-3" style="background: ${placeholderBg};">📸</div>
                            <div class="text-center text-xs" style="color: ${textColor};">Moment 1</div>
                        </div>
                        <div class="bg-white p-3 shadow-xl transform rotate-1">
                            <div class="aspect-square rounded flex items-center justify-center text-3xl mb-3" style="background: ${placeholderBg};">📸</div>
                            <div class="text-center text-xs" style="color: ${textColor};">Moment 2</div>
                        </div>
                        <div class="bg-white p-3 shadow-xl transform rotate-2">
                            <div class="aspect-square rounded flex items-center justify-center text-3xl mb-3" style="background: ${placeholderBg};">📸</div>
                            <div class="text-center text-xs" style="color: ${textColor};">Moment 3</div>
                        </div>
                        <div class="bg-white p-3 shadow-xl transform -rotate-1">
                            <div class="aspect-square rounded flex items-center justify-center text-3xl mb-3" style="background: ${placeholderBg};">📸</div>
                            <div class="text-center text-xs" style="color: ${textColor};">Moment 4</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <h2 class="text-2xl font-bold text-center mb-4" style="color: ${textColor};">${data.title || 'More Photos'}</h2>
                ${data.description ? `<p class="text-center mb-6" style="color: ${textColor}; opacity: 0.7;">${data.description}</p>` : ''}
                <div class="max-w-md mx-auto grid grid-cols-3 gap-3">
                    <div class="aspect-square rounded-lg flex items-center justify-center text-3xl" style="background: ${placeholderBg};">📸</div>
                    <div class="aspect-square rounded-lg flex items-center justify-center text-3xl" style="background: ${placeholderBg};">📸</div>
                    <div class="aspect-square rounded-lg flex items-center justify-center text-3xl" style="background: ${placeholderBg};">📸</div>
                </div>
            </div>
        `;
    }`
};
