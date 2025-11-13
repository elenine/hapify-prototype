// Menu Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.menu = {
    name: '🍰 Menu',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Menu Title</label>
                <input type="text" placeholder="Refreshments" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Menu Items (one per line)</label>
                <textarea placeholder="Appetizers&#10;Main Course&#10;Desserts&#10;Beverages" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Menu'}</h2>
            <div class="max-w-md mx-auto">
                ${data.items ? data.items.split('\n').filter(item => item.trim()).map(item => `
                    <div class="flex items-start gap-3 mb-3 p-3 bg-yellow-50 rounded-lg">
                        <div>🍰</div>
                        <div>${item}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add menu items</p>'}
            </div>
        </div>
    `
};
