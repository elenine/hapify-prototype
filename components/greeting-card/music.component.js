// Music Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.music = {
    name: '🎵 Music',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Music Title</label><input type="text" placeholder="Birthday Song" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Music URL (Spotify, SoundCloud, etc.)</label><input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="url" oninput="updatePreview()"></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}"><div class="max-w-xl mx-auto text-center"><div class="text-6xl mb-4">🎵</div>${data.title ? `<h3 class="text-xl font-bold mb-4" style="color: ${globalStyles.primaryColor}">${data.title}</h3>` : ''}<p class="text-gray-600">Music player will appear here</p></div></div>`
};
