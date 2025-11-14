// Photo Gallery Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
    name: '🖼️ Photo Gallery',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                <input type="text" placeholder="Precious Moments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea rows="2" placeholder="Share special moments from the pregnancy journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-400 cursor-pointer">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload multiple photos</div>
                    <div class="text-xs text-gray-500 mt-1">(Ultrasound, pregnancy photos, nursery setup, etc.)</div>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Layout</option>
                    <option value="masonry">Masonry Layout</option>
                    <option value="carousel">Carousel</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-bold text-center mb-2">${data.title || 'Photo Gallery'}</h2>
                ${data.description ? `<p class="text-center text-gray-600 mb-8">${data.description}</p>` : ''}
                <div class="max-w-md mx-auto text-center">
                    <div class="text-5xl mb-4">🖼️📸</div>
                    <p class="text-gray-500 text-sm">Photos will appear here</p>
                    <p class="text-gray-400 text-xs mt-2">Upload ultrasound images, pregnancy photos, or nursery preparations</p>
                </div>
            </div>
        </div>
    `
};
