// Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '⏰ Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Title</label>
                <input type="text" placeholder="Event Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (one per line)</label>
                <textarea placeholder="9:00 AM - Registration&#10;10:00 AM - Opening Keynote&#10;12:00 PM - Lunch Break" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="timeline">Timeline - Vertical flow</option>
                    <option value="cards">Cards - Individual boxes</option>
                    <option value="list">List - Simple rows</option>
                    <option value="modern">Modern - Stepped layout</option>
                    <option value="minimal">Minimal - Clean text</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time Display</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="timeDisplay" onchange="updatePreview()">
                    <option value="highlight">Highlighted</option>
                    <option value="badge">Badge</option>
                    <option value="inline">Inline</option>
                    <option value="none">Hidden</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'timeline';
        const bgColor = style.bg || '#f0fdf4';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accentColor || '#059669';
        const timeDisplay = style.timeDisplay || 'highlight';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        // Parse schedule items - expect format "TIME - Description"
        const items = data.items ? data.items.split('\n').filter(item => item.trim()).map(item => {
            const parts = item.split('-');
            const time = parts[0]?.trim() || '';
            const description = parts.slice(1).join('-').trim() || item;
            return { time, description, full: item };
        }) : [];

        const renderItems = () => {
            switch (layoutStyle) {
                case 'timeline':
                    return items.map((item, index) => `
                        <div class="flex gap-4 relative">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${shadowMap[shadow]}" style="background: ${accentColor};">
                                    <span class="text-xs">${item.time.substring(0, 5)}</span>
                                </div>
                                ${index < items.length - 1 ? `<div class="w-0.5 flex-1 mt-2" style="background: ${accentColor}; min-height: 40px;"></div>` : ''}
                            </div>
                            <div class="flex-1 pb-8">
                                ${timeDisplay === 'highlight' ? `<div class="text-sm font-bold mb-1" style="color: ${accentColor};">${item.time}</div>` : ''}
                                <div class="text-gray-700">${item.description}</div>
                            </div>
                        </div>
                    `).join('');

                case 'cards':
                    return items.map(item => `
                        <div class="p-4 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px; border-left: 4px solid ${accentColor};">
                            <div class="flex items-start gap-4">
                                <div class="text-2xl">⏰</div>
                                <div class="flex-1">
                                    ${timeDisplay === 'badge' ? `<span class="px-3 py-1 rounded-full text-xs font-bold text-white mb-2 inline-block" style="background: ${accentColor};">${item.time}</span>` : ''}
                                    ${timeDisplay === 'highlight' ? `<div class="text-sm font-bold mb-1" style="color: ${accentColor};">${item.time}</div>` : ''}
                                    <div class="text-sm text-gray-700">${item.description}</div>
                                </div>
                            </div>
                        </div>
                    `).join('');

                case 'list':
                    return items.map(item => `
                        <div class="flex items-start gap-4 py-3 border-b border-gray-200 last:border-0">
                            ${timeDisplay === 'badge' ? `<span class="px-3 py-1 rounded-lg text-xs font-bold text-white flex-shrink-0" style="background: ${accentColor};">${item.time}</span>` : ''}
                            ${timeDisplay === 'highlight' ? `<div class="text-sm font-bold flex-shrink-0" style="color: ${accentColor}; min-width: 80px;">${item.time}</div>` : ''}
                            <div class="flex-1 text-sm text-gray-700">${item.description}</div>
                        </div>
                    `).join('');

                case 'modern':
                    return items.map((item, index) => `
                        <div class="${index % 2 === 0 ? 'ml-0' : 'ml-8'} mb-4">
                            <div class="p-4 ${shadowMap[shadow]} relative" style="background: ${cardBg}; border-radius: 12px;">
                                ${timeDisplay !== 'none' ? `
                                    <div class="absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md" style="background: ${accentColor};">
                                        ${item.time}
                                    </div>
                                ` : ''}
                                <div class="text-sm text-gray-700 ${timeDisplay !== 'none' ? 'pt-2' : ''}">${item.description}</div>
                            </div>
                        </div>
                    `).join('');

                case 'minimal':
                    return items.map(item => `
                        <div class="py-3 text-center">
                            ${timeDisplay === 'highlight' ? `<div class="text-sm font-semibold mb-2" style="color: ${accentColor};">${item.time}</div>` : ''}
                            <div class="text-sm text-gray-700">${item.description}</div>
                        </div>
                    `).join('');

                default:
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                            <div class="text-xl">⏰</div>
                            <div class="text-sm">${item.full}</div>
                        </div>
                    `).join('');
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                <div class="max-w-md mx-auto ${layoutStyle !== 'timeline' && layoutStyle !== 'modern' ? 'space-y-3' : ''}">
                    ${items.length > 0 ? renderItems() : '<p class="text-center text-gray-500">Add schedule items (format: "9:00 AM - Opening")</p>'}
                </div>
            </div>
        `;
    }`
};
