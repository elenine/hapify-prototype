// Timeline Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Relationship Timeline',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Story Timeline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events (format: Year | Event)</label>
                <textarea placeholder="2000 | First met at college&#10;2005 | Got engaged in Paris&#10;2010 | Wedding day&#10;2015 | First child born&#10;2020 | Bought our dream home" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="events" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">One event per line, use | to separate year and description</p>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
            <div class="max-w-md mx-auto">
                ${data.events ? data.events.split('\n').filter(e => e.trim()).map(event => {
                    const [year, description] = event.split('|').map(s => s.trim());
                    return `
                        <div class="flex gap-4 mb-6">
                            <div class="flex-shrink-0 w-20">
                                <div class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold text-center">${year || ''}</div>
                            </div>
                            <div class="flex-1">
                                <div class="bg-red-50 p-4 rounded-lg">
                                    <p class="text-gray-700">${description || event}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('') : '<p class="text-center text-gray-500">Add timeline events</p>'}
            </div>
        </div>
    `
};
