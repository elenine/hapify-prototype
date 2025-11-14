// Grandparents Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.grandparents = {
    name: '👴👵 Grandparents',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Maternal Grandmother</label>
                <input type="text" placeholder="Grandma Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="maternalGrandmother" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Maternal Grandfather</label>
                <input type="text" placeholder="Grandpa John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="maternalGrandfather" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Paternal Grandmother</label>
                <input type="text" placeholder="Nana Mary" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="paternalGrandmother" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Paternal Grandfather</label>
                <input type="text" placeholder="Papa Mike" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="paternalGrandfather" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Message</label>
                <textarea placeholder="Blessed with the best grandparents..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <div class="text-center text-4xl mb-4">👴👵</div>
                <h2 class="text-2xl font-bold text-center mb-6">Proud Grandparents</h2>
                ${data.message ? `<p class="text-center text-gray-600 mb-6 italic">${data.message}</p>` : ''}
                <div class="space-y-4">
                    ${(data.maternalGrandmother || data.maternalGrandfather) ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-teal-600 font-medium mb-2">Maternal Side</div>
                        <div class="space-y-1">
                            ${data.maternalGrandmother ? `<div class="text-sm">👵 ${data.maternalGrandmother}</div>` : ''}
                            ${data.maternalGrandfather ? `<div class="text-sm">👴 ${data.maternalGrandfather}</div>` : ''}
                        </div>
                    </div>` : ''}
                    ${(data.paternalGrandmother || data.paternalGrandfather) ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-teal-600 font-medium mb-2">Paternal Side</div>
                        <div class="space-y-1">
                            ${data.paternalGrandmother ? `<div class="text-sm">👵 ${data.paternalGrandmother}</div>` : ''}
                            ${data.paternalGrandfather ? `<div class="text-sm">👴 ${data.paternalGrandfather}</div>` : ''}
                        </div>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
