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
                    <option value="collage">Artistic Collage</option>
                    <option value="album">Photo Album</option>
                    <option value="wall">Memory Wall</option>
                    <option value="timeline-photos">Timeline Photos</option>
                    <option value="floating-frames">Floating Frames</option>
                    <option value="instagram">Instagram Grid</option>
                    <option value="heart-shape">Heart Shape</option>
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
        } else if (layout === 'collage') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto relative" style="min-height: 600px;">
                    ${photos.map((photo, i) => {
                        const positions = [
                            { top: '10px', left: '20px', rotation: -5, size: '180px' },
                            { top: '50px', right: '30px', rotation: 8, size: '160px' },
                            { top: '200px', left: '50%', rotation: -3, size: '200px', translate: '-50%' },
                            { top: '240px', left: '10px', rotation: 12, size: '150px' },
                            { top: '280px', right: '20px', rotation: -8, size: '170px' },
                            { top: '450px', left: '25%', rotation: 5, size: '180px' }
                        ];
                        const pos = positions[i % positions.length];
                        return `
                            <div class="absolute transform hover:scale-110 hover:z-50 transition shadow-2xl" style="top: ${pos.top}; ${pos.left ? `left: ${pos.left}` : `right: ${pos.right}`}; transform: rotate(${pos.rotation}deg) ${pos.translate ? `translateX(${pos.translate})` : ''};">
                                <div class="bg-white p-3" style="width: ${pos.size};">
                                    <div class="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-2">
                                        <div class="text-center">
                                            <div class="text-4xl mb-2">💝</div>
                                            <p class="text-xs font-medium px-2">${photo.trim()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'album') {
            galleryHTML = `
                <div class="max-w-3xl mx-auto">
                    ${photos.map((photo, i) => `
                        <div class="mb-12">
                            <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 12px solid #8b7355;">
                                <div class="grid md:grid-cols-2">
                                    <div class="h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-6xl">
                                        📷
                                    </div>
                                    <div class="p-8 flex flex-col justify-center" style="background: linear-gradient(135deg, #fef8f3, #fcf0e8);">
                                        <div class="text-sm font-bold tracking-widest mb-2" style="color: ${accentColor};">MEMORY ${i + 1}</div>
                                        <h3 class="text-2xl font-serif font-bold mb-4" style="color: ${accentColor}; font-family: Georgia, serif;">
                                            ${photo.trim()}
                                        </h3>
                                        <div class="flex gap-2">
                                            <div class="text-2xl">💕</div>
                                            <div class="text-2xl">💖</div>
                                            <div class="text-2xl">💗</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'wall') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto" style="background: linear-gradient(135deg, #2d3748, #1a202c); padding: 40px; border-radius: 12px;">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        ${photos.map((photo, i) => {
                            const frames = [
                                'border-8 border-white',
                                'border-8 border-amber-900',
                                'border-8 border-gray-800',
                                'border-4 border-double border-white'
                            ];
                            const frame = frames[i % frames.length];
                            return `
                                <div class="transform hover:scale-105 transition">
                                    <div class="${frame} bg-white shadow-2xl">
                                        <div class="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center p-4">
                                            <div class="text-center">
                                                <div class="text-4xl mb-2">🖼️</div>
                                                <p class="text-xs font-semibold">${photo.trim()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (layout === 'timeline-photos') {
            galleryHTML = `
                <div class="max-w-3xl mx-auto relative">
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style="background: ${accentColor}40;"></div>
                    ${photos.map((photo, i) => {
                        const isLeft = i % 2 === 0;
                        return `
                            <div class="relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-12">
                                <div class="w-5/12">
                                    <div class="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition">
                                        <div class="h-48 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-5xl">
                                            📸
                                        </div>
                                        <div class="p-4" style="background: ${accentColor}10;">
                                            <p class="text-sm font-semibold text-gray-800">${photo.trim()}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${accentColor}; top: 50%;">
                                    <div class="text-white text-sm font-bold">${i + 1}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'floating-frames') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto grid grid-cols-2 gap-8">
                    ${photos.map((photo, i) => {
                        const shadows = [
                            'shadow-2xl hover:shadow-rose-500/50',
                            'shadow-2xl hover:shadow-pink-500/50',
                            'shadow-2xl hover:shadow-purple-500/50'
                        ];
                        const shadow = shadows[i % shadows.length];
                        return `
                            <div class="transform hover:-translate-y-4 transition duration-300">
                                <div class="relative bg-white p-4 rounded-2xl ${shadow}">
                                    <div class="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center mb-3">
                                        <div class="text-5xl">💝</div>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-sm font-semibold text-gray-800">${photo.trim()}</p>
                                    </div>
                                    <!-- Floating effect decoration -->
                                    <div class="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center" style="background: ${accentColor};">
                                        <span class="text-white text-xl">💕</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'instagram') {
            galleryHTML = `
                <div class="max-w-2xl mx-auto">
                    <div class="grid grid-cols-3 gap-1">
                        ${photos.map((photo, i) => `
                            <div class="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 relative group cursor-pointer overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center text-4xl">
                                    📷
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                                    <p class="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition px-2 text-center">
                                        ${photo.trim()}
                                    </p>
                                </div>
                                <!-- Instagram-style likes indicator -->
                                <div class="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition">
                                    <div class="flex items-center gap-1 text-white text-xs">
                                        <span>❤️</span>
                                        <span>${Math.floor(Math.random() * 100) + 50}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (layout === 'heart-shape') {
            galleryHTML = `
                <div class="max-w-4xl mx-auto relative" style="min-height: 500px;">
                    <!-- Heart shape arrangement -->
                    ${photos.map((photo, i) => {
                        // Heart shape positions (simplified for mobile)
                        const heartPositions = [
                            { top: '10%', left: '50%', translate: '-50%' },
                            { top: '20%', left: '30%' },
                            { top: '20%', right: '30%' },
                            { top: '40%', left: '15%' },
                            { top: '40%', right: '15%' },
                            { top: '60%', left: '25%' },
                            { top: '60%', right: '25%' },
                            { top: '80%', left: '50%', translate: '-50%' }
                        ];
                        const pos = heartPositions[i % heartPositions.length];
                        return `
                            <div class="absolute transform hover:scale-110 transition" style="top: ${pos.top}; ${pos.left ? `left: ${pos.left}` : `right: ${pos.right}`}; ${pos.translate ? `transform: translateX(${pos.translate})` : ''};">
                                <div class="bg-white p-3 rounded-full shadow-2xl" style="border: 4px solid ${accentColor};">
                                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                                        <div class="text-center">
                                            <div class="text-2xl">💕</div>
                                            <p class="text-xs font-bold mt-1" style="color: ${accentColor};">${i + 1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                    <!-- Center heart -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10">
                        ❤️
                    </div>
                </div>
                <!-- Photo labels -->
                <div class="max-w-2xl mx-auto mt-8 grid grid-cols-2 gap-4">
                    ${photos.map((photo, i) => `
                        <div class="flex items-center gap-3 bg-white rounded-lg p-3 shadow-md">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accentColor};">
                                ${i + 1}
                            </div>
                            <p class="text-sm font-medium text-gray-700">${photo.trim()}</p>
                        </div>
                    `).join('')}
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
