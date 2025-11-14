// Recipe Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.recipe = {
    name: '🍪 Holiday Recipe',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Recipe Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="recipeTitle"
                    placeholder="Grandma's Sugar Cookies"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="description"
                    rows="2"
                    placeholder="A cherished family recipe passed down for generations..."
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Prep Time</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="prepTime"
                    placeholder="20 minutes"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cook Time</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="cookTime"
                    placeholder="12-15 minutes"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ingredients (one per line)</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="ingredients"
                    rows="6"
                    placeholder="2 cups flour\n1 cup sugar\n1/2 cup butter\n2 eggs\n1 tsp vanilla"
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions (one per line)</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="instructions"
                    rows="6"
                    placeholder="1. Preheat oven to 350°F\n2. Mix dry ingredients...\n3. Add wet ingredients..."
                    oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="bgColor"
                    value="#fef3c7"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#78350f"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#fef3c7';
        const textColor = style.textColor || '#78350f';
        const textAlign = style.textAlign || 'left';
        const recipeTitle = data.recipeTitle || 'Holiday Recipe';
        const description = data.description || '';
        const prepTime = data.prepTime || '';
        const cookTime = data.cookTime || '';
        const ingredients = data.ingredients ? data.ingredients.split('\n').filter(i => i.trim()) : [];
        const instructions = data.instructions ? data.instructions.split('\n').filter(i => i.trim()) : [];

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">🍪 ${recipeTitle}</h2>
                    ${description ? `<p style="margin-bottom: 24px; opacity: 0.9;">${description}</p>` : ''}

                    ${prepTime || cookTime ? `
                        <div style="display: flex; gap: 24px; margin-bottom: 24px; justify-content: ${textAlign};">
                            ${prepTime ? `<div><strong>⏱️ Prep:</strong> ${prepTime}</div>` : ''}
                            ${cookTime ? `<div><strong>🔥 Cook:</strong> ${cookTime}</div>` : ''}
                        </div>
                    ` : ''}

                    ${ingredients.length > 0 ? `
                        <div style="margin-bottom: 24px; text-align: left;">
                            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 12px;">Ingredients</h3>
                            <ul style="list-style: disc; padding-left: 24px; line-height: 1.8;">
                                ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${instructions.length > 0 ? `
                        <div style="text-align: left;">
                            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 12px;">Instructions</h3>
                            <ol style="list-style: decimal; padding-left: 24px; line-height: 1.8;">
                                ${instructions.map(inst => `<li style="margin-bottom: 8px;">${inst}</li>`).join('')}
                            </ol>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
