// Birthday Cake Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.cake = {
    name: '🎂 Birthday Cake',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Title</label>
                <input type="text" placeholder="Make a Wish!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Image (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🎂</div>
                    <div class="text-sm text-gray-600">Upload cake photo</div>
                    <input type="file" class="hidden section-data" data-field="cakeImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Time to blow out the candles and make your dreams come true!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}; color: ${style.text || '#1f2937'}">
            ${data.cakeImage ?
                `<img src="${data.cakeImage}" class="w-64 h-64 rounded-2xl mx-auto mb-6 object-cover shadow-xl">` :
                `<div class="text-9xl mb-6">🎂</div>`
            }
            <h3 class="text-3xl font-bold mb-4" style="color: ${style.accent || globalStyles.primaryColor}">${data.title || 'Make a Wish!'}</h3>
            <p class="text-lg max-w-md mx-auto">${data.message || 'Time to blow out the candles!'}</p>
        </div>
    `
};
