// Menu Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.menu = {
    name: '🍰 Food & Menu',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Party Menu, Food & Drinks"
                       value="Party Menu"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Menu Description</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="description"
                          rows="2"
                          placeholder="Brief description of the menu..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Food Items</label>
                <p class="text-xs text-gray-500 mb-2">Enter one item per line</p>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="foodItems"
                          rows="6"
                          placeholder="Pizza&#10;Birthday Cake&#10;Fruit Platter&#10;Sandwiches&#10;Chips & Dips&#10;Ice Cream"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Beverages</label>
                <p class="text-xs text-gray-500 mb-2">Enter one beverage per line</p>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="beverages"
                          rows="4"
                          placeholder="Soft Drinks&#10;Juice Boxes&#10;Water&#10;Coffee & Tea"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="specialNotes"
                          rows="2"
                          placeholder="e.g., Vegetarian options available, Please inform us of allergies"
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#fffbeb"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#f59e0b"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="columns" selected>Two Columns</option>
                    <option value="list">List View</option>
                    <option value="cards">Card View</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#fffbeb';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#f59e0b';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'columns';

        if (!data.foodItems && !data.beverages) {
            return '';
        }

        const foodItems = data.foodItems ? data.foodItems.split('\n').filter(item => item.trim()) : [];
        const beverages = data.beverages ? data.beverages.split('\n').filter(item => item.trim()) : [];

        let contentHtml = '';

        if (layoutStyle === 'columns') {
            contentHtml = `
                <div class="grid md:grid-cols-2 gap-8">
                    ${foodItems.length > 0 ? `
                        <div class="bg-white bg-opacity-70 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-4 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🍕</span> Food
                            </h3>
                            <ul class="space-y-2">
                                ${foodItems.map(item => `
                                    <li class="flex items-center gap-2">
                                        <span class="text-pink-500">✓</span>
                                        <span>${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${beverages.length > 0 ? `
                        <div class="bg-white bg-opacity-70 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-4 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🥤</span> Beverages
                            </h3>
                            <ul class="space-y-2">
                                ${beverages.map(item => `
                                    <li class="flex items-center gap-2">
                                        <span class="text-pink-500">✓</span>
                                        <span>${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `;
        } else if (layoutStyle === 'list') {
            contentHtml = `
                <div class="space-y-6">
                    ${foodItems.length > 0 ? `
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🍕</span> Food
                            </h3>
                            <div class="space-y-2">
                                ${foodItems.map(item => `
                                    <div class="bg-white bg-opacity-70 rounded-lg p-3 flex items-center gap-2">
                                        <span class="text-pink-500">✓</span>
                                        <span>${item}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${beverages.length > 0 ? `
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🥤</span> Beverages
                            </h3>
                            <div class="space-y-2">
                                ${beverages.map(item => `
                                    <div class="bg-white bg-opacity-70 rounded-lg p-3 flex items-center gap-2">
                                        <span class="text-pink-500">✓</span>
                                        <span>${item}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        } else { // cards
            contentHtml = `
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${foodItems.map(item => `
                        <div class="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
                            <div class="text-3xl mb-2">🍽️</div>
                            <p class="font-medium">${item}</p>
                        </div>
                    `).join('')}
                    ${beverages.map(item => `
                        <div class="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
                            <div class="text-3xl mb-2">🥤</div>
                            <p class="font-medium">${item}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">🍰</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Party Menu'}
                        </h2>
                        ${data.description ? `
                            <p class="text-lg mt-3">${data.description}</p>
                        ` : ''}
                    </div>

                    ${contentHtml}

                    ${data.specialNotes ? `
                        <div class="mt-8 text-center bg-white bg-opacity-70 rounded-lg p-4">
                            <p class="text-sm italic" style="color: ${accentColor};">
                                💡 ${data.specialNotes}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
