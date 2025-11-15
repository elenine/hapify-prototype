// FAQ Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ FAQ',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Frequently Asked Questions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">FAQ Items (format: Q: Question | A: Answer, one pair per line)</label>
                <textarea placeholder="Q: What time does the event start? | A: The event starts at 9:00 AM&#10;Q: Is parking available? | A: Yes, free parking is available&#10;Q: Can I bring a guest? | A: Yes, guests are welcome" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="faqs" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="accordion">Accordion - Expandable</option>
                    <option value="cards">Cards - Q&A boxes</option>
                    <option value="list">List - Simple rows</option>
                    <option value="modern">Modern - Icon based</option>
                    <option value="minimal">Minimal - Clean text</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'accordion';
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f0fdf4';
        const accentColor = style.accentColor || '#059669';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        // Parse FAQ items - format: Q: Question | A: Answer
        const faqs = data.faqs ? data.faqs.split('\n').filter(f => f.trim()).map(f => {
            const parts = f.split('|');
            const question = parts[0]?.replace(/^Q:\s*/i, '').trim() || f;
            const answer = parts[1]?.replace(/^A:\s*/i, '').trim() || 'Answer not provided';
            return { question, answer };
        }) : [];

        const renderFAQs = () => {
            switch (layoutStyle) {
                case 'accordion':
                    return faqs.map((faq, index) => `
                        <div class="border-b border-gray-200 last:border-0">
                            <div class="py-4 flex justify-between items-start gap-4 cursor-pointer">
                                <div class="flex-1">
                                    <div class="font-semibold mb-2" style="color: ${accentColor};">Q: ${faq.question}</div>
                                    <div class="text-sm text-gray-600">A: ${faq.answer}</div>
                                </div>
                                <div class="text-xl" style="color: ${accentColor};">▼</div>
                            </div>
                        </div>
                    `).join('');

                case 'cards':
                    return faqs.map(faq => `
                        <div class="p-6 ${shadowMap[shadow]} rounded-xl" style="background: ${cardBg};">
                            <div class="flex items-start gap-3 mb-3">
                                <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style="background: ${accentColor};">Q</div>
                                <div class="font-semibold text-gray-900">${faq.question}</div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style="background: ${accentColor};">A</div>
                                <div class="text-sm text-gray-600">${faq.answer}</div>
                            </div>
                        </div>
                    `).join('');

                case 'list':
                    return faqs.map(faq => `
                        <div class="py-4 border-b border-gray-200 last:border-0">
                            <div class="font-semibold mb-2" style="color: ${accentColor};">Q: ${faq.question}</div>
                            <div class="text-sm text-gray-600 pl-4">A: ${faq.answer}</div>
                        </div>
                    `).join('');

                case 'modern':
                    return faqs.map(faq => `
                        <div class="p-6 ${shadowMap[shadow]} rounded-xl relative overflow-hidden" style="background: ${cardBg};">
                            <div class="absolute top-0 right-0 text-6xl opacity-5" style="color: ${accentColor};">?</div>
                            <div class="relative z-10">
                                <div class="text-xs font-bold mb-2" style="color: ${accentColor};">QUESTION</div>
                                <div class="font-semibold mb-4">${faq.question}</div>
                                <div class="text-xs font-bold mb-2" style="color: ${accentColor};">ANSWER</div>
                                <div class="text-sm text-gray-600">${faq.answer}</div>
                            </div>
                        </div>
                    `).join('');

                case 'minimal':
                    return faqs.map(faq => `
                        <div class="text-center py-4">
                            <div class="font-semibold mb-2">${faq.question}</div>
                            <div class="text-sm text-gray-600 max-w-md mx-auto">${faq.answer}</div>
                        </div>
                    `).join('');

                default:
                    return '<p class="text-center text-gray-500">Add FAQ items</p>';
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Frequently Asked Questions'}</h2>
                <div class="max-w-2xl mx-auto ${layoutStyle !== 'accordion' && layoutStyle !== 'list' ? 'space-y-4' : ''}">
                    ${faqs.length > 0 ? renderFAQs() : '<p class="text-center text-gray-500">Add FAQ items (format: Q: Question | A: Answer)</p>'}
                </div>
            </div>
        `;
    }
};
