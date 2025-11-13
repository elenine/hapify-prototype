// Special Moments Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['special-moments'] = {
    name: '✨ Special Moments',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Moments We Cherish" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Moments</label>
                <div data-items-container="moments">
                    <!-- Dynamic moment items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'moments')" class="mt-3 w-full py-2 px-4 border-2 border-dashed border-rose-300 rounded-lg text-rose-600 hover:bg-rose-50 transition">
                    + Add Moment
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff7ed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="card" selected>Card</option>
                    <option value="list">List</option>
                    <option value="grid">Grid</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const moments = [];
        const container = document.querySelector(`[data-type="special-moments"] [data-items-container="moments"]`);
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const emoji = item.querySelector('[data-field="emoji"]')?.value || '✨';
                const title = item.querySelector('[data-field="title"]')?.value || '';
                const description = item.querySelector('[data-field="description"]')?.value || '';
                if (title) {
                    moments.push({ emoji, title, description });
                }
            });
        }

        const cardStyles = {
            card: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            list: 'space-y-4',
            grid: 'grid grid-cols-1 md:grid-cols-3 gap-4'
        };
        const containerClass = cardStyles[style.cardStyle || 'card'];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fff7ed'}">
                <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Moments We Cherish'}</h2>
                <div class="max-w-5xl mx-auto ${containerClass}">
                    ${moments.length > 0 ? moments.map(moment => `
                        <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <div class="text-4xl mb-3">${moment.emoji}</div>
                            <h3 class="text-xl font-bold mb-2 text-gray-900">${moment.title}</h3>
                            <p class="text-gray-700">${moment.description}</p>
                        </div>
                    `).join('') : `
                        <div class="col-span-full text-center py-8 text-gray-500">
                            <p>Add special moments that you cherish together</p>
                        </div>
                    `}
                </div>
            </div>
        `;
    }
};
