// Special Message Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '💬 Special Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Title</label>
                <input type="text" placeholder="A Special Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea placeholder="Write your birthday wishes..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
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
    render: (data, style) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-6">${data.title || 'A Special Message'}</h2>
                <p class="text-gray-600 leading-relaxed">${data.message || 'Write your birthday wishes here...'}</p>
            </div>
        </div>
    `
};
