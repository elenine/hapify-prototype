// Schedule Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '⏰ Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Title</label>
                <input type="text" placeholder="Event Timeline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (one per line)</label>
                <textarea placeholder="3:00 PM - Ceremony&#10;4:00 PM - Reception&#10;6:00 PM - Dinner" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card List</option>
                    <option value="timeline">Timeline View</option>
                    <option value="compact">Compact List</option>
                    <option value="elegant">Elegant Boxes</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#f9fafb';
        const accentColor = style.accent || '#9333ea';
        const title = data.title || 'Event Schedule';
        const items = data.items ? data.items.split('\n').filter(i => i.trim()) : [];

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-12" style="color: ${accentColor}">${title}</h2>
                        <div class="max-w-2xl mx-auto relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${accentColor}30"></div>
                            ${items.map((item, idx) => `
                                <div class="relative flex gap-6 mb-6 pl-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 z-10" style="background: ${accentColor}; color: white;">
                                        ⏰
                                    </div>
                                    <div class="flex-1 pt-2 bg-white p-4 rounded-lg shadow-md">
                                        <div class="font-semibold text-sm">${item}</div>
                                    </div>
                                </div>
                            `).join('')}
                            ${items.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add schedule items</div>' : ''}
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8">${title}</h2>
                        <div class="max-w-lg mx-auto bg-white rounded-xl p-6 shadow-lg" style="border-top: 4px solid ${accentColor}">
                            <div class="space-y-2">
                                ${items.map((item, idx) => `
                                    <div class="flex items-center gap-3 py-2 ${idx < items.length - 1 ? 'border-b' : ''}">
                                        <span class="text-lg">⏰</span>
                                        <div class="flex-1 text-sm font-medium">${item}</div>
                                    </div>
                                `).join('')}
                                ${items.length === 0 ? '<div class="text-center text-gray-500 text-sm py-4">Add schedule items</div>' : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-3xl font-bold text-center mb-10" style="color: ${accentColor}">${title}</h2>
                        <div class="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${items.map(item => `
                                <div class="text-center p-6 bg-white rounded-xl shadow-md border-2" style="border-color: ${accentColor}30">
                                    <div class="text-3xl mb-3">⏰</div>
                                    <div class="text-sm font-semibold">${item}</div>
                                </div>
                            `).join('')}
                            ${items.length === 0 ? '<div class="col-span-2 text-center text-gray-500 text-sm">Add schedule items</div>' : ''}
                        </div>
                    </div>
                `;

            case 'cards':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8">${title}</h2>
                        <div class="max-w-md mx-auto space-y-3">
                            ${items.map(item => `
                                <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                                    <div class="text-xl">⏰</div>
                                    <div class="text-sm">${item}</div>
                                </div>
                            `).join('')}
                            ${items.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add schedule items</div>' : ''}
                        </div>
                    </div>
                `;
        }
    }
};
