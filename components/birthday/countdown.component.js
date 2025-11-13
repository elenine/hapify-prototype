// Countdown Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label>
                <input type="text" placeholder="Days Until Birthday" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Target Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        let countdown = '';
        if (data.date) {
            const target = new Date(data.date);
            const now = new Date();
            const diff = Math.floor((target - now) / (1000 * 60 * 60 * 24));
            countdown = diff > 0 ? `<div class="text-6xl font-bold text-pink-600 mb-2">${diff}</div><div class="text-lg text-gray-600">Days to go!</div>` : '<div class="text-2xl font-bold text-pink-600">It\'s Today! 🎉</div>';
        }
        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Countdown'}</h2>
                    <div class="text-5xl mb-4">⏰</div>
                    ${countdown || '<p class="text-gray-500">Set a date to see countdown</p>'}
                </div>
            </div>
        `;
    }
};
