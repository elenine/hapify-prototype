// Bucket List Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.bucketlist = {
    name: '📝 Bucket List',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Goals for the Year Ahead" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bucket List Items</label>
                <p class="text-xs text-gray-500 mb-2">Add wishes and goals for the coming year</p>
                <div data-items-container="bucketlist" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'bucketlist')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Goal
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Checkbox Color</label>
                <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="checkColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const items = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="bucketlist"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const goalInput = item.querySelector('[data-field="goal"]');
                const goal = goalInput?.value || '';
                if (goal) items.push(goal);
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0f9ff'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-2xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Goals for the Year Ahead'}</h3>
                    <div class="space-y-3">
                        ${items.length > 0 ? items.map(item => `
                            <div class="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
                                <div class="flex-shrink-0 w-6 h-6 border-2 rounded" style="border-color: ${style.checkColor || '#3b82f6'}"></div>
                                <p class="text-lg flex-1">${item}</p>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
