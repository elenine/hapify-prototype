// FAQ Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ FAQ',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Frequently Asked Questions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction (Optional)</label>
                <textarea placeholder="Have questions? We've got answers!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Questions & Answers</label>
                <div class="text-xs text-gray-500 mb-2">Format: Question | Answer (one pair per line, separated by |)</div>
                <textarea placeholder="How many guests can I bring? | Each graduate receives 4 guest tickets. Additional tickets may be available upon request.&#10;What should guests wear? | Business casual or dressy attire is recommended.&#10;Will there be a reception after? | Yes! A reception will follow immediately in the Student Center.&#10;Can I bring flowers? | Absolutely! Flowers are welcome and encouraged." rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="accordion">Numbered Accordion</option>
                    <option value="cards">Card Grid</option>
                    <option value="minimal">Minimal List</option>
                    <option value="split">Split Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const items = data.items ? data.items.split('\n').filter(item => item.trim()) : [];
        const layout = style.layout || 'accordion';
        const bg = style.bg || '#f9fafb';
        const accent = style.accent || '#6366f1';

        const parsedItems = items.map((item, index) => {
            const parts = item.split('|');
            return {
                question: parts[0]?.trim() || '',
                answer: parts[1]?.trim() || '',
                id: index
            };
        });

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">❓</div>
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'Frequently Asked Questions'}</h2>
                                ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                ${parsedItems.map((item, index) => `
                                    <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                                        <div class="flex items-start gap-3 mb-3">
                                            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style="background: ${accent}15; color: ${accent}">
                                                Q
                                            </div>
                                            <h3 class="font-bold text-gray-900 flex-1">${item.question}</h3>
                                        </div>
                                        <div class="pl-11">
                                            <p class="text-gray-600 text-sm leading-relaxed">${item.answer}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">❓</div>
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'Frequently Asked Questions'}</h2>
                                ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                            </div>
                            <div class="space-y-6">
                                ${parsedItems.map((item, index) => `
                                    <div class="border-b border-gray-200 pb-6 last:border-0">
                                        <h3 class="font-bold text-lg mb-3" style="color: ${accent}">${item.question}</h3>
                                        <p class="text-gray-600 leading-relaxed">${item.answer}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-5xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">❓</div>
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'Frequently Asked Questions'}</h2>
                                ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                            </div>
                            <div class="space-y-6">
                                ${parsedItems.map((item, index) => `
                                    <div class="grid md:grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow-sm">
                                        <div class="md:col-span-1">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style="background: ${accent}">
                                                    ${index + 1}
                                                </div>
                                                <h3 class="font-bold text-gray-900 flex-1">${item.question}</h3>
                                            </div>
                                        </div>
                                        <div class="md:col-span-2">
                                            <p class="text-gray-600 leading-relaxed">${item.answer}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'accordion':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">❓</div>
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'Frequently Asked Questions'}</h2>
                                ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                            </div>
                            <div class="space-y-4">
                                ${parsedItems.map((item, index) => `
                                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                        <div class="p-5">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 w-6 h-6 rounded-full text-white flex items-center justify-center font-bold text-xs" style="background: ${accent}">
                                                    ${index + 1}
                                                </div>
                                                <div class="flex-1">
                                                    <h3 class="font-bold text-gray-900 mb-2">${item.question}</h3>
                                                    <p class="text-gray-600 text-sm leading-relaxed">${item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
