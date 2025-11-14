// Menu/Food Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.menu = {
    name: '🍽️ Menu & Food',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Menu Highlights"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="menuTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Brief description of the food and drinks..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="menuDescription" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category 1 Name</label>
                <input type="text" placeholder="e.g., Appetizers"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="category1Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category 1 Items</label>
                <textarea placeholder="Item 1&#10;Item 2&#10;Item 3" rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="category1Items" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category 2 Name</label>
                <input type="text" placeholder="e.g., Main Course"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="category2Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category 2 Items</label>
                <textarea placeholder="Item 1&#10;Item 2&#10;Item 3" rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="category2Items" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category 3 Name</label>
                <input type="text" placeholder="e.g., Desserts"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="category3Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category 3 Items</label>
                <textarea placeholder="Item 1&#10;Item 2&#10;Item 3" rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="category3Items" onkeyup="updatePreview()"></textarea>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="columns">Columns</option>
                    <option value="list">List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const layoutStyle = style.layoutStyle || 'cards';
        const title = data.menuTitle || 'Menu & Food';

        const categories = [];
        if (data.category1Name && data.category1Items) {
            categories.push({
                name: data.category1Name,
                items: data.category1Items.split('\n').filter(item => item.trim())
            });
        }
        if (data.category2Name && data.category2Items) {
            categories.push({
                name: data.category2Name,
                items: data.category2Items.split('\n').filter(item => item.trim())
            });
        }
        if (data.category3Name && data.category3Items) {
            categories.push({
                name: data.category3Name,
                items: data.category3Items.split('\n').filter(item => item.trim())
            });
        }

        if (categories.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    ${data.menuDescription ? `<p class="text-gray-700 mb-6">${data.menuDescription}</p>` : ''}
                    <p class="text-gray-500">No menu items added yet</p>
                </div>
            `;
        }

        let categoriesHtml = '';
        if (layoutStyle === 'cards') {
            categoriesHtml = `
                <div class="grid md:grid-cols-${categories.length > 2 ? 3 : categories.length} gap-6 max-w-5xl mx-auto">
                    ${categories.map(category => `
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="text-xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${category.name}</h3>
                            <ul class="space-y-2">
                                ${category.items.map(item => `<li class="text-gray-700">• ${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'columns') {
            categoriesHtml = `
                <div class="grid md:grid-cols-${categories.length > 2 ? 3 : categories.length} gap-8 max-w-5xl mx-auto">
                    ${categories.map(category => `
                        <div>
                            <h3 class="text-xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${category.name}</h3>
                            <ul class="space-y-2">
                                ${category.items.map(item => `<li class="text-gray-700">• ${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            categoriesHtml = `
                <div class="max-w-3xl mx-auto space-y-8">
                    ${categories.map(category => `
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <h3 class="text-xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${category.name}</h3>
                            <ul class="space-y-2">
                                ${category.items.map(item => `<li class="text-gray-700">• ${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.menuDescription ? `<p class="text-gray-700 mb-12 text-center max-w-2xl mx-auto">${data.menuDescription}</p>` : ''}
                ${categoriesHtml}
            </div>
        `;
    }
};
