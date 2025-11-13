// Signature Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sign-off Message</label>
                <input type="text" placeholder="With love and warm wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="signoff" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="From: John & Family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right" selected>Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
            <div class="max-w-2xl mx-auto" style="text-align: ${style.align || 'right'}">
                ${data.signoff ? `<p class="text-lg mb-2 italic" style="color: ${globalStyles.textColor}">${data.signoff}</p>` : ''}
                <p class="text-xl font-semibold" style="color: ${globalStyles.primaryColor}">${data.name || 'Your Name'}</p>
            </div>
        </div>
    `
};
