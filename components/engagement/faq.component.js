// FAQ Component for Engagement Announcement
// Frequently asked questions about the event

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ FAQ',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Frequently Asked Questions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Questions & Answers</label>
                    <button type="button" onclick="addFaqItem('${sectionId}')" class="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition">
                        + Add Q&A
                    </button>
                </div>
                <div id="faq-items-${sectionId}" class="space-y-3">
                    <!-- FAQ items will be added here -->
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Simple Cards</option>
                    <option value="accordion">Accordion Style</option>
                    <option value="numbered">Numbered List</option>
                    <option value="modern">Modern Boxes</option>
                    <option value="twocolumn">Two Column</option>
                    <option value="elegant">Elegant Q&A</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="bubble">Speech Bubbles</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#e11d48';
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.textColor || '#1f2937';
        const faqs = [];

        // Collect FAQ items from dynamic inputs
        let i = 0;
        while (data[`faq${i}Question`] || data[`faq${i}Answer`]) {
            if (data[`faq${i}Question`] && data[`faq${i}Answer`]) {
                faqs.push({
                    question: data[`faq${i}Question`],
                    answer: data[`faq${i}Answer`]
                });
            }
            i++;
        }

        let faqHtml = '';
        if (faqs.length > 0) {
            if (layout === 'accordion') {
                faqHtml = faqs.map((faq, index) => `
                    <div class="rounded-lg border shadow-sm overflow-hidden" style="background: ${cardBg}; border-color: ${accent}40;">
                        <div class="p-4 flex items-center gap-3" style="background: ${accent}10;">
                            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: ${accent};">
                                Q
                            </div>
                            <div class="font-semibold" style="color: ${textColor};">${faq.question}</div>
                        </div>
                        <div class="p-4 text-sm text-gray-700 leading-relaxed">
                            ${faq.answer}
                        </div>
                    </div>
                `).join('');
            } else if (layout === 'numbered') {
                faqHtml = faqs.map((faq, index) => `
                    <div class="flex gap-4 p-4 rounded-lg border" style="background: ${cardBg}; border-color: ${accent}20;">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md" style="background: ${accent};">
                            ${index + 1}
                        </div>
                        <div class="flex-1">
                            <div class="font-semibold mb-2" style="color: ${textColor};">${faq.question}</div>
                            <div class="text-sm text-gray-600 leading-relaxed">${faq.answer}</div>
                        </div>
                    </div>
                `).join('');
            } else if (layout === 'modern') {
                faqHtml = faqs.map(faq => `
                    <div class="p-6 rounded-xl shadow-lg border-l-4" style="background: ${cardBg}; border-left-color: ${accent};">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-2xl">❓</span>
                            <div class="font-bold text-lg" style="color: ${textColor};">${faq.question}</div>
                        </div>
                        <div class="pl-11 text-sm text-gray-600 leading-relaxed">
                            ${faq.answer}
                        </div>
                    </div>
                `).join('');
            } else if (layout === 'twocolumn') {
                faqHtml = faqs.map(faq => `
                    <div class="p-4 rounded-lg border shadow-sm" style="background: ${cardBg}; border-color: ${accent}20;">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="font-semibold pr-4 border-r" style="color: ${accent}; border-color: ${accent}30;">
                                ${faq.question}
                            </div>
                            <div class="text-sm text-gray-600 leading-relaxed">
                                ${faq.answer}
                            </div>
                        </div>
                    </div>
                `).join('');
            } else if (layout === 'elegant') {
                faqHtml = faqs.map((faq, index) => `
                    <div class="mb-8">
                        <div class="flex items-start gap-4 mb-3">
                            <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%); color: white;">
                                <span class="text-xl font-bold">Q</span>
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-lg mb-3" style="color: ${textColor}; font-family: 'Georgia', serif;">${faq.question}</div>
                                <div class="pl-4 border-l-2" style="border-color: ${accent}30;">
                                    <div class="flex items-start gap-2 mb-2">
                                        <span class="text-sm font-bold" style="color: ${accent};">A:</span>
                                        <p class="text-sm text-gray-700 leading-relaxed flex-1">${faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ${index < faqs.length - 1 ? `<div class="mt-6 h-px" style="background: linear-gradient(90deg, transparent 0%, ${accent}20 50%, transparent 100%);"></div>` : ''}
                    </div>
                `).join('');
            } else if (layout === 'minimal') {
                faqHtml = faqs.map((faq, index) => `
                    <div class="py-5 ${index < faqs.length - 1 ? 'border-b' : ''}" style="border-color: ${accent}15;">
                        <div class="mb-3">
                            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mr-2" style="background: ${accent};">Q${index + 1}</span>
                            <span class="font-semibold" style="color: ${textColor};">${faq.question}</span>
                        </div>
                        <div class="pl-12 text-sm text-gray-700 leading-relaxed">${faq.answer}</div>
                    </div>
                `).join('');
            } else if (layout === 'bubble') {
                faqHtml = faqs.map((faq, index) => `
                    <div class="flex flex-col gap-3 mb-6">
                        <div class="flex justify-end">
                            <div class="max-w-xs p-4 rounded-2xl rounded-tr-sm shadow-md" style="background: ${accent}; color: white;">
                                <div class="text-xs font-bold mb-1 opacity-90">QUESTION</div>
                                <div class="font-medium">${faq.question}</div>
                            </div>
                        </div>
                        <div class="flex justify-start">
                            <div class="max-w-md p-4 rounded-2xl rounded-tl-sm shadow-md border" style="background: ${cardBg}; border-color: ${accent}20;">
                                <div class="text-xs font-bold mb-1" style="color: ${accent};">ANSWER</div>
                                <div class="text-sm text-gray-700 leading-relaxed">${faq.answer}</div>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                // Simple Cards (default)
                faqHtml = faqs.map(faq => `
                    <div class="p-4 rounded-lg border shadow-sm" style="background: ${cardBg}; border-color: ${accent}20;">
                        <div class="font-semibold mb-2" style="color: ${textColor};">Q: ${faq.question}</div>
                        <div class="text-gray-700 text-sm">A: ${faq.answer}</div>
                    </div>
                `).join('');
            }
        } else {
            faqHtml = `
                <div class="text-center py-8 text-gray-500">
                    <div class="text-4xl mb-2">❓</div>
                    <p>Add frequently asked questions and answers</p>
                </div>
            `;
        }

        const maxWidth = layout === 'twocolumn' ? 'max-w-3xl' : 'max-w-md';

        return `
            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                <div class="${maxWidth} mx-auto">
                    <div class="text-center text-4xl mb-4">❓</div>
                    <h2 class="text-2xl font-bold mb-8 text-center">${data.title || 'Frequently Asked Questions'}</h2>
                    <div class="space-y-4">
                        ${faqHtml}
                    </div>
                </div>
            </div>
        `;
    }
};

// Helper function to add FAQ item
window.addFaqItem = function(sectionId) {
    const container = document.getElementById(`faq-items-${sectionId}`);
    const itemCount = container.children.length;

    const itemHtml = `
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50" data-faq-index="${itemCount}">
            <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-700">Question ${itemCount + 1}</span>
                <button type="button" onclick="this.closest('[data-faq-index]').remove(); updatePreview();" class="text-red-600 hover:text-red-800 text-sm">Remove</button>
            </div>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Question</label>
                    <input type="text" placeholder="What should I wear?" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="faq${itemCount}Question" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Answer</label>
                    <textarea placeholder="The dress code is semi-formal..." rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="faq${itemCount}Answer" oninput="updatePreview()"></textarea>
                </div>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', itemHtml);
    updatePreview();
};
