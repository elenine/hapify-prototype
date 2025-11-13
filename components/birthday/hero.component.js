// Hero Header Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎂 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birthday Person's Name</label>
                <input type="text" placeholder="Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Age (Optional)</label>
                <input type="number" placeholder="25" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="age" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Celebration Message</label>
                <input type="text" placeholder="Happy Birthday!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="message" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
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
    render: (data, style) => `
        <div class="text-center py-16 px-6" style="background: ${style.bg || '#ec4899'}; color: ${style.text || '#ffffff'}">
            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white">` : '<div class="w-32 h-32 rounded-full mx-auto mb-6 bg-white bg-opacity-20"></div>'}
            <div class="text-6xl mb-4">🎂</div>
            <h1 class="text-3xl font-bold mb-2">${data.message || 'Happy Birthday!'}</h1>
            <p class="text-4xl font-bold">${data.name || 'Name'}</p>
            ${data.age ? `<p class="text-5xl font-bold mt-4">${data.age}</p>` : ''}
        </div>
    `
};
