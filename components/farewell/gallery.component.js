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

                    // Filmstrip Layout - Horizontal Row
                    if (layout === 'filmstrip') {
                        const spacing = style.spacing || 'normal';
                        const gapClass = spacing === 'tight' ? 'gap-2' : spacing === 'loose' ? 'gap-6' : 'gap-4';
                        const photoCount = parseInt(style.photoCount || '4');

                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="relative bg-black p-4 rounded-lg ${shadowClass}">
                                        <div class="flex overflow-x-auto ${gapClass} pb-2">
                                            ${Array.from({length: photoCount}, (_, i) => `
                                                <div class="flex-shrink-0 w-48 h-64 bg-white p-1">
                                                    <div class="w-full h-full ${borderClass} flex items-center justify-center" style="background: ${accentColor}15">
                                                        <span class="text-5xl opacity-50">📷</span>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="absolute top-0 left-0 right-0 h-3 bg-black border-t-2 border-b-2 border-gray-700"></div>
                                        <div class="absolute bottom-0 left-0 right-0 h-3 bg-black border-t-2 border-b-2 border-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Scrapbook Layout - Tilted Style
                    if (layout === 'scrapbook') {
                        const photoCount = parseInt(style.photoCount || '4');
                        const rotations = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3'];

                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <div class="max-w-xl mx-auto">
                                    <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                                    <div class="space-y-6">
                                        ${Array.from({length: photoCount}, (_, i) => `
                                            <div class="relative">
                                                <div class="bg-white p-4 ${shadowClass} ${rotations[i % 4]} hover:rotate-0 transition-transform duration-300">
                                                    <div class="aspect-video ${borderClass} mb-3 flex items-center justify-center" style="background: ${accentColor}${10 + (i * 5)}">
                                                        <span class="text-6xl opacity-50">📷</span>
                                                    </div>
                                                    <div class="text-sm text-gray-700 italic">Memory #${i + 1}</div>
                                                    ${i === 0 ? `
                                                        <div class="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center bg-yellow-200 ${shadowClass} rotate-45">
                                                            <span class="text-2xl -rotate-45">📌</span>
                                                        </div>
                                                    ` : i === 1 ? `
                                                        <div class="absolute -top-2 -left-2 w-8 h-12 flex items-center justify-center bg-red-400 ${shadowClass}">
                                                            <span class="text-xl text-white">🎀</span>
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Showcase Layout - Large Featured
                    if (layout === 'showcase') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(to bottom, ${bg}, ${accentColor}10)">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-3xl font-bold text-center mb-4" style="color: ${accentColor}">${data.title || 'Photo Gallery'}</h2>
                                    ${data.description ? `<p class="text-center text-gray-700 mb-8 text-lg">${data.description}</p>` : ''}

                                    <!-- Featured Large Photo -->
                                    <div class="mb-6">
                                        <div class="relative bg-white p-3 ${shadowClass} rounded-2xl">
                                            <div class="aspect-[16/10] ${borderClass} overflow-hidden flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}10)">
                                                <span class="text-9xl opacity-40">📷</span>
                                            </div>
                                            <div class="absolute top-6 right-6 bg-white ${shadowClass} px-4 py-2 rounded-full">
                                                <span class="text-xs font-bold" style="color: ${accentColor}">FEATURED</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Thumbnail Strip -->
                                    <div class="grid grid-cols-3 gap-4">
                                        ${[1,2,3].map(i => `
                                            <div class="bg-white p-2 ${shadowClass} rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                                <div class="aspect-square ${borderClass} flex items-center justify-center" style="background: ${accentColor}15">
                                                    <span class="text-3xl opacity-50">📷</span>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
