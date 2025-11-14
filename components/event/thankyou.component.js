// Thank You Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '💝 Thank You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="e.g., Thank You"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="thankyouTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Thank you for celebrating with us..." rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="thankyouMessage" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">From (Optional)</label>
                <input type="text" placeholder="e.g., Sarah & Family"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="thankyouFrom" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="thankyouStyle" onchange="updatePreview()">
                    <option value="elegant">Elegant</option>
                    <option value="warm">Warm</option>
                    <option value="simple">Simple</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const thankyouStyle = style.thankyouStyle || 'elegant';
        const title = data.thankyouTitle || 'Thank You';

        if (!data.thankyouMessage) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-gray-500">No thank you message yet</p>
                </div>
            `;
        }

        let content = '';
        if (thankyouStyle === 'elegant') {
            content = `
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-6xl mb-6">💝</div>
                    <h2 class="text-5xl font-serif italic mb-8" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-2xl text-gray-700 leading-relaxed mb-6">${data.thankyouMessage}</p>
                    ${data.thankyouFrom ? `<p class="text-xl text-gray-600 font-serif italic">— ${data.thankyouFrom}</p>` : ''}
                </div>
            `;
        } else if (thankyouStyle === 'warm') {
            content = `
                <div class="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl text-center">
                    <div class="text-5xl mb-4">🙏</div>
                    <h2 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-xl text-gray-700 leading-relaxed mb-6">${data.thankyouMessage}</p>
                    ${data.thankyouFrom ? `<p class="text-lg text-gray-600">— ${data.thankyouFrom}</p>` : ''}
                </div>
            `;
        } else {
            content = `
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">${data.thankyouMessage}</p>
                    ${data.thankyouFrom ? `<p class="text-gray-600">— ${data.thankyouFrom}</p>` : ''}
                </div>
            `;
        }

        return `
            <div class="py-20 px-6" style="background-color: ${bgColor};">
                ${content}
            </div>
        `;
    }
};
