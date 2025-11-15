// Countdown Timer Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏱️ Countdown Timer',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date & Time</label>
                <input type="datetime-local" id="${sectionId}-datetime" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <p class="text-xs text-gray-500 mt-1">The countdown will show time remaining until this date</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input type="text" id="${sectionId}-heading" value="Event Starts In" placeholder="Event Starts In" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message After Event Starts</label>
                <input type="text" id="${sectionId}-expiredMessage" value="Event is Live!" placeholder="Event is Live!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Show Labels</label>
                <select id="${sectionId}-showLabels" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="yes">Yes (Days, Hours, etc.)</option>
                    <option value="no">No (Numbers only)</option>
                    <option value="abbr">Abbreviated (D, H, M, S)</option>
                </select>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="layoutStyle">
                    <option value="boxes">Boxes - Individual boxes for each unit</option>
                    <option value="circles">Circles - Circular counters</option>
                    <option value="minimal">Minimal - Clean text display</option>
                    <option value="flip">Flip Cards - Card flip animation style</option>
                    <option value="modern">Modern - Gradient background with large numbers</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="accentColor" value="#10b981" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="bgColor" value="#ffffff" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="textSize">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="shadow">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'boxes';
        const accentColor = style.accentColor || '#10b981';
        const bgColor = style.bgColor || '#ffffff';
        const textSize = style.textSize || 'medium';
        const shadow = style.shadow || 'md';
        const heading = data.heading || 'Event Starts In';
        const showLabels = data.showLabels || 'yes';
        const expiredMessage = data.expiredMessage || 'Event is Live!';
        const datetime = data.datetime || '';

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        const textSizeMap = {
            small: { number: 'text-2xl', label: 'text-xs', heading: 'text-lg' },
            medium: { number: 'text-3xl', label: 'text-sm', heading: 'text-xl' },
            large: { number: 'text-4xl', label: 'text-base', heading: 'text-2xl' },
            xlarge: { number: 'text-5xl', label: 'text-lg', heading: 'text-3xl' }
        };

        const sizes = textSizeMap[textSize];

        const getLabel = (full, abbr) => {
            switch (showLabels) {
                case 'yes': return full;
                case 'abbr': return abbr;
                case 'no': return '';
                default: return full;
            }
        };

        // Note: In real implementation, you'd use JavaScript to calculate countdown
        // This is a static preview showing example countdown
        const countdownUnits = [
            { value: '12', label: getLabel('Days', 'D') },
            { value: '05', label: getLabel('Hours', 'H') },
            { value: '23', label: getLabel('Minutes', 'M') },
            { value: '47', label: getLabel('Seconds', 'S') }
        ];

        let countdownHTML = '';

        switch (layoutStyle) {
            case 'boxes':
                countdownHTML = `
                    <div class="grid grid-cols-4 gap-3 max-w-md mx-auto">
                        ${countdownUnits.map(unit => `
                            <div class="text-center p-4 rounded-lg ${shadowMap[shadow]}" style="background: ${bgColor}; border: 2px solid ${accentColor};">
                                <div class="${sizes.number} font-bold" style="color: ${accentColor};">${unit.value}</div>
                                ${unit.label ? `<div class="${sizes.label} text-gray-600 mt-1">${unit.label}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'circles':
                countdownHTML = `
                    <div class="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                        ${countdownUnits.map(unit => `
                            <div class="text-center">
                                <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center ${shadowMap[shadow]}" style="background: ${accentColor};">
                                    <div class="${sizes.number} font-bold text-white">${unit.value}</div>
                                </div>
                                ${unit.label ? `<div class="${sizes.label} text-gray-600 mt-2">${unit.label}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'minimal':
                countdownHTML = `
                    <div class="flex justify-center items-center gap-6 max-w-2xl mx-auto">
                        ${countdownUnits.map((unit, index) => `
                            <div class="text-center">
                                <div class="${sizes.number} font-bold" style="color: ${accentColor};">${unit.value}</div>
                                ${unit.label ? `<div class="${sizes.label} text-gray-600">${unit.label}</div>` : ''}
                            </div>
                            ${index < countdownUnits.length - 1 ? `<div class="${sizes.number} font-bold text-gray-400">:</div>` : ''}
                        `).join('')}
                    </div>
                `;
                break;

            case 'flip':
                countdownHTML = `
                    <div class="grid grid-cols-4 gap-3 max-w-md mx-auto">
                        ${countdownUnits.map(unit => `
                            <div class="text-center">
                                <div class="relative p-4 rounded-lg ${shadowMap[shadow]}" style="background: linear-gradient(180deg, ${accentColor} 0%, ${accentColor}dd 100%);">
                                    <div class="${sizes.number} font-bold text-white">${unit.value}</div>
                                    <div class="absolute top-1/2 left-0 right-0 h-px bg-white opacity-20"></div>
                                </div>
                                ${unit.label ? `<div class="${sizes.label} text-gray-600 mt-2">${unit.label}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'modern':
                countdownHTML = `
                    <div class="p-8 rounded-2xl ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}30 100%);">
                        <div class="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                            ${countdownUnits.map(unit => `
                                <div class="text-center">
                                    <div class="${sizes.number} font-bold" style="color: ${accentColor};">${unit.value}</div>
                                    ${unit.label ? `<div class="${sizes.label} text-gray-700 mt-1 font-medium">${unit.label}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-4xl mx-auto text-center">
                    <h3 class="${sizes.heading} font-bold mb-8 text-gray-900">${heading}</h3>
                    ${countdownHTML}
                    ${datetime ? `<p class="text-xs text-gray-500 mt-6">Target: ${datetime}</p>` : ''}
                </div>
            </div>
        `;
    }
};
