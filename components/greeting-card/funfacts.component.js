// Fun Facts Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.funfacts = {
    name: '🌟 Fun Facts',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Fun Facts About You!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fun Facts</label>
                <p class="text-xs text-gray-500 mb-2">Add fun facts about the birthday person</p>
                <div data-items-container="funfact" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'funfact')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Fun Fact
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#dbeafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const funfacts = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="funfact"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const factInput = item.querySelector('[data-field="fact"]');
                const fact = factInput?.value || '';
                if (fact) funfacts.push(fact);
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#eff6ff'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Fun Facts About You!'}</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        ${funfacts.length > 0 ? funfacts.map((fact, index) => `
                            <div class="p-6 rounded-xl shadow-md" style="background: ${style.cardBg || '#dbeafe'}">
                                <div class="flex items-start gap-3">
                                    <span class="text-2xl">✨</span>
                                    <p class="flex-1">${fact}</p>
                                </div>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 col-span-2">Add fun facts in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
