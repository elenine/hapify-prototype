// Gift Registry Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Registry',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Gift Suggestions"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="giftsTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your presence is the best gift..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="giftsMessage" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1 Name</label>
                <input type="text" placeholder="e.g., Amazon Registry"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="registry1Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 1 URL</label>
                <input type="url" placeholder="https://..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="registry1Url" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 Name</label>
                <input type="text" placeholder="e.g., Target Registry"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="registry2Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link 2 URL</label>
                <input type="url" placeholder="https://..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="registry2Url" onkeyup="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid">Solid</option>
                    <option value="outline">Outline</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const buttonStyle = style.buttonStyle || 'solid';
        const title = data.giftsTitle || 'Gift Registry';

        const buttonClasses = {
            solid: `px-6 py-3 rounded-lg font-semibold text-white`,
            outline: `px-6 py-3 rounded-lg font-semibold border-2`,
            minimal: `px-6 py-3 font-semibold underline`
        };

        const registries = [];
        if (data.registry1Name && data.registry1Url) {
            registries.push({ name: data.registry1Name, url: data.registry1Url });
        }
        if (data.registry2Name && data.registry2Url) {
            registries.push({ name: data.registry2Name, url: data.registry2Url });
        }

        const buttonColor = globalStyles.primaryColor || '#059669';
        const registriesHtml = registries.map(reg => {
            let buttonStyleAttr = '';
            if (buttonStyle === 'solid') {
                buttonStyleAttr = `background-color: ${buttonColor};`;
            } else if (buttonStyle === 'outline') {
                buttonStyleAttr = `border-color: ${buttonColor}; color: ${buttonColor};`;
            } else {
                buttonStyleAttr = `color: ${buttonColor};`;
            }

            return `
                <a href="${reg.url}" target="_blank" class="${buttonClasses[buttonStyle]}" style="${buttonStyleAttr}">
                    🎁 ${reg.name}
                </a>
            `;
        }).join('');

        return `
            <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.giftsMessage ? `<p class="text-gray-700 mb-8 max-w-2xl mx-auto">${data.giftsMessage}</p>` : ''}
                ${registriesHtml ? `<div class="flex flex-wrap gap-4 justify-center">${registriesHtml}</div>` : '<p class="text-gray-500">No registry links added yet</p>'}
            </div>
        `;
    }
};
