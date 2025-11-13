// Poem Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.poem = {
    name: '📜 Poem',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Poem Title</label><input type="text" placeholder="Poem title" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Poem</label><textarea placeholder="Your poem..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="poem" oninput="updatePreview()"></textarea></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}"><div class="max-w-xl mx-auto text-center">${data.title ? `<h3 class="text-2xl font-bold mb-6" style="color: ${globalStyles.primaryColor}">${data.title}</h3>` : ''}<pre class="text-base leading-relaxed whitespace-pre-wrap font-sans" style="color: ${globalStyles.textColor}">${data.poem || 'Your poem here...'}</pre></div></div>`
};
