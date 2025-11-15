// Marriage Advice Component for Anniversary

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.advice = {
    name: '💡 Marriage Advice',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Marriage Advice" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" value="Marriage Advice" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="After years together, here's what we've learned..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Advice 1</h4>
                <input type="text" placeholder="Never go to bed angry" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="advice1title" oninput="updatePreview()">
                <textarea placeholder="Explanation..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="advice1desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Advice 2</h4>
                <input type="text" placeholder="Always make time for date nights" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="advice2title" oninput="updatePreview()">
                <textarea placeholder="Explanation..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="advice2desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Advice 3</h4>
                <input type="text" placeholder="Communicate openly and honestly" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="advice3title" oninput="updatePreview()">
                <textarea placeholder="Explanation..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="advice3desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Advice 4 (Optional)</h4>
                <input type="text" placeholder="Keep laughing together" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="advice4title" oninput="updatePreview()">
                <textarea placeholder="Explanation..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="advice4desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Advice 5 (Optional)</h4>
                <input type="text" placeholder="Support each other's dreams" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data mb-2" data-field="advice5title" oninput="updatePreview()">
                <textarea placeholder="Explanation..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="advice5desc" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#fef2f2';

        const adviceItems = [];
        if (data.advice1title) adviceItems.push({ title: data.advice1title, desc: data.advice1desc });
        if (data.advice2title) adviceItems.push({ title: data.advice2title, desc: data.advice2desc });
        if (data.advice3title) adviceItems.push({ title: data.advice3title, desc: data.advice3desc });
        if (data.advice4title) adviceItems.push({ title: data.advice4title, desc: data.advice4desc });
        if (data.advice5title) adviceItems.push({ title: data.advice5title, desc: data.advice5desc });

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">💡</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Marriage Advice'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${adviceItems.length > 0 ? `
                        <div class="space-y-4">
                            ${adviceItems.map((item, index) => `
                                <div class="bg-white rounded-xl p-6 shadow-md">
                                    <div class="flex gap-4">
                                        <div class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg mb-2 text-red-700">${item.title}</h3>
                                            ${item.desc ? `<p class="text-gray-700 text-sm">${item.desc}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-500 py-8">Add marriage advice to display here</p>
                    `}
                </div>
            </div>
        `;
    }
};
