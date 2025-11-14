// Memories/Tribute Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
    name: '💭 Memories & Tributes',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Cherished Memories"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memoriesTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Looking back at wonderful memories..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memoriesIntro" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 1 Title</label>
                <input type="text" placeholder="e.g., First Day of School"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memory1Title" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 1 Text</label>
                <textarea placeholder="Share the memory..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memory1Text" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 1 Photo (Optional)</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="memory1Photo" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 2 Title</label>
                <input type="text" placeholder="e.g., College Graduation"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memory2Title" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 2 Text</label>
                <textarea placeholder="Share the memory..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memory2Text" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 2 Photo (Optional)</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="memory2Photo" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 3 Title</label>
                <input type="text" placeholder="e.g., Wedding Day"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memory3Title" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 3 Text</label>
                <textarea placeholder="Share the memory..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="memory3Text" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory 3 Photo (Optional)</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="memory3Photo" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="layoutStyle" onchange="updatePreview()">
                    <option value="timeline">Timeline</option>
                    <option value="cards">Cards</option>
                    <option value="scrapbook">Scrapbook</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const layoutStyle = style.layoutStyle || 'timeline';
        const title = data.memoriesTitle || 'Memories & Tributes';

        const memories = [];
        for (let i = 1; i <= 3; i++) {
            const memoryTitle = data[`memory${i}Title`];
            const text = data[`memory${i}Text`];
            const photo = data[`memory${i}Photo`];
            if (memoryTitle && text) {
                memories.push({ title: memoryTitle, text, photo });
            }
        }

        if (memories.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    ${data.memoriesIntro ? `<p class="text-gray-700 mb-6">${data.memoriesIntro}</p>` : ''}
                    <p class="text-gray-500">No memories added yet</p>
                </div>
            `;
        }

        let memoriesHtml = '';
        if (layoutStyle === 'timeline') {
            memoriesHtml = `
                <div class="max-w-4xl mx-auto space-y-12">
                    ${memories.map((memory, index) => `
                        <div class="flex gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
                            ${memory.photo ? `
                                <div class="w-1/3">
                                    <img src="${memory.photo}" alt="${memory.title}" class="w-full h-48 object-cover rounded-xl shadow-lg">
                                </div>
                            ` : ''}
                            <div class="${memory.photo ? 'w-2/3' : 'w-full'} bg-white p-6 rounded-xl shadow-lg">
                                <h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">${memory.title}</h3>
                                <p class="text-gray-700 leading-relaxed">${memory.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'cards') {
            memoriesHtml = `
                <div class="grid md:grid-cols-${memories.length > 2 ? 3 : memories.length} gap-6 max-w-6xl mx-auto">
                    ${memories.map(memory => `
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                            ${memory.photo ? `
                                <img src="${memory.photo}" alt="${memory.title}" class="w-full h-48 object-cover">
                            ` : ''}
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">${memory.title}</h3>
                                <p class="text-gray-700">${memory.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            memoriesHtml = `
                <div class="max-w-5xl mx-auto space-y-8">
                    ${memories.map(memory => `
                        <div class="bg-white/80 p-8 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                            ${memory.photo ? `
                                <img src="${memory.photo}" alt="${memory.title}" class="w-full h-64 object-cover rounded-lg mb-4 shadow-md">
                            ` : ''}
                            <h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">${memory.title}</h3>
                            <p class="text-gray-700 leading-relaxed italic">"${memory.text}"</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.memoriesIntro ? `<p class="text-gray-700 mb-12 text-center max-w-2xl mx-auto">${data.memoriesIntro}</p>` : ''}
                ${memoriesHtml}
            </div>
        `;
    }
};
