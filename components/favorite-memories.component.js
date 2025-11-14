// Favorite Memories Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['favorite-memories'] = {
    name: '⭐ Favorite Memories',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Favorite Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Favorite Memories" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memories (Format: Title | Description, one per line)</label>
                <textarea placeholder="Beach Sunset | That magical evening when we watched the sunset together
First Kiss | Under the stars in the park
Road Trip | Our spontaneous adventure across the coast
Rainy Day | Dancing in the rain without a care" rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="memories" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid" selected>Grid Layout</option>
                    <option value="masonry">Masonry Style</option>
                    <option value="cards">Card Stack</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const memories = (data.memories || '').split('\n').filter(m => m.trim());
        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#f0f9ff';
        const accentColor = style.accent || '#3b82f6';

        if (memories.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto text-center">
                        <div class="text-5xl mb-4">⭐</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Favorite Memories'}</h2>
                        <p class="text-gray-400 mt-4">Add your favorite memories...</p>
                    </div>
                </div>
            `;
        }

        let memoriesHTML = '';

        if (layout === 'grid') {
            memoriesHTML = memories.map(memory => {
                const parts = memory.split('|').map(p => p.trim());
                const title = parts[0] || '';
                const description = parts[1] || '';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
                        <div class="text-3xl mb-3">⭐</div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${title}</h3>
                        <p class="text-gray-600">${description}</p>
                    </div>
                `;
            }).join('');
            memoriesHTML = `<div class="grid md:grid-cols-2 gap-6">${memoriesHTML}</div>`;
        } else if (layout === 'polaroid') {
            memoriesHTML = memories.map((memory, i) => {
                const parts = memory.split('|').map(p => p.trim());
                const title = parts[0] || '';
                const description = parts[1] || '';
                const rotation = (i % 2 === 0 ? 1 : -1) * (Math.random() * 5 + 2);

                return `
                    <div class="transform hover:scale-110 transition" style="transform: rotate(${rotation}deg);">
                        <div class="bg-white p-5 shadow-2xl" style="width: 260px;">
                            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 h-52 flex items-center justify-center mb-4 text-6xl">
                                ⭐
                            </div>
                            <h3 class="text-base font-bold mb-2 text-center text-gray-900">${title}</h3>
                            <p class="text-sm text-gray-600 text-center">${description}</p>
                            <div class="h-6"></div>
                        </div>
                    </div>
                `;
            }).join('');
            memoriesHTML = `<div class="flex flex-wrap justify-center gap-6">${memoriesHTML}</div>`;
        } else if (layout === 'stars') {
            memoriesHTML = memories.map(memory => {
                const parts = memory.split('|').map(p => p.trim());
                const title = parts[0] || '';
                const description = parts[1] || '';

                return `
                    <div class="text-center">
                        <div class="relative inline-block mb-4">
                            <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40); border: 4px solid ${accentColor};">
                                ⭐
                            </div>
                        </div>
                        <div class="bg-white rounded-xl p-5 shadow-md">
                            <h3 class="text-lg font-bold mb-2 text-gray-900">${title}</h3>
                            <p class="text-sm text-gray-600">${description}</p>
                        </div>
                    </div>
                `;
            }).join('');
            memoriesHTML = `<div class="grid md:grid-cols-3 gap-6">${memoriesHTML}</div>`;
        } else if (layout === 'album') {
            memoriesHTML = memories.map((memory, i) => {
                const parts = memory.split('|').map(p => p.trim());
                const title = parts[0] || '';
                const description = parts[1] || '';

                return `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                        <div class="h-3" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="p-6">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}20;">⭐</div>
                                <h3 class="text-xl font-bold text-gray-900 flex-1">${title}</h3>
                            </div>
                            <p class="text-gray-700">${description}</p>
                        </div>
                    </div>
                `;
            }).join('');
            memoriesHTML = `<div class="grid md:grid-cols-2 gap-6">${memoriesHTML}</div>`;
        } else if (layout === 'collage') {
            memoriesHTML = memories.map((memory, i) => {
                const parts = memory.split('|').map(p => p.trim());
                const title = parts[0] || '';
                const description = parts[1] || '';
                const heights = ['min-h-48', 'min-h-64', 'min-h-56', 'min-h-52'];
                const height = heights[i % heights.length];

                return `
                    <div class="${height} bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
                        <div class="text-5xl mb-4">⭐</div>
                        <h3 class="text-lg font-bold mb-2" style="color: ${accentColor}">${title}</h3>
                        <p class="text-gray-700 flex-1">${description}</p>
                    </div>
                `;
            }).join('');
            memoriesHTML = `<div class="columns-1 md:columns-3 gap-4">${memoriesHTML}</div>`;
        } else if (layout === 'filmstrip') {
            memoriesHTML = `
                <div class="bg-gray-900 rounded-lg p-6 shadow-2xl">
                    <div class="flex gap-4 overflow-x-auto">
                        ${memories.map(memory => {
                            const parts = memory.split('|').map(p => p.trim());
                            const title = parts[0] || '';
                            const description = parts[1] || '';

                            return `
                                <div class="flex-shrink-0 relative" style="width: 280px;">
                                    <div class="bg-white rounded-lg p-5 h-full">
                                        <div class="text-5xl mb-3 text-center">⭐</div>
                                        <h3 class="text-lg font-bold mb-2 text-gray-900">${title}</h3>
                                        <p class="text-sm text-gray-600">${description}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (layout === 'boxes') {
            memoriesHTML = memories.map((memory, i) => {
                const parts = memory.split('|').map(p => p.trim());
                const title = parts[0] || '';
                const description = parts[1] || '';

                return `
                    <div class="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
                        <div class="absolute inset-0 opacity-10" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="relative z-10 p-8">
                            <div class="flex items-start gap-4">
                                <div class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0" style="background: ${accentColor};">
                                    ⭐
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-3 text-gray-900">${title}</h3>
                                    <p class="text-gray-700 leading-relaxed">${description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            memoriesHTML = `<div class="grid md:grid-cols-2 gap-6">${memoriesHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">⭐</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Favorite Memories'}</h2>
                    </div>
                    ${memoriesHTML}
                </div>
            </div>
        `;
    }
};
