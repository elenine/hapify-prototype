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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="cards">Card Grid</option>
                    <option value="carousel">Featured Quote</option>
                    <option value="minimal">Minimal List</option>
                    <option value="stacked">Stacked Cards</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const items = data.items ? data.items.split('\n').filter(item => item.trim()) : [];
        const layout = style.layout || 'cards';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';

        const parsedItems = items.map(item => {
            const parts = item.split('|');
            return {
                quote: parts[0]?.trim() || '',
                author: parts[1]?.trim() || ''
            };
        });

        switch(layout) {
            case 'carousel':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💭</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                                ${parsedItems.length > 0 ? `
                                    <div class="text-center">
                                        <div class="text-4xl mb-6" style="color: ${accent}40">"</div>
                                        <p class="text-xl text-gray-800 italic mb-6">${parsedItems[0].quote}</p>
                                        ${parsedItems[0].author ? `
                                            <div class="text-sm font-semibold" style="color: ${accent}">— ${parsedItems[0].author}</div>
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

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💭</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="space-y-6">
                                ${parsedItems.map(item => `
                                    <div class="border-l-4 pl-6 py-4" style="border-color: ${accent}">
                                        <p class="text-gray-800 italic mb-2 leading-relaxed">"${item.quote}"</p>
                                        ${item.author ? `
                                            <div class="text-sm font-semibold" style="color: ${accent}">— ${item.author}</div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'stacked':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💭</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="space-y-6">
                                ${parsedItems.map((item, index) => `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accent}">
                                                ${index + 1}
                                            </div>
                                            <div class="flex-1">
                                                <p class="text-gray-800 italic mb-3 leading-relaxed">"${item.quote}"</p>
                                                ${item.author ? `
                                                    <div class="text-sm font-semibold" style="color: ${accent}">— ${item.author}</div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'cards':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-5xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💭</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${parsedItems.map(item => `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-3xl mb-3" style="color: ${accent}40">"</div>
                                        <p class="text-gray-800 italic mb-4 text-sm leading-relaxed">${item.quote}</p>
                                        ${item.author ? `
                                            <div class="text-xs font-semibold border-t border-gray-100 pt-3" style="color: ${accent}">
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
    }
};
