// Photo Gallery Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photogallery = {
    name: '📸 Photo Gallery',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Academic Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Memories from my time at university..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 cursor-pointer">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photos</div>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid (2x2)</option>
                    <option value="masonry">Masonry Style</option>
                    <option value="featured">Featured Photo</option>
                    <option value="carousel">Carousel Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="full">Full (Circle)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'grid';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#6366f1';
        const borderRadius = style.borderRadius || 'md';
        const shadow = style.shadow || 'md';

        const borderRadiusMap = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-lg',
            lg: 'rounded-2xl',
            full: 'rounded-full'
        };

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        const radiusClass = borderRadiusMap[borderRadius];
        const shadowClass = shadowMap[shadow];

        switch(layout) {
            case 'masonry':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-3">
                                <div class="col-span-2 aspect-video ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-6xl">📷</span>
                                </div>
                                <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-[4/3] ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-[4/3] ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                            <div class="space-y-4">
                                <div class="aspect-video ${radiusClass} ${shadowClass} flex items-center justify-center border-4" style="background: ${accent}15; border-color: ${accent}">
                                    <span class="text-8xl">📷</span>
                                </div>
                                <div class="grid grid-cols-3 gap-3">
                                    <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                        <span class="text-3xl">📷</span>
                                    </div>
                                    <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                        <span class="text-3xl">📷</span>
                                    </div>
                                    <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                        <span class="text-3xl">📷</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'carousel':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                            <div class="relative">
                                <div class="aspect-[4/3] ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-8xl">📷</span>
                                </div>
                                <div class="flex justify-center gap-2 mt-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accent}"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                </div>
                                <div class="flex justify-center gap-6 mt-6">
                                    <div class="w-16 h-16 ${radiusClass} ${shadowClass} flex items-center justify-center cursor-pointer" style="background: ${accent}15">
                                        <span class="text-2xl">📷</span>
                                    </div>
                                    <div class="w-16 h-16 ${radiusClass} ${shadowClass} flex items-center justify-center cursor-pointer" style="background: ${accent}15">
                                        <span class="text-2xl">📷</span>
                                    </div>
                                    <div class="w-16 h-16 ${radiusClass} ${shadowClass} flex items-center justify-center cursor-pointer" style="background: ${accent}15">
                                        <span class="text-2xl">📷</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'grid':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-4">
                                <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square ${radiusClass} ${shadowClass} flex items-center justify-center" style="background: ${accent}15">
                                    <span class="text-4xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        }
    }`
};
