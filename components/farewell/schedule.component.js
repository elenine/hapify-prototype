// Party Schedule/Activities Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📅 Party Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Party Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea placeholder="Here's what we have planned for the celebration..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items</label>
                <div class="text-xs text-gray-500 mb-2">Format: Time | Activity (one per line)</div>
                <textarea placeholder="3:00 PM | Guest Arrival & Welcome Drinks&#10;4:00 PM | Sharing Memories & Stories&#10;5:00 PM | Farewell Toast & Speeches&#10;6:00 PM | Dinner & Music&#10;8:00 PM | Final Goodbyes" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 font-mono text-sm section-data" data-field="items" oninput="updatePreview()"></textarea>
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
                            <h2 class="text-2xl font-bold">${data.title || 'Party Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="grid sm:grid-cols-2 gap-4">
                            ${parsedItems.map((item, index) => `
                                <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                                    ${item.time ? `<div class="text-violet-600 font-bold text-sm mb-2">🕐 ${item.time}</div>` : ''}
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
                        <h2 class="text-2xl font-bold">${data.title || 'Party Schedule'}</h2>
                        ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                    </div>
                    <div class="relative">
                        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-violet-200"></div>
                        <div class="space-y-6">
                            ${parsedItems.map((item, index) => `
                                <div class="relative flex gap-4 items-start">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold z-10">
                                        ${index + 1}
                                    </div>
                                    <div class="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                                        ${item.time ? `<div class="text-violet-600 font-bold text-sm mb-1">🕐 ${item.time}</div>` : ''}
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
