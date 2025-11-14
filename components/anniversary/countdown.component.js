// Countdown Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown Timer',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Counting Down" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Target Date & Time</label>
                <input type="datetime-local" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="targetdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <input type="text" placeholder="Until we celebrate together!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Grid</option>
                    <option value="modern">Modern Cards</option>
                    <option value="minimal">Minimal</option>
                    <option value="circles">Circular</option>
                    <option value="boxes">Box Style</option>
                    <option value="vertical">Vertical Stack</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
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
                    <option value="full">Full (Circle)</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fef2f2';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#ffffff';
        const shadow = style.shadow || 'md';
        const borderRadius = style.borderRadius || 'lg';

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };

        let countdownHTML = '<p class="text-gray-500">Set a target date</p>';

        if (data.targetdate) {
            const target = new Date(data.targetdate);
            const now = new Date();
            const diff = target - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                if (layout === 'classic') {
                    countdownHTML = `
                        <div class="grid grid-cols-3 gap-4">
                            ${[{val: days, label: 'Days'}, {val: hours, label: 'Hours'}, {val: minutes, label: 'Minutes'}].map(item => `
                                <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                    <div class="text-3xl font-bold" style="color: ${accentColor}">${item.val}</div>
                                    <div class="text-sm text-gray-600">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else if (layout === 'circles') {
                    countdownHTML = `
                        <div class="flex justify-center gap-6">
                            ${[{val: days, label: 'Days'}, {val: hours, label: 'Hours'}, {val: minutes, label: 'Minutes'}].map(item => `
                                <div class="flex flex-col items-center">
                                    <div class="w-24 h-24 rounded-full ${shadowClasses[shadow]} flex flex-col items-center justify-center"
                                         style="background: linear-gradient(135deg, ${accentColor}, #f87171)">
                                        <div class="text-2xl font-bold text-white">${item.val}</div>
                                    </div>
                                    <div class="text-xs text-gray-600 mt-2">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else {
                    countdownHTML = `
                        <div class="grid grid-cols-3 gap-4">
                            ${[{val: days, label: 'Days'}, {val: hours, label: 'Hours'}, {val: minutes, label: 'Minutes'}].map(item => `
                                <div class="text-center p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                    <div class="text-2xl font-bold" style="color: ${accentColor}">${item.val}</div>
                                    <div class="text-xs text-gray-500 mt-1">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
            } else {
                countdownHTML = '<p class="text-2xl font-bold" style="color: ' + accentColor + '">🎉 It\'s Time to Celebrate! 🎉</p>';
            }
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-5xl mb-4">⏰</div>
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Countdown'}</h2>
                    ${countdownHTML}
                    ${data.message ? `<p class="text-gray-700 mt-6">${data.message}</p>` : ''}
                </div>
            </div>
        `;
    }
};
