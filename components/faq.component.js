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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Card Style</option>
                                <option value="accordion">Accordion Style</option>
                                <option value="minimal">Minimal</option>
                                <option value="numbered">Numbered</option>
                                <option value="bordered">Bordered</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#f9fafb';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'Frequently Asked Questions';

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

                    if (faqs.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                <h2 class="text-2xl font-bold text-center mb-8">${title}</h2>
                                <div class="text-center text-gray-500 text-sm">Add FAQ questions to display</div>
                            </div>
                        `;
                    }

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    switch(layout) {
                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${faqs.map(faq => `
                                            <div class="bg-white rounded-xl p-6 shadow-md border-l-4" style="border-color: ${accentColor};">
                                                <div class="flex items-start gap-3 mb-3">
                                                    <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0" style="background: ${accentColor};">
                                                        ?
                                                    </div>
                                                    <h3 class="font-bold text-base">${faq.q || 'Question'}</h3>
                                                </div>
                                                <p class="text-gray-600 text-sm pl-9">${faq.a || 'Answer'}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'accordion':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                                        ${faqs.map((faq, idx) => `
                                            <div class="p-5 ${idx !== faqs.length - 1 ? 'border-b' : ''}" style="border-color: ${accentColor}20;">
                                                <div class="flex items-center justify-between mb-2">
                                                    <h3 class="font-semibold text-sm flex-1">${faq.q || 'Question'}</h3>
                                                    <div class="text-xl ml-2" style="color: ${accentColor};">›</div>
                                                </div>
                                                <p class="text-gray-600 text-xs">${faq.a || 'Answer'}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-6">
                                        ${faqs.map(faq => `
                                            <div>
                                                <h3 class="font-bold mb-2 text-base" style="color: ${accentColor};">${faq.q || 'Question'}</h3>
                                                <p class="text-gray-600 text-sm leading-relaxed">${faq.a || 'Answer'}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'numbered':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${faqs.map((faq, idx) => `
                                            <div class="flex gap-4 bg-white p-5 rounded-lg shadow-sm">
                                                <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${accentColor};">
                                                    ${idx + 1}
                                                </div>
                                                <div class="flex-1">
                                                    <h3 class="font-bold mb-2 text-sm">${faq.q || 'Question'}</h3>
                                                    <p class="text-gray-600 text-xs">${faq.a || 'Answer'}</p>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'bordered':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${faqs.map(faq => `
                                            <div class="border-2 rounded-xl p-5" style="border-color: ${accentColor};">
                                                <h3 class="font-bold mb-2 text-base" style="color: ${accentColor};">Q: ${faq.q || 'Question'}</h3>
                                                <p class="text-gray-700 text-sm"><span class="font-semibold">A:</span> ${faq.a || 'Answer'}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
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
                }
            };
