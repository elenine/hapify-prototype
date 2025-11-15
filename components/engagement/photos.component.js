// Photo Gallery Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photos = {
    name: '📸 Photo Gallery',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="A glimpse of our journey together..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Classic Grid</option>
                    <option value="masonry">Masonry</option>
                    <option value="carousel">Carousel Preview</option>
                    <option value="polaroid">Polaroid Stack</option>
                    <option value="modern">Modern Cards</option>
                    <option value="scrapbook">Scrapbook Style</option>
                    <option value="film">Film Strip</option>
                    <option value="collage">Artistic Collage</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Grid Columns</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="columns" onchange="updatePreview()">
                    <option value="2">2 Columns</option>
                    <option value="3" selected>3 Columns</option>
                    <option value="4">4 Columns</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Background</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="photoBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="square">Square</option>
                    <option value="circle">Circle</option>
                    <option value="soft">Soft Rounded</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="tight">Tight</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'grid';
        const columns = style.columns || '3';
        const bg = style.bg || '#fdf2f8';
        const photoBg = style.photoBg || '#fce7f3';
        const borderStyle = style.borderStyle || 'rounded';
        const spacing = style.spacing || 'normal';

        const borderStyles = {
            rounded: 'rounded-lg',
            square: 'rounded-none',
            circle: 'rounded-full',
            soft: 'rounded-xl'
        };

        const spacings = {
            tight: 'gap-2',
            normal: 'gap-3',
            relaxed: 'gap-6'
        };

        const gridCols = {
            '2': 'grid-cols-2',
            '3': 'grid-cols-3',
            '4': 'grid-cols-2 md:grid-cols-4'
        };

        if (layout === 'masonry') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                    <div class="max-w-2xl mx-auto ${spacings[spacing]}">
                        <div class="grid ${gridCols[columns]} ${spacings[spacing]}">
                            <div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-md" style="background: ${photoBg};">📸</div>
                            <div class="aspect-[3/4] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-md" style="background: ${photoBg};">📸</div>
                            <div class="aspect-[4/3] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-md" style="background: ${photoBg};">📸</div>
                            ${columns === '3' || columns === '4' ? `
                            <div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-md" style="background: ${photoBg};">📸</div>
                            <div class="aspect-[4/3] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-md" style="background: ${photoBg};">📸</div>
                            <div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-md" style="background: ${photoBg};">📸</div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'carousel') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto">
                        <div class="relative aspect-[4/3] ${borderStyles[borderStyle]} shadow-2xl overflow-hidden" style="background: ${photoBg};">
                            <div class="absolute inset-0 flex items-center justify-center text-6xl">📸</div>
                            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                <div class="w-2 h-2 rounded-full bg-white"></div>
                                <div class="w-2 h-2 rounded-full bg-white opacity-50"></div>
                                <div class="w-2 h-2 rounded-full bg-white opacity-50"></div>
                            </div>
                        </div>
                        <div class="flex justify-center gap-2 mt-4">
                            <div class="w-16 h-16 ${borderStyles[borderStyle]} flex items-center justify-center text-xl shadow-md opacity-75" style="background: ${photoBg};">📸</div>
                            <div class="w-16 h-16 ${borderStyles[borderStyle]} flex items-center justify-center text-xl shadow-md opacity-75" style="background: ${photoBg};">📸</div>
                            <div class="w-16 h-16 ${borderStyles[borderStyle]} flex items-center justify-center text-xl shadow-md opacity-75" style="background: ${photoBg};">📸</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                    <div class="max-w-2xl mx-auto grid ${gridCols[columns]} ${spacings[spacing]}">
                        <div class="bg-white p-3 ${borderStyles[borderStyle]} shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                            <div class="aspect-square flex items-center justify-center text-4xl" style="background: ${photoBg};">📸</div>
                            <div class="text-center text-xs mt-2 text-gray-600">Memory 1</div>
                        </div>
                        <div class="bg-white p-3 ${borderStyles[borderStyle]} shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                            <div class="aspect-square flex items-center justify-center text-4xl" style="background: ${photoBg};">📸</div>
                            <div class="text-center text-xs mt-2 text-gray-600">Memory 2</div>
                        </div>
                        <div class="bg-white p-3 ${borderStyles[borderStyle]} shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                            <div class="aspect-square flex items-center justify-center text-4xl" style="background: ${photoBg};">📸</div>
                            <div class="text-center text-xs mt-2 text-gray-600">Memory 3</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                    <div class="max-w-3xl mx-auto grid ${gridCols[columns]} ${spacings[spacing]}">
                        <div class="group relative aspect-square ${borderStyles[borderStyle]} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                            <div class="absolute inset-0 flex items-center justify-center text-5xl" style="background: ${photoBg};">📸</div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div class="group relative aspect-square ${borderStyles[borderStyle]} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                            <div class="absolute inset-0 flex items-center justify-center text-5xl" style="background: ${photoBg};">📸</div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div class="group relative aspect-square ${borderStyles[borderStyle]} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                            <div class="absolute inset-0 flex items-center justify-center text-5xl" style="background: ${photoBg};">📸</div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        ${columns === '4' ? `
                        <div class="group relative aspect-square ${borderStyles[borderStyle]} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                            <div class="absolute inset-0 flex items-center justify-center text-5xl" style="background: ${photoBg};">📸</div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'scrapbook') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bg} 0%, #fff5e6 100%);">
                    <h2 class="text-3xl font-bold text-center mb-4" style="font-family: 'Georgia', serif;">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-10" style="font-family: 'Georgia', serif;">${data.description}</p>` : ''}
                    <div class="max-w-4xl mx-auto">
                        <div class="relative">
                            <div class="absolute top-4 left-4 w-12 h-12 opacity-30 transform -rotate-12">📌</div>
                            <div class="absolute top-8 right-8 w-12 h-12 opacity-30 transform rotate-12">📌</div>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
                                <div class="relative transform rotate-2 hover:rotate-0 transition-transform">
                                    <div class="bg-white p-4 shadow-xl ${borderStyles[borderStyle]}">
                                        <div class="aspect-square flex items-center justify-center text-5xl mb-3" style="background: ${photoBg};">📸</div>
                                        <div class="text-xs text-gray-500 italic" style="font-family: 'Georgia', serif;">Moment 1</div>
                                        <div class="absolute -top-2 -right-2 text-2xl">📌</div>
                                    </div>
                                </div>
                                <div class="relative transform -rotate-1 hover:rotate-0 transition-transform">
                                    <div class="bg-white p-4 shadow-xl ${borderStyles[borderStyle]}">
                                        <div class="aspect-square flex items-center justify-center text-5xl mb-3" style="background: ${photoBg};">📸</div>
                                        <div class="text-xs text-gray-500 italic" style="font-family: 'Georgia', serif;">Moment 2</div>
                                        <div class="absolute -top-2 -right-2 text-2xl">📌</div>
                                    </div>
                                </div>
                                <div class="relative transform rotate-1 hover:rotate-0 transition-transform">
                                    <div class="bg-white p-4 shadow-xl ${borderStyles[borderStyle]}">
                                        <div class="aspect-square flex items-center justify-center text-5xl mb-3" style="background: ${photoBg};">📸</div>
                                        <div class="text-xs text-gray-500 italic" style="font-family: 'Georgia', serif;">Moment 3</div>
                                        <div class="absolute -top-2 -right-2 text-2xl">📌</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'film') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                    <div class="max-w-4xl mx-auto">
                        <div class="relative p-6 rounded-lg" style="background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);">
                            <div class="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-2" style="background: #1a1a1a;">
                                ${[...Array(12)].map((_, i) => `<div class="w-3 h-6 bg-gray-700 rounded-sm"></div>`).join('')}
                            </div>
                            <div class="absolute bottom-0 left-0 right-0 h-8 flex items-center justify-between px-2" style="background: #1a1a1a;">
                                ${[...Array(12)].map((_, i) => `<div class="w-3 h-6 bg-gray-700 rounded-sm"></div>`).join('')}
                            </div>
                            <div class="pt-8 pb-8">
                                <div class="flex ${spacings[spacing]} overflow-x-auto scrollbar-hide">
                                    <div class="flex-shrink-0 w-48 aspect-[3/4] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-lg" style="background: ${photoBg};">📸</div>
                                    <div class="flex-shrink-0 w-48 aspect-[3/4] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-lg" style="background: ${photoBg};">📸</div>
                                    <div class="flex-shrink-0 w-48 aspect-[3/4] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-lg" style="background: ${photoBg};">📸</div>
                                    <div class="flex-shrink-0 w-48 aspect-[3/4] ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-lg" style="background: ${photoBg};">📸</div>
                                </div>
                            </div>
                        </div>
                        <p class="text-center text-xs text-gray-500 mt-4">Swipe to view more</p>
                    </div>
                </div>
            `;
        } else if (layout === 'collage') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-3xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-10">${data.description}</p>` : ''}
                    <div class="max-w-4xl mx-auto">
                        <div class="grid grid-cols-6 grid-rows-4 gap-3 h-[600px]">
                            <div class="col-span-3 row-span-2 ${borderStyles[borderStyle]} flex items-center justify-center text-6xl shadow-xl transform hover:scale-105 transition-transform" style="background: ${photoBg};">📸</div>
                            <div class="col-span-2 row-span-2 ${borderStyles[borderStyle]} flex items-center justify-center text-5xl shadow-lg transform hover:scale-105 transition-transform" style="background: ${photoBg};">📸</div>
                            <div class="col-span-1 row-span-4 ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-lg transform hover:scale-105 transition-transform" style="background: ${photoBg};">📸</div>
                            <div class="col-span-2 row-span-2 ${borderStyles[borderStyle]} flex items-center justify-center text-4xl shadow-lg transform hover:scale-105 transition-transform" style="background: ${photoBg};">📸</div>
                            <div class="col-span-3 row-span-2 ${borderStyles[borderStyle]} flex items-center justify-center text-6xl shadow-xl transform hover:scale-105 transition-transform" style="background: ${photoBg};">📸</div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Classic Grid (default)
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Our Journey'}</h2>
                    ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                    <div class="max-w-md mx-auto grid ${gridCols[columns]} ${spacings[spacing]}">
                        <div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-3xl shadow-md" style="background: ${photoBg};">📸</div>
                        <div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-3xl shadow-md" style="background: ${photoBg};">📸</div>
                        <div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-3xl shadow-md" style="background: ${photoBg};">📸</div>
                        ${columns === '4' ? `<div class="aspect-square ${borderStyles[borderStyle]} flex items-center justify-center text-3xl shadow-md" style="background: ${photoBg};">📸</div>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
