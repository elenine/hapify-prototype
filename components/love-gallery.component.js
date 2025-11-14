// Love Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-gallery'] = {
    name: '🖼️ Love Gallery',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Love Gallery" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Love Gallery" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Description</label>
                <textarea placeholder="A collection of our most cherished moments together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 1</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photo1" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 2</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photo2" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 3</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photo3" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 4</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photo4" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 5</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photo5" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo 6</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="photo6" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Layout</option>
                    <option value="masonry">Masonry Style</option>
                    <option value="carousel">Carousel View</option>
                    <option value="collage">Collage Style</option>
                    <option value="polaroid">Polaroid Wall</option>
                    <option value="filmstrip">Film Strip</option>
                    <option value="scrapbook">Scrapbook Style</option>
                    <option value="heart">Heart Shape</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">Square</option>
                    <option value="sm">Small Rounded</option>
                    <option value="md" selected>Medium Rounded</option>
                    <option value="lg">Large Rounded</option>
                    <option value="full">Circular</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const photos = [];
        for (let i = 1; i <= 6; i++) {
            if (data[`photo${i}`]) {
                photos.push(data[`photo${i}`]);
            }
        }

        const layout = style.layout || 'grid';
        const accentColor = style.accent || '#ec4899';
        const borderRadius = {
            'none': '0',
            'sm': '0.375rem',
            'md': '0.75rem',
            'lg': '1.5rem',
            'full': '9999px'
        }[style.borderRadius || 'md'];

        let galleryHTML = '';

        if (photos.length === 0) {
            galleryHTML = `
                <div class="text-center py-12">
                    <div class="text-6xl mb-4">📷</div>
                    <p class="text-gray-400">Upload photos to create your gallery</p>
                </div>
            `;
        } else {
            if (layout === 'grid') {
                galleryHTML = `
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        ${photos.map(photo => `
                            <div class="aspect-square overflow-hidden shadow-lg hover:shadow-xl transition" style="border-radius: ${borderRadius}">
                                <img src="${photo}" alt="Love Photo" class="w-full h-full object-cover hover:scale-110 transition duration-300">
                            </div>
                        `).join('')}
                    </div>
                `;
            } else if (layout === 'masonry') {
                galleryHTML = `
                    <div class="columns-2 md:columns-3 gap-4">
                        ${photos.map(photo => `
                            <div class="mb-4 break-inside-avoid overflow-hidden shadow-lg hover:shadow-xl transition" style="border-radius: ${borderRadius}">
                                <img src="${photo}" alt="Love Photo" class="w-full hover:scale-105 transition duration-300">
                            </div>
                        `).join('')}
                    </div>
                `;
            } else if (layout === 'carousel') {
                galleryHTML = `
                    <div class="max-w-3xl mx-auto">
                        <div class="overflow-hidden" style="border-radius: ${borderRadius}">
                            <img src="${photos[0]}" alt="Love Photo" class="w-full h-96 object-cover shadow-2xl">
                        </div>
                        <div class="flex gap-2 mt-4 justify-center">
                            ${photos.map((photo, i) => `
                                <div class="w-16 h-16 overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition" style="border-radius: ${borderRadius}">
                                    <img src="${photo}" alt="Thumbnail ${i+1}" class="w-full h-full object-cover">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else if (layout === 'collage') {
                if (photos.length === 1) {
                    galleryHTML = `
                        <div class="max-w-2xl mx-auto overflow-hidden shadow-xl" style="border-radius: ${borderRadius}">
                            <img src="${photos[0]}" alt="Love Photo" class="w-full h-96 object-cover">
                        </div>
                    `;
                } else if (photos.length === 2) {
                    galleryHTML = `
                        <div class="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                            ${photos.map(photo => `
                                <div class="overflow-hidden shadow-xl" style="border-radius: ${borderRadius}">
                                    <img src="${photo}" alt="Love Photo" class="w-full h-80 object-cover">
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else {
                    galleryHTML = `
                        <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-5xl mx-auto h-96">
                            <div class="col-span-2 row-span-2 overflow-hidden shadow-xl" style="border-radius: ${borderRadius}">
                                <img src="${photos[0]}" alt="Love Photo" class="w-full h-full object-cover">
                            </div>
                            ${photos.slice(1, 5).map(photo => `
                                <div class="overflow-hidden shadow-xl" style="border-radius: ${borderRadius}">
                                    <img src="${photo}" alt="Love Photo" class="w-full h-full object-cover">
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
            } else if (layout === 'polaroid') {
                galleryHTML = `
                    <div class="flex flex-wrap justify-center gap-6">
                        ${photos.map((photo, i) => {
                            const rotation = (i % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2);
                            return `
                                <div class="transform hover:scale-110 transition" style="transform: rotate(${rotation}deg);">
                                    <div class="bg-white p-4 shadow-2xl" style="width: 200px;">
                                        <img src="${photo}" alt="Love Photo" class="w-full h-48 object-cover mb-3">
                                        <div class="text-center">
                                            <div class="text-sm text-gray-500">💕</div>
                                        </div>
                                        <div class="h-6"></div>
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

                                    <img src="${photo}" alt="Love Photo" class="w-48 h-64 object-cover">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else if (layout === 'scrapbook') {
                galleryHTML = `
                    <div class="max-w-5xl mx-auto space-y-8">
                        ${photos.map((photo, i) => {
                            const isLeft = i % 2 === 0;
                            const rotation = (isLeft ? -1 : 1) * (Math.random() * 2 + 1);
                            return `
                                <div class="${isLeft ? 'text-left' : 'text-right'}">
                                    <div class="inline-block transform hover:scale-105 transition" style="transform: rotate(${rotation}deg);">
                                        <div class="bg-white p-6 rounded-lg shadow-xl relative" style="border: 3px dashed ${accentColor}40;">
                                            <!-- Decorative tape -->
                                            <div class="absolute -top-3 ${isLeft ? 'left-8' : 'right-8'} w-20 h-6 opacity-50" style="background: linear-gradient(to right, transparent, ${accentColor}, transparent); transform: rotate(-5deg);"></div>

                                            <img src="${photo}" alt="Love Photo" class="w-64 h-64 object-cover rounded-lg mb-4">
                                            <div class="text-center">
                                                <div class="text-2xl">💕</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            } else if (layout === 'heart') {
                galleryHTML = `
                    <div class="max-w-4xl mx-auto">
                        <div class="grid grid-cols-3 gap-4 mb-4">
                            ${photos.slice(0, 3).map(photo => `
                                <div class="overflow-hidden shadow-xl" style="border-radius: ${borderRadius}; border: 3px solid ${accentColor}40;">
                                    <img src="${photo}" alt="Love Photo" class="w-full h-48 object-cover hover:scale-110 transition">
                                </div>
                            `).join('')}
                        </div>
                        ${photos.length > 3 ? `
                            <div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                                ${photos.slice(3, 6).map(photo => `
                                    <div class="overflow-hidden shadow-xl" style="border-radius: ${borderRadius}; border: 3px solid ${accentColor}40;">
                                        <img src="${photo}" alt="Love Photo" class="w-full h-48 object-cover hover:scale-110 transition">
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                        <div class="text-center mt-6">
                            <div class="text-6xl" style="color: ${accentColor}">💕</div>
                        </div>
                    </div>
                `;
            }
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">🖼️</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'Our Love Gallery'}</h2>
                        ${data.description ? `<p class="text-lg text-gray-600">${data.description}</p>` : ''}
                    </div>
                    ${galleryHTML}
                </div>
            </div>
        `;
    }
};
