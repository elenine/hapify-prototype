// Gallery Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.gallery = {
    name: '🖼️ Photo Gallery',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label><input type="text" placeholder="Photo Gallery" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><p class="text-sm text-gray-600">Add multiple photos to create a gallery</p></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#f3f4f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#f3f4f6'}"><div class="max-w-4xl mx-auto">${data.title ? `<h3 class="text-2xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor}">${data.title}</h3>` : ''}<div class="text-center text-gray-500"><p class="text-lg">Gallery photos will appear here</p></div></div></div>`
};
