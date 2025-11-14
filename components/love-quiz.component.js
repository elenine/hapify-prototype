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
                <label class="block text-sm font-medium text-gray-700 mb-2">Quiz Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="quizStyle" onchange="updatePreview()">
                    <option value="cards" selected>Question Cards</option>
                    <option value="accordion">Accordion Style</option>
                    <option value="trivia">Trivia Board</option>
                    <option value="flashcards">Flashcard Style</option>
                    <option value="gameshow">Gameshow Board</option>
                    <option value="bubbles">Speech Bubbles</option>
                    <option value="blocks">Colorful Blocks</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const questions = (data.questions || '').split('\n').filter(q => q.trim());
        const quizStyle = style.quizStyle || 'cards';
        const accentColor = style.accent || '#f43f5e';

        let questionsHTML = '';

        if (quizStyle === 'cards') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <div class="flex items-start gap-3 mb-4">
                            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                ${i + 1}
                            </div>
                            <p class="flex-1 text-gray-900 font-semibold text-lg">${q}</p>
                        </div>
                        <div class="ml-11 rounded-lg p-4 border-l-4" style="background: ${accentColor}10; border-color: ${accentColor};">
                            <p class="text-gray-700"><span class="font-bold" style="color: ${accentColor};">Answer:</span> ${a}</p>
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
                        <div class="text-white p-5" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);">
                            <div class="flex items-center gap-3">
                                <span class="font-bold text-xl">Q${i + 1}.</span>
                                <p class="flex-1 font-medium">${q}</p>
                            </div>
                        </div>
                        <div class="p-5 bg-gray-50">
                            <p class="text-gray-700"><span class="font-bold" style="color: ${accentColor};">💡 Answer:</span> ${a}</p>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (quizStyle === 'trivia') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';

                return `
                    <div class="relative">
                        <div class="text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
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
        } else if (quizStyle === 'flashcards') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';

                return `
                    <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden" style="border-top: 6px solid ${accentColor};">
                        <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-xs uppercase font-bold tracking-wider" style="color: ${accentColor};">Question ${i + 1}</span>
                                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style="background: ${accentColor};">
                                    ❓
                                </div>
                            </div>
                            <p class="text-gray-900 font-semibold text-lg mb-6 min-h-[60px]">${q}</p>
                            <div class="pt-4 border-t-2 border-dashed" style="border-color: ${accentColor}40;">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: ${accentColor};">✓</div>
                                    <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Answer</span>
                                </div>
                                <p class="text-gray-700">${a}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            questionsHTML = `<div class="grid md:grid-cols-2 gap-6">${questionsHTML}</div>`;
        } else if (quizStyle === 'gameshow') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';
                const points = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
                const point = points[i % points.length];

                return `
                    <div class="relative group">
                        <div class="absolute inset-0 opacity-50 blur-lg group-hover:opacity-75 transition" style="background: ${accentColor};"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-xl">
                            <div class="text-white p-6 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}cc);">
                                <div class="text-5xl font-black mb-3 text-yellow-300">${point}</div>
                                <p class="font-bold text-lg">${q}</p>
                            </div>
                            <div class="bg-white p-5 text-center">
                                <div class="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-2" style="background: ${accentColor};">
                                    ANSWER
                                </div>
                                <p class="text-gray-900 font-semibold">${a}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            questionsHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${questionsHTML}</div>`;
        } else if (quizStyle === 'bubbles') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';
                const isLeft = i % 2 === 0;

                return `
                    <div class="space-y-3">
                        <div class="flex ${isLeft ? 'justify-start' : 'justify-end'}">
                            <div class="max-w-md">
                                <div class="rounded-3xl p-5 shadow-lg relative" style="background: ${accentColor};">
                                    <div class="absolute ${isLeft ? 'left-0 -ml-2' : 'right-0 -mr-2'} bottom-4 w-4 h-4 transform rotate-45" style="background: ${accentColor};"></div>
                                    <div class="flex items-center gap-2 mb-2 text-white opacity-90">
                                        <span class="text-xl">❓</span>
                                        <span class="text-xs font-bold uppercase">Question ${i + 1}</span>
                                    </div>
                                    <p class="text-white font-medium">${q}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex ${isLeft ? 'justify-end' : 'justify-start'}">
                            <div class="max-w-md">
                                <div class="bg-white rounded-3xl p-5 shadow-lg relative" style="border: 2px solid ${accentColor}40;">
                                    <div class="absolute ${isLeft ? 'right-0 -mr-2' : 'left-0 -ml-2'} bottom-4 w-4 h-4 transform rotate-45 bg-white" style="border-${isLeft ? 'right' : 'left'}: 2px solid ${accentColor}40; border-bottom: 2px solid ${accentColor}40;"></div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="text-xl">✓</span>
                                        <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Answer</span>
                                    </div>
                                    <p class="text-gray-900">${a}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            questionsHTML = `<div class="space-y-8">${questionsHTML}</div>`;
        } else if (quizStyle === 'blocks') {
            questionsHTML = questions.map((question, i) => {
                const parts = question.split('|').map(p => p.trim());
                const q = parts[0] || '';
                const a = parts[1] || '';

                return `
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
                        <div class="h-3" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}80, ${accentColor});"></div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-xs uppercase font-bold tracking-wider text-gray-500">Question ${i + 1}</span>
                                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg" style="background: ${accentColor}20;">
                                    ❓
                                </div>
                            </div>
                            <p class="text-gray-900 font-bold text-lg mb-5">${q}</p>
                            <div class="rounded-xl p-4" style="background: linear-gradient(135deg, ${accentColor}10, ${accentColor}20);">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: ${accentColor};">✓</div>
                                    <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Answer</span>
                                </div>
                                <p class="text-gray-700 font-medium">${a}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            questionsHTML = `<div class="grid md:grid-cols-2 gap-6">${questionsHTML}</div>`;
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
