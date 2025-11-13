// Romantic Quotes Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['romantic-quotes'] = {
    name: '💭 Romantic Quotes',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Words We Live By" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote 1</label>
                <textarea placeholder="Enter your favorite quote..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="quote1" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote 1 Author (optional)</label>
                <input type="text" placeholder="Author name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="author1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote 2</label>
                <textarea placeholder="Enter another quote..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="quote2" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote 2 Author (optional)</label>
                <input type="text" placeholder="Author name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="author2" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="quoteStyle" onchange="updatePreview()">
                    <option value="card" selected>Card Style</option>
                    <option value="minimal">Minimal</option>
                    <option value="fancy">Fancy</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const quotes = [];
        if (data.quote1) quotes.push({ text: data.quote1, author: data.author1 });
        if (data.quote2) quotes.push({ text: data.quote2, author: data.author2 });

        const quoteStyles = {
            card: 'bg-white shadow-lg rounded-lg p-6',
            minimal: 'border-l-4 border-rose-500 pl-6',
            fancy: 'bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-md'
        };
        const quoteClass = quoteStyles[style.quoteStyle || 'card'];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Words We Live By'}</h2>
                <div class="max-w-3xl mx-auto space-y-6">
                    ${quotes.map(quote => `
                        <div class="${quoteClass}">
                            <div class="text-rose-500 text-3xl mb-3">"</div>
                            <p class="text-lg text-gray-800 italic leading-relaxed mb-4">${quote.text}</p>
                            ${quote.author ? `<p class="text-right text-sm text-gray-600">— ${quote.author}</p>` : ''}
                        </div>
                    `).join('')}
                    ${quotes.length === 0 ? '<div class="text-center text-gray-500 py-8">Add your favorite romantic quotes</div>' : ''}
                </div>
            </div>
        `;
    }
};
