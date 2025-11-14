// Birthday Trivia Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.trivia = {
    name: '❓ Trivia',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="How Well Do You Know Me?" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Trivia Questions</label>
                <p class="text-xs text-gray-500 mb-2">Add fun trivia questions about the birthday person</p>
                <div data-items-container="trivia" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'trivia')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Question Card Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const questions = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="trivia"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const questionInput = item.querySelector('[data-field="question"]');
                const answerInput = item.querySelector('[data-field="answer"]');
                const question = questionInput?.value || '';
                const answer = answerInput?.value || '';
                if (question && answer) {
                    questions.push({ question, answer });
                }
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                    <div class="space-y-6">
                        ${questions.length > 0 ? questions.map((q, index) => `
                            <div class="bg-white rounded-xl shadow-md overflow-hidden" style="background: ${style.cardBg || '#ffffff'}">
                                <div class="p-6">
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style="background: ${style.accent || globalStyles.primaryColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-lg font-semibold mb-3">${q.question}</p>
                                            <div class="mt-3 p-3 rounded-lg" style="background: ${style.bg || '#fef2f2'}">
                                                <div class="text-xs font-semibold text-gray-500 mb-1">ANSWER</div>
                                                <p class="font-medium">${q.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">Add trivia questions in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
