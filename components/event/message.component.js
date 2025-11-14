// Special Message Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '💌 Special Message',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Title</label>
                <input type="text" placeholder="e.g., A Note from the Host"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="messageTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Text</label>
                <textarea placeholder="Your heartfelt message..." rows="6"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="messageText" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Signature (Optional)</label>
                <input type="text" placeholder="e.g., With love, John & Jane"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="messageSignature" onkeyup="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="messageStyle" onchange="updatePreview()">
                    <option value="card">Card</option>
                    <option value="quote">Quote</option>
                    <option value="simple">Simple</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const textAlign = style.textAlign || 'center';
        const messageStyle = style.messageStyle || 'card';

        if (!data.messageText) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${data.messageTitle || 'Special Message'}</h2>
                    <p class="text-gray-500">No message written yet</p>
                </div>
            `;
        }

        let messageHtml = '';
        if (messageStyle === 'card') {
            messageHtml = `
                <div class="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                    ${data.messageTitle ? `<h3 class="text-2xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#059669'};">${data.messageTitle}</h3>` : ''}
                    <p class="text-gray-700 leading-relaxed mb-6" style="text-align: ${textAlign};">${data.messageText}</p>
                    ${data.messageSignature ? `<p class="text-gray-600 italic" style="text-align: ${textAlign};">— ${data.messageSignature}</p>` : ''}
                </div>
            `;
        } else if (messageStyle === 'quote') {
            messageHtml = `
                <div class="max-w-2xl mx-auto">
                    ${data.messageTitle ? `<h3 class="text-2xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#059669'};">${data.messageTitle}</h3>` : ''}
                    <blockquote class="border-l-4 pl-6 italic text-xl text-gray-700 leading-relaxed mb-6" style="border-color: ${globalStyles.primaryColor || '#059669'}; text-align: ${textAlign};">
                        "${data.messageText}"
                    </blockquote>
                    ${data.messageSignature ? `<p class="text-gray-600" style="text-align: ${textAlign};">— ${data.messageSignature}</p>` : ''}
                </div>
            `;
        } else {
            messageHtml = `
                <div class="max-w-2xl mx-auto">
                    ${data.messageTitle ? `<h3 class="text-2xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#059669'};">${data.messageTitle}</h3>` : ''}
                    <p class="text-gray-700 leading-relaxed mb-6" style="text-align: ${textAlign};">${data.messageText}</p>
                    ${data.messageSignature ? `<p class="text-gray-600" style="text-align: ${textAlign};">— ${data.messageSignature}</p>` : ''}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor}; text-align: ${textAlign};">
                ${messageHtml}
            </div>
        `;
    }
};
