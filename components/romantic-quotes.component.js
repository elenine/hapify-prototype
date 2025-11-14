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
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="quoteStyle" onchange="updatePreview()">
                    <option value="card">Modern Cards</option>
                    <option value="minimal">Minimal Border</option>
                    <option value="fancy">Gradient Fancy</option>
                    <option value="classic">Classic Serif</option>
                    <option value="bubble">Speech Bubbles</option>
                    <option value="banner">Banner Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const quotes = [];
        if (data.quote1) quotes.push({ text: data.quote1, author: data.author1 });
        if (data.quote2) quotes.push({ text: data.quote2, author: data.author2 });

        const quoteStyleType = style.quoteStyle || 'card';
        const bgColor = style.bg || '#fef2f2';
        const accentColor = style.accent || '#f43f5e';

        if (quotes.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Words We Live By'}</h2>
                    <div class="max-w-3xl mx-auto text-center text-gray-500 py-8">
                        <p>Add your favorite romantic quotes</p>
                    </div>
                </div>
            `;
        }

        let quotesHTML = '';

        if (quoteStyleType === 'card') {
            quotesHTML = quotes.map(quote => `
                <div class="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
                    <div class="text-3xl mb-3" style="color: ${accentColor}">"</div>
                    <p class="text-lg text-gray-800 italic leading-relaxed mb-4">${quote.text}</p>
                    ${quote.author ? `<p class="text-right text-sm text-gray-600">— ${quote.author}</p>` : ''}
                </div>
            `).join('');
        } else if (quoteStyleType === 'minimal') {
            quotesHTML = quotes.map(quote => `
                <div class="border-l-4 pl-6 py-4" style="border-color: ${accentColor}">
                    <p class="text-xl text-gray-800 italic leading-relaxed mb-3">${quote.text}</p>
                    ${quote.author ? `<p class="text-right text-sm font-semibold" style="color: ${accentColor}">— ${quote.author}</p>` : ''}
                </div>
            `).join('');
        } else if (quoteStyleType === 'fancy') {
            quotesHTML = quotes.map(quote => `
                <div class="rounded-2xl p-8 shadow-xl relative overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10)">
                    <div class="absolute top-4 left-4 text-6xl opacity-20" style="color: ${accentColor}">"</div>
                    <div class="absolute bottom-4 right-4 text-6xl opacity-20" style="color: ${accentColor}">"</div>
                    <div class="relative z-10">
                        <p class="text-xl text-gray-800 italic leading-relaxed mb-4">${quote.text}</p>
                        ${quote.author ? `<p class="text-right text-base font-semibold" style="color: ${accentColor}">— ${quote.author}</p>` : ''}
                    </div>
                </div>
            `).join('');
        } else if (quoteStyleType === 'classic') {
            quotesHTML = quotes.map(quote => `
                <div class="bg-white rounded-lg p-10 shadow-lg border-t-4 border-b-4" style="border-color: ${accentColor}; font-family: Georgia, serif;">
                    <div class="text-center mb-6">
                        <div class="inline-block w-16 h-1" style="background: ${accentColor}"></div>
                    </div>
                    <p class="text-2xl text-gray-800 italic leading-relaxed text-center mb-6">${quote.text}</p>
                    ${quote.author ? `
                        <div class="text-center">
                            <div class="inline-block w-16 h-1 mb-4" style="background: ${accentColor}"></div>
                            <p class="text-base font-semibold" style="color: ${accentColor}">${quote.author}</p>
                        </div>
                    ` : ''}
                </div>
            `).join('');
        } else if (quoteStyleType === 'bubble') {
            quotesHTML = quotes.map((quote, i) => {
                const isLeft = i % 2 === 0;
                return `
                    <div class="flex ${isLeft ? 'justify-start' : 'justify-end'}">
                        <div class="max-w-2xl bg-white rounded-3xl p-8 shadow-lg ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}">
                            <p class="text-lg text-gray-800 italic leading-relaxed mb-3">${quote.text}</p>
                            ${quote.author ? `<p class="text-sm font-semibold" style="color: ${accentColor}">— ${quote.author}</p>` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        } else if (quoteStyleType === 'banner') {
            quotesHTML = quotes.map(quote => `
                <div class="relative rounded-2xl overflow-hidden shadow-xl">
                    <div class="absolute inset-0 opacity-10" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)"></div>
                    <div class="relative z-10 p-10 text-center">
                        <div class="text-5xl mb-4" style="color: ${accentColor}">💭</div>
                        <p class="text-2xl text-gray-900 italic leading-relaxed mb-4 font-semibold">${quote.text}</p>
                        ${quote.author ? `
                            <div class="flex items-center justify-center gap-2">
                                <div class="w-8 h-1 rounded" style="background: ${accentColor}"></div>
                                <p class="text-base font-bold" style="color: ${accentColor}">${quote.author}</p>
                                <div class="w-8 h-1 rounded" style="background: ${accentColor}"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="text-center mb-10">
                    <div class="text-5xl mb-4">💭</div>
                    <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Words We Live By'}</h2>
                </div>
                <div class="max-w-3xl mx-auto space-y-6">
                    ${quotesHTML}
                </div>
            </div>
        `;
    }
};
