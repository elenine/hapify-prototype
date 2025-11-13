// RSVP Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can join..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fdf2f8'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                <button class="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
                    RSVP Now
                </button>
            </div>
        </div>
    `
};
