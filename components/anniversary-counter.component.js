// Anniversary Counter Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['anniversary-counter'] = {
    name: '⏱️ Anniversary Counter',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Time Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Time Together" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Start Date (when you met/started dating)</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="startDate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Relationship Label</label>
                <input type="text" placeholder="Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="label" value="Together" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sweet Message</label>
                <textarea placeholder="And counting every moment..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Counter Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="counterStyle" onchange="updatePreview()">
                    <option value="digital" selected>Digital Counter</option>
                    <option value="cards">Flip Cards</option>
                    <option value="minimal">Minimal</option>
                    <option value="circles">Circle Counters</option>
                    <option value="blocks">Block Style</option>
                    <option value="neon">Neon Signs</option>
                    <option value="vintage">Vintage Odometer</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#e0e7ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgEnd" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const startDate = data.startDate ? new Date(data.startDate) : new Date();
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        const bgStart = style.bgStart || '#fce7f3';
        const bgEnd = style.bgEnd || '#e0e7ff';
        const counterStyle = style.counterStyle || 'digital';
        const accentColor = style.accent || '#ec4899';

        let counterHTML = '';

        if (counterStyle === 'digital') {
            counterHTML = `
                <div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                    <div class="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl text-center">
                        <div class="text-5xl md:text-6xl font-bold mb-2" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${years}</div>
                        <div class="text-gray-700 font-semibold">Years</div>
                    </div>
                    <div class="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl text-center">
                        <div class="text-5xl md:text-6xl font-bold mb-2" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${months}</div>
                        <div class="text-gray-700 font-semibold">Months</div>
                    </div>
                    <div class="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl text-center">
                        <div class="text-5xl md:text-6xl font-bold mb-2" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${days}</div>
                        <div class="text-gray-700 font-semibold">Days</div>
                    </div>
                </div>
                <div class="text-center bg-white/50 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
                    <p class="text-2xl text-gray-700">
                        <span class="font-bold" style="color: ${accentColor}">${totalDays.toLocaleString()}</span> days ${data.label || 'together'}
                    </p>
                </div>
            `;
        } else if (counterStyle === 'cards') {
            counterHTML = `
                <div class="flex flex-wrap justify-center gap-8 mb-6">
                    <div class="relative">
                        <div class="w-28 h-32 rounded-xl shadow-2xl flex flex-col items-center justify-center text-white transform -rotate-3 hover:rotate-0 transition" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            <div class="text-4xl font-bold">${years}</div>
                            <div class="text-sm uppercase tracking-wide">Years</div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="w-28 h-32 rounded-xl shadow-2xl flex flex-col items-center justify-center text-white transform rotate-2 hover:rotate-0 transition" style="background: linear-gradient(135deg, ${accentColor}dd, ${accentColor});">
                            <div class="text-4xl font-bold">${months}</div>
                            <div class="text-sm uppercase tracking-wide">Months</div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="w-28 h-32 rounded-xl shadow-2xl flex flex-col items-center justify-center text-white transform -rotate-2 hover:rotate-0 transition" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            <div class="text-4xl font-bold">${days}</div>
                            <div class="text-sm uppercase tracking-wide">Days</div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-2xl text-gray-800 font-semibold">
                    ${totalDays.toLocaleString()} days ${data.label || 'together'} 💕
                </div>
            `;
        } else if (counterStyle === 'minimal') {
            counterHTML = `
                <div class="text-center max-w-3xl mx-auto">
                    <div class="text-7xl md:text-8xl font-black mb-4">
                        <span style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${years}</span>
                        <span class="text-gray-400 text-5xl mx-2">:</span>
                        <span style="background: linear-gradient(to right, ${accentColor}dd, ${accentColor}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${months.toString().padStart(2, '0')}</span>
                        <span class="text-gray-400 text-5xl mx-2">:</span>
                        <span style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${days.toString().padStart(2, '0')}</span>
                    </div>
                    <div class="text-xl text-gray-600 mb-8">Years : Months : Days</div>
                    <div class="text-3xl text-gray-800 font-bold">
                        ${totalDays.toLocaleString()} days ${data.label || 'together'}
                    </div>
                </div>
            `;
        } else if (counterStyle === 'circles') {
            counterHTML = `
                <div class="flex flex-wrap justify-center gap-8 mb-8">
                    <div class="flex flex-col items-center">
                        <div class="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            <div class="text-5xl font-bold">${years}</div>
                            <div class="text-sm uppercase tracking-wide">Years</div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}dd, ${accentColor});">
                            <div class="text-5xl font-bold">${months}</div>
                            <div class="text-sm uppercase tracking-wide">Months</div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            <div class="text-5xl font-bold">${days}</div>
                            <div class="text-sm uppercase tracking-wide">Days</div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-2xl text-gray-800 font-bold">
                    ${totalDays.toLocaleString()} days ${data.label || 'together'}
                </div>
            `;
        } else if (counterStyle === 'blocks') {
            counterHTML = `
                <div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                    <div class="relative overflow-hidden rounded-2xl shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                        <div class="p-8 text-center text-white">
                            <div class="text-6xl font-black mb-3">${years}</div>
                            <div class="text-lg uppercase tracking-wider font-bold">Years</div>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}dd, ${accentColor});">
                        <div class="p-8 text-center text-white">
                            <div class="text-6xl font-black mb-3">${months}</div>
                            <div class="text-lg uppercase tracking-wider font-bold">Months</div>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                        <div class="p-8 text-center text-white">
                            <div class="text-6xl font-black mb-3">${days}</div>
                            <div class="text-lg uppercase tracking-wider font-bold">Days</div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-2xl text-gray-800 font-bold">
                    ${totalDays.toLocaleString()} days ${data.label || 'together'}
                </div>
            `;
        } else if (counterStyle === 'neon') {
            counterHTML = `
                <div class="bg-gray-900 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto mb-8">
                    <div class="flex justify-center items-center gap-8 flex-wrap">
                        <div class="text-center">
                            <div class="text-7xl font-black mb-2" style="color: ${accentColor}; text-shadow: 0 0 20px ${accentColor}80, 0 0 40px ${accentColor}40;">${years}</div>
                            <div class="text-white text-lg uppercase tracking-wider">Years</div>
                        </div>
                        <div class="text-6xl text-white opacity-50">•</div>
                        <div class="text-center">
                            <div class="text-7xl font-black mb-2" style="color: ${accentColor}; text-shadow: 0 0 20px ${accentColor}80, 0 0 40px ${accentColor}40;">${months}</div>
                            <div class="text-white text-lg uppercase tracking-wider">Months</div>
                        </div>
                        <div class="text-6xl text-white opacity-50">•</div>
                        <div class="text-center">
                            <div class="text-7xl font-black mb-2" style="color: ${accentColor}; text-shadow: 0 0 20px ${accentColor}80, 0 0 40px ${accentColor}40;">${days}</div>
                            <div class="text-white text-lg uppercase tracking-wider">Days</div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-2xl text-gray-800 font-bold">
                    ${totalDays.toLocaleString()} days ${data.label || 'together'}
                </div>
            `;
        } else if (counterStyle === 'vintage') {
            counterHTML = `
                <div class="max-w-4xl mx-auto mb-8">
                    <div class="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-2xl" style="border: 8px solid ${accentColor}40;">
                        <div class="flex justify-center items-center gap-6 flex-wrap">
                            <div class="bg-white rounded-xl p-6 shadow-lg" style="border: 3px solid ${accentColor};">
                                <div class="text-6xl font-black mb-2" style="color: ${accentColor}; font-family: Georgia, serif;">${years.toString().padStart(2, '0')}</div>
                                <div class="text-gray-700 text-sm uppercase tracking-widest font-bold">Years</div>
                            </div>
                            <div class="text-5xl font-bold" style="color: ${accentColor};">:</div>
                            <div class="bg-white rounded-xl p-6 shadow-lg" style="border: 3px solid ${accentColor};">
                                <div class="text-6xl font-black mb-2" style="color: ${accentColor}; font-family: Georgia, serif;">${months.toString().padStart(2, '0')}</div>
                                <div class="text-gray-700 text-sm uppercase tracking-widest font-bold">Months</div>
                            </div>
                            <div class="text-5xl font-bold" style="color: ${accentColor};">:</div>
                            <div class="bg-white rounded-xl p-6 shadow-lg" style="border: 3px solid ${accentColor};">
                                <div class="text-6xl font-black mb-2" style="color: ${accentColor}; font-family: Georgia, serif;">${days.toString().padStart(2, '0')}</div>
                                <div class="text-gray-700 text-sm uppercase tracking-widest font-bold">Days</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-2xl text-gray-800 font-bold">
                    ${totalDays.toLocaleString()} days ${data.label || 'together'}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bgStart}, ${bgEnd})">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="text-6xl mb-4">⏱️</div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">${data.title || 'Time Together'}</h2>
                    </div>
                    ${counterHTML}
                    ${data.message ? `
                        <div class="text-center mt-8">
                            <p class="text-xl text-gray-700 italic">${data.message}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
