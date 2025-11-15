// Photo Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '📸 Photo Gallery',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Photo Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Description</label>
                <textarea placeholder="A collection of memorable moments throughout the years..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-400 cursor-pointer">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid2">2 Column Grid</option>
                    <option value="grid3">3 Column Grid</option>
                    <option value="masonry">Masonry Style</option>
                    <option value="carousel">Carousel View</option>
                    <option value="polaroid">Polaroid Style</option>
                    <option value="collage">Creative Collage</option>
                    <option value="filmstrip">Film Strip</option>
                    <option value="scattered">Scattered Photos</option>
                    <option value="showcase">Featured Showcase</option>
                    <option value="timeline">Timeline Gallery</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'grid2';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        switch(layout) {
            case 'grid2':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-4">
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'grid3':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-3 gap-3">
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'masonry':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-3">
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-[3/4] rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}30;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-[3/4] rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}30;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'carousel':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="relative">
                                <div class="aspect-[4/3] rounded-xl flex items-center justify-center shadow-xl" style="background: ${accentColor}20;">
                                    <span class="text-6xl">📷</span>
                                </div>
                                <div class="flex justify-center gap-2 mt-4">
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor}40;"></div>
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor}40;"></div>
                                    <div class="w-3 h-3 rounded-full" style="background: ${accentColor}40;"></div>
                                </div>
                                <div class="flex justify-between mt-4">
                                    <button class="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style="background: ${accentColor}; color: white;">←</button>
                                    <button class="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style="background: ${accentColor}; color: white;">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'polaroid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Memories'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-6">
                                <div class="bg-white p-3 shadow-lg transform rotate-[-3deg]">
                                    <div class="aspect-square flex items-center justify-center mb-2" style="background: ${accentColor}20;">
                                        <span class="text-4xl">📷</span>
                                    </div>
                                    <p class="text-center text-xs" style="color: ${textColor};">Memory 1</p>
                                </div>
                                <div class="bg-white p-3 shadow-lg transform rotate-[5deg]">
                                    <div class="aspect-square flex items-center justify-center mb-2" style="background: ${accentColor}20;">
                                        <span class="text-4xl">📷</span>
                                    </div>
                                    <p class="text-center text-xs" style="color: ${textColor};">Memory 2</p>
                                </div>
                                <div class="bg-white p-3 shadow-lg transform rotate-[2deg]">
                                    <div class="aspect-square flex items-center justify-center mb-2" style="background: ${accentColor}20;">
                                        <span class="text-4xl">📷</span>
                                    </div>
                                    <p class="text-center text-xs" style="color: ${textColor};">Memory 3</p>
                                </div>
                                <div class="bg-white p-3 shadow-lg transform rotate-[-4deg]">
                                    <div class="aspect-square flex items-center justify-center mb-2" style="background: ${accentColor}20;">
                                        <span class="text-4xl">📷</span>
                                    </div>
                                    <p class="text-center text-xs" style="color: ${textColor};">Memory 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'collage':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Collage'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="relative h-96 rounded-xl overflow-hidden shadow-xl" style="background: ${accentColor}10;">
                                <div class="absolute top-4 left-4 w-32 h-32 rounded-lg shadow-md transform rotate-[-8deg] flex items-center justify-center" style="background: ${accentColor}30;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="absolute top-4 right-4 w-32 h-40 rounded-lg shadow-md transform rotate-[5deg] flex items-center justify-center" style="background: ${accentColor}20;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="absolute bottom-4 left-8 w-36 h-32 rounded-lg shadow-md transform rotate-[3deg] flex items-center justify-center" style="background: ${accentColor}25;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="absolute bottom-8 right-6 w-28 h-28 rounded-lg shadow-md transform rotate-[-6deg] flex items-center justify-center" style="background: ${accentColor}35;">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-32 rounded-lg shadow-md rotate-[-2deg] flex items-center justify-center" style="background: ${accentColor}40;">
                                    <span class="text-2xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center opacity-80 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-4">
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square rounded-lg flex items-center justify-center shadow-md" style="background: ${accentColor}20;">
                                    <span class="text-4xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
