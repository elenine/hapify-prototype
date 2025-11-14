// Inspirational Quotes Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quotes = {
    name: '💭 Inspirational Quotes',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Words of Wisdom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quotes (format: Quote | Author - one per line)</label>
                <textarea placeholder="Retirement is not the end, it's a new beginning | Anonymous&#10;The best is yet to come | Frank Sinatra&#10;Enjoy the journey of retirement | Unknown" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="quotes" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Quote | Author</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const quotes = data.quotes ? data.quotes.split('\n').filter(q => q.trim()).map(quote => {
            const parts = quote.split('|').map(p => p.trim());
            return {
                text: parts[0] || '',
                author: parts[1] || 'Anonymous'
            };
        }) : [];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Wisdom'}</h2>
                <div class="max-w-2xl mx-auto space-y-6">
                    ${quotes.length > 0 ? quotes.map(quote => `
                        <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                            <p class="text-lg text-gray-800 italic mb-3">"${quote.text}"</p>
                            <p class="text-sm text-cyan-600 font-semibold">— ${quote.author}</p>
                        </div>
                    `).join('') : '<p class="text-center text-gray-500">Add inspirational quotes</p>'}
                </div>
            </div>
        `;
    }
};
