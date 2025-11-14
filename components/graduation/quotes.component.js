// Inspirational Quotes & Memories Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quotes = {
    name: '💭 Quotes & Memories',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Words of Wisdom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quotes or Memories</label>
                <div class="text-xs text-gray-500 mb-2">Format: Quote/Memory | Author/Source (one per line)</div>
                <textarea placeholder="The future belongs to those who believe in the beauty of their dreams. | Eleanor Roosevelt&#10;Education is the most powerful weapon which you can use to change the world. | Nelson Mandela&#10;My fondest memory was the day we all stayed up studying for finals together. | Class of 2024" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea placeholder="Reflections on our journey..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="cards">Card Layout</option>
                    <option value="carousel">Carousel View</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const items = data.items ? data.items.split('\n').filter(item => item.trim()) : [];
        const layout = style.layout || 'cards';

        const parsedItems = items.map(item => {
            const parts = item.split('|');
            return {
                quote: parts[0]?.trim() || '',
                author: parts[1]?.trim() || ''
            };
        });

        if (layout === 'carousel') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#eef2ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">💭</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                            ${parsedItems.length > 0 ? `
                                <div class="text-center">
                                    <div class="text-4xl mb-6 text-indigo-200">"</div>
                                    <p class="text-xl text-gray-800 italic mb-6">${parsedItems[0].quote}</p>
                                    ${parsedItems[0].author ? `
                                        <div class="text-sm text-indigo-600 font-semibold">— ${parsedItems[0].author}</div>
                                    ` : ''}
                                    ${parsedItems.length > 1 ? `
                                        <div class="mt-6 text-xs text-gray-400">1 of ${parsedItems.length}</div>
                                    ` : ''}
                                </div>
                            ` : '<p class="text-gray-500 text-center">No quotes added yet</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#eef2ff'}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">💭</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                        ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                    </div>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${parsedItems.map(item => `
                            <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                <div class="text-3xl text-indigo-200 mb-3">"</div>
                                <p class="text-gray-800 italic mb-4 text-sm leading-relaxed">${item.quote}</p>
                                ${item.author ? `
                                    <div class="text-xs text-indigo-600 font-semibold border-t border-gray-100 pt-3">
                                        — ${item.author}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
