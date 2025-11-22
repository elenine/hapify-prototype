// Timeline/Milestones Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '⏱️ Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <textarea placeholder="From humble beginnings to where we are today..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()"></textarea>
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Milestones</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'milestones'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Milestone</button>
                </div>
                <div data-items-container="milestones"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="alternating">Alternating</option>
                    <option value="cards">Card List</option>
                    <option value="minimal">Minimal</option>
                    <option value="modern">Modern</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#0ea5e9" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'vertical';
        const bgColor = style.bg || '#f0f9ff';
        const accentColor = style.accent || '#0ea5e9';
        const secondaryColor = style.secondary || '#06b6d4';
        const title = data.title || 'Our Journey';
        const subtitle = data.subtitle || '';

        const milestones = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^milestone-year-(.+)$/);
            if (match) {
                const id = match[1];
                milestones.push({
                    year: data[`milestone-year-${id}`],
                    title: data[`milestone-title-${id}`],
                    desc: data[`milestone-desc-${id}`]
                });
            }
        });

        const headerHtml = `
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2">${title}</h2>
                ${subtitle ? `<p class="text-sm text-gray-600">${subtitle}</p>` : ''}
            </div>
        `;

        if (milestones.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    ${headerHtml}
                    <div class="text-center text-gray-500 text-sm">Add milestones to display</div>
                </div>
            `;
        }

        switch(layout) {
            case 'vertical':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${milestones.map((milestone, idx) => `
                                <div class="flex gap-4">
                                    <div class="flex flex-col items-center">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style="background: ${accentColor};">
                                            ${milestone.year || idx + 1}
                                        </div>
                                        ${idx < milestones.length - 1 ? `<div class="w-0.5 flex-1 my-2" style="background: ${accentColor}40;"></div>` : ''}
                                    </div>
                                    <div class="flex-1 pb-6">
                                        <div class="bg-white rounded-lg p-4 shadow-sm">
                                            <h3 class="text-sm font-bold mb-1">${milestone.title || 'Milestone'}</h3>
                                            ${milestone.desc ? `<p class="text-xs text-gray-600">${milestone.desc}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'alternating':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-6">
                            ${milestones.map((milestone, idx) => {
                                const isLeft = idx % 2 === 0;
                                return `
                                <div class="flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-4 items-start">
                                    <div class="flex-1">
                                        <div class="bg-white rounded-lg p-4 shadow-md">
                                            <div class="text-xs font-bold mb-1" style="color: ${accentColor};">${milestone.year || ''}</div>
                                            <h3 class="text-sm font-bold mb-1">${milestone.title || 'Milestone'}</h3>
                                            ${milestone.desc ? `<p class="text-xs text-gray-600">${milestone.desc}</p>` : ''}
                                        </div>
                                    </div>
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0" style="background: ${accentColor};">
                                        ${idx + 1}
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                `;

            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${milestones.map((milestone, idx) => `
                                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition border-l-4" style="border-color: ${accentColor};">
                                    <div class="flex items-start gap-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style="background: ${accentColor};">
                                            ${milestone.year || idx + 1}
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-1">${milestone.title || 'Milestone'}</h3>
                                            ${milestone.desc ? `<p class="text-xs text-gray-600">${milestone.desc}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${milestones.map(milestone => `
                                <div class="border-l-4 pl-4" style="border-color: ${accentColor};">
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">${milestone.year || ''}</div>
                                    <h3 class="text-sm font-bold mb-1">${milestone.title || 'Milestone'}</h3>
                                    ${milestone.desc ? `<p class="text-xs text-gray-600">${milestone.desc}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${milestones.map((milestone, idx) => {
                                const gradient = `linear-gradient(135deg, ${accentColor}, ${secondaryColor})`;
                                return `
                                <div class="rounded-xl overflow-hidden shadow-lg" style="background: ${gradient};">
                                    <div class="p-5 text-white">
                                        <div class="flex items-center gap-3 mb-2">
                                            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                                                ${idx + 1}
                                            </div>
                                            <div class="text-xs font-bold opacity-90">${milestone.year || ''}</div>
                                        </div>
                                        <h3 class="text-sm font-bold mb-2">${milestone.title || 'Milestone'}</h3>
                                        ${milestone.desc ? `<p class="text-xs opacity-90">${milestone.desc}</p>` : ''}
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${milestones.map(milestone => `
                                <div class="bg-white rounded-lg p-4 shadow-md">
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">${milestone.year || ''}</div>
                                    <h3 class="text-sm font-bold mb-1">${milestone.title || 'Milestone'}</h3>
                                    ${milestone.desc ? `<p class="text-xs text-gray-600">${milestone.desc}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
