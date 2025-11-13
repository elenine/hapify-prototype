// Footer Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.footer = {
    name: '🎉 Footer',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Footer Message</label><input type="text" placeholder="Made with ❤️" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label><input type="color" value="#6b7280" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()"></div></div>`,
    render: (data, style) => `<div class="py-8 px-6 text-center" style="background: ${style.bg || '#f9fafb'}; color: ${style.text || '#6b7280'}"><p class="text-sm">${data.message || 'Made with ❤️'}</p></div>`
};
