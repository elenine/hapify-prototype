// Timeline Component for Engagement Announcement
// Display relationship milestones and important dates

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Relationship Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Key moments in our relationship" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Timeline Events</label>
                    <button type="button" onclick="addTimelineEvent('${sectionId}')" class="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition">
                        + Add Event
                    </button>
                </div>
                <div id="timeline-events-${sectionId}" class="space-y-3">
                    <!-- Timeline events will be added here -->
                </div>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="timelineStyle" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="cards">Event Cards</option>
                    <option value="minimal">Minimal List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const timelineStyle = style.timelineStyle || 'vertical';
        const events = [];

        // Collect timeline events from dynamic inputs
        let i = 0;
        while (data[`event${i}Date`] || data[`event${i}Title`]) {
            if (data[`event${i}Date`] && data[`event${i}Title`]) {
                events.push({
                    date: data[`event${i}Date`],
                    title: data[`event${i}Title`],
                    description: data[`event${i}Description`] || ''
                });
            }
            i++;
        }

        const renderVerticalTimeline = () => {
            return events.map((event, index) => `
                <div class="flex gap-4 relative ${index < events.length - 1 ? 'pb-8' : ''}">
                    ${index < events.length - 1 ? '<div class="absolute left-4 top-8 bottom-0 w-0.5 bg-rose-200"></div>' : ''}
                    <div class="flex-shrink-0 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                        ${index + 1}
                    </div>
                    <div class="flex-1 pt-1">
                        <div class="text-xs text-rose-600 font-semibold mb-1">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        <div class="font-bold text-gray-900 mb-1">${event.title}</div>
                        ${event.description ? `<p class="text-sm text-gray-600">${event.description}</p>` : ''}
                    </div>
                </div>
            `).join('');
        };

        const renderCardTimeline = () => {
            return events.map(event => `
                <div class="p-4 bg-rose-50 rounded-lg border border-rose-100">
                    <div class="text-xs text-rose-600 font-semibold mb-2">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                    <div class="font-bold text-gray-900 mb-1">${event.title}</div>
                    ${event.description ? `<p class="text-sm text-gray-600">${event.description}</p>` : ''}
                </div>
            `).join('');
        };

        const renderMinimalTimeline = () => {
            return events.map((event, index) => `
                <div class="flex justify-between items-start py-3 ${index < events.length - 1 ? 'border-b border-gray-200' : ''}">
                    <div class="flex-1">
                        <div class="font-medium text-gray-900">${event.title}</div>
                        ${event.description ? `<p class="text-sm text-gray-600 mt-1">${event.description}</p>` : ''}
                    </div>
                    <div class="text-sm text-rose-600 font-medium ml-4">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}</div>
                </div>
            `).join('');
        };

        let timelineHtml = '';
        if (events.length > 0) {
            switch(timelineStyle) {
                case 'cards':
                    timelineHtml = `<div class="space-y-4">${renderCardTimeline()}</div>`;
                    break;
                case 'minimal':
                    timelineHtml = renderMinimalTimeline();
                    break;
                case 'vertical':
                default:
                    timelineHtml = renderVerticalTimeline();
                    break;
            }
        } else {
            timelineHtml = `
                <div class="text-center py-8 text-gray-500">
                    <div class="text-4xl mb-2">📅</div>
                    <p>Add timeline events to display your journey together</p>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto">
                    <div class="text-center text-4xl mb-4">📅</div>
                    <h2 class="text-2xl font-bold mb-2 text-center">${data.title || 'Our Journey Together'}</h2>
                    ${data.subtitle ? `<p class="text-center text-gray-600 mb-8">${data.subtitle}</p>` : '<div class="mb-8"></div>'}
                    ${timelineHtml}
                </div>
            </div>
        `;
    }
};

// Helper function to add timeline event
window.addTimelineEvent = function(sectionId) {
    const container = document.getElementById(`timeline-events-${sectionId}`);
    const eventCount = container.children.length;

    const eventHtml = `
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50" data-event-index="${eventCount}">
            <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-700">Event ${eventCount + 1}</span>
                <button type="button" onclick="this.closest('[data-event-index]').remove(); updatePreview();" class="text-red-600 hover:text-red-800 text-sm">Remove</button>
            </div>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Date</label>
                    <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="event${eventCount}Date" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Event Title</label>
                    <input type="text" placeholder="First Date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="event${eventCount}Title" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Description (Optional)</label>
                    <textarea placeholder="Where we met..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="event${eventCount}Description" oninput="updatePreview()"></textarea>
                </div>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', eventHtml);
    updatePreview();
};
