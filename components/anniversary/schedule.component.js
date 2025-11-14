// Schedule Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '🕐 Event Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Celebration Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (format: Time | Activity)</label>
                <textarea placeholder="5:00 PM | Cocktail Reception&#10;6:00 PM | Dinner & Toasts&#10;7:30 PM | Vow Renewal Ceremony&#10;8:00 PM | Dancing & Celebration" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">One item per line, use | to separate time and activity</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Timeline</option>
                    <option value="modern">Modern Cards</option>
                    <option value="minimal">Minimal List</option>
                    <option value="timeline">Vertical Timeline</option>
                    <option value="table">Table View</option>
                    <option value="compact">Compact</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#fef2f2';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'lg';

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

        const items = data.items ? data.items.split('\n').filter(i => i.trim()).map(item => {
            const [time, activity] = item.split('|').map(s => s.trim());
            return { time: time || '', activity: activity || item };
        }) : [];

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                        <div class="space-y-4">
                            ${items.map(item => `
                                <div class="flex gap-4 items-start p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${cardBg}">
                                    <div class="flex-shrink-0 px-3 py-1 ${borderRadiusClasses[borderRadius]} text-sm font-bold min-w-[80px] text-center text-white" style="background: ${accentColor}">
                                        ${item.time}
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-gray-800 font-medium">${item.activity}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                        <div class="relative">
                            <div class="absolute left-20 top-0 bottom-0 w-1" style="background: ${accentColor}33"></div>
                            <div class="space-y-6">
                                ${items.map((item, idx) => `
                                    <div class="flex gap-4 items-start relative">
                                        <div class="flex-shrink-0 w-16 h-16 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} flex items-center justify-center font-bold text-xs text-white z-10" style="background: ${accentColor}">
                                            ${item.time.split(' ')[0]}
                                        </div>
                                        <div class="flex-1 pt-2">
                                            <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                                <p class="font-bold mb-1" style="color: ${accentColor}">${item.time}</p>
                                                <p class="text-gray-800">${item.activity}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <div class="max-w-2xl mx-auto">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                    <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                        <div class="space-y-3">
                            ${items.map(item => `
                                <div class="flex items-center gap-4 pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                                    <span class="font-bold text-sm" style="color: ${accentColor}">${item.time}</span>
                                    <span class="text-gray-700">${item.activity}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
