// Testimonials/Wishes Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.testimonials = {
    name: '💬 Birthday Wishes',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Birthday Wishes, What People Say"
                       value="Birthday Wishes"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction Text</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="intro"
                          rows="2"
                          placeholder="See what friends and family have to say..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- Wish 1 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish #1</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish1Name"
                       placeholder="Person's name"
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish1Relation"
                       placeholder="Relationship (e.g., Best Friend, Sister)"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="wish1Text"
                          rows="3"
                          placeholder="Their birthday wish or message..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- Wish 2 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish #2</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish2Name"
                       placeholder="Person's name"
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish2Relation"
                       placeholder="Relationship"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="wish2Text"
                          rows="3"
                          placeholder="Their birthday wish or message..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- Wish 3 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish #3</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish3Name"
                       placeholder="Person's name"
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish3Relation"
                       placeholder="Relationship"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="wish3Text"
                          rows="3"
                          placeholder="Their birthday wish or message..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- Wish 4 (Optional) -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish #4 (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish4Name"
                       placeholder="Person's name"
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="wish4Relation"
                       placeholder="Relationship"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="wish4Text"
                          rows="3"
                          placeholder="Their birthday wish or message..."
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
                       value="#fef2f2"
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
                       value="#f43f5e"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="cards" selected>Cards</option>
                    <option value="quotes">Quote Style</option>
                    <option value="bubbles">Speech Bubbles</option>
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
        const bgColor = style.bgColor || '#fef2f2';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#f43f5e';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'cards';

        // Collect wishes
        const wishes = [];
        for (let i = 1; i <= 4; i++) {
            const name = data[`wish${i}Name`];
            const relation = data[`wish${i}Relation`];
            const text = data[`wish${i}Text`];
            if (name || text) {
                wishes.push({ name, relation, text });
            }
        }

        if (wishes.length === 0) {
            return '';
        }

        let wishesHtml = '';

        if (layoutStyle === 'cards') {
            wishesHtml = `
                <div class="grid sm:grid-cols-2 gap-6">
                    ${wishes.map(wish => `
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                            <div class="text-3xl mb-3">💝</div>
                            <p class="text-gray-700 italic mb-4">"${wish.text}"</p>
                            <div class="border-t pt-3">
                                <p class="font-bold" style="color: ${accentColor};">${wish.name}</p>
                                ${wish.relation ? `<p class="text-sm text-gray-600">${wish.relation}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'quotes') {
            wishesHtml = `
                <div class="space-y-6">
                    ${wishes.map(wish => `
                        <div class="bg-white bg-opacity-70 rounded-lg p-6 border-l-4" style="border-color: ${accentColor};">
                            <p class="text-lg italic mb-4">"${wish.text}"</p>
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                                     style="background-color: ${accentColor}20;">
                                    💖
                                </div>
                                <div>
                                    <p class="font-bold" style="color: ${accentColor};">${wish.name}</p>
                                    ${wish.relation ? `<p class="text-sm text-gray-600">${wish.relation}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else { // bubbles
            wishesHtml = `
                <div class="space-y-6">
                    ${wishes.map((wish, index) => {
                        const isEven = index % 2 === 0;
                        return `
                            <div class="flex ${isEven ? 'justify-start' : 'justify-end'}">
                                <div class="max-w-md">
                                    <div class="bg-white rounded-2xl p-5 shadow-md relative ${isEven ? 'rounded-bl-none' : 'rounded-br-none'}">
                                        <p class="text-gray-700 mb-3">${wish.text}</p>
                                        <div class="flex items-center gap-2 ${isEven ? '' : 'justify-end'}">
                                            <span class="text-xl">💬</span>
                                            <div class="${isEven ? 'text-left' : 'text-right'}">
                                                <p class="font-semibold text-sm" style="color: ${accentColor};">${wish.name}</p>
                                                ${wish.relation ? `<p class="text-xs text-gray-600">${wish.relation}</p>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">💬</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Birthday Wishes'}
                        </h2>
                        ${data.intro ? `
                            <p class="text-lg mt-3">${data.intro}</p>
                        ` : ''}
                    </div>

                    ${wishesHtml}
                </div>
            </div>
        `;
    }
};
