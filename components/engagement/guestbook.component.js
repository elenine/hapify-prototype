// Guestbook Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.guestbook = {
    name: '✍️ Guestbook',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Leave Us a Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Share your congratulations and well wishes!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Form Link (Optional)</label>
                <input type="url" placeholder="https://forms.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="formLink" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Link to your guestbook form (Google Forms, Typeform, etc.)</p>
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
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-md mx-auto text-center">
                    <div class="text-5xl mb-4">✍️</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Leave Us a Message'}</h2>
                    ${data.description ? `<p class="text-gray-600 mb-8">${data.description}</p>` : ''}

                    <div class="p-8 bg-rose-50 rounded-lg border-2 border-dashed border-rose-200">
                        ${data.formLink ? `
                            <a href="${data.formLink}" target="_blank" class="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition">
                                📝 Sign Our Guestbook
                            </a>
                        ` : `
                            <div class="text-gray-500">
                                <div class="text-3xl mb-2">💌</div>
                                <p class="text-sm">Guestbook form will be linked here</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
};
