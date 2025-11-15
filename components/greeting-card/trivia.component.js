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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="numberedCards">Numbered Cards - Classic numbered question cards</option>
                    <option value="quizStyle">Quiz Style - Interactive quiz-like appearance</option>
                    <option value="compactList">Compact List - Condensed list format</option>
                    <option value="colorfulBadges">Colorful Badges - Vibrant badge numbers</option>
                    <option value="accordionStyle">Accordion Style - Expandable-looking cards</option>
                    <option value="timelineView">Timeline View - Vertical timeline layout</option>
                    <option value="flashcards">Flashcards - Card flip style design</option>
                    <option value="gameShow">Game Show - Scoreboard style layout</option>
                    <option value="bingo">Bingo Board - Grid pattern display</option>
                    <option value="puzzle">Puzzle Pieces - Jigsaw puzzle style</option>
                    <option value="spotlight">Question Spotlight - Theater lights theme</option>
                    <option value="retro">Retro Arcade - Pixel game aesthetic</option>
                </select>
            </div>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl" selected>Extra Large</option>
                    <option value="2xl">2X Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Badge Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="badgeStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="diamond">Diamond</option>
                </select>
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

        const layout = style.layout || 'numberedCards';
        const bgColor = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accent || globalStyles.primaryColor;
        const textColor = style.text || '#1f2937';
        const shadow = style.shadow || 'md';
        const borderRadius = style.borderRadius || 'xl';
        const badgeStyle = style.badgeStyle || 'circle';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const radiusClass = borderRadius === 'none' ? '' : `rounded-${borderRadius}`;

        const getBadgeClass = () => {
            if (badgeStyle === 'circle') return 'rounded-full';
            if (badgeStyle === 'square') return '';
            if (badgeStyle === 'rounded') return 'rounded-lg';
            if (badgeStyle === 'diamond') return 'rotate-45';
            return 'rounded-full';
        };

        if (questions.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <p class="text-center text-gray-500">Add trivia questions in the editor</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'numberedCards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="space-y-6">
                            ${questions.map((q, index) => `
                                <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}">
                                    <div class="p-6">
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-10 h-10 ${getBadgeClass()} flex items-center justify-center font-bold text-white" style="background: ${accentColor}">
                                                ${badgeStyle === 'diamond' ? `<span class="-rotate-45">${index + 1}</span>` : index + 1}
                                            </div>
                                            <div class="flex-1">
                                                <p class="text-lg font-semibold mb-3">${q.question}</p>
                                                <div class="mt-3 p-3 rounded-lg" style="background: ${bgColor}">
                                                    <div class="text-xs font-semibold text-gray-500 mb-1">ANSWER</div>
                                                    <p class="font-medium">${q.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'quizStyle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="space-y-6">
                            ${questions.map((q, index) => `
                                <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}; border-left: 4px solid ${accentColor}">
                                    <div class="p-6">
                                        <div class="flex items-center gap-3 mb-3">
                                            <span class="px-3 py-1 rounded-full text-sm font-bold text-white" style="background: ${accentColor}">Q${index + 1}</span>
                                            <p class="text-lg font-semibold flex-1">${q.question}</p>
                                        </div>
                                        <div class="ml-16 p-4 rounded-lg border-2" style="background: ${bgColor}; border-color: ${accentColor}">
                                            <div class="flex items-center gap-2 mb-2">
                                                <span class="text-xs font-bold px-2 py-1 rounded" style="background: ${accentColor}; color: white">✓</span>
                                                <span class="text-xs font-semibold text-gray-500">CORRECT ANSWER</span>
                                            </div>
                                            <p class="font-medium">${q.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'compactList') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="${radiusClass} ${shadowClass} divide-y" style="background: ${cardBg}">
                            ${questions.map((q, index) => `
                                <div class="p-5">
                                    <div class="flex gap-3 mb-2">
                                        <span class="font-bold text-lg" style="color: ${accentColor}">${index + 1}.</span>
                                        <p class="text-base font-semibold flex-1">${q.question}</p>
                                    </div>
                                    <div class="ml-8 mt-2 p-2 rounded" style="background: ${bgColor}">
                                        <p class="text-sm font-medium">${q.answer}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'colorfulBadges') {
            const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="space-y-6">
                            ${questions.map((q, index) => {
                                const color = colors[index % colors.length];
                                return `
                                    <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}">
                                        <div class="p-6">
                                            <div class="flex items-start gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl ${shadowClass}" style="background: ${color}">
                                                    ${index + 1}
                                                </div>
                                                <div class="flex-1">
                                                    <p class="text-lg font-semibold mb-3">${q.question}</p>
                                                    <div class="mt-3 p-3 rounded-lg" style="background: ${bgColor}">
                                                        <div class="text-xs font-semibold mb-1" style="color: ${color}">ANSWER</div>
                                                        <p class="font-medium">${q.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'accordionStyle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="space-y-4">
                            ${questions.map((q, index) => `
                                <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}">
                                    <div class="p-4" style="background: ${accentColor}">
                                        <div class="flex items-center gap-3">
                                            <span class="font-bold text-white text-lg">${index + 1}</span>
                                            <p class="text-base font-semibold text-white flex-1">${q.question}</p>
                                            <span class="text-white text-xl">▼</span>
                                        </div>
                                    </div>
                                    <div class="p-5" style="background: ${cardBg}">
                                        <div class="p-3 rounded-lg" style="background: ${bgColor}">
                                            <div class="text-xs font-semibold text-gray-500 mb-1">ANSWER</div>
                                            <p class="font-medium">${q.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'timelineView') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}"></div>
                            <div class="space-y-8">
                                ${questions.map((q, index) => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${shadowClass}" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="${radiusClass} ${shadowClass} p-5" style="background: ${cardBg}">
                                            <p class="text-lg font-semibold mb-3">${q.question}</p>
                                            <div class="p-3 rounded-lg" style="background: ${bgColor}">
                                                <div class="text-xs font-semibold text-gray-500 mb-1">ANSWER</div>
                                                <p class="font-medium">${q.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'flashcards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${questions.map((q, index) => `
                                <div class="relative" style="perspective: 1000px">
                                    <div class="${radiusClass} ${shadowClass} p-6" style="background: ${cardBg}; border: 3px solid ${accentColor}; transform: rotateY(-2deg)">
                                        <div class="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="mb-4">
                                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor}">QUESTION</div>
                                            <p class="text-lg font-semibold">${q.question}</p>
                                        </div>
                                        <div class="border-t-2 pt-4" style="border-color: ${accentColor}44">
                                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor}">ANSWER</div>
                                            <p class="font-medium">${q.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'gameShow') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, #1e293b, #334155); color: white">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10 text-yellow-400">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${questions.map((q, index) => `
                                <div class="${radiusClass} overflow-hidden ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); border: 4px solid gold">
                                    <div class="p-4" style="background: rgba(0,0,0,0.3)">
                                        <div class="flex items-center gap-3 mb-3">
                                            <div class="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl bg-yellow-400 text-gray-900 ${shadowClass}">
                                                ${index + 1}
                                            </div>
                                            <div class="text-xs font-bold text-yellow-400">QUESTION #${index + 1}</div>
                                        </div>
                                        <p class="text-lg font-semibold mb-3">${q.question}</p>
                                        <div class="p-3 rounded-lg ${shadowClass}" style="background: rgba(255,255,255,0.95); color: #1f2937">
                                            <div class="text-xs font-bold mb-1" style="color: ${accentColor}">✓ CORRECT ANSWER</div>
                                            <p class="font-bold">${q.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'bingo') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                            ${questions.map((q, index) => `
                                <div class="${radiusClass} ${shadowClass} p-4 text-center" style="background: ${cardBg}; border: 4px solid ${accentColor}">
                                    <div class="w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold text-white mb-3 ${shadowClass}" style="background: ${accentColor}">
                                        ${index + 1}
                                    </div>
                                    <p class="text-sm font-semibold mb-3 min-h-[3rem]">${q.question}</p>
                                    <div class="p-2 rounded" style="background: ${bgColor}">
                                        <p class="text-xs font-bold">${q.answer}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'puzzle') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="flex flex-wrap gap-4 justify-center">
                            ${questions.map((q, index) => {
                                const rotations = [-3, 2, -2, 3, -1, 2];
                                const rotation = rotations[index % rotations.length];
                                return `
                                    <div style="transform: rotate(${rotation}deg); max-width: 280px">
                                        <div class="${radiusClass} ${shadowClass} p-5 relative" style="background: ${cardBg}; border: 3px solid ${accentColor}; clip-path: polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)">
                                            <div class="absolute top-2 right-2 w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm" style="background: ${accentColor}">
                                                ${index + 1}
                                            </div>
                                            <div class="mb-3">
                                                <p class="text-base font-semibold">${q.question}</p>
                                            </div>
                                            <div class="p-2 rounded" style="background: ${bgColor}">
                                                <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">ANSWER</div>
                                                <p class="text-sm font-medium">${q.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'spotlight') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #1f2937, #111827); color: white">
                    <div class="absolute inset-0 opacity-20">
                        ${questions.map((_, i) => `<div class="absolute w-32 h-32 rounded-full" style="background: radial-gradient(circle, ${accentColor}66, transparent); left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; transform: translate(-50%, -50%)"></div>`).join('')}
                    </div>
                    <div class="max-w-3xl mx-auto relative z-10">
                        <h3 class="text-3xl font-bold text-center mb-10 text-yellow-400">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="space-y-6">
                            ${questions.map((q, index) => `
                                <div class="${radiusClass} ${shadowClass} p-6 relative overflow-hidden" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 2px solid ${accentColor}66; box-shadow: 0 0 30px ${accentColor}44">
                                    <div class="absolute top-0 left-0 w-full h-full opacity-10" style="background: radial-gradient(circle at 50% 50%, ${accentColor}, transparent)"></div>
                                    <div class="relative z-10">
                                        <div class="flex items-center gap-4 mb-3">
                                            <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl ${shadowClass}" style="background: ${accentColor}; color: white">
                                                ${index + 1}
                                            </div>
                                            <p class="text-lg font-semibold flex-1">${q.question}</p>
                                        </div>
                                        <div class="ml-16 p-4 rounded-lg ${shadowClass}" style="background: rgba(255,255,255,0.95); color: #1f2937">
                                            <div class="text-xs font-bold mb-1" style="color: ${accentColor}">ANSWER</div>
                                            <p class="font-semibold">${q.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'retro') {
            return `
                <div class="py-12 px-6" style="background: #2d1b69; color: #f0e68c">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10" style="text-shadow: 3px 3px 0px #ff6ec7, 6px 6px 0px #7b68ee; font-family: monospace">${data.title || 'How Well Do You Know Me?'}</h3>
                        <div class="space-y-4">
                            ${questions.map((q, index) => `
                                <div class="${shadowClass} p-6" style="background: #000000; border: 4px solid ${accentColor}; font-family: monospace">
                                    <div class="flex items-center gap-4 mb-4">
                                        <div class="w-12 h-12 flex items-center justify-center font-bold text-2xl ${shadowClass}" style="background: ${accentColor}; color: #000; border: 3px solid #fff">
                                            ${index + 1}
                                        </div>
                                        <div class="text-xs font-bold px-3 py-1" style="background: ${accentColor}; color: #000">Q${index + 1}</div>
                                    </div>
                                    <p class="text-lg font-bold mb-4 text-white">${q.question}</p>
                                    <div class="p-4" style="background: ${accentColor}; color: #000; border: 2px dashed #fff">
                                        <div class="text-xs font-bold mb-2">>>> ANSWER:</div>
                                        <p class="font-bold text-lg">${q.answer}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'How Well Do You Know Me?'}</h3>
                    <div class="space-y-6">
                        ${questions.map((q, index) => `
                            <div class="${radiusClass} ${shadowClass} overflow-hidden" style="background: ${cardBg}">
                                <div class="p-6">
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-lg font-semibold mb-3">${q.question}</p>
                                            <div class="mt-3 p-3 rounded-lg" style="background: ${bgColor}">
                                                <div class="text-xs font-semibold text-gray-500 mb-1">ANSWER</div>
                                                <p class="font-medium">${q.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
