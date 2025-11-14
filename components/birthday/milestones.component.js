// Life Timeline/Milestones Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestones = {
    name: '🏆 Life Timeline',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="A Journey Through the Years" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Celebrating life's special moments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestones (one per line)</label>
                <textarea placeholder="2000 - Born in New York City&#10;2005 - Started kindergarten&#10;2010 - Won first art competition&#10;2015 - Graduated high school with honors&#10;2020 - Started dream job&#10;2024 - Celebrating another amazing year!" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="milestones" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Year - Description</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="timelineStyle" oninput="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="cards">Milestone Cards</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const timelineStyle = style.timelineStyle || 'vertical';
        const milestones = (data.milestones || '').split('\n').filter(m => m.trim());

        if (timelineStyle === 'cards') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#f0fdfa'}">
                    <div class="max-w-5xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">🏆</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'A Journey Through the Years'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            ${milestones.map((milestone, index) => {
                                const parts = milestone.split('-');
                                const year = parts[0]?.trim() || '';
                                const description = parts.slice(1).join('-').trim() || milestone;
                                return `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border-l-4 border-teal-500">
                                        <div class="text-3xl font-bold text-teal-600 mb-3">${year}</div>
                                        <div class="text-gray-700">${description}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (timelineStyle === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#f0fdfa'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-2xl p-12 shadow-xl border border-teal-200">
                            <div class="text-center mb-12">
                                <div class="text-6xl mb-4">🏆</div>
                                <h3 class="text-4xl font-serif font-bold text-gray-900 mb-3">${data.title || 'A Journey Through the Years'}</h3>
                                ${data.subtitle ? `<p class="text-lg text-gray-600 italic">${data.subtitle}</p>` : ''}
                            </div>
                            <div class="h-1 w-32 bg-gradient-to-r from-pink-500 to-teal-500 mx-auto mb-12"></div>
                            <div class="space-y-8">
                                ${milestones.map((milestone, index) => {
                                    const parts = milestone.split('-');
                                    const year = parts[0]?.trim() || '';
                                    const description = parts.slice(1).join('-').trim() || milestone;
                                    return `
                                        <div class="flex items-start gap-6 ${index !== milestones.length - 1 ? 'border-b border-gray-200 pb-8' : ''}">
                                            <div class="flex-shrink-0 w-24 text-right">
                                                <div class="text-2xl font-bold text-teal-600">${year}</div>
                                            </div>
                                            <div class="flex-1 pt-1">
                                                <div class="text-lg text-gray-700">${description}</div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#f0fdfa'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="text-6xl mb-4">🏆</div>
                        <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'A Journey Through the Years'}</h2>
                        ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                    </div>
                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-teal-500"></div>
                        <div class="space-y-8 pl-20">
                            ${milestones.map((milestone, index) => {
                                const parts = milestone.split('-');
                                const year = parts[0]?.trim() || '';
                                const description = parts.slice(1).join('-').trim() || milestone;
                                return `
                                    <div class="relative">
                                        <div class="absolute -left-[3.25rem] top-2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-teal-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                                            ${index + 1}
                                        </div>
                                        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                            <div class="text-2xl font-bold text-teal-600 mb-2">${year}</div>
                                            <div class="text-gray-700 text-lg">${description}</div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
