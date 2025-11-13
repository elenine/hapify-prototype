// Birthday Wish Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wish = {
    name: '🌟 Birthday Wish',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Title</label>
                <input type="text" placeholder="May All Your Wishes Come True" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Message</label>
                <textarea placeholder="Here's to another year of wonderful adventures, beautiful memories, and endless happiness!" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="wish" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6">
            <div class="max-w-xl mx-auto p-8 rounded-lg border-4" style="background: ${style.bg || '#fef3c7'}; border-color: ${style.border || '#f59e0b'}">
                <div class="text-center">
                    <div class="text-4xl mb-4">🌟</div>
                    ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.textColor}">${data.title}</h3>` : ''}
                    <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor}">${data.wish || 'Your birthday wish goes here...'}</p>
                </div>
            </div>
        </div>
    `
};
