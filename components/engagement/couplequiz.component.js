// Couple Quiz Component for Engagement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.couplequiz = {
    name: '❓ Couple Quiz',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="How Well Do You Know Us?" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="How Well Do You Know Us?" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Test your knowledge about our relationship!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 1</h4>
                <input type="text" placeholder="Where did we meet?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data mb-2" data-field="q1" oninput="updatePreview()">
                <input type="text" placeholder="Answer" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="a1" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 2</h4>
                <input type="text" placeholder="What was our first date?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data mb-2" data-field="q2" oninput="updatePreview()">
                <input type="text" placeholder="Answer" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="a2" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 3</h4>
                <input type="text" placeholder="What's our favorite activity together?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data mb-2" data-field="q3" oninput="updatePreview()">
                <input type="text" placeholder="Answer" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="a3" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 4 (Optional)</h4>
                <input type="text" placeholder="How many years have we been together?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data mb-2" data-field="q4" oninput="updatePreview()">
                <input type="text" placeholder="Answer" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="a4" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Question 5 (Optional)</h4>
                <input type="text" placeholder="Where are we planning our honeymoon?" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data mb-2" data-field="q5" oninput="updatePreview()">
                <input type="text" placeholder="Answer" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="a5" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Show Answers?</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="showAnswers" onchange="updatePreview()">
                    <option value="yes">Yes - Show answers below questions</option>
                    <option value="no" selected>No - Keep as a guessing game</option>
                </select>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';
        const showAnswers = data.showAnswers === 'yes';

        const questions = [];
        if (data.q1) questions.push({ q: data.q1, a: data.a1 });
        if (data.q2) questions.push({ q: data.q2, a: data.a2 });
        if (data.q3) questions.push({ q: data.q3, a: data.a3 });
        if (data.q4) questions.push({ q: data.q4, a: data.a4 });
        if (data.q5) questions.push({ q: data.q5, a: data.a5 });

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">❓</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'How Well Do You Know Us?'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${questions.length > 0 ? `
                        <div class="space-y-4">
                            ${questions.map((item, index) => `
                                <div class="p-6 rounded-xl shadow-md" style="background: ${cardBg};">
                                    <div class="flex gap-4">
                                        <div class="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold flex-shrink-0">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-lg mb-3">${item.q}</h3>
                                            ${showAnswers && item.a ? `
                                                <div class="bg-rose-50 rounded-lg p-3 border-l-4 border-rose-400">
                                                    <p class="text-sm text-gray-700">
                                                        <span class="font-medium text-rose-700">Answer:</span> ${item.a}
                                                    </p>
                                                </div>
                                            ` : `
                                                <div class="bg-gray-50 rounded-lg p-3 text-center">
                                                    <p class="text-sm text-gray-500 italic">Can you guess the answer?</p>
                                                </div>
                                            `}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-500 py-8">Add quiz questions to display here</p>
                    `}
                </div>
            </div>
        `;
    }
};
