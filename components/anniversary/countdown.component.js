// Countdown Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown Timer',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Counting Down" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Target Date & Time</label>
                <input type="datetime-local" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="targetdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <input type="text" placeholder="Until we celebrate together!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        let countdownHTML = '<p class="text-gray-500">Set a target date</p>';

        if (data.targetdate) {
            const target = new Date(data.targetdate);
            const now = new Date();
            const diff = target - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                countdownHTML = `
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-white p-4 rounded-lg">
                            <div class="text-3xl font-bold text-red-600">${days}</div>
                            <div class="text-sm text-gray-600">Days</div>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                            <div class="text-3xl font-bold text-red-600">${hours}</div>
                            <div class="text-sm text-gray-600">Hours</div>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                            <div class="text-3xl font-bold text-red-600">${minutes}</div>
                            <div class="text-sm text-gray-600">Minutes</div>
                        </div>
                    </div>
                `;
            } else {
                countdownHTML = '<p class="text-2xl font-bold text-red-600">🎉 It\'s Time to Celebrate! 🎉</p>';
            }
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">⏰</div>
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Countdown'}</h2>
                    ${countdownHTML}
                    ${data.message ? `<p class="text-gray-700 mt-6">${data.message}</p>` : ''}
                </div>
            </div>
        `;
    }
};
