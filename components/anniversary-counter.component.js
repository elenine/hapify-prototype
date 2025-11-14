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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#e0e7ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgEnd" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Counter Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="counterStyle" onchange="updatePreview()">
                    <option value="digital" selected>Digital Counter</option>
                    <option value="cards">Flip Cards</option>
                    <option value="minimal">Minimal</option>
                </select>
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

        let counterHTML = '';

        if (counterStyle === 'digital') {
            counterHTML = `
                <div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                    <div class="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl text-center">
                        <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">${years}</div>
                        <div class="text-gray-700 font-semibold">Years</div>
                    </div>
                    <div class="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl text-center">
                        <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">${months}</div>
                        <div class="text-gray-700 font-semibold">Months</div>
                    </div>
                    <div class="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl text-center">
                        <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">${days}</div>
                        <div class="text-gray-700 font-semibold">Days</div>
                    </div>
                </div>
                <div class="text-center bg-white/50 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
                    <p class="text-2xl text-gray-700">
                        <span class="font-bold text-rose-600">${totalDays.toLocaleString()}</span> days ${data.label || 'together'}
                    </p>
                </div>
            `;
        } else if (counterStyle === 'cards') {
            counterHTML = `
                <div class="flex flex-wrap justify-center gap-8 mb-6">
                    <div class="relative">
                        <div class="w-28 h-32 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl shadow-2xl flex flex-col items-center justify-center text-white transform -rotate-3 hover:rotate-0 transition">
                            <div class="text-4xl font-bold">${years}</div>
                            <div class="text-sm uppercase tracking-wide">Years</div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="w-28 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-2xl flex flex-col items-center justify-center text-white transform rotate-2 hover:rotate-0 transition">
                            <div class="text-4xl font-bold">${months}</div>
                            <div class="text-sm uppercase tracking-wide">Months</div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="w-28 h-32 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl shadow-2xl flex flex-col items-center justify-center text-white transform -rotate-2 hover:rotate-0 transition">
                            <div class="text-4xl font-bold">${days}</div>
                            <div class="text-sm uppercase tracking-wide">Days</div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-2xl text-gray-800 font-semibold">
                    ${totalDays.toLocaleString()} days ${data.label || 'together'} 💕
                </div>
            `;
        } else {
            counterHTML = `
                <div class="text-center max-w-3xl mx-auto">
                    <div class="text-7xl md:text-8xl font-black mb-4">
                        <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">${years}</span>
                        <span class="text-gray-400 text-5xl mx-2">:</span>
                        <span class="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">${months.toString().padStart(2, '0')}</span>
                        <span class="text-gray-400 text-5xl mx-2">:</span>
                        <span class="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">${days.toString().padStart(2, '0')}</span>
                    </div>
                    <div class="text-xl text-gray-600 mb-8">Years : Months : Days</div>
                    <div class="text-3xl text-gray-800 font-bold">
                        ${totalDays.toLocaleString()} days ${data.label || 'together'}
                    </div>
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
