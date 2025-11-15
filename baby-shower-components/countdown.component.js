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
                    <option value="badges">Badges - Circular Counters</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                    <option value="digital">Digital - LED Display</option>
                    <option value="flip">Flip - Card Flip Style</option>
                    <option value="progress">Progress - With Bars</option>
                    <option value="excitement">Excitement - Playful Design</option>
                    <option value="floating">Floating - Elevated Shadow</option>
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

            case 'badges':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="flex flex-wrap justify-center gap-6">
                                <div class="flex flex-col items-center">
                                    <div class="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${boxBg} 100%); border: 6px solid white;">
                                        <div class="${numberClass} font-bold" style="color: ${textColor};">00</div>
                                    </div>
                                    <div class="text-sm mt-3 font-semibold">Days</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${boxBg} 100%); border: 6px solid white;">
                                        <div class="${numberClass} font-bold" style="color: ${textColor};">00</div>
                                    </div>
                                    <div class="text-sm mt-3 font-semibold">Hours</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${boxBg} 100%); border: 6px solid white;">
                                        <div class="${numberClass} font-bold" style="color: ${textColor};">00</div>
                                    </div>
                                    <div class="text-sm mt-3 font-semibold">Minutes</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${boxBg} 100%); border: 6px solid white;">
                                        <div class="${numberClass} font-bold" style="color: ${textColor};">00</div>
                                    </div>
                                    <div class="text-sm mt-3 font-semibold">Seconds</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-8 text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="py-6 px-8 text-center font-bold text-3xl shadow-xl mb-8" style="background: ${accent}; color: ${textColor}; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                <div class="flex items-center justify-center gap-4">
                                    <span class="text-4xl">⏰</span>
                                    <span>${data.title || 'Countdown to Baby Shower!'}</span>
                                </div>
                            </div>
                            <div class="grid grid-cols-4 gap-4">
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 4px solid ${accent};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-sm mt-2 font-semibold" style="color: ${textColor};">Days</div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 4px solid ${accent};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-sm mt-2 font-semibold" style="color: ${textColor};">Hours</div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 4px solid ${accent};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-sm mt-2 font-semibold" style="color: ${textColor};">Minutes</div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 4px solid ${accent};">
                                    <div class="${numberClass} font-bold" style="color: ${accent};">00</div>
                                    <div class="text-sm mt-2 font-semibold" style="color: ${textColor};">Seconds</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-6 text-center text-sm opacity-75" style="color: ${textColor};">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'digital':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="bg-black rounded-2xl p-4 sm:p-8 shadow-2xl">
                                <div class="grid grid-cols-4 gap-2 sm:gap-4">
                                    <div class="flex flex-col items-center">
                                        <div class="px-3 sm:px-6 py-2 sm:py-4 rounded-lg font-mono" style="background: #1a1a1a; color: ${accent}; text-shadow: 0 0 10px ${accent};">
                                            <div class="text-2xl sm:text-4xl font-bold">00</div>
                                        </div>
                                        <div class="text-xs mt-2 sm:mt-3 text-gray-400 uppercase tracking-wider">Days</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="px-3 sm:px-6 py-2 sm:py-4 rounded-lg font-mono" style="background: #1a1a1a; color: ${accent}; text-shadow: 0 0 10px ${accent};">
                                            <div class="text-2xl sm:text-4xl font-bold">00</div>
                                        </div>
                                        <div class="text-xs mt-2 sm:mt-3 text-gray-400 uppercase tracking-wider">Hours</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="px-3 sm:px-6 py-2 sm:py-4 rounded-lg font-mono" style="background: #1a1a1a; color: ${accent}; text-shadow: 0 0 10px ${accent};">
                                            <div class="text-2xl sm:text-4xl font-bold">00</div>
                                        </div>
                                        <div class="text-xs mt-2 sm:mt-3 text-gray-400 uppercase tracking-wider">Mins</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="px-3 sm:px-6 py-2 sm:py-4 rounded-lg font-mono" style="background: #1a1a1a; color: ${accent}; text-shadow: 0 0 10px ${accent};">
                                            <div class="text-2xl sm:text-4xl font-bold">00</div>
                                        </div>
                                        <div class="text-xs mt-2 sm:mt-3 text-gray-400 uppercase tracking-wider">Secs</div>
                                    </div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'flip':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="grid grid-cols-4 gap-2 sm:gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="relative perspective-1000">
                                        <div class="rounded-lg p-3 sm:p-4 shadow-xl" style="background: ${accent}; color: white;">
                                            <div class="text-2xl sm:${numberClass} font-bold">00</div>
                                        </div>
                                        <div class="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-lg">
                                            <div class="rounded-lg p-3 sm:p-4" style="background: ${accent}; opacity: 0.5;"></div>
                                        </div>
                                    </div>
                                    <div class="text-xs sm:text-sm mt-2 font-semibold">Days</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="relative perspective-1000">
                                        <div class="rounded-lg p-3 sm:p-4 shadow-xl" style="background: ${accent}; color: white;">
                                            <div class="text-2xl sm:${numberClass} font-bold">00</div>
                                        </div>
                                        <div class="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-lg">
                                            <div class="rounded-lg p-3 sm:p-4" style="background: ${accent}; opacity: 0.5;"></div>
                                        </div>
                                    </div>
                                    <div class="text-xs sm:text-sm mt-2 font-semibold">Hours</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="relative perspective-1000">
                                        <div class="rounded-lg p-3 sm:p-4 shadow-xl" style="background: ${accent}; color: white;">
                                            <div class="text-2xl sm:${numberClass} font-bold">00</div>
                                        </div>
                                        <div class="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-lg">
                                            <div class="rounded-lg p-3 sm:p-4" style="background: ${accent}; opacity: 0.5;"></div>
                                        </div>
                                    </div>
                                    <div class="text-xs sm:text-sm mt-2 font-semibold">Mins</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="relative perspective-1000">
                                        <div class="rounded-lg p-3 sm:p-4 shadow-xl" style="background: ${accent}; color: white;">
                                            <div class="text-2xl sm:${numberClass} font-bold">00</div>
                                        </div>
                                        <div class="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-lg">
                                            <div class="rounded-lg p-3 sm:p-4" style="background: ${accent}; opacity: 0.5;"></div>
                                        </div>
                                    </div>
                                    <div class="text-xs sm:text-sm mt-2 font-semibold">Secs</div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'progress':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-md mx-auto space-y-4 sm:space-y-6">
                            <div class="text-left">
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold text-sm sm:text-base">Days</span>
                                    <span class="font-bold text-lg sm:text-2xl" style="color: ${accent};">00</span>
                                </div>
                                <div class="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all" style="background: ${accent}; width: 75%;"></div>
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold text-sm sm:text-base">Hours</span>
                                    <span class="font-bold text-lg sm:text-2xl" style="color: ${accent};">00</span>
                                </div>
                                <div class="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all" style="background: ${accent}; width: 50%;"></div>
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold text-sm sm:text-base">Minutes</span>
                                    <span class="font-bold text-lg sm:text-2xl" style="color: ${accent};">00</span>
                                </div>
                                <div class="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all" style="background: ${accent}; width: 25%;"></div>
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold text-sm sm:text-base">Seconds</span>
                                    <span class="font-bold text-lg sm:text-2xl" style="color: ${accent};">00</span>
                                </div>
                                <div class="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all" style="background: ${accent}; width: 10%;"></div>
                                </div>
                            </div>
                            ${dateText ? `<p class="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75">${dateText}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'excitement':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 text-center relative overflow-hidden" style="background: ${bg}; color: ${textColor};">
                        <!-- Animated sparkles -->
                        <div class="absolute inset-0 overflow-hidden pointer-events-none">
                            <div class="absolute top-8 left-4 sm:left-8 text-xl sm:text-2xl animate-pulse" style="color: ${accent}; animation-delay: 0s;">⭐</div>
                            <div class="absolute top-16 right-8 sm:right-16 text-lg sm:text-xl animate-pulse" style="color: ${accent}; animation-delay: 0.3s;">✨</div>
                            <div class="absolute bottom-16 left-12 sm:left-24 text-xl sm:text-2xl animate-pulse" style="color: ${accent}; animation-delay: 0.6s;">💫</div>
                            <div class="absolute bottom-8 right-4 sm:right-12 text-lg sm:text-xl animate-pulse" style="color: ${accent}; animation-delay: 0.9s;">⭐</div>
                        </div>

                        <div class="relative z-10">
                            <div class="text-3xl sm:text-4xl mb-3 sm:mb-4">🎉</div>
                            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>

                            <div class="max-w-md mx-auto">
                                <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                                    <div class="transform hover:scale-105 transition-transform">
                                        <div class="rounded-2xl p-4 sm:p-6 shadow-xl" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                            <div class="text-3xl sm:text-4xl font-bold text-white">00</div>
                                            <div class="text-sm sm:text-base mt-2 text-white font-semibold">Days</div>
                                        </div>
                                    </div>
                                    <div class="transform hover:scale-105 transition-transform">
                                        <div class="rounded-2xl p-4 sm:p-6 shadow-xl" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                            <div class="text-3xl sm:text-4xl font-bold text-white">00</div>
                                            <div class="text-sm sm:text-base mt-2 text-white font-semibold">Hours</div>
                                        </div>
                                    </div>
                                    <div class="transform hover:scale-105 transition-transform">
                                        <div class="rounded-2xl p-4 sm:p-6 shadow-xl" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                            <div class="text-3xl sm:text-4xl font-bold text-white">00</div>
                                            <div class="text-sm sm:text-base mt-2 text-white font-semibold">Minutes</div>
                                        </div>
                                    </div>
                                    <div class="transform hover:scale-105 transition-transform">
                                        <div class="rounded-2xl p-4 sm:p-6 shadow-xl" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                            <div class="text-3xl sm:text-4xl font-bold text-white">00</div>
                                            <div class="text-sm sm:text-base mt-2 text-white font-semibold">Seconds</div>
                                        </div>
                                    </div>
                                </div>

                                ${dateText ? `
                                <div class="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full" style="background: ${accent}30;">
                                    <p class="text-xs sm:text-sm font-semibold">${dateText}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'floating':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6 text-center" style="background: ${bg}; color: ${textColor};">
                        <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="relative">
                                <!-- Shadow layers -->
                                <div class="absolute inset-0 rounded-3xl transform translate-y-2 opacity-20" style="background: ${accent};"></div>
                                <div class="absolute inset-0 rounded-3xl transform translate-y-4 opacity-10" style="background: ${accent};"></div>

                                <div class="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform hover:-translate-y-2 transition-transform">
                                    <div class="grid grid-cols-4 gap-2 sm:gap-4">
                                        <div>
                                            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                                <span class="text-xl sm:text-2xl font-bold text-white">00</span>
                                            </div>
                                            <div class="text-xs sm:text-sm font-semibold">Days</div>
                                        </div>
                                        <div>
                                            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                                <span class="text-xl sm:text-2xl font-bold text-white">00</span>
                                            </div>
                                            <div class="text-xs sm:text-sm font-semibold">Hours</div>
                                        </div>
                                        <div>
                                            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                                <span class="text-xl sm:text-2xl font-bold text-white">00</span>
                                            </div>
                                            <div class="text-xs sm:text-sm font-semibold">Mins</div>
                                        </div>
                                        <div>
                                            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${accent}, ${boxBg});">
                                                <span class="text-xl sm:text-2xl font-bold text-white">00</span>
                                            </div>
                                            <div class="text-xs sm:text-sm font-semibold">Secs</div>
                                        </div>
                                    </div>

                                    ${dateText ? `
                                    <div class="mt-6 pt-6 border-t" style="border-color: ${accent}40;">
                                        <p class="text-xs sm:text-sm opacity-75">${dateText}</p>
                                    </div>` : ''}
                                </div>
                            </div>
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
