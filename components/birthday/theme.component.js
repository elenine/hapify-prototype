// Theme Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.theme = {
    name: '🎨 Party Theme',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Name</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="themeName"
                       placeholder="e.g., Unicorn Magic, Superhero Adventure, Tropical Paradise"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Description</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="themeDescription"
                          rows="3"
                          placeholder="Describe the party theme and what guests can expect..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Colors</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="themeColors"
                       placeholder="e.g., Pink & Gold, Blue & Silver, Rainbow"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorations</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="decorations"
                          rows="3"
                          placeholder="Describe planned decorations (balloons, banners, centerpieces, etc.)"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Costume/Attire Suggestion</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="attireSuggestion"
                       placeholder="e.g., Dress as your favorite character, Wear themed colors"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Image (Optional)</label>
                <input type="file"
                       accept="image/*"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                       data-field="themeImage"
                       onchange="handleImageUpload(this)">
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
                       value="#fdf2f8"
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
                       value="#ec4899"
                       onchange="updatePreview()">
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
        const bgColor = style.bgColor || '#fdf2f8';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#ec4899';
        const padding = style.padding || 'py-12';

        if (!data.themeName && !data.themeDescription) {
            return '';
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">🎨</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.themeName || 'Party Theme'}
                        </h2>
                    </div>

                    ${data.themeImage ? `
                        <div class="mb-6 rounded-lg overflow-hidden">
                            <img src="${data.themeImage}" alt="Theme" class="w-full h-48 object-cover">
                        </div>
                    ` : ''}

                    ${data.themeDescription ? `
                        <p class="text-center text-lg mb-6 leading-relaxed">
                            ${data.themeDescription}
                        </p>
                    ` : ''}

                    <div class="grid md:grid-cols-2 gap-6">
                        ${data.themeColors ? `
                            <div class="bg-white bg-opacity-50 rounded-lg p-4">
                                <h3 class="font-semibold mb-2 flex items-center gap-2">
                                    <span>🎨</span> Theme Colors
                                </h3>
                                <p>${data.themeColors}</p>
                            </div>
                        ` : ''}

                        ${data.attireSuggestion ? `
                            <div class="bg-white bg-opacity-50 rounded-lg p-4">
                                <h3 class="font-semibold mb-2 flex items-center gap-2">
                                    <span>👗</span> Attire Suggestion
                                </h3>
                                <p>${data.attireSuggestion}</p>
                            </div>
                        ` : ''}
                    </div>

                    ${data.decorations ? `
                        <div class="mt-6 bg-white bg-opacity-50 rounded-lg p-4">
                            <h3 class="font-semibold mb-2 flex items-center gap-2">
                                <span>🎈</span> Decorations
                            </h3>
                            <p class="whitespace-pre-line">${data.decorations}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
