// Photo Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
                name: '📸 Photo Gallery',
                allowMultiple: true,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                            <input type="text" placeholder="Photo Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Description</label>
                            <textarea placeholder="A collection of our favorite moments together..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-400 cursor-pointer">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid - 2x2 Layout</option>
                                <option value="masonry">Masonry - Mixed Sizes</option>
                                <option value="carousel">Carousel - Featured</option>
                                <option value="polaroid">Polaroid - Classic Style</option>
                                <option value="collage">Collage - Creative</option>
                                <option value="filmstrip">Filmstrip - Horizontal Row</option>
                                <option value="scrapbook">Scrapbook - Tilted Style</option>
                                <option value="showcase">Showcase - Large Featured</option>
                                <option value="instagram">Instagram - Square Grid</option>
                                <option value="magazine">Magazine - Editorial Spread</option>
                                <option value="frame">Frame - Gallery Wall</option>
                                <option value="spiral">Spiral - Curved Arrangement</option>
                                <option value="mosaic">Mosaic - Artistic Tiles</option>
                                <option value="comic">Comic Strip - Panel Layout</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Photo Border Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                                <option value="rounded">Rounded</option>
                                <option value="square">Square</option>
                                <option value="circle">Circular Crop</option>
                                <option value="vintage">Vintage Frame</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shadow</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="none">None</option>
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                                <option value="2xl">Huge</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="spacing" onchange="updatePreview()">
                                <option value="tight">Tight</option>
                                <option value="normal">Normal</option>
                                <option value="loose">Loose</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Photo Count</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="photoCount" onchange="updatePreview()">
                                <option value="3">3 Photos</option>
                                <option value="4">4 Photos</option>
                                <option value="6">6 Photos</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'grid';
                    const bg = style.bg || '#ffffff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const borderStyle = style.borderStyle || 'rounded';
                    const shadow = style.shadow || 'md';

                    const borderClass = borderStyle === 'circle' ? 'rounded-full' : borderStyle === 'rounded' ? 'rounded-2xl' : 'rounded-none';
                    const shadowClass = shadow !== 'none' ? `shadow-${shadow}` : '';

                    // Grid Layout - 2x2
                    if (layout === 'grid') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-2 gap-4">
                                        ${[1,2,3,4].map(i => `
                                            <div class="aspect-square ${borderClass} ${shadowClass} flex items-center justify-center overflow-hidden" style="background: ${accentColor}15">
                                                <span class="text-5xl opacity-50">📷</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Masonry Layout - Mixed Sizes
                    if (layout === 'masonry') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="col-span-2 aspect-video ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}20">
                                            <span class="text-6xl opacity-50">📷</span>
                                        </div>
                                        <div class="aspect-square ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}15">
                                            <span class="text-4xl opacity-50">📷</span>
                                        </div>
                                        <div class="aspect-square ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}15">
                                            <span class="text-4xl opacity-50">📷</span>
                                        </div>
                                        <div class="col-span-2 aspect-video ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}20">
                                            <span class="text-6xl opacity-50">📷</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Carousel Layout - Featured
                    if (layout === 'carousel') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="relative">
                                        <div class="aspect-[4/3] ${borderClass} ${shadowClass} mb-4 flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}10)">
                                            <span class="text-8xl opacity-50">📷</span>
                                        </div>
                                        <div class="flex gap-2 justify-center">
                                            ${[1,2,3,4].map(i => `
                                                <div class="w-12 h-12 ${borderClass} ${shadowClass} flex items-center justify-center text-sm opacity-70 cursor-pointer hover:opacity-100 transition" style="background: ${accentColor}15">
                                                    📷
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="flex justify-center gap-2 mt-4">
                                            <button class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}; color: white">‹</button>
                                            <button class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}; color: white">›</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Polaroid Layout - Classic Style
                    if (layout === 'polaroid') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-2 gap-6">
                                        ${[1,2,3,4].map((i, idx) => `
                                            <div class="bg-white p-3 shadow-xl ${idx % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-300">
                                                <div class="aspect-square flex items-center justify-center mb-3" style="background: ${accentColor}15">
                                                    <span class="text-4xl opacity-50">📷</span>
                                                </div>
                                                <div class="text-center text-xs text-gray-600 font-handwriting">Memory ${i}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Collage Layout - Creative
                    if (layout === 'collage') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="relative h-96">
                                        <div class="absolute top-0 left-0 w-48 h-40 ${borderClass} ${shadowClass} flex items-center justify-center -rotate-6" style="background: ${accentColor}20">
                                            <span class="text-4xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute top-4 right-0 w-40 h-40 ${borderClass} ${shadowClass} flex items-center justify-center rotate-12" style="background: ${accentColor}15">
                                            <span class="text-4xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute bottom-12 left-12 w-44 h-44 ${borderClass} ${shadowClass} flex items-center justify-center rotate-3" style="background: ${accentColor}25">
                                            <span class="text-5xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute bottom-8 right-8 w-36 h-36 ${borderClass} ${shadowClass} flex items-center justify-center -rotate-12" style="background: ${accentColor}10">
                                            <span class="text-4xl opacity-50">📷</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Instagram Layout - Square Grid
                    if (layout === 'instagram') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-md mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-3 gap-1">
                                        ${[1,2,3,4,5,6].map(i => `
                                            <div class="aspect-square ${shadowClass} flex items-center justify-center hover:opacity-80 cursor-pointer transition" style="background: linear-gradient(135deg, ${accentColor}${i*5}, ${accentColor}10)">
                                                <span class="text-3xl opacity-50">📷</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Magazine Layout - Editorial Spread
                    if (layout === 'magazine') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-3xl font-bold mb-2" style="font-family: serif; color: ${accentColor}">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-sm italic mb-8 opacity-70">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="col-span-2 row-span-2 aspect-[3/4] ${borderClass} ${shadowClass} flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}10)">
                                            <span class="text-8xl opacity-50">📷</span>
                                        </div>
                                        <div class="aspect-square ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}15">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="aspect-square ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}20">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="col-span-3 aspect-[16/9] ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}25">
                                            <span class="text-5xl opacity-50">📷</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Frame Layout - Gallery Wall
                    if (layout === 'frame') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-2 gap-6">
                                        ${[1,2,3,4].map((i, idx) => `
                                            <div class="relative p-4 bg-white ${shadowClass}" style="border: 8px solid ${idx % 2 === 0 ? accentColor : '#ffffff'}; box-shadow: 0 0 0 2px ${accentColor}40">
                                                <div class="aspect-[3/4] flex items-center justify-center" style="background: ${accentColor}10">
                                                    <span class="text-4xl opacity-50">📷</span>
                                                </div>
                                                <div class="absolute -bottom-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: ${accentColor}">
                                                    ${i}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Spiral Layout - Curved Arrangement
                    if (layout === 'spiral') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="relative h-96">
                                        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 ${borderClass} ${shadowClass} flex items-center justify-center rotate-0" style="background: ${accentColor}30">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute top-12 left-12 w-28 h-28 ${borderClass} ${shadowClass} flex items-center justify-center -rotate-12" style="background: ${accentColor}25">
                                            <span class="text-2xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute top-12 right-12 w-28 h-28 ${borderClass} ${shadowClass} flex items-center justify-center rotate-12" style="background: ${accentColor}25">
                                            <span class="text-2xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute bottom-16 left-6 w-32 h-32 ${borderClass} ${shadowClass} flex items-center justify-center -rotate-6" style="background: ${accentColor}20">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute bottom-16 right-6 w-32 h-32 ${borderClass} ${shadowClass} flex items-center justify-center rotate-6" style="background: ${accentColor}20">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}15">
                                            <span class="text-2xl opacity-50">📷</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Mosaic Layout - Artistic Tiles
                    if (layout === 'mosaic') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-xl mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="grid grid-cols-4 grid-rows-4 gap-2">
                                        <div class="col-span-2 row-span-2 ${borderClass} ${shadowClass} flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}10)">
                                            <span class="text-5xl opacity-50">📷</span>
                                        </div>
                                        <div class="${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}15">
                                            <span class="text-xl opacity-50">📷</span>
                                        </div>
                                        <div class="row-span-2 ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}20">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}25">
                                            <span class="text-xl opacity-50">📷</span>
                                        </div>
                                        <div class="row-span-2 ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}15">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="col-span-2 ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}10">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                        <div class="${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}20">
                                            <span class="text-xl opacity-50">📷</span>
                                        </div>
                                        <div class="col-span-2 ${borderClass} ${shadowClass} flex items-center justify-center" style="background: ${accentColor}25">
                                            <span class="text-3xl opacity-50">📷</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Comic Strip Layout - Panel Layout
                    if (layout === 'comic') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-lg mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-3">
                                            ${[1,2,3].map(i => `
                                                <div class="relative aspect-square border-4 border-black ${shadowClass} flex items-center justify-center" style="background: ${accentColor}${i*10}">
                                                    <span class="text-3xl opacity-50">📷</span>
                                                    <div class="absolute -top-2 -right-2 bg-white border-2 border-black px-2 py-1 rounded-full text-xs font-bold">
                                                        ${i}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="grid grid-cols-2 gap-3">
                                            ${[4,5].map(i => `
                                                <div class="relative aspect-[4/3] border-4 border-black ${shadowClass} flex items-center justify-center" style="background: ${accentColor}${i*10}">
                                                    <span class="text-4xl opacity-50">📷</span>
                                                    <div class="absolute -bottom-2 -left-2 bg-yellow-300 border-2 border-black px-3 py-1 rounded-lg text-xs font-bold" style="transform: rotate(-5deg)">
                                                        PANEL ${i}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
