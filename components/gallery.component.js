// Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
                name: '🖼️ Gallery',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Work" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Titles (one per line)</label>
                            <textarea placeholder="Project Alpha&#10;Project Beta&#10;Project Gamma&#10;Project Delta&#10;Project Epsilon&#10;Project Zeta" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="images" oninput="updatePreview()"></textarea>
                            <p class="text-xs text-gray-500 mt-1">Each line represents one image in the gallery</p>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid View</option>
                                <option value="masonry">Masonry Style</option>
                                <option value="featured">Featured + Thumbnails</option>
                                <option value="carousel">Carousel View</option>
                                <option value="minimal">Minimal List</option>
                                <option value="gradient">Gradient Gallery</option>
                                <option value="polaroid">Polaroid Style</option>
                                <option value="badge">Badge Gallery</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                                <option value="2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'grid';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#3b82f6';
                    const secondaryColor = style.secondary || '#10b981';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
                    const title = data.title || 'Our Work';
                    const images = (data.images || '').split('\n').filter(i => i.trim());

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (images.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add images to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-3">
                                        ${images.map(image => `
                                            <div class="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                <div class="h-full flex flex-col items-center justify-center p-4 text-center">
                                                    <div class="text-3xl mb-2">🖼️</div>
                                                    <div class="text-xs font-semibold" style="color: ${accentColor};">${image.trim()}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'masonry':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${images.map((image, idx) => {
                                            const heights = ['h-32', 'h-40', 'h-36', 'h-44'];
                                            const height = heights[idx % heights.length];
                                            return `
                                                <div class="${height} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}35);">
                                                    <div class="h-full flex flex-col items-center justify-center p-4 text-center">
                                                        <div class="text-4xl mb-2">🖼️</div>
                                                        <div class="text-sm font-semibold" style="color: ${accentColor};">${image.trim()}</div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            const featured = images[0];
                            const thumbnails = images.slice(1);
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        <div class="h-48 rounded-xl overflow-hidden shadow-lg" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                            <div class="h-full flex flex-col items-center justify-center p-6 text-center">
                                                <div class="text-5xl mb-3">🖼️</div>
                                                <div class="text-base font-bold text-white">${featured.trim()}</div>
                                            </div>
                                        </div>
                                        ${thumbnails.length > 0 ? `
                                            <div class="grid grid-cols-3 gap-2">
                                                ${thumbnails.map(image => `
                                                    <div class="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                        <div class="h-full flex flex-col items-center justify-center p-2 text-center">
                                                            <div class="text-2xl mb-1">🖼️</div>
                                                            <div class="text-xs font-medium" style="color: ${accentColor};">${image.trim()}</div>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'carousel':
                            const currentImage = images[0];
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative rounded-2xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                            <div class="aspect-video flex flex-col items-center justify-center p-8 text-center">
                                                <div class="text-6xl mb-4">🖼️</div>
                                                <div class="text-lg font-bold mb-2" style="color: ${accentColor};">${currentImage.trim()}</div>
                                                <div class="text-xs text-gray-600">Image 1 of ${images.length}</div>
                                            </div>
                                            <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                                ${images.map((_, idx) => `
                                                    <div class="w-2 h-2 rounded-full ${idx === 0 ? 'opacity-100' : 'opacity-30'}" style="background: ${accentColor};"></div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-2">
                                        ${images.map((image, idx) => `
                                            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border-l-4" style="border-color: ${accentColor};">
                                                <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}15;">
                                                    🖼️
                                                </div>
                                                <div class="flex-1">
                                                    <div class="font-semibold text-sm">${image.trim()}</div>
                                                    <div class="text-xs text-gray-500">Image ${idx + 1}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${images.map((image, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const gradientColor = isEven ? `linear-gradient(135deg, ${accentColor}, ${secondaryColor})` : `linear-gradient(135deg, ${secondaryColor}, ${accentColor})`;
                                            return `
                                            <div class="aspect-square ${radius} ${shadowClass} overflow-hidden hover:shadow-2xl transition" style="background: ${gradientColor};">
                                                <div class="h-full flex flex-col items-center justify-center p-4 text-center">
                                                    <div class="text-4xl mb-3 opacity-80">🖼️</div>
                                                    <div class="text-xs font-bold text-white">${image.trim()}</div>
                                                </div>
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            `;

                        case 'polaroid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${images.map((image, idx) => `
                                            <div class="bg-white p-3 ${radius} ${shadowClass} hover:shadow-2xl transition transform hover:-rotate-2">
                                                <div class="aspect-square ${radius} overflow-hidden mb-3" style="background: linear-gradient(135deg, ${accentColor}20, ${secondaryColor}20);">
                                                    <div class="h-full flex flex-col items-center justify-center p-4">
                                                        <div class="text-4xl mb-2">🖼️</div>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <div class="text-xs font-semibold text-gray-700">${image.trim()}</div>
                                                    <div class="text-xs text-gray-400 mt-1">#${idx + 1}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'badge':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${images.map((image, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const badgeColor = isEven ? accentColor : secondaryColor;
                                            return `
                                            <div class="relative">
                                                <div class="aspect-square bg-white ${radius} ${shadowClass} overflow-hidden hover:shadow-2xl transition">
                                                    <div class="h-full flex flex-col items-center justify-center p-4" style="background: ${badgeColor}10;">
                                                        <div class="text-4xl mb-2">🖼️</div>
                                                        <div class="text-xs font-semibold text-center" style="color: ${badgeColor};">${image.trim()}</div>
                                                    </div>
                                                </div>
                                                <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg" style="background: ${badgeColor};">
                                                    ${idx + 1}
                                                </div>
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-3">
                                        ${images.map(image => `
                                            <div class="aspect-square rounded-lg overflow-hidden shadow-md" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                <div class="h-full flex flex-col items-center justify-center p-4 text-center">
                                                    <div class="text-3xl mb-2">🖼️</div>
                                                    <div class="text-xs font-semibold">${image.trim()}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
