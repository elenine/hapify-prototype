// Hero Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎉 Hero Banner',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Recipient's Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Heading</label>
                <input type="text" placeholder="Congratulations!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="heading" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="On Your Amazing Achievement" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="text-center py-16 px-6" style="background: linear-gradient(135deg, ${style.bg || '#a855f7'} 0%, ${style.text ? 'rgba(217, 70, 239, 0.9)' : '#d946ef'} 100%); color: ${style.text || '#ffffff'}">
            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="w-32 h-32 rounded-full mx-auto mb-6 bg-white bg-opacity-20"></div>'}
            <div class="text-6xl mb-4">🎉</div>
            <h1 class="text-4xl font-bold mb-2">${data.heading || 'Congratulations!'}</h1>
            <p class="text-2xl font-semibold mb-2">${data.name || 'Name'}</p>
            <p class="text-lg opacity-90">${data.subtitle || 'On Your Amazing Achievement'}</p>
        </div>
    `
};
