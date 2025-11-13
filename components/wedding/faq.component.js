// FAQ Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.faq = {
    name: '❓ FAQ',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Frequently Asked Questions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Frequently Asked Questions" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 1</h4>
                <div class="space-y-3">
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">Question</label>
                        <input type="text" placeholder="What should I wear?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="q1" oninput="updatePreview()">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">Answer</label>
                        <textarea placeholder="Please see dress code section..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="a1" oninput="updatePreview()"></textarea>
                    </div>
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 2</h4>
                <div class="space-y-3">
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">Question</label>
                        <input type="text" placeholder="Can I bring a plus one?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="q2" oninput="updatePreview()">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">Answer</label>
                        <textarea placeholder="Please check your invitation..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="a2" oninput="updatePreview()"></textarea>
                    </div>
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 3 (Optional)</h4>
                <div class="space-y-3">
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">Question</label>
                        <input type="text" placeholder="Is the ceremony indoors?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="q3" oninput="updatePreview()">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-600 mb-1">Answer</label>
                        <textarea placeholder="Yes, the ceremony will be..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="a3" oninput="updatePreview()"></textarea>
                    </div>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const accent = style.accent || '#9333ea';
        const faqs = [];

        if (data.q1 && data.a1) faqs.push({ q: data.q1, a: data.a1 });
        if (data.q2 && data.a2) faqs.push({ q: data.q2, a: data.a2 });
        if (data.q3 && data.a3) faqs.push({ q: data.q3, a: data.a3 });

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">❓</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Frequently Asked Questions'}</h2>
                    </div>
                    <div class="space-y-6">
                        ${faqs.map(faq => `
                            <div class="border-l-4 pl-4" style="border-color: ${accent}">
                                <h3 class="font-semibold text-lg mb-2" style="color: ${accent}">${faq.q}</h3>
                                <p class="text-gray-600">${faq.a}</p>
                            </div>
                        `).join('')}
                        ${faqs.length === 0 ? `
                            <p class="text-center text-gray-500">Add questions and answers to display them here</p>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
