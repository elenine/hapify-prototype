// Career Timeline Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Career Timeline',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Career Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events (format: Year | Title | Description - one per line)</label>
                <textarea placeholder="1995 | Joined the Company | Started as Junior Developer&#10;2000 | Promotion | Became Team Lead&#10;2010 | Major Achievement | Led critical project&#10;2025 | Retirement | Celebrated career" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="events" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format each event as: Year | Title | Description</p>
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="timelineStyle" onchange="updatePreview()">
                    <option value="vertical">Vertical</option>
                    <option value="modern">Modern Cards</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const timelineStyle = style.timelineStyle || 'vertical';
        const events = data.events ? data.events.split('\n').filter(e => e.trim()).map(event => {
            const parts = event.split('|').map(p => p.trim());
            return {
                year: parts[0] || '',
                title: parts[1] || '',
                description: parts[2] || ''
            };
        }) : [];

        if (timelineStyle === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                    <div class="max-w-2xl mx-auto grid gap-4">
                        ${events.length > 0 ? events.map(event => `
                            <div class="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-500">
                                <div class="flex items-center gap-4 mb-2">
                                    <div class="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">${event.year}</div>
                                    <h3 class="text-lg font-bold text-gray-900">${event.title}</h3>
                                </div>
                                <p class="text-gray-700 ml-16">${event.description}</p>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">Add timeline events</p>'}
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                <div class="max-w-2xl mx-auto relative">
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-300"></div>
                    ${events.length > 0 ? events.map((event, index) => `
                        <div class="relative pl-20 pb-8">
                            <div class="absolute left-4 w-8 h-8 bg-cyan-500 rounded-full border-4 border-white shadow"></div>
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <div class="text-cyan-600 font-bold text-sm mb-1">${event.year}</div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2">${event.title}</h3>
                                <p class="text-gray-700">${event.description}</p>
                            </div>
                        </div>
                    `).join('') : '<p class="text-center text-gray-500">Add timeline events</p>'}
                </div>
            </div>
        `;
    }
};
