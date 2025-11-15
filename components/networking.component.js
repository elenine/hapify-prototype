// Networking Opportunities Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.networking = {
    name: '🤝 Networking',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Networking Opportunities" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" value="Networking Opportunities" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Connect with peers and industry leaders..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Event 1</h4>
                <input type="text" placeholder="Welcome Reception" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="event1name" oninput="updatePreview()">
                <input type="text" placeholder="Day 1, 5:00 PM - 7:00 PM" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="event1time" oninput="updatePreview()">
                <textarea placeholder="Details..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="event1desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Event 2</h4>
                <input type="text" placeholder="Networking Lunch" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="event2name" oninput="updatePreview()">
                <input type="text" placeholder="Day 2, 12:00 PM - 1:30 PM" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="event2time" oninput="updatePreview()">
                <textarea placeholder="Details..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="event2desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Event 3 (Optional)</h4>
                <input type="text" placeholder="Evening Gala" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="event3name" oninput="updatePreview()">
                <input type="text" placeholder="Day 2, 7:00 PM - 10:00 PM" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="event3time" oninput="updatePreview()">
                <textarea placeholder="Details..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="event3desc" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfdf5" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#ecfdf5';

        const events = [];
        if (data.event1name) {
            events.push({
                name: data.event1name,
                time: data.event1time,
                desc: data.event1desc
            });
        }
        if (data.event2name) {
            events.push({
                name: data.event2name,
                time: data.event2time,
                desc: data.event2desc
            });
        }
        if (data.event3name) {
            events.push({
                name: data.event3name,
                time: data.event3time,
                desc: data.event3desc
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🤝</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Networking Opportunities'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    <div class="space-y-4">
                        ${events.map(event => `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-4">
                                    <div class="text-3xl">🍷</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2 text-teal-700">${event.name}</h3>
                                        ${event.time ? `<p class="text-sm text-gray-600 mb-2 flex items-center gap-2"><span>🕐</span>${event.time}</p>` : ''}
                                        ${event.desc ? `<p class="text-gray-700 text-sm">${event.desc}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                        ${events.length === 0 ? `
                            <p class="text-center text-gray-500 py-8">Add networking events to display here</p>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
