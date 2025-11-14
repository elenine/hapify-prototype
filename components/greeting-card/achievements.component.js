// Achievements Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievements = {
    name: '🌟 Achievements',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Amazing Accomplishments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
                <p class="text-xs text-gray-500 mb-2">Celebrate accomplishments from the past year</p>
                <div data-items-container="achievement" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'achievement')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Achievement
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Badge Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="badgeColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const achievements = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="achievement"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const achievementInput = item.querySelector('[data-field="achievement"]');
                const achievement = achievementInput?.value || '';
                if (achievement) achievements.push(achievement);
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Amazing Accomplishments'}</h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${achievements.length > 0 ? achievements.map((achievement) => `
                            <div class="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background: ${style.badgeColor || '#10b981'}; color: white">
                                    ✓
                                </div>
                                <p class="flex-1 text-lg pt-1">${achievement}</p>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 col-span-2">Add achievements in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
