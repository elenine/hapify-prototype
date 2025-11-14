// Books for Baby Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.books = {
    name: '📚 Books for Baby',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Build Baby's Library" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea rows="3" placeholder="Instead of a card, please bring a book! Write a special message inside to help build our baby's library." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Note</label>
                <input type="text" placeholder="Your favorite childhood book, or a new adventure!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="note" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
            <div class="max-w-2xl mx-auto">
                <div class="rounded-xl shadow-lg p-8 text-center" style="background: ${style.cardBg || '#ffffff'}">
                    <div class="text-6xl mb-4">📚</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Books for Baby'}</h2>
                    ${data.message ? `<p class="text-gray-700 text-lg mb-4 leading-relaxed">${data.message}</p>` : '<p class="text-gray-500 mb-4">Add your message here...</p>'}
                    ${data.note ? `<div class="mt-6 pt-6 border-t border-gray-200"><p class="text-gray-600 italic">${data.note}</p></div>` : ''}
                </div>
            </div>
        </div>
    `
};
