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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        let countdown = '';
        if (data.date) {
            const target = new Date(data.date);
            const now = new Date();
            const diff = Math.floor((target - now) / (1000 * 60 * 60 * 24));

            if (diff > 0) {
                countdown = `
                    <div class="bg-white rounded-2xl p-8 shadow-lg inline-block">
                        <div class="text-7xl font-bold text-indigo-600 mb-2">${diff}</div>
                        <div class="text-xl text-gray-700 font-semibold">Day${diff !== 1 ? 's' : ''} Until Graduation!</div>
                    </div>
                `;
            } else if (diff === 0) {
                countdown = '<div class="text-4xl font-bold text-indigo-600 animate-pulse">It\'s Graduation Day! 🎓🎊</div>';
            } else {
                countdown = '<div class="text-2xl font-bold text-gray-600">The ceremony has passed 🎓</div>';
            }
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#eef2ff'}">
                <div class="max-w-lg mx-auto">
                    <div class="text-5xl mb-4">⏰</div>
                    <h2 class="text-2xl font-bold mb-3">${data.title || 'Days Until Graduation'}</h2>
                    ${data.subtitle ? `<p class="text-gray-600 mb-6">${data.subtitle}</p>` : ''}
                    ${countdown || '<p class="text-gray-500 text-lg">Set the graduation date to see the countdown</p>'}
                </div>
            </div>
        `;
    }
};
