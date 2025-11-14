// Timeline/Itinerary Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Event Timeline"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="timelineTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 1 Time</label>
                <input type="text" placeholder="e.g., 2:00 PM"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="time1" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 1 Description</label>
                <input type="text" placeholder="e.g., Guest Arrival & Welcome Drinks"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="event1" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 2 Time</label>
                <input type="text" placeholder="e.g., 3:00 PM"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="time2" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 2 Description</label>
                <input type="text" placeholder="e.g., Cake Cutting Ceremony"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="event2" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 3 Time</label>
                <input type="text" placeholder="e.g., 4:00 PM"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="time3" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 3 Description</label>
                <input type="text" placeholder="e.g., Games & Activities"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="event3" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 4 Time</label>
                <input type="text" placeholder="e.g., 5:00 PM"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="time4" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 4 Description</label>
                <input type="text" placeholder="e.g., Dinner & Dancing"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="event4" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 5 Time</label>
                <input type="text" placeholder="e.g., 7:00 PM"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="time5" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 5 Description</label>
                <input type="text" placeholder="e.g., Farewell"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="event5" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#e0f2fe"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="timelineStyle" onchange="updatePreview()">
                    <option value="vertical">Vertical Line</option>
                    <option value="cards">Cards</option>
                    <option value="simple">Simple List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#e0f2fe';
        const timelineStyle = style.timelineStyle || 'vertical';
        const title = data.timelineTitle || 'Event Timeline';

        const events = [];
        for (let i = 1; i <= 5; i++) {
            const time = data[`time${i}`];
            const event = data[`event${i}`];
            if (time && event) {
                events.push({ time, description: event });
            }
        }

        if (events.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-gray-500">No timeline events added yet</p>
                </div>
            `;
        }

        let eventsHtml = '';
        if (timelineStyle === 'vertical') {
            eventsHtml = `
                <div class="max-w-3xl mx-auto relative">
                    <div class="absolute left-1/4 top-0 bottom-0 w-0.5" style="background-color: ${globalStyles.primaryColor || '#059669'};"></div>
                    ${events.map((event, index) => `
                        <div class="flex items-center mb-8 relative">
                            <div class="w-1/4 pr-8 text-right">
                                <span class="text-2xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${event.time}</span>
                            </div>
                            <div class="w-4 h-4 rounded-full absolute left-1/4 -ml-2" style="background-color: ${globalStyles.primaryColor || '#059669'};"></div>
                            <div class="w-3/4 pl-12">
                                <div class="bg-white p-4 rounded-lg shadow-md">
                                    <p class="text-gray-800 font-semibold">${event.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (timelineStyle === 'cards') {
            eventsHtml = `
                <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    ${events.map(event => `
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">🕐 ${event.time}</div>
                            <p class="text-gray-800">${event.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            eventsHtml = `
                <div class="max-w-3xl mx-auto space-y-4">
                    ${events.map(event => `
                        <div class="flex items-center gap-6 bg-white p-4 rounded-lg shadow-md">
                            <div class="text-xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${event.time}</div>
                            <div class="flex-1 text-gray-800">${event.description}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${eventsHtml}
            </div>
        `;
    }
};
