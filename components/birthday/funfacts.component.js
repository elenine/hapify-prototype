// Fun Facts Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.funfacts = {
    name: '⭐ Fun Facts',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Fun Facts, Did You Know?, All About [Name]"
                       value="Fun Facts"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="intro"
                          rows="2"
                          placeholder="Get to know the birthday star better..."
                          onchange="updatePreview()"></textarea>
            </div>

            <!-- Fact 1 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Fact #1</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="fact1Label"
                       placeholder="e.g., Favorite Color, Dream Job, Superpower"
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="fact1Value"
                       placeholder="The answer..."
                       onchange="updatePreview()">
            </div>

            <!-- Fact 2 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Fact #2</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="fact2Label"
                       placeholder="Label..."
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="fact2Value"
                       placeholder="The answer..."
                       onchange="updatePreview()">
            </div>

            <!-- Fact 3 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Fact #3</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="fact3Label"
                       placeholder="Label..."
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="fact3Value"
                       placeholder="The answer..."
                       onchange="updatePreview()">
            </div>

            <!-- Fact 4 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Fact #4</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="fact4Label"
                       placeholder="Label..."
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="fact4Value"
                       placeholder="The answer..."
                       onchange="updatePreview()">
            </div>

            <!-- Fact 5 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Fact #5 (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="fact5Label"
                       placeholder="Label..."
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="fact5Value"
                       placeholder="The answer..."
                       onchange="updatePreview()">
            </div>

            <!-- Fact 6 -->
            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Fact #6 (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data mb-2"
                       data-field="fact6Label"
                       placeholder="Label..."
                       onchange="updatePreview()">
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="fact6Value"
                       placeholder="The answer..."
                       onchange="updatePreview()">
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
                       value="#fefce8"
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
                       value="#eab308"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="grid" selected>Grid</option>
                    <option value="badges">Badges</option>
                    <option value="list">List</option>
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
        const bgColor = style.bgColor || '#fefce8';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#eab308';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'grid';

        // Collect facts
        const facts = [];
        for (let i = 1; i <= 6; i++) {
            const label = data[`fact${i}Label`];
            const value = data[`fact${i}Value`];
            if (label || value) {
                facts.push({ label, value });
            }
        }

        if (facts.length === 0) {
            return '';
        }

        const emojis = ['🌟', '✨', '💫', '⭐', '🎯', '🎨', '🎭', '🎪', '🎡', '🎢'];

        let factsHtml = '';

        if (layoutStyle === 'grid') {
            factsHtml = `
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${facts.map((fact, index) => `
                        <div class="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
                            <div class="text-3xl mb-3">${emojis[index % emojis.length]}</div>
                            <h3 class="font-bold mb-2" style="color: ${accentColor};">
                                ${fact.label}
                            </h3>
                            <p class="text-gray-700">${fact.value}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'badges') {
            factsHtml = `
                <div class="flex flex-wrap gap-4 justify-center">
                    ${facts.map((fact, index) => `
                        <div class="bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition">
                            <span class="text-xl mr-2">${emojis[index % emojis.length]}</span>
                            <span class="font-semibold" style="color: ${accentColor};">${fact.label}:</span>
                            <span class="ml-2">${fact.value}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        } else { // list
            factsHtml = `
                <div class="bg-white rounded-lg p-6 space-y-4">
                    ${facts.map((fact, index) => `
                        <div class="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                                 style="background-color: ${accentColor}20;">
                                ${emojis[index % emojis.length]}
                            </div>
                            <div class="flex-1">
                                <h3 class="font-bold" style="color: ${accentColor};">
                                    ${fact.label}
                                </h3>
                                <p class="text-gray-700">${fact.value}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">⭐</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Fun Facts'}
                        </h2>
                        ${data.intro ? `
                            <p class="text-lg mt-3">${data.intro}</p>
                        ` : ''}
                    </div>

                    ${factsHtml}
                </div>
            </div>
        `;
    }
};
