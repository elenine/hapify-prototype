// Timeline Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['timeline'] = {
    name: '⏰ Relationship Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestones</label>
                <div data-items-container="timeline">
                    <!-- Dynamic milestone items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'timeline')" class="mt-3 w-full py-2 px-4 border-2 border-dashed border-rose-300 rounded-lg text-rose-600 hover:bg-rose-50 transition">
                    + Add Milestone
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const milestones = [];
        const container = document.querySelector(`[data-type="timeline"] [data-items-container="timeline"]`);
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const date = item.querySelector('[data-field="date"]')?.value || '';
                const title = item.querySelector('[data-field="title"]')?.value || '';
                const description = item.querySelector('[data-field="description"]')?.value || '';
                if (date || title) {
                    milestones.push({ date, title, description });
                }
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">${data.title || 'Our Journey Together'}</h2>
                <div class="max-w-3xl mx-auto">
                    ${milestones.length > 0 ? milestones.map((milestone, index) => `
                        <div class="relative pl-8 pb-8 ${index === milestones.length - 1 ? '' : 'border-l-2'}" style="border-color: ${style.accentColor || '#f43f5e'}">
                            <div class="absolute -left-3 top-0 w-6 h-6 rounded-full" style="background: ${style.accentColor || '#f43f5e'}"></div>
                            <div class="bg-rose-50 rounded-lg p-6">
                                <div class="text-sm font-semibold mb-2" style="color: ${style.accentColor || '#f43f5e'}">${milestone.date}</div>
                                <h3 class="text-xl font-bold mb-2 text-gray-900">${milestone.title}</h3>
                                <p class="text-gray-700">${milestone.description}</p>
                            </div>
                        </div>
                    `).join('') : `
                        <div class="text-center py-8 text-gray-500">
                            <p>Add milestones to show your journey together</p>
                        </div>
                    `}
                </div>
            </div>
        `;
    }
};
