// Recognition Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.recognition = {
    name: '🏅 Awards & Recognition',
    allowMultiple: false,
    info: (id) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Awards & Recognition" value="Awards & Recognition" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="sectionTitle" oninput="updatePreview()">
            </div>
            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Awards</label>
                    <button type="button" onclick="addDynamicItem('${id}', 'recognition')" class="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">
                        + Add Award
                    </button>
                </div>
                <div data-items-container="recognition" class="space-y-2">
                    <!-- Recognition items will be added here -->
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf4ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#d946ef" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const awards = Array.from(document.querySelectorAll(`[data-id="${data._sectionId}"] [data-items-container="recognition"] .dynamic-item`)).map(item => ({
            icon: item.querySelector('[data-field="icon"]')?.value || '🏆',
            title: item.querySelector('[data-field="title"]')?.value || '',
            description: item.querySelector('[data-field="description"]')?.value || ''
        }));

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf4ff'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-10" style="color: ${style.accent || '#d946ef'}">${data.sectionTitle || 'Awards & Recognition'}</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${awards.length > 0 ? awards.map(award => `
                            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                                <div class="flex items-start gap-4">
                                    <div class="text-4xl">${award.icon}</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2">${award.title}</h3>
                                        <p class="text-sm text-gray-600">${award.description}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('') : `
                            <div class="col-span-2 text-center text-gray-500 py-8">
                                <p>Add awards and recognitions to display here</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
};
