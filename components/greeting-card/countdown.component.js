// Countdown Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.countdown = {
    name: '⏰ Countdown',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Countdown Title</label><input type="text" placeholder="Days Until Birthday!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Birthday Date</label><input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="date" oninput="updatePreview()"></div></div>`,
    style: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label><input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()"></div></div>`,
    render: (data, style, globalStyles) => `<div class="py-12 px-6" style="background: ${style.bg || '#fce7f3'}"><div class="max-w-xl mx-auto text-center"><div class="text-6xl mb-4">⏰</div>${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.primaryColor}">${data.title}</h3>` : ''}<div class="text-5xl font-bold" style="color: ${globalStyles.primaryColor}">🎂</div><p class="mt-4 text-gray-600">${data.date || 'Set a date to see countdown'}</p></div></div>`
};
