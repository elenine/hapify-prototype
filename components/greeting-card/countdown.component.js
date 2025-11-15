// Countdown Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.countdown = {
    name: '⏰ Countdown',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label><input type="text" placeholder="Days Until Birthday!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Birthday Date</label><input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="date" oninput="updatePreview()"></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic - Traditional countdown</option>
                    <option value="flipClock">Flip Clock - Digital flip style</option>
                    <option value="circular">Circular - Round progress rings</option>
                    <option value="minimal">Minimal - Clean simple display</option>
                    <option value="celebration">Celebration - Festive theme</option>
                    <option value="neon">Neon - Glowing neon style</option>
                    <option value="ticker">Ticker Tape - News ticker style</option>
                    <option value="slots">Slot Machine - Casino slot style</option>
                    <option value="binary">Binary Clock - Tech binary display</option>
                    <option value="speedometer">Speedometer - Racing gauge style</option>
                    <option value="hourglass">Hourglass - Time sand style</option>
                    <option value="rocket">Rocket Launch - Countdown to launch</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Counter Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="counterColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="numberSize" onchange="updatePreview()">
                    <option value="text-4xl">Medium</option>
                    <option value="text-5xl" selected>Large</option>
                    <option value="text-6xl">Extra Large</option>
                    <option value="text-7xl">Huge</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="rounded-none">None</option>
                    <option value="rounded">Small</option>
                    <option value="rounded-lg" selected>Medium</option>
                    <option value="rounded-xl">Large</option>
                    <option value="rounded-full">Full Round</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#fce7f3';
        const counterColor = style.counterColor || '#ec4899';
        const textColor = style.text || '#1f2937';
        const numberSize = style.numberSize || 'text-5xl';
        const shadow = style.shadow || 'none';
        const borderRadius = style.borderRadius || 'rounded-lg';

        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;
        const title = data.title || 'Days Until Birthday!';
        const date = data.date || '';

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="text-6xl mb-4">⏰</div>
                        <h3 class="text-2xl font-bold mb-4" style="color: ${textColor}">${title}</h3>
                        <div class="${numberSize} font-bold mb-2" style="color: ${counterColor}">🎂</div>
                        <p class="mt-4 text-gray-600">${date || 'Set a date to see countdown'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'flipClock') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8" style="color: ${textColor}">${title}</h3>
                        <div class="flex gap-4 justify-center">
                            ${['Days', 'Hours', 'Mins', 'Secs'].map(unit => `
                                <div class="flex flex-col items-center">
                                    <div class="w-24 h-28 ${borderRadius} ${shadowClass} flex items-center justify-center mb-2" style="background: ${counterColor}">
                                        <div class="text-4xl font-bold text-white">00</div>
                                    </div>
                                    <div class="text-sm font-semibold" style="color: ${textColor}">${unit}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'circular') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8" style="color: ${textColor}">${title}</h3>
                        <div class="flex gap-6 justify-center flex-wrap">
                            ${['Days', 'Hours', 'Minutes'].map(unit => `
                                <div class="flex flex-col items-center">
                                    <div class="w-32 h-32 rounded-full ${shadowClass} flex items-center justify-center mb-3 border-8" style="background: white; border-color: ${counterColor}">
                                        <div class="text-4xl font-bold" style="color: ${counterColor}">00</div>
                                    </div>
                                    <div class="text-sm font-semibold" style="color: ${textColor}">${unit}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="${numberSize} font-bold mb-4" style="color: ${counterColor}">00:00:00:00</div>
                        <div class="flex gap-8 justify-center text-sm font-semibold" style="color: ${textColor}">
                            <span>Days</span>
                            <span>Hours</span>
                            <span>Minutes</span>
                            <span>Seconds</span>
                        </div>
                        <p class="mt-6 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'celebration') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto text-center">
                        <div class="text-6xl mb-4">🎉</div>
                        <h3 class="text-3xl font-bold mb-6" style="color: ${textColor}">${title}</h3>
                        <div class="grid grid-cols-4 gap-4">
                            ${[{ num: '00', label: 'Days', emoji: '📅' }, { num: '00', label: 'Hours', emoji: '⏰' }, { num: '00', label: 'Minutes', emoji: '⏱️' }, { num: '00', label: 'Seconds', emoji: '⚡' }].map(item => `
                                <div class="p-4 ${borderRadius} ${shadowClass}" style="background: white">
                                    <div class="text-3xl mb-2">${item.emoji}</div>
                                    <div class="text-4xl font-bold mb-1" style="color: ${counterColor}">${item.num}</div>
                                    <div class="text-sm font-semibold" style="color: ${textColor}">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'neon') {
            return `
                <div class="py-16 px-6" style="background: #1f2937">
                    <div class="max-w-3xl mx-auto text-center">
                        <h3 class="text-3xl font-bold mb-8 text-white">${title}</h3>
                        <div class="flex gap-6 justify-center">
                            ${['99', '23', '59', '59'].map((num, i) => `
                                <div class="flex flex-col items-center">
                                    <div class="text-6xl font-bold mb-2" style="color: ${counterColor}; text-shadow: 0 0 20px ${counterColor}, 0 0 40px ${counterColor}">${num}</div>
                                    <div class="text-sm font-semibold text-white">${['Days', 'Hours', 'Mins', 'Secs'][i]}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-gray-400">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'ticker') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-2xl font-bold mb-6 text-center" style="color: ${textColor}">${title}</h3>
                        <div class="overflow-hidden ${borderRadius} ${shadowClass}" style="background: ${counterColor}">
                            <div class="py-6 px-8">
                                <div class="flex items-center justify-center gap-8 text-white">
                                    <div class="flex items-center gap-2">
                                        <span class="font-mono text-5xl font-bold">42</span>
                                        <span class="text-sm font-semibold">DAYS</span>
                                    </div>
                                    <span class="text-3xl">•</span>
                                    <div class="flex items-center gap-2">
                                        <span class="font-mono text-5xl font-bold">15</span>
                                        <span class="text-sm font-semibold">HRS</span>
                                    </div>
                                    <span class="text-3xl">•</span>
                                    <div class="flex items-center gap-2">
                                        <span class="font-mono text-5xl font-bold">30</span>
                                        <span class="text-sm font-semibold">MIN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="mt-4 text-center text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'slots') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8" style="color: ${textColor}">${title}</h3>
                        <div class="p-8 rounded-2xl ${shadowClass}" style="background: linear-gradient(145deg, #dc2626, #991b1b)">
                            <div class="flex gap-4 justify-center">
                                ${['8', '8', ':', '2', '3', ':', '5', '9'].map(num => `
                                    <div class="w-16 h-24 rounded-lg ${shadowClass} flex items-center justify-center" style="background: white; border: 3px solid ${counterColor}">
                                        <div class="font-mono text-4xl font-bold" style="color: ${counterColor}">${num}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="flex justify-center gap-8 mt-6 text-sm font-semibold text-white">
                                <span>DAYS</span>
                                <span>HOURS</span>
                                <span>MINUTES</span>
                            </div>
                        </div>
                        <p class="mt-4 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'binary') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8" style="color: ${textColor}">${title}</h3>
                        <div class="p-8 rounded-xl ${shadowClass}" style="background: #000; border: 2px solid ${counterColor}">
                            <div class="space-y-4">
                                ${['DAYS: 00101010', 'HOURS: 00010111', 'MINUTES: 00111100', 'SECONDS: 00110011'].map(line => `
                                    <div class="flex items-center justify-center gap-3">
                                        <span class="text-sm font-semibold" style="color: ${counterColor}">${line.split(':')[0]}:</span>
                                        <div class="font-mono text-2xl font-bold tracking-wider" style="color: ${counterColor}; text-shadow: 0 0 10px ${counterColor}">${line.split(':')[1]}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="mt-6 text-xs font-mono text-gray-500">SYSTEM.BIRTHDAY.COUNTDOWN.ACTIVE</div>
                        </div>
                        <p class="mt-4 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'speedometer') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8" style="color: ${textColor}">${title}</h3>
                        <div class="relative">
                            <div class="w-64 h-32 mx-auto rounded-t-full ${shadowClass} relative overflow-hidden" style="background: linear-gradient(180deg, ${counterColor}, ${counterColor}80)">
                                <div class="absolute inset-0 flex items-end justify-center pb-4">
                                    <div class="text-5xl font-bold text-white">42</div>
                                </div>
                                <div class="absolute top-2 left-0 right-0 flex justify-between px-4 text-xs font-semibold text-white">
                                    <span>0</span>
                                    <span>50</span>
                                    <span>100</span>
                                </div>
                            </div>
                            <div class="mt-4 font-semibold" style="color: ${textColor}">DAYS REMAINING</div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 mt-8">
                            ${[{ val: '15', label: 'Hours' }, { val: '30', label: 'Minutes' }, { val: '45', label: 'Seconds' }].map(item => `
                                <div class="p-3 ${borderRadius} ${shadowClass}" style="background: white">
                                    <div class="text-2xl font-bold" style="color: ${counterColor}">${item.val}</div>
                                    <div class="text-xs font-semibold" style="color: ${textColor}">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-4 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'hourglass') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto text-center">
                        <h3 class="text-2xl font-bold mb-8" style="color: ${textColor}">${title}</h3>
                        <div class="flex justify-center mb-8">
                            <div class="relative">
                                <div class="text-9xl">⏳</div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="text-3xl font-bold" style="color: ${counterColor}">42</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-xl font-semibold mb-6" style="color: ${textColor}">Days Until Your Birthday</div>
                        <div class="flex justify-center gap-6 text-center">
                            ${[{ val: '15', label: 'Hours', icon: '⏰' }, { val: '30', label: 'Minutes', icon: '⏱️' }, { val: '45', label: 'Seconds', icon: '⚡' }].map(item => `
                                <div>
                                    <div class="text-3xl mb-2">${item.icon}</div>
                                    <div class="text-2xl font-bold" style="color: ${counterColor}">${item.val}</div>
                                    <div class="text-sm" style="color: ${textColor}">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-gray-600">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'rocket') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(180deg, ${bgColor}, #1e3a8a)">
                    <div class="max-w-2xl mx-auto text-center">
                        <h3 class="text-3xl font-bold mb-8 text-white">${title}</h3>
                        <div class="relative">
                            <div class="text-8xl mb-6 animate-bounce">🚀</div>
                            <div class="text-7xl font-bold mb-4" style="color: ${counterColor}; text-shadow: 0 0 20px ${counterColor}">42</div>
                            <div class="text-2xl font-semibold text-white mb-8">DAYS TO LIFTOFF</div>
                        </div>
                        <div class="flex justify-center gap-6">
                            ${[{ val: '15', label: 'HRS' }, { val: '30', label: 'MIN' }, { val: '45', label: 'SEC' }].map(item => `
                                <div class="p-4 rounded-lg ${shadowClass}" style="background: rgba(255, 255, 255, 0.1); border: 2px solid ${counterColor}">
                                    <div class="text-3xl font-bold text-white">${item.val}</div>
                                    <div class="text-sm font-semibold" style="color: ${counterColor}">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-gray-300">${date || 'Set a date'}</p>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-xl mx-auto text-center">
                    <div class="text-6xl mb-4">⏰</div>
                    <h3 class="text-2xl font-bold mb-4" style="color: ${textColor}">${title}</h3>
                    <div class="${numberSize} font-bold" style="color: ${counterColor}">🎂</div>
                    <p class="mt-4 text-gray-600">${date || 'Set a date to see countdown'}</p>
                </div>
            </div>
        `;
    }
};
