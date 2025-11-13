// Hero Header Component for Event Invitation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎉 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                <input type="text" placeholder="Annual Tech Conference" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input type="text" placeholder="Join us for an inspiring event" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="text-center py-16 px-6" style="background: ${style.bg || '#059669'}; color: ${style.text || '#ffffff'}">
            ${data.image ? `<img src="${data.image}" class="w-full h-48 object-cover mb-6 rounded-lg">` : '<div class="text-6xl mb-4">🎉</div>'}
            <h1 class="text-3xl font-bold mb-2">${data.name || 'Event Name'}</h1>
            <p class="text-lg opacity-90">${data.tagline || 'Join us for an inspiring event'}</p>
        </div>
    `
};
