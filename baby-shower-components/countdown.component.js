// Countdown Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label>
                <input type="text" placeholder="Days Until Baby Shower!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="grid">Grid - 4 Boxes</option>
                    <option value="cards">Cards - Elevated Boxes</option>
                    <option value="circles">Circles - Round Design</option>
                    <option value="modern">Modern - Gradient</option>
                    <option value="minimal">Minimal - Simple</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Box Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="boxBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#92400e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="numberSize" oninput="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'grid';
        const bg = style.bg || '#fef3c7';
        const boxBg = style.boxBg || '#ffffff';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#92400e';
        const numberSize = style.numberSize || 'medium';

        const numberSizes = {
            small: 'text-2xl',
            medium: 'text-3xl',
            large: 'text-4xl'
        };

        const numberClass = numberSizes[numberSize];
        const dateText = data.date ? `${data.date}${data.time ? ' at ' + data.time : ''}` : '';

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="grid grid-cols-4 gap-4">
                                <div class="rounded-xl p-4 shadow-lg" style="background: ${boxBg};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1">Days</div>
                                </div>
                                <div class="rounded-xl p-4 shadow-lg" style="background: ${boxBg};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1">Hours</div>
                                </div>
                                <div class="rounded-xl p-4 shadow-lg" style="background: ${boxBg};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1">Minutes</div>
                                </div>
                                <div class="rounded-xl p-4 shadow-lg" style="background: ${boxBg};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1">Seconds</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-6 text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'circles':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="flex flex-wrap justify-center gap-6">
                                <div class="flex flex-col items-center">
                                    <div class="w-20 h-20 rounded-full flex items-center justify-center border-4" style="background: ${boxBg}; border-color: ${accent};">
                                        <div class="text-2xl font-bold" style="color: ${accent};">00</div>
                                    </div>
                                    <div class="text-xs mt-2">Days</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-20 h-20 rounded-full flex items-center justify-center border-4" style="background: ${boxBg}; border-color: ${accent};">
                                        <div class="text-2xl font-bold" style="color: ${accent};">00</div>
                                    </div>
                                    <div class="text-xs mt-2">Hours</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-20 h-20 rounded-full flex items-center justify-center border-4" style="background: ${boxBg}; border-color: ${accent};">
                                        <div class="text-2xl font-bold" style="color: ${accent};">00</div>
                                    </div>
                                    <div class="text-xs mt-2">Minutes</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-20 h-20 rounded-full flex items-center justify-center border-4" style="background: ${boxBg}; border-color: ${accent};">
                                        <div class="text-2xl font-bold" style="color: ${accent};">00</div>
                                    </div>
                                    <div class="text-xs mt-2">Seconds</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-6 text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${boxBg} 100%);">
                                <h2 class="text-2xl font-bold mb-8 text-white">${data.title || 'Countdown to Baby Shower!'}</h2>
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4">
                                        <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                        <div class="text-xs mt-1" style="color: ${textColor};">Days</div>
                                    </div>
                                    <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4">
                                        <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                        <div class="text-xs mt-1" style="color: ${textColor};">Hours</div>
                                    </div>
                                    <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4">
                                        <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                        <div class="text-xs mt-1" style="color: ${textColor};">Minutes</div>
                                    </div>
                                    <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4">
                                        <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                        <div class="text-xs mt-1" style="color: ${textColor};">Seconds</div>
                                    </div>
                                </div>
                                ${dateText ? `<p class="mt-6 text-sm text-white opacity-90">${dateText}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-3xl font-light mb-2" style="letter-spacing: 0.05em;">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="h-0.5 w-16 mx-auto mb-8" style="background: ${accent};"></div>
                        <div class="max-w-2xl mx-auto">
                            <div class="flex justify-center gap-8">
                                <div>
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1 opacity-60">Days</div>
                                </div>
                                <div class="text-2xl" style="color: ${accent};">:</div>
                                <div>
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1 opacity-60">Hours</div>
                                </div>
                                <div class="text-2xl" style="color: ${accent};">:</div>
                                <div>
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1 opacity-60">Minutes</div>
                                </div>
                                <div class="text-2xl" style="color: ${accent};">:</div>
                                <div>
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-xs mt-1 opacity-60">Seconds</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-6 text-sm opacity-60">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'grid':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="grid grid-cols-4 gap-4">
                                <div class="rounded-lg p-4" style="background: ${boxBg}; background-opacity: 0.5;">
                                    <div class="${numberClass} font-bold">00</div>
                                    <div class="text-sm mt-1">Days</div>
                                </div>
                                <div class="rounded-lg p-4" style="background: ${boxBg}; background-opacity: 0.5;">
                                    <div class="${numberClass} font-bold">00</div>
                                    <div class="text-sm mt-1">Hours</div>
                                </div>
                                <div class="rounded-lg p-4" style="background: ${boxBg}; background-opacity: 0.5;">
                                    <div class="${numberClass} font-bold">00</div>
                                    <div class="text-sm mt-1">Minutes</div>
                                </div>
                                <div class="rounded-lg p-4" style="background: ${boxBg}; background-opacity: 0.5;">
                                    <div class="${numberClass} font-bold">00</div>
                                    <div class="text-sm mt-1">Seconds</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-6 text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
