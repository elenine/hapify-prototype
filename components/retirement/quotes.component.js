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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="bubble">Speech Bubble</option>
                    <option value="elegant">Elegant Quote</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="classic">Classic Book</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        const quotes = data.quotes ? data.quotes.split('\n').filter(q => q.trim()).map(quote => {
            const parts = quote.split('|').map(p => p.trim());
            return {
                text: parts[0] || '',
                author: parts[1] || 'Anonymous'
            };
        }) : [];

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Wisdom'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${quotes.length > 0 ? quotes.map(quote => `
                                <div class="bg-white p-6 rounded-lg shadow-md" style="border-left: 4px solid ${accentColor};">
                                    <p class="text-lg italic mb-3">"${quote.text}"</p>
                                    <p class="text-sm font-semibold" style="color: ${accentColor};">— ${quote.author}</p>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add inspirational quotes</p>'}
                        </div>
                    </div>
                `;

            case 'bubble':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Wisdom'}</h2>
                        <div class="max-w-md mx-auto space-y-8">
                            ${quotes.length > 0 ? quotes.map((quote, index) => {
                                const isLeft = index % 2 === 0;
                                return `
                                    <div class="flex ${isLeft ? 'justify-start' : 'justify-end'}">
                                        <div class="max-w-[85%] p-5 rounded-2xl shadow-md ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}" style="background: ${isLeft ? 'white' : accentColor + '20'};">
                                            <p class="italic mb-2">"${quote.text}"</p>
                                            <p class="text-xs font-medium opacity-70">— ${quote.author}</p>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center opacity-50">Add inspirational quotes</p>'}
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif">${data.title || 'Words of Wisdom'}</h2>
                                <div class="w-24 h-0.5 mx-auto mt-3" style="background: ${accentColor};"></div>
                            </div>
                            <div class="space-y-8">
                                ${quotes.length > 0 ? quotes.map(quote => `
                                    <div class="relative">
                                        <div class="absolute top-0 left-0 text-6xl opacity-20" style="color: ${accentColor};">"</div>
                                        <div class="relative z-10 pt-4">
                                            <p class="text-lg font-serif italic mb-4">${quote.text}</p>
                                            <p class="text-sm font-medium" style="color: ${accentColor};">— ${quote.author}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="opacity-50">Add inspirational quotes</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-light mb-2">${data.title || 'Words of Wisdom'}</h2>
                            <div class="w-16 h-0.5 mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-6">
                                ${quotes.length > 0 ? quotes.map(quote => `
                                    <div class="pb-6 border-b" style="border-color: ${accentColor}20;">
                                        <p class="italic mb-2">"${quote.text}"</p>
                                        <p class="text-xs font-medium" style="color: ${accentColor};">— ${quote.author}</p>
                                    </div>
                                `).join('') : '<p class="opacity-50">Add inspirational quotes</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Wisdom'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${quotes.length > 0 ? quotes.map(quote => `
                                <div class="bg-white p-6 rounded-xl shadow-lg" style="border-top: 3px solid ${accentColor};">
                                    <div class="flex items-start gap-3">
                                        <div class="text-3xl opacity-30" style="color: ${accentColor};">❝</div>
                                        <div class="flex-1">
                                            <p class="font-serif italic text-lg mb-3">${quote.text}</p>
                                            <p class="text-sm font-bold uppercase tracking-wide" style="color: ${accentColor};">${quote.author}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add inspirational quotes</p>'}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Wisdom'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${quotes.length > 0 ? quotes.map(quote => `
                                <div class="bg-white p-6 rounded-lg shadow-md" style="border-left: 4px solid ${accentColor};">
                                    <p class="text-lg italic mb-3">"${quote.text}"</p>
                                    <p class="text-sm font-semibold" style="color: ${accentColor};">— ${quote.author}</p>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add inspirational quotes</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
