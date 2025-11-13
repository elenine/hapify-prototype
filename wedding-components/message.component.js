// Message Component for Wedding Invitations

window.weddingSectionComponents = window.weddingSectionComponents || {};

window.weddingSectionComponents.message = {
    name: '💬 Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input type="text" placeholder="A Special Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="heading" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your message here..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
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
                <h2 class="text-2xl font-bold mb-6">${data.heading || 'A Special Message'}</h2>
                <p class="text-gray-600 leading-relaxed">${data.message || 'Your message here...'}</p>
            </div>
        </div>
    `
};
