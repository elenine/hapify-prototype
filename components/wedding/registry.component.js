// Registry Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.registry = {
    name: '🎁 Gift Registry',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Gift Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Gift Registry" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your presence is the best present..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Store 1</label>
                <input type="text" placeholder="E.g., Amazon" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="store1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="link1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Store 2 (Optional)</label>
                <input type="text" placeholder="E.g., Target" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="store2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 (Optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="link2" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff7ed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const buttonColor = style.buttonColor || '#9333ea';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fff7ed'}">
                <div class="max-w-md mx-auto text-center">
                    <div class="text-5xl mb-4">🎁</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                    ${data.message ? `<p class="text-gray-600 mb-6">${data.message}</p>` : ''}
                    <div class="space-y-3">
                        ${data.store1 ? `
                            <a href="${data.link1 || '#'}" target="_blank" class="block w-full py-3 px-6 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: ${buttonColor}">
                                ${data.store1}
                            </a>
                        ` : ''}
                        ${data.store2 ? `
                            <a href="${data.link2 || '#'}" target="_blank" class="block w-full py-3 px-6 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: ${buttonColor}">
                                ${data.store2}
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
