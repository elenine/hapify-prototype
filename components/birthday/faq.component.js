// FAQ Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ FAQ',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Frequently Asked Questions, Got Questions?"
                       value="Frequently Asked Questions"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="intro"
                          rows="2"
                          placeholder="Here are answers to common questions about the party..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- FAQ 1 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Question #1</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="q1"
                       placeholder="e.g., What should I bring?"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="a1"
                          rows="2"
                          placeholder="Answer to question 1..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- FAQ 2 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Question #2</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="q2"
                       placeholder="e.g., Is it kid-friendly?"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="a2"
                          rows="2"
                          placeholder="Answer to question 2..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- FAQ 3 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Question #3</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="q3"
                       placeholder="e.g., What time does it end?"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="a3"
                          rows="2"
                          placeholder="Answer to question 3..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- FAQ 4 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Question #4 (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="q4"
                       placeholder="Question 4..."
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="a4"
                          rows="2"
                          placeholder="Answer to question 4..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- FAQ 5 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Question #5 (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="q5"
                       placeholder="Question 5..."
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="a5"
                          rows="2"
                          placeholder="Answer to question 5..."
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#f0f9ff"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#3b82f6"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="accordion" selected>Accordion</option>
                    <option value="cards">Cards</option>
                    <option value="simple">Simple List</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#f0f9ff';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#3b82f6';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'accordion';

        // Collect FAQs
        const faqs = [];
        for (let i = 1; i <= 5; i++) {
            const question = data[`q${i}`];
            const answer = data[`a${i}`];
            if (question || answer) {
                faqs.push({ question, answer });
            }
        }

        if (faqs.length === 0) {
            return '';
        }

        let faqsHtml = '';

        if (layoutStyle === 'accordion') {
            faqsHtml = `
                <div class="space-y-3">
                    ${faqs.map((faq, index) => `
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div class="p-4 font-semibold flex items-start gap-3" style="background-color: ${accentColor}10;">
                                <span style="color: ${accentColor};">Q${index + 1}:</span>
                                <span>${faq.question}</span>
                            </div>
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">${faq.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'cards') {
            faqsHtml = `
                <div class="grid sm:grid-cols-2 gap-6">
                    ${faqs.map((faq, index) => `
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                            <div class="flex items-start gap-3 mb-3">
                                <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                     style="background-color: ${accentColor};">
                                    ${index + 1}
                                </div>
                                <h3 class="font-bold flex-1" style="color: ${accentColor};">
                                    ${faq.question}
                                </h3>
                            </div>
                            <p class="text-gray-700 pl-11">${faq.answer}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else { // simple
            faqsHtml = `
                <div class="bg-white rounded-lg p-6 space-y-6">
                    ${faqs.map((faq, index) => `
                        <div class="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                            <h3 class="font-bold mb-2 flex items-center gap-2" style="color: ${accentColor};">
                                <span class="text-lg">❓</span> ${faq.question}
                            </h3>
                            <p class="text-gray-700 pl-7">${faq.answer}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">❓</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Frequently Asked Questions'}
                        </h2>
                        ${data.intro ? `
                            <p class="text-lg mt-3">${data.intro}</p>
                        ` : ''}
                    </div>

                    ${faqsHtml}
                </div>
            </div>
        `;
    }
};
