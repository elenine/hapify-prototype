// Wishes/Guestbook Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wishes = {
    name: '✨ Wishes & Guestbook',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Leave Your Wishes"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="wishesTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea placeholder="Share your best wishes and memories..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="wishesInstructions" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guestbook Link (Optional)</label>
                <input type="url" placeholder="Link to external guestbook..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guestbookUrl" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="wishesStyle" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="simple">Simple</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#f0f9ff';
        const wishesStyle = style.wishesStyle || 'cards';
        const title = data.wishesTitle || 'Leave Your Wishes';

        const buttonHtml = data.guestbookUrl ? `
            <a href="${data.guestbookUrl}" target="_blank"
               class="inline-block px-8 py-3 rounded-lg font-semibold text-white mt-6"
               style="background-color: ${globalStyles.primaryColor || '#059669'};">
                📝 Sign the Guestbook
            </a>
        ` : '';

        return `
            <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.wishesInstructions ? `<p class="text-gray-700 mb-6 max-w-2xl mx-auto">${data.wishesInstructions}</p>` : ''}
                <div class="text-6xl mb-6">✨</div>
                ${buttonHtml}
            </div>
        `;
    }
};
