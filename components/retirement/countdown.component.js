// Countdown Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown Timer',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Countdown to Retirement" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retirement Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="retirementDate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <input type="text" placeholder="Days until the big day!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Counter</option>
                    <option value="modern">Modern Card</option>
                    <option value="circular">Circular Badge</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="bold">Bold Display</option>
                    <option value="elegant">Elegant Timer</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        let daysRemaining = 0;
        if (data.retirementDate) {
            const targetDate = new Date(data.retirementDate);
            const today = new Date();
            const diffTime = targetDate - today;
            daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        const dateFormatted = data.retirementDate ? new Date(data.retirementDate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'classic':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-6">${data.title || 'Countdown to Retirement'}</h2>
                            <div class="bg-white rounded-lg shadow-lg p-8 mb-4">
                                <div class="text-6xl font-bold mb-2" style="color: ${accentColor};">${daysRemaining}</div>
                                <div class="text-xl font-semibold">Days</div>
                            </div>
                            ${data.message ? `<p class="text-lg opacity-80">${data.message}</p>` : ''}
                            ${dateFormatted ? `<p class="text-sm opacity-60 mt-4">Retirement Date: ${dateFormatted}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor}20 100%); color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Retirement'}</h2>
                            <div class="bg-white rounded-2xl shadow-xl p-10">
                                <div class="inline-block p-6 rounded-full mb-4" style="background: ${accentColor}20;">
                                    <div class="text-5xl font-black" style="color: ${accentColor};">${daysRemaining}</div>
                                </div>
                                <div class="text-xl font-bold mb-4">Days Remaining</div>
                                ${data.message ? `<p class="opacity-80">${data.message}</p>` : ''}
                                ${dateFormatted ? `
                                <div class="mt-6 pt-4 border-t" style="border-color: ${accentColor}20;">
                                    <p class="text-sm font-medium" style="color: ${accentColor};">${dateFormatted}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'circular':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Retirement'}</h2>
                            <div class="inline-block p-12 rounded-full shadow-2xl mb-6" style="background: ${accentColor};">
                                <div class="text-white">
                                    <div class="text-6xl font-black mb-2">${daysRemaining}</div>
                                    <div class="text-sm uppercase tracking-wider font-bold">Days</div>
                                </div>
                            </div>
                            ${data.message ? `<p class="text-lg font-medium mb-4">${data.message}</p>` : ''}
                            ${dateFormatted ? `<p class="text-sm opacity-70">${dateFormatted}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-light mb-2">${data.title || 'Countdown to Retirement'}</h2>
                            <div class="w-16 h-0.5 mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="mb-6">
                                <div class="text-7xl font-light mb-2" style="color: ${accentColor};">${daysRemaining}</div>
                                <div class="text-lg font-medium">Days</div>
                            </div>
                            ${data.message ? `<p class="opacity-80 mb-4">${data.message}</p>` : ''}
                            ${dateFormatted ? `<p class="text-sm opacity-60">${dateFormatted}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'bold':
                return `
                    <div class="py-16 px-6 text-center" style="background: ${accentColor}; color: white;">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-3xl font-black mb-8 uppercase tracking-wide">${data.title || 'Countdown to Retirement'}</h2>
                            <div class="text-8xl font-black mb-4">${daysRemaining}</div>
                            <div class="text-2xl font-bold uppercase tracking-widest mb-6">Days</div>
                            ${data.message ? `<p class="text-lg opacity-90 mb-4">${data.message}</p>` : ''}
                            ${dateFormatted ? `
                            <div class="inline-block px-6 py-2 rounded-full bg-white/20 mt-4">
                                <p class="text-sm font-medium">${dateFormatted}</p>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif">${data.title || 'Countdown to Retirement'}</h2>
                                <div class="w-24 h-0.5 mx-auto mt-3" style="background: ${accentColor};"></div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg p-8 mb-6">
                                <div class="text-6xl font-serif mb-2" style="color: ${accentColor};">${daysRemaining}</div>
                                <div class="text-lg font-medium uppercase tracking-wider">Days</div>
                            </div>
                            ${data.message ? `<p class="font-serif italic opacity-80 mb-4">${data.message}</p>` : ''}
                            ${dateFormatted ? `<p class="text-sm font-medium" style="color: ${accentColor};">${dateFormatted}</p>` : ''}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-6">${data.title || 'Countdown to Retirement'}</h2>
                            <div class="bg-white rounded-lg shadow-lg p-8 mb-4">
                                <div class="text-6xl font-bold mb-2" style="color: ${accentColor};">${daysRemaining}</div>
                                <div class="text-xl font-semibold">Days</div>
                            </div>
                            ${data.message ? `<p class="text-lg opacity-80">${data.message}</p>` : ''}
                            ${dateFormatted ? `<p class="text-sm opacity-60 mt-4">Retirement Date: ${dateFormatted}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
