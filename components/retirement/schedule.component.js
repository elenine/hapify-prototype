// Event Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📋 Event Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Event Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (format: Time | Activity - one per line)</label>
                <textarea placeholder="5:00 PM | Welcome & Reception&#10;6:00 PM | Dinner Service&#10;7:00 PM | Speeches & Tributes&#10;8:00 PM | Cake Cutting&#10;9:00 PM | Dancing & Entertainment" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="scheduleItems" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Time | Activity</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const scheduleItems = data.scheduleItems ? data.scheduleItems.split('\n').filter(item => item.trim()).map(item => {
            const parts = item.split('|').map(p => p.trim());
            return {
                time: parts[0] || '',
                activity: parts[1] || ''
            };
        }) : [];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                <div class="max-w-2xl mx-auto space-y-3">
                    ${scheduleItems.length > 0 ? scheduleItems.map(item => `
                        <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                            <div class="bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap">
                                ${item.time}
                            </div>
                            <div class="flex-1 font-medium text-gray-900">
                                ${item.activity}
                            </div>
                        </div>
                    `).join('') : '<p class="text-center text-gray-500">Add schedule items</p>'}
                </div>
            </div>
        `;
    }
};
