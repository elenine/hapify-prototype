// Gallery Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.gallery = {
    name: '🖼️ Photo Gallery',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label><input type="text" placeholder="Photo Gallery" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><p class="text-sm text-gray-600">Add multiple photos to create a gallery</p></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simpleGrid">Simple Grid - Clean grid layout</option>
                    <option value="masonryStyle">Masonry Style - Pinterest-like layout</option>
                    <option value="slideshow">Slideshow - Carousel presentation</option>
                    <option value="polaroidWall">Polaroid Wall - Scattered polaroids</option>
                    <option value="filmStrip">Film Strip - Horizontal film roll</option>
                    <option value="lightbox">Lightbox - Minimalist gallery</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3f4f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="titleColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="text-4xl">Small</option>
                    <option value="text-5xl">Medium</option>
                    <option value="text-6xl" selected>Large</option>
                    <option value="text-7xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="rounded-none">None</option>
                    <option value="rounded">Small</option>
                    <option value="rounded-lg" selected>Medium</option>
                    <option value="rounded-xl">Large</option>
                    <option value="rounded-2xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simpleGrid';
        const bgColor = style.bg || '#f3f4f6';
        const titleColor = style.titleColor || '#1f2937';
        const accentColor = style.accent || '#6366f1';
        const iconSize = style.iconSize || 'text-6xl';
        const shadow = style.shadow || 'none';
        const borderRadius = style.borderRadius || 'rounded-lg';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const title = data.title || 'Photo Gallery';

        if (layout === 'simpleGrid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="aspect-square ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">🖼️</div>
                            </div>
                            <div class="aspect-square ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">📸</div>
                            </div>
                            <div class="aspect-square ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">🎨</div>
                            </div>
                        </div>
                        <p class="text-center text-gray-600 mt-6">Gallery photos will appear here</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'masonryStyle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">🖼️</div>
                            </div>
                            <div class="aspect-square ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">📸</div>
                            </div>
                            <div class="aspect-[3/4] ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">🎨</div>
                            </div>
                        </div>
                        <p class="text-center text-gray-600 mt-6">Masonry layout gallery</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'slideshow') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="relative">
                            <div class="aspect-video ${borderRadius} ${shadowClass} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.1)">
                                <div class="${iconSize}" style="color: ${accentColor}">📸</div>
                            </div>
                            <button class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white ${shadowClass} flex items-center justify-center" style="color: ${accentColor}">‹</button>
                            <button class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white ${shadowClass} flex items-center justify-center" style="color: ${accentColor}">›</button>
                        </div>
                        <p class="text-center text-gray-600 mt-6">Slideshow presentation</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'polaroidWall') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="flex gap-4 justify-center flex-wrap">
                            <div class="p-4 bg-white ${shadowClass} transform -rotate-3">
                                <div class="w-48 h-48 ${borderRadius} flex items-center justify-center mb-3" style="background: rgba(99, 102, 241, 0.1)">
                                    <div class="text-5xl" style="color: ${accentColor}">🖼️</div>
                                </div>
                                <p class="text-center text-sm text-gray-600">Photo 1</p>
                            </div>
                            <div class="p-4 bg-white ${shadowClass} transform rotate-2">
                                <div class="w-48 h-48 ${borderRadius} flex items-center justify-center mb-3" style="background: rgba(99, 102, 241, 0.1)">
                                    <div class="text-5xl" style="color: ${accentColor}">📸</div>
                                </div>
                                <p class="text-center text-sm text-gray-600">Photo 2</p>
                            </div>
                        </div>
                        <p class="text-center text-gray-600 mt-6">Polaroid-style gallery</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'filmStrip') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="p-4 bg-black ${borderRadius} ${shadowClass}">
                            <div class="flex gap-4 overflow-x-auto">
                                <div class="flex-shrink-0 w-48 h-32 ${borderRadius} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.3)">
                                    <div class="text-4xl" style="color: white">🖼️</div>
                                </div>
                                <div class="flex-shrink-0 w-48 h-32 ${borderRadius} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.3)">
                                    <div class="text-4xl" style="color: white">📸</div>
                                </div>
                                <div class="flex-shrink-0 w-48 h-32 ${borderRadius} flex items-center justify-center" style="background: rgba(99, 102, 241, 0.3)">
                                    <div class="text-4xl" style="color: white">🎨</div>
                                </div>
                            </div>
                        </div>
                        <p class="text-center text-gray-600 mt-6">Film strip gallery</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'lightbox') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                        <div class="grid grid-cols-4 gap-2">
                            ${[...Array(8)].map((_, i) => `
                                <div class="aspect-square ${borderRadius} ${shadowClass} flex items-center justify-center cursor-pointer hover:opacity-80 transition" style="background: rgba(99, 102, 241, 0.1)">
                                    <div class="text-3xl" style="color: ${accentColor}">${['🖼️', '📸', '🎨', '🌟', '🎭', '🎪', '🎬', '📷'][i]}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="text-center text-gray-600 mt-6">Minimalist lightbox gallery</p>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-4xl mx-auto">
                    <h3 class="text-2xl font-bold mb-8 text-center" style="color: ${titleColor}">${title}</h3>
                    <div class="text-center text-gray-500">
                        <div class="${iconSize} mb-4" style="color: ${accentColor}">🖼️</div>
                        <p class="text-lg">Gallery photos will appear here</p>
                    </div>
                </div>
            </div>
        `;
    }
};
