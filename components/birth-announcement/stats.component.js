// Baby Stats Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.stats = {
    name: '📊 Baby Stats',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birth Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birth Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <input type="text" placeholder="7 lbs 8 oz" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="weight" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Length</label>
                <input type="text" placeholder="20 inches" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="length" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Grid</option>
                    <option value="list">Vertical List</option>
                    <option value="timeline">Timeline Style</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="badges">Badge Style</option>
                    <option value="icons">Icon Cards</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="filled">Filled Background</option>
                    <option value="outlined">Outlined Border</option>
                    <option value="shadow">Shadow Effect</option>
                    <option value="gradient">Gradient</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="cardShape" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="square">Square</option>
                    <option value="pill">Pill Shape</option>
                    <option value="circle">Circular</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'cards';
        const cardStyle = style.cardStyle || 'filled';
        const cardShape = style.cardShape || 'rounded';
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f0fdfa';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        // Card shape classes
        const shapeClasses = {
            rounded: 'rounded-lg',
            square: 'rounded-none',
            pill: 'rounded-full',
            circle: 'rounded-full aspect-square'
        };

        // Card style classes
        const getCardClass = () => {
            const shape = shapeClasses[cardShape];
            if (cardStyle === 'filled') {
                return `p-4 ${shape}`;
            } else if (cardStyle === 'outlined') {
                return `p-4 ${shape} border-2`;
            } else if (cardStyle === 'shadow') {
                return `p-4 ${shape} shadow-lg`;
            } else if (cardStyle === 'gradient') {
                return `p-4 ${shape}`;
            }
            return `p-4 ${shape}`;
        };

        const getCardStyle = (isGradient = false) => {
            if (cardStyle === 'filled') {
                return `background: ${cardBg}; color: ${textColor};`;
            } else if (cardStyle === 'outlined') {
                return `background: transparent; border-color: ${accentColor}; color: ${textColor};`;
            } else if (cardStyle === 'shadow') {
                return `background: white; color: ${textColor};`;
            } else if (cardStyle === 'gradient') {
                return `background: linear-gradient(135deg, ${accentColor}, ${cardBg}); color: white;`;
            }
            return `background: ${cardBg}; color: ${textColor};`;
        };

        const formattedDate = data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-6 text-center" style="color: ${textColor};">Baby's First Stats</h2>
                        <div class="space-y-3">
                            ${data.date ? `
                            <div class="${getCardClass()}" style="${getCardStyle()}">
                                <div class="text-xs opacity-70 mb-1">Born</div>
                                <div class="font-bold">${formattedDate}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="${getCardClass()}" style="${getCardStyle()}">
                                <div class="text-xs opacity-70 mb-1">Time</div>
                                <div class="font-bold">${data.time}</div>
                            </div>` : ''}
                            <div class="grid grid-cols-2 gap-3">
                                ${data.weight ? `
                                <div class="${getCardClass()}" style="${getCardStyle()}">
                                    <div class="text-xs opacity-70 mb-1">Weight</div>
                                    <div class="font-medium">${data.weight}</div>
                                </div>` : ''}
                                ${data.length ? `
                                <div class="${getCardClass()}" style="${getCardStyle()}">
                                    <div class="text-xs opacity-70 mb-1">Length</div>
                                    <div class="font-medium">${data.length}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor};">Baby's First Stats</h2>
                        <div class="space-y-4">
                            ${data.date ? `
                            <div class="flex justify-between items-center pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                                <span class="font-medium">Born</span>
                                <span class="font-bold">${formattedDate}</span>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex justify-between items-center pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                                <span class="font-medium">Time</span>
                                <span class="font-bold">${data.time}</span>
                            </div>` : ''}
                            ${data.weight ? `
                            <div class="flex justify-between items-center pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                                <span class="font-medium">Weight</span>
                                <span class="font-bold">${data.weight}</span>
                            </div>` : ''}
                            ${data.length ? `
                            <div class="flex justify-between items-center pb-4 border-b" style="border-color: ${accentColor}; color: ${textColor};">
                                <span class="font-medium">Length</span>
                                <span class="font-bold">${data.length}</span>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor};">Baby's First Stats</h2>
                        <div class="relative">
                            <div class="absolute left-6 top-0 bottom-0 w-0.5" style="background: ${accentColor};"></div>
                            ${data.date ? `
                            <div class="relative pl-14 pb-8">
                                <div class="absolute left-4 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                <div class="text-sm font-medium mb-1" style="color: ${accentColor};">Born</div>
                                <div class="font-bold" style="color: ${textColor};">${formattedDate}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="relative pl-14 pb-8">
                                <div class="absolute left-4 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                <div class="text-sm font-medium mb-1" style="color: ${accentColor};">Time</div>
                                <div class="font-bold" style="color: ${textColor};">${data.time}</div>
                            </div>` : ''}
                            ${data.weight ? `
                            <div class="relative pl-14 pb-8">
                                <div class="absolute left-4 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                <div class="text-sm font-medium mb-1" style="color: ${accentColor};">Weight</div>
                                <div class="font-bold" style="color: ${textColor};">${data.weight}</div>
                            </div>` : ''}
                            ${data.length ? `
                            <div class="relative pl-14">
                                <div class="absolute left-4 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                <div class="text-sm font-medium mb-1" style="color: ${accentColor};">Length</div>
                                <div class="font-bold" style="color: ${textColor};">${data.length}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="inline-block px-8 py-6 border-2" style="border-color: ${accentColor}; color: ${textColor};">
                            <div class="text-sm uppercase tracking-widest mb-4" style="color: ${accentColor};">First Stats</div>
                            <div class="space-y-3">
                                ${data.date ? `<div class="text-lg"><span class="opacity-60">Born:</span> <strong>${formattedDate}</strong></div>` : ''}
                                ${data.time ? `<div class="text-lg"><span class="opacity-60">Time:</span> <strong>${data.time}</strong></div>` : ''}
                                ${data.weight ? `<div class="text-lg"><span class="opacity-60">Weight:</span> <strong>${data.weight}</strong></div>` : ''}
                                ${data.length ? `<div class="text-lg"><span class="opacity-60">Length:</span> <strong>${data.length}</strong></div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'badges') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor};">Baby's First Stats</h2>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${data.date ? `
                            <div class="px-6 py-4 rounded-full" style="background: ${accentColor}; color: white;">
                                <div class="text-xs mb-1">Born</div>
                                <div class="font-bold text-sm">${formattedDate}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="px-6 py-4 rounded-full" style="background: ${accentColor}; color: white;">
                                <div class="text-xs mb-1">Time</div>
                                <div class="font-bold text-sm">${data.time}</div>
                            </div>` : ''}
                            ${data.weight ? `
                            <div class="px-6 py-4 rounded-full" style="background: ${accentColor}; color: white;">
                                <div class="text-xs mb-1">Weight</div>
                                <div class="font-bold text-sm">${data.weight}</div>
                            </div>` : ''}
                            ${data.length ? `
                            <div class="px-6 py-4 rounded-full" style="background: ${accentColor}; color: white;">
                                <div class="text-xs mb-1">Length</div>
                                <div class="font-bold text-sm">${data.length}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'icons') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-8 text-center" style="color: ${textColor};">Baby's First Stats</h2>
                        <div class="grid grid-cols-2 gap-4">
                            ${data.date ? `
                            <div class="text-center p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                                <div class="text-4xl mb-2">📅</div>
                                <div class="text-xs opacity-70 mb-1">Born</div>
                                <div class="font-bold text-sm">${formattedDate}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="text-center p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                                <div class="text-4xl mb-2">⏰</div>
                                <div class="text-xs opacity-70 mb-1">Time</div>
                                <div class="font-bold text-sm">${data.time}</div>
                            </div>` : ''}
                            ${data.weight ? `
                            <div class="text-center p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                                <div class="text-4xl mb-2">⚖️</div>
                                <div class="text-xs opacity-70 mb-1">Weight</div>
                                <div class="font-bold text-sm">${data.weight}</div>
                            </div>` : ''}
                            ${data.length ? `
                            <div class="text-center p-6 rounded-xl" style="background: ${cardBg}; color: ${textColor};">
                                <div class="text-4xl mb-2">📏</div>
                                <div class="text-xs opacity-70 mb-1">Length</div>
                                <div class="font-bold text-sm">${data.length}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-6 text-center" style="color: ${textColor};">Baby's First Stats</h2>
                    <div class="space-y-3">
                        ${data.date ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs opacity-70 mb-1">Born</div><div class="font-bold">${formattedDate}</div></div>` : ''}
                        ${data.time ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs opacity-70 mb-1">Time</div><div class="font-bold">${data.time}</div></div>` : ''}
                        <div class="grid grid-cols-2 gap-3">
                            ${data.weight ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs opacity-70 mb-1">Weight</div><div class="font-medium">${data.weight}</div></div>` : ''}
                            ${data.length ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs opacity-70 mb-1">Length</div><div class="font-medium">${data.length}</div></div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
