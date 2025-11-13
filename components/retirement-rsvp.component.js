// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Join Our Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Please let us know if you can join us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ecfeff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                <p class="text-gray-600 mb-6">${data.message || "Let us know if you can join the celebration"}</p>
                ${data.deadline ? `<p class="text-sm text-gray-500 mb-6">Please respond by ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                <button class="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition">
                    RSVP Now
                </button>
            </div>
        </div>
    `
};
