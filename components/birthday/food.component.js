// Food & Menu Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.food = {
    name: '🍰 Food & Menu',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Food & Refreshments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Delicious treats await!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Menu Description</label>
                <textarea placeholder="We'll be serving:&#10;&#10;🎂 Birthday Cake&#10;🍕 Pizza&#10;🥤 Soft Drinks&#10;🍿 Snacks & Treats&#10;&#10;Vegetarian and gluten-free options available!" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="menu" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                <input type="text" placeholder="Please inform us of any dietary restrictions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="notes" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="simple">Simple List</option>
                    <option value="card">Card Style</option>
                    <option value="decorative">Decorative</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';

        if (layout === 'decorative') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fff7ed'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">🍰</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Food & Refreshments'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                            <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-center">${data.menu || 'Menu details coming soon...'}</div>
                            ${data.notes ? `<div class="mt-6 pt-6 border-t border-pink-200 text-center text-pink-600 font-medium">${data.notes}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fff7ed'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="bg-white rounded-xl p-8 shadow-md">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="text-5xl">🍰</div>
                                <div>
                                    <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Food & Refreshments'}</h3>
                                    ${data.subtitle ? `<p class="text-gray-600 mt-1">${data.subtitle}</p>` : ''}
                                </div>
                            </div>
                            <div class="text-gray-700 leading-relaxed whitespace-pre-line">${data.menu || 'Menu details coming soon...'}</div>
                            ${data.notes ? `<div class="mt-4 p-4 bg-orange-50 rounded-lg text-orange-800 text-sm">${data.notes}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fff7ed'}">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-5xl mb-4">🍰</div>
                    <h3 class="text-3xl font-bold mb-2 text-gray-900">${data.title || 'Food & Refreshments'}</h3>
                    ${data.subtitle ? `<p class="text-lg text-gray-600 mb-6">${data.subtitle}</p>` : ''}
                    <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${data.menu || 'Menu details coming soon...'}</div>
                    ${data.notes ? `<div class="mt-6 text-pink-600 font-medium">${data.notes}</div>` : ''}
                </div>
            </div>
        `;
    }
};
