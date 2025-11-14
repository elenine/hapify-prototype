// Photo Gallery Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '🖼️ Photo Gallery',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Our Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photos</div>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Layout</option>
                    <option value="masonry">Masonry Style</option>
                    <option value="carousel">Carousel View</option>
                    <option value="polaroid">Polaroid Style</option>
                    <option value="showcase">Showcase Center</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#f9fafb';
        const accentColor = style.accent || '#9333ea';
        const title = data.title || 'Photo Gallery';

        switch(layout) {
            case 'masonry':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8" style="color: ${accentColor}">${title}</h2>
                        <div class="max-w-4xl mx-auto">
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div class="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="bg-gray-200 rounded-lg h-44 flex items-center justify-center">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="bg-gray-200 rounded-lg h-52 flex items-center justify-center">
                                    <span class="text-3xl">📷</span>
                                </div>
                                <div class="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                                    <span class="text-3xl">📷</span>
                                </div>
                            </div>
                            <p class="text-center text-gray-500 text-sm mt-6">Upload photos to see them here</p>
                        </div>
                    </div>
                `;

            case 'carousel':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8" style="color: ${accentColor}">${title}</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="relative bg-white rounded-xl shadow-xl p-4">
                                <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                                    <div class="text-center">
                                        <div class="text-6xl mb-4">📷</div>
                                        <p class="text-gray-500">Main Photo</p>
                                    </div>
                                </div>
                                <div class="flex justify-center gap-2 mt-4">
                                    <button class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}; color: white;">‹</button>
                                    <button class="w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accentColor}; color: white;">›</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'polaroid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-12" style="color: ${accentColor}">${title}</h2>
                        <div class="max-w-4xl mx-auto">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                ${[1, 2, 3].map(() => `
                                    <div class="bg-white p-4 shadow-xl transform hover:rotate-2 transition" style="border: 1px solid #e5e7eb">
                                        <div class="bg-gray-200 h-48 flex items-center justify-center mb-3">
                                            <span class="text-4xl">📷</span>
                                        </div>
                                        <p class="text-center text-sm text-gray-500">Memories ❤️</p>
                                    </div>
                                `).join('')}
                            </div>
                            <p class="text-center text-gray-500 text-sm mt-8">Upload photos for polaroid display</p>
                        </div>
                    </div>
                `;

            case 'showcase':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8" style="color: ${accentColor}">${title}</h2>
                        <div class="max-w-5xl mx-auto">
                            <div class="bg-white rounded-2xl shadow-2xl p-8" style="border-top: 4px solid ${accentColor}">
                                <div class="bg-gray-200 rounded-xl h-96 flex items-center justify-center mb-6">
                                    <div class="text-center">
                                        <div class="text-6xl mb-4">🖼️</div>
                                        <p class="text-gray-500 text-lg">Featured Photo</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-3">
                                    ${[1, 2, 3, 4].map(() => `
                                        <div class="bg-gray-200 rounded-lg h-20 flex items-center justify-center">
                                            <span class="text-xl">📷</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'grid':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8">${title}</h2>
                        <div class="max-w-4xl mx-auto">
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                ${[1, 2, 3, 4, 5, 6].map(() => `
                                    <div class="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                                        <span class="text-4xl">📷</span>
                                    </div>
                                `).join('')}
                            </div>
                            <p class="text-center text-gray-500 text-sm mt-6">Upload photos to fill the gallery</p>
                        </div>
                    </div>
                `;
        }
    }`
};
