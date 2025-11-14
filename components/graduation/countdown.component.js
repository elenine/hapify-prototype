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
