// Countdown Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏳ Countdown',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Counting Down to Our Big Day" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Counting Down to Our Big Day" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="weddingDate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="weddingTime" value="15:00" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="We can't wait to celebrate with you!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Countdown Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="countdownStyle" oninput="updatePreview()">
                    <option value="boxes">Boxes</option>
                    <option value="simple">Simple</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const countdownStyle = style.countdownStyle || 'boxes';

        // Calculate time remaining
        let days = 0, hours = 0, minutes = 0, seconds = 0;

        if (data.weddingDate) {
            const weddingDateTime = new Date(data.weddingDate + 'T' + (data.weddingTime || '15:00'));
            const now = new Date();
            const diff = weddingDateTime - now;

            if (diff > 0) {
                days = Math.floor(diff / (1000 * 60 * 60 * 24));
                hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((diff % (1000 * 60)) / 1000);
            }
        }

        const renderCountdown = () => {
            switch(countdownStyle) {
                case 'boxes':
                    return `
                        <div class="flex justify-center gap-4 flex-wrap">
                            <div class="bg-white rounded-lg shadow-lg p-6 text-center min-w-[80px]">
                                <div class="text-4xl font-bold text-purple-600">${days}</div>
                                <div class="text-sm text-gray-600 mt-2">Days</div>
                            </div>
                            <div class="bg-white rounded-lg shadow-lg p-6 text-center min-w-[80px]">
                                <div class="text-4xl font-bold text-purple-600">${hours}</div>
                                <div class="text-sm text-gray-600 mt-2">Hours</div>
                            </div>
                            <div class="bg-white rounded-lg shadow-lg p-6 text-center min-w-[80px]">
                                <div class="text-4xl font-bold text-purple-600">${minutes}</div>
                                <div class="text-sm text-gray-600 mt-2">Minutes</div>
                            </div>
                            <div class="bg-white rounded-lg shadow-lg p-6 text-center min-w-[80px]">
                                <div class="text-4xl font-bold text-purple-600">${seconds}</div>
                                <div class="text-sm text-gray-600 mt-2">Seconds</div>
                            </div>
                        </div>
                    `;
                case 'simple':
                    return `
                        <div class="text-center">
                            <div class="text-6xl font-bold text-purple-700 mb-2">
                                ${days}<span class="text-3xl">d</span>
                                ${hours}<span class="text-3xl">h</span>
                                ${minutes}<span class="text-3xl">m</span>
                                ${seconds}<span class="text-3xl">s</span>
                            </div>
                        </div>
                    `;
                case 'elegant':
                    return `
                        <div class="text-center space-y-4">
                            <div class="text-7xl font-serif font-bold text-purple-700">${days}</div>
                            <div class="text-xl text-gray-700 font-medium">Days Until Forever</div>
                            <div class="text-sm text-gray-600">${hours} hours, ${minutes} minutes, ${seconds} seconds</div>
                        </div>
                    `;
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fce7f3'}">
                <div class="max-w-4xl mx-auto text-center">
                    <div class="text-5xl mb-4">⏳</div>
                    <h2 class="text-3xl font-bold mb-8">${data.title || 'Counting Down to Our Big Day'}</h2>
                    ${data.weddingDate ? renderCountdown() : '<p class="text-gray-500">Set a wedding date to see the countdown</p>'}
                    ${data.message ? `<p class="text-gray-700 mt-8 text-lg">${data.message}</p>` : ''}
                </div>
            </div>
        `;
    }
};
