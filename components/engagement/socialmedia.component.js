// Social Media Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.socialmedia = {
    name: '📱 Social Media',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Share the Love" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hashtag</label>
                <div class="relative">
                    <span class="absolute left-3 top-2.5 text-gray-500">#</span>
                    <input type="text" placeholder="SmithEngagement2024" class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="hashtag" oninput="updatePreview()">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Share your photos and memories using our hashtag!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instagram Handle (Optional)</label>
                <div class="relative">
                    <span class="absolute left-3 top-2.5 text-gray-500">@</span>
                    <input type="text" placeholder="couplehandle" class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="instagram" oninput="updatePreview()">
                </div>
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
    render: (data, style) => {
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-md mx-auto text-center">
                    <div class="text-5xl mb-4">📱</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Share the Love'}</h2>
                    ${data.message ? `<p class="text-gray-600 mb-6">${data.message}</p>` : ''}

                    ${data.hashtag ? `
                        <div class="mb-6 p-6 bg-white rounded-xl border-2 border-rose-200">
                            <div class="text-3xl font-bold text-rose-600 mb-2">#${data.hashtag}</div>
                            <p class="text-sm text-gray-600">Use this hashtag when sharing photos!</p>
                        </div>
                    ` : ''}

                    ${data.instagram ? `
                        <div class="flex items-center justify-center gap-2 text-gray-700">
                            <span class="text-2xl">📸</span>
                            <span>Follow us:</span>
                            <a href="https://instagram.com/${data.instagram}" target="_blank" class="font-semibold text-rose-600 hover:text-rose-700">@${data.instagram}</a>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
