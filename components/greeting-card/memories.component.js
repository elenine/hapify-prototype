// Memories Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.memories = {
    name: '🎈 Memories',
    allowMultiple: false,
    info: (id) => `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Memories Title</label><input type="text" placeholder="Cherished Moments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Memory Story</label><textarea placeholder="Share a favorite memory..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="memory" oninput="updatePreview()"></textarea></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#dbeafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#dbeafe'}"><div class="max-w-2xl mx-auto">${data.title ? `<h3 class="text-2xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor}">${data.title}</h3>` : ''}<p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor}">${data.memory || 'Share your cherished memories...'}</p></div></div>`
};
