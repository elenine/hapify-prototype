// Ceremony Schedule Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📅 Ceremony Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Ceremony Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea placeholder="Here's the schedule for the graduation ceremony..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items</label>
                <div class="text-xs text-gray-500 mb-2">Format: Time | Activity (one per line)</div>
                <textarea placeholder="9:00 AM | Guest Arrival & Registration&#10;10:00 AM | Procession & Opening Ceremony&#10;10:30 AM | Commencement Address&#10;11:30 AM | Degree Conferral&#10;12:30 PM | Closing Remarks&#10;1:00 PM | Reception & Photos" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="timeline">Timeline View</option>
                    <option value="cards">Card View</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'timeline';
        const items = data.items ? data.items.split('\n').filter(item => item.trim()) : [];

        const parsedItems = items.map(item => {
            const parts = item.split('|');
            if (parts.length >= 2) {
                return {
                    time: parts[0].trim(),
                    activity: parts[1].trim()
                };
            }
            return {
                time: '',
                activity: item.trim()
            };
        });

        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">📅</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="grid sm:grid-cols-2 gap-4">
                            ${parsedItems.map((item, index) => `
                                <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                                    ${item.time ? `<div class="text-indigo-600 font-bold text-sm mb-2">🕐 ${item.time}</div>` : ''}
                                    <div class="text-gray-800 font-medium">${item.activity}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📅</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                        ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                    </div>
                    <div class="relative">
                        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
                        <div class="space-y-6">
                            ${parsedItems.map((item, index) => `
                                <div class="relative flex gap-4 items-start">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold z-10">
                                        ${index + 1}
                                    </div>
                                    <div class="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                                        ${item.time ? `<div class="text-indigo-600 font-bold text-sm mb-1">🕐 ${item.time}</div>` : ''}
                                        <div class="text-gray-800 font-medium">${item.activity}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
