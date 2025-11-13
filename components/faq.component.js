// FAQ Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
                name: '❓ FAQ',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Frequently Asked Questions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Questions</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'faqs'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Question</button>
                            </div>
                            <div data-items-container="faqs"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const faqs = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^faq-q-(.+)$/);
                        if (match) {
                            const id = match[1];
                            faqs.push({
                                q: data[`faq-q-${id}`],
                                a: data[`faq-a-${id}`]
                            });
                        }
                    });

                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Frequently Asked Questions'}</h2>
                            <div class="max-w-3xl mx-auto space-y-4">
                                ${faqs.map(faq => `
                                    <div class="bg-white rounded-lg p-6 shadow-sm">
                                        <h3 class="font-semibold text-lg mb-2">${faq.q || 'Question'}</h3>
                                        <p class="text-gray-600 text-sm">${faq.a || 'Answer'}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            };
