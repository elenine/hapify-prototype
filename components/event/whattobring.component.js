// What to Bring Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.whattobring = {
    name: '🎒 What to Bring',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., What to Bring"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="bringTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Please bring the following items..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="bringIntro" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Items List (one per line)</label>
                <textarea placeholder="Sunscreen&#10;Swimsuit&#10;Towel&#10;Camera" rows="8"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="itemsList" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea placeholder="We'll provide snacks and drinks..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="bringNotes" onkeyup="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">List Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="listStyle" onchange="updatePreview()">
                    <option value="checklist">Checklist</option>
                    <option value="bullets">Bullet Points</option>
                    <option value="numbered">Numbered</option>
                    <option value="cards">Cards</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fce7f3';
        const listStyle = style.listStyle || 'checklist';
        const title = data.bringTitle || 'What to Bring';

        const items = data.itemsList ? data.itemsList.split('\n').filter(item => item.trim()) : [];

        if (items.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    ${data.bringIntro ? `<p class="text-gray-700 mb-6">${data.bringIntro}</p>` : ''}
                    <p class="text-gray-500">No items added yet</p>
                </div>
            `;
        }

        let itemsHtml = '';
        if (listStyle === 'checklist') {
            itemsHtml = `
                <ul class="max-w-2xl mx-auto space-y-3 text-left">
                    ${items.map(item => `
                        <li class="flex items-center gap-3 text-lg text-gray-700">
                            <span class="text-2xl">☑️</span> ${item}
                        </li>
                    `).join('')}
                </ul>
            `;
        } else if (listStyle === 'bullets') {
            itemsHtml = `
                <ul class="max-w-2xl mx-auto space-y-2 text-left list-disc list-inside">
                    ${items.map(item => `<li class="text-lg text-gray-700">${item}</li>`).join('')}
                </ul>
            `;
        } else if (listStyle === 'numbered') {
            itemsHtml = `
                <ol class="max-w-2xl mx-auto space-y-2 text-left list-decimal list-inside">
                    ${items.map(item => `<li class="text-lg text-gray-700">${item}</li>`).join('')}
                </ol>
            `;
        } else {
            itemsHtml = `
                <div class="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    ${items.map(item => `
                        <div class="bg-white p-4 rounded-lg shadow-md text-center">
                            <span class="text-lg font-semibold" style="color: ${globalStyles.primaryColor || '#059669'};">✓ ${item}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.bringIntro ? `<p class="text-gray-700 mb-8 text-center max-w-2xl mx-auto">${data.bringIntro}</p>` : ''}
                ${itemsHtml}
                ${data.bringNotes ? `<p class="text-gray-600 mt-8 text-center max-w-2xl mx-auto italic">${data.bringNotes}</p>` : ''}
            </div>
        `;
    }
};
