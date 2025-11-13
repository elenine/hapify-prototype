// Quote Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.quote = {
    name: '💭 Quote',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Quote</label><textarea placeholder="A beautiful quote..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="quote" oninput="updatePreview()"></textarea></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Author</label><input type="text" placeholder="Author name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="author" oninput="updatePreview()"></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#ede9fe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#ede9fe'}"><div class="max-w-2xl mx-auto text-center"><p class="text-2xl italic mb-4" style="color: ${globalStyles.textColor}">"${data.quote || 'Your quote here...'}"</p>${data.author ? `<p class="text-lg" style="color: ${globalStyles.primaryColor}">— ${data.author}</p>` : ''}</div></div>`
};
