// Video Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.video = {
    name: '🎥 Video Message',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Video Title</label><input type="text" placeholder="Video Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Video URL (YouTube, Vimeo, etc.)</label><input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="url" oninput="updatePreview()"></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}"><div class="max-w-2xl mx-auto text-center">${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${globalStyles.primaryColor}">${data.title}</h3>` : ''}<div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center"><div class="text-4xl">🎥</div></div>${data.url ? `<p class="mt-4 text-sm text-gray-600">Video: ${data.url}</p>` : ''}</div></div>`
};
