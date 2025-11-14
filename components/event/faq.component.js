// FAQ Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ Frequently Asked Questions',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., FAQ"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="faqTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Question 1</label>
                <input type="text" placeholder="e.g., What should I wear?"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="question1" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Answer 1</label>
                <textarea placeholder="Answer..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="answer1" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Question 2</label>
                <input type="text" placeholder="e.g., Can I bring a plus one?"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="question2" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Answer 2</label>
                <textarea placeholder="Answer..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="answer2" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Question 3</label>
                <input type="text" placeholder="e.g., Will there be food?"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="question3" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Answer 3</label>
                <textarea placeholder="Answer..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="answer3" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Question 4</label>
                <input type="text" placeholder="e.g., Is the venue accessible?"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="question4" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Answer 4</label>
                <textarea placeholder="Answer..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="answer4" onkeyup="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="layoutStyle" onchange="updatePreview()">
                    <option value="accordion">Accordion</option>
                    <option value="cards">Cards</option>
                    <option value="simple">Simple List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#f0f9ff';
        const layoutStyle = style.layoutStyle || 'accordion';
        const title = data.faqTitle || 'Frequently Asked Questions';

        const faqs = [];
        for (let i = 1; i <= 4; i++) {
            const q = data[`question${i}`];
            const a = data[`answer${i}`];
            if (q && a) {
                faqs.push({ question: q, answer: a });
            }
        }

        if (faqs.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-gray-500">No FAQs added yet</p>
                </div>
            `;
        }

        let faqsHtml = '';
        if (layoutStyle === 'accordion' || layoutStyle === 'simple') {
            faqsHtml = `
                <div class="max-w-3xl mx-auto space-y-4">
                    ${faqs.map((faq, index) => `
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-lg font-bold mb-2" style="color: ${globalStyles.primaryColor || '#059669'};">
                                ${layoutStyle === 'accordion' ? `❓ ` : ''}${faq.question}
                            </h3>
                            <p class="text-gray-700">${faq.answer}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            faqsHtml = `
                <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    ${faqs.map(faq => `
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="text-lg font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">
                                ${faq.question}
                            </h3>
                            <p class="text-gray-700">${faq.answer}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${faqsHtml}
            </div>
        `;
    }
};
