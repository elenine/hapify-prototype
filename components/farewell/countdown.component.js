// Party Countdown Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Party Countdown',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label>
                <input type="text" placeholder="Days Until the Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (Optional)</label>
                <input type="text" placeholder="Mark your calendar!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="banner">Banner - Full Width</option>
                    <option value="minimal">Minimal - Simple</option>
                    <option value="circle">Circle - Modern</option>
                    <option value="elegant">Elegant - Framed</option>
                    <option value="compact">Compact - Small Display</option>
                    <option value="digital">Digital - LED Style</option>
                    <option value="gradient">Gradient - Colorful</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f5f3ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="2xl">Extra Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#f5f3ff';
        const accentColor = style.accentColor || '#8b5cf6';
        const shadow = style.shadow || 'lg';

        let days = 0;
        let countdownText = '';
        let isToday = false;
        let hasPassed = false;

        if (data.date) {
            const target = new Date(data.date);
            const now = new Date();
            days = Math.floor((target - now) / (1000 * 60 * 60 * 24));

            if (days > 0) {
                countdownText = `Day${days !== 1 ? 's' : ''} Until the Party!`;
            } else if (days === 0) {
                isToday = true;
                countdownText = "It's Party Time! 🎉🎊";
            } else {
                hasPassed = true;
                countdownText = 'The party has passed 💜';
            }
        }

        // Card Layout - Centered Box
        if (layout === 'card') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-lg mx-auto">
                        <div class="text-6xl mb-4">⏰</div>
                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Days Until the Party'}</h2>
                        ${data.subtitle ? `<p class="text-gray-600 mb-8 text-lg">${data.subtitle}</p>` : ''}
                        ${data.date ? `
                            <div class="bg-white rounded-3xl p-10 shadow-${shadow} inline-block">
                                ${isToday ? `
                                    <div class="text-5xl font-bold animate-pulse" style="color: ${accentColor}">${countdownText}</div>
                                ` : hasPassed ? `
                                    <div class="text-3xl font-bold text-gray-600">${countdownText}</div>
                                ` : `
                                    <div class="text-8xl font-bold mb-3" style="color: ${accentColor}">${days}</div>
                                    <div class="text-2xl text-gray-700 font-semibold">${countdownText}</div>
                                `}
                            </div>
                        ` : '<p class="text-gray-500 text-lg">Set the party date to see the countdown</p>'}
                    </div>
                </div>
            `;
        }

        // Banner Layout - Full Width
        if (layout === 'banner') {
            return `
                <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90);">
                    <div class="max-w-3xl mx-auto text-white">
                        <div class="text-7xl mb-6">⏰</div>
                        <h2 class="text-4xl font-bold mb-4">${data.title || 'Days Until the Party'}</h2>
                        ${data.subtitle ? `<p class="text-xl mb-10 opacity-90">${data.subtitle}</p>` : ''}
                        ${data.date ? `
                            <div class="inline-block bg-white/20 backdrop-blur-sm rounded-3xl p-12">
                                ${isToday ? `
                                    <div class="text-6xl font-bold animate-pulse">${countdownText}</div>
                                ` : hasPassed ? `
                                    <div class="text-4xl font-bold opacity-80">${countdownText}</div>
                                ` : `
                                    <div class="text-9xl font-bold mb-4">${days}</div>
                                    <div class="text-3xl font-semibold">${countdownText}</div>
                                `}
                            </div>
                        ` : '<div class="text-2xl opacity-80">Set the party date to see the countdown</div>'}
                    </div>
                </div>
            `;
        }

        // Minimal Layout - Simple
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="text-5xl mb-4">⏰</div>
                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Days Until the Party'}</h2>
                        <div class="w-16 h-1 mx-auto mb-6" style="background: ${accentColor}"></div>
                        ${data.subtitle ? `<p class="text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                        ${data.date ? `
                            ${isToday ? `
                                <div class="text-5xl font-bold animate-pulse" style="color: ${accentColor}">${countdownText}</div>
                            ` : hasPassed ? `
                                <div class="text-3xl font-bold text-gray-600">${countdownText}</div>
                            ` : `
                                <div class="text-8xl font-bold mb-2" style="color: ${accentColor}">${days}</div>
                                <div class="text-xl text-gray-700">${countdownText}</div>
                            `}
                        ` : '<p class="text-gray-500">Set the party date to see the countdown</p>'}
                    </div>
                </div>
            `;
        }

        // Circle Layout - Modern
        if (layout === 'circle') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-lg mx-auto">
                        <div class="text-6xl mb-6">⏰</div>
                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Days Until the Party'}</h2>
                        ${data.subtitle ? `<p class="text-gray-600 mb-10">${data.subtitle}</p>` : ''}
                        ${data.date ? `
                            <div class="inline-flex items-center justify-center w-64 h-64 rounded-full shadow-${shadow}" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90)">
                                <div class="text-white text-center">
                                    ${isToday ? `
                                        <div class="text-4xl font-bold animate-pulse px-4">🎉🎊<br>${countdownText.replace('🎉🎊', '')}</div>
                                    ` : hasPassed ? `
                                        <div class="text-2xl font-bold opacity-90">${countdownText.replace('💜', '')}<br/>💜</div>
                                    ` : `
                                        <div class="text-7xl font-bold mb-2">${days}</div>
                                        <div class="text-lg font-semibold">${countdownText}</div>
                                    `}
                                </div>
                            </div>
                        ` : '<p class="text-gray-500">Set the party date to see the countdown</p>'}
                    </div>
                </div>
            `;
        }

        // Elegant Layout - Framed
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 rounded-2xl p-12 bg-white shadow-${shadow} text-center" style="border-color: ${accentColor}">
                            <div class="inline-block p-3 rounded-full mb-6" style="background: ${accentColor}15">
                                <div class="text-5xl">⏰</div>
                            </div>
                            <h2 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${data.title || 'Days Until the Party'}</h2>
                            <div class="w-24 h-1 mx-auto mb-6" style="background: ${accentColor}30"></div>
                            ${data.subtitle ? `<p class="text-gray-600 mb-10 text-lg">${data.subtitle}</p>` : ''}
                            ${data.date ? `
                                <div class="p-10 rounded-2xl" style="background: ${accentColor}10">
                                    ${isToday ? `
                                        <div class="text-5xl font-bold animate-pulse" style="color: ${accentColor}">${countdownText}</div>
                                    ` : hasPassed ? `
                                        <div class="text-3xl font-bold text-gray-600">${countdownText}</div>
                                    ` : `
                                        <div class="text-9xl font-bold mb-4" style="color: ${accentColor}">${days}</div>
                                        <div class="text-2xl font-semibold text-gray-700">${countdownText}</div>
                                    `}
                                </div>
                            ` : '<p class="text-gray-500">Set the party date to see the countdown</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Compact Layout - Small Display
        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center gap-4 p-5 rounded-xl shadow-${shadow}" style="background: ${accentColor}10">
                            <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}">
                                <span class="text-white">⏰</span>
                            </div>
                            <div class="flex-1">
                                <h2 class="text-sm uppercase tracking-wide font-bold mb-1" style="color: ${accentColor}">${data.title || 'Days Until Party'}</h2>
                                ${data.date ? `
                                    ${isToday ? `
                                        <div class="text-xl font-bold" style="color: ${accentColor}">🎉 Today!</div>
                                    ` : hasPassed ? `
                                        <div class="text-lg font-semibold text-gray-600">Event Passed</div>
                                    ` : `
                                        <div class="flex items-baseline gap-2">
                                            <div class="text-4xl font-black" style="color: ${accentColor}">${days}</div>
                                            <div class="text-sm text-gray-600">day${days !== 1 ? 's' : ''} to go</div>
                                        </div>
                                    `}
                                ` : '<div class="text-sm text-gray-500">Set date</div>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Digital Layout - LED Style
        if (layout === 'digital') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-5xl mb-4">⏰</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Days Until the Party'}</h2>
                        ${data.subtitle ? `<p class="text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                        ${data.date ? `
                            <div class="inline-block bg-black rounded-2xl p-8 shadow-${shadow}">
                                ${isToday ? `
                                    <div class="text-5xl font-bold animate-pulse" style="color: #00ff00; text-shadow: 0 0 20px #00ff00;">
                                        🎉 NOW! 🎉
                                    </div>
                                ` : hasPassed ? `
                                    <div class="text-3xl font-bold" style="color: #ff0000; text-shadow: 0 0 20px #ff0000;">
                                        ${countdownText}
                                    </div>
                                ` : `
                                    <div class="font-mono">
                                        <div class="text-8xl font-bold mb-2" style="color: #00ff00; text-shadow: 0 0 30px #00ff00; font-family: 'Courier New', monospace;">
                                            ${String(days).padStart(2, '0')}
                                        </div>
                                        <div class="text-lg tracking-wider" style="color: #00ff00; text-shadow: 0 0 10px #00ff00;">
                                            DAYS REMAINING
                                        </div>
                                    </div>
                                `}
                            </div>
                        ` : '<p class="text-gray-500">Set the party date</p>'}
                    </div>
                </div>
            `;
        }

        // Gradient Layout - Colorful
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative rounded-3xl overflow-hidden shadow-${shadow}" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}10)">
                            <div class="absolute inset-0" style="background: linear-gradient(45deg, transparent 30%, ${accentColor}15 100%)"></div>

                            <div class="relative z-10 p-10 text-center">
                                <div class="inline-block p-4 rounded-full mb-6 bg-white shadow-lg">
                                    <span class="text-5xl">⏰</span>
                                </div>
                                <h2 class="text-3xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Days Until the Party'}</h2>
                                ${data.subtitle ? `<p class="text-gray-700 mb-8 text-lg">${data.subtitle}</p>` : ''}

                                ${data.date ? `
                                    <div class="inline-block">
                                        ${isToday ? `
                                            <div class="bg-white rounded-2xl p-10 shadow-xl">
                                                <div class="text-6xl font-bold animate-pulse" style="color: ${accentColor}">
                                                    🎉 It's Time! 🎊
                                                </div>
                                            </div>
                                        ` : hasPassed ? `
                                            <div class="bg-white rounded-2xl p-10 shadow-xl">
                                                <div class="text-4xl font-bold text-gray-600">${countdownText}</div>
                                            </div>
                                        ` : `
                                            <div class="bg-white rounded-2xl p-10 shadow-xl">
                                                <div class="relative">
                                                    <div class="absolute inset-0 blur-2xl opacity-30" style="background: ${accentColor}"></div>
                                                    <div class="relative">
                                                        <div class="text-9xl font-black mb-3" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                                            ${days}
                                                        </div>
                                                        <div class="text-2xl font-bold" style="color: ${accentColor}">${countdownText}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        `}
                                    </div>
                                ` : '<p class="text-gray-600">Set the party date to see the countdown</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return '';
    }
};
