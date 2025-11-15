// Graduation Countdown Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Graduation Countdown',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label>
                <input type="text" placeholder="Days Until Graduation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduation Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (Optional)</label>
                <input type="text" placeholder="Mark your calendar!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="circular">Circular Badge</option>
                    <option value="banner">Banner</option>
                    <option value="minimal">Minimal</option>
                    <option value="flip-card">Flip Card</option>
                    <option value="neon-glow">Neon Glow</option>
                    <option value="gradient-rings">Gradient Rings</option>
                    <option value="ticker">Digital Ticker</option>
                    <option value="celebration">Celebration Theme</option>
                    <option value="boxed-digits">Boxed Digits</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';

        let diff = null;
        if (data.date) {
            const target = new Date(data.date);
            const now = new Date();
            diff = Math.floor((target - now) / (1000 * 60 * 60 * 24));
        }

        switch(layout) {
            case 'circular':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="text-5xl mb-4">⏰</div>
                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 mb-6">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="inline-flex items-center justify-center w-64 h-64 rounded-full shadow-xl" style="background: ${accent}; color: white">
                                        <div>
                                            <div class="text-8xl font-black mb-2">${diff}</div>
                                            <div class="text-2xl font-semibold">Day${diff !== 1 ? 's' : ''}</div>
                                        </div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'banner':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-6xl mb-6">⏰</div>
                            <h2 class="text-4xl font-black mb-4">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-lg mb-8 opacity-90">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="inline-block bg-white bg-opacity-20 backdrop-blur rounded-3xl p-10 shadow-2xl">
                                        <div class="text-9xl font-black mb-2">${diff}</div>
                                        <div class="text-3xl font-bold">Day${diff !== 1 ? 's' : ''} Remaining</div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-5xl font-black animate-pulse">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-3xl font-bold">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-xl opacity-75">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-md mx-auto">
                            <div class="text-4xl mb-3">⏰</div>
                            <h2 class="text-xl font-bold mb-2" style="color: ${accent}">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 text-sm mb-6">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="space-y-2">
                                        <div class="text-6xl font-bold" style="color: ${accent}">${diff}</div>
                                        <div class="text-lg text-gray-700">Day${diff !== 1 ? 's' : ''}</div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-3xl font-bold animate-pulse" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-xl text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'flip-card':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="text-5xl mb-4">⏰</div>
                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 mb-6">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="inline-block perspective-1000">
                                        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border-4" style="border-color: ${accent}">
                                            <div class="p-10" style="background: linear-gradient(to bottom, ${accent}10, white)">
                                                <div class="text-8xl font-black mb-3" style="color: ${accent}; font-family: 'Courier New', monospace">${diff}</div>
                                                <div class="h-1 w-24 mx-auto mb-3 rounded-full" style="background: ${accent}"></div>
                                                <div class="text-2xl font-bold text-gray-800">DAY${diff !== 1 ? 'S' : ''}</div>
                                                <div class="text-sm uppercase tracking-wider text-gray-600 mt-2">Remaining</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'neon-glow':
                return `
                    <div class="py-16 px-6 text-center" style="background: #1a1a2e">
                        <div class="max-w-lg mx-auto">
                            <div class="text-5xl mb-4">⏰</div>
                            <h2 class="text-2xl font-bold mb-3 text-white">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-300 mb-6">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="inline-block p-12 rounded-3xl" style="background: rgba(99, 102, 241, 0.1); box-shadow: 0 0 30px ${accent}50, inset 0 0 30px ${accent}20">
                                        <div class="text-9xl font-black mb-2 text-white" style="text-shadow: 0 0 20px ${accent}, 0 0 40px ${accent}, 0 0 60px ${accent}">
                                            ${diff}
                                        </div>
                                        <div class="text-3xl font-bold text-white" style="text-shadow: 0 0 10px ${accent}">
                                            DAY${diff !== 1 ? 'S' : ''}
                                        </div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse text-white" style="text-shadow: 0 0 20px ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-400">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-400 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'gradient-rings':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="text-5xl mb-4">⏰</div>
                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 mb-6">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="relative inline-block">
                                        <div class="absolute inset-0 rounded-full" style="background: linear-gradient(135deg, ${accent}30, ${accent}10); filter: blur(20px)"></div>
                                        <div class="relative w-72 h-72 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent}, ${accent}cc)">
                                            <div class="w-60 h-60 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, ${accent}ee, ${accent})">
                                                <div class="w-48 h-48 rounded-full flex items-center justify-center bg-white">
                                                    <div class="text-center">
                                                        <div class="text-7xl font-black mb-2" style="color: ${accent}">${diff}</div>
                                                        <div class="text-xl font-bold" style="color: ${accent}">DAY${diff !== 1 ? 'S' : ''}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'ticker':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-6">
                                <div class="text-5xl mb-3">⏰</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Days Until Graduation'}</h2>
                                ${data.subtitle ? `<p class="text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                            </div>
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                                        <div class="flex items-center justify-center gap-3">
                                            ${diff.toString().split('').map(digit => `
                                                <div class="w-20 h-28 rounded-xl flex items-center justify-center text-6xl font-bold text-white shadow-lg" style="background: linear-gradient(to bottom, ${accent}, ${accent}cc); font-family: 'Courier New', monospace">
                                                    ${digit}
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="text-center mt-6">
                                            <div class="inline-block px-6 py-2 bg-white bg-opacity-10 rounded-full">
                                                <span class="text-white text-lg font-bold uppercase tracking-wider">Day${diff !== 1 ? 's' : ''} to Go</span>
                                            </div>
                                        </div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse text-center" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600 text-center">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg text-center">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'celebration':
                return `
                    <div class="py-16 px-6 text-center relative overflow-hidden" style="background: linear-gradient(135deg, ${accent}15, ${bg})">
                        <div class="absolute top-0 left-0 text-6xl opacity-20">🎓</div>
                        <div class="absolute top-10 right-10 text-4xl opacity-20">🎊</div>
                        <div class="absolute bottom-10 left-10 text-5xl opacity-20">🎉</div>
                        <div class="absolute bottom-5 right-5 text-6xl opacity-20">🎓</div>

                        <div class="max-w-2xl mx-auto relative z-10">
                            <div class="text-6xl mb-4">⏰</div>
                            <h2 class="text-3xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-700 text-lg mb-8">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="bg-white rounded-3xl p-10 shadow-2xl inline-block border-4" style="border-color: ${accent}">
                                        <div class="mb-4">
                                            <span class="text-6xl">🎓</span>
                                            <span class="text-6xl mx-3">🎊</span>
                                            <span class="text-6xl">🎉</span>
                                        </div>
                                        <div class="text-8xl font-black mb-3" style="color: ${accent}">${diff}</div>
                                        <div class="text-3xl font-bold mb-2" style="color: ${accent}">DAY${diff !== 1 ? 'S' : ''}</div>
                                        <div class="text-lg text-gray-600 font-semibold uppercase tracking-wide">Until the Big Day!</div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-5xl font-black animate-pulse" style="color: ${accent}">
                                        🎓 It's Graduation Day! 🎊🎉
                                    </div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'boxed-digits':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-5xl mb-4">⏰</div>
                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="inline-block">
                                        <div class="flex gap-4 mb-6">
                                            ${diff.toString().split('').map(digit => `
                                                <div class="w-24 h-32 rounded-2xl shadow-xl flex items-center justify-center border-4" style="background: white; border-color: ${accent}">
                                                    <div class="text-7xl font-black" style="color: ${accent}">${digit}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="px-6 py-3 rounded-full text-white font-bold text-xl" style="background: ${accent}">
                                            DAY${diff !== 1 ? 'S' : ''} REMAINING
                                        </div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="text-5xl mb-4">⏰</div>
                            <h2 class="text-2xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                            ${data.subtitle ? `<p class="text-gray-600 mb-6">${data.subtitle}</p>` : ''}
                            ${diff !== null ? (
                                diff > 0 ? `
                                    <div class="bg-white rounded-2xl p-8 shadow-lg inline-block">
                                        <div class="text-7xl font-bold mb-2" style="color: ${accent}">${diff}</div>
                                        <div class="text-xl text-gray-700 font-semibold">Day${diff !== 1 ? 's' : ''} Until Graduation!</div>
                                    </div>
                                ` : diff === 0 ? `
                                    <div class="text-4xl font-bold animate-pulse" style="color: ${accent}">It's Graduation Day! 🎓🎊</div>
                                ` : `
                                    <div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>
                                `
                            ) : '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
