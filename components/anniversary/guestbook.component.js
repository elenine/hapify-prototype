// Guestbook Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.guestbook = {
    name: '📖 Guest Messages',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Leave Your Wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea placeholder="Share your favorite memory or leave a special message for the couple..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Guest Messages'}</h2>
                <p class="text-gray-600 mb-6">${data.instructions || 'Share your favorite memory or leave a message for the couple'}</p>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <textarea placeholder="Write your message here..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 mb-3"></textarea>
                    <input type="text" placeholder="Your name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 mb-3">
                    <button class="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                        Submit Message
                    </button>
                </div>
            </div>
        </div>
    `
};
