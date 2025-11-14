// Achievements Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievements = {
    name: '🏆 Achievements',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Awards & Achievements" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements (one per line)</label>
                <textarea placeholder="Dean's List&#10;Honor Society Member&#10;Research Excellence Award&#10;Outstanding Student Award" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="achievements" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="list">List View</option>
                    <option value="grid">Grid Badges</option>
                    <option value="timeline">Timeline</option>
                    <option value="spotlight">Spotlight</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'list';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';
        const achievements = data.achievements ? data.achievements.split('\n').filter(a => a.trim()) : [];

        if (achievements.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <p class="text-center text-gray-500">Add achievements</p>
                </div>
            `;
        }

        switch(layout) {
            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
                        <div class="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
                            ${achievements.map((achievement, index) => `
                                <div class="p-5 bg-white rounded-xl shadow-md text-center">
                                    <div class="text-4xl mb-3">🏆</div>
                                    <div class="font-semibold" style="color: ${accent}">${achievement}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
                        <div class="max-w-2xl mx-auto relative">
                            <div class="absolute left-6 top-0 bottom-0 w-0.5" style="background: ${accent}33"></div>
                            <div class="space-y-4">
                                ${achievements.map((achievement, index) => `
                                    <div class="relative flex gap-4 items-start">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md" style="background: ${accent}; color: white">
                                            🏆
                                        </div>
                                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                                            <div class="font-medium">${achievement}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'spotlight':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8 p-8 rounded-2xl" style="background: ${accent}; color: white">
                                <div class="text-6xl mb-4">🏆</div>
                                <h2 class="text-3xl font-bold">${data.title || 'Achievements & Awards'}</h2>
                            </div>
                            <div class="grid gap-3">
                                ${achievements.map((achievement, index) => `
                                    <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl" style="background: ${accent}15">
                                            🏆
                                        </div>
                                        <div class="flex-1 font-medium">${achievement}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'list':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
                        <div class="max-w-md mx-auto space-y-3">
                            ${achievements.map(achievement => `
                                <div class="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                                    <div class="mt-1" style="color: ${accent}">🏆</div>
                                    <div>${achievement}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }`
};
