// Personal Note Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.note = {
    name: '💌 Personal Note',
    allowMultiple: true,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Note</label><textarea placeholder="A personal note..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="note" oninput="updatePreview()"></textarea></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-8 px-6" style="background: ${style.bg || '#fef2f2'}"><div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow"><p class="text-base leading-relaxed" style="color: ${globalStyles.textColor}">${data.note || 'Your personal note...'}</p></div></div>`
};
