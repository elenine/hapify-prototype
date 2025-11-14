// Wishes Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wishes = {
    name: '💫 Well Wishes',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Send Your Wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea placeholder="Share your love and well wishes for our little one..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email (for wishes)</label>
                <input type="email" placeholder="wishes@email.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sample Wish 1</label>
                <textarea placeholder="May your life be filled with love and laughter!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sample1" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sample Wish 2</label>
                <textarea placeholder="Welcome to the world, little one!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sample2" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdfa'}">
            <div class="max-w-md mx-auto">
                <div class="text-center text-4xl mb-4">💫</div>
                <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Send Your Wishes'}</h2>
                ${data.instructions ? `<p class="text-center text-gray-600 mb-6">${data.instructions}</p>` : ''}
                ${data.email ? `
                <div class="bg-white p-4 rounded-lg mb-6 text-center">
                    <a href="mailto:${data.email}?subject=Well Wishes" class="text-teal-600 hover:text-teal-700 font-medium">
                        📧 Send Your Wishes
                    </a>
                </div>` : ''}
                <div class="space-y-3">
                    ${data.sample1 ? `
                    <div class="p-4 bg-white rounded-lg border-l-4 border-teal-400">
                        <p class="text-sm text-gray-700 italic">"${data.sample1}"</p>
                    </div>` : ''}
                    ${data.sample2 ? `
                    <div class="p-4 bg-white rounded-lg border-l-4 border-teal-400">
                        <p class="text-sm text-gray-700 italic">"${data.sample2}"</p>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
