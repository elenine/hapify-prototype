// Vow Renewal Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.vowrenewal = {
    name: '💍 Vow Renewal',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Renewing Our Vows" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ceremony Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Message</label>
                <textarea placeholder="Join us as we renew our commitment..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
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
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <div class="text-5xl mb-4">💍</div>
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Vow Renewal'}</h2>
                ${data.time ? `<p class="text-lg text-gray-700 mb-4">Ceremony at ${data.time}</p>` : ''}
                ${data.message ? `<p class="text-gray-600 px-4">${data.message}</p>` : ''}
            </div>
        </div>
    `
};
