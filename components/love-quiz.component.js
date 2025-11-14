// Love Quiz Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-quiz'] = {
    name: '❓ Love Quiz',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="How Well Do You Know Us?" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="How Well Do You Know Us?" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quiz Introduction</label>
                <textarea placeholder="Test your knowledge about our relationship!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quiz Questions (Format: Question | Answer, one per line)</label>
                <textarea placeholder="Where did we first meet? | At a coffee shop
What's our favorite song? | Perfect by Ed Sheeran
Where was our first date? | Italian restaurant downtown
What's our anniversary date? | June 15th
What's our favorite movie together? | The Notebook
What's my partner's favorite food? | Sushi
What was our first trip together? | Beach getaway
What's our couple nickname? | Lovebirds
How many pets do we want? | Two cats
What's our dream destination? | Paris" rows="15" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="questions" oninput="updatePreview()"></textarea>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Quiz Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="quizStyle" onchange="updatePreview()">
                    <option value="cards" selected>Question Cards</option>
                    <option value="accordion">Accordion Style</option>
                    <option value="trivia">Trivia Board</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const questions = (data.questions || '').split('\n').filter(q => q.trim());
        const quizStyle = style.quizStyle || 'cards';

        let questionsHTML = '';

        if (quizStyle === 'cards') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <div class="flex items-start gap-3 mb-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                ${i + 1}
                            </div>
                            <p class="flex-1 text-gray-900 font-semibold text-lg">${q}</p>
                        </div>
                        <div class="ml-11 bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                            <p class="text-gray-700"><span class="font-bold text-rose-600">Answer:</span> ${a}</p>
                        </div>
                    </div>
                `;
            }).join('');
            questionsHTML = `<div class="grid md:grid-cols-2 gap-6">${questionsHTML}</div>`;
        } else if (quizStyle === 'accordion') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';

                return `
                    <div class="bg-white rounded-lg shadow-md overflow-hidden mb-3">
                        <div class="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-5">
                            <div class="flex items-center gap-3">
                                <span class="font-bold text-xl">Q${i + 1}.</span>
                                <p class="flex-1 font-medium">${q}</p>
                            </div>
                        </div>
                        <div class="p-5 bg-gray-50">
                            <p class="text-gray-700"><span class="font-bold text-rose-600">💡 Answer:</span> ${a}</p>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';
                const colors = ['from-rose-400 to-pink-400', 'from-pink-400 to-rose-400', 'from-rose-500 to-pink-500'];
                const color = colors[i % colors.length];

                return `
                    <div class="relative">
                        <div class="bg-gradient-to-br ${color} text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition">
                            <div class="absolute top-3 right-3 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-2xl font-bold">
                                ${i + 1}
                            </div>
                            <div class="mb-4">
                                <p class="font-semibold text-lg mb-3">${q}</p>
                            </div>
                            <div class="bg-white/20 backdrop-blur rounded-lg p-3 border border-white/30">
                                <p class="text-sm">✓ ${a}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            questionsHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${questionsHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">❓</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">${data.title || 'How Well Do You Know Us?'}</h2>
                        ${data.intro ? `<p class="text-lg text-gray-600">${data.intro}</p>` : ''}
                    </div>
                    ${questionsHTML || '<p class="text-center text-gray-400">Add your quiz questions...</p>'}
                </div>
            </div>
        `;
    }
};
