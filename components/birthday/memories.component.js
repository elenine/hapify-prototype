// Memories Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
    name: '🌟 Memories & Milestones',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Amazing Milestones, Memory Lane, Journey So Far"
                       value="Amazing Milestones"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction Text</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="intro"
                          rows="2"
                          placeholder="Let's celebrate the wonderful moments and achievements..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 1</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="milestone1Title"
                       placeholder="Milestone title (e.g., First Day of School)"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="milestone1Desc"
                          rows="2"
                          placeholder="Brief description..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 2</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="milestone2Title"
                       placeholder="Milestone title"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="milestone2Desc"
                          rows="2"
                          placeholder="Brief description..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 3</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="milestone3Title"
                       placeholder="Milestone title"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="milestone3Desc"
                          rows="2"
                          placeholder="Brief description..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 4 (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="milestone4Title"
                       placeholder="Milestone title"
                       onchange="updatePreview()">
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="milestone4Desc"
                          rows="2"
                          placeholder="Brief description..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="closingMessage"
                          rows="2"
                          placeholder="e.g., Here's to many more amazing moments!"
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#faf5ff"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#a855f7"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="timeline" selected>Timeline</option>
                    <option value="cards">Cards</option>
                    <option value="list">Simple List</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#faf5ff';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#a855f7';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'timeline';

        // Collect milestones
        const milestones = [];
        for (let i = 1; i <= 4; i++) {
            const title = data[`milestone${i}Title`];
            const desc = data[`milestone${i}Desc`];
            if (title || desc) {
                milestones.push({ title, desc });
            }
        }

        if (milestones.length === 0) {
            return '';
        }

        const milestoneEmojis = ['🌱', '🌸', '🌺', '🌟', '💫', '✨', '🎯', '🏆'];

        let milestonesHtml = '';

        if (layoutStyle === 'timeline') {
            milestonesHtml = `
                <div class="space-y-6">
                    ${milestones.map((milestone, index) => `
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                                 style="background-color: ${accentColor}20;">
                                ${milestoneEmojis[index % milestoneEmojis.length]}
                            </div>
                            <div class="flex-1 bg-white bg-opacity-70 rounded-lg p-4 ${index < milestones.length - 1 ? 'border-l-4' : ''}"
                                 style="border-color: ${accentColor};">
                                <h3 class="font-bold text-lg mb-2" style="color: ${accentColor};">
                                    ${milestone.title}
                                </h3>
                                ${milestone.desc ? `<p>${milestone.desc}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'cards') {
            milestonesHtml = `
                <div class="grid sm:grid-cols-2 gap-6">
                    ${milestones.map((milestone, index) => `
                        <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                            <div class="text-4xl mb-3">${milestoneEmojis[index % milestoneEmojis.length]}</div>
                            <h3 class="font-bold text-lg mb-2" style="color: ${accentColor};">
                                ${milestone.title}
                            </h3>
                            ${milestone.desc ? `<p class="text-sm">${milestone.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        } else { // list
            milestonesHtml = `
                <div class="space-y-4">
                    ${milestones.map((milestone, index) => `
                        <div class="bg-white bg-opacity-70 rounded-lg p-5">
                            <div class="flex items-start gap-3">
                                <span class="text-3xl">${milestoneEmojis[index % milestoneEmojis.length]}</span>
                                <div class="flex-1">
                                    <h3 class="font-bold text-lg mb-1" style="color: ${accentColor};">
                                        ${milestone.title}
                                    </h3>
                                    ${milestone.desc ? `<p>${milestone.desc}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">🌟</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Amazing Milestones'}
                        </h2>
                        ${data.intro ? `
                            <p class="text-lg mt-3">${data.intro}</p>
                        ` : ''}
                    </div>

                    ${milestonesHtml}

                    ${data.closingMessage ? `
                        <div class="mt-8 text-center">
                            <p class="text-lg italic font-medium" style="color: ${accentColor};">
                                ✨ ${data.closingMessage}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
