// Awards/Superlatives Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.awards = {
    name: '🏆 Awards',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Awards & Superlatives" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Awards</label>
                <p class="text-xs text-gray-500 mb-2">Add fun awards and superlatives</p>
                <div data-items-container="award" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'award')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Award
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Award Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="awardColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const awards = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="award"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const awardInput = item.querySelector('[data-field="awardName"]');
                const descInput = item.querySelector('[data-field="description"]');
                const award = awardInput?.value || '';
                const desc = descInput?.value || '';
                if (award) awards.push({ award, desc });
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Birthday Awards & Superlatives'}</h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${awards.length > 0 ? awards.map((award, index) => `
                            <div class="text-center bg-white rounded-2xl p-6 shadow-lg">
                                <div class="text-5xl mb-3" style="color: ${style.awardColor || '#f59e0b'}">🏆</div>
                                <h4 class="font-bold text-lg mb-2">${award.award}</h4>
                                ${award.desc ? `<p class="text-gray-600">${award.desc}</p>` : ''}
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 col-span-2">Add awards in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
