// Timeline/History Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Timeline/History',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" value="Our Journey" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>
                <input type="text" placeholder="Key milestones in our company history" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events</label>
                <div data-items-container="timelineEvents" class="space-y-4">
                    <!-- Dynamic timeline events will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'timelineEvents')" class="mt-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                    + Add Event
                </button>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const events = Array.from(document.querySelectorAll(`[data-items-container="timelineEvents"] .dynamic-item`)).map(item => ({
            year: item.querySelector('[data-field="eventYear"]')?.value || '',
            title: item.querySelector('[data-field="eventTitle"]')?.value || '',
            description: item.querySelector('[data-field="eventDescription"]')?.value || ''
        }));

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}; color: ${style.text || '#1f2937'};">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold mb-2 text-center">${data.title || 'Our Journey'}</h2>
                    ${data.subtitle ? `<p class="text-center text-gray-600 mb-12">${data.subtitle}</p>` : ''}
                    <div class="relative border-l-4" style="border-color: ${style.accent || '#2563eb'};">
                        ${events.length > 0 ? events.map((event, index) => `
                            <div class="mb-10 ml-6 relative">
                                <div class="absolute -left-9 w-6 h-6 rounded-full" style="background: ${style.accent || '#2563eb'};"></div>
                                <div class="bg-gray-50 rounded-lg p-6">
                                    <div class="text-sm font-bold mb-1" style="color: ${style.accent || '#2563eb'};">${event.year}</div>
                                    <h3 class="text-xl font-semibold mb-2">${event.title}</h3>
                                    <p class="text-gray-600">${event.description}</p>
                                </div>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 ml-6">No timeline events added yet</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
