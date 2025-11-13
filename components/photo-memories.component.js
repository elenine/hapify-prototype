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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff1f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Grid Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="columns" onchange="updatePreview()">
                    <option value="2" selected>2 Columns</option>
                    <option value="3">3 Columns</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const photos = (data.photos || '').split('\n').filter(p => p.trim());
        const columns = style.columns || '2';
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fff1f2'}">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-900">${data.title || 'Our Beautiful Moments'}</h2>
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
            </div>
        `;
    }
};
