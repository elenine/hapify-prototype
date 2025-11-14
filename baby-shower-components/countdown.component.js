// Countdown Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.countdown = {
    name: '⏰ Countdown',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label>
                <input type="text" placeholder="Days Until Baby Shower!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#92400e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fef3c7'}; color: ${style.textColor || '#92400e'}">
            <h2 class="text-2xl font-bold mb-8">${data.title || 'Countdown to Baby Shower!'}</h2>
            <div class="max-w-2xl mx-auto">
                <div class="grid grid-cols-4 gap-4">
                    <div class="bg-white bg-opacity-50 rounded-lg p-4">
                        <div class="text-3xl font-bold">00</div>
                        <div class="text-sm mt-1">Days</div>
                    </div>
                    <div class="bg-white bg-opacity-50 rounded-lg p-4">
                        <div class="text-3xl font-bold">00</div>
                        <div class="text-sm mt-1">Hours</div>
                    </div>
                    <div class="bg-white bg-opacity-50 rounded-lg p-4">
                        <div class="text-3xl font-bold">00</div>
                        <div class="text-sm mt-1">Minutes</div>
                    </div>
                    <div class="bg-white bg-opacity-50 rounded-lg p-4">
                        <div class="text-3xl font-bold">00</div>
                        <div class="text-sm mt-1">Seconds</div>
                    </div>
                </div>
                ${data.date ? `<p class="mt-6 text-sm opacity-75">${data.date}${data.time ? ' at ' + data.time : ''}</p>` : ''}
            </div>
        </div>
    `
};
