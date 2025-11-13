// Statistics Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.stats = {
                name: '📊 Statistics',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Achievements" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Statistics</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'stats'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Stat</button>
                            </div>
                            <div data-items-container="stats"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#1e40af" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const stats = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^stat-value-(.+)$/);
                        if (match) {
                            const id = match[1];
                            stats.push({
                                value: data[`stat-value-${id}`],
                                label: data[`stat-label-${id}`]
                            });
                        }
                    });

                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#1e40af'}; color: ${style.textColor || '#ffffff'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Achievements'}</h2>
                            <div class="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                                ${stats.map(stat => `
                                    <div class="text-center">
                                        <div class="text-3xl font-bold mb-2">${stat.value || '0'}</div>
                                        <div class="text-sm opacity-90">${stat.label || 'Stat'}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            };
