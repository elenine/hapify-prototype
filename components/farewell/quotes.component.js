// Memorable Quotes Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quotes = {
    name: '💬 Memorable Quotes',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Words We'll Remember" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle (Optional)</label>
                <input type="text" placeholder="Their favorite sayings and wisdom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quotes</label>
                <div class="text-xs text-gray-500 mb-2">Format: Quote Text | Attribution/Context (one per line)</div>
                <textarea placeholder="Let's make it happen! | Their daily motivation&#10;Coffee first, code second | Morning ritual wisdom&#10;Team wins are the best wins | On collaboration&#10;There's always a better way | Innovation mindset&#10;Celebrate every small victory | Leadership philosophy" rows="7" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="quotes" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">Use | to separate quote and attribution (attribution is optional)</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="quoteStyle" oninput="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="bubbles">Speech Bubbles</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const quoteStyle = style.quoteStyle || 'cards';
        const quotes = data.quotes ? data.quotes.split('\n').filter(item => item.trim()) : [];

        const parsedQuotes = quotes.map(item => {
            const parts = item.split('|');
            if (parts.length >= 2) {
                return {
                    quote: parts[0].trim(),
                    attribution: parts[1].trim()
                };
            }
            return {
                quote: item.trim(),
                attribution: ''
            };
        });

        if (quoteStyle === 'bubbles') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">💬</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Words We\'ll Remember'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="grid sm:grid-cols-2 gap-6">
                            ${parsedQuotes.map((item, index) => `
                                <div class="relative">
                                    <div class="bg-white rounded-2xl p-6 shadow-md relative">
                                        <div class="absolute -top-3 -left-3 text-5xl text-violet-300 leading-none">"</div>
                                        <div class="relative z-10">
                                            <p class="text-gray-800 font-medium italic mb-3">${item.quote}</p>
                                            ${item.attribution ? `<p class="text-sm text-violet-600 font-semibold">— ${item.attribution}</p>` : ''}
                                        </div>
                                    </div>
                                    <div class="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-3">💬</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Words We\'ll Remember'}</h2>
                        ${data.subtitle ? `<p class="text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                    </div>
                    <div class="grid sm:grid-cols-2 gap-6">
                        ${parsedQuotes.map((item, index) => `
                            <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 shadow-sm border-l-4 border-violet-500">
                                <div class="text-3xl text-violet-400 mb-2">"</div>
                                <p class="text-gray-800 font-medium mb-3 leading-relaxed">${item.quote}</p>
                                ${item.attribution ? `<p class="text-sm text-violet-600 font-semibold">— ${item.attribution}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
