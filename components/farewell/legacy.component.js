// Legacy/Advice Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.legacy = {
    name: '🌟 Legacy & Wisdom',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Words of Wisdom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction Message</label>
                <textarea placeholder="As they move on to new adventures, here's the wisdom they leave behind..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Advice & Wisdom</label>
                <div class="text-xs text-gray-500 mb-2">Format: Icon | Title | Advice (one per line)</div>
                <textarea placeholder="💡 | On Innovation | Never be afraid to try something new. The best ideas come from taking risks.&#10;🤝 | On Teamwork | Trust your team. Together you can achieve anything.&#10;🎯 | On Focus | Stay true to your vision, but be flexible in your approach.&#10;💪 | On Persistence | Every setback is a setup for a comeback. Keep pushing forward.&#10;❤️ | On Passion | Do what you love, and success will follow." rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="advice" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">Use | to separate icon, title, and advice</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fefce8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="cards">Card Layout</option>
                    <option value="list">List Layout</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const adviceItems = data.advice ? data.advice.split('\n').filter(item => item.trim()) : [];

        const parsedAdvice = adviceItems.map(item => {
            const parts = item.split('|');
            if (parts.length >= 3) {
                return {
                    icon: parts[0].trim(),
                    title: parts[1].trim(),
                    advice: parts[2].trim()
                };
            } else if (parts.length === 2) {
                return {
                    icon: '✨',
                    title: parts[0].trim(),
                    advice: parts[1].trim()
                };
            }
            return {
                icon: '✨',
                title: 'Wisdom',
                advice: item.trim()
            };
        });

        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fefce8'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">🌟</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                            ${data.intro ? `<p class="text-gray-600 mt-3 max-w-2xl mx-auto">${data.intro}</p>` : ''}
                        </div>
                        <div class="space-y-6">
                            ${parsedAdvice.map((item, index) => `
                                <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-400">
                                    <div class="flex gap-4">
                                        <div class="text-4xl flex-shrink-0">${item.icon}</div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg text-gray-900 mb-2">${item.title}</h3>
                                            <p class="text-gray-700 leading-relaxed italic">"${item.advice}"</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fefce8'}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-3">🌟</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Words of Wisdom'}</h2>
                        ${data.intro ? `<p class="text-gray-600 mt-3 max-w-2xl mx-auto">${data.intro}</p>` : ''}
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${parsedAdvice.map((item, index) => `
                            <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                                <div class="text-4xl mb-4">${item.icon}</div>
                                <h3 class="font-bold text-xl text-gray-900 mb-3">${item.title}</h3>
                                <p class="text-gray-700 leading-relaxed italic">"${item.advice}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
