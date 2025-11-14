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

        const memoriesHTML = memories.map((memory, i) => {
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

        let gridClass = 'grid md:grid-cols-2 gap-6';
        if (layout === 'masonry') {
            gridClass = 'grid md:grid-cols-3 gap-4';
        } else if (layout === 'cards') {
            gridClass = 'grid gap-4';
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0f9ff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">⭐</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Favorite Memories'}</h2>
                    </div>
                    <div class="${gridClass}">
                        ${memoriesHTML || '<p class="text-center text-gray-400 col-span-full">Add your favorite memories...</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
