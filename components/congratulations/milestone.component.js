// Milestone Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestone = {
    name: '🎯 Milestone Info',
    allowMultiple: false,
    info: (id) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Key Milestones" value="Key Milestones" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="sectionTitle" oninput="updatePreview()">
            </div>
            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Milestones</label>
                    <button type="button" onclick="addDynamicItem('${id}', 'milestone')" class="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">
                        + Add Milestone
                    </button>
                </div>
                <div data-items-container="milestone" class="space-y-2">
                    <!-- Milestone items will be added here -->
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const milestones = Array.from(document.querySelectorAll(`[data-id="${data._sectionId}"] [data-items-container="milestone"] .dynamic-item`)).map(item => ({
            number: item.querySelector('[data-field="number"]')?.value || '',
            label: item.querySelector('[data-field="label"]')?.value || '',
            description: item.querySelector('[data-field="description"]')?.value || ''
        }));

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-10" style="color: ${style.accent || '#a855f7'}">${data.sectionTitle || 'Key Milestones'}</h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        ${milestones.length > 0 ? milestones.map(milestone => `
                            <div class="text-center">
                                <div class="text-4xl font-bold mb-2" style="color: ${style.accent || '#a855f7'}">${milestone.number}</div>
                                <div class="font-semibold text-lg mb-2">${milestone.label}</div>
                                <div class="text-sm text-gray-600">${milestone.description}</div>
                            </div>
                        `).join('') : `
                            <div class="col-span-3 text-center text-gray-500 py-8">
                                <p>Add milestones to display here</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
};
