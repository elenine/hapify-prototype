// Tribute/Achievements Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.tribute = {
    name: '🏆 Tribute & Achievements',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Celebrating Their Achievements" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction Message</label>
                <textarea placeholder="Let's take a moment to celebrate the incredible impact they've made..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
                <div class="text-xs text-gray-500 mb-2">Format: Icon | Achievement Title | Description (one per line)</div>
                <textarea placeholder="🎯 | Project Excellence | Led 15+ successful projects to completion&#10;💡 | Innovation Award | Introduced game-changing solutions&#10;👥 | Team Mentor | Guided and inspired countless colleagues&#10;📈 | Record Growth | Achieved 200% increase in productivity" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 font-mono text-sm section-data" data-field="achievements" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">Use | to separate icon, title, and description</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Grid</option>
                    <option value="list">List View</option>
                    <option value="timeline">Timeline - Vertical</option>
                    <option value="badges">Badges - Achievement Style</option>
                    <option value="featured">Featured - Large Cards</option>
                    <option value="compact">Compact - Dense View</option>
                    <option value="ribbon">Ribbon - Award Style</option>
                    <option value="modern">Modern - Split Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const achievements = data.achievements ? data.achievements.split('\n').filter(item => item.trim()) : [];

        const parsedAchievements = achievements.map(item => {
            const parts = item.split('|');
            if (parts.length >= 3) {
                return {
                    icon: parts[0].trim(),
                    title: parts[1].trim(),
                    description: parts[2].trim()
                };
            } else if (parts.length === 2) {
                return {
                    icon: '⭐',
                    title: parts[0].trim(),
                    description: parts[1].trim()
                };
            }
            return {
                icon: '⭐',
                title: item.trim(),
                description: ''
            };
        });

        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">🏆</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Celebrating Their Achievements'}</h2>
                            ${data.intro ? `<p class="text-gray-600 mt-3 max-w-2xl mx-auto">${data.intro}</p>` : ''}
                        </div>
                        <div class="space-y-4">
                            ${parsedAchievements.map((achievement, index) => `
                                <div class="bg-white rounded-lg p-6 shadow-sm border-l-4 border-violet-500 flex gap-4">
                                    <div class="text-3xl flex-shrink-0">${achievement.icon}</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg text-gray-900 mb-1">${achievement.title}</h3>
                                        ${achievement.description ? `<p class="text-gray-600 text-sm">${achievement.description}</p>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🏆</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Celebrating Their Achievements'}</h2>
                        ${data.intro ? `<p class="text-gray-600 mt-3 max-w-2xl mx-auto">${data.intro}</p>` : ''}
                    </div>
                    <div class="grid sm:grid-cols-2 gap-5">
                        ${parsedAchievements.map((achievement, index) => `
                            <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition text-center">
                                <div class="text-4xl mb-3">${achievement.icon}</div>
                                <h3 class="font-bold text-lg text-gray-900 mb-2">${achievement.title}</h3>
                                ${achievement.description ? `<p class="text-gray-600 text-sm">${achievement.description}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
