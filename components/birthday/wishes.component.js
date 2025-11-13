// Birthday Wishes Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wishes = {
    name: '💝 Birthday Wishes',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Wishes Wall" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Leave your birthday wishes..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#f9fafb'}">
            <div class="max-w-md mx-auto">
                <div class="text-5xl mb-4">💝</div>
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Birthday Wishes Wall'}</h2>
                <p class="text-gray-600 mb-6">${data.description || 'Share your birthday wishes and messages'}</p>
                <button class="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
                    Leave a Wish
                </button>
            </div>
        </div>
    `
};
