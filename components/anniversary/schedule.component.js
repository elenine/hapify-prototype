// Schedule Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '🕐 Event Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Celebration Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (format: Time | Activity)</label>
                <textarea placeholder="5:00 PM | Cocktail Reception&#10;6:00 PM | Dinner & Toasts&#10;7:30 PM | Vow Renewal Ceremony&#10;8:00 PM | Dancing & Celebration" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">One item per line, use | to separate time and activity</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                <div class="space-y-4">
                    ${data.items ? data.items.split('\n').filter(i => i.trim()).map(item => {
                        const [time, activity] = item.split('|').map(s => s.trim());
                        return `
                            <div class="flex gap-4 items-start bg-red-50 p-4 rounded-lg">
                                <div class="flex-shrink-0 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold min-w-[80px] text-center">
                                    ${time || ''}
                                </div>
                                <div class="flex-1">
                                    <p class="text-gray-800 font-medium">${activity || item}</p>
                                </div>
                            </div>
                        `;
                    }).join('') : '<p class="text-center text-gray-500">Add schedule items</p>'}
                </div>
            </div>
        </div>
    `
};
