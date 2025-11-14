// Schedule Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📅 Event Schedule',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Title</label>
                <input type="text" placeholder="Event Timeline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>

            <!-- Schedule Items -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items</label>
                <div data-items-container="schedule" id="${sectionId}-schedule-items">
                    <!-- Items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'schedule')" class="mt-3 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition text-sm font-medium">
                    + Add Schedule Item
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="scheduleStyle" onchange="updatePreview()">
                    <option value="timeline">Timeline Style</option>
                    <option value="list">List Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const section = document.querySelector(`[data-field="title"]`)?.closest('.section-item');
        const scheduleItems = [];

        if (section) {
            section.querySelectorAll('[data-items-container="schedule"] .dynamic-item').forEach(item => {
                const time = item.querySelector('[data-field="time"]')?.value || '';
                const activity = item.querySelector('[data-field="activity"]')?.value || '';
                if (time || activity) {
                    scheduleItems.push({ time, activity });
                }
            });
        }

        const isTimeline = (style.scheduleStyle || 'timeline') === 'timeline';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
                <div class="max-w-2xl mx-auto">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                    ${scheduleItems.length > 0 ? `
                        <div class="${isTimeline ? 'space-y-6' : 'space-y-3'}">
                            ${scheduleItems.map((item, index) => isTimeline ? `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-20 text-right">
                                        <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold" style="background: ${globalStyles.primaryColor || '#f59e0b'}; color: white;">${item.time}</span>
                                    </div>
                                    <div class="flex-shrink-0 w-3 h-3 rounded-full mt-2" style="background: ${globalStyles.primaryColor || '#f59e0b'}"></div>
                                    ${index < scheduleItems.length - 1 ? `<div class="absolute left-[7.25rem] w-0.5 h-12 mt-5" style="background: ${globalStyles.primaryColor || '#f59e0b'}; opacity: 0.3;"></div>` : ''}
                                    <div class="flex-1">
                                        <p class="text-gray-800 font-medium">${item.activity}</p>
                                    </div>
                                </div>
                            ` : `
                                <div class="flex items-center gap-4 bg-white bg-opacity-60 rounded-lg p-4">
                                    <span class="font-semibold text-sm px-3 py-1 rounded" style="background: ${globalStyles.primaryColor || '#f59e0b'}; color: white;">${item.time}</span>
                                    <span class="text-gray-800">${item.activity}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="text-center text-gray-500">
                            <div class="text-4xl mb-2">📅</div>
                            <p>Add schedule items to display timeline</p>
                        </div>
                    `}
                </div>
            </div>
        `;
    }
};
