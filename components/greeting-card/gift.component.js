// Gift Section Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gift = {
    name: '🎁 Gift Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Title</label>
                <input type="text" placeholder="A Special Gift for You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Image (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🎁</div>
                    <div class="text-sm text-gray-600">Upload gift photo</div>
                    <input type="file" class="hidden section-data" data-field="giftImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Description</label>
                <textarea placeholder="May this gift bring joy to your special day!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}; color: ${style.text || '#1f2937'}">
            <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${style.border || '#10b981'}">
                ${data.giftImage ?
                    `<img src="${data.giftImage}" class="w-48 h-48 rounded-xl mx-auto mb-6 object-cover shadow-lg">` :
                    `<div class="text-8xl mb-6">🎁</div>`
                }
                <h3 class="text-2xl font-bold mb-4">${data.title || 'A Special Gift for You'}</h3>
                <p class="text-lg leading-relaxed">${data.description || 'May this gift bring joy to your special day!'}</p>
            </div>
        </div>
    `
};
