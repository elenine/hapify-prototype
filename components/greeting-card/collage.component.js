// Photo Collage Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.collage = {
    name: '🖼️ Photo Collage',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photos (Add 4-6 for best results)</label>
                <p class="text-xs text-gray-500 mb-2">Upload photos for the collage</p>
                <div data-items-container="collagePhoto" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'collagePhoto')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Photo
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classicGrid">Classic Grid - Traditional photo grid layout</option>
                    <option value="masonryCollage">Masonry Collage - Pinterest-style varied heights</option>
                    <option value="polaroidScatter">Polaroid Scatter - Tilted polaroid-style photos</option>
                    <option value="featuredLarge">Featured Large - One large photo with smaller ones</option>
                    <option value="circleCluster">Circle Cluster - Circular photo arrangement</option>
                    <option value="diagonalFlow">Diagonal Flow - Diagonal cascading layout</option>
                    <option value="heartShape">Heart Shape - Romantic heart arrangement</option>
                    <option value="magazine">Magazine Spread - Editorial layout style</option>
                    <option value="filmStrip">Film Strip - Horizontal film reel design</option>
                    <option value="overlap">Layered Overlap - Stacked overlapping photos</option>
                    <option value="mirror">Mirror Split - Symmetrical mirrored layout</option>
                    <option value="hexagons">Hexagon Tiles - Honeycomb pattern grid</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fafafa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Width</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderWidth" onchange="updatePreview()">
                    <option value="2">Thin (2px)</option>
                    <option value="4" selected>Medium (4px)</option>
                    <option value="6">Thick (6px)</option>
                    <option value="8">Extra Thick (8px)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="0">None</option>
                    <option value="0.5">Small</option>
                    <option value="0.75" selected>Medium</option>
                    <option value="1">Large</option>
                    <option value="9999">Full Round</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="2">Tight</option>
                    <option value="4" selected>Normal</option>
                    <option value="6">Relaxed</option>
                    <option value="8">Spacious</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const photos = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="collagePhoto"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const photoInput = item.querySelector('[data-field^="photo_"]');
                const photo = photoInput?.dataset.imageData || '';
                if (photo) photos.push(photo);
            });
        }

        const layout = style.layout || 'classicGrid';
        const borderWidth = style.borderWidth || '4';
        const borderRadius = style.borderRadius || '0.75';
        const shadow = style.shadow || 'md';
        const spacing = style.spacing || '4';
        const borderColor = style.border || '#ffffff';
        const bgColor = style.bg || '#fafafa';
        const textColor = style.text || '#1f2937';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const radiusClass = borderRadius === '9999' ? 'rounded-full' : borderRadius === '0' ? '' : `rounded-${borderRadius === '0.5' ? 'sm' : borderRadius === '0.75' ? 'lg' : 'xl'}`;
        const gapClass = `gap-${spacing}`;

        if (photos.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <p class="text-center text-gray-500">Add photos in the editor</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'classicGrid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 ${gapClass}">
                            ${photos.map((photo, index) => `
                                <div class="aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                    <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'masonryCollage') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 ${gapClass}">
                            ${photos.map((photo, index) => {
                                const heights = ['aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-video', 'aspect-square', 'aspect-[4/5]'];
                                return `
                                    <div class="${heights[index % heights.length]} overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                        <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'polaroidScatter') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 ${gapClass}">
                            ${photos.map((photo, index) => {
                                const rotations = [-3, 2, -2, 3, -1, 2];
                                return `
                                    <div class="p-3 bg-white ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}; transform: rotate(${rotations[index % rotations.length]}deg)">
                                        <div class="aspect-square overflow-hidden ${radiusClass}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'featuredLarge') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-4 ${gapClass}">
                            ${photos.map((photo, index) => {
                                if (index === 0) {
                                    return `
                                        <div class="col-span-2 row-span-2 aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    `;
                                }
                                return `
                                    <div class="aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                        <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'circleCluster') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 ${gapClass}">
                            ${photos.map((photo, index) => `
                                <div class="aspect-square overflow-hidden rounded-full ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                    <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'diagonalFlow') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 ${gapClass}">
                            ${photos.map((photo, index) => {
                                const positions = ['mt-0', 'mt-8', 'mt-4', 'mt-12', 'mt-6', 'mt-2'];
                                return `
                                    <div class="${positions[index % positions.length]}">
                                        <div class="aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'heartShape') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="relative" style="min-height: 400px">
                            ${photos.map((photo, index) => {
                                const positions = [
                                    {x: '25%', y: '20%'}, {x: '75%', y: '20%'},
                                    {x: '15%', y: '40%'}, {x: '50%', y: '35%'}, {x: '85%', y: '40%'},
                                    {x: '30%', y: '60%'}, {x: '70%', y: '60%'},
                                    {x: '50%', y: '80%'}
                                ];
                                const pos = positions[index % positions.length];
                                return `
                                    <div class="absolute" style="left: ${pos.x}; top: ${pos.y}; transform: translate(-50%, -50%)">
                                        <div class="w-24 h-24 overflow-hidden rounded-full ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'magazine') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-4 gap-4">
                            ${photos.map((photo, index) => {
                                const layouts = [
                                    'col-span-2 row-span-2', 'col-span-2 row-span-1',
                                    'col-span-1 row-span-1', 'col-span-1 row-span-2',
                                    'col-span-2 row-span-1', 'col-span-1 row-span-1'
                                ];
                                const span = layouts[index % layouts.length];
                                return `
                                    <div class="${span}">
                                        <div class="h-full overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'filmStrip') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-full mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="relative overflow-x-auto pb-8">
                            <div class="flex gap-2 px-4 py-6" style="min-width: max-content; background: linear-gradient(to right, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)">
                                ${photos.map((photo, index) => `
                                    <div class="flex-shrink-0 relative" style="width: 200px">
                                        <div class="absolute -left-1 -right-1 -top-3 -bottom-3 border-l-4 border-r-4" style="border-color: #1a1a1a"></div>
                                        <div class="aspect-[3/4] overflow-hidden ${shadowClass}" style="border: 3px solid ${borderColor}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'overlap') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="relative" style="min-height: 500px">
                            ${photos.map((photo, index) => {
                                const offset = index * 40;
                                const rotation = [-3, 2, -2, 3, -1, 2][index % 6];
                                return `
                                    <div class="absolute" style="left: 50%; top: ${offset}px; transform: translateX(-50%) rotate(${rotation}deg); z-index: ${photos.length - index}; width: 300px">
                                        <div class="aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                            <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'mirror') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="grid grid-cols-2 ${gapClass}">
                            ${photos.map((photo, index) => {
                                const isLeft = index % 2 === 0;
                                return `
                                    <div class="${isLeft ? 'justify-self-end' : 'justify-self-start'}">
                                        <div class="aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}; width: 250px; transform: ${isLeft ? 'scaleX(-1)' : 'scaleX(1)'}">
                                            <img src="${photo}" class="w-full h-full object-cover" style="transform: ${isLeft ? 'scaleX(-1)' : 'scaleX(1)'}" alt="Memory ${index + 1}">
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'hexagons') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${photos.map((photo, index) => `
                                <div class="relative" style="width: 150px; height: 173px">
                                    <div class="absolute inset-0 overflow-hidden ${shadowClass}" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); border: ${borderWidth}px solid ${borderColor}">
                                        <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-4xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Memories'}</h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 ${gapClass}">
                        ${photos.map((photo, index) => `
                            <div class="aspect-square overflow-hidden ${radiusClass} ${shadowClass}" style="border: ${borderWidth}px solid ${borderColor}">
                                <img src="${photo}" class="w-full h-full object-cover" alt="Memory ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
