// Academic Journey Timeline Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.journey = {
    name: '📚 Academic Journey',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="My Academic Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea placeholder="A timeline of my educational milestones..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestones</label>
                <div class="text-xs text-gray-500 mb-2">Format: Year | Title | Description (one per line)</div>
                <textarea placeholder="2020 | Started College | Began my journey at State University majoring in Computer Science&#10;2021 | Dean's List | Achieved Dean's List honors for academic excellence&#10;2022 | Study Abroad | Spent a semester studying in Tokyo, Japan&#10;2023 | Research Published | Published research paper on AI and machine learning&#10;2024 | Graduation | Graduated with honors, Bachelor of Science" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm section-data" data-field="milestones" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="horizontal">Horizontal Steps</option>
                    <option value="cards">Card Grid</option>
                    <option value="minimal">Minimal List</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || style.timelineStyle || 'vertical';
        const bg = style.bg || '#f0f9ff';
        const accent = style.accent || '#6366f1';
        const milestones = data.milestones ? data.milestones.split('\n').filter(m => m.trim()) : [];

        const parsedMilestones = milestones.map(milestone => {
            const parts = milestone.split('|');
            return {
                year: parts[0]?.trim() || '',
                title: parts[1]?.trim() || '',
                description: parts[2]?.trim() || ''
            };
        });

        switch(layout) {
            case 'horizontal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-6xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">📚</div>
                                <h2 class="text-2xl font-bold">${data.title || 'My Academic Journey'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="overflow-x-auto pb-4">
                                <div class="flex gap-4 min-w-max">
                                    ${parsedMilestones.map((milestone, index) => `
                                        <div class="flex-shrink-0 w-64">
                                            <div class="bg-white rounded-xl p-5 shadow-md border-t-4 h-full" style="border-color: ${accent}">
                                                <div class="text-center mb-3">
                                                    <div class="inline-block w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg" style="background: ${accent}">
                                                        ${index + 1}
                                                    </div>
                                                </div>
                                                <div class="font-bold text-lg mb-2" style="color: ${accent}">${milestone.year}</div>
                                                <h3 class="font-bold text-gray-900 mb-2">${milestone.title}</h3>
                                                <p class="text-gray-600 text-sm">${milestone.description}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-5xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">📚</div>
                                <h2 class="text-2xl font-bold">${data.title || 'My Academic Journey'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${parsedMilestones.map((milestone, index) => `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accent}">
                                                ${index + 1}
                                            </div>
                                            <div class="font-bold text-lg" style="color: ${accent}">${milestone.year}</div>
                                        </div>
                                        <h3 class="font-bold text-gray-900 mb-3">${milestone.title}</h3>
                                        <p class="text-gray-600 text-sm leading-relaxed">${milestone.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">📚</div>
                                <h2 class="text-2xl font-bold">${data.title || 'My Academic Journey'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="space-y-6">
                                ${parsedMilestones.map((milestone, index) => `
                                    <div class="border-l-4 pl-6 py-4 bg-white rounded-r-xl" style="border-color: ${accent}">
                                        <div class="flex items-baseline gap-3 mb-2">
                                            <span class="text-2xl font-bold" style="color: ${accent}">${milestone.year}</span>
                                            <h3 class="font-bold text-gray-900 flex-1">${milestone.title}</h3>
                                        </div>
                                        <p class="text-gray-600 text-sm leading-relaxed">${milestone.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'vertical':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-5xl mb-3">📚</div>
                                <h2 class="text-2xl font-bold">${data.title || 'My Academic Journey'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="relative">
                                <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accent}40"></div>
                                <div class="space-y-8">
                                    ${parsedMilestones.map((milestone, index) => `
                                        <div class="relative flex gap-6 items-start">
                                            <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%)">
                                                ${milestone.year}
                                            </div>
                                            <div class="flex-1 bg-white rounded-xl p-6 shadow-md">
                                                <h3 class="font-bold text-lg mb-2" style="color: ${accent}">${milestone.title}</h3>
                                                <p class="text-gray-600 leading-relaxed">${milestone.description}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
