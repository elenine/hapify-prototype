// Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '⏰ Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Title</label>
                <input type="text" placeholder="Event Timeline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (one per line)</label>
                <textarea placeholder="3:00 PM - Ceremony&#10;4:00 PM - Reception&#10;6:00 PM - Dinner" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const items = data.items ? data.items.split('\n').filter(i => i.trim()) : [];
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                <div class="max-w-md mx-auto space-y-3">
                    ${items.map(item => `
                        <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                            <div class="text-xl">⏰</div>
                            <div class="text-sm">${item}</div>
                        </div>
                    `).join('')}
                    ${items.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add schedule items</div>' : ''}
                </div>
            </div>
        `;
    }
};
