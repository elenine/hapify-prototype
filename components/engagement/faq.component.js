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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
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

        const faqHtml = faqs.length > 0 ? faqs.map(faq => `
            <div class="p-4 bg-white rounded-lg border border-rose-100">
                <div class="font-semibold text-gray-900 mb-2">Q: ${faq.question}</div>
                <div class="text-gray-700 text-sm">A: ${faq.answer}</div>
            </div>
        `).join('') : `
            <div class="text-center py-8 text-gray-500">
                <div class="text-4xl mb-2">❓</div>
                <p>Add frequently asked questions and answers</p>
            </div>
        `;

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-md mx-auto">
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
