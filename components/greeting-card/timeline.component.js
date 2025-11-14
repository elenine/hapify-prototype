// Timeline/Year in Review Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Your Year in Review" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events</label>
                <p class="text-xs text-gray-500 mb-2">Add memorable moments from the past year</p>
                <div data-items-container="timeline" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'timeline')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Timeline Event
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3f4f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Line Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="lineColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const events = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="timeline"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const dateInput = item.querySelector('[data-field="date"]');
                const eventInput = item.querySelector('[data-field="event"]');
                const date = dateInput?.value || '';
                const event = eventInput?.value || '';
                if (date && event) {
                    events.push({ date, event });
                }
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f3f4f6'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${data.title || 'Your Year in Review'}</h3>
                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${style.lineColor || globalStyles.primaryColor}"></div>
                        <div class="space-y-8">
                            ${events.length > 0 ? events.map((evt, index) => `
                                <div class="relative pl-20">
                                    <div class="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${style.lineColor || globalStyles.primaryColor}; color: white">
                                        ${index + 1}
                                    </div>
                                    <div class="bg-white rounded-lg p-4 shadow-md">
                                        <div class="text-sm font-semibold mb-1" style="color: ${style.lineColor || globalStyles.primaryColor}">${evt.date}</div>
                                        <p class="text-gray-700">${evt.event}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add timeline events in the editor</p>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
