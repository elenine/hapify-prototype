// Event Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📋 Event Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Event Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (format: Time | Activity - one per line)</label>
                <textarea placeholder="5:00 PM | Welcome & Reception&#10;6:00 PM | Dinner Service&#10;7:00 PM | Speeches & Tributes&#10;8:00 PM | Cake Cutting&#10;9:00 PM | Dancing & Entertainment" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="scheduleItems" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Time | Activity</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="timeline">Timeline View</option>
                    <option value="cards">Card Style</option>
                    <option value="list">Simple List</option>
                    <option value="agenda">Agenda Style</option>
                    <option value="minimal">Minimal Clean</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'timeline';
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        const scheduleItems = data.scheduleItems ? data.scheduleItems.split('\n').filter(item => item.trim()).map(item => {
            const parts = item.split('|').map(p => p.trim());
            return {
                time: parts[0] || '',
                activity: parts[1] || ''
            };
        }) : [];

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                        <div class="max-w-md mx-auto relative">
                            <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}40;"></div>
                            ${scheduleItems.length > 0 ? scheduleItems.map((item, index) => `
                                <div class="relative pl-20 pb-6">
                                    <div class="absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow" style="background: ${accentColor};"></div>
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">${item.time}</div>
                                        <div class="font-medium">${item.activity}</div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add schedule items</p>'}
                        </div>
                    </div>
                `;

            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                        <div class="max-w-md mx-auto space-y-3">
                            ${scheduleItems.length > 0 ? scheduleItems.map(item => `
                                <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
                                    <div class="text-white px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap" style="background: ${accentColor};">
                                        ${item.time}
                                    </div>
                                    <div class="flex-1 font-medium">
                                        ${item.activity}
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add schedule items</p>'}
                        </div>
                    </div>
                `;

            case 'list':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">${data.title || 'Event Schedule'}</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-4 text-left">
                                ${scheduleItems.length > 0 ? scheduleItems.map(item => `
                                    <div class="flex items-center gap-4 pb-4 border-b" style="border-color: ${accentColor}20;">
                                        <div class="font-bold text-sm" style="color: ${accentColor}; min-width: 80px;">${item.time}</div>
                                        <div class="flex-1">${item.activity}</div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add schedule items</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'agenda':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                            ${scheduleItems.length > 0 ? scheduleItems.map((item, index) => `
                                <div class="flex items-center gap-4 p-4 ${index < scheduleItems.length - 1 ? 'border-b' : ''}" style="${index < scheduleItems.length - 1 ? `border-color: ${accentColor}20;` : ''}">
                                    <div class="rounded-lg px-4 py-2 font-bold text-sm text-white" style="background: ${accentColor};">
                                        ${item.time}
                                    </div>
                                    <div class="flex-1 font-medium">
                                        ${item.activity}
                                    </div>
                                </div>
                            `).join('') : '<div class="p-8 text-center opacity-50">Add schedule items</div>'}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-light mb-2">${data.title || 'Event Schedule'}</h2>
                            <div class="w-16 h-0.5 mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-3 text-left">
                                ${scheduleItems.length > 0 ? scheduleItems.map(item => `
                                    <div class="flex gap-4">
                                        <div class="font-bold text-sm" style="color: ${accentColor}; min-width: 70px;">${item.time}</div>
                                        <div class="flex-1 opacity-80">${item.activity}</div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add schedule items</p>'}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                        <div class="max-w-md mx-auto space-y-3">
                            ${scheduleItems.length > 0 ? scheduleItems.map(item => `
                                <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
                                    <div class="text-white px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap" style="background: ${accentColor};">
                                        ${item.time}
                                    </div>
                                    <div class="flex-1 font-medium">
                                        ${item.activity}
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add schedule items</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
