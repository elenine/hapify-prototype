// Celebrant/Guest of Honor Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebrant = {
    name: '🎂 Guest of Honor',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" placeholder="e.g., Sarah Johnson"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="celebrantName" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Age/Milestone</label>
                <input type="text" placeholder="e.g., Turning 30, Sweet 16"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="celebrantAge" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="celebrantPhoto" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bio/About</label>
                <textarea placeholder="Share a little about the guest of honor..." rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="celebrantBio" onkeyup="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb"
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="imageShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="square">Square</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#f9fafb';
        const textAlign = style.textAlign || 'center';
        const imageShape = style.imageShape || 'circle';

        const shapeClasses = {
            circle: 'rounded-full',
            rounded: 'rounded-2xl',
            square: 'rounded-none'
        };

        const photoHtml = data.celebrantPhoto ? `
            <img src="${data.celebrantPhoto}"
                alt="${data.celebrantName || 'Guest of Honor'}"
                class="w-48 h-48 object-cover ${shapeClasses[imageShape]} mx-auto mb-6 shadow-lg">
        ` : '';

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor}; text-align: ${textAlign};">
                ${photoHtml}
                ${data.celebrantName ? `<h2 class="text-4xl font-bold mb-2" style="color: ${globalStyles.primaryColor || '#059669'};">${data.celebrantName}</h2>` : ''}
                ${data.celebrantAge ? `<p class="text-xl text-gray-600 mb-6">${data.celebrantAge}</p>` : ''}
                ${data.celebrantBio ? `<p class="text-gray-700 max-w-2xl mx-auto leading-relaxed">${data.celebrantBio}</p>` : ''}
            </div>
        `;
    }
};
