// Timeline Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Journey Timeline',
    allowMultiple: false,
    info: (id) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="The Journey" value="The Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="sectionTitle" oninput="updatePreview()">
            </div>
            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Timeline Events</label>
                    <button type="button" onclick="addDynamicItem('${id}', 'timeline')" class="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">
                        + Add Event
                    </button>
                </div>
                <div data-items-container="timeline" class="space-y-2">
                    <!-- Timeline items will be added here -->
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const events = Array.from(document.querySelectorAll(`[data-id="${data._sectionId}"] [data-items-container="timeline"] .dynamic-item`)).map(item => ({
            year: item.querySelector('[data-field="year"]')?.value || '',
            title: item.querySelector('[data-field="title"]')?.value || '',
            description: item.querySelector('[data-field="description"]')?.value || ''
        }));

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-10" style="color: ${style.accent || '#a855f7'}">${data.sectionTitle || 'The Journey'}</h2>
                    <div class="relative">
                        ${events.length > 0 ? `
                            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style="background: ${style.accent || '#a855f7'}; opacity: 0.3;"></div>
                            ${events.map((event, index) => `
                                <div class="relative mb-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}">
                                    <div class="w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}">
                                        <div class="bg-white rounded-lg p-4 shadow-md">
                                            <div class="text-sm font-bold mb-1" style="color: ${style.accent || '#a855f7'}">${event.year}</div>
                                            <h3 class="font-bold text-lg mb-2">${event.title}</h3>
                                            <p class="text-sm text-gray-600">${event.description}</p>
                                        </div>
                                    </div>
                                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full" style="background: ${style.accent || '#a855f7'}"></div>
                                </div>
                            `).join('')}
                        ` : `
                            <div class="text-center text-gray-500 py-8">
                                <p>Add timeline events to display here</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
};
