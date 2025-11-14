// Countdown Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown Timer',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date & Time</label>
                <input type="datetime-local"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="countdownDate" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading Text</label>
                <input type="text" placeholder="e.g., The Big Day Is Coming!"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="countdownHeading" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Counter Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="counterStyle" onchange="updatePreview()">
                    <option value="boxes">Boxes</option>
                    <option value="circles">Circles</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const counterStyle = style.counterStyle || 'boxes';
        const heading = data.countdownHeading || 'Countdown to the Event';

        // Parse the date
        let timeDisplay = '';
        if (data.countdownDate) {
            const eventDate = new Date(data.countdownDate);
            const now = new Date();
            const diff = eventDate - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                const counterClasses = {
                    boxes: 'bg-white rounded-xl shadow-lg p-6',
                    circles: 'bg-white rounded-full shadow-lg p-6 w-24 h-24 flex flex-col items-center justify-center',
                    minimal: 'p-4'
                };

                const itemClass = counterClasses[counterStyle];

                timeDisplay = `
                    <div class="flex gap-4 justify-center flex-wrap">
                        <div class="${itemClass}">
                            <div class="text-4xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${days}</div>
                            <div class="text-sm text-gray-600 mt-1">Days</div>
                        </div>
                        <div class="${itemClass}">
                            <div class="text-4xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${hours}</div>
                            <div class="text-sm text-gray-600 mt-1">Hours</div>
                        </div>
                        <div class="${itemClass}">
                            <div class="text-4xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${minutes}</div>
                            <div class="text-sm text-gray-600 mt-1">Minutes</div>
                        </div>
                        <div class="${itemClass}">
                            <div class="text-4xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${seconds}</div>
                            <div class="text-sm text-gray-600 mt-1">Seconds</div>
                        </div>
                    </div>
                `;
            } else {
                timeDisplay = `<div class="text-2xl font-semibold text-gray-700">🎉 The event has started!</div>`;
            }
        } else {
            timeDisplay = `<div class="text-gray-500">Please set an event date</div>`;
        }

        return `
            <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-8 text-gray-800">${heading}</h2>
                ${timeDisplay}
            </div>
        `;
    }
};
