// Photo Memories Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['photo-memories'] = {
    name: '📷 Photo Memories',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Beautiful Moments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Captions (one per line)</label>
                <textarea placeholder="First Date&#10;Vacation Together&#10;Anniversary&#10;Special Moment&#10;Celebration&#10;Adventure" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photos" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Each line represents one photo caption</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Gallery</option>
                    <option value="polaroid">Polaroid Stack</option>
                    <option value="masonry">Masonry Layout</option>
                    <option value="carousel">Carousel Style</option>
                    <option value="scrapbook">Scrapbook Style</option>
                    <option value="filmstrip">Film Strip</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff1f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Grid Columns (for Grid Layout)</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="columns" onchange="updatePreview()">
                    <option value="2" selected>2 Columns</option>
                    <option value="3">3 Columns</option>
                    <option value="4">4 Columns</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const photos = (data.photos || '').split('\n').filter(p => p.trim());
        const columns = style.columns || '2';
        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#fff1f2';
        const accentColor = style.accent || '#f43f5e';

        let galleryHTML = '';

        if (layout === 'grid') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto grid grid-cols-${columns} gap-4">
                    ${photos.map(photo => `
                        <div class="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition flex items-center justify-center">
                            <div class="text-center p-4">
                                <div class="text-4xl mb-2">💕</div>
                                <div class="text-sm font-medium text-gray-700">${photo.trim()}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'polaroid') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
                    ${photos.map((photo, i) => {
                        const rotation = (i % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2);
                        return `
                            <div class="transform hover:scale-110 transition" style="transform: rotate(${rotation}deg);">
                                <div class="bg-white p-4 shadow-2xl" style="width: 180px;">
                                    <div class="bg-gradient-to-br from-rose-100 to-pink-100 h-48 flex items-center justify-center mb-3 text-4xl">
                                        📸
                                    </div>
                                    <p class="text-sm text-gray-700 text-center font-handwriting">${photo.trim()}</p>
                                    <div class="h-6"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'masonry') {
            const col1 = photos.filter((_, i) => i % 3 === 0);
            const col2 = photos.filter((_, i) => i % 3 === 1);
            const col3 = photos.filter((_, i) => i % 3 === 2);

            const renderColumn = (items) => items.map((photo, i) => {
                const heights = ['h-48', 'h-64', 'h-56', 'h-72'];
                const height = heights[i % heights.length];
                return `
                    <div class="${height} bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center justify-center mb-4">
                        <div class="text-5xl mb-4">💖</div>
                        <p class="text-sm font-medium text-gray-700 text-center">${photo.trim()}</p>
                    </div>
                `;
            }).join('');

            galleryHTML = `
                <div class="max-w-4xl mx-auto grid grid-cols-3 gap-4">
                    <div>${renderColumn(col1)}</div>
                    <div>${renderColumn(col2)}</div>
                    <div>${renderColumn(col3)}</div>
                </div>
            `;
        } else if (layout === 'carousel') {
            galleryHTML = `
                <div class="max-w-3xl mx-auto overflow-hidden">
                    <div class="flex gap-4 overflow-x-auto pb-4" style="scroll-snap-type: x mandatory;">
                        ${photos.map(photo => `
                            <div class="flex-shrink-0 w-72 h-96 rounded-2xl shadow-2xl overflow-hidden" style="scroll-snap-align: center; background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                <div class="h-full flex flex-col items-center justify-center p-8 text-center">
                                    <div class="text-6xl mb-6">💝</div>
                                    <p class="text-lg font-semibold text-gray-800">${photo.trim()}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (layout === 'scrapbook') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto">
                    ${photos.map((photo, i) => {
                        const isLeft = i % 2 === 0;
                        const rotation = (isLeft ? -1 : 1) * (Math.random() * 2 + 1);
                        return `
                            <div class="mb-8 ${isLeft ? 'text-left' : 'text-right'}">
                                <div class="inline-block transform hover:scale-105 transition" style="transform: rotate(${rotation}deg);">
                                    <div class="bg-white p-6 rounded-lg shadow-xl" style="border: 3px dashed ${accentColor}40;">
                                        <div class="flex items-center gap-4 mb-4">
                                            <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style="background: ${accentColor}20;">
                                                💕
                                            </div>
                                            <div class="flex-1">
                                                <p class="text-base font-semibold text-gray-800">${photo.trim()}</p>
                                            </div>
                                        </div>
                                        <div class="w-full h-48 rounded-lg" style="background: linear-gradient(135deg, ${accentColor}10, ${accentColor}30); display: flex; align-items: center; justify-center; font-size: 3rem;">
                                            📷
                                        </div>
                                        <!-- Decorative tape -->
                                        <div class="absolute -top-2 left-8 w-16 h-8 opacity-50" style="background: linear-gradient(to right, transparent, #fbbf24, transparent); transform: rotate(-5deg);"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'filmstrip') {
            galleryHTML = `
                <div class="max-w-5xl mx-auto bg-gray-900 rounded-lg p-6 shadow-2xl">
                    <div class="flex gap-2 overflow-x-auto">
                        ${photos.map(photo => `
                            <div class="flex-shrink-0 relative">
                                <!-- Film perforations -->
                                <div class="absolute -top-3 left-0 right-0 flex justify-between px-2">
                                    <div class="w-2 h-2 rounded-full bg-gray-700"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-700"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-700"></div>
                                </div>
                                <div class="absolute -bottom-3 left-0 right-0 flex justify-between px-2">
                                    <div class="w-2 h-2 rounded-full bg-gray-700"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-700"></div>
                                    <div class="w-2 h-2 rounded-full bg-gray-700"></div>
                                </div>

                                <div class="w-48 h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex flex-col items-center justify-center text-center p-4">
                                    <div class="text-4xl mb-3">📸</div>
                                    <p class="text-sm font-medium text-gray-800">${photo.trim()}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="text-center mb-10">
                    <div class="text-5xl mb-4">📷</div>
                    <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Beautiful Moments'}</h2>
                </div>
                ${galleryHTML}
            </div>
        `;
    }
};
