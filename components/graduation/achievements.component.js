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
                    <option value="certificate">Certificate Style</option>
                    <option value="ribbon-cards">Ribbon Cards</option>
                    <option value="medal-showcase">Medal Showcase</option>
                    <option value="compact-badges">Compact Badges</option>
                    <option value="honor-roll">Honor Roll</option>
                    <option value="gradient-blocks">Gradient Blocks</option>
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

            case 'certificate':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-xl shadow-2xl p-8 border-8 border-double" style="border-color: ${accent}">
                                <div class="text-center mb-8">
                                    <div class="text-6xl mb-4">🏆</div>
                                    <div class="h-1 w-32 mx-auto mb-4" style="background: ${accent}"></div>
                                    <h2 class="text-3xl font-serif font-bold" style="color: ${accent}">${data.title || 'Achievements & Awards'}</h2>
                                    <div class="h-1 w-32 mx-auto mt-4" style="background: ${accent}"></div>
                                </div>
                                <div class="space-y-4">
                                    ${achievements.map((achievement, index) => `
                                        <div class="flex items-center gap-4 p-4 rounded-lg" style="background: ${accent}05">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accent}">
                                                ${index + 1}
                                            </div>
                                            <div class="flex-1 font-serif font-medium">${achievement}</div>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="mt-8 pt-6 border-t-2" style="border-color: ${accent}20">
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="h-px w-16" style="background: ${accent}"></div>
                                        <span class="text-2xl" style="color: ${accent}">❋</span>
                                        <div class="h-px w-16" style="background: ${accent}"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'ribbon-cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
                        <div class="max-w-3xl mx-auto grid gap-4">
                            ${achievements.map((achievement, index) => `
                                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div class="flex items-stretch">
                                        <div class="w-3 flex-shrink-0" style="background: ${accent}"></div>
                                        <div class="flex-1 p-5 flex items-center gap-4">
                                            <div class="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style="background: ${accent}10">
                                                🏆
                                            </div>
                                            <div class="flex-1 font-semibold text-lg">${achievement}</div>
                                            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: ${accent}">
                                                ✓
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'medal-showcase':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="text-center mb-10">
                            <div class="text-6xl mb-3">🏆</div>
                            <h2 class="text-3xl font-bold" style="color: ${accent}">${data.title || 'Achievements & Awards'}</h2>
                        </div>
                        <div class="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            ${achievements.map((achievement, index) => {
                                const medals = ['🥇', '🥈', '🥉', '🏅', '⭐', '🎖️'];
                                const medal = medals[index % medals.length];
                                return `
                                    <div class="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                                        <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accent}20, ${accent}05)">
                                            ${medal}
                                        </div>
                                        <div class="font-bold text-sm" style="color: ${accent}">${achievement}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;

            case 'compact-badges':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="flex flex-wrap gap-3 justify-center">
                                ${achievements.map(achievement => `
                                    <div class="inline-flex items-center gap-2 px-5 py-3 rounded-full shadow-md bg-white border-2" style="border-color: ${accent}20">
                                        <span class="text-xl">🏆</span>
                                        <span class="font-semibold text-sm">${achievement}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'honor-roll':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <div class="p-8 text-center text-white" style="background: linear-gradient(135deg, ${accent}, ${accent}cc)">
                                    <div class="text-5xl mb-3">🏆</div>
                                    <h2 class="text-3xl font-bold">${data.title || 'Achievements & Awards'}</h2>
                                </div>
                                <div class="divide-y">
                                    ${achievements.map((achievement, index) => `
                                        <div class="p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg" style="background: ${accent}">
                                                ${index + 1}
                                            </div>
                                            <div class="flex-1">
                                                <div class="font-semibold text-lg">${achievement}</div>
                                            </div>
                                            <div class="flex-shrink-0 text-2xl">
                                                ${['🥇', '🥈', '🥉', '🏅', '⭐', '🎖️'][index % 6]}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient-blocks':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
                        <div class="max-w-3xl mx-auto grid gap-4">
                            ${achievements.map((achievement, index) => {
                                const gradients = [
                                    'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                                    'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                                    'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                                    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                                    'linear-gradient(135deg, #f97316 0%, #dc2626 100%)'
                                ];
                                const gradient = gradients[index % gradients.length];
                                return `
                                    <div class="rounded-2xl p-6 shadow-lg text-white relative overflow-hidden" style="background: ${gradient}">
                                        <div class="absolute top-2 right-2 w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-2xl">
                                            🏆
                                        </div>
                                        <div class="pr-14">
                                            <div class="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">Achievement ${index + 1}</div>
                                            <div class="font-bold text-lg">${achievement}</div>
                                        </div>
                                        <div class="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-white opacity-10" style="transform: translate(25%, 25%)"></div>
                                    </div>
                                `;
                            }).join('')}
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
