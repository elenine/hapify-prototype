// Hero Greeting Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎂 Hero Greeting',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Recipient's Name</label>
                <input type="text" placeholder="Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Greeting</label>
                <input type="text" placeholder="Happy Birthday!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="greeting" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="text-center py-16 px-6" style="background: ${style.bg || globalStyles.primaryColor}; color: ${style.text || '#ffffff'}">
            ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="w-40 h-40 rounded-full mx-auto mb-6 bg-white bg-opacity-20 flex items-center justify-center text-6xl">🎂</div>'}
            <h1 class="text-4xl font-bold mb-4">${data.greeting || 'Happy Birthday!'}</h1>
            <p class="text-3xl font-semibold">${data.name || 'Name'}</p>
        </div>
    `
};
