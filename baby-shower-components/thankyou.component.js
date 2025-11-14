// Thank You Message Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '💖 Thank You Message',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Thank You!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea rows="4" placeholder="We're so grateful for your love and support as we prepare to welcome our little one. Your presence at our baby shower means the world to us!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sign Off</label>
                <input type="text" placeholder="With love, Sarah & John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="signOff" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fce7f3'}">
            <div class="max-w-2xl mx-auto text-${style.align || 'center'}">
                <div class="mb-6 flex justify-${style.align || 'center'}">
                    <div class="text-6xl">💖</div>
                </div>
                <h2 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#f59e0b'}">${data.title || 'Thank You!'}</h2>
                ${data.message ? `<p class="text-gray-700 text-lg leading-relaxed mb-6">${data.message}</p>` : '<p class="text-gray-500 mb-6">Add your thank you message here...</p>'}
                ${data.signOff ? `<p class="text-gray-600 italic font-medium mt-8">${data.signOff}</p>` : ''}
            </div>
        </div>
    `
};
