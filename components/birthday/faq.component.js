// FAQ Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ FAQ',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Frequently Asked Questions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Got questions? We've got answers!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">FAQ Items</label>
                <div data-items-container="faq" class="space-y-4">
                    <!-- FAQ items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'faq')" class="mt-3 px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition text-sm font-medium">
                    + Add Question
                </button>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="faqStyle" oninput="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="accordion">Accordion Style</option>
                    <option value="simple">Simple List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const faqStyle = style.faqStyle || 'cards';

        // Collect FAQ items from dynamic items
        const faqItems = [];
        const container = document.querySelector(`[data-items-container="faq"]`);
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const question = item.querySelector('[data-field="question"]')?.value || '';
                const answer = item.querySelector('[data-field="answer"]')?.value || '';
                if (question || answer) {
                    faqItems.push({ question, answer });
                }
            });
        }

        if (faqItems.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-3xl mx-auto text-center">
                        <div class="text-5xl mb-4">❓</div>
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">${data.title || 'Frequently Asked Questions'}</h3>
                        <p class="text-gray-600">No questions added yet.</p>
                    </div>
                </div>
            `;
        }

        if (faqStyle === 'accordion') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">❓</div>
                            <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Frequently Asked Questions'}</h3>
                            ${data.subtitle ? `<p class="text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="space-y-3">
                            ${faqItems.map((item, index) => `
                                <div class="bg-white rounded-lg shadow-sm border border-pink-200 overflow-hidden">
                                    <div class="p-4 bg-pink-50">
                                        <div class="flex items-start gap-3">
                                            <span class="text-pink-600 font-bold flex-shrink-0">Q${index + 1}:</span>
                                            <div class="font-semibold text-gray-900">${item.question}</div>
                                        </div>
                                    </div>
                                    <div class="p-4">
                                        <div class="flex items-start gap-3">
                                            <span class="text-green-600 font-bold flex-shrink-0">A:</span>
                                            <div class="text-gray-700">${item.answer}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (faqStyle === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">❓</div>
                            <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Frequently Asked Questions'}</h3>
                            ${data.subtitle ? `<p class="text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="space-y-6">
                            ${faqItems.map((item, index) => `
                                <div class="border-l-4 border-pink-500 pl-6">
                                    <h4 class="font-bold text-lg text-gray-900 mb-2">${item.question}</h4>
                                    <p class="text-gray-700">${item.answer}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-3">❓</div>
                        <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Frequently Asked Questions'}</h3>
                        ${data.subtitle ? `<p class="text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${faqItems.map((item, index) => `
                            <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                <div class="flex items-start gap-3 mb-3">
                                    <span class="text-2xl">❓</span>
                                    <h4 class="font-bold text-gray-900">${item.question}</h4>
                                </div>
                                <p class="text-gray-700 text-sm ml-11">${item.answer}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
